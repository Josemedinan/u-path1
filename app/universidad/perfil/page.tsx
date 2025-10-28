"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import {
  X,
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Users,
  GraduationCap,
  TrendingUp,
  Award,
  DollarSign,
  BookOpen,
  Home,
  Utensils,
  Dumbbell,
  Library,
  Microscope,
  Upload,
  Plus,
  Star,
  CheckCircle2,
} from "lucide-react"

export default function PerfilUniversidadPage() {
  const [programas, setProgramas] = useState(["Ingeniería en Computación", "Medicina", "Negocios"])
  const [becas, setBecas] = useState(["Beca de Excelencia Académica", "Beca Deportiva"])
  const [instalaciones, setInstalaciones] = useState(["Biblioteca Central", "Laboratorios de Ciencias"])
  const [acreditaciones, setAcreditaciones] = useState(["ABET", "AACSB"])
  const [nuevoPrograma, setNuevoPrograma] = useState("")
  const [nuevaBeca, setNuevaBeca] = useState("")
  const [nuevaInstalacion, setNuevaInstalacion] = useState("")
  const [nuevaAcreditacion, setNuevaAcreditacion] = useState("")

  const removeItem = (list: string[], setList: (list: string[]) => void, item: string) => {
    setList(list.filter((i) => i !== item))
  }

  const addItem = (list: string[], setList: (list: string[]) => void, item: string, setItem: (val: string) => void) => {
    if (item.trim()) {
      setList([...list, item.trim()])
      setItem("")
    }
  }

  const instalacionesSugeridas = [
    { nombre: "Centro Deportivo", icon: Dumbbell },
    { nombre: "Cafetería", icon: Utensils },
    { nombre: "Residencias Estudiantiles", icon: Home },
    { nombre: "Centro de Investigación", icon: Microscope },
    { nombre: "Biblioteca Digital", icon: Library },
  ]

  return (
    <div className="space-y-6 pb-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Perfil Institucional</h1>
        <p className="text-muted-foreground">Administra la información completa de tu universidad</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Estudiantes Totales</p>
                <p className="text-2xl font-bold">15,234</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="h-3 w-3" />
                  +12% este año
                </p>
              </div>
              <Users className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tasa de Aceptación</p>
                <p className="text-2xl font-bold">45%</p>
                <Progress value={45} className="mt-2 h-2" />
              </div>
              <CheckCircle2 className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Tasa de Graduación</p>
                <p className="text-2xl font-bold">87%</p>
                <Progress value={87} className="mt-2 h-2" />
              </div>
              <GraduationCap className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Ranking Nacional</p>
                <p className="text-2xl font-bold">#12</p>
                <div className="flex gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
              <Award className="h-8 w-8 text-amber-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <CardTitle>Información Básica</CardTitle>
            </div>
            <CardDescription>Datos generales de la institución</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre-uni" className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-muted-foreground" />
                Nombre de la universidad
              </Label>
              <Input id="nombre-uni" placeholder="Ej: Universidad Nacional de Ciencias" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ubicacion" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Ubicación
              </Label>
              <Input id="ubicacion" placeholder="Ej: Madrid, España" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="tipo-uni">Tipo de institución</Label>
                <Select>
                  <SelectTrigger id="tipo-uni">
                    <SelectValue placeholder="Selecciona el tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="publica">Pública</SelectItem>
                    <SelectItem value="privada">Privada</SelectItem>
                    <SelectItem value="mixta">Mixta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fundacion">Año de fundación</Label>
                <Input id="fundacion" type="number" placeholder="Ej: 1950" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="tamano">Tamaño de la universidad</Label>
              <Select>
                <SelectTrigger id="tamano">
                  <SelectValue placeholder="Selecciona el tamaño" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pequena">Pequeña (menos de 5,000 estudiantes)</SelectItem>
                  <SelectItem value="mediana">Mediana (5,000 - 15,000 estudiantes)</SelectItem>
                  <SelectItem value="grande">Grande (más de 15,000 estudiantes)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <CardTitle>Contacto</CardTitle>
            </div>
            <CardDescription>Información de contacto para estudiantes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email-contacto" className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                Email de admisiones
              </Label>
              <Input id="email-contacto" type="email" placeholder="admisiones@universidad.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefono" className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                Teléfono
              </Label>
              <Input id="telefono" placeholder="+34 912 345 678" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website" className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                Sitio web
              </Label>
              <Input id="website" placeholder="https://universidad.edu" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="direccion" className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                Dirección completa
              </Label>
              <Input id="direccion" placeholder="Calle Principal 123, Ciudad" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="codigo-postal">Código postal</Label>
              <Input id="codigo-postal" placeholder="28001" />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              <CardTitle>Imágenes y Logo</CardTitle>
            </div>
            <CardDescription>Sube el logo y fotos del campus para atraer estudiantes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Logo de la universidad</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Haz clic para subir el logo</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG (máx. 2MB)</p>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Fotos del campus</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">Sube hasta 10 fotos</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG (máx. 5MB cada una)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle>Descripción</CardTitle>
            </div>
            <CardDescription>Presenta tu universidad a los estudiantes de manera atractiva</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Ej: Somos una universidad líder en innovación y excelencia académica, comprometida con formar profesionales que transformen el mundo. Con más de 70 años de historia, ofrecemos programas de vanguardia en un ambiente multicultural..."
              rows={6}
              className="resize-none"
            />
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Caracteres recomendados: 200-500</span>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <CardTitle>Programas Disponibles</CardTitle>
            </div>
            <CardDescription>Carreras y programas académicos que ofreces</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {programas.map((programa) => (
                <Badge key={programa} variant="secondary" className="gap-1 px-3 py-1.5">
                  {programa}
                  <button
                    onClick={() => removeItem(programas, setProgramas, programa)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Ej: Ingeniería Civil, Psicología, Arquitectura..."
                value={nuevoPrograma}
                onChange={(e) => setNuevoPrograma(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    addItem(programas, setProgramas, nuevoPrograma, setNuevoPrograma)
                  }
                }}
              />
              <Button onClick={() => addItem(programas, setProgramas, nuevoPrograma, setNuevoPrograma)}>
                <Plus className="h-4 w-4 mr-1" />
                Agregar
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Ejemplos de programas populares:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Ingeniería Civil",
                  "Psicología",
                  "Administración de Empresas",
                  "Derecho",
                  "Arquitectura",
                  "Enfermería",
                  "Diseño Gráfico",
                  "Contabilidad",
                ].map((ejemplo) => (
                  <Badge
                    key={ejemplo}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => {
                      if (!programas.includes(ejemplo)) {
                        setProgramas([...programas, ejemplo])
                      }
                    }}
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    {ejemplo}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <CardTitle>Requisitos de Admisión</CardTitle>
            </div>
            <CardDescription>Criterios académicos para aplicar</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="gpa-minimo">GPA mínimo requerido</Label>
              <Input id="gpa-minimo" type="number" step="0.1" placeholder="3.0" />
              <p className="text-xs text-muted-foreground">Escala de 0.0 a 4.0</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sat-minimo">SAT mínimo</Label>
              <Input id="sat-minimo" type="number" placeholder="1200" />
              <p className="text-xs text-muted-foreground">Puntaje de 400-1600</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="act-minimo">ACT mínimo</Label>
              <Input id="act-minimo" type="number" placeholder="24" />
              <p className="text-xs text-muted-foreground">Puntaje de 1-36</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="toefl-minimo">TOEFL mínimo (estudiantes internacionales)</Label>
              <Input id="toefl-minimo" type="number" placeholder="80" />
              <p className="text-xs text-muted-foreground">Puntaje de 0-120</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="ielts-minimo">IELTS mínimo (alternativa)</Label>
              <Input id="ielts-minimo" type="number" step="0.5" placeholder="6.5" />
              <p className="text-xs text-muted-foreground">Puntaje de 0-9</p>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-medium">Ensayo requerido</p>
                <p className="text-sm text-muted-foreground">Los estudiantes deben enviar un ensayo personal</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-medium">Cartas de recomendación</p>
                <p className="text-sm text-muted-foreground">Requiere 2-3 cartas de profesores</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-medium">Entrevista personal</p>
                <p className="text-sm text-muted-foreground">Entrevista con el comité de admisiones</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <CardTitle>Becas Disponibles</CardTitle>
            </div>
            <CardDescription>Programas de ayuda financiera y becas</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {becas.map((beca) => (
                <Badge key={beca} variant="secondary" className="gap-1 px-3 py-1.5">
                  {beca}
                  <button onClick={() => removeItem(becas, setBecas, beca)} className="ml-1 hover:text-destructive">
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Nombre de la beca..."
                value={nuevaBeca}
                onChange={(e) => setNuevaBeca(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    addItem(becas, setBecas, nuevaBeca, setNuevaBeca)
                  }
                }}
              />
              <Button onClick={() => addItem(becas, setBecas, nuevaBeca, setNuevaBeca)}>
                <Plus className="h-4 w-4 mr-1" />
                Agregar
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm font-medium mb-2">Ejemplos de becas comunes:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Beca por Mérito Académico",
                  "Beca Deportiva",
                  "Beca de Liderazgo",
                  "Beca para Estudiantes Internacionales",
                  "Beca de Necesidad Económica",
                ].map((ejemplo) => (
                  <Badge
                    key={ejemplo}
                    variant="outline"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => {
                      if (!becas.includes(ejemplo)) {
                        setBecas([...becas, ejemplo])
                      }
                    }}
                  >
                    <Plus className="h-3 w-3 mr-1" />
                    {ejemplo}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              <CardTitle>Costos y Matrícula</CardTitle>
            </div>
            <CardDescription>Información sobre costos anuales y gastos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="matricula-nacional">Matrícula anual (estudiantes nacionales)</Label>
                <Input id="matricula-nacional" type="number" placeholder="15000" />
                <p className="text-xs text-muted-foreground">En tu moneda local</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="matricula-internacional">Matrícula anual (estudiantes internacionales)</Label>
                <Input id="matricula-internacional" type="number" placeholder="25000" />
                <p className="text-xs text-muted-foreground">En tu moneda local</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="alojamiento">Costo de alojamiento (anual)</Label>
                <Input id="alojamiento" type="number" placeholder="8000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="alimentacion">Costo de alimentación (anual)</Label>
                <Input id="alimentacion" type="number" placeholder="4000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="libros">Libros y materiales (anual)</Label>
                <Input id="libros" type="number" placeholder="1200" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="otros">Otros gastos (anual)</Label>
                <Input id="otros" type="number" placeholder="2000" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <CardTitle>Instalaciones del Campus</CardTitle>
            </div>
            <CardDescription>Infraestructura y servicios disponibles para estudiantes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {instalaciones.map((instalacion) => (
                <Badge key={instalacion} variant="secondary" className="gap-1 px-3 py-1.5">
                  {instalacion}
                  <button
                    onClick={() => removeItem(instalaciones, setInstalaciones, instalacion)}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Nombre de la instalación..."
                value={nuevaInstalacion}
                onChange={(e) => setNuevaInstalacion(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    addItem(instalaciones, setInstalaciones, nuevaInstalacion, setNuevaInstalacion)
                  }
                }}
              />
              <Button onClick={() => addItem(instalaciones, setInstalaciones, nuevaInstalacion, setNuevaInstalacion)}>
                <Plus className="h-4 w-4 mr-1" />
                Agregar
              </Button>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-sm font-medium mb-3">Instalaciones sugeridas:</p>
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {instalacionesSugeridas.map((sugerencia) => (
                  <Button
                    key={sugerencia.nombre}
                    variant="outline"
                    size="sm"
                    className="justify-start bg-transparent"
                    onClick={() => {
                      if (!instalaciones.includes(sugerencia.nombre)) {
                        setInstalaciones([...instalaciones, sugerencia.nombre])
                      }
                    }}
                  >
                    <sugerencia.icon className="h-4 w-4 mr-2" />
                    {sugerencia.nombre}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              <CardTitle>Rankings y Reconocimientos</CardTitle>
            </div>
            <CardDescription>Posiciones en rankings nacionales e internacionales</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="ranking-nacional">Ranking nacional</Label>
              <Input id="ranking-nacional" type="number" placeholder="Ej: 12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ranking-internacional">Ranking internacional (QS/Times)</Label>
              <Input id="ranking-internacional" type="number" placeholder="Ej: 250" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ranking-regional">Ranking regional</Label>
              <Input id="ranking-regional" type="number" placeholder="Ej: 5" />
            </div>
            <div className="space-y-4 pt-2">
              <Label>Acreditaciones</Label>
              <div className="flex flex-wrap gap-2">
                {acreditaciones.map((acred) => (
                  <Badge key={acred} variant="secondary" className="gap-1 px-3 py-1.5">
                    <Award className="h-3 w-3" />
                    {acred}
                    <button
                      onClick={() => removeItem(acreditaciones, setAcreditaciones, acred)}
                      className="ml-1 hover:text-destructive"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Ej: ABET, AACSB, ISO 9001..."
                  value={nuevaAcreditacion}
                  onChange={(e) => setNuevaAcreditacion(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      addItem(acreditaciones, setAcreditaciones, nuevaAcreditacion, setNuevaAcreditacion)
                    }
                  }}
                />
                <Button
                  onClick={() => addItem(acreditaciones, setAcreditaciones, nuevaAcreditacion, setNuevaAcreditacion)}
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Agregar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Información del Profesorado</CardTitle>
            </div>
            <CardDescription>Datos sobre el cuerpo docente</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="num-profesores">Número total de profesores</Label>
              <Input id="num-profesores" type="number" placeholder="450" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ratio-estudiante">Ratio estudiante-profesor</Label>
              <Input id="ratio-estudiante" placeholder="Ej: 15:1" />
              <p className="text-xs text-muted-foreground">Formato: estudiantes:profesor</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="profesores-phd">Profesores con PhD (%)</Label>
              <Input id="profesores-phd" type="number" placeholder="85" />
              <Progress value={85} className="mt-2" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="profesores-tiempo-completo">Profesores de tiempo completo (%)</Label>
              <Input id="profesores-tiempo-completo" type="number" placeholder="75" />
              <Progress value={75} className="mt-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <CardTitle>Perfil de Alumno Ideal</CardTitle>
            </div>
            <CardDescription>Describe el tipo de estudiante que buscas atraer</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="Ej: Buscamos estudiantes apasionados por el aprendizaje, con mentalidad innovadora y compromiso social. Valoramos la diversidad, el pensamiento crítico y el deseo de hacer una diferencia en el mundo..."
              rows={5}
              className="resize-none"
            />
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
        <Button variant="outline" className="sm:w-auto w-full bg-transparent">
          Cancelar
        </Button>
        <Button className="bg-primary hover:bg-primary/90 sm:w-auto w-full">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Guardar cambios
        </Button>
      </div>
    </div>
  )
}
