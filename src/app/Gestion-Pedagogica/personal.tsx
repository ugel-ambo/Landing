"use client";
import { EmployeeCard } from "../(Landing)/Areas/components/employee-card";

// Deshabilitar cache para obtener datos frescos
export const dynamic = "force-dynamic";
export const revalidate = 0;

export interface Employee {
  id: string;
  name: string;
  position: string;
  image?: string;
}

export interface AreaContent {
  employees: Employee[];
}

export function PersonalSection({ employees }: AreaContent) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id || employee.name} {...employee} />
      ))}
    </div>
  );
}
