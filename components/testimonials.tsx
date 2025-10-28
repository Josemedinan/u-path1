import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Estudiante en MIT",
    content:
      "U-Path me ayudó a encontrar la universidad perfecta. El proceso fue increíblemente fácil y obtuve un 95% de match con MIT.",
    initials: "MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Estudiante en Stanford",
    content:
      "La plataforma es intuitiva y el plan de trabajo me guió paso a paso. Ahora estudio en mi universidad soñada.",
    initials: "CR",
  },
  {
    name: "Ana Martínez",
    role: "Directora de Admisiones, Universidad de Barcelona",
    content:
      "U-Path nos conecta con estudiantes talentosos de todo el mundo. Es una herramienta invaluable para nuestro proceso de admisión.",
    initials: "AM",
  },
]

export function Testimonials() {
  return (
    <section id="estudiantes" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold lg:text-5xl">Lo que dicen nuestros usuarios</h2>
          <p className="text-pretty text-lg text-muted-foreground">Historias de éxito de estudiantes y universidades</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <Quote className="mb-4 h-8 w-8 text-primary/40" />
              <p className="mb-6 text-pretty leading-relaxed">{testimonial.content}</p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">{testimonial.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
