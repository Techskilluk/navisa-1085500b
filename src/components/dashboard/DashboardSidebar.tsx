import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  User,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: MessageSquare,
    label: "Consultations",
    path: "/consultations",
  },
  {
    icon: BookOpen,
    label: "Resources",
    path: "/resources",
  },
  {
    icon: User,
    label: "My Account",
    path: "/account",
  },
];

const DashboardSidebar = () => {
  const location = useLocation();
  const { signOut } = useAuth();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border/10">
      <div className="p-6">
        <Link to="/" className="flex items-center gap-2">
          <img src="/navisa-logo.svg" alt="Navisa" className="h-8" />
        </Link>
      </div>
      <nav className="px-4 py-6">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === item.path
                      ? "bg-accent/10 text-accent"
                      : "text-muted-foreground hover:text-accent hover:bg-accent/5"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="absolute bottom-8 left-0 right-0 px-4">
        <button
          onClick={() => signOut()}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Log out
        </button>
      </div>
    </aside>
  );
};

export default DashboardSidebar;