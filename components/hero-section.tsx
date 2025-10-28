import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Gradient background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute left-0 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/20 blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Sparkles className="h-4 w-4" />
            <span>Impulsado por Inteligencia Artificial</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold leading-tight tracking-tight lg:text-7xl">
            Encuentra tu universidad ideal con{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">IA</span>
          </h1>

          <p className="mb-10 text-pretty text-lg text-muted-foreground lg:text-xl">
            Conectamos estudiantes con las mejores universidades del mundo. Crea tu perfil, obtén matches personalizados
            y comienza tu camino hacia el éxito académico.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="group bg-primary text-lg hover:bg-primary/90">
              <Link href="/registro">
                Empieza ahora
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-transparent">
              <Link href="#como-funciona">Cómo funciona</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
