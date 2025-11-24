import { NextResponse } from 'next/server';
import puppeteer, { Browser, Page } from 'puppeteer';
import * as cheerio from 'cheerio';
import { NormaLegal } from '@/types/scrape.types';
import connectMongoDB from '@/lib/mongodbConnection';
import Norma from '@/models/Norma';

const CATEGORIAS_PERMITIDAS = ['EDUCACION', 'INSTITUCIONES EDUCATIVAS'];

/**
 * Formatea fecha en formato DD/MM/YYYY (formato peruano)
 */
function formatearFechaPeruana(fecha: Date): string {
    const dia = String(fecha.getDate()).padStart(2, '0');
    const mes = String(fecha.getMonth() + 1).padStart(2, '0');
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
}

function obtenerUltimosDias(numDias: number = 2): Date[] {
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
 */
async function getBrowser(): Promise<Browser> {
    const browserlessToken = process.env.BROWSERLESS_TOKEN;

    if (browserlessToken) {
        console.log('Conectando a Browserless...');
        try {
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
        console.log('Iniciando nueva instancia de Puppeteer local...');
        return await puppeteer.launch({
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu'
            ]
        });
    }
}

/**
 * Scrapea las normas legales de una fecha específica
 */
async function scrapearFecha(page: Page, fecha: Date): Promise<NormaLegal[]> {
    const normas: NormaLegal[] = [];
    const fechaFormateada = formatearFechaPeruana(fecha);

    try {
        console.log(`Scrapeando fecha: ${fechaFormateada}`);

        if (page.url() !== 'https://diariooficial.elperuano.pe/Normas') {
            await page.goto('https://diariooficial.elperuano.pe/Normas', {
                waitUntil: 'networkidle2',
                timeout: 30000
            });
        }

        await page.waitForSelector('#cddesde', { timeout: 10000 });

        await page.evaluate(() => {
            (document.querySelector('#cddesde') as HTMLInputElement).value = '';
            (document.querySelector('#cdhasta') as HTMLInputElement).value = '';
        });

        await page.type('#cddesde', fechaFormateada);
        await page.type('#cdhasta', fechaFormateada);

        await page.click('#btnBuscar');

        try {
            await page.waitForSelector('.edicionesoficiales_articulos', { timeout: 10000 });
        } catch {
            console.log(`No se encontraron normas para la fecha ${fechaFormateada}`);
            return normas;
        }

        const html = await page.content();
        const $ = cheerio.load(html);

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
                const imagenPortadaCompleta = imagenPortada.startsWith('http')
                    ? imagenPortada
                    : imagenPortada.startsWith('../')
                        ? `https://diariooficial.elperuano.pe${imagenPortada.substring(2)}`
                        : imagenPortada.startsWith('/')
                            ? `https://diariooficial.elperuano.pe${imagenPortada}`
                            : `https://diariooficial.elperuano.pe/${imagenPortada}`;

                let descargaIndividual = '';
                let descargaCuadernillo = '';

                const inputs = $(element).find('.ediciones_botones input[data-url]');
                inputs.each((_, input) => {
                    const texto = $(input).attr('value')?.toLowerCase() || '';
                    const url = $(input).attr('data-url') || '';
                    if (texto.includes('individual')) descargaIndividual = url;
                    if (texto.includes('cuadernillo')) descargaCuadernillo = url;
                });

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
    }

    return normas;
}

/**
 * Realiza el scraping de los últimos días
 */
async function scrapearNormas(): Promise<NormaLegal[]> {
    const fechas = obtenerUltimosDias(5);
    const todasLasNormas: NormaLegal[] = [];
    let browser = null;

    try {
        browser = await getBrowser();
        const page = await browser.newPage();

        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        page.setDefaultNavigationTimeout(30000);
        page.setDefaultTimeout(30000);

        for (const fecha of fechas) {
            const normas = await scrapearFecha(page, fecha);
            todasLasNormas.push(...normas);
        }

        await page.close();

    } catch (error) {
        console.error('Error general en scraping:', error);
    } finally {
        if (browser) {
            await browser.close();
        }
    }

    return todasLasNormas;
}

/**
 * GET: Obtiene las normas almacenadas en MongoDB
 */
export async function GET() {
    try {
        await connectMongoDB();
        const normas = await Norma.find({}).sort({ createdAt: -1 }).limit(50); // Obtener las últimas 50 normas

        return NextResponse.json({
            success: true,
            data: normas,
        });

    } catch (error) {
        console.error('Error obteniendo normas de MongoDB:', error);
        return NextResponse.json({
            success: false,
            error: 'Error al obtener las normas',
        }, { status: 500 });
    }
}

/**
 * POST: Ejecuta el scraping y guarda en MongoDB
 */
export async function POST() {
    try {
        console.log('Iniciando scraping manual...');
        await connectMongoDB();

        const normas = await scrapearNormas();
        let guardadas = 0;

        for (const norma of normas) {
            // Usar upsert para evitar duplicados basados en tituloUrl
            const resultado = await Norma.updateOne(
                { tituloUrl: norma.tituloUrl },
                { $set: norma },
                { upsert: true }
            );
            if (resultado.upsertedCount > 0 || resultado.modifiedCount > 0) {
                guardadas++;
            }
        }

        return NextResponse.json({
            success: true,
            message: `Scraping completado. ${guardadas} normas nuevas o actualizadas.`,
            totalScraped: normas.length,
        });

    } catch (error) {
        console.error('Error en scraping POST:', error);
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : 'Error desconocido',
        }, { status: 500 });
    }
}
