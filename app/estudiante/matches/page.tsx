"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import {
  MapPin,
  Heart,
  ExternalLink,
  DollarSign,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  Globe,
  Building2,
  Star,
  Search,
  Filter,
  ArrowUpDown,
  Bookmark,
  Calendar,
  GraduationCap,
  Target,
  BarChart3,
} from "lucide-react"

const universities = [
  {
    id: 1,
    name: "Massachusetts Institute of Technology",
    shortName: "MIT",
    location: "Cambridge, MA, USA",
    country: "Estados Unidos",
    type: "Privada",
    match: 95,
    scholarships: true,
    programs: ["Ingeniería", "Ciencias de la Computación", "Física"],
    tuition: "$53,790/año",
    acceptanceRate: 4,
    students: 11520,
    ranking: 1,
    campusType: "Urbano",
    language: "Inglés",
    deadline: "2024-01-01",
    requirements: {
      gpa: 4.0,
      sat: 1520,
      toefl: 100,
    },
    saved: false,
    applied: false,
  },
  {
    id: 2,
    name: "Stanford University",
    shortName: "Stanford",
    location: "Stanford, CA, USA",
    country: "Estados Unidos",
    type: "Privada",
    match: 92,
    scholarships: true,
    programs: ["Ingeniería", "Negocios", "Medicina"],
    tuition: "$56,169/año",
    acceptanceRate: 5,
    students: 17249,
    ranking: 2,
    campusType: "Suburbano",
    language: "Inglés",
    deadline: "2024-01-05",
    requirements: {
      gpa: 3.9,
      sat: 1500,
      toefl: 100,
    },
    saved: true,
    applied: false,
  },
  {
    id: 3,
    name: "Universidad de Barcelona",
    shortName: "UB",
    location: "Barcelona, España",
    country: "España",
    type: "Pública",
    match: 88,
    scholarships: true,
    programs: ["Medicina", "Ciencias", "Humanidades"],
    tuition: "€2,500/año",
    acceptanceRate: 15,
    students: 63000,
    ranking: 184,
    campusType: "Urbano",
    language: "Español/Catalán",
    deadline: "2024-06-30",
    requirements: {
      gpa: 3.5,
      sat: null,
      toefl: null,
    },
    saved: false,
    applied: true,
  },
  {
    id: 4,
    name: "Universidad Nacional Autónoma de México",
    shortName: "UNAM",
    location: "Ciudad de México, México",
    country: "México",
    type: "Pública",
    match: 85,
    scholarships: false,
    programs: ["Ingeniería", "Artes", "Derecho"],
    tuition: "$500/año",
    acceptanceRate: 8,
    students: 356000,
    ranking: 103,
    campusType: "Urbano",
    language: "Español",
    deadline: "2024-03-15",
    requirements: {
      gpa: 3.3,
      sat: null,
      toefl: null,
    },
    saved: true,
    applied: false,
  },
  {
    id: 5,
    name: "University of Cambridge",
    shortName: "Cambridge",
    location: "Cambridge, Reino Unido",
    country: "Reino Unido",
    type: "Pública",
    match: 90,
    scholarships: true,
    programs: ["Matemáticas", "Ingeniería", "Ciencias Naturales"],
    tuition: "£22,227/año",
    acceptanceRate: 21,
    students: 24450,
    ranking: 3,
    campusType: "Urbano",
    language: "Inglés",
    deadline: "2023-10-15",
    requirements: {
      gpa: 3.9,
      sat: 1480,
      toefl: 110,
    },
    saved: false,
    applied: false,
  },
  {
    id: 6,
    name: "ETH Zürich",
    shortName: "ETH",
    location: "Zúrich, Suiza",
    country: "Suiza",
    type: "Pública",
    match: 87,
    scholarships: true,
    programs: ["Ingeniería", "Ciencias", "Arquitectura"],
    tuition: "CHF 1,460/año",
    acceptanceRate: 27,
    students: 24500,
    ranking: 7,
    campusType: "Urbano",
    language: "Alemán/Inglés",
    deadline: "2023-12-15",
    requirements: {
      gpa: 3.7,
      sat: 1450,
      toefl: 100,
    },
    saved: false,
    applied: false,
  },
]

export default function MatchesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedProgram, setSelectedProgram] = useState("all")
  const [matchRange, setMatchRange] = useState([70, 100])
  const [sortBy, setSortBy] = useState("match")
  const [universityList, setUniversityList] = useState(universities)

  const toggleSave = (id: number) => {
    setUniversityList(universityList.map((uni) => (uni.id === id ? { ...uni, saved: !uni.saved } : uni)))
  }

  const savedUniversities = universityList.filter((uni) => uni.saved)
  const appliedUniversities = universityList.filter((uni) => uni.applied)
  const topMatches = universityList.filter((uni) => uni.match >= 90)

  const filteredUniversities = universityList
    .filter((uni) => {
      const matchesSearch = uni.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCountry = selectedCountry === "all" || uni.country === selectedCountry
      const matchesType = selectedType === "all" || uni.type === selectedType
      const matchesProgram =
        selectedProgram === "all" || uni.programs.some((p) => p.toLowerCase().includes(selectedProgram.toLowerCase()))
      const matchesRange = uni.match >= matchRange[0] && uni.match <= matchRange[1]
      return matchesSearch && matchesCountry && matchesType && matchesProgram && matchesRange
    })
    .sort((a, b) => {
      if (sortBy === "match") return b.match - a.match
      if (sortBy === "ranking") return a.ranking - b.ranking
      if (sortBy === "acceptance") return a.acceptanceRate - b.acceptanceRate
      return 0
    })

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="space-y-4">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Mis Matches
          </h1>
          <p className="text-muted-foreground mt-2">
            Universidades recomendadas según tu perfil académico y preferencias
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Matches</p>
                  <p className="text-3xl font-bold text-primary">{universityList.length}</p>
                </div>
                <Target className="h-10 w-10 text-primary/40" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Top Matches</p>
                  <p className="text-3xl font-bold text-green-600">{topMatches.length}</p>
                </div>
                <TrendingUp className="h-10 w-10 text-green-500/40" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Guardadas</p>
                  <p className="text-3xl font-bold text-blue-600">{savedUniversities.length}</p>
                </div>
                <Bookmark className="h-10 w-10 text-blue-500/40" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-transparent">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Aplicadas</p>
                  <p className="text-3xl font-bold text-purple-600">{appliedUniversities.length}</p>
                </div>
                <GraduationCap className="h-10 w-10 text-purple-500/40" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtros de búsqueda
              </CardTitle>
              <CardDescription>Refina tus resultados para encontrar la universidad perfecta</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Ordenar por: {sortBy === "match" ? "Match" : sortBy === "ranking" ? "Ranking" : "Aceptación"}
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar universidades por nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Options */}
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Globe className="h-4 w-4" />
                País
              </label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los países</SelectItem>
                  <SelectItem value="Estados Unidos">Estados Unidos</SelectItem>
                  <SelectItem value="España">España</SelectItem>
                  <SelectItem value="México">México</SelectItem>
                  <SelectItem value="Reino Unido">Reino Unido</SelectItem>
                  <SelectItem value="Suiza">Suiza</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Tipo
              </label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="Pública">Pública</SelectItem>
                  <SelectItem value="Privada">Privada</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Área de estudio
              </label>
              <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas las áreas</SelectItem>
                  <SelectItem value="ingenieria">Ingeniería</SelectItem>
                  <SelectItem value="medicina">Medicina</SelectItem>
                  <SelectItem value="negocios">Negocios</SelectItem>
                  <SelectItem value="ciencias">Ciencias</SelectItem>
                  <SelectItem value="artes">Artes</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <ArrowUpDown className="h-4 w-4" />
                Ordenar por
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="match">% de Match</SelectItem>
                  <SelectItem value="ranking">Ranking Mundial</SelectItem>
                  <SelectItem value="acceptance">Tasa de Aceptación</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Match Range Slider */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Rango de Match
              </label>
              <span className="text-sm text-muted-foreground">
                {matchRange[0]}% - {matchRange[1]}%
              </span>
            </div>
            <Slider value={matchRange} onValueChange={setMatchRange} min={0} max={100} step={5} className="w-full" />
          </div>
        </CardContent>
      </Card>

      {/* Tabs for different views */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todos ({filteredUniversities.length})</TabsTrigger>
          <TabsTrigger value="top">Top Matches ({topMatches.length})</TabsTrigger>
          <TabsTrigger value="saved">Guardadas ({savedUniversities.length})</TabsTrigger>
          <TabsTrigger value="applied">Aplicadas ({appliedUniversities.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {filteredUniversities.map((university) => (
              <UniversityCard key={university.id} university={university} onToggleSave={toggleSave} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="top" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {topMatches.map((university) => (
              <UniversityCard key={university.id} university={university} onToggleSave={toggleSave} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-6">
          {savedUniversities.length === 0 ? (
            <Card className="p-12 text-center">
              <Bookmark className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-semibold">No hay universidades guardadas</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Guarda universidades que te interesen para revisarlas más tarde
              </p>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {savedUniversities.map((university) => (
                <UniversityCard key={university.id} university={university} onToggleSave={toggleSave} />
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="applied" className="space-y-6">
          {appliedUniversities.length === 0 ? (
            <Card className="p-12 text-center">
              <GraduationCap className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-lg font-semibold">No has aplicado a ninguna universidad</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Comienza tu proceso de aplicación seleccionando universidades de tu lista
              </p>
            </Card>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {appliedUniversities.map((university) => (
                <UniversityCard key={university.id} university={university} onToggleSave={toggleSave} />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

function UniversityCard({
  university,
  onToggleSave,
}: {
  university: (typeof universities)[0]
  onToggleSave: (id: number) => void
}) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg hover:border-primary/50">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle className="text-xl truncate">{university.name}</CardTitle>
              {university.ranking <= 10 && (
                <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-700 border-yellow-500/20">
                  <Star className="h-3 w-3 mr-1" />
                  Top 10
                </Badge>
              )}
            </div>
            <CardDescription className="flex items-center gap-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="truncate">{university.location}</span>
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2 flex-shrink-0">
            <Badge
              variant="secondary"
              className={`text-lg font-bold px-3 py-1 ${
                university.match >= 90
                  ? "bg-green-500/10 text-green-700 border-green-500/20"
                  : university.match >= 80
                    ? "bg-blue-500/10 text-blue-700 border-blue-500/20"
                    : "bg-primary/10 text-primary border-primary/20"
              }`}
            >
              {university.match}%
            </Badge>
            <Badge variant="outline" className="text-xs">
              {university.type}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Match Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium">Compatibilidad</span>
            <span className="text-primary font-bold">{university.match}%</span>
          </div>
          <Progress value={university.match} className="h-2" />
        </div>

        {/* Key Stats Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
            <Award className="h-4 w-4 text-primary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Ranking</p>
              <p className="font-semibold truncate">#{university.ranking}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
            <Users className="h-4 w-4 text-primary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Estudiantes</p>
              <p className="font-semibold truncate">{university.students.toLocaleString()}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
            <TrendingUp className="h-4 w-4 text-primary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Aceptación</p>
              <p className="font-semibold truncate">{university.acceptanceRate}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
            <DollarSign className="h-4 w-4 text-primary flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">Matrícula</p>
              <p className="font-semibold truncate">{university.tuition}</p>
            </div>
          </div>
        </div>

        {/* Programs */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Programas destacados</p>
          <div className="flex flex-wrap gap-2">
            {university.programs.slice(0, 3).map((program) => (
              <Badge key={program} variant="secondary" className="text-xs">
                {program}
              </Badge>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="space-y-2 p-3 rounded-lg bg-muted/30 border">
          <p className="text-xs font-medium flex items-center gap-2">
            <Target className="h-3 w-3" />
            Requisitos mínimos
          </p>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <p className="text-muted-foreground">GPA</p>
              <p className="font-semibold">{university.requirements.gpa}</p>
            </div>
            {university.requirements.sat && (
              <div>
                <p className="text-muted-foreground">SAT</p>
                <p className="font-semibold">{university.requirements.sat}</p>
              </div>
            )}
            {university.requirements.toefl && (
              <div>
                <p className="text-muted-foreground">TOEFL</p>
                <p className="font-semibold">{university.requirements.toefl}</p>
              </div>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>Fecha límite: {new Date(university.deadline).toLocaleDateString()}</span>
          </div>
          {university.scholarships && (
            <Badge variant="secondary" className="bg-green-500/10 text-green-700 border-green-500/20 text-xs">
              <DollarSign className="h-3 w-3 mr-1" />
              Becas
            </Badge>
          )}
        </div>

        {/* Status Badges */}
        <div className="flex gap-2">
          {university.applied && (
            <Badge variant="secondary" className="bg-purple-500/10 text-purple-700 border-purple-500/20">
              Aplicada
            </Badge>
          )}
          {university.saved && (
            <Badge variant="secondary" className="bg-blue-500/10 text-blue-700 border-blue-500/20">
              Guardada
            </Badge>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Button
            variant="outline"
            className={`flex-1 ${university.saved ? "bg-blue-500/10 border-blue-500/50" : ""}`}
            onClick={() => onToggleSave(university.id)}
          >
            <Heart className={`mr-2 h-4 w-4 ${university.saved ? "fill-current text-blue-600" : ""}`} />
            {university.saved ? "Guardada" : "Guardar"}
          </Button>
          <Button className="flex-1 bg-primary hover:bg-primary/90">
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
