import EspecialistasSection from "../../components/EspecialistasSection";
import { getEspecialistas } from "../../actions";
import especialistasDataFallback from "../data";

export default async function EspecialistasCebaPage() {
    const especialistasDB = await getEspecialistas('ceba');
    const data = especialistasDB.length > 0 ? especialistasDB : especialistasDataFallback;

    return (
        <div className="min-h-screen">
            <EspecialistasSection 
                data={data}
                title="Especialistas de Educación Básica Alternativa"
                subtitle="Conoce a nuestro equipo comprometido con la educación básica alternativa"
                nivel="Básica Alternativa"
            />
        </div>
    );
}