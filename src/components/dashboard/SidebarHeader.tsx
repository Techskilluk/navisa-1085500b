import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface SidebarHeaderProps {
  onClose: () => void;
}

const SidebarHeader = ({ onClose }: SidebarHeaderProps) => {
  return (
    <div className="p-6 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <img src="/navisa-logo.svg" alt="Navisa" className="h-8" />
      </Link>
      <button
        onClick={onClose}
        className="lg:hidden p-2 rounded-lg hover:bg-accent/10"
      >
        <X className="w-5 h-5 text-muted-foreground" />
      </button>
    </div>
  );
};

export default SidebarHeader;