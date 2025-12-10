import { getFortalecimientos } from "@/app/Gestion-Pedagogica/actions";
import FortalecimientoView from "@/components/FortalecimientoView";

// Forzar que la página siempre obtenga datos frescos de la BD
export const dynamic = 'force-dynamic';

export default async function FortalecimientoPrimariaPage() {
    const data = await getFortalecimientos("primaria");

    return (
        <main className="min-h-screen bg-gray-50/50">
            <div className="w-full bg-[#049DD9] py-12 md:py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Fortalecimiento Pedagógico
                    </h1>
                    <p className="text-blue-100 text-lg max-w-2xl">
                        Recursos, cursos y materiales de capacitación.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 relative -mt-10">
                <div className="bg-white rounded-3xl shadow p-6">
                    <FortalecimientoView initialData={data} area="Educación Primaria" />
                </div>
            </div>
        </main>
    );
}
