import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";
import { ChevronDown, Play, Lock, CheckCircle2, Clock } from "lucide-react";

const MyCourses = () => {
  const { isOpen } = useSidebar();
  const [expandedCourse, setExpandedCourse] = useState<number | null>(0);

  const myCourses = [
    {
      id: 1,
      title: "React e TypeScript Avançado",
      instructor: "Dra. Sarah Chen",
      progress: 68,
      totalLessons: 42,
      completedLessons: 28,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      sections: [
        {
          id: 1,
          title: "Seção 1 - Fundamentos da Programação e Introdução ao C",
          items: 8,
          duration: "1hr 7min",
          completed: true,
          lessons: [
            { id: 1, title: "O que é lógica de programação", duration: "4min", completed: true },
            { id: 2, title: "O que são algoritmos", duration: "8min", completed: true },
            { id: 3, title: "Linguagens de baixo e alto nível", duration: "9min", completed: true },
          ],
        },
        {
          id: 2,
          title: "Seção 2 - Estruturas Básicas de Controle",
          items: 12,
          duration: "3hr 45min",
          completed: false,
          progress: 75,
          lessons: [
            { id: 4, title: "Tipos de dados primitivos", duration: "12min", completed: true },
            { id: 5, title: "Operadores lógicos", duration: "10min", completed: true },
            { id: 6, title: "Estruturas condicionais", duration: "15min", completed: false },
          ],
        },
        {
          id: 3,
          title: "Seção 3 - Funções e Bibliotecas",
          items: 10,
          duration: "2hr 29min",
          completed: false,
          progress: 40,
          lessons: [
            { id: 7, title: "Introdução a funções", duration: "14min", completed: true },
            { id: 8, title: "Parâmetros e retornos", duration: "18min", completed: false },
            { id: 9, title: "Bibliotecas padrão", duration: "12min", completed: false },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Fundamentos de Machine Learning",
      instructor: "Prof. Michael Roberts",
      progress: 42,
      totalLessons: 36,
      completedLessons: 15,
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      sections: [
        {
          id: 1,
          title: "Seção 1 - Introdução ao ML",
          items: 6,
          duration: "1hr 20min",
          completed: true,
          lessons: [
            { id: 1, title: "O que é Machine Learning", duration: "10min", completed: true },
            { id: 2, title: "Tipos de aprendizado", duration: "12min", completed: true },
          ],
        },
        {
          id: 2,
          title: "Seção 2 - Preparação de Dados",
          items: 8,
          duration: "2hr 15min",
          completed: false,
          progress: 50,
          lessons: [
            { id: 3, title: "Limpeza de dados", duration: "15min", completed: true },
            { id: 4, title: "Normalização", duration: "18min", completed: false },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Estratégia de Marketing Digital",
      instructor: "Emma Thompson",
      progress: 85,
      totalLessons: 28,
      completedLessons: 24,
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      sections: [
        {
          id: 1,
          title: "Seção 1 - Fundamentos de Marketing",
          items: 7,
          duration: "1hr 45min",
          completed: true,
          lessons: [
            { id: 1, title: "Estratégia e planejamento", duration: "12min", completed: true },
            { id: 2, title: "Análise de mercado", duration: "15min", completed: true },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Princípios de Design UI/UX",
      instructor: "Alex Rivera",
      progress: 32,
      totalLessons: 40,
      completedLessons: 13,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      sections: [
        {
          id: 1,
          title: "Seção 1 - Fundamentos de Design",
          items: 10,
          duration: "2hr 30min",
          completed: false,
          progress: 60,
          lessons: [
            { id: 1, title: "Princípios de design", duration: "14min", completed: true },
            { id: 2, title: "Tipografia", duration: "12min", completed: true },
            { id: 3, title: "Cores e contrastes", duration: "11min", completed: false },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Arquitetura de Nuvem com AWS",
      instructor: "James Wilson",
      progress: 55,
      totalLessons: 50,
      completedLessons: 28,
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
      sections: [
        {
          id: 1,
          title: "Seção 1 - Fundamentos AWS",
          items: 12,
          duration: "3hr 20min",
          completed: false,
          progress: 70,
          lessons: [
            { id: 1, title: "Introdução à AWS", duration: "18min", completed: true },
            { id: 2, title: "Conceitos de nuvem", duration: "16min", completed: true },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Análise de Dados com Python",
      instructor: "Dra. Lisa Park",
      progress: 78,
      totalLessons: 32,
      completedLessons: 25,
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      sections: [
        {
          id: 1,
          title: "Seção 1 - Python Basics",
          items: 8,
          duration: "2hr 15min",
          completed: true,
          lessons: [
            { id: 1, title: "Introdução ao Python", duration: "12min", completed: true },
          ],
        },
      ],
    },
  ];

  const toggleCourse = (courseId: number) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const getLessonStatus = (lesson: any) => {
    if (lesson.completed) {
      return { icon: CheckCircle2, color: "text-success", label: "Concluído" };
    }
    return { icon: Play, color: "text-primary", label: "Assistir" };
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarSidebar />
      <div className={`transition-all duration-300 md:pt-0 pt-16 ${isOpen ? "md:ml-64" : "md:ml-20"}`}>
        <section className="bg-gradient-hero text-white py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-display font-bold mb-2">Meus Cursos</h1>
            <p className="text-white/80">Acompanhe seu progresso em todos os cursos inscritos</p>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-12">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">📚</span>
                <span className="text-3xl font-bold font-display">{myCourses.length}</span>
              </div>
              <p className="text-sm text-muted-foreground">Cursos Inscritos</p>
            </Card>
            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">✓</span>
                <span className="text-3xl font-bold font-display">
                  {Math.round(myCourses.reduce((acc, c) => acc + c.progress, 0) / myCourses.length)}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Progresso Médio</p>
            </Card>
            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-4xl">🏆</span>
                <span className="text-3xl font-bold font-display">
                  {myCourses.filter((c) => c.progress === 100).length}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Cursos Concluídos</p>
            </Card>
          </div>

          <div className="space-y-4">
            {myCourses.map((course) => (
              <Card
                key={course.id}
                className={`overflow-hidden transition-all duration-300 ${
                  expandedCourse === course.id
                    ? "bg-card border-primary"
                    : "hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {/* Course Header */}
                <div
                  onClick={() => toggleCourse(course.id)}
                  className="p-6 cursor-pointer hover:bg-opacity-80 transition-colors relative overflow-hidden group bg-gradient-to-r from-background via-background/90 to-background/70"
                >
                  {/* Background Image */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Gradient Overlay - Mais escuro */}
                  <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      {/* Thumbnail Card */}
                      <div className="flex-shrink-0 hidden md:block">
                        <div className="w-24 h-24 rounded-lg overflow-hidden border-2 border-primary/30 shadow-lg">
                          <img 
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-display font-bold text-xl text-foreground">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">{course.instructor}</p>
                          </div>
                          <ChevronDown
                            className={`w-5 h-5 text-foreground transition-transform duration-300 flex-shrink-0 ${
                              expandedCourse === course.id ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        <div className="flex items-center gap-3 text-sm text-foreground/80 mb-3 flex-wrap">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" />
                            {course.completedLessons} de {course.totalLessons} aulas
                          </span>
                          <span>•</span>
                          <span className="font-semibold text-accent">{course.progress}%</span>
                        </div>

                        <Progress value={course.progress} className="h-2.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Content - Expanded */}
                {expandedCourse === course.id && (
                  <div className="border-t p-6 space-y-6 bg-background animate-slide-up">
                    {/* Course Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <Card className="p-4 bg-gradient-card text-center">
                        <div className="text-2xl font-bold text-primary mb-1">{course.completedLessons}</div>
                        <p className="text-xs text-muted-foreground">Aulas Assistidas</p>
                      </Card>
                      <Card className="p-4 bg-gradient-card text-center">
                        <div className="text-2xl font-bold text-accent mb-1">{course.progress}%</div>
                        <p className="text-xs text-muted-foreground">Progresso</p>
                      </Card>
                      <Card className="p-4 bg-gradient-card text-center">
                        <div className="text-2xl font-bold text-success mb-1">
                          {course.sections.filter(s => s.completed).length}/{course.sections.length}
                        </div>
                        <p className="text-xs text-muted-foreground">Seções</p>
                      </Card>
                    </div>

                    {/* Sections */}
                    {course.sections.map((section, sectionIndex) => (
                      <div key={section.id} className="space-y-3 p-4 rounded-lg bg-card/50 border border-border/50">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex-shrink-0">
                            {section.completed ? (
                              <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-white" />
                              </div>
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                                <span className="text-xs font-bold text-white">{sectionIndex + 1}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-foreground">{section.title}</h4>
                            <p className="text-xs text-muted-foreground">
                              {section.items} aulas • {section.duration}
                            </p>
                          </div>
                          {!section.completed && section.progress && (
                            <Badge variant="secondary" className="ml-auto">
                              {section.progress}%
                            </Badge>
                          )}
                          {section.completed && (
                            <Badge className="ml-auto bg-success">Concluído</Badge>
                          )}
                        </div>

                        {/* Lessons */}
                        <div className="space-y-2">
                          {section.lessons.map((lesson) => {
                            const status = getLessonStatus(lesson);
                            const Icon = status.icon;
                            return (
                              <Link key={lesson.id} to={`/live/${course.id}`}>
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-background border border-border hover:border-primary transition-colors cursor-pointer group">
                                  <Icon className={`w-4 h-4 ${status.color} flex-shrink-0`} />
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium group-hover:text-primary transition-colors truncate">
                                      {lesson.title}
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0">
                                    <Clock className="w-3 h-3" />
                                    {lesson.duration}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}

                    <div className="pt-4 border-t flex gap-3">
                      <Link to={`/live/${course.id}`} className="flex-1">
                        <Button className="w-full bg-gradient-primary">
                          <Play className="w-4 h-4 mr-2" />
                          Continuar Aprendendo
                        </Button>
                      </Link>
                      <Link to={`/courses/${course.id}`} className="flex-1">
                        <Button variant="outline" className="w-full">
                          Ver Detalhes
                        </Button>
                      </Link>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
