"use client"

import { Card } from "@/components/ui/card"

import Image from "next/image"
import { EmployeeCard } from "./employee-card"

interface Employee {
    id: string
    name: string
    position: string
    email: string
    linkedinUrl?: string
    image?: string
}

interface AreaSectionProps {
    areaName: string
    areaImage: string
    functions: string[]
    employees: Employee[]
}

export function AreaSection({ areaName, areaImage, functions, employees }: AreaSectionProps) {
    return (
        <section className="w-full lg:w-3/4 mx-auto px-4">
            <div className="mb-8 text-center justify-center uppercase">
                <h1 className="text-3xl md:text-4xl font-bold text-[#049DD9]">{areaName}</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {/* Area image - vertical */}
                <div className="rounded-lg overflow-hidden relative h-96 lg:h-auto">
                    <Image src={areaImage || "/placeholder.svg"} alt={areaName} fill className="object-cover" />
                </div>
                {/* Functions section */}
                <div>
                    <Card className="p-6 border border-gray-200 bg-white h-full">
                        <h2 className="text-2xl font-semibold text-foreground ">Funciones</h2>
                        <ul className="space-y-3 ">
                            {functions.map((func, index) => (
                                <li key={index} className="flex gap-3 text-sm text-foreground leading-relaxed">
                                    <span className="font-semibold text-primary shrink-0">{index + 1}.</span>
                                    <span>{func}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </div>

            </div>

            {/* Employees section */}
            <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Personal del Área</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6">
                    {employees.map((employee) => (
                        <EmployeeCard key={employee.id} {...employee} />
                    ))}
                </div>
            </div>
        </section>
    )
}
