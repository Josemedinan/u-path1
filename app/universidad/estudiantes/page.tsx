"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Mail,
  Award,
  Search,
  Filter,
  Star,
  TrendingUp,
  BookOpen,
  Globe,
  Heart,
  Eye,
  Download,
  CheckCircle2,
  Clock,
  BarChart3,
} from "lucide-react"
import { Users } from "lucide-react" // Declared Users variable

const students = [
  {
    name: "María González",
    location: "Ciudad de México, México",
    gpa: 3.9,
    sat: 1480,
    act: 33,
    toefl: 105,
    interests: ["Ingeniería", "Ciencias de la Computación", "IA"],
    achievements: [
      { title: "Olimpiada de Matemáticas", award: "Medalla de Oro", date: "2024" },
      { title: "Presidente del Club de Robótica", award: "Liderazgo", date: "2023-2024" },
    ],
    activities: ["Robótica", "Voluntariado", "Debate"],
    languages: ["Español (Nativo)", "Inglés (Avanzado)", "Francés (Intermedio)"],
    match: 95,
    status: "interested",
    appliedDate: "2024-01-15",
  },
  {
    name: "Carlos Rodríguez",
    location: "Buenos Aires, Argentina",
    gpa: 3.8,
    sat: 1420,
    act: 31,
    toefl: 98,
    interests: ["Medicina", "Investigación", "Biología"],
    achievements: [
      { title: "Voluntariado en Hospital Local", award: "500+ horas", date: "2023" },
      { title: "Publicación en revista científica", award: "Co-autor", date: "2024" },
    ],
    activities: ["Investigación", "Voluntariado médico", "Tenis"],
    languages: ["Español (Nativo)", "Inglés (Avanzado)"],
    match: 92,
    status: "applied",
    appliedDate: "2024-01-10",
  },
  {
    name: "Ana Martínez",
    location: "Barcelona, España",
    gpa: 3.7,
    sat: 1390,
    act: 29,
    toefl: 92,
    interests: ["Negocios", "Emprendimiento", "Marketing"],
    achievements: [
      { title: "Fundadora de startup estudiantil", award: "CEO", date: "2023" },
      { title: "Ganadora de competencia de negocios", award: "1er lugar", date: "2024" },
    ],
    activities: ["Emprendimiento", "Club de negocios", "Natación"],
    languages: ["Español (Nativo)", "Inglés (Avanzado)", "Catalán (Nativo)"],
    match: 88,
    status: "contacted",
    appliedDate: "2024-01-20",
  },
  {
    name: "Luis Fernández",
    location: "Bogotá, Colombia",
    gpa: 3.85,
    sat: 1450,
    act: 32,
    toefl: 100,
    interests: ["Ingeniería", "Sostenibilidad", "Energías Renovables"],
    achievements: [
      { title: "Proyecto de energía renovable", award: "Premio nacional", date: "2024" },
      { title: "Líder de club ambiental", award: "Fundador", date: "2022-2024" },
    ],
    activities: ["Medio ambiente", "Ingeniería", "Fútbol"],
    languages: ["Español (Nativo)", "Inglés (Avanzado)", "Portugués (Básico)"],
    match: 90,
    status: "interested",
    appliedDate: "2024-01-18",
  },
]

export default function EstudiantesPage() {
  const [selectedStudents, setSelectedStudents] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const toggleStudentSelection = (name: string) => {
    setSelectedStudents((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "applied":
        return "bg-green-500/10 text-green-700 border-green-200"
      case "contacted":
        return "bg-blue-500/10 text-blue-700 border-blue-200"
      case "interested":
        return "bg-amber-500/10 text-amber-700 border-amber-200"
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "applied":
        return "Aplicó"
      case "contacted":
        return "Contactado"
      case "interested":
        return "Interesado"
      default:
        return status
    }
  }

  return (
    <div className="space-y-6 pb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Estudiantes Interesados</h1>
          <p className="text-muted-foreground">Revisa y gestiona perfiles de estudiantes potenciales</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Exportar
          </Button>
          <Button size="sm" className="bg-primary">
            <Filter className="h-4 w-4 mr-2" />
            Filtros avanzados
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Interesados</p>
                <p className="text-2xl font-bold">248</p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Aplicaciones</p>
                <p className="text-2xl font-bold">87</p>
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Match Promedio</p>
                <p className="text-2xl font-bold">89%</p>
              </div>
              <BarChart3 className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Esta Semana</p>
                <p className="text-2xl font-bold">+24</p>
              </div>
              <TrendingUp className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <CardTitle>Filtros de búsqueda</CardTitle>
          </div>
          <CardDescription>Encuentra estudiantes específicos según tus criterios</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="basic" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="basic">Básicos</TabsTrigger>
              <TabsTrigger value="academic">Académicos</TabsTrigger>
              <TabsTrigger value="interests">Intereses</TabsTrigger>
            </TabsList>
            <TabsContent value="basic" className="space-y-4 mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Buscar</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Nombre o ubicación..." className="pl-9" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">País</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los países" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="mexico">México</SelectItem>
                      <SelectItem value="argentina">Argentina</SelectItem>
                      <SelectItem value="espana">España</SelectItem>
                      <SelectItem value="colombia">Colombia</SelectItem>
                      <SelectItem value="chile">Chile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Estado</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="interested">Interesados</SelectItem>
                      <SelectItem value="contacted">Contactados</SelectItem>
                      <SelectItem value="applied">Aplicaron</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Match mínimo</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="70">70%+</SelectItem>
                      <SelectItem value="80">80%+</SelectItem>
                      <SelectItem value="90">90%+</SelectItem>
                      <SelectItem value="95">95%+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="academic" className="space-y-4 mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">GPA mínimo</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="3.0">3.0+</SelectItem>
                      <SelectItem value="3.5">3.5+</SelectItem>
                      <SelectItem value="3.7">3.7+</SelectItem>
                      <SelectItem value="3.9">3.9+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">SAT mínimo</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="1200">1200+</SelectItem>
                      <SelectItem value="1300">1300+</SelectItem>
                      <SelectItem value="1400">1400+</SelectItem>
                      <SelectItem value="1500">1500+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">ACT mínimo</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="24">24+</SelectItem>
                      <SelectItem value="28">28+</SelectItem>
                      <SelectItem value="30">30+</SelectItem>
                      <SelectItem value="32">32+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">TOEFL mínimo</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="80">80+</SelectItem>
                      <SelectItem value="90">90+</SelectItem>
                      <SelectItem value="100">100+</SelectItem>
                      <SelectItem value="110">110+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="interests" className="space-y-4 mt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Área de interés</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="ingenieria">Ingeniería</SelectItem>
                      <SelectItem value="medicina">Medicina</SelectItem>
                      <SelectItem value="negocios">Negocios</SelectItem>
                      <SelectItem value="artes">Artes</SelectItem>
                      <SelectItem value="ciencias">Ciencias</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Actividades</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas</SelectItem>
                      <SelectItem value="deportes">Deportes</SelectItem>
                      <SelectItem value="voluntariado">Voluntariado</SelectItem>
                      <SelectItem value="liderazgo">Liderazgo</SelectItem>
                      <SelectItem value="artes">Artes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Idiomas</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="ingles">Inglés</SelectItem>
                      <SelectItem value="espanol">Español</SelectItem>
                      <SelectItem value="frances">Francés</SelectItem>
                      <SelectItem value="aleman">Alemán</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {selectedStudents.length > 0 && (
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm font-medium">
                {selectedStudents.length} estudiante{selectedStudents.length > 1 ? "s" : ""} seleccionado
                {selectedStudents.length > 1 ? "s" : ""}
              </p>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="outline">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar mensaje
                </Button>
                <Button size="sm" variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Guardar favoritos
                </Button>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setSelectedStudents([])}>
                  Cancelar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {students.map((student, index) => (
          <Card
            key={index}
            className={`overflow-hidden transition-all hover:shadow-xl ${
              selectedStudents.includes(student.name) ? "ring-2 ring-primary" : ""
            }`}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <div className="relative">
                  <Avatar className="h-14 w-14 ring-2 ring-background">
                    <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10 text-primary text-lg font-semibold">
                      {student.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-green-500 border-2 border-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <CardTitle className="text-xl truncate">{student.name}</CardTitle>
                      <CardDescription className="mt-1 flex items-center gap-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate">{student.location}</span>
                      </CardDescription>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className="bg-primary/10 text-primary text-base font-bold border-primary/20 px-3 py-1">
                        {student.match}%
                      </Badge>
                      <Badge className={`${getStatusColor(student.status)} text-xs`}>
                        {getStatusLabel(student.status)}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-4 gap-3">
                <div className="text-center p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                  <p className="text-xs text-muted-foreground mb-1">GPA</p>
                  <p className="text-lg font-bold text-blue-700 dark:text-blue-400">{student.gpa}</p>
                  <Progress value={(student.gpa / 4) * 100} className="mt-2 h-1" />
                </div>
                <div className="text-center p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
                  <p className="text-xs text-muted-foreground mb-1">SAT</p>
                  <p className="text-lg font-bold text-green-700 dark:text-green-400">{student.sat}</p>
                  <Progress value={(student.sat / 1600) * 100} className="mt-2 h-1" />
                </div>
                <div className="text-center p-3 rounded-lg bg-purple-50 dark:bg-purple-950/20">
                  <p className="text-xs text-muted-foreground mb-1">ACT</p>
                  <p className="text-lg font-bold text-purple-700 dark:text-purple-400">{student.act}</p>
                  <Progress value={(student.act / 36) * 100} className="mt-2 h-1" />
                </div>
                <div className="text-center p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20">
                  <p className="text-xs text-muted-foreground mb-1">TOEFL</p>
                  <p className="text-lg font-bold text-amber-700 dark:text-amber-400">{student.toefl}</p>
                  <Progress value={(student.toefl / 120) * 100} className="mt-2 h-1" />
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  Áreas de interés
                </p>
                <div className="flex flex-wrap gap-2">
                  {student.interests.map((interest) => (
                    <Badge key={interest} variant="secondary" className="px-3 py-1">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Award className="h-4 w-4 text-amber-500" />
                  Logros destacados
                </p>
                <div className="space-y-2">
                  {student.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm bg-muted/50 rounded-lg p-2">
                      <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium">{achievement.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {achievement.award} • {achievement.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  Actividades extracurriculares
                </p>
                <div className="flex flex-wrap gap-2">
                  {student.activities.map((activity) => (
                    <Badge key={activity} variant="outline" className="px-3 py-1">
                      {activity}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-2 text-sm font-medium flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  Idiomas
                </p>
                <div className="flex flex-wrap gap-2">
                  {student.languages.map((language) => (
                    <Badge key={language} variant="secondary" className="px-3 py-1 text-xs">
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t">
                <Clock className="h-3 w-3" />
                <span>Fecha de interés: {student.appliedDate}</span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent"
                  onClick={() => toggleStudentSelection(student.name)}
                >
                  <input
                    type="checkbox"
                    checked={selectedStudents.includes(student.name)}
                    onChange={() => {}}
                    className="mr-2"
                  />
                  Seleccionar
                </Button>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  <Eye className="h-4 w-4 mr-1" />
                  Ver perfil
                </Button>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  <Mail className="h-4 w-4 mr-1" />
                  Invitar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">Mostrando 4 de 248 estudiantes</p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Siguiente
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
