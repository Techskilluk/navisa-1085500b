import HeroContent from "./hero/HeroContent";
import HeroVideo from "./hero/HeroVideo";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <HeroContent />
          <HeroVideo />
        </div>
      </div>
    </div>
  );
};

export default Hero;