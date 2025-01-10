import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface SidebarMenuItemProps {
  icon: LucideIcon;
  label: string;
  path?: string;
  section?: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarMenuItem = ({ icon: Icon, label, path, isActive, onClick }: SidebarMenuItemProps) => {
  const Component = path ? Link : 'button';
  
  return (
    <li>
      <Component
        {...(path ? { to: path } : {})}
        className={cn(
          "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
          isActive
            ? "bg-accent/10 text-accent"
            : "text-muted-foreground hover:text-accent hover:bg-accent/5"
        )}
        onClick={onClick}
      >
        <Icon className="h-5 w-5" />
        {label}
      </Component>
    </li>
  );
};

export default SidebarMenuItem;