"use client"

import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface EmployeeCardProps {
  id: string
  name: string
  position: string
  image?: string
}
export function EmployeeCard({ name, position, image }: EmployeeCardProps) {
  // Función para obtener las iniciales
  const getInitials = (fullName: string) => {
    const names = fullName.trim().split(' ')
    if (names.length >= 2) {
      return `${names[0].charAt(0)}${names[names.length - 1].charAt(0)}`.toUpperCase()
    }
    return fullName.charAt(0).toUpperCase()
  }

  return (
    <div className="relative pt-16">
      {/* Foto sobresaliendo del card */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-xl bg-white">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                const target = e.target as HTMLImageElement;
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="w-full h-full flex items-center justify-center bg-[#049DD9]">
                      <span class="text-3xl font-bold text-white">${getInitials(name)}</span>
                    </div>
                  `;
                }
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#049DD9] ">
              <span className="text-3xl font-bold text-white">
                {getInitials(name)}
              </span>
            </div>
          )}
        </div>
      </div>

      <Card className="hover:shadow-lg transition-shadow pt-16 flex flex-col h-full">
        <CardHeader className="text-center pb-3">
          <CardTitle className="text-lg font-semibold text-[#049DD9] mt-6">
            {name}
          </CardTitle>
          <Badge variant="secondary" className="mx-auto mt-2">
            {position}
          </Badge>
        </CardHeader>
      </Card>
    </div>
  )
}