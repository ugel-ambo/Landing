import React from 'react';
import Menu from '../(Landing)/menu';
import ConvocatoriaList from './convocatoria-list';
import { ConvocatoriasResponse } from '@/types/convocatoria.types';

async function getConvocatorias(): Promise<ConvocatoriasResponse | null> {
    try {
        const res = await fetch('http://ugelambo.regionhuanuco.gob.pe/api/convocatorias', {
            cache: 'no-store', // Ensure fresh data
            next: { revalidate: 0 }
        });

        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }

        return res.json();
    } catch (error) {
        console.error('Error fetching convocatorias:', error);
        return null;
    }
}

export default async function ConvocatoriaPage() {
    const data = await getConvocatorias();
    const convocatorias = data?.convocatorias || [];

    return (
        <main className="min-h-screen bg-background">
            <Menu />

            <div className="bg-[#049DD9] py-12 md:py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Convocatorias </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                        Oportunidades laborales vigentes en la Unidad de Gestión Educativa Local de Ambo.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <ConvocatoriaList initialConvocatorias={convocatorias} />
            </div>
        </main>
    );
}
