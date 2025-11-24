import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";
import {
  Star,
  MessageSquare,
  ThumbsUp,
  Filter,
} from "lucide-react";

const Assessments = () => {
  const { isOpen } = useSidebar();
  const [selectedAssessment, setSelectedAssessment] = useState<number | null>(null);
  const [filterStatus, setFilterStatus] = useState("all");

  const assessments = [
    {
      id: 1,
      title: "Quiz: React Hooks",
      course: "React e TypeScript Avançado",
      dueDate: "2024-11-25",
      status: "completed",
      score: 92,
      maxScore: 100,
      submissions: 1,
      feedback: "Excelente desempenho! Você demonstrou profundo conhecimento sobre React Hooks.",
      instructor: "Dra. Sarah Chen",
      attemptCount: 1,
      passedAt: "2024-11-20",
    },
    {
      id: 2,
      title: "Projeto Prático: App React",
      course: "React e TypeScript Avançado",
      dueDate: "2024-11-28",
      status: "submitted",
      score: 85,
      maxScore: 100,
      submissions: 1,
      feedback: "Bom trabalho! Melhorar a organização dos componentes.",
      instructor: "Dra. Sarah Chen",
      attemptCount: 1,
      submittedAt: "2024-11-22",
    },
    {
      id: 3,
      title: "Exercício: TypeScript Types",
      course: "React e TypeScript Avançado",
      dueDate: "2024-12-05",
      status: "pending",
      score: null,
      maxScore: 100,
      submissions: 0,
      feedback: null,
      instructor: "Dra. Sarah Chen",
      attemptCount: 0,
    },
    {
      id: 4,
      title: "Quiz: Machine Learning Basics",
      course: "Fundamentos de Machine Learning",
      dueDate: "2024-11-24",
      status: "completed",
      score: 78,
      maxScore: 100,
      submissions: 2,
      feedback: "Bom resultado. Revise os conceitos de regressão linear.",
      instructor: "Prof. Michael Roberts",
      attemptCount: 2,
      passedAt: "2024-11-21",
    },
    {
      id: 5,
      title: "Case Study: SEO Strategy",
      course: "Estratégia de Marketing Digital",
      dueDate: "2024-11-30",
      status: "submitted",
      score: 88,
      maxScore: 100,
      submissions: 1,
      feedback: "Análise detalhada! Parabéns pela pesquisa aprofundada.",
      instructor: "Emma Thompson",
      attemptCount: 1,
      submittedAt: "2024-11-20",
    },
    {
      id: 6,
      title: "Avaliação Final: Design UI/UX",
      course: "Princípios de Design UI/UX",
      dueDate: "2024-12-10",
      status: "pending",
      score: null,
      maxScore: 100,
      submissions: 0,
      feedback: null,
      instructor: "Alex Rivera",
      attemptCount: 0,
    },
  ];

  const stats = [
    {
      label: "Avaliações Completas",
      value: assessments.filter((a) => a.status === "completed").length,
      color: "text-success",
      icon: "✓",
    },
    {
      label: "Média Geral",
      value: "87%",
      color: "text-primary",
      icon: "📊",
    },
    {
      label: "Pendentes",
      value: assessments.filter((a) => a.status === "pending").length,
      color: "text-accent",
      icon: "⏳",
    },
    {
      label: "Taxa de Aprovação",
      value: "100%",
      color: "text-success",
      icon: "🎓",
    },
  ];

  const filteredAssessments = assessments.filter((assessment) => {
    if (filterStatus === "all") return true;
    return assessment.status === filterStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      completed: { variant: "default", label: "Concluído", color: "bg-success/10 text-success" },
      submitted: { variant: "secondary", label: "Enviado", color: "bg-accent/10 text-accent" },
      pending: { variant: "outline", label: "Pendente", color: "bg-yellow-500/10 text-yellow-700" },
    };
    return variants[status] || variants.pending;
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarSidebar />
      <div className={`transition-all duration-300 md:pt-0 pt-16 ${isOpen ? "md:ml-64" : "md:ml-20"}`}>

      {/* Header */}
      <section className="bg-gradient-hero text-white py-12 mb-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-4xl font-display font-bold mb-2">Avaliações e Testes</h1>
            <p className="text-white/80">Acompanhe seu progresso em todas as avaliações</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className={`text-2xl font-bold font-display`}>{stat.value}</span>
                </div>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-12">
        {/* Filtros */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <h2 className="text-2xl font-display font-bold">Minhas Avaliações</h2>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border rounded-lg bg-background"
            >
              <option value="all">Todas as Avaliações</option>
              <option value="completed">Concluídas</option>
              <option value="submitted">Enviadas</option>
              <option value="pending">Pendentes</option>
            </select>
          </div>
        </div>

        {/* Lista de Avaliações */}
        <div className="w-full">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredAssessments.map((assessment) => {
                const statusInfo = getStatusBadge(assessment.status);
                return (
                  <Card
                    key={assessment.id}
                    className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                    onClick={() => setSelectedAssessment(selectedAssessment === assessment.id ? null : assessment.id)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-display font-bold text-lg mb-1">
                          {assessment.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{assessment.course}</p>
                      </div>
                      <Badge className={statusInfo.color}>
                        {statusInfo.label}
                      </Badge>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Prazo:</span>
                        <span className="font-semibold">{new Date(assessment.dueDate).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Instrutor:</span>
                        <span className="font-semibold">{assessment.instructor}</span>
                      </div>

                      {assessment.score !== null && (
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Pontuação:</span>
                            <span className="font-semibold text-primary">
                              {assessment.score}/{assessment.maxScore}
                            </span>
                          </div>
                          <Progress value={(assessment.score / assessment.maxScore) * 100} className="h-2" />
                        </div>
                      )}
                    </div>

                    {selectedAssessment === assessment.id && (
                      <div className="mt-6 pt-6 border-t space-y-4 animate-slide-up">
                        {assessment.feedback && (
                          <div className="bg-muted/50 rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <MessageSquare className="h-5 w-5 text-primary mt-1" />
                              <div>
                                <p className="font-semibold text-sm mb-1">Feedback do Instrutor</p>
                                <p className="text-sm text-muted-foreground">{assessment.feedback}</p>
                              </div>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Tentativas:</span>
                          <span className="font-semibold">{assessment.attemptCount}</span>
                        </div>

                        <div className="flex gap-2">
                          {assessment.status === "pending" && (
                            <Button className="flex-1 bg-gradient-primary">
                              Iniciar Avaliação
                            </Button>
                          )}
                          {assessment.status === "completed" && (
                            <Button variant="outline" className="flex-1">
                              Ver Resultado
                            </Button>
                          )}
                          {assessment.status === "submitted" && (
                            <>
                              <Button variant="outline" className="flex-1">
                                Ver Submissão
                              </Button>
                              <Button className="flex-1 bg-gradient-primary">
                                Reenviar
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Assessments;
