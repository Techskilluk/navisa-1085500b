import HeroContent from "./hero/HeroContent";
import HeroVideo from "./hero/HeroVideo";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left side - Hero content */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 flex items-center relative z-10">
          <HeroContent />
        </div>
        
        {/* Right side - Video */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen fixed lg:relative right-0 top-0">
          <HeroVideo />
        </div>
      </div>
    </div>
  );
};

export default Hero;