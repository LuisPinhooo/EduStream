import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import NavbarSidebar from "@/components/NavbarSidebar";
import { useSidebar } from "@/context/SidebarContext";
import { Trophy, Star, Lock, Unlock, TrendingUp, Target } from "lucide-react";

const Gamification = () => {
  const { isOpen } = useSidebar();

  const achievements = [
    {
      id: 1,
      title: "Primeiro Passo",
      description: "Conclua seu primeiro curso",
      icon: "🎓",
      unlocked: true,
      progress: 1,
      maxProgress: 1,
      rarity: "comum",
      reward: 100,
      unlockedAt: "21 Nov 2024",
    },
    {
      id: 2,
      title: "Aprendiz Dedicado",
      description: "Conclua 3 cursos",
      icon: "📚",
      unlocked: false,
      progress: 1,
      maxProgress: 3,
      rarity: "comum",
      reward: 300,
    },
    {
      id: 3,
      title: "Mestre da Plataforma",
      description: "Conclua 10 cursos",
      icon: "🏆",
      unlocked: false,
      progress: 1,
      maxProgress: 10,
      rarity: "raro",
      reward: 1000,
    },
    {
      id: 4,
      title: "100% Dedicação",
      description: "Conclua um curso com 100%",
      icon: "⭐",
      unlocked: true,
      progress: 1,
      maxProgress: 1,
      rarity: "raro",
      reward: 500,
      unlockedAt: "20 Nov 2024",
    },
    {
      id: 5,
      title: "Sequência de Ouro",
      description: "Mantenha 15 dias de sequência",
      icon: "🔥",
      unlocked: true,
      progress: 15,
      maxProgress: 15,
      rarity: "épico",
      reward: 750,
      unlockedAt: "18 Nov 2024",
    },
    {
      id: 6,
      title: "Participante Ativo",
      description: "Envie 50 mensagens no chat",
      icon: "💬",
      unlocked: false,
      progress: 23,
      maxProgress: 50,
      rarity: "comum",
      reward: 200,
    },
    {
      id: 7,
      title: "Quiz Master",
      description: "Obtenha 90%+ em 5 quizzes",
      icon: "🎯",
      unlocked: true,
      progress: 5,
      maxProgress: 5,
      rarity: "épico",
      reward: 800,
      unlockedAt: "15 Nov 2024",
    },
    {
      id: 8,
      title: "Colecione Tudo",
      description: "Desbloqueie todos os badges",
      icon: "👑",
      unlocked: false,
      progress: 3,
      maxProgress: 8,
      rarity: "lendário",
      reward: 5000,
    },
    {
      id: 9,
      title: "Speedrunner",
      description: "Conclua um curso em menos de 7 dias",
      icon: "⚡",
      unlocked: false,
      progress: 0,
      maxProgress: 1,
      rarity: "raro",
      reward: 600,
    },
    {
      id: 10,
      title: "Perfeccionista",
      description: "Conclua 3 cursos com 100%",
      icon: "💎",
      unlocked: false,
      progress: 1,
      maxProgress: 3,
      rarity: "épico",
      reward: 1200,
    },
  ];

  const stats = {
    totalPoints: 4350,
    level: 8,
    nextLevelPoints: 5000,
    unlockedAchievements: achievements.filter((a) => a.unlocked).length,
    totalAchievements: achievements.length,
  };

  const rarityColors: Record<string, string> = {
    comum: "bg-gray-500/10 border-gray-500/20 text-gray-700",
    raro: "bg-blue-500/10 border-blue-500/20 text-blue-700",
    épico: "bg-purple-500/10 border-purple-500/20 text-purple-700",
    lendário: "bg-yellow-500/10 border-yellow-500/20 text-yellow-700",
  };

  const rarityBadgeColors: Record<string, string> = {
    comum: "bg-gray-500 text-white",
    raro: "bg-blue-500 text-white",
    épico: "bg-purple-500 text-white",
    lendário: "bg-yellow-500 text-white",
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarSidebar />
      <div className={`transition-all duration-300 md:pt-0 pt-16 ${isOpen ? "md:ml-64" : "md:ml-20"}`}>
        {/* Header */}
        <section className="bg-gradient-hero text-white py-12 mb-8">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-display font-bold mb-2 flex items-center gap-3">
              <Trophy className="h-10 w-10" />
              Gamificação
            </h1>
            <p className="text-white/80">Desbloqueie conquistas e ganhe pontos ao aprender</p>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-12">
          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">⭐</span>
                <span className="text-3xl font-bold font-display text-primary">{stats.totalPoints}</span>
              </div>
              <p className="text-sm text-muted-foreground">Pontos Totais</p>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🎖️</span>
                <span className="text-3xl font-bold font-display text-accent">{stats.level}</span>
              </div>
              <p className="text-sm text-muted-foreground">Nível Atual</p>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">🏆</span>
                <span className="text-3xl font-bold font-display text-success">
                  {stats.unlockedAchievements}/{stats.totalAchievements}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Conquistas</p>
            </Card>

            <Card className="p-6 bg-gradient-card">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">📈</span>
                <span className="text-sm font-semibold text-primary">
                  {Math.round((stats.unlockedAchievements / stats.totalAchievements) * 100)}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground">Progresso</p>
            </Card>
          </div>

          {/* Level Progress */}
          <Card className="p-6 mb-8 bg-gradient-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-lg">Progresso para Próximo Nível</h3>
              <Badge className="bg-gradient-primary">Nível {stats.level}</Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">{stats.totalPoints} pontos</span>
                <span className="font-semibold">{stats.nextLevelPoints} pontos</span>
              </div>
              <Progress value={(stats.totalPoints / stats.nextLevelPoints) * 100} className="h-3" />
              <p className="text-xs text-muted-foreground">{stats.nextLevelPoints - stats.totalPoints} pontos faltam</p>
            </div>
          </Card>

          {/* Achievements Grid */}
          <h2 className="text-2xl font-display font-bold mb-6">Conquistas Disponíveis</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`p-6 transition-all duration-300 border-2 ${
                  achievement.unlocked
                    ? rarityColors[achievement.rarity]
                    : "bg-muted/50 border-muted-foreground/20 opacity-60"
                } ${
                  achievement.unlocked
                    ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{achievement.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display font-bold">{achievement.title}</h3>
                      {achievement.unlocked ? (
                        <Unlock className="h-5 w-5 text-success" />
                      ) : (
                        <Lock className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <Badge className={rarityBadgeColors[achievement.rarity]} variant="secondary">
                      {achievement.rarity.charAt(0).toUpperCase() + achievement.rarity.slice(1)}
                    </Badge>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>

                {achievement.maxProgress > 1 && (
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-muted-foreground">Progresso</span>
                      <span className="font-semibold">
                        {achievement.progress}/{achievement.maxProgress}
                      </span>
                    </div>
                    <Progress
                      value={(achievement.progress / achievement.maxProgress) * 100}
                      className="h-2"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between border-t pt-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm font-semibold">{achievement.reward}</span>
                  </div>
                  {achievement.unlocked && achievement.unlockedAt && (
                    <span className="text-xs text-muted-foreground">{achievement.unlockedAt}</span>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Leaderboard */}
          <div className="mt-12">
            <h2 className="text-2xl font-display font-bold mb-6">Ranking Geral</h2>
            <Card className="p-6">
              <div className="space-y-4">
                {[
                  { rank: 1, name: "Luis Pinho", points: 4350, level: 8, icon: "👑" },
                  { rank: 2, name: "Maria Silva", points: 3890, level: 7, icon: "🥈" },
                  { rank: 3, name: "João Santos", points: 3450, level: 7, icon: "🥉" },
                  { rank: 4, name: "Paula Costa", points: 3120, level: 6, icon: "4️⃣" },
                  { rank: 5, name: "Carlos Lima", points: 2890, level: 6, icon: "5️⃣" },
                ].map((user, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                      index === 0 ? "bg-yellow-500/10 border border-yellow-500/20" : "hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-2xl">{user.icon}</span>
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-xs text-muted-foreground">Nível {user.level}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 font-semibold">
                        <Star className="h-4 w-4 text-yellow-500" />
                        {user.points}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gamification;
