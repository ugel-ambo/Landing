import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodbConnection";
import { TutorialModel } from "@/models/Tutorial";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await connectMongoDB();

    const tutoriales = await TutorialModel.find({ activo: true })
      .sort({ orden: 1, createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: JSON.parse(JSON.stringify(tutoriales)),
    });
  } catch (error) {
    console.error("Error fetching tutoriales:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch tutoriales", data: [] },
      { status: 500 }
    );
  }
}
