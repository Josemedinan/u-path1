import { UserCircle, Filter, Heart, MessageCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const steps = [
  {
    icon: UserCircle,
    title: "Crea tu perfil",
    description: "Completa tu información académica, logros y preferencias en minutos.",
  },
  {
    icon: Filter,
    title: "Selecciona filtros",
    description: "Elige país, tipo de universidad, becas disponibles y área de estudio.",
  },
  {
    icon: Heart,
    title: "Obtén matches",
    description: "Nuestra IA encuentra las universidades perfectas para ti con % de compatibilidad.",
  },
  {
    icon: MessageCircle,
    title: "Chatea con universidades",
    description: "Conecta directamente con las instituciones y comienza tu proceso de admisión.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold lg:text-5xl">Cómo funciona</h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Cuatro pasos simples para encontrar tu universidad ideal
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-card/80"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="mb-2 text-sm font-semibold text-primary">Paso {index + 1}</div>
              <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
              <p className="text-pretty text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
