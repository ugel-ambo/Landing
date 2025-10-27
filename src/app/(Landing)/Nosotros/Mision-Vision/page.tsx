import { Target, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const MisionYVision = () => {
  const contenidos = [
    {
      icon: Target,
      title: "MISIÓN",
      description: "Ser una institución educativa eficiente y de excelencia que promueve el acceso, la equidad y la calidad en los aprendizajes, contribuyendo al desarrollo integral de los estudiantes en la provincia de Ambo.",
      color: "from-blue-500/10 to-blue-600/5",
      iconColor: "text-[#049DD9]"
    },
    {
      icon: Eye,
      title: "VISIÓN",
      description: "Garantizar una gestión educativa participativa y descentralizada que fortalezca las competencias de los actores educativos, asegurando el cumplimiento de las políticas nacionales y regionales para la mejora de la calidad educativa en beneficio de la comunidad de Ambo.",
      color: "from-blue-500/10 to-blue-600/5",
      iconColor: "text-[#049DD9]"
    }
  ]

  return (
    <section className="py-10 md:py-12 bg-linear-to-b from-white to-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#223F59] mb-4">
            Misión y Visión
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Los pilares fundamentales que guían nuestro trabajo educativo
          </p>
        </header>

        {/* Misión y Visión */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {contenidos.map((item, index) => {
            const Icon = item.icon
            return (
              <Card 
                key={index}
                className="border-2 hover:shadow-xl transition-all duration-300 group hover:border-primary/50"
              >
                <CardContent className="p-6 md:p-8 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-4 bg-linear-to-br ${item.color} rounded-2xl group-hover:scale-105 transition-transform`}>
                        <Icon className={`w-8 h-8 ${item.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-[#223F59] mb-3">
                          {item.title}
                        </h2>
                        <div className="h-1 w-16 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Compromiso */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-l-4 border-l-primary bg-linear-to-r from-primary/5 to-transparent">
            <CardContent className="p-6 md:p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-[#223F59] mb-4">
                  Nuestro Compromiso
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Trabajamos día a día para hacer realidad nuestra misión y visión, 
                  fortaleciendo el sistema educativo en la provincia de Ambo a través 
                  de una gestión transparente, eficiente y comprometida con la excelencia educativa.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default MisionYVision