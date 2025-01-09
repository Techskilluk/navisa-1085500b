import ProcessStep from "./ProcessStep";

const steps = [
  {
    number: 1,
    title: "Create Your Profile",
    description: "Set up your enterprise account and customize your workspace"
  },
  {
    number: 2,
    title: "Import Your Cases",
    description: "Easily transfer existing cases and client data"
  },
  {
    number: 3,
    title: "Start Managing",
    description: "Begin using our tools to streamline your practice"
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background/95"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Get Started in Three Steps</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Begin transforming your practice with NAVISA Enterprise
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;