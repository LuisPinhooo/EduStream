import { Book, GraduationCap, Play, TrendingUp, Trophy, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";

const Dashboard = () => {
  const { isOpen } = useSidebar();
  const stats = [
    { icon: Book, label: "Cursos Inscritos", value: "6", color: "text-primary" },
    { icon: Play, label: "Horas Assistidas", value: "47", color: "text-accent" },
    { icon: Trophy, label: "Certificados", value: "3", color: "text-success" },
    { icon: TrendingUp, label: "Dias de Sequência", value: "15", color: "text-primary" },
  ];

  const activeCourses = [
    {
      id: 1,
      title: "React e TypeScript Avançado",
      progress: 68,
      instructor: "Dra. Sarah Chen",
      nextClass: "Hoje, 15:00",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
    },
    {
      id: 2,
      title: "Fundamentos de Machine Learning",
      progress: 42,
      instructor: "Prof. Michael Roberts",
      nextClass: "Amanhã, 10:00",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
    },
    {
      id: 3,
      title: "Estratégia de Marketing Digital",
      progress: 85,
      instructor: "Emma Thompson",
      nextClass: "Sexta, 14:00",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavbarSidebar />
      <div className={`transition-all duration-300 md:pt-0 pt-16 ${isOpen ? "md:ml-64" : "md:ml-20"}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 animate-fade-in">
              Bem-vindo de volta, Luis! 👋
            </h1>
            <p className="text-xl text-white/90 mb-8 animate-slide-up">
              Você tem uma sequência de 15 dias de aprendizado. Continue assim!
            </p>
            <Link to="/my-courses">
              <Button size="lg" variant="secondary" className="font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Continuar Aprendendo
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <stat.icon className={`h-8 w-8 ${stat.color} mb-3`} />
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-3xl font-bold font-display">{stat.value}</p>
            </Card>
          ))}
        </div>

        {/* Cursos Ativos */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-display font-bold">Seus Cursos Ativos</h2>
            <Link to="/courses">
              <Button variant="outline">Ver Todos os Cursos</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-lg">{course.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Users className="h-4 w-4" />
                    <span>{course.instructor}</span>
                  </div>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-semibold">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Próxima: {course.nextClass}</span>
                    <Link to="/my-courses">
                      <Button size="sm" className="bg-gradient-primary">
                        <Play className="h-4 w-4 mr-1" />
                        Entrar
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Próximas Aulas ao Vivo */}
        <Card className="p-8 bg-gradient-card">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-display font-bold mb-2">Próximas Aulas ao Vivo</h3>
              <p className="text-muted-foreground">Não perca essas sessões interativas</p>
            </div>
            <GraduationCap className="h-12 w-12 text-primary opacity-20" />
          </div>
          <div className="space-y-4">
            {[
              { title: "React Hooks em Profundidade", time: "Hoje, 15:00", students: 124 },
              { title: "Workshop de Redes Neurais", time: "Amanhã, 10:00", students: 89 },
              { title: "Melhores Práticas de SEO", time: "Sexta, 14:00", students: 156 },
            ].map((classItem, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg hover:shadow-md transition-shadow">
                <div className="flex-1">
                  <p className="font-semibold mb-1">{classItem.title}</p>
                  <p className="text-sm text-muted-foreground">{classItem.time}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{classItem.students} inscritos</span>
                  </div>
                  <Button size="sm" variant="outline">Definir Lembrete</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
