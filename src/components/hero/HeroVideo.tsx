import { useState, useEffect } from "react";

const HeroVideo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const videos = [
    "https://res.cloudinary.com/dxa3i3h49/video/upload/v1736428810/4443770-hd_1920_1080_25fps_gjaflm.mp4",
    "https://res.cloudinary.com/dxa3i3h49/video/upload/v1736428807/4296918-uhd_3840_2160_25fps_okexuk.mp4",
    "https://res.cloudinary.com/dxa3i3h49/video/upload/v1736428799/3044865-uhd_3840_2160_24fps_ebppj1.mp4"
  ];

  // Fallback image for mobile
  const fallbackImage = "https://res.cloudinary.com/dxa3i3h49/image/upload/v1736428810/fallback-image.jpg";

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div 
      className="relative w-full h-full min-h-[400px] lg:min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {videos.map((video, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Desktop Video */}
          <div className="hidden lg:block h-full">
            <video
              className={`w-full h-full object-cover transition-transform duration-700 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
              autoPlay
              muted
              loop
              playsInline
              loading="lazy"
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Mobile Fallback Image */}
          <div className="block lg:hidden h-full">
            <img
              src={fallbackImage}
              alt="Video fallback"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent pointer-events-none"></div>
      
      {/* Optional Sound Controls - Initially Hidden */}
      <button 
        className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors duration-300"
        aria-label="Toggle sound"
      >
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
          />
        </svg>
      </button>
    </div>
  );
};

export default HeroVideo;