import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "NAVISA guided me through my journey to secure a skilled worker visa and land a tech job in the UK!",
      author: "Maria",
      role: "Software Engineer",
      avatar: "/lovable-uploads/942c5089-8393-456e-a19d-8b235d467925.png"
    },
    {
      quote: "With their support, I transitioned from a temporary work visa to permanent residency in Canada!",
      author: "James",
      role: "Business Analyst",
      avatar: "/lovable-uploads/912220b2-7eb0-449e-b1e6-23f7926d7091.png"
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Success Stories
        </h2>
        <p className="text-xl text-white/60 text-center mb-6 max-w-2xl mx-auto">
          Real People, Real Success:
        </p>
        <p className="text-lg text-white/80 text-center mb-12 max-w-2xl mx-auto">
          Hear from professionals who achieved global career success with NAVISA's help.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover-lift glass-effect">
              <div className="flex items-start gap-4 mb-6">
                <Avatar className="w-16 h-16 border-2 border-accent/20">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                  <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Quote className="w-8 h-8 text-accent/60 mb-2" />
                  <p className="text-white/90 text-lg italic mb-4">{testimonial.quote}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-semibold">– {testimonial.author}</span>
                    <span className="text-white/60">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button 
            variant="secondary" 
            size="lg"
            className="hover:bg-secondary/90"
          >
            Read More Stories
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;