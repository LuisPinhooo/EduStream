import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  GraduationCap,
  Menu,
  X,
  BookOpen,
  Video,
  BarChart3,
  Settings,
  LogOut,
  User,
  ClipboardList,
  ChevronLeft,
  ChevronRight,
  BookMarked,
  Trophy,
  Library,
} from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";

const NavbarSidebar = () => {
  const { isOpen, setIsOpen } = useSidebar();
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Painel", icon: BarChart3 },
    { to: "/my-courses", label: "Meus Cursos", icon: BookMarked },
    { to: "/courses", label: "Explorar", icon: BookOpen },
    { to: "/live/1", label: "Aulas ao Vivo", icon: Video },
    { to: "/assessments", label: "Avaliações", icon: ClipboardList },
    { to: "/library", label: "Biblioteca", icon: Library },
    { to: "/gamification", label: "Conquistas", icon: Trophy },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-hero text-white transition-all duration-300 z-40 ${
          isOpen ? "w-64" : "w-20"
        } border-r border-white/10`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            {isOpen && (
              <span className="text-xl font-display font-bold">EduStream</span>
            )}
          </Link>

          {/* Toggle Button */}
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:bg-white/10"
          >
            {isOpen ? (
              <ChevronLeft className="h-5 w-5" />
            ) : (
              <ChevronRight className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-6 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.to} to={link.to}>
                <Button
                  variant={isActive(link.to) ? "default" : "ghost"}
                  className={`w-full justify-start ${
                    isActive(link.to)
                      ? "bg-white/20 text-white hover:bg-white/30"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${!isOpen && "mx-auto"}`} />
                  {isOpen && <span className="ml-3">{link.label}</span>}
                </Button>
              </Link>
            );
          })}
        </nav>

        {/* User Menu */}
        <div className="p-4 border-t border-white/10">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={`w-full justify-start text-white hover:bg-white/10 ${
                  !isOpen && "p-0"
                }`}
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/profile-photo.jpg" />
                  <AvatarFallback className="bg-white/20 text-white">
                    AJ
                  </AvatarFallback>
                </Avatar>
                {isOpen && (
                  <div className="ml-3 text-left">
                    <p className="text-sm font-semibold">Luis Pinho</p>
                    <p className="text-xs text-white/60">Estudante</p>
                  </div>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <Link to="/profile">
                <DropdownMenuItem>
                  <User className="h-4 w-4 mr-2" />
                  <span>Meu Perfil</span>
                </DropdownMenuItem>
              </Link>
              <Link to="/settings">
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  <span>Configurações</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600">
                <LogOut className="h-4 w-4 mr-2" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Mobile Menu Button - Appears only on mobile */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-gradient-hero text-white border-b border-white/10 flex items-center justify-between px-4 z-50">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
            <GraduationCap className="h-5 w-5" />
          </div>
          <span className="font-display font-bold">EduStream</span>
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button size="icon" variant="ghost" className="text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.to} to={link.to}>
                  <DropdownMenuItem>
                    <Icon className="h-4 w-4 mr-2" />
                    <span>{link.label}</span>
                  </DropdownMenuItem>
                </Link>
              );
            })}
            <DropdownMenuSeparator />
            <Link to="/profile">
              <DropdownMenuItem>
                <User className="h-4 w-4 mr-2" />
                <span>Meu Perfil</span>
              </DropdownMenuItem>
            </Link>
            <Link to="/settings">
              <DropdownMenuItem>
                <Settings className="h-4 w-4 mr-2" />
                <span>Configurações</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 focus:bg-red-50 focus:text-red-600">
              <LogOut className="h-4 w-4 mr-2" />
              <span>Sair</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default NavbarSidebar;
