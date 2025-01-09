import HeroContent from "./hero/HeroContent";
import HeroVideo from "./hero/HeroVideo";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel */}
        <div className="w-full lg:w-1/2 bg-[#F8F8F8] dark:bg-background p-8 lg:p-16 flex items-center justify-center">
          <HeroContent />
        </div>
        
        {/* Right Panel */}
        <div className="w-full lg:w-1/2 relative">
          <HeroVideo />
        </div>
      </div>
    </div>
  );
};

export default Hero;