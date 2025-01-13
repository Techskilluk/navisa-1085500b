const StatsSection = () => {
  return (
    <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in delay-300">
      <div className="text-center lg:text-left">
        <div className="text-2xl lg:text-3xl font-bold text-white">150+</div>
        <div className="text-sm lg:text-base text-white/60">Success Stories</div>
      </div>
      <div className="text-center lg:text-left">
        <div className="text-2xl lg:text-3xl font-bold text-white">35+</div>
        <div className="text-sm lg:text-base text-white/60">Countries</div>
      </div>
      <div className="text-center lg:text-left">
        <div className="text-2xl lg:text-3xl font-bold text-white">24/7</div>
        <div className="text-sm lg:text-base text-white/60">Expert Support</div>
      </div>
    </div>
  );
};

export default StatsSection;