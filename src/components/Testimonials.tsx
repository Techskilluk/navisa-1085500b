import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "NAVISA guided me through my journey to secure a skilled worker visa and land a tech job in the UK!",
      author: "Maria",
      role: "Software Engineer",
      avatar: "/lovable-uploads/40412cbb-dfc0-4d5e-9eb8-96437e121af6.png"
    },
    {
      quote: "With their support, I transitioned from a temporary work visa to permanent residency in Canada!",
      author: "James",
      role: "Business Analyst",
      avatar: "/lovable-uploads/ae4007e5-9928-4825-9c35-b6ce1819a9dd.png"
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
        
        <Carousel className="w-full max-w-4xl mx-auto mb-12">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card className="p-8 hover-lift glass-effect mx-4">
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
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

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