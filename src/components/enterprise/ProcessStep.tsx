interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}

const ProcessStep = ({ number, title, description }: ProcessStepProps) => {
  return (
    <div className="glass-effect p-8 rounded-xl text-center hover-lift">
      <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-2xl font-bold text-white">{number}</span>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

export default ProcessStep;