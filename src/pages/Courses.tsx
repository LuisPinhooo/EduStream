import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Star, Clock, Users, BookOpen, Filter, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";

const Courses = () => {
  const { isOpen } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    {
      id: 1,
      title: "Bootcamp de Desenvolvimento Web Full-Stack",
      instructor: "Dra. Sarah Chen",
      rating: 4.8,
      students: 12543,
      duration: "48 horas",
      level: "Intermediário",
      price: "R$89,99",
      category: "Desenvolvimento",
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Fundamentos de Machine Learning e IA",
      instructor: "Prof. Michael Roberts",
      rating: 4.9,
      students: 8932,
      duration: "36 horas",
      level: "Avançado",
      price: "R$129,99",
      category: "Ciência de Dados",
      thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
      tags: ["Python", "TensorFlow", "Redes Neurais"],
    },
    {
      id: 3,
      title: "Mestrado em Marketing Digital",
      instructor: "Emma Thompson",
      rating: 4.7,
      students: 15234,
      duration: "24 horas",
      level: "Iniciante",
      price: "R$59,99",
      category: "Marketing",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400",
      tags: ["SEO", "Mídias Sociais", "Analytics"],
    },
    {
      id: 4,
      title: "Princípios de Design UI/UX",
      instructor: "Alex Rivera",
      rating: 4.8,
      students: 9876,
      duration: "32 horas",
      level: "Intermediário",
      price: "R$79,99",
      category: "Design",
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400",
      tags: ["Figma", "Pesquisa de Usuário", "Prototipagem"],
    },
    {
      id: 5,
      title: "Arquitetura de Nuvem com AWS",
      instructor: "James Wilson",
      rating: 4.9,
      students: 7654,
      duration: "40 horas",
      level: "Avançado",
      price: "R$149,99",
      category: "Computação em Nuvem",
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
      tags: ["AWS", "DevOps", "Kubernetes"],
    },
    {
      id: 6,
      title: "Análise de Dados com Python",
      instructor: "Dra. Lisa Park",
      rating: 4.8,
      students: 11234,
      duration: "28 horas",
      level: "Intermediário",
      price: "R$69,99",
      category: "Ciência de Dados",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
      tags: ["Python", "Pandas", "Visualização"],
    },
  ];

  const categories = ["Todos os Cursos", "Desenvolvimento", "Ciência de Dados", "Marketing", "Design", "Computação em Nuvem"];

  return (
    <div className="min-h-screen bg-background">
      <NavbarSidebar />
      <div className={`transition-all duration-300 md:pt-0 pt-16 ${isOpen ? "md:ml-64" : "md:ml-20"}`}>
      {/* Seção Hero */}
      <section className="bg-gradient-hero py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Explore Nossos Cursos
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Aprenda com instrutores de classe mundial em aulas interativas ao vivo
            </p>
            
            {/* Barra de Pesquisa */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Pesquise por cursos, habilidades ou instrutores..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Barra de Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold font-display mb-1">500+</p>
            <p className="text-sm text-muted-foreground">Cursos</p>
          </Card>
          <Card className="p-6 text-center">
            <Users className="h-8 w-8 text-accent mx-auto mb-2" />
            <p className="text-3xl font-bold font-display mb-1">50K+</p>
            <p className="text-sm text-muted-foreground">Estudantes</p>
          </Card>
          <Card className="p-6 text-center">
            <Star className="h-8 w-8 text-success mx-auto mb-2" />
            <p className="text-3xl font-bold font-display mb-1">4.8</p>
            <p className="text-sm text-muted-foreground">Classificação Média</p>
          </Card>
          <Card className="p-6 text-center">
            <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
            <p className="text-3xl font-bold font-display mb-1">95%</p>
            <p className="text-sm text-muted-foreground">Taxa de Sucesso</p>
          </Card>
        </div>

        {/* Abas de Categorias */}
        <Tabs defaultValue="Todos os Cursos" className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card
                    key={course.id}
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-foreground hover:bg-white">
                          {course.level}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {course.category}
                        </Badge>
                      </div>

                      <h3 className="font-display font-bold text-lg mb-2 line-clamp-2">
                        {course.title}
                      </h3>

                      <p className="text-sm text-muted-foreground mb-4">
                        {course.instructor}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-accent text-accent" />
                          <span className="font-semibold text-foreground">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      <Link to={`/courses/${course.id}`} className="w-full">
                        <Button className="w-full bg-gradient-primary">
                          Ver Detalhes
                        </Button>
                      </Link>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      </div>
    </div>
  );
};

export default Courses;
