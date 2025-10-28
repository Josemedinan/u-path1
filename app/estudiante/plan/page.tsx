"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  Circle,
  Calendar,
  FileText,
  Mail,
  BookOpen,
  Briefcase,
  MessageSquare,
  Clock,
  AlertCircle,
  TrendingUp,
  Target,
  Award,
  Plus,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Upload,
} from "lucide-react"

const tasks = [
  {
    id: "1",
    title: "Redactar ensayo personal",
    description:
      "Escribe tu declaración personal destacando tus experiencias, logros y motivaciones (500-650 palabras)",
    completed: false,
    category: "Ensayo",
    priority: "high",
    deadline: "2024-11-15",
    estimatedTime: "2-3 semanas",
    subtasks: [
      { id: "1-1", title: "Lluvia de ideas y selección de tema", completed: false },
      { id: "1-2", title: "Primer borrador", completed: false },
      { id: "1-3", title: "Revisión y edición", completed: false },
      { id: "1-4", title: "Revisión por mentor o profesor", completed: false },
      { id: "1-5", title: "Versión final", completed: false },
    ],
    resources: [
      { title: "Guía de ensayos Common App", url: "#" },
      { title: "Ejemplos de ensayos exitosos", url: "#" },
    ],
  },
  {
    id: "2",
    title: "Solicitar cartas de recomendación",
    description: "Contacta a 2-3 profesores o mentores que te conozcan bien y pídeles cartas de recomendación",
    completed: false,
    category: "Cartas",
    priority: "high",
    deadline: "2024-10-30",
    estimatedTime: "1-2 semanas",
    subtasks: [
      { id: "2-1", title: "Identificar profesores/mentores apropiados", completed: false },
      { id: "2-2", title: "Preparar materiales de apoyo (CV, logros)", completed: false },
      { id: "2-3", title: "Solicitar primera carta", completed: false },
      { id: "2-4", title: "Solicitar segunda carta", completed: false },
      { id: "2-5", title: "Hacer seguimiento y agradecer", completed: false },
    ],
    resources: [
      { title: "Cómo pedir una carta de recomendación", url: "#" },
      { title: "Plantilla de solicitud", url: "#" },
    ],
  },
  {
    id: "3",
    title: "Preparar exámenes estandarizados",
    description: "Estudia y presenta exámenes como SAT, ACT, TOEFL o IELTS según los requisitos de tus universidades",
    completed: false,
    category: "Exámenes",
    priority: "high",
    deadline: "2024-12-01",
    estimatedTime: "2-4 meses",
    subtasks: [
      { id: "3-1", title: "Identificar exámenes requeridos", completed: false },
      { id: "3-2", title: "Registrarse para los exámenes", completed: false },
      { id: "3-3", title: "Crear plan de estudio", completed: false },
      { id: "3-4", title: "Completar práctica y simulacros", completed: false },
      { id: "3-5", title: "Presentar exámenes oficiales", completed: false },
    ],
    resources: [
      { title: "Khan Academy SAT Prep", url: "#" },
      { title: "TOEFL Practice Tests", url: "#" },
    ],
  },
  {
    id: "4",
    title: "Crear portafolio digital",
    description: "Desarrolla un portafolio en línea mostrando tus proyectos, logros, actividades y trabajos destacados",
    completed: false,
    category: "Portafolio",
    priority: "medium",
    deadline: "2024-11-30",
    estimatedTime: "2-3 semanas",
    subtasks: [
      { id: "4-1", title: "Seleccionar plataforma (website, LinkedIn, etc.)", completed: false },
      { id: "4-2", title: "Recopilar proyectos y trabajos", completed: false },
      { id: "4-3", title: "Diseñar estructura del portafolio", completed: false },
      { id: "4-4", title: "Subir contenido y descripciones", completed: false },
      { id: "4-5", title: "Revisar y publicar", completed: false },
    ],
    resources: [
      { title: "Ejemplos de portafolios estudiantiles", url: "#" },
      { title: "Herramientas para crear portafolios", url: "#" },
    ],
  },
  {
    id: "5",
    title: "Preparar entrevistas de admisión",
    description: "Practica respuestas para entrevistas con universidades, incluyendo preguntas comunes y específicas",
    completed: false,
    category: "Entrevista",
    priority: "medium",
    deadline: "2024-12-15",
    estimatedTime: "2-3 semanas",
    subtasks: [
      { id: "5-1", title: "Investigar formato de entrevistas", completed: false },
      { id: "5-2", title: "Preparar respuestas a preguntas comunes", completed: false },
      { id: "5-3", title: "Practicar con mentor o amigo", completed: false },
      { id: "5-4", title: "Preparar preguntas para el entrevistador", completed: false },
      { id: "5-5", title: "Realizar entrevista simulada", completed: false },
    ],
    resources: [
      { title: "100 preguntas comunes de entrevista", url: "#" },
      { title: "Tips para entrevistas virtuales", url: "#" },
    ],
  },
  {
    id: "6",
    title: "Completar formularios de aplicación",
    description: "Llena cuidadosamente todos los formularios de aplicación (Common App, Coalition, etc.)",
    completed: false,
    category: "Aplicación",
    priority: "high",
    deadline: "2024-12-31",
    estimatedTime: "3-4 semanas",
    subtasks: [
      { id: "6-1", title: "Crear cuenta en plataformas de aplicación", completed: false },
      { id: "6-2", title: "Completar información personal", completed: false },
      { id: "6-3", title: "Ingresar información académica", completed: false },
      { id: "6-4", title: "Listar actividades y logros", completed: false },
      { id: "6-5", title: "Revisar y enviar aplicaciones", completed: false },
    ],
    resources: [
      { title: "Guía Common Application", url: "#" },
      { title: "Checklist de aplicación", url: "#" },
    ],
  },
  {
    id: "7",
    title: "Solicitar ayuda financiera y becas",
    description: "Investiga y aplica a becas, ayuda financiera y programas de apoyo económico disponibles",
    completed: false,
    category: "Financiero",
    priority: "high",
    deadline: "2024-12-31",
    estimatedTime: "Continuo",
    subtasks: [
      { id: "7-1", title: "Completar FAFSA (si aplica)", completed: false },
      { id: "7-2", title: "Investigar becas institucionales", completed: false },
      { id: "7-3", title: "Buscar becas externas", completed: false },
      { id: "7-4", title: "Preparar documentos financieros", completed: false },
      { id: "7-5", title: "Enviar solicitudes de becas", completed: false },
    ],
    resources: [
      { title: "Base de datos de becas", url: "#" },
      { title: "Guía FAFSA", url: "#" },
    ],
  },
  {
    id: "8",
    title: "Investigar universidades objetivo",
    description: "Investiga a fondo cada universidad: programas, cultura, ubicación, costos y oportunidades",
    completed: false,
    category: "Investigación",
    priority: "medium",
    deadline: "2024-10-31",
    estimatedTime: "Continuo",
    subtasks: [
      { id: "8-1", title: "Crear lista de universidades de interés", completed: false },
      { id: "8-2", title: "Investigar programas académicos", completed: false },
      { id: "8-3", title: "Asistir a ferias universitarias", completed: false },
      { id: "8-4", title: "Contactar estudiantes actuales", completed: false },
      { id: "8-5", title: "Visitar campus (virtual o presencial)", completed: false },
    ],
    resources: [
      { title: "Rankings universitarios", url: "#" },
      { title: "Tours virtuales", url: "#" },
    ],
  },
]

export default function PlanPage() {
  const [taskList, setTaskList] = useState(tasks)
  const [expandedTasks, setExpandedTasks] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState("all")

  const toggleTask = (id: string) => {
    setTaskList(taskList.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)))
  }

  const toggleSubtask = (taskId: string, subtaskId: string) => {
    setTaskList(
      taskList.map((task) =>
        task.id === taskId
          ? {
              ...task,
              subtasks: task.subtasks.map((subtask) =>
                subtask.id === subtaskId ? { ...subtask, completed: !subtask.completed } : subtask,
              ),
            }
          : task,
      ),
    )
  }

  const toggleExpanded = (id: string) => {
    setExpandedTasks(expandedTasks.includes(id) ? expandedTasks.filter((t) => t !== id) : [...expandedTasks, id])
  }

  const completedTasks = taskList.filter((task) => task.completed).length
  const progress = (completedTasks / taskList.length) * 100

  const highPriorityTasks = taskList.filter((t) => t.priority === "high" && !t.completed)
  const upcomingDeadlines = taskList
    .filter((t) => !t.completed)
    .sort((a, b) => new Date(a.deadline).getTime() - new Date(b.deadline).getTime())
    .slice(0, 3)

  const categories = [
    "all",
    "Ensayo",
    "Cartas",
    "Exámenes",
    "Portafolio",
    "Entrevista",
    "Aplicación",
    "Financiero",
    "Investigación",
  ]

  const filteredTasks = selectedCategory === "all" ? taskList : taskList.filter((t) => t.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Ensayo":
        return FileText
      case "Cartas":
        return Mail
      case "Exámenes":
        return BookOpen
      case "Portafolio":
        return Briefcase
      case "Entrevista":
        return MessageSquare
      case "Aplicación":
        return CheckCircle2
      case "Financiero":
        return Award
      case "Investigación":
        return Target
      default:
        return Circle
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-500/10 border-red-500/20"
      case "medium":
        return "text-yellow-600 bg-yellow-500/10 border-yellow-500/20"
      case "low":
        return "text-green-600 bg-green-500/10 border-green-500/20"
      default:
        return ""
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Plan de Trabajo
          </h1>
          <p className="text-muted-foreground mt-2">
            Organiza y completa tu proceso de admisión universitaria paso a paso
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Progreso Total</p>
                  <p className="text-3xl font-bold text-primary">{Math.round(progress)}%</p>
                </div>
                <TrendingUp className="h-10 w-10 text-primary/40" />
              </div>
              <Progress value={progress} className="mt-3 h-2" />
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completadas</p>
                  <p className="text-3xl font-bold text-green-600">
                    {completedTasks}/{taskList.length}
                  </p>
                </div>
                <CheckCircle2 className="h-10 w-10 text-green-500/40" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-500/20 bg-gradient-to-br from-red-500/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Alta Prioridad</p>
                  <p className="text-3xl font-bold text-red-600">{highPriorityTasks.length}</p>
                </div>
                <AlertCircle className="h-10 w-10 text-red-500/40" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pendientes</p>
                  <p className="text-3xl font-bold text-blue-600">{taskList.length - completedTasks}</p>
                </div>
                <Clock className="h-10 w-10 text-blue-500/40" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Upcoming Deadlines */}
      <Card className="border-orange-500/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-orange-600" />
            Próximas fechas límite
          </CardTitle>
          <CardDescription>Tareas urgentes que requieren tu atención</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingDeadlines.map((task) => {
              const daysUntil = Math.ceil(
                (new Date(task.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
              )
              const Icon = getCategoryIcon(task.category)
              return (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{task.title}</p>
                      <p className="text-sm text-muted-foreground">{task.category}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="outline" className={daysUntil <= 7 ? "border-red-500 text-red-600" : ""}>
                      {daysUntil} días
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{new Date(task.deadline).toLocaleDateString()}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Category Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Filtrar por categoría</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const Icon = category === "all" ? Target : getCategoryIcon(category)
              const count =
                category === "all" ? taskList.length : taskList.filter((t) => t.category === category).length
              return (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category === "all" ? "Todas" : category} ({count})
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.map((task) => {
          const isExpanded = expandedTasks.includes(task.id)
          const Icon = getCategoryIcon(task.category)
          const completedSubtasks = task.subtasks.filter((st) => st.completed).length
          const subtaskProgress = (completedSubtasks / task.subtasks.length) * 100

          return (
            <Card
              key={task.id}
              className={`transition-all ${task.completed ? "border-primary/30 bg-primary/5" : "hover:border-primary/50"}`}
            >
              <CardContent className="p-6">
                {/* Main Task */}
                <div className="flex items-start gap-4">
                  <Checkbox
                    id={task.id}
                    checked={task.completed}
                    onCheckedChange={() => toggleTask(task.id)}
                    className="mt-1"
                  />
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <label
                            htmlFor={task.id}
                            className={`text-lg font-semibold cursor-pointer ${task.completed ? "line-through text-muted-foreground" : ""}`}
                          >
                            {task.title}
                          </label>
                          <Badge variant="outline" className="text-xs">
                            <Icon className="h-3 w-3 mr-1" />
                            {task.category}
                          </Badge>
                          <Badge variant="outline" className={`text-xs ${getPriorityColor(task.priority)}`}>
                            {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Media" : "Baja"}{" "}
                            prioridad
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{task.description}</p>

                        {/* Task Meta Info */}
                        <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>Fecha límite: {new Date(task.deadline).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>Tiempo estimado: {task.estimatedTime}</span>
                          </div>
                        </div>

                        {/* Subtask Progress */}
                        {!task.completed && (
                          <div className="mt-3 space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-muted-foreground">
                                Subtareas: {completedSubtasks}/{task.subtasks.length}
                              </span>
                              <span className="font-medium">{Math.round(subtaskProgress)}%</span>
                            </div>
                            <Progress value={subtaskProgress} className="h-1.5" />
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {task.completed ? (
                          <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                        ) : (
                          <Circle className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                        )}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpanded(task.id)}
                          className="flex-shrink-0"
                        >
                          {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="space-y-4 pt-4 border-t">
                        {/* Subtasks */}
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Subtareas
                          </h4>
                          <div className="space-y-2 pl-6">
                            {task.subtasks.map((subtask) => (
                              <div key={subtask.id} className="flex items-center gap-3">
                                <Checkbox
                                  id={subtask.id}
                                  checked={subtask.completed}
                                  onCheckedChange={() => toggleSubtask(task.id, subtask.id)}
                                />
                                <label
                                  htmlFor={subtask.id}
                                  className={`text-sm cursor-pointer ${subtask.completed ? "line-through text-muted-foreground" : ""}`}
                                >
                                  {subtask.title}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Resources */}
                        <div className="space-y-2">
                          <h4 className="font-medium text-sm flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Recursos útiles
                          </h4>
                          <div className="space-y-2 pl-6">
                            {task.resources.map((resource, idx) => (
                              <a
                                key={idx}
                                href={resource.url}
                                className="flex items-center gap-2 text-sm text-primary hover:underline"
                              >
                                <ExternalLink className="h-3 w-3" />
                                {resource.title}
                              </a>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2 pt-2">
                          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            <Upload className="h-4 w-4" />
                            Subir documento
                          </Button>
                          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                            <Plus className="h-4 w-4" />
                            Agregar nota
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
