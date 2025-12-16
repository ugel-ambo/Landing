import { NextResponse } from 'next/server'
import connectMongoDB from '@/lib/mongodbConnection'
import { PersonalModel } from '@/models/Personal'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const area = searchParams.get('area')

  if (!area) {
    return NextResponse.json(
      { error: 'Se requiere el parámetro "area"' },
      { status: 400 }
    )
  }

  try {
    await connectMongoDB()

    const personal = await PersonalModel.find({ area })
      .populate('foto')
      .sort({ orden: 1 })
      .lean()

    const employees = personal.map((p: any) => ({
      id: p._id.toString(),
      name: p.nombre,
      position: p.cargo,
      image: p.foto?.url || undefined,
    }))

    return NextResponse.json({
      success: true,
      employees,
    })
  } catch (error) {
    console.error('Error fetching personal:', error)
    return NextResponse.json(
      { 
        success: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
        employees: [],
      },
      { status: 500 }
    )
  }
}
