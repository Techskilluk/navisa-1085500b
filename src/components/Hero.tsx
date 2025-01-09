import { Button } from "@/components/ui/button";
import { ArrowRight, Building } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
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
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleEligibilityCheck = () => {
    navigate("/eligibility");
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 pt-24 lg:pt-0 bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
        <div className="space-y-6 lg:space-y-8 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-3xl lg:text-6xl font-bold text-white leading-tight">
            Transform Your Career Across Borders
          </h1>
          <p className="text-base lg:text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
            Navigate global opportunities with confidence. NAVISA connects ambitious professionals with international employers, simplifies migration pathways, and turns your dream of a global career into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              className="px-6 py-4 text-base lg:text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2 w-full sm:w-auto"
              onClick={handleEligibilityCheck}
            >
              Begin Your Global Journey
              <ArrowRight className="w-5 h-5 text-black" />
            </Button>
            <Link to="/enterprise" className="w-full sm:w-auto">
              <Button 
                variant="outline"
                className="px-6 py-4 text-base lg:text-lg border-white text-white hover:bg-white/10 flex items-center gap-2 w-full"
              >
                For Businesses
                <Building className="w-5 h-5" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-8">
            <div>
              <div className="text-xl lg:text-3xl font-bold text-white">150+</div>
              <div className="text-sm lg:text-base text-white/60">Success Stories</div>
            </div>
            <div>
              <div className="text-xl lg:text-3xl font-bold text-white">35+</div>
              <div className="text-sm lg:text-base text-white/60">Countries</div>
            </div>
            <div>
              <div className="text-xl lg:text-3xl font-bold text-white">24/7</div>
              <div className="text-sm lg:text-base text-white/60">Expert Support</div>
            </div>
          </div>
        </div>
        <div className="relative mt-8 lg:mt-0 order-1 lg:order-2">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl h-[250px] sm:h-[300px] lg:h-[600px]">
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
          <div className="absolute -bottom-4 -right-4 w-48 lg:w-72 h-48 lg:h-72 bg-accent/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;