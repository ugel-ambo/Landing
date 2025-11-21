import { NextResponse } from 'next/server';
import puppeteer, { Browser } from 'puppeteer';
import * as cheerio from 'cheerio';
import { NormaLegal, ScrapingCache, ScrapingResponse } from '@/types/scrape.types';


let cache: ScrapingCache | null = null;


let browserInstance: Browser | null = null;

// Categorías permitidas
const CATEGORIAS_PERMITIDAS = ['EDUCACION', 'INSTITUCIONES EDUCATIVAS'];

const HORARIOS_ACTUALIZACION = [
    { hora: 6, minutos: 30 },
    { hora: 13, minutos: 30 }
];


function calcularProximaActualizacion(): Date {
    const ahora = new Date();
    const hoy = new Date(ahora);

    for (const horario of HORARIOS_ACTUALIZACION) {
        const proximaActualizacion = new Date(hoy);
        proximaActualizacion.setHours(horario.hora, horario.minutos, 0, 0);

        if (proximaActualizacion > ahora) {
            return proximaActualizacion;
        }
    }

    const manana = new Date(hoy);
    manana.setDate(manana.getDate() + 1);
    manana.setHours(HORARIOS_ACTUALIZACION[0].hora, HORARIOS_ACTUALIZACION[0].minutos, 0, 0);

    return manana;
}

/**
 * Verifica si el cache es válido
 */
function esCacheValido(): boolean {
    if (!cache) return false;

    const ahora = new Date();
    const proximaActualizacion = new Date(cache.nextUpdate);

    return ahora < proximaActualizacion;
}

/**
 * Formatea fecha en formato DD/MM/YYYY (formato peruano)
 */
function formatearFechaPeruana(fecha: Date): string {
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
}


function obtenerUltimosDias(numDias: number = 5): Date[] {
    const fechas: Date[] = [];
    const hoy = new Date();

    for (let i = 0; i < numDias; i++) {
        const fecha = new Date(hoy);
        fecha.setDate(fecha.getDate() - i);
        fechas.push(fecha);
    }

    return fechas;
}

/**
 * Obtener instancia del navegador
 * En Browserless, NO reutilizamos la instancia para evitar errores 403
 */
async function getBrowser(): Promise<Browser> {
    const browserlessToken = process.env.BROWSERLESS_TOKEN;

    if (browserlessToken) {
        // Usar Browserless en producción - siempre crear nueva conexión
        console.log('Conectando a Browserless...');
        try {
            // Endpoint correcto según documentación de Browserless
            const browserWSEndpoint = `wss://production-sfo.browserless.io?token=${browserlessToken}`;
            const browser = await puppeteer.connect({
                browserWSEndpoint,
            });
            return browser;
        } catch (error) {
            console.error('Error conectando a Browserless:', error);
            throw new Error(`Browserless connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    } else {
        // Usar Puppeteer local en desarrollo - reutilizar instancia
        if (!browserInstance || !browserInstance.connected) {
            console.log('Iniciando nueva instancia de Puppeteer local...');
            browserInstance = await puppeteer.launch({
                headless: true,
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                    '--disable-dev-shm-usage',
                    '--disable-gpu'
                ]
            });
        }
        return browserInstance;
    }
}


/**
 * Scrapea las normas legales de una fecha específica usando Puppeteer
 */
async function scrapearFecha(fecha: Date): Promise<NormaLegal[]> {
    const normas: NormaLegal[] = [];
    const fechaFormateada = formatearFechaPeruana(fecha);

    let page;
    let browser;
    const usingBrowserless = !!process.env.BROWSERLESS_TOKEN;

    try {
        browser = await getBrowser();
        page = await browser.newPage();

        // Configurar timeout y user agent
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        page.setDefaultNavigationTimeout(30000);
        page.setDefaultTimeout(30000);

        console.log(`Scrapeando fecha: ${fechaFormateada}`);

        // 1. Navegar a la página base
        await page.goto('https://diariooficial.elperuano.pe/Normas', {
            waitUntil: 'networkidle2',
            timeout: 30000
        });

        // 2. Esperar a que los campos de fecha estén disponibles
        await page.waitForSelector('#cddesde', { timeout: 10000 });

        // 3. Limpiar y llenar el campo "Desde"
        await page.click('#cddesde', { clickCount: 3 }); // Seleccionar todo
        await page.type('#cddesde', fechaFormateada);

        // 4. Limpiar y llenar el campo "Hasta"
        await page.click('#cdhasta', { clickCount: 3 }); // Seleccionar todo
        await page.type('#cdhasta', fechaFormateada);

        // 5. Hacer clic en el botón Buscar
        await page.click('#btnBuscar');

        // 6. Esperar a que carguen los resultados o el mensaje de "no hay resultados"
        try {
            await page.waitForSelector('.edicionesoficiales_articulos', { timeout: 15000 });
        } catch (error) {
            console.log(`No se encontraron normas para la fecha ${fechaFormateada}`);
            return normas;
        }

        // 7. Obtener el contenido HTML de la página
        const html = await page.content();
        const $ = cheerio.load(html);

        // 8. Parsear normas con Cheerio (mismo código que antes)
        $('.edicionesoficiales_articulos').each((_, element) => {
            const categoria = $(element).find('.ediciones_texto h4').text().trim().toUpperCase();

            if (CATEGORIAS_PERMITIDAS.includes(categoria)) {
                const tituloElement = $(element).find('.ediciones_texto h5 a');
                const titulo = tituloElement.text().trim();
                const tituloUrl = tituloElement.attr('href') || '';

                const fechaTexto = $(element).find('.ediciones_texto p b').text().trim();

                const parrafos = $(element).find('.ediciones_texto p');
                const descripcion = parrafos.length > 1 ? $(parrafos[1]).text().trim() : '';

                const imagenPortada = $(element).find('.ediciones_pdf img').attr('src') || '';
                // Convertir path relativo a absoluto
                const imagenPortadaCompleta = imagenPortada.startsWith('http')
                    ? imagenPortada
                    : imagenPortada.startsWith('../')
                        ? `https://diariooficial.elperuano.pe${imagenPortada.substring(2)}` // Remover ../ y agregar dominio
                        : imagenPortada.startsWith('/')
                            ? `https://diariooficial.elperuano.pe${imagenPortada}`
                            : `https://diariooficial.elperuano.pe/${imagenPortada}`;

                // Extraer enlaces de descarga - soportar tanto <input> como <a>
                let descargaIndividual = '';
                let descargaCuadernillo = '';

                // Primero intentar con inputs (versión actual del sitio)
                const inputs = $(element).find('.ediciones_botones input[data-url]');
                inputs.each((_, input) => {
                    const texto = $(input).attr('value')?.toLowerCase() || '';
                    const url = $(input).attr('data-url') || '';

                    if (texto.includes('individual')) descargaIndividual = url;
                    if (texto.includes('cuadernillo')) descargaCuadernillo = url;
                });

                // Si no encontró con inputs, intentar con enlaces <a>
                if (!descargaIndividual && !descargaCuadernillo) {
                    const enlaces = $(element).find('.ediciones_botones a');
                    enlaces.each((_, a) => {
                        const texto = $(a).text().trim().toLowerCase();
                        const href = $(a).attr('href') || '';

                        if (texto.includes('individual')) descargaIndividual = href;
                        if (texto.includes('cuadernillo')) descargaCuadernillo = href;
                    });
                }

                normas.push({
                    categoria,
                    titulo,
                    tituloUrl: tituloUrl.startsWith('http') ? tituloUrl : `https://busquedas.elperuano.pe${tituloUrl}`,
                    fecha: fechaTexto,
                    descripcion,
                    imagenPortada: imagenPortadaCompleta,
                    descargaIndividual,
                    descargaCuadernillo,
                });
            }
        });

        console.log(`Encontradas ${normas.length} normas de educación para ${fechaFormateada}`);

    } catch (error) {
        console.error(`Error scrapeando fecha ${fechaFormateada}:`, error);
    } finally {
        // Cerrar la página
        if (page) {
            await page.close();
        }

        // Si estamos usando Browserless, cerrar el navegador después de cada scraping
        // Si es local, mantenerlo abierto para reutilizarlo
        if (usingBrowserless && browser) {
            await browser.close();
        }
    }

    return normas;
}

/**
 * Realiza el scraping de los últimos 5 días
 */
async function scrapearNormas(): Promise<NormaLegal[]> {
    const fechas = obtenerUltimosDias(5);
    const todasLasNormas: NormaLegal[] = [];

    try {
        for (const fecha of fechas) {
            const normas = await scrapearFecha(fecha);
            todasLasNormas.push(...normas);

            // Pequeña pausa entre fechas para no sobrecargar el servidor
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    } finally {
        // Cerrar el navegador al finalizar todo el scraping
        if (browserInstance) {
            await browserInstance.close();
            browserInstance = null;
        }
    }

    return todasLasNormas;
}

/**
 * GET handler para obtener las normas legales
 */
export async function GET() {
    try {
        if (esCacheValido() && cache) {
            const response: ScrapingResponse = {
                success: true,
                data: cache.data,
                cached: true,
                lastUpdated: cache.lastUpdated,
                nextUpdate: cache.nextUpdate,
            };

            return NextResponse.json(response);
        }

        console.log('Iniciando scraping de normas legales con Puppeteer...');
        const normas = await scrapearNormas();

        const ahora = new Date();
        const proximaActualizacion = calcularProximaActualizacion();

        cache = {
            data: normas,
            lastUpdated: ahora.toISOString(),
            nextUpdate: proximaActualizacion.toISOString(),
        };

        const response: ScrapingResponse = {
            success: true,
            data: normas,
            cached: false,
            lastUpdated: cache.lastUpdated,
            nextUpdate: cache.nextUpdate,
        };

        console.log(`Scraping completado. Encontradas ${normas.length} normas. Próxima actualización: ${proximaActualizacion.toLocaleString('es-PE')}`);

        return NextResponse.json(response);

    } catch (error) {
        console.error('Error en scraping:', error);

        if (browserInstance) {
            await browserInstance.close();
            browserInstance = null;
        }

        const response: ScrapingResponse = {
            success: false,
            data: [],
            cached: false,
            lastUpdated: new Date().toISOString(),
            nextUpdate: calcularProximaActualizacion().toISOString(),
            error: error instanceof Error ? error.message : 'Error desconocido',
        };

        return NextResponse.json(response, { status: 500 });
    }
}
