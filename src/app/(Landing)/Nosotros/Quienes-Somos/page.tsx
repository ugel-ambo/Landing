import { MapPin, Users, GraduationCap, Building2, CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const QuienesSomos = () => {
  const distritos = [
    "Ambo",
    "Cayna",
    "Colpas",
    "Conchamarca",
    "Huacar",
    "San Francisco",
    "San Rafael",
    "Tomaykichwa"
  ]

  const caracteristicas = [
    {
      icon: Building2,
      title: "Autonomía Administrativa",
      description: "Instancia descentralizada del Gobierno Regional de Huánuco"
    },
    {
      icon: GraduationCap,
      title: "Soporte Pedagógico",
      description: "Acompañamiento técnico-pedagógico e institucional"
    },
    {
      icon: Users,
      title: "Educación Inclusiva",
      description: "Servicio educativo de calidad con equidad y sin exclusión"
    }
  ]

  return (
    <section className="py-10 md:py-12 bg-linear-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#223F59] mb-4">
            ¿Quiénes Somos?
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Unidad de Gestión Educativa Local de Ambo
          </p>
        </header>

        {/* Descripción Principal */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#223F59] mb-2">
                    Nuestra Institución
                  </h2>
                  <div className="h-1 w-16 bg-primary rounded-full mb-4"></div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Somos una instancia de ejecución descentralizada del Gobierno Regional de Huánuco, 
                con autonomía en el ámbito de nuestra competencia. Coordinamos con la Dirección 
                Regional de Educación de Huánuco en aspectos administrativos y técnico-pedagógicos.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#223F59] mb-2">
                    Nuestro deber
                  </h2>
                  <div className="h-1 w-16 bg-primary rounded-full mb-4"></div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionamos soporte técnico-pedagógico, institucional y administrativo a las 
                instituciones educativas de nuestra jurisdicción, asegurando un servicio educativo 
                de calidad, con equidad y sin exclusión social.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Características */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#223F59] text-center mb-8">
            Nuestras Características
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {caracteristicas.map((item, index) => {
              const Icon = item.icon
              return (
                <Card 
                  key={index} 
                  className="border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex p-4 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#223F59] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Distritos Atendidos */}
        <Card className="border-2 bg-linear-to-br from-primary/5 to-primary/10">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary rounded-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[#223F59]">
                  Ámbito de Cobertura
                </h2>
                <p className="text-muted-foreground">
                  Atendemos 8 distritos de la provincia de Ambo
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {distritos.map((distrito, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-sm font-medium text-[#223F59]">
                    {distrito}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Relaciones Institucionales */}
        <div className="mt-12 text-center">
          <Card className="max-w-3xl mx-auto border-l-4 border-l-primary">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-[#223F59]">Coordinación Institucional:</span> Mantenemos 
                relación técnica y normativa con el Ministerio de Educación, y como Unidad Ejecutora 
                dependemos presupuestalmente del Gobierno Regional de Huánuco.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default QuienesSomos