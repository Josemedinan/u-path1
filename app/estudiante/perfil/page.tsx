"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  X,
  Search,
  Plus,
  Calendar,
  Award,
  TrendingUp,
  Info,
  Sparkles,
  Globe,
  BookOpen,
  Target,
  Star,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

type Achievement = {
  id: string
  title: string
  date: string
  description: string
  category: string
}

type GradeEntry = {
  period: string
  grade: string
  scale: string
}

type Language = {
  name: string
  proficiency: string
}

type Exam = {
  name: string
  score: string
  maxScore: string
  date: string
}

export default function PerfilPage() {
  const [idiomas, setIdiomas] = useState<Language[]>([
    { name: "Español", proficiency: "Nativo" },
    { name: "Inglés", proficiency: "Avanzado" },
  ])

  const [actividades, setActividades] = useState(["Debate", "Voluntariado"])
  const [newLanguage, setNewLanguage] = useState({ name: "", proficiency: "Intermedio" })

  const suggestedLanguages = [
    "Inglés",
    "Español",
    "Francés",
    "Alemán",
    "Italiano",
    "Portugués",
    "Mandarín",
    "Japonés",
    "Coreano",
    "Árabe",
    "Ruso",
    "Holandés",
  ]

  const [exams, setExams] = useState<Exam[]>([
    { name: "SAT", score: "1450", maxScore: "1600", date: "2024-03" },
    { name: "TOEFL", score: "105", maxScore: "120", date: "2024-01" },
  ])

  const [newExam, setNewExam] = useState({ name: "SAT", score: "", maxScore: "1600", date: "" })

  const [grades, setGrades] = useState<GradeEntry[]>([
    { period: "9° Grado", grade: "3.8", scale: "4.0" },
    { period: "10° Grado", grade: "3.9", scale: "4.0" },
    { period: "11° Grado", grade: "4.0", scale: "4.0" },
    { period: "12° Grado", grade: "", scale: "4.0" },
  ])

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "1",
      title: "Primer lugar en Olimpiada de Matemáticas",
      date: "2024-03",
      description: "Competencia nacional con 500+ participantes",
      category: "Académico",
    },
    {
      id: "2",
      title: "Capitán del equipo de debate",
      date: "2023-09",
      description: "Lideré el equipo a semifinales regionales",
      category: "Liderazgo",
    },
  ])

  const [newAchievement, setNewAchievement] = useState({
    title: "",
    date: "",
    description: "",
    category: "Académico",
  })

  const suggestedActivities = [
    "Fútbol",
    "Baloncesto",
    "Natación",
    "Atletismo",
    "Robótica",
    "Programación",
    "Debate",
    "Modelo de Naciones Unidas",
    "Voluntariado comunitario",
    "Tutoría",
    "Banco de alimentos",
    "Presidente estudiantil",
    "Tesorero de clase",
    "Representante estudiantil",
    "Banda musical",
    "Coro",
    "Teatro",
    "Artes visuales",
    "Fotografía",
  ]

  const removeItem = (list: string[], setList: (list: string[]) => void, item: string) => {
    setList(list.filter((i) => i !== item))
  }

  const removeLanguage = (name: string) => {
    setIdiomas(idiomas.filter((l) => l.name !== name))
  }

  const addLanguage = () => {
    if (newLanguage.name && !idiomas.some((l) => l.name === newLanguage.name)) {
      setIdiomas([...idiomas, newLanguage])
      setNewLanguage({ name: "", proficiency: "Intermedio" })
    }
  }

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Nativo":
        return "bg-green-500"
      case "Avanzado":
        return "bg-blue-500"
      case "Intermedio":
        return "bg-yellow-500"
      case "Básico":
        return "bg-orange-500"
      default:
        return "bg-gray-500"
    }
  }

  const getProficiencyPercentage = (proficiency: string) => {
    switch (proficiency) {
      case "Nativo":
        return 100
      case "Avanzado":
        return 80
      case "Intermedio":
        return 60
      case "Básico":
        return 40
      default:
        return 0
    }
  }

  const addExam = () => {
    if (newExam.name && newExam.score && newExam.date) {
      setExams([...exams, newExam])
      setNewExam({ name: "SAT", score: "", maxScore: "1600", date: "" })
    }
  }

  const removeExam = (index: number) => {
    setExams(exams.filter((_, i) => i !== index))
  }

  const getExamPercentage = (score: string, maxScore: string) => {
    const scoreNum = Number.parseFloat(score)
    const maxNum = Number.parseFloat(maxScore)
    if (isNaN(scoreNum) || isNaN(maxNum) || maxNum === 0) return 0
    return Math.round((scoreNum / maxNum) * 100)
  }

  const calculateAverageGPA = () => {
    const validGrades = grades.filter((g) => g.grade && !isNaN(Number.parseFloat(g.grade)))
    if (validGrades.length === 0) return 0
    const sum = validGrades.reduce((acc, g) => acc + Number.parseFloat(g.grade), 0)
    return (sum / validGrades.length).toFixed(2)
  }

  const addAchievement = () => {
    if (newAchievement.title && newAchievement.date) {
      setAchievements([...achievements, { ...newAchievement, id: Date.now().toString() }])
      setNewAchievement({ title: "", date: "", description: "", category: "Académico" })
    }
  }

  const removeAchievement = (id: string) => {
    setAchievements(achievements.filter((a) => a.id !== id))
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Académico":
        return <BookOpen className="h-4 w-4" />
      case "Deportivo":
        return <Target className="h-4 w-4" />
      case "Liderazgo":
        return <Star className="h-4 w-4" />
      default:
        return <Award className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-lg blur-3xl -z-10" />
        <div className="relative">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Mi Perfil
          </h1>
          <p className="text-muted-foreground mt-2">
            Completa tu información académica para obtener mejores matches con universidades
          </p>
        </div>
      </div>

      <Card className="border-primary/20 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-primary" />
                Notas / GPA
              </CardTitle>
              <CardDescription className="mt-1">Detalla tu rendimiento académico por año</CardDescription>
            </div>
            <div className="text-right bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-lg p-4 border border-primary/20">
              <div className="text-sm text-muted-foreground mb-1">Promedio General</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                {calculateAverageGPA()}
              </div>
              <div className="text-xs text-muted-foreground mt-1">de 4.0</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border border-primary/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-primary/10 to-purple-500/10 p-4 font-semibold">
              <div>Período</div>
              <div>Nota / GPA</div>
              <div>Escala</div>
            </div>
            {grades.map((grade, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 border-b border-primary/5 p-4 last:border-b-0 hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center font-medium">{grade.period}</div>
                <div>
                  <Input
                    type="number"
                    step="0.01"
                    value={grade.grade}
                    onChange={(e) => {
                      const newGrades = [...grades]
                      newGrades[index].grade = e.target.value
                      setGrades(newGrades)
                    }}
                    placeholder="3.8"
                    className="h-10"
                  />
                </div>
                <div>
                  <Select
                    value={grade.scale}
                    onValueChange={(value) => {
                      const newGrades = [...grades]
                      newGrades[index].scale = value
                      setGrades(newGrades)
                    }}
                  >
                    <SelectTrigger className="h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4.0">4.0</SelectItem>
                      <SelectItem value="5.0">5.0</SelectItem>
                      <SelectItem value="10.0">10.0</SelectItem>
                      <SelectItem value="100">100</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setGrades([...grades, { period: "Universidad Año 1", grade: "", scale: "4.0" }])}
            className="w-full border-dashed border-primary/30 hover:border-primary hover:bg-primary/5"
          >
            <Plus className="mr-2 h-4 w-4" />
            Agregar año universitario
          </Button>

          <div className="rounded-lg bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/10 p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold mb-2 text-foreground">Consejos para completar tus notas:</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Incluye todas las notas de secundaria (9° a 12° grado)</li>
                  <li>Si estás en universidad, agrega tus años universitarios</li>
                  <li>Selecciona la escala correcta según tu sistema educativo</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Globe className="h-5 w-5 text-primary" />
              Idiomas
            </CardTitle>
            <CardDescription>Idiomas que hablas y tu nivel de dominio</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current languages with proficiency bars */}
            <div className="space-y-3">
              {idiomas.map((idioma) => (
                <div
                  key={idioma.name}
                  className="rounded-lg border border-primary/10 p-4 space-y-2 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{idioma.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {idioma.proficiency}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeLanguage(idioma.name)}
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="space-y-1">
                    <Progress value={getProficiencyPercentage(idioma.proficiency)} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>Básico</span>
                      <span>Nativo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add new language form */}
            <div className="rounded-lg border-2 border-dashed border-primary/30 p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Plus className="h-4 w-4 text-primary" />
                Agregar idioma
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-language">Idioma</Label>
                  <Input
                    id="new-language"
                    value={newLanguage.name}
                    onChange={(e) => setNewLanguage({ ...newLanguage, name: e.target.value })}
                    placeholder="Ej: Francés"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="proficiency">Nivel</Label>
                  <Select
                    value={newLanguage.proficiency}
                    onValueChange={(value) => setNewLanguage({ ...newLanguage, proficiency: value })}
                  >
                    <SelectTrigger id="proficiency">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Nativo">Nativo</SelectItem>
                      <SelectItem value="Avanzado">Avanzado (C1-C2)</SelectItem>
                      <SelectItem value="Intermedio">Intermedio (B1-B2)</SelectItem>
                      <SelectItem value="Básico">Básico (A1-A2)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button onClick={addLanguage} className="w-full" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Agregar
              </Button>
            </div>

            {/* Language suggestions */}
            <div className="rounded-lg bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/10 p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 text-primary" />
                Idiomas sugeridos
              </div>
              <div className="flex flex-wrap gap-2">
                {suggestedLanguages.map((lang) => (
                  <Badge
                    key={lang}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => {
                      if (!idiomas.some((l) => l.name === lang)) {
                        setIdiomas([...idiomas, { name: lang, proficiency: "Intermedio" }])
                      }
                    }}
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <BookOpen className="h-5 w-5 text-primary" />
              Exámenes Estandarizados
            </CardTitle>
            <CardDescription>SAT, ACT, TOEFL, IELTS, AP, IB, etc.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Current exams with score visualization */}
            <div className="space-y-3">
              {exams.map((exam, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-primary/10 p-4 space-y-2 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{exam.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {new Date(exam.date).toLocaleDateString("es-ES", { year: "numeric", month: "short" })}
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExam(index)}
                      className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Puntaje</span>
                    <span className="font-bold text-lg">
                      {exam.score} / {exam.maxScore}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Progress value={getExamPercentage(exam.score, exam.maxScore)} className="h-2" />
                    <div className="text-xs text-right text-muted-foreground">
                      {getExamPercentage(exam.score, exam.maxScore)}% del puntaje máximo
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Add new exam form */}
            <div className="rounded-lg border-2 border-dashed border-primary/30 p-4 space-y-3">
              <div className="flex items-center gap-2 text-sm font-medium">
                <Plus className="h-4 w-4 text-primary" />
                Agregar examen
              </div>
              <div className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="exam-name">Examen</Label>
                    <Select value={newExam.name} onValueChange={(value) => setNewExam({ ...newExam, name: value })}>
                      <SelectTrigger id="exam-name">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="SAT">SAT</SelectItem>
                        <SelectItem value="ACT">ACT</SelectItem>
                        <SelectItem value="TOEFL">TOEFL</SelectItem>
                        <SelectItem value="IELTS">IELTS</SelectItem>
                        <SelectItem value="AP">AP</SelectItem>
                        <SelectItem value="IB">IB</SelectItem>
                        <SelectItem value="GRE">GRE</SelectItem>
                        <SelectItem value="GMAT">GMAT</SelectItem>
                        <SelectItem value="Duolingo">Duolingo English Test</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="exam-date">Fecha</Label>
                    <Input
                      id="exam-date"
                      type="month"
                      value={newExam.date}
                      onChange={(e) => setNewExam({ ...newExam, date: e.target.value })}
                    />
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="exam-score">Puntaje obtenido</Label>
                    <Input
                      id="exam-score"
                      type="number"
                      value={newExam.score}
                      onChange={(e) => setNewExam({ ...newExam, score: e.target.value })}
                      placeholder="1450"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="exam-max">Puntaje máximo</Label>
                    <Input
                      id="exam-max"
                      type="number"
                      value={newExam.maxScore}
                      onChange={(e) => setNewExam({ ...newExam, maxScore: e.target.value })}
                      placeholder="1600"
                    />
                  </div>
                </div>
              </div>
              <Button onClick={addExam} className="w-full" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Agregar examen
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Award className="h-6 w-6 text-primary" />
            Logros Extracurriculares
          </CardTitle>
          <CardDescription>
            Premios, competencias, reconocimientos - detalla cada logro con fechas y contexto
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Existing achievements list */}
          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.id}
                className="rounded-lg border border-primary/10 p-5 space-y-3 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1.5">
                        {getCategoryIcon(achievement.category)}
                        <h4 className="font-semibold text-lg">{achievement.title}</h4>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.category}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      {new Date(achievement.date).toLocaleDateString("es-ES", { year: "numeric", month: "long" })}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{achievement.description}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeAchievement(achievement.id)}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add new achievement form */}
          <div className="rounded-lg border-2 border-dashed border-primary/30 p-5 space-y-4 bg-gradient-to-br from-primary/5 to-purple-500/5">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Plus className="h-4 w-4 text-primary" />
              Agregar nuevo logro
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="achievement-title">Título del logro</Label>
                <Input
                  id="achievement-title"
                  value={newAchievement.title}
                  onChange={(e) => setNewAchievement({ ...newAchievement, title: e.target.value })}
                  placeholder="Ej: Primer lugar en Olimpiada de Matemáticas"
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="achievement-date">Fecha</Label>
                <Input
                  id="achievement-date"
                  type="month"
                  value={newAchievement.date}
                  onChange={(e) => setNewAchievement({ ...newAchievement, date: e.target.value })}
                  className="h-10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="achievement-category">Categoría</Label>
                <Select
                  value={newAchievement.category}
                  onValueChange={(value) => setNewAchievement({ ...newAchievement, category: value })}
                >
                  <SelectTrigger id="achievement-category" className="h-10">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Académico">📚 Académico</SelectItem>
                    <SelectItem value="Deportivo">⚽ Deportivo</SelectItem>
                    <SelectItem value="Artístico">🎨 Artístico</SelectItem>
                    <SelectItem value="Liderazgo">⭐ Liderazgo</SelectItem>
                    <SelectItem value="Servicio comunitario">🤝 Servicio comunitario</SelectItem>
                    <SelectItem value="Otro">✨ Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="achievement-description">Descripción detallada</Label>
                <Textarea
                  id="achievement-description"
                  value={newAchievement.description}
                  onChange={(e) => setNewAchievement({ ...newAchievement, description: e.target.value })}
                  placeholder="Describe qué ganaste, cuántos participantes había, qué hiciste especial, impacto que tuviste..."
                  rows={3}
                  className="resize-none"
                />
              </div>
            </div>
            <Button onClick={addAchievement} className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Agregar logro
            </Button>
          </div>
        </CardContent>
      </Card>

      

      

      <Card className="border-primary/20 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="h-5 w-5 text-primary" />
            Actividades Extracurriculares
          </CardTitle>
          <CardDescription>Deportes, clubes, voluntariado, liderazgo y más</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {actividades.map((actividad) => (
              <Badge key={actividad} variant="secondary" className="gap-1 px-3 py-1.5 text-sm">
                {actividad}
                <button
                  onClick={() => removeItem(actividades, setActividades, actividad)}
                  className="ml-1 hover:text-destructive transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input placeholder="Agregar actividad personalizada" className="h-10" />
            <Button className="shrink-0">Agregar</Button>
          </div>

          <div className="rounded-lg bg-gradient-to-r from-primary/5 to-purple-500/5 border border-primary/10 p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-primary" />
              Sugerencias de actividades populares
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestedActivities.map((activity) => (
                <Badge
                  key={activity}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
                  onClick={() => {
                    if (!actividades.includes(activity)) {
                      setActividades([...actividades, activity])
                    }
                  }}
                >
                  <Plus className="h-3 w-3 mr-1" />
                  {activity}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-primary/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-primary" />
            Filtros de Búsqueda
          </CardTitle>
          <CardDescription>Define tus preferencias para encontrar universidades ideales</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <Label htmlFor="pais-busqueda">País / Región</Label>
              <Select>
                <SelectTrigger id="pais-busqueda">
                  <SelectValue placeholder="Selecciona país" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">Estados Unidos</SelectItem>
                  <SelectItem value="uk">Reino Unido</SelectItem>
                  <SelectItem value="ca">Canadá</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                  <SelectItem value="es">España</SelectItem>
                  <SelectItem value="fr">Francia</SelectItem>
                  <SelectItem value="de">Alemania</SelectItem>
                  <SelectItem value="mx">México</SelectItem>
                  <SelectItem value="ar">Argentina</SelectItem>
                  <SelectItem value="co">Colombia</SelectItem>
                  <SelectItem value="cl">Chile</SelectItem>
                  <SelectItem value="br">Brasil</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipo-universidad">Tipo de Universidad</Label>
              <Select>
                <SelectTrigger id="tipo-universidad">
                  <SelectValue placeholder="Selecciona tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="publica">Pública</SelectItem>
                  <SelectItem value="privada">Privada</SelectItem>
                  <SelectItem value="ambas">Ambas</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tamano">Tamaño de Universidad</Label>
              <Select>
                <SelectTrigger id="tamano">
                  <SelectValue placeholder="Selecciona tamaño" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pequena">Pequeña (&lt;5,000)</SelectItem>
                  <SelectItem value="mediana">Mediana (5,000-15,000)</SelectItem>
                  <SelectItem value="grande">Grande (&gt;15,000)</SelectItem>
                  <SelectItem value="cualquiera">Cualquiera</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ubicacion-campus">Ubicación del Campus</Label>
              <Select>
                <SelectTrigger id="ubicacion-campus">
                  <SelectValue placeholder="Selecciona ubicación" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="urbana">Urbana (ciudad grande)</SelectItem>
                  <SelectItem value="suburbana">Suburbana</SelectItem>
                  <SelectItem value="rural">Rural / Pueblo pequeño</SelectItem>
                  <SelectItem value="cualquiera">Cualquiera</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="costo">Rango de Costo Anual</Label>
              <Select>
                <SelectTrigger id="costo">
                  <SelectValue placeholder="Selecciona rango" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bajo">Bajo (&lt;$20,000)</SelectItem>
                  <SelectItem value="medio">Medio ($20,000-$40,000)</SelectItem>
                  <SelectItem value="alto">Alto ($40,000-$60,000)</SelectItem>
                  <SelectItem value="muy-alto">Muy alto (&gt;$60,000)</SelectItem>
                  <SelectItem value="cualquiera">Cualquiera</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tasa-aceptacion">Tasa de Aceptación</Label>
              <Select>
                <SelectTrigger id="tasa-aceptacion">
                  <SelectValue placeholder="Selecciona rango" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="muy-selectiva">Muy selectiva (&lt;20%)</SelectItem>
                  <SelectItem value="selectiva">Selectiva (20%-50%)</SelectItem>
                  <SelectItem value="moderada">Moderada (50%-75%)</SelectItem>
                  <SelectItem value="abierta">Abierta (&gt;75%)</SelectItem>
                  <SelectItem value="cualquiera">Cualquiera</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="becas">Becas Disponibles</Label>
              <Select>
                <SelectTrigger id="becas">
                  <SelectValue placeholder="Selecciona opción" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="merito">Becas por mérito</SelectItem>
                  <SelectItem value="necesidad">Becas por necesidad</SelectItem>
                  <SelectItem value="deportivas">Becas deportivas</SelectItem>
                  <SelectItem value="todas">Todas las becas</SelectItem>
                  <SelectItem value="indiferente">Indiferente</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="ratio">Ratio Estudiante-Profesor</Label>
              <Select>
                <SelectTrigger id="ratio">
                  <SelectValue placeholder="Selecciona ratio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bajo">Bajo (&lt;10:1)</SelectItem>
                  <SelectItem value="medio">Medio (10:1-20:1)</SelectItem>
                  <SelectItem value="alto">Alto (&gt;20:1)</SelectItem>
                  <SelectItem value="cualquiera">Cualquiera</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="area-estudio">Área de Estudio Principal</Label>
              <Select>
                <SelectTrigger id="area-estudio">
                  <SelectValue placeholder="Selecciona área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ingenieria">Ingeniería</SelectItem>
                  <SelectItem value="ciencias-computacion">Ciencias de la Computación</SelectItem>
                  <SelectItem value="medicina">Medicina / Ciencias de la Salud</SelectItem>
                  <SelectItem value="negocios">Negocios / Administración</SelectItem>
                  <SelectItem value="derecho">Derecho</SelectItem>
                  <SelectItem value="artes">Artes / Humanidades</SelectItem>
                  <SelectItem value="ciencias">Ciencias Naturales</SelectItem>
                  <SelectItem value="ciencias-sociales">Ciencias Sociales</SelectItem>
                  <SelectItem value="educacion">Educación</SelectItem>
                  <SelectItem value="arquitectura">Arquitectura / Diseño</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-lg bg-primary/10 border border-primary/20 p-4">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-medium mb-1">Tip: Sé específico pero flexible</p>
                <p className="text-muted-foreground">
                  Mientras más filtros uses, menos universidades encontrarás. Empieza con los criterios más importantes
                  para ti (país, área de estudio, becas) y ajusta después.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 px-8">
              <Search className="mr-2 h-5 w-5" />
              Buscar universidades
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button variant="outline">Cancelar</Button>
        <Button className="bg-primary hover:bg-primary/90">Guardar cambios</Button>
      </div>
    </div>
  )
}
