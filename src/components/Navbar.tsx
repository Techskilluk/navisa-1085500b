import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const navigation = [
    { name: "How it Works", href: "/how-it-works" },
    { name: "Pathways", href: "/pathways" },
    { name: "Enterprise", href: "/enterprise" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/navisa-logo.svg" alt="Navisa" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-white hover:text-white/80 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <Link to="/dashboard">
                <Button variant="secondary">Dashboard</Button>
              </Link>
            ) : (
              <Link to="/signin">
                <Button variant="secondary">Sign In</Button>
              </Link>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-modal sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 text-lg font-medium text-white hover:text-white/80 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                  {user ? (
                    <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                      <Button variant="secondary" className="w-full">
                        Dashboard
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/signin" onClick={() => setIsOpen(false)}>
                      <Button variant="secondary" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;