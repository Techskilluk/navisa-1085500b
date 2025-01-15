import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  User,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarHeader from "./SidebarHeader";

interface DashboardSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onSectionChange: (section: 'dashboard' | 'resources' | 'account') => void;
  activeSection: string;
}

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    section: 'dashboard',
  },
  {
    icon: MessageSquare,
    label: "Consultations",
    path: "/consultation-booking",
  },
  {
    icon: BookOpen,
    label: "Resources",
    section: 'resources',
  },
  {
    icon: User,
    label: "My Account",
    section: 'account',
  },
];

const DashboardSidebar = ({ isOpen, onClose, onSectionChange, activeSection }: DashboardSidebarProps) => {
  const location = useLocation();
  const { signOut } = useAuth();

  const handleMenuItemClick = (item: any) => {
    if (item.section) {
      onSectionChange(item.section);
    }
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-64 bg-card border-r border-border/10 z-50",
          "transform transition-transform duration-300 ease-in-out lg:transform-none",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <SidebarHeader onClose={onClose} />

        <nav className="px-4 py-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <SidebarMenuItem
                key={item.section || item.path}
                {...item}
                isActive={item.section ? activeSection === item.section : location.pathname === item.path}
                onClick={() => handleMenuItemClick(item)}
              />
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-8 left-0 right-0 px-4">
          <button
            onClick={() => {
              signOut();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-accent hover:bg-accent/5 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Log out
          </button>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;