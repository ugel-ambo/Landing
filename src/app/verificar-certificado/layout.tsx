import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verificar Certificado - UGEL AMBO",
  description:
    "Verifica la autenticidad de un certificado emitido por la UGEL Ambo",
};

export default function VerificarCertificadoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
