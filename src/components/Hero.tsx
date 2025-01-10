import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleEligibilityCheck = () => {
    navigate("/eligibility");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Transform Your Career Across Borders
          </h1>
          <p className="text-lg text-white/80 max-w-xl">
            Navigate global opportunities with confidence. NAVISA connects ambitious professionals with international employers, simplifies migration pathways, and turns your dream of a global career into reality.
          </p>
          <Button 
            className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2"
            onClick={handleEligibilityCheck}
          >
            Begin Your Global Journey
            <ArrowRight className="w-5 h-5 text-black" />
          </Button>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <div className="text-3xl font-bold text-white">150+</div>
              <div className="text-white/60">Success Stories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">35+</div>
              <div className="text-white/60">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/60">Expert Support</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-[600px]">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
          <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;