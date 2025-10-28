import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Building2, ArrowRight } from "lucide-react"

export function DemoAccess() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 lg:text-4xl">Explora la plataforma</h2>
          <p className="text-lg text-muted-foreground">
            Accede a las demos para ver cómo funciona U-Path desde la perspectiva de estudiantes y universidades
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Panel de Estudiante</CardTitle>
              <CardDescription className="text-base">
                Explora cómo los estudiantes crean su perfil, reciben matches personalizados y se conectan con
                universidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full group bg-primary hover:bg-primary/90">
                <Link href="/estudiante/perfil">
                  Ver demo de estudiante
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 mb-4">
                <Building2 className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Panel de Universidad</CardTitle>
              <CardDescription className="text-base">
                Descubre cómo las universidades gestionan su perfil institucional y encuentran estudiantes ideales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full group bg-transparent">
                <Link href="/universidad/perfil">
                  Ver demo de universidad
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
