import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Maximize,
  Mic,
  MicOff,
  Video,
  VideoOff,
  MessageSquare,
  Users,
  FileText,
  ThumbsUp,
  Send,
  BarChart3,
  Hand,
  Circle,
} from "lucide-react";

const LiveClass = () => {
  const { isOpen } = useSidebar();
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoOff, setIsVideoOff] = useState(true);
  const [chatMessage, setChatMessage] = useState("");
  const [reactions, setReactions] = useState([]);

  const chatMessages = [
    { id: 1, user: "Sarah K.", message: "Bela explicação", time: "2:34 PM", avatar: "SK", isInstructor: true },
    { id: 2, user: "Mike Chen", message: "quando será a proxima aula??", time: "2:35 PM", avatar: "MC" },
    { id: 3, user: "Emma Wilson", message: "Obrigado pelo exemplo!", time: "2:36 PM", avatar: "EW" },
  ];

  const participants = [
    { name: "Dr. Sarah Chen", role: "Instrutora", avatar: "SC", online: true },
    { name: "Luis Pinho", role: "Estudante", avatar: "AJ", online: true },
    { name: "Maria Garcia", role: "Estudante", avatar: "MG", online: true },
    { name: "Tom Bradley", role: "Estudante", avatar: "TB", online: true },
  ];

  const addReaction = (emoji) => {
    const newReaction = { id: Date.now(), emoji };
    setReactions((prevReactions) => [...prevReactions, newReaction]);
    setTimeout(() => {
      setReactions((prevReactions) => prevReactions.filter((reaction) => reaction.id !== newReaction.id));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <NavbarSidebar />
      <div className={`transition-all duration-300 md:pt-0 pt-16 flex-1 flex flex-col ${isOpen ? "md:ml-64" : "md:ml-20"}`}>
      
      {/* Cabeçalho */}
      <header className="border-b bg-card px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold">React e TypeScript Avançado</h1>
            <p className="text-sm text-muted-foreground">Dra. Sarah Chen • Ao Vivo Agora</p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="destructive" className="animate-pulse">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              AO VIVO
            </Badge>
            <Badge className="bg-red-600/20 text-red-500 border-red-500/30">
              <Circle className="w-2 h-2 mr-2 fill-red-500" />
              GRAVANDO
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>124 assistindo</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden gap-4 p-4">
        {/* Main Video Area - MAIOR */}
        <div className="flex-1 flex flex-col">
          <Card className="flex-1 relative overflow-hidden bg-black group">
            {/* Vídeo do YouTube */}
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/uSRlK8heDWU?autoplay=1&mute=1&controls=1"
              title="React e TypeScript Avançado"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>

            {/* Sobreposição de Controles de Vídeo */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    size="icon"
                    variant={isMuted ? "destructive" : "secondary"}
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                  <Button
                    size="icon"
                    variant={isVideoOff ? "destructive" : "secondary"}
                    onClick={() => setIsVideoOff(!isVideoOff)}
                  >
                    {isVideoOff ? <VideoOff className="h-4 w-4" /> : <Video className="h-4 w-4" />}
                  </Button>
                  <Button size="icon" variant="secondary">
                    <Hand className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <span className="text-white font-semibold">42:18</span>
                  </div>
                  <Button size="icon" variant="secondary">
                    <Maximize className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Reactions */}
            <div className="absolute top-10 right-10 space-y-2">
              {reactions.map((reaction) => (
                <div 
                  key={reaction.id}
                  className="animate-float opacity-0"
                >
                  {reaction.emoji}
                </div>
              ))}
            </div>

            {/* Instructor Picture-in-Picture - MENOR */}
            <div className="absolute top-6 right-6 w-40 h-28 rounded-lg overflow-hidden border-2 border-white/20 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
                alt="Instrutor"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2">
                <p className="text-white text-xs font-semibold">Dra. Sarah Chen</p>
              </div>
            </div>
          </Card>

          {/* Enquete e Reactions - ABAIXO DO VÍDEO */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Card className="p-4 bg-gradient-card">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-sm mb-1">Enquete Rápida</h3>
                  <p className="text-xs text-muted-foreground">Qual Hook usar?</p>
                </div>
                <BarChart3 className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-2">
                {[
                  { option: "useEffect", votes: 78, isCorrect: true },
                  { option: "useState", votes: 12, isCorrect: false },
                ].map((item, index) => (
                  <button
                    key={index}
                    className={`w-full p-2 rounded text-left text-xs transition-all ${
                      item.isCorrect
                        ? "bg-success/10 border border-success"
                        : "bg-muted hover:bg-muted/80 border border-transparent"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.option}</span>
                      <span className="text-xs">{item.votes}%</span>
                    </div>
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-gradient-card">
              <h3 className="font-semibold text-sm mb-3">Reações</h3>
              <div className="flex gap-2">
                <button onClick={() => addReaction("👍")} className="text-2xl hover:scale-125 transition-transform">👍</button>
                <button onClick={() => addReaction("❤️")} className="text-2xl hover:scale-125 transition-transform">❤️</button>
                <button onClick={() => addReaction("🔥")} className="text-2xl hover:scale-125 transition-transform">🔥</button>
                <button onClick={() => addReaction("🎉")} className="text-2xl hover:scale-125 transition-transform">🎉</button>
              </div>
            </Card>
          </div>
        </div>

        {/* Barra Lateral - MENOR */}
        <div className="w-80 border-l bg-card flex flex-col rounded-lg overflow-hidden">
          <Tabs defaultValue="chat" className="flex-1 flex flex-col">
            <TabsList className="w-full rounded-none border-b">
              <TabsTrigger value="chat" className="flex-1">
                <MessageSquare className="h-4 w-4 mr-2" />
                Chat
              </TabsTrigger>
              <TabsTrigger value="participants" className="flex-1">
                <Users className="h-4 w-4 mr-2" />
                Pessoas
              </TabsTrigger>
              <TabsTrigger value="notes" className="flex-1">
                <FileText className="h-4 w-4 mr-2" />
                Notas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chat" className="flex-1 flex flex-col m-0">
              {/* Mensagens de Chat */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>{msg.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{msg.user}</span>
                        {msg.isInstructor && (
                          <Badge className="bg-accent text-accent-foreground text-xs">Instrutora</Badge>
                        )}
                        <span className="text-xs text-muted-foreground">{msg.time}</span>
                      </div>
                      <p className="text-sm mt-1">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Entrada de Chat */}
              <div className="p-4 border-t">
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite uma mensagem..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1"
                  />
                  <Button size="icon" className="bg-gradient-primary">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="participants" className="flex-1 overflow-y-auto p-4 m-0">
              <div className="space-y-3">
                {participants.map((participant, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {participant.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{participant.name}</p>
                      <p className="text-xs text-muted-foreground">{participant.role === "Instructor" ? "Instrutor" : "Aluno"}</p>
                    </div>
                    {participant.online && (
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="notes" className="overflow-y-auto p-4 m-0 space-y-4">
              <Card className="p-4 bg-primary/5 border-primary">
                <h4 className="font-semibold mb-3 text-primary">📚 Pontos-Chave da Aula</h4>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>useEffect é executado após cada renderização do componente</li>
                  <li>Funções de limpeza previnem vazamento de memória</li>
                  <li>Array de dependência controla quando o efeito é re-executado</li>
                  <li>Efeitos sem dependência rodam apenas uma vez (componentDidMount)</li>
                </ul>
              </Card>

              <Card className="p-4 bg-accent/5 border-accent">
                <h4 className="font-semibold mb-3 text-accent">💡 Dicas Práticas</h4>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Sempre retorne uma função de limpeza quando necessário</li>
                  <li>Use múltiplos useEffect para separar preocupações</li>
                  <li>Cuidado com objetos/arrays como dependência</li>
                </ul>
              </Card>

              <Card className="p-4 bg-success/5 border-success">
                <h4 className="font-semibold mb-3 text-success">✓ Boas Práticas</h4>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Sempre especifique um array de dependência</li>
                  <li>Utilize ESLint plugin para verificar dependências</li>
                  <li>Teste seus efeitos com diferentes valores de estado</li>
                  <li>Evite lógica complexa dentro do useEffect</li>
                </ul>
              </Card>

              <Card className="p-4 bg-yellow-500/5 border-yellow-500/30">
                <h4 className="font-semibold mb-3">⚠️ Erros Comuns</h4>
                <ul className="text-sm space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Esquecer de adicionar dependências necessárias</li>
                  <li>Usar objetos/arrays diretos como dependência</li>
                  <li>Não fazer limpeza de efeitos assíncronos</li>
                </ul>
              </Card>

              <Card className="p-4 bg-blue-500/5 border-blue-500/30">
                <h4 className="font-semibold mb-3">📖 Referências</h4>
                <p className="text-xs text-muted-foreground mb-3">Documentação oficial React Hooks</p>
                <div className="space-y-2">
                  <button 
                    onClick={() => navigate("/library")}
                    className="block text-xs text-primary hover:underline"
                  >
                    → React.useEffect Documentation
                  </button>
                  <button 
                    onClick={() => navigate("/library")}
                    className="block text-xs text-primary hover:underline"
                  >
                    → Hooks Rules and Best Practices
                  </button>
                  <button 
                    onClick={() => navigate("/library")}
                    className="block text-xs text-primary hover:underline"
                  >
                    → Common Mistakes with Hooks
                  </button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LiveClass;
