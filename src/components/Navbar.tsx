import { useState } from "react";
import NavLogo from "./navigation/NavLogo";
import NavLinks from "./navigation/NavLinks";
import AuthButtons from "./navigation/AuthButtons";
import MobileNav from "./navigation/MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLogo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <AuthButtons />
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNav 
            isOpen={isOpen}
            onOpenChange={setIsOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;