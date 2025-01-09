import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/pathways", label: "Pathways" },
    { to: "/how-it-works", label: "How it works" },
    { to: "/eligibility", label: "Check your eligibility" },
  ];

  const NavLinks = ({ onClick = () => {} }) => (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-lg text-base"
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="/navisa-logo.svg" alt="Navisa" className="h-8 w-auto" />
          </Link>
          <span className="text-2xl font-bold text-white">Navisa</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLinks />
          {user ? (
            <Button 
              onClick={() => signOut()} 
              className="bg-white text-black hover:bg-white/90 ml-4"
            >
              Sign out
              <LogOut className="w-4 h-4 ml-2 text-black" />
            </Button>
          ) : (
            <Link to="/signin">
              <Button className="bg-white text-black hover:bg-white/90 ml-4">
                Sign in
                <LogIn className="w-4 h-4 ml-2 text-black" />
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-11 w-11">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background text-white">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                <NavLinks onClick={() => setIsOpen(false)} />
                {user ? (
                  <Button 
                    onClick={() => {
                      signOut();
                      setIsOpen(false);
                    }} 
                    className="bg-white text-black hover:bg-white/90 w-full"
                  >
                    Sign out
                    <LogOut className="w-4 h-4 ml-2 text-black" />
                  </Button>
                ) : (
                  <Link to="/signin" className="w-full" onClick={() => setIsOpen(false)}>
                    <Button className="bg-white text-black hover:bg-white/90 w-full">
                      Sign in
                      <LogIn className="w-4 h-4 ml-2 text-black" />
                    </Button>
                  </Link>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;