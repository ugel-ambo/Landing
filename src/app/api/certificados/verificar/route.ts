import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodbConnection'
import Certificado, { ICertificado } from '@/models/Certificado'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const codigo = searchParams.get('codigo')

  if (!codigo) {
    return NextResponse.json(
      { valido: false, error: 'Se requiere el parámetro "codigo"' },
      { status: 400 }
    )
  }

  try {
    await connectMongoDB()

    const certificado = await Certificado.findOne({ codigo }).lean<ICertificado>()

    if (!certificado) {
      return NextResponse.json({ valido: false })
    }

    return NextResponse.json({
      valido: true,
      certificado: {
        codigo: certificado.codigo,
        titulo: certificado.titulo,
        nombreBeneficiario: certificado.nombreBeneficiario,
        dniBeneficiario: certificado.dniBeneficiario || null,
        fechaEmision: certificado.fechaEmision,
        descripcion: certificado.descripcion || null,
        estado: certificado.estado,
        pdfUrl: certificado.pdfConQrUrl || certificado.pdfOriginalUrl || null,
      },
    })
  } catch (error) {
    console.error('Error verificando certificado:', error)
    return NextResponse.json(
      {
        valido: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
      },
      { status: 500 }
    )
  }
}
