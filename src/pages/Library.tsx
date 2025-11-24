import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Search,
  BookOpen,
  Video,
  FileText,
  ExternalLink,
  Heart,
  Download,
  Filter,
} from "lucide-react";

const Library = () => {
  const { isOpen } = useSidebar();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [favorites, setFavorites] = useState<number[]>([]);

  const contents = [
    {
      id: 1,
      title: "React Hooks Guia Completo",
      description: "Aprenda tudo sobre React Hooks: useState, useEffect, useContext e muito mais",
      category: "React",
      type: "artigo",
      icon: "📝",
      tags: ["React", "Hooks", "JavaScript"],
      url: "#",
      date: "20 Nov 2024",
    },
    {
      id: 2,
      title: "TypeScript para Iniciantes",
      description: "Introdução completa ao TypeScript com exemplos práticos",
      category: "TypeScript",
      type: "vídeo",
      icon: "🎥",
      tags: ["TypeScript", "JavaScript", "Tipagem"],
      url: "#",
      date: "18 Nov 2024",
    },
    {
      id: 3,
      title: "Design System Guide",
      description: "Como criar um sistema de design escalável e consistente",
      category: "Design",
      type: "artigo",
      icon: "🎨",
      tags: ["Design", "UI/UX", "Sistema"],
      url: "#",
      date: "15 Nov 2024",
    },
    {
      id: 4,
      title: "Python para Ciência de Dados",
      description: "Bibliotecas essenciais: Pandas, NumPy, Matplotlib e Scikit-learn",
      category: "Python",
      type: "vídeo",
      icon: "🐍",
      tags: ["Python", "Pandas", "Data Science"],
      url: "#",
      date: "14 Nov 2024",
    },
    {
      id: 5,
      title: "CSS Grid Masterclass",
      description: "Domine CSS Grid com exemplos do mundo real",
      category: "React",
      type: "artigo",
      icon: "📐",
      tags: ["CSS", "Grid", "Layout"],
      url: "#",
      date: "12 Nov 2024",
    },
    {
      id: 6,
      title: "Node.js REST APIs",
      description: "Construa APIs RESTful robustas com Express.js",
      category: "Backend",
      type: "vídeo",
      icon: "⚙️",
      tags: ["Node.js", "REST", "Backend"],
      url: "#",
      date: "10 Nov 2024",
    },
    {
      id: 7,
      title: "UX Research Essentials",
      description: "Técnicas de pesquisa para melhorar a experiência do usuário",
      category: "Design",
      type: "artigo",
      icon: "🔍",
      tags: ["UX", "Research", "Design"],
      url: "#",
      date: "08 Nov 2024",
    },
    {
      id: 8,
      title: "MongoDB para Beginners",
      description: "Banco de dados NoSQL: conceitos, operações e boas práticas",
      category: "Backend",
      type: "vídeo",
      icon: "🗄️",
      tags: ["MongoDB", "NoSQL", "Database"],
      url: "#",
      date: "05 Nov 2024",
    },
    {
      id: 9,
      title: "Tailwind CSS Deep Dive",
      description: "Utility-first CSS: como usar Tailwind em seus projetos",
      category: "React",
      type: "artigo",
      icon: "🎯",
      tags: ["Tailwind", "CSS", "Utilidades"],
      url: "#",
      date: "03 Nov 2024",
    },
    {
      id: 10,
      title: "Machine Learning com Python",
      description: "Introdução a ML, algoritmos de classificação e regressão",
      category: "Python",
      type: "vídeo",
      icon: "🤖",
      tags: ["ML", "Python", "AI"],
      url: "#",
      date: "01 Nov 2024",
    },
  ];

  const categories = [
    "Todos",
    "React",
    "TypeScript",
    "Python",
    "Design",
    "Backend",
  ];

  const types = [
    { value: "artigo", label: "Artigos", icon: FileText },
    { value: "vídeo", label: "Vídeos", icon: Video },
  ];

  // Filtrar conteúdo
  const filteredContents = contents.filter((content) => {
    const matchesSearch =
      content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      content.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "Todos" || content.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarSidebar />
      <div
        className={`transition-all duration-300 md:pt-0 pt-16 ${
          isOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        {/* Header */}
        <section className="bg-gradient-hero text-white py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-display font-bold mb-2 flex items-center gap-3">
              <BookOpen className="h-10 w-10" />
              Biblioteca de Conteúdo
            </h1>
            <p className="text-white/80">Acesso a artigos, vídeos e recursos de aprendizado</p>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-12">
          {/* Busca */}
          <div className="mb-8">
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Pesquise por título, tag ou conteúdo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
            </div>
          </div>

          {/* Filtros */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold text-sm text-muted-foreground">Filtrar por Categoria:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category ? "bg-gradient-primary" : ""
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Tipos de Conteúdo - Badges informativos */}
          <div className="mb-8 p-4 bg-card rounded-lg border">
            <span className="text-sm text-muted-foreground mr-4">Tipos de Conteúdo:</span>
            <div className="flex gap-3 flex-wrap">
              {types.map((type) => {
                const Icon = type.icon;
                return (
                  <Badge key={type.value} variant="secondary">
                    <Icon className="h-3 w-3 mr-2" />
                    {type.label}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Grid de Conteúdo */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContents.length > 0 ? (
              filteredContents.map((content) => (
                <Card
                  key={content.id}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col"
                >
                  {/* Header do Card */}
                  <div className="p-6 bg-gradient-card">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{content.icon}</div>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => toggleFavorite(content.id)}
                        className="hover:bg-white/20"
                      >
                        <Heart
                          className={`h-5 w-5 ${
                            favorites.includes(content.id)
                              ? "fill-red-500 text-red-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      </Button>
                    </div>

                    <Badge className="mb-3">
                      {content.type === "artigo" ? "📝 Artigo" : "🎥 Vídeo"}
                    </Badge>
                  </div>

                  {/* Conteúdo */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-display font-bold text-lg mb-2 line-clamp-2">
                      {content.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {content.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {content.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Categoria e Data */}
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span className="font-semibold">{content.category}</span>
                      <span>{content.date}</span>
                    </div>

                    {/* Botão */}
                    <Button className="w-full bg-gradient-primary group-hover:shadow-lg">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Acessar Conteúdo
                    </Button>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">Nenhum conteúdo encontrado</h3>
                <p className="text-muted-foreground">
                  Tente ajustar seus filtros ou busca
                </p>
              </div>
            )}
          </div>

          {/* Estatísticas */}
          <div className="mt-12 p-6 bg-card rounded-lg border">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-bold font-display text-primary">
                  {contents.length}
                </p>
                <p className="text-sm text-muted-foreground">Total de Recursos</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-display text-accent">
                  {favorites.length}
                </p>
                <p className="text-sm text-muted-foreground">Favoritos</p>
              </div>
              <div>
                <p className="text-3xl font-bold font-display text-success">
                  {categories.length - 1}
                </p>
                <p className="text-sm text-muted-foreground">Categorias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
