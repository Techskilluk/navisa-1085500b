import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Passport, Users } from "lucide-react";
import { landingContent } from "@/config/landing-content";

const getIconForCard = (index: number) => {
  switch (index) {
    case 0:
      return <Passport className="h-8 w-8 text-accent" />;
    case 1:
      return <Briefcase className="h-8 w-8 text-accent" />;
    case 2:
      return <GraduationCap className="h-8 w-8 text-accent" />;
    case 3:
      return <Users className="h-8 w-8 text-accent" />;
    default:
      return null;
  }
};

const Features = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-2">
          {landingContent.cards.map((card, index) => (
            <Card key={card.title} className="relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  {getIconForCard(index)}
                  <div>
                    <CardTitle className="text-2xl font-bold">{card.title}</CardTitle>
                    <CardDescription className="mt-2">{card.subtitle}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {'sections' in card ? (
                  // Career Development & Global Recruitment card
                  <div className="space-y-6">
                    {card.sections.map((section) => (
                      <div key={section.sectionTitle} className="space-y-3">
                        <h4 className="font-semibold text-lg">{section.sectionTitle}</h4>
                        <ul className="space-y-2">
                          {section.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  // Other cards with features array
                  <div className="space-y-4">
                    {card.features.map((feature) => (
                      <div key={feature.heading} className="space-y-2">
                        <h4 className="font-semibold">{feature.heading}</h4>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                <p className="mt-6 text-sm text-muted-foreground italic">{card.cta}</p>
                <Button className="mt-6 w-full" variant="secondary">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {landingContent.whyChooseUs.title}
            </h2>
            <ul className="space-y-4">
              {landingContent.whyChooseUs.reasons.map((reason) => (
                <li key={reason} className="flex items-center justify-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {landingContent.finalCta.title}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              {landingContent.finalCta.description}
            </p>
            <Button size="lg" className="mt-4">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
