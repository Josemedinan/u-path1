import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

export default function AjustesUniversidadPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ajustes</h1>
        <p className="text-muted-foreground">Configura tu cuenta institucional</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Cuenta</CardTitle>
          <CardDescription>Administra tu información de cuenta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email-settings">Correo institucional</Label>
            <Input id="email-settings" type="email" placeholder="admisiones@universidad.edu" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password-settings">Cambiar contraseña</Label>
            <Input id="password-settings" type="password" placeholder="Nueva contraseña" />
          </div>
          <Button className="bg-primary hover:bg-primary/90">Guardar cambios</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notificaciones</CardTitle>
          <CardDescription>Configura cómo quieres recibir notificaciones</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Nuevos estudiantes interesados</p>
              <p className="text-sm text-muted-foreground">Notificaciones de nuevos matches</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Mensajes</p>
              <p className="text-sm text-muted-foreground">Notificaciones de nuevos mensajes</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Aplicaciones recibidas</p>
              <p className="text-sm text-muted-foreground">Cuando un estudiante aplica</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Visibilidad</CardTitle>
          <CardDescription>Controla cómo aparece tu universidad</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Perfil público</p>
              <p className="text-sm text-muted-foreground">Permite que estudiantes vean tu perfil</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Aparecer en búsquedas</p>
              <p className="text-sm text-muted-foreground">Muestra tu universidad en resultados de búsqueda</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Aceptar nuevos estudiantes</p>
              <p className="text-sm text-muted-foreground">Permite que nuevos estudiantes te contacten</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Equipo</CardTitle>
          <CardDescription>Administra usuarios con acceso a la cuenta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="invite-email">Invitar miembro del equipo</Label>
            <div className="flex gap-2">
              <Input id="invite-email" type="email" placeholder="email@universidad.edu" />
              <Button>Invitar</Button>
            </div>
          </div>
          <div className="rounded-lg border border-border p-4">
            <p className="text-sm text-muted-foreground">No hay miembros del equipo adicionales</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
