import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Users,
  Globe,
  TrendingUp,
  MessageSquare,
  Award,
  Video,
  Clock,
  Star,
  CheckCircle2,
} from "lucide-react";
import Navbar from "@/components/Navbar";

const Index = () => {
  const features = [
    {
      icon: Video,
      title: "Transmissão ao Vivo",
      description: "Transmissão de vídeo de alta qualidade suportando 50K+ estudantes simultâneos com latência <1.5s",
    },
    {
      icon: MessageSquare,
      title: "Interação em Tempo Real",
      description: "Chat ao vivo, enquetes e sessões de perguntas e respostas para experiências de aprendizado interativo envolventes",
    },
    {
      icon: TrendingUp,
      title: "Rastreamento de Progresso",
      description: "Painel de análise abrangente para monitorar progresso de aprendizado e conquistas",
    },
    {
      icon: Award,
      title: "Gamificação",
      description: "Ganhe emblemas, certificados e suba nos rankings para manter a motivação",
    },
    {
      icon: Globe,
      title: "Acesso Global",
      description: "Suporte multilíngue com entrega de conteúdo otimizada para qualquer fuso horário",
    },
    {
      icon: Clock,
      title: "Conteúdo sob Demanda",
      description: "Acesse aulas gravadas e materiais de aprendizado a qualquer hora, em qualquer lugar",
    },
  ];

  const stats = [
    { value: "50K+", label: "Estudantes Ativos" },
    { value: "500+", label: "Cursos ao Vivo" },
    { value: "99.9%", label: "Tempo de Atividade" },
    { value: "<1.5s", label: "Latência de Transmissão" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm py-2 px-4 bg-primary/10 text-primary border-primary/20">
              Suportando 50K+ Estudantes Simultâneos
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
              Aprenda ao Vivo, <span className="text-gradient">Cresça Rápido</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se à plataforma de aprendizado interativo global com transmissão ao vivo, colaboração em tempo real
              e rastreamento de progresso personalizado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/courses">
                <Button size="lg" className="bg-gradient-primary text-lg px-8 shadow-glow hover:shadow-xl transition-all">
                  <Play className="mr-2 h-5 w-5" />
                  Começar a Aprender Agora
                </Button>
              </Link>
              <Link to="/live/1">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Video className="mr-2 h-5 w-5" />
                  Assistir Aula de Demonstração
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-8 w-8 rounded-full border-2 border-background bg-gradient-primary"
                    ></div>
                  ))}
                </div>
                <span className="font-semibold">12K+ alunos ativos</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <Star className="h-4 w-4 fill-accent text-accent" />
                <Star className="h-4 w-4 fill-accent text-accent" />
                <Star className="h-4 w-4 fill-accent text-accent" />
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="ml-1 font-semibold">Classificação 4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: "1s" }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Recursos da Plataforma</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Tudo que Você Precisa para <span className="text-gradient">Aprendizado Interativo</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Construído para escala, projetado para engajamento. Nossa plataforma gerencia usuários massivos simultâneos
              enquanto oferece uma experiência de aprendizado perfeita.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-gradient-card"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Processo Simples</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Comece a Aprender em <span className="text-gradient">3 Passos Fáceis</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Criar sua Conta",
                description: "Cadastre-se gratuitamente e personalize seu perfil de aprendizado",
              },
              {
                step: "2",
                title: "Escolha seu Curso",
                description: "Navegue por 500+ cursos em várias categorias",
              },
              {
                step: "3",
                title: "Participar de Aulas ao Vivo",
                description: "Comece a aprender com sessões de transmissão ao vivo interativas",
              },
            ].map((item, index) => (
              <Card key={index} className="p-8 text-center relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 text-3xl font-bold font-display text-white shadow-glow">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-display font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="relative overflow-hidden bg-gradient-hero p-12 md:p-16 text-center text-white">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Pronto para Transformar seu Aprendizado?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Junte-se a 50.000+ alunos já aprendendo na EduStream
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/courses">
                  <Button size="lg" variant="secondary" className="text-lg px-8">
                    <Play className="mr-2 h-5 w-5" />
                    Explorar Cursos
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-lg px-8 text-white border-white hover:bg-white/10">
                  <Users className="mr-2 h-5 w-5" />
                  Junte-se Gratuitamente
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Nenhum cartão de crédito necessário</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Cancele a qualquer momento</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/10"></div>
          </Card>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Users className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-display font-bold">Tecnologias EduStream</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 EduStream. Todos os direitos reservados. Construído para educação global.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
