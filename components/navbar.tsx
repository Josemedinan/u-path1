"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">U-Path</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#como-funciona"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Cómo funciona
            </Link>
            <Link
              href="/estudiante/perfil"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Demo Estudiante
            </Link>
            <Link
              href="/universidad/perfil"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Demo Universidad
            </Link>
            <Link href="#contacto" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contacto
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Iniciar sesión</Link>
            </Button>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/registro">Registrarse</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
