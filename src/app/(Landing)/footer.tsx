"use client"

import type React from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  
  return (
    <footer className="bg-primary text-primary-foreground">

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-lg mb-4">UGEL Ambo</h3>
            <p className="text-sm opacity-90 mb-4">
              Unidad de Gestión Educativa Local comprometida con la excelencia educativa en la región.
            </p>
            <p className="text-xs opacity-75">Transformando la educación, transformamos el futuro</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/convocatorias" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Convocatorias
                </Link>
              </li>
              <li>
                <Link href="/tramites" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Trámites
                </Link>
              </li>
              <li>
                <Link href="/noticias" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Noticias
                </Link>
              </li>
            </ul>
          </div>

          {/* Consultas */}
          <div>
            <h4 className="font-bold mb-4">Consultas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/expediente" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Expedientes
                </Link>
              </li>
              <li>
                <Link href="/becas" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Becas
                </Link>
              </li>
              <li>
                <Link href="/videos" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline opacity-90 hover:opacity-100 transition-opacity">
                  Documentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>(064) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>ugelambo308@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 shrink-0" />
                <span>Ambo, Huánuco, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 mb-8">
          <h4 className="font-bold mb-4">Síguenos en redes sociales</h4>
          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/UGELAmbo"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/ugelambo/"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-75">
            <p>&copy; 2025 UGEL Ambo. Todos los derechos reservados.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Términos de Uso
              </Link>
              <Link href="#" className="hover:opacity-100 transition-opacity">
                Accesibilidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
