"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Search } from "lucide-react"

const conversations = [
  {
    id: "1",
    university: "MIT",
    lastMessage: "Gracias por tu interés. ¿Tienes preguntas?",
    time: "10:30 AM",
    unread: 2,
  },
  {
    id: "2",
    university: "Stanford",
    lastMessage: "Te invitamos a nuestra sesión informativa",
    time: "Ayer",
    unread: 0,
  },
  {
    id: "3",
    university: "Universidad de Barcelona",
    lastMessage: "Hemos recibido tu aplicación",
    time: "2 días",
    unread: 1,
  },
]

const messages = [
  {
    id: "1",
    sender: "university",
    text: "Hola! Gracias por tu interés en MIT. ¿En qué podemos ayudarte?",
    time: "10:25 AM",
  },
  {
    id: "2",
    sender: "student",
    text: "Hola! Me gustaría saber más sobre el programa de Ingeniería en Computación",
    time: "10:27 AM",
  },
  {
    id: "3",
    sender: "university",
    text: "Excelente elección. Nuestro programa es uno de los mejores del mundo. ¿Tienes preguntas específicas?",
    time: "10:30 AM",
  },
]

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(conversations[0])
  const [messageText, setMessageText] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Chat</h1>
        <p className="text-muted-foreground">Conversa con universidades interesadas</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardContent className="p-0">
            <div className="border-b border-border p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar conversaciones..." className="pl-9" />
              </div>
            </div>
            <div className="divide-y divide-border">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv)}
                  className={`w-full p-4 text-left transition-colors hover:bg-accent ${selectedChat.id === conv.id ? "bg-accent" : ""}`}
                >
                  <div className="flex items-start gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {conv.university.substring(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{conv.university}</h3>
                        <span className="text-xs text-muted-foreground">{conv.time}</span>
                      </div>
                      <p className="truncate text-sm text-muted-foreground">{conv.lastMessage}</p>
                    </div>
                    {conv.unread > 0 && (
                      <Badge variant="default" className="bg-primary">
                        {conv.unread}
                      </Badge>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardContent className="flex h-[600px] flex-col p-0">
            <div className="flex items-center gap-3 border-b border-border p-4">
              <Avatar>
                <AvatarFallback className="bg-primary/10 text-primary">
                  {selectedChat.university.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{selectedChat.university}</h3>
                <p className="text-sm text-muted-foreground">En línea</p>
              </div>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto p-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "student" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[70%] rounded-lg p-3 ${
                      message.sender === "student" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="mt-1 block text-xs opacity-70">{message.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Escribe un mensaje..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      setMessageText("")
                    }
                  }}
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
