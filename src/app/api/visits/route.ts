import { NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

// En producción (Vercel), el sistema de archivos es efímero
// Para una solución permanente, considera usar Vercel KV o una base de datos
const IS_PRODUCTION = process.env.VERCEL === "1"
const VISITS_FILE = path.join(process.cwd(), "data", "visits.json")

// Asegurar que el directorio existe
async function ensureDataDir() {
  try {
    const dataDir = path.dirname(VISITS_FILE)
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }
  } catch (error) {
    // En producción, puede que no podamos crear directorios
    console.warn("No se pudo crear el directorio de datos:", error)
  }
}

// Variable global para almacenar visitas en memoria (solo para producción temporal)
// En producción real, usa Vercel KV o una base de datos
let inMemoryVisits: number | null = null

// Leer el archivo de visitas
async function readVisits(): Promise<number> {
  try {
    // En producción, usar valor en memoria o variable de entorno
    if (IS_PRODUCTION) {
      // Si hay un valor inicial en variable de entorno, usarlo
      const initialVisits = process.env.INITIAL_VISITS
      if (initialVisits) {
        const baseCount = parseInt(initialVisits, 10)
        if (inMemoryVisits === null) {
          inMemoryVisits = baseCount
        }
        return inMemoryVisits
      }
      // Si no hay variable de entorno, usar valor por defecto
      if (inMemoryVisits === null) {
        inMemoryVisits = 1000 // Valor inicial
      }
      return inMemoryVisits
    }

    // En desarrollo, leer del archivo
    await ensureDataDir()
    if (existsSync(VISITS_FILE)) {
      const content = await readFile(VISITS_FILE, "utf-8")
      const data = JSON.parse(content)
      return data.totalVisits || 0
    }
    return 0
  } catch (error) {
    console.error("Error al leer visitas:", error)
    return IS_PRODUCTION ? (inMemoryVisits || 1000) : 0
  }
}

// Escribir el archivo de visitas
async function writeVisits(count: number): Promise<void> {
  try {
    // En producción, almacenar en memoria (temporal)
    // Para una solución permanente, usa Vercel KV o una base de datos
    if (IS_PRODUCTION) {
      inMemoryVisits = count
      console.log(`Visita registrada (producción): ${count}`)
      // Nota: Este valor se perderá al reiniciar el servidor
      // Para persistencia, configura Vercel KV (ver README)
      return
    }

    // En desarrollo, escribir al archivo
    await ensureDataDir()
    await writeFile(
      VISITS_FILE,
      JSON.stringify({ totalVisits: count, lastUpdated: new Date().toISOString() }),
      "utf-8"
    )
  } catch (error) {
    console.error("Error al escribir visitas:", error)
    // No lanzar error en producción ya que el sistema de archivos es de solo lectura
    if (!IS_PRODUCTION) {
      throw error
    }
  }
}

// GET: Obtener el contador de visitas
export async function GET() {
  try {
    const count = await readVisits()
    return NextResponse.json({ totalVisits: count })
  } catch (error) {
    console.error("Error al obtener visitas:", error)
    return NextResponse.json(
      { error: "Error al obtener visitas" },
      { status: 500 }
    )
  }
}

// POST: Incrementar el contador de visitas
export async function POST() {
  try {
    const currentCount = await readVisits()
    const newCount = currentCount + 1
    await writeVisits(newCount)

    return NextResponse.json({
      totalVisits: newCount,
      message: "Visita registrada exitosamente"
    })
  } catch (error) {
    console.error("Error al registrar visita:", error)
    return NextResponse.json(
      { error: "Error al registrar visita" },
      { status: 500 }
    )
  }
}

