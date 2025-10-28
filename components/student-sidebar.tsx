"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { GraduationCap, User, Heart, CheckSquare, MessageCircle, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { href: "/estudiante/perfil", label: "Perfil", icon: User },
  { href: "/estudiante/matches", label: "Mis Matches", icon: Heart },
  { href: "/estudiante/plan", label: "Plan de Trabajo", icon: CheckSquare },
  { href: "/estudiante/chat", label: "Chat", icon: MessageCircle },
  { href: "/estudiante/ajustes", label: "Ajustes", icon: Settings },
]

export function StudentSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-border bg-sidebar">
      <div className="flex h-full flex-col">
        <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-6">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sidebar-primary">
            <GraduationCap className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">U-Path</span>
        </div>

        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground",
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-sidebar-border p-4">
          <Button variant="ghost" className="w-full justify-start gap-3 text-sidebar-foreground/70">
            <LogOut className="h-5 w-5" />
            Cerrar sesión
          </Button>
        </div>
      </div>
    </aside>
  )
}
