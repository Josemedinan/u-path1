"use client"

import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { useRouter } from "next/navigation"

interface ModeSwitchButtonProps {
  currentMode: "student" | "university"
}

export function ModeSwitchButton({ currentMode }: ModeSwitchButtonProps) {
  const router = useRouter()

  const handleSwitch = () => {
    if (currentMode === "student") {
      router.push("/universidad/perfil")
    } else {
      router.push("/estudiante/perfil")
    }
  }

  return (
    <Button onClick={handleSwitch} className="fixed right-6 top-6 z-50 bg-primary hover:bg-primary/90 shadow-lg">
      <RefreshCw className="mr-2 h-4 w-4" />
      {currentMode === "student" ? "Cambiar a Universidad" : "Cambiar a Estudiante"}
    </Button>
  )
}
