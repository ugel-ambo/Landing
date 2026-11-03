import "server-only";
import connectMongoDB from "@/lib/mongodbConnection";
import ConvocatoriaModel from "@/models/Convocatoria";
import type { Convocatoria } from "@/types/convocatoria.types";

export async function getConvocatorias(limit?: number): Promise<Convocatoria[]> {
  await connectMongoDB();

  const query = ConvocatoriaModel.find({ activo: true }).sort({ createdAt: -1, _id: -1 });
  if (limit) query.limit(limit);

  const convocatorias = await query.lean();
  return JSON.parse(JSON.stringify(convocatorias));
}
