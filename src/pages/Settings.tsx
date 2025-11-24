import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";
import {
  SettingsIcon,
  Bell,
  Lock,
  Globe,
  Moon,
  Volume2,
  Mail,
  Eye,
  Trash2,
  LogOut,
  ChevronRight,
} from "lucide-react";

const Settings = () => {
  const { isOpen } = useSidebar();
  const [notifications, setNotifications] = useState({
    classReminders: true,
    newCourses: true,
    communityUpdates: false,
    emails: true,
    pushNotifications: true,
  });

  const [preferences, setPreferences] = useState({
    darkMode: false,
    soundEnabled: true,
    publicProfile: true,
    autoPlayVideo: true,
  });

  const settingsCategories = [
    {
      title: "Notificações",
      description: "Gerencie suas preferências de notificação",
      icon: Bell,
      color: "text-accent",
    },
    {
      title: "Privacidade e Segurança",
      description: "Controle sua privacidade e segurança",
      icon: Lock,
      color: "text-primary",
    },
    {
      title: "Preferências",
      description: "Personalize sua experiência",
      icon: Settings,
      color: "text-success",
    },
    {
      title: "Idioma e Região",
      description: "Altere idioma e configurações regionais",
      icon: Globe,
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavbarSidebar />
      <div className={`transition-all duration-300 md:pt-0 pt-16 ${isOpen ? "md:ml-64" : "md:ml-20"}`}>

      {/* Header */}
      <section className="bg-gradient-hero text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <SettingsIcon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-display font-bold mb-1">Configurações</h1>
              <p className="text-white/80">Personalize sua experiência na EduStream</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="notifications" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span className="hidden sm:inline">Notificações</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <SettingsIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Preferências</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              <span className="hidden sm:inline">Privacidade</span>
            </TabsTrigger>
            <TabsTrigger value="account" className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <span className="hidden sm:inline">Conta</span>
            </TabsTrigger>
          </TabsList>

          {/* Abas de Notificações */}
          <TabsContent value="notifications" className="space-y-6">
            <h2 className="text-2xl font-display font-bold">Notificações</h2>

            <Card className="p-6">
              <h3 className="font-display font-bold text-lg mb-6">Tipo de Notificações</h3>
              <div className="space-y-4">
                {[
                  {
                    key: "classReminders",
                    title: "Lembretes de Aula",
                    description: "Receba notificações sobre suas aulas ao vivo próximas",
                  },
                  {
                    key: "newCourses",
                    title: "Novos Cursos",
                    description: "Seja notificado sobre cursos em suas áreas de interesse",
                  },
                  {
                    key: "communityUpdates",
                    title: "Atualizações da Comunidade",
                    description: "Receba notificações de atividades da comunidade",
                  },
                  {
                    key: "emails",
                    title: "Notificações por Email",
                    description: "Receba resumos semanais e atualizações importantes",
                  },
                  {
                    key: "pushNotifications",
                    title: "Notificações Push",
                    description: "Receba notificações instantâneas no navegador",
                  },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors">
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications]}
                      onCheckedChange={(value) =>
                        setNotifications({
                          ...notifications,
                          [item.key]: value,
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Aba de Preferências */}
          <TabsContent value="preferences" className="space-y-6">
            <h2 className="text-2xl font-display font-bold">Preferências</h2>

            <Card className="p-6">
              <h3 className="font-display font-bold text-lg mb-6">Configurações Gerais</h3>
              <div className="space-y-4">
                {[
                  {
                    key: "darkMode",
                    title: "Modo Escuro",
                    description: "Use tema escuro em toda a plataforma",
                    icon: Moon,
                  },
                  {
                    key: "soundEnabled",
                    title: "Efeitos Sonoros",
                    description: "Reproduza sons para notificações e ações",
                    icon: Volume2,
                  },
                  {
                    key: "autoPlayVideo",
                    title: "Reproduzir Vídeos Automaticamente",
                    description: "Inicie vídeos automaticamente quando acessar",
                    icon: Eye,
                  },
                  {
                    key: "publicProfile",
                    title: "Perfil Público",
                    description: "Permita que outros vejam seu perfil",
                    icon: Globe,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.key} className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-semibold">{item.title}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                      <Switch
                        checked={preferences[item.key as keyof typeof preferences]}
                        onCheckedChange={(value) =>
                          setPreferences({
                            ...preferences,
                            [item.key]: value,
                          })
                        }
                      />
                    </div>
                  );
                })}
              </div>
            </Card>
          </TabsContent>

          {/* Aba de Privacidade */}
          <TabsContent value="privacy" className="space-y-6">
            <h2 className="text-2xl font-display font-bold">Privacidade e Segurança</h2>

            <Card className="p-6">
              <h3 className="font-display font-bold text-lg mb-6">Segurança da Conta</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Alterar Senha
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Atualizar Email
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    Autenticação de Dois Fatores
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-display font-bold text-lg mb-4">Dados Pessoais</h3>
              <p className="text-muted-foreground mb-4">
                Controle como seus dados são usados e compartilhados
              </p>
              <Button variant="outline" className="w-full justify-between">
                <span>Gerenciar Dados Pessoais</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Card>
          </TabsContent>

          {/* Aba de Conta */}
          <TabsContent value="account" className="space-y-6">
            <h2 className="text-2xl font-display font-bold">Conta</h2>

            <Card className="p-6">
              <h3 className="font-display font-bold text-lg mb-6">Idioma e Região</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-semibold mb-2 block">Idioma</label>
                  <select className="w-full px-4 py-2 border rounded-lg bg-background">
                    <option>Português (Brasil)</option>
                    <option>English</option>
                    <option>Español</option>
                    <option>Français</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">Fuso Horário</label>
                  <select className="w-full px-4 py-2 border rounded-lg bg-background">
                    <option>America/Sao_Paulo (UTC-3)</option>
                    <option>America/New_York (UTC-5)</option>
                    <option>Europe/London (UTC+0)</option>
                    <option>Asia/Tokyo (UTC+9)</option>
                  </select>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-destructive/50">
              <h3 className="font-display font-bold text-lg mb-4">Zona de Perigo</h3>
              <p className="text-muted-foreground mb-4">
                Ações irreversíveis que podem afetar sua conta
              </p>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-between hover:bg-muted">
                  <span className="flex items-center gap-2">
                    <Trash2 className="h-4 w-4" />
                    Baixar Meus Dados
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-between text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/50"
                >
                  <span className="flex items-center gap-2">
                    <Trash2 className="h-4 w-4" />
                    Deletar Conta
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-muted/50">
              <h3 className="font-display font-bold text-lg mb-2">Sair de Todas as Contas</h3>
              <p className="text-muted-foreground mb-4">
                Saia de todas as sessões ativas em outros dispositivos
              </p>
              <Button variant="outline" className="w-full justify-between">
                <span className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Fazer Logout em Todos os Dispositivos
                </span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Botão de Salvar */}
        <div className="mt-12 flex justify-end gap-4">
          <Button variant="outline">Cancelar</Button>
          <Button className="bg-gradient-primary">Salvar Mudanças</Button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Settings;
