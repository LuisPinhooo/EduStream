import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, BookOpen, CheckCircle } from "lucide-react";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isOpen } = useSidebar();
  const { toast } = useToast();
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Dados do curso (aqui você faria uma API call)
  const course = {
    id: 1,
    title: "Bootcamp de Desenvolvimento Web Full-Stack",
    instructor: "Dra. Sarah Chen",
    rating: 4.8,
    students: 12543,
    duration: "48 horas",
    level: "Intermediário",
    category: "Desenvolvimento",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800",
    description: "Aprenda desenvolvimento web completo com React, Node.js e MongoDB...",
    modules: [
      { title: "Fundamentos de HTML/CSS", lessons: 12 },
      { title: "JavaScript Avançado", lessons: 15 },
      { title: "React do Zero", lessons: 20 },
      { title: "Backend com Node.js", lessons: 18 },
    ],
  };

  const handleEnroll = async () => {
    setIsEnrolling(true);
    
    // Simulando API call
    setTimeout(() => {
      setIsEnrolling(false);
      setIsEnrolled(true);
      
      toast({
        title: "✅ Parabéns!",
        description: "Você foi inscrito com sucesso no curso!",
        duration: 3000,
      });
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarSidebar />
      <div className={`transition-all duration-300 md:pt-0 pt-16 ${isOpen ? "md:ml-64" : "md:ml-20"}`}>
        
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4">{course.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-white/90 mb-6">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span>{course.rating} ({course.students.toLocaleString()} alunos)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{course.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Conteúdo principal */}
            <div className="md:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold mb-4">Módulos do Curso</h2>
                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <Card key={index} className="p-4 flex items-center gap-4">
                      <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{module.title}</h3>
                        <p className="text-sm text-muted-foreground">{module.lessons} aulas</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Inscrição */}
            <div>
              <Card className={`p-6 sticky top-20 transition-all duration-300 ${
                isEnrolled ? "border-success bg-success/5" : ""
              }`}>
                <div className="mb-6">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <Badge variant="secondary" className="mb-4">Totalmente Gratuito</Badge>
                  <p className="text-sm text-muted-foreground mb-4">
                    Por: <span className="font-semibold text-foreground">{course.instructor}</span>
                  </p>
                </div>

                {isEnrolled ? (
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 p-4 bg-success/10 rounded-lg border border-success">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="font-semibold text-success">Inscrito com Sucesso!</span>
                    </div>
                    <Button 
                      onClick={() => navigate("/my-courses")}
                      className="w-full bg-gradient-primary"
                      size="lg"
                    >
                      Ir para Meus Cursos
                    </Button>
                  </div>
                ) : (
                  <>
                    <Button 
                      onClick={handleEnroll}
                      className="w-full bg-gradient-primary mb-3"
                      size="lg"
                      disabled={isEnrolling}
                    >
                      {isEnrolling ? "Inscrevendo..." : "Inscrever-se Agora"}
                    </Button>

                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate("/courses")}
                      disabled={isEnrolling}
                    >
                      Voltar aos Cursos
                    </Button>
                  </>
                )}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;