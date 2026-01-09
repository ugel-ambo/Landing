import { NextRequest, NextResponse } from "next/server"
import { writeFile, readFile, mkdir } from "fs/promises"
import { existsSync } from "fs"
import path from "path"

const IS_PRODUCTION = process.env.VERCEL === "1"
const VISITS_FILE = path.join(process.cwd(), "data", "visits.json")

async function ensureDataDir() {
  try {
    const dataDir = path.dirname(VISITS_FILE)
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }
  } catch (error) {
    console.warn("No se pudo crear el directorio de datos:", error)
  }
}
let inMemoryVisits: number | null = null

async function readVisits(): Promise<number> {
  try {
    if (IS_PRODUCTION) {
      const initialVisits = process.env.INITIAL_VISITS
      if (initialVisits) {
        const baseCount = parseInt(initialVisits, 10)
        if (inMemoryVisits === null) {
          inMemoryVisits = baseCount
        }
        return inMemoryVisits
      }
      if (inMemoryVisits === null) {
        inMemoryVisits = 1000
      }
      return inMemoryVisits
    }
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

async function writeVisits(count: number): Promise<void> {
  try {
    if (IS_PRODUCTION) {
      inMemoryVisits = count
      console.log(`Visita registrada (producción): ${count}`)
      return
    }
    await ensureDataDir()
    await writeFile(
      VISITS_FILE,
      JSON.stringify({ totalVisits: count, lastUpdated: new Date().toISOString() }),
      "utf-8"
    )
  } catch (error) {
    console.error("Error al escribir visitas:", error)
    if (!IS_PRODUCTION) {
      throw error
    }
  }
}

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

