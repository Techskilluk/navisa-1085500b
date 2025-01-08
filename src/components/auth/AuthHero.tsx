const AuthHero = () => {
  return (
    <div className="hidden lg:block lg:w-1/2 relative">
      <img 
        src="/lovable-uploads/de492bbf-a7aa-4f4d-a5d3-b9a7e0143516.png"
        alt="Global Mobility"
        className="absolute inset-0 w-full h-full object-cover"
      />
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