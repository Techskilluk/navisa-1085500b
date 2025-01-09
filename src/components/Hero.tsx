import HeroContent from "./hero/HeroContent";
import HeroVideo from "./hero/HeroVideo";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Hero content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 flex items-center">
          <HeroContent />
        </div>
        
        {/* Right side - Video */}
        <div className="w-full lg:w-1/2 h-screen">
          <HeroVideo />
        </div>
      </div>
    </div>
  );
};

export default Hero;