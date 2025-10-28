import type React from "react"
import { UniversitySidebar } from "@/components/university-sidebar"
import { ModeSwitchButton } from "@/components/mode-switch-button"

export default function UniversidadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <UniversitySidebar />
      <ModeSwitchButton currentMode="university" />
      <main className="ml-64 flex-1 bg-background">
        <div className="container mx-auto p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}
