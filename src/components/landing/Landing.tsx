import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Navisa
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">
          Your trusted partner in visa and immigration services
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => navigate("/login")}>
            Get Started
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate("/register")}>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;