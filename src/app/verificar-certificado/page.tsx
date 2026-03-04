"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

interface CertificadoData {
  codigo: string;
  titulo: string;
  nombreBeneficiario: string;
  dniBeneficiario: string | null;
  fechaEmision: string;
  descripcion: string | null;
  estado: "activo" | "anulado";
}

function VerificadorContent() {
  const searchParams = useSearchParams();
  const codigo = searchParams.get("codigo");
  const [loading, setLoading] = useState(true);
  const [certificado, setCertificado] = useState<CertificadoData | null>(null);
  const [valido, setValido] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!codigo) {
      setLoading(false);
      return;
    }

    const verificar = async () => {
      try {
        const res = await fetch(
          `/api/certificados/verificar?codigo=${encodeURIComponent(codigo)}`,
        );
        const data = await res.json();
        setValido(data.valido);
        setCertificado(data.certificado || null);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    verificar();
  }, [codigo]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("es-PE", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header con branding UGEL */}
        <div style={styles.header}>
          <div style={styles.logoSection}>
            <div style={styles.shield}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div>
              <h1 style={styles.title}>UGEL AMBO</h1>
              <p style={styles.subtitle}>
                Sistema de Verificación de Certificados
              </p>
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div style={styles.content}>
          {loading && (
            <div style={styles.loadingContainer}>
              <div style={styles.spinner} />
              <p style={styles.loadingText}>Verificando certificado...</p>
            </div>
          )}

          {!loading && !codigo && (
            <div style={styles.resultContainer}>
              <div style={{ ...styles.iconCircle, ...styles.iconWarning }}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <h2 style={styles.resultTitle}>Código no proporcionado</h2>
              <p style={styles.resultDescription}>
                Para verificar un certificado, escanee el código QR impreso en
                el documento o ingrese el código de verificación.
              </p>
            </div>
          )}

          {!loading && codigo && error && (
            <div style={styles.resultContainer}>
              <div style={{ ...styles.iconCircle, ...styles.iconError }}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h2 style={styles.resultTitle}>Error de conexión</h2>
              <p style={styles.resultDescription}>
                No se pudo verificar el certificado. Por favor, intente
                nuevamente más tarde.
              </p>
            </div>
          )}

          {!loading && codigo && !error && !valido && (
            <div style={styles.resultContainer}>
              <div style={{ ...styles.iconCircle, ...styles.iconError }}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="15" y1="9" x2="9" y2="15" />
                  <line x1="9" y1="9" x2="15" y2="15" />
                </svg>
              </div>
              <h2 style={styles.resultTitle}>Certificado no encontrado</h2>
              <p style={styles.resultDescription}>
                El código <strong>{codigo}</strong> no corresponde a ningún
                certificado registrado en nuestro sistema. Verifique que el
                código sea correcto.
              </p>
            </div>
          )}

          {!loading &&
            valido &&
            certificado &&
            certificado.estado === "anulado" && (
              <div style={styles.resultContainer}>
                <div style={{ ...styles.iconCircle, ...styles.iconAnulado }}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  </svg>
                </div>
                <h2 style={styles.resultTitle}>Certificado Anulado</h2>
                <p style={styles.resultDescription}>
                  Este certificado ha sido <strong>anulado</strong> y ya no
                  tiene validez.
                </p>
                <div style={styles.certDetails}>
                  <DetailRow label="Código" value={certificado.codigo} />
                  <DetailRow label="Título" value={certificado.titulo} />
                  <DetailRow
                    label="Beneficiario"
                    value={certificado.nombreBeneficiario}
                  />
                </div>
              </div>
            )}

          {!loading &&
            valido &&
            certificado &&
            certificado.estado === "activo" && (
              <div style={styles.resultContainer}>
                <div style={{ ...styles.iconCircle, ...styles.iconSuccess }}>
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h2 style={{ ...styles.resultTitle, color: "#059669" }}>
                  ✅ Certificado Válido
                </h2>
                <p style={styles.resultDescription}>
                  Este certificado fue emitido oficialmente por la UGEL Ambo y
                  es auténtico.
                </p>
                <div style={styles.certDetails}>
                  <DetailRow
                    label="Código de Verificación"
                    value={certificado.codigo}
                  />
                  <DetailRow
                    label="Título del Certificado"
                    value={certificado.titulo}
                  />
                  <DetailRow
                    label="Beneficiario"
                    value={certificado.nombreBeneficiario}
                  />
                  {certificado.dniBeneficiario && (
                    <DetailRow
                      label="DNI"
                      value={certificado.dniBeneficiario}
                    />
                  )}
                  <DetailRow
                    label="Fecha de Emisión"
                    value={formatDate(certificado.fechaEmision)}
                  />
                  {certificado.descripcion && (
                    <DetailRow
                      label="Descripción"
                      value={certificado.descripcion}
                    />
                  )}
                  <DetailRow label="Estado" value="ACTIVO" highlight />
                </div>
              </div>
            )}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>Unidad de Gestión Educativa Local de Ambo</p>
          <p style={styles.footerLink}>
            <a href="https://ugelambo.com" style={styles.link}>
              ugelambo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function DetailRow({
  label,
  value,
  highlight,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div style={styles.detailRow}>
      <span style={styles.detailLabel}>{label}</span>
      <span
        style={{
          ...styles.detailValue,
          ...(highlight ? styles.detailHighlight : {}),
        }}
      >
        {value}
      </span>
    </div>
  );
}

export default function VerificarCertificadoPage() {
  return (
    <Suspense
      fallback={
        <div style={styles.container}>
          <div style={styles.card}>
            <div style={styles.header}>
              <div style={styles.logoSection}>
                <div style={styles.shield}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h1 style={styles.title}>UGEL AMBO</h1>
                  <p style={styles.subtitle}>
                    Sistema de Verificación de Certificados
                  </p>
                </div>
              </div>
            </div>
            <div style={styles.content}>
              <div style={styles.loadingContainer}>
                <div style={styles.spinner} />
                <p style={styles.loadingText}>Cargando...</p>
              </div>
            </div>
          </div>
        </div>
      }
    >
      <VerificadorContent />
    </Suspense>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    background:
      "linear-gradient(135deg, #0c1a3a 0%, #1a365d 50%, #0c1a3a 100%)",
    fontFamily: "'Geist', 'Segoe UI', sans-serif",
  },
  card: {
    width: "100%",
    maxWidth: "560px",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 25px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.1)",
    overflow: "hidden",
  },
  header: {
    background: "linear-gradient(135deg, #1e3a5f 0%, #2563eb 100%)",
    padding: "24px 32px",
    color: "#ffffff",
  },
  logoSection: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  shield: {
    width: "56px",
    height: "56px",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  title: {
    fontSize: "22px",
    fontWeight: 700,
    margin: 0,
    letterSpacing: "0.5px",
  },
  subtitle: {
    fontSize: "13px",
    margin: "4px 0 0 0",
    opacity: 0.85,
  },
  content: {
    padding: "32px",
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "40px 0",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #e5e7eb",
    borderTopColor: "#2563eb",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  loadingText: {
    color: "#6b7280",
    fontSize: "15px",
  },
  resultContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "16px",
  },
  iconCircle: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconSuccess: {
    backgroundColor: "#d1fae5",
    color: "#059669",
  },
  iconError: {
    backgroundColor: "#fee2e2",
    color: "#dc2626",
  },
  iconWarning: {
    backgroundColor: "#fef3c7",
    color: "#d97706",
  },
  iconAnulado: {
    backgroundColor: "#fee2e2",
    color: "#991b1b",
  },
  resultTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#111827",
    margin: 0,
  },
  resultDescription: {
    fontSize: "14px",
    color: "#6b7280",
    lineHeight: 1.6,
    margin: 0,
    maxWidth: "400px",
  },
  certDetails: {
    width: "100%",
    marginTop: "8px",
    backgroundColor: "#f9fafb",
    borderRadius: "12px",
    padding: "8px 0",
    border: "1px solid #e5e7eb",
    textAlign: "left",
  },
  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "10px 20px",
    borderBottom: "1px solid #f3f4f6",
    gap: "12px",
  },
  detailLabel: {
    fontSize: "13px",
    color: "#6b7280",
    fontWeight: 500,
    flexShrink: 0,
    minWidth: "120px",
  },
  detailValue: {
    fontSize: "14px",
    color: "#111827",
    fontWeight: 600,
    textAlign: "right",
  },
  detailHighlight: {
    color: "#059669",
    backgroundColor: "#d1fae5",
    padding: "2px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.5px",
  },
  footer: {
    padding: "16px 32px",
    backgroundColor: "#f9fafb",
    borderTop: "1px solid #e5e7eb",
    textAlign: "center" as const,
    fontSize: "12px",
    color: "#9ca3af",
  },
  footerLink: {
    marginTop: "4px",
  },
  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: 500,
  },
};
