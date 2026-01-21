import EspecialistasSection from "../../components/EspecialistasSection";
import { getEspecialistas } from "../../actions";
import especialistasDataFallback from "../data";

// Deshabilitar cache para obtener datos frescos
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function EspecialistasConvivenciaPage() {
  const especialistasDB = await getEspecialistas("convivencia");
  const data =
    especialistasDB.length > 0 ? especialistasDB : especialistasDataFallback;

  return (
    <div className="min-h-screen">
      <EspecialistasSection
        data={data}
        title="Especialistas de Convivencia Escolar"
        subtitle="Conoce a nuestro equipo comprometido con la convivencia escolar"
        nivel="Convivencia Escolar"
      />
    </div>
  );
}
