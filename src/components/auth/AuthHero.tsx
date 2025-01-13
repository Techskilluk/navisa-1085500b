const AuthHero = () => {
  return (
    <div className="hidden lg:block lg:w-1/2 relative">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://res.cloudinary.com/dxa3i3h49/video/upload/v1736428810/4443770-hd_1920_1080_25fps_gjaflm.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="max-w-xl text-white space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white/95 drop-shadow-lg">
            Your Gateway to Global Opportunities
          </h1>
          <p className="text-lg text-white/90 font-medium drop-shadow">
            Join thousands of professionals who trust Navisa for their international mobility journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthHero;