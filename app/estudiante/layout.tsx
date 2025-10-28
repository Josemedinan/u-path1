import type React from "react"
import { StudentSidebar } from "@/components/student-sidebar"
import { ModeSwitchButton } from "@/components/mode-switch-button"

export default function EstudianteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen">
      <StudentSidebar />
      <ModeSwitchButton currentMode="student" />
      <main className="ml-64 flex-1 bg-background">
        <div className="container mx-auto p-6 lg:p-8">{children}</div>
      </main>
    </div>
  )
}
