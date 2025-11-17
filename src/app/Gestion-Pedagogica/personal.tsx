"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { EmployeeCard } from "../(Landing)/Areas/components/employee-card"

export interface Employee {
    id: string
    name: string
    position: string
    image?: string
  }
  
  export interface AreaContent {
    employees: Employee[]
  }


export function PersonalSection({ employees,}:AreaContent ) {
  return (
    <section className="w-full max-w-7xl mx-auto space-y-16">

      {/* Team */}
      <div className="space-y-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#049DD9]">Equipo</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900">Personal del área</h2>
          <p className="mt-3 text-base text-slate-600">
            "Conoce a las personas que brindan soporte especializado a nuestra comunidad educativa."
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {employees.map((employee) => (
            <EmployeeCard key={employee.id || employee.name} {...employee} />
          ))}
        </div>
      </div>
    </section>
  )
}
