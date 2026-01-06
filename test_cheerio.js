const cheerio = require('cheerio');

const htmlExample = `
<article class="edicionesoficiales_articulos">
        <div class="ediciones_pdf">
                <img src="../NormasElperuano/PortadaFull/2025/11/21/2460828-1_Portada.jpg" width="100" alt="Patente">
        </div>
        <div class="ediciones_texto">
                <h4>EDUCACION</h4>
            <h5><a href="https://busquedas.elperuano.pe/dispositivo/NL/2460828-1">RESOLUCION DIRECTORAL  N° 00101-2025-PEIP-EB</a></h5>
            <p>
                <b>Fecha: 21/11/2025  </b>

            </p>
            <p>Revocan la delegación de competencias dispuesta en el literal a. del numeral 4.1 del artículo 4 de la Resolución Directoral Ejecutiva N° 00001-2025-PEIP-EB</p>
        </div>
        <div class="ediciones_botones">
            <ul>
                <li>
                        <a href="https://epdoc2.elperuano.pe/EpPo/DescargaIN.asp?Referencias=MjQ2MDgyOF8xMjAyNTExMjE=" class="buttonaction">Descarga individual</a>
                </li>
                    <li>
                            <a href="https://epdoc2.elperuano.pe/EpPo/Descarga.asp?Referencias=TkwyMDI1MTEyMQ==" class="buttonaction">Todo el cuadernillo</a>

                    </li>



            </ul>
        </div>
    </article>
`;

const $ = cheerio.load(htmlExample);

const element = $('.edicionesoficiales_articulos').first();

// Probar selectores
console.log('Selector .ediciones_botones a:');
console.log('  - Count:', $(element).find('.ediciones_botones a').length);
console.log('  - First href:', $(element).find('.ediciones_botones a').first().attr('href'));
console.log('  - Second href:', $(element).find('.ediciones_botones a').eq(1).attr('href'));

console.log('\nSelector .ediciones_botones ul li a:');
console.log('  - Count:', $(element).find('.ediciones_botones ul li a').length);
console.log('  - First href:', $(element).find('.ediciones_botones ul li a').first().attr('href'));
console.log('  - Second href:', $(element).find('.ediciones_botones ul li a').eq(1).attr('href'));
