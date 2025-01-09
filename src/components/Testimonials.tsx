import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Navisa.co made hiring international talent a breeze for our tech company. Their COS process expertise was invaluable!",
      author: "James M.",
      role: "HR Professional"
    },
    {
      quote: "As a student, I felt overwhelmed by the visa process. Navisa guided me every step of the way!",
      author: "Priya S.",
      role: "International Student"
    },
    {
      quote: "The platform streamlined our entire recruitment process. We've successfully placed dozens of international professionals.",
      author: "Sarah K.",
      role: "Immigration Consultant"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Success Stories from Our Clients
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Join thousands of satisfied clients who have transformed their global mobility journey
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Quote className="w-6 h-6 text-accent" />
              </div>
              <p className="text-white/80 mb-4 italic">{testimonial.quote}</p>
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-white/60 text-sm">{testimonial.role}</div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;