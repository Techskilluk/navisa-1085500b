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
    <div className="relative min-h-screen bg-background">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Section */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight animate-fade-in">
              Transform Your Career Across Borders
            </h1>
            
            <p className="text-xl text-white/80 leading-relaxed max-w-2xl animate-fade-in delay-100">
              Navigate global opportunities with confidence. NAVISA connects ambitious professionals with international employers, simplifies migration pathways, and turns your dream of a global career into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in delay-200">
              <Button 
                className="w-full sm:w-auto px-8 py-7 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2"
                onClick={handleEligibilityCheck}
              >
                Begin Your Global Journey
                <ArrowRight className="w-5 h-5 text-black" />
              </Button>
              <Link to="/enterprise" className="w-full sm:w-auto">
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-7 text-lg border-white text-white hover:bg-white/10 flex items-center gap-2"
                >
                  For Businesses
                  <Building className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10 animate-fade-in delay-300">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">150+</div>
                <div className="text-sm lg:text-base text-white/60 mt-1">Success Stories</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">35+</div>
                <div className="text-sm lg:text-base text-white/60 mt-1">Countries</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="text-sm lg:text-base text-white/60 mt-1">Expert Support</div>
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden animate-scale-in">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <video
                  className="w-full h-full object-cover rounded-3xl"
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
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;