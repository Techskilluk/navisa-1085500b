import { useState, useEffect } from "react";

const HeroVideo = () => {
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

  return (
    <div className="relative h-full w-full">
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
            style={{ objectFit: 'cover' }}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
        </div>
      ))}
    </div>
  );
};

export default HeroVideo;