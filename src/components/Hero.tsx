import HeroContent from "./hero/HeroContent";
import HeroVideo from "./hero/HeroVideo";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="h-screen flex flex-col lg:flex-row">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
          <HeroContent />
        </div>
        
        {/* Right side - Video */}
        <div className="w-full lg:w-1/2 relative">
          <HeroVideo />
        </div>
      </div>
    </div>
  );
};

export default Hero;