"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check, Linkedin } from "lucide-react"
import Image from "next/image"

interface EmployeeCardProps {
  id: string
  name: string
  position: string
  email: string
  linkedinUrl?: string
  image?: string
}

export function EmployeeCard({ name, position, email, linkedinUrl, image }: EmployeeCardProps) {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-md gap-1 transition-shadow p-4 md:p-5 flex flex-col items-center text-center">
      <div className="mb-3 md:mb-4">
        <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-gray-100 mx-auto">
          {image ? (
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-primary/10">
              <span className="text-lg font-semibold text-primary">{name.charAt(0).toUpperCase()}</span>
            </div>
          )}
        </div>
      </div>

      <h3 className="font-semibold text-[#049DD9] text-base md:text-lg">{name}</h3>
      <p className="text-sm text-muted-foreground ">{position}</p>

      <div className="flex gap-2.5 md:gap-3 justify-center">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopyEmail}
          className="h-9 w-9 md:h-10 md:w-10 p-0 hover:bg-primary/10"
          title={copied ? "Correo copiado" : "Copiar correo"}
        >
          {copied ? <Check className="h-5 w-5 text-primary" /> : <Copy className="h-5 w-5 text-muted-foreground" />}
        </Button>

        {linkedinUrl && (
          <Button variant="ghost" size="sm" asChild className="h-9 w-9 md:h-10 md:w-10 p-0 hover:bg-primary/10">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" title="Visitar LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground" />
            </a>
          </Button>
        )}
      </div>
    </Card>
  )
}
