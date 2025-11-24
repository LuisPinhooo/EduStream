import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Mail,
  MapPin,
  Calendar,
  Trophy,
  Book,
  Award,
  Settings,
  Share2,
  Edit2,
  Download,
} from "lucide-react";

const Profile = () => {
  const { isOpen } = useSidebar();
  const [isEditMode, setIsEditMode] = useState(false);

  const userStats = [
    { icon: Book, label: "Cursos Inscritos", value: "12", color: "text-primary" },
    { icon: Trophy, label: "Certificados", value: "3", color: "text-accent" },
    { icon: Award, label: "Badges Conquistados", value: "8", color: "text-success" },
    { icon: Calendar, label: "Dias Ativos", value: "45", color: "text-primary" },
  ];

  const certificates = [
    { id: 1, name: "React Fundamentals", issuer: "EduStream", date: "Nov 2024", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200" },
    { id: 2, name: "TypeScript Mastery", issuer: "EduStream", date: "Oct 2024", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200" },
    { id: 3, name: "Web Design Pro", issuer: "EduStream", date: "Sep 2024", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200" },
  ];

  const badges = [
    { id: 1, name: "Estreante", description: "Complete seu primeiro curso", icon: "🌟" },
    { id: 2, name: "Participativo", description: "Tenha 100 mensagens no chat", icon: "💬" },
    { id: 3, name: "Dedicado", description: "15 dias de sequência", icon: "🔥" },
    { id: 4, name: "Perfecionista", description: "Obtenha nota 100% em um quiz", icon: "💯" },
    { id: 5, name: "Colaborador", description: "Ajude 5 alunos", icon: "🤝" },
    { id: 6, name: "Speedrunner", description: "Complete um curso em menos de 2 dias", icon: "⚡" },
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "React e TypeScript Avançado",
      progress: 68,
      instructor: "Dra. Sarah Chen",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300",
    },
    {
      id: 2,
      title: "Fundamentos de Machine Learning",
      progress: 42,
      instructor: "Prof. Michael Roberts",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300",
    },
    {
      id: 3,
      title: "Estratégia de Marketing Digital",
      progress: 85,
      instructor: "Emma Thompson",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavbarSidebar />
      <div className={`transition-all duration-300 md:pt-0 pt-16 ${isOpen ? "md:ml-64" : "md:ml-20"}`}>

      {/* Header do Perfil */}
      <section className="bg-gradient-hero text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6 mb-8">
            <Avatar className="h-32 w-32 border-4 border-white shadow-xl">
              <AvatarImage src="/profile-photo.jpg" alt="Profile" />
              <AvatarFallback className="bg-primary text-white text-2xl font-bold">
                AJ
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-display font-bold mb-2">Luis Pinho</h1>
                  <p className="text-white/80 text-lg">Aprendiz Dedicado • Desenvolvedor</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white/10"
                    onClick={() => setIsEditMode(!isEditMode)}
                  >
                    <Edit2 className="h-4 w-4 mr-2" />
                    {isEditMode ? "Cancelar" : "Editar Perfil"}
                  </Button>
                  <Button variant="secondary" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>pinho.luis@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Londrina, Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Membro desde Jan 2024</span>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {userStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <stat.icon className={`h-6 w-6 ${stat.color} mb-2`} />
                <p className="text-2xl font-bold font-display">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="courses">
              <Book className="h-4 w-4 mr-2" />
              Cursos
            </TabsTrigger>
            <TabsTrigger value="certificates">
              <Award className="h-4 w-4 mr-2" />
              Certificados
            </TabsTrigger>
            <TabsTrigger value="badges">
              <Trophy className="h-4 w-4 mr-2" />
              Badges
            </TabsTrigger>
            <TabsTrigger value="about">
              <Settings className="h-4 w-4 mr-2" />
              Sobre
            </TabsTrigger>
          </TabsList>

          {/* Aba de Cursos */}
          <TabsContent value="courses">
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Meus Cursos Inscritos</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-lg mb-2 line-clamp-2">
                        {course.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{course.instructor}</p>

                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-muted-foreground">Progresso</span>
                          <span className="font-semibold">{course.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-primary transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <Link to={`/live/${course.id}`}>
                        <Button className="w-full bg-gradient-primary">Continuar Aprendendo</Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Aba de Certificados */}
          <TabsContent value="certificates">
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Meus Certificados</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <Card key={cert.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-foreground">
                          {cert.date}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display font-bold text-lg mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                      <Button variant="outline" className="w-full">
                        <Download className="h-4 w-4 mr-2" />
                        Baixar Certificado
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Aba de Badges */}
          <TabsContent value="badges">
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Meus Badges</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {badges.map((badge, index) => (
                  <Card
                    key={badge.id}
                    className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {badge.icon}
                    </div>
                    <h3 className="font-display font-bold mb-2">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Aba Sobre */}
          <TabsContent value="about">
            <div className="space-y-6">
              <h2 className="text-2xl font-display font-bold">Sobre Mim</h2>
              <Card className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">Biografia</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Sou um aprendiz dedicado e desenvolvedor apaixonado por tecnologia. Estou em uma jornada contínua
                      para aprimorar minhas habilidades em desenvolvimento web, ciência de dados e design. Com mais de
                      45 dias de aprendizado ativo, tenho conquistado 3 certificados e 8 badges ao longo do caminho.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg mb-4">Habilidades</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "TypeScript",
                        "Python",
                        "Node.js",
                        "MongoDB",
                        "Design UI/UX",
                        "AWS",
                        "Machine Learning",
                      ].map((skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">Objetivos</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Dominar React e TypeScript avançado</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Aprender Machine Learning e IA aplicada</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Construir um portfólio impressionante</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary mt-1">•</span>
                        <span>Colaborar com desenvolvedores da comunidade</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">Preferências de Aprendizado</h3>
                    <p className="text-muted-foreground mb-3">Aulas ao vivo • Projetos práticos • Comunidade interativa</p>
                  </div>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      </div>
    </div>
  );
};

export default Profile;
