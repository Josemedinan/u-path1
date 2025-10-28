import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">U-Path</span>
            </Link>
            <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
              Conectando estudiantes con universidades de clase mundial usando inteligencia artificial.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Producto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#como-funciona" className="text-muted-foreground transition-colors hover:text-foreground">
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link href="#universidades" className="text-muted-foreground transition-colors hover:text-foreground">
                  Universidades
                </Link>
              </li>
              <li>
                <Link href="#estudiantes" className="text-muted-foreground transition-colors hover:text-foreground">
                  Estudiantes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacidad" className="text-muted-foreground transition-colors hover:text-foreground">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="text-muted-foreground transition-colors hover:text-foreground">
                  Términos
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground transition-colors hover:text-foreground">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@upath.com"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  info@upath.com
                </a>
              </li>
              <li className="text-muted-foreground">+1 (555) 123-4567</li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 U-Path. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
