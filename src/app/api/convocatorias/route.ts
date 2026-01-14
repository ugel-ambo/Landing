import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodbConnection";
import Convocatoria from "@/models/Convocatoria";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectMongoDB();

    // Obtener convocatorias activas, ordenadas por fecha de creación
    const convocatorias = await Convocatoria.find({ activo: true })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      convocatorias: JSON.parse(JSON.stringify(convocatorias)),
    });
  } catch (error) {
    console.error("Error fetching convocatorias:", error);
    return NextResponse.json(
      { error: "Failed to fetch convocatorias", convocatorias: [] },
      { status: 500 }
    );
  }
}
