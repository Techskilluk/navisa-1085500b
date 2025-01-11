import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isAppDomain = window.location.hostname.startsWith('app.');

  const handleSignOut = async () => {
    try {
      console.log("Attempting to sign out...");
      await signOut();
      toast({
        title: "Signed out successfully",
        description: "You have been logged out of your account.",
      });
      console.log("Sign out successful");
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        variant: "destructive",
        title: "Error signing out",
        description: "There was a problem signing you out. Please try again.",
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const marketingNavItems = [
    { label: "Home", path: "/" },
    { label: "Pathways", path: "/pathways" },
    { label: "How it works", path: "/how-it-works" },
    { label: "Enterprise", path: "/enterprise" },
  ];

  const appNavItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Eligibility Check", path: "/eligibility" },
  ];

  const navItems = isAppDomain ? appNavItems : marketingNavItems;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src="/navisa-logo.svg" alt="Navisa" className="h-8 w-auto" />
          </Link>
          <span className="text-2xl font-bold text-white">Navisa</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          
          {isAppDomain ? (
            user ? (
              <Button 
                onClick={handleSignOut}
                variant="outline"
                className="bg-white text-black hover:bg-white/90 transition-colors"
              >
                Sign out
                <LogOut className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Link to="/signin">
                <Button className="bg-white text-black hover:bg-white/90 transition-colors">
                  Sign in
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )
          ) : (
            <Link to="https://app.navisa.co/signin">
              <Button className="bg-white text-black hover:bg-white/90 transition-colors">
                Get Started
                <LogIn className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-background/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="block text-white/80 hover:text-white transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {isAppDomain ? (
              user ? (
                <Button 
                  onClick={() => {
                    handleSignOut();
                    setIsMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full bg-white text-black hover:bg-white/90 transition-colors"
                >
                  Sign out
                  <LogOut className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Link 
                  to="/signin" 
                  className="block" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-white text-black hover:bg-white/90 transition-colors">
                    Sign in
                    <LogIn className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              )
            ) : (
              <Link 
                to="https://app.navisa.co/signin" 
                className="block" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-white text-black hover:bg-white/90 transition-colors">
                  Get Started
                  <LogIn className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;