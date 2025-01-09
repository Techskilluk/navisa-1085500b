import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "NAVISA turned my international career dream into reality - now I'm thriving as a Senior Developer in London!",
      author: "Maria R.",
      role: "Software Engineer"
    },
    {
      quote: "Thanks to NAVISA's expertise, I secured permanent residency and a leadership role in Toronto.",
      author: "James K.",
      role: "Business Analyst"
    },
    {
      quote: "The platform's comprehensive support made my transition seamless. From visa to job placement, everything was handled professionally.",
      author: "Sarah L.",
      role: "Healthcare Professional"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          From Vision to Reality
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Join professionals who've successfully gone global with NAVISA
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover-lift glass-effect">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Quote className="w-6 h-6 text-white" />
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