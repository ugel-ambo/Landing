import { Clock8 } from 'lucide-react'
import React from 'react'
import Image from "next/image"
import Link from 'next/link'

function Superhero() {
    return (
        <div className="bg-[#049DD9] h-12 flex flex-row justify-evenly items-center px-4 md:px-8 lg:px-16">
            <div className="flex flex-row items-center gap-2">
                <Clock8 className="text-white text-xl hidden md:block" size={18} />
                <h1 className="text-white text-[8px] md:text-sm">
                    HORARIO DE ATENCIÓN: Lunes - Viernes: 8:00 am - 5:00 pm
                </h1>
            </div>
            <Link href="https://www.transparencia.gob.pe/enlaces/pte_transparencia_enlaces.aspx?id_entidad=18827" aria-label="Ir al portal de transparencia">
            <Image
                src="/portal.png"
                alt="Portal UGEL"
                width={70}
                height={70}
                priority
                sizes="70px"
            />
            </Link>
        </div>
    )
}

export default Superhero