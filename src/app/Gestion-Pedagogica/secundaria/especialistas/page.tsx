import EspecialistasSection from "../../components/EspecialistasSection";
import { getEspecialistas } from "../../actions";
import especialistasDataFallback from "../data";

// Deshabilitar cache para obtener datos frescos
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function EspecialistasSecundariaPage() {
    const especialistasDB = await getEspecialistas('secundaria');
    const data = especialistasDB.length > 0 ? especialistasDB : especialistasDataFallback;

    return (
        <div className="min-h-screen">
            <EspecialistasSection 
                data={data}
                title="Especialistas de Nivel Secundaria"
                subtitle="Conoce a nuestro equipo comprometido con la educación secundaria"
                nivel="Secundaria"
            />
        </div>
    );
}