import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import 'leaflet/dist/leaflet.css';
import Superhero from "./(Landing)/superhero";
import ChatPage from "./(Landing)/chat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UGEL AMBO",
  description: "Unidad de Gestión Educativa Local de Ambo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Superhero />
        <ChatPage />
        {children}
        <Analytics />
      </body>
    </html>
  );
}