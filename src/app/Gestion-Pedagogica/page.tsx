import Hero from "./hero";
import Link from "next/link";
import { PersonalSection } from "./personal";
import connectMongoDB from "@/lib/mongodbConnection";
import { PersonalModel } from "@/models/Personal";

// Sin cache: leer datos frescos de la BD en cada request
export const dynamic = "force-dynamic";
export const revalidate = 0;
import {
  Monitor,
  Award,
  Users,
  Heart,
  BarChart3,
  Layers,
  Database,
  ExternalLink,
  BookOpen,
  GraduationCap,
  ClipboardList,
  Microscope,
  Globe,
  Handshake,
  ChevronRight,
} from "lucide-react";

interface PersonalDoc {
  _id: { toString(): string };
  nombre: string;
  cargo: string;
  area: string;
  orden: number;
  foto?: { url?: string };
}

// Datos de fallback para personal de AGP
const fallbackEmployees = [
  {
    id: "1",
    name: "Jaly H. Mallqui Durand",
    position: "Jefe del Área de Gestión Pedagógica",
    image: "/Directorio/agp/Jaly-H.png",
  },
];

async function getEmployeesFromDB() {
  try {
    await connectMongoDB();
    const personal = (await PersonalModel.find({ area: "agp" })
      .populate("foto")
      .sort({ orden: 1 })
      .lean()) as unknown as PersonalDoc[];
    if (!personal || personal.length === 0) return null;
    return personal.map((p) => ({
      id: p._id.toString(),
      name: p.nombre,
      position: p.cargo,
      image: p.foto?.url,
    }));
  } catch (error) {
    console.error("Error fetching employees:", error);
    return null;
  }
}

// ──────────────────────────────────────────────
// Accesos rápidos – datos
// ──────────────────────────────────────────────
const quickAccessUGEL = [
  {
    id: "monitoreo",
    title: "Sistema de Monitoreo",
    description: "Seguimiento y supervisión del servicio educativo",
    icon: Monitor,
    href: "https://monitoreo.ugelambo.edu.pe/",
    external: true,
    color: "#049DD9",
  },
  {
    id: "certificado",
    title: "Verificar Certificado",
    description: "Consulta la autenticidad de certificados emitidos",
    icon: Award,
    href: "/verificar-certificado",
    external: false,
    color: "#223F59",
  },
  {
    id: "personal",
    title: "Personal del Área",
    description: "Conoce a los especialistas y equipo de la UGP",
    icon: Users,
    href: "#personal",
    external: false,
    color: "#3873A6",
  },
  {
    id: "convivencia",
    title: "Convivencia Escolar",
    description: "Programas, herramientas y atención SíseVe",
    icon: Heart,
    href: "/convivencia",
    external: false,
    color: "#0e9f6e",
  },
];

const quickAccessMinedu = [
  {
    id: "simon",
    title: "SIMON",
    description: "Sistema de Monitoreo del MINEDU",
    icon: BarChart3,
    href: "https://simon.minedu.gob.pe/",
    badge: "MINEDU",
  },
  {
    id: "scale",
    title: "ESCALE",
    description: "Unidad de Estadística del MINEDU",
    icon: Layers,
    href: "https://escale.minedu.gob.pe/padron-de-iiee",
    badge: "MINEDU",
  },
  {
    id: "sgd",
    title: "SGD",
    description: "Sistema de Gestión Documental",
    icon: Database,
    href: "https://digital.regionhuanuco.gob.pe/login",
    badge: "Gob. Regional",
  },
];

// ──────────────────────────────────────────────
// Niveles educativos
// ──────────────────────────────────────────────
const niveles = [
  {
    title: "Educación Inicial",
    description:
      "Acompañamiento pedagógico especializado para el desarrollo integral de niños y niñas desde los primeros años.",
    href: "/Gestion-Pedagogica/inicial",
    icon: "🎨",
    stats: "90 + instituciones",
    color: "#f59e0b",
  },
  {
    title: "Educación Primaria",
    description:
      "Fortalecimiento de competencias y habilidades para estudiantes de primaria a través de metodologías innovadoras.",
    href: "/Gestion-Pedagogica/primaria",
    icon: "📚",
    stats: "150 + instituciones",
    color: "#049DD9",
  },
  {
    title: "Educación Secundaria",
    description:
      "Preparación integral de adolescentes para la educación superior y el mundo laboral con especialización por áreas.",
    href: "/Gestion-Pedagogica/secundaria",
    icon: "🎓",
    stats: "49 + instituciones",
    color: "#223F59",
  },
  {
    title: "PRONOEI",
    description:
      "Programa No Escolarizado de Educación Inicial para niños menores de 6 años en zonas rurales y de difícil acceso.",
    href: "/Gestion-Pedagogica/pronoi",
    icon: "🏫",
    stats: "40 + instituciones",
    color: "#8b5cf6",
  },
  {
    title: "CEBA",
    description:
      "Modalidad educativa flexible para jóvenes y adultos que no pudieron acceder a la educación regular.",
    href: "/Gestion-Pedagogica/ceba",
    icon: "📖",
    stats: "5 + instituciones",
    color: "#ef4444",
  },
  {
    title: "PRITE",
    description:
      "Atención especializada para niños menores de 3 años con discapacidad o en riesgo de adquirirla.",
    href: "/Gestion-Pedagogica/prite",
    icon: "🧸",
    stats: "1 institución",
    color: "#0e9f6e",
  },
];

// ──────────────────────────────────────────────
// Funciones
// ──────────────────────────────────────────────
const funciones = [
  {
    icon: ClipboardList,
    title: "Políticas y Normativas Educativas",
    description:
      "Difundir, orientar y supervisar la aplicación de políticas educativas nacionales y regionales.",
  },
  {
    icon: BookOpen,
    title: "Diversificación Curricular",
    description:
      "Facilitar procesos de diversificación curricular y desarrollo de recursos pedagógicos adaptados a cada contexto.",
  },
  {
    icon: GraduationCap,
    title: "Formación y Actualización Docente",
    description:
      "Ejecutar programas de capacitación continua para personal directivo, docente y administrativo.",
  },
  {
    icon: Microscope,
    title: "Innovación y Tecnología Educativa",
    description:
      "Implementar centros de recursos educativos y ejecutar proyectos de investigación e innovación pedagógica.",
  },
  {
    icon: Globe,
    title: "Programas Estratégicos e Inclusión",
    description:
      "Promover estrategias de alfabetización, educación intercultural y programas de prevención social.",
  },
  {
    icon: Handshake,
    title: "Articulación Productiva y Cultural",
    description:
      "Fortalecer centros culturales, gestionar cooperación técnica-financiera y vincular educación con desarrollo regional.",
  },
];

export default async function GP() {
  const employees = (await getEmployeesFromDB()) || fallbackEmployees;

  return (
    <main className="min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────── */}
      <Hero />

      {/* ── ACCESOS RÁPIDOS ──────────────────── */}
      <section className="py-14 px-6 sm:px-8 bg-[#f8fafc] border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#049DD9] mb-1">
              Accesos Rápidos
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#223F59]">
              Servicios y plataformas
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Accede directamente a los sistemas y herramientas más utilizados
              por la unidad
            </p>
          </div>

          {/* Sistemas UGEL */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#049DD9] text-white uppercase tracking-wider">
                UGEL Ambo
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickAccessUGEL.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex flex-col gap-3 p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#049DD9] hover:shadow-lg transition-all duration-200"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${item.color}15` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#223F59] text-sm group-hover:text-[#049DD9] transition-colors leading-snug">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-medium text-gray-400 group-hover:text-[#049DD9] transition-colors">
                      {item.external ? (
                        <>
                          <ExternalLink className="w-3 h-3" />
                          <span>Abrir</span>
                        </>
                      ) : (
                        <>
                          <ChevronRight className="w-3 h-3" />
                          <span>Ver</span>
                        </>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Plataformas MINEDU / Gobierno */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#223F59] text-white uppercase tracking-wider">
                Plataformas externas
              </span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {quickAccessMinedu.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:border-[#223F59] hover:shadow-lg transition-all duration-200"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#223F59]/8 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#223F59]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-[#223F59] text-sm group-hover:text-[#049DD9] transition-colors">
                          {item.title}
                        </span>
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-md bg-gray-100 text-gray-500 border border-gray-200">
                          {item.badge}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        {item.description}
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-[#049DD9] shrink-0 transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── NIVELES EDUCATIVOS ───────────────── */}
      <section className="py-16 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#049DD9] mb-1">
              Niveles Educativos
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#223F59]">
              Ámbito de atención
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Acompañamiento pedagógico en todos los niveles y modalidades de la
              provincia
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {niveles.map((nivel, i) => (
              <Link key={i} href={nivel.href} className="group">
                <div className="h-full flex flex-col p-6 bg-white rounded-2xl border border-gray-200 hover:border-[#049DD9] hover:shadow-lg transition-all duration-200">
                  {/* Icon + stat */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${nivel.color}15` }}
                    >
                      {nivel.icon}
                    </div>
                    <span className="text-xs text-gray-400 font-medium mt-1">
                      {nivel.stats}
                    </span>
                  </div>
                  {/* Text */}
                  <h3 className="text-base font-bold text-[#223F59] mb-2 group-hover:text-[#049DD9] transition-colors">
                    {nivel.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {nivel.description}
                  </p>
                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#049DD9]">
                    <span>Ver más</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FUNCIONES ────────────────────────── */}
      <section className="py-16 px-6 sm:px-8 bg-[#f8fafc] border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#049DD9] mb-1">
              Responsabilidades
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#223F59]">
              Nuestras funciones
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Compromisos y responsabilidades de la Unidad de Gestión Pedagógica
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {funciones.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-200 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#049DD9]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#049DD9]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#223F59] mb-1.5">
                      {f.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ESTADÍSTICAS ─────────────────────── */}
      <section className="py-14 px-6 sm:px-8 bg-[#223F59]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
            {[
              { number: "220+", label: "Instituciones Educativas" },
              { number: "100%", label: "Cobertura jurisdiccional" },
              { number: "13,870+", label: "Estudiantes Atendidos" },
              { number: "13+", label: "Especialistas Dedicados" },
            ].map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-3xl md:text-4xl font-extrabold text-[#049DD9] mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-300 font-medium uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERSONAL ─────────────────────────── */}
      <section id="personal" className="py-16 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#049DD9] mb-1">
              Equipo
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#223F59]">
              Personal del área
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Conoce a los especialistas que brindan soporte pedagógico a
              nuestra comunidad educativa
            </p>
          </div>
          <PersonalSection employees={employees} />
        </div>
      </section>
    </main>
  );
}
