import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeroContent from "./home/HeroContent";
import VideoBackground from "./home/VideoBackground";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    "https://res.cloudinary.com/dxa3i3h49/video/upload/v1736428810/4443770-hd_1920_1080_25fps_gjaflm.mp4",
    "https://res.cloudinary.com/dxa3i3h49/video/upload/v1736428807/4296918-uhd_3840_2160_25fps_okexuk.mp4",
    "https://res.cloudinary.com/dxa3i3h49/video/upload/v1736428799/3044865-uhd_3840_2160_24fps_ebppj1.mp4"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleEligibilityCheck = () => {
    navigate("/eligibility");
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 pt-20 lg:pt-0 bg-background overflow-hidden">
      {/* Background video with reduced opacity */}
      <div className="absolute inset-0 z-0 opacity-10">
        <VideoBackground videos={videos} currentSlide={currentSlide} />
      </div>

      {/* Split screen container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Featured video */}
        <div className="relative order-2 lg:order-1">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] lg:h-[600px] animate-scale-in">
            <VideoBackground videos={videos} currentSlide={currentSlide} />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        </div>

        {/* Right side - Hero content */}
        <div className="order-1 lg:order-2">
          <HeroContent handleEligibilityCheck={handleEligibilityCheck} />
        </div>
      </div>
    </div>
  );
};

export default Hero;