import React, { useState, useEffect } from 'react';

interface VideoBackgroundProps {
  videos: string[];
  currentSlide: number;
}

const VideoBackground = ({ videos, currentSlide }: VideoBackgroundProps) => {
  return (
    <div className="absolute inset-0 z-0 opacity-20">
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
  );
};

export default VideoBackground;