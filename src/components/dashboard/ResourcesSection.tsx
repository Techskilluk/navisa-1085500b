import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Book, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Visa Application Guide",
    description: "Step-by-step guide for your visa application process",
    icon: Book,
    url: "/guides/visa-application"
  },
  {
    title: "Document Templates",
    description: "Download required document templates",
    icon: FileText,
    url: "/templates"
  }
];

const ResourcesSection = () => {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-lg">Resources & Guides</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {resources.map((resource, index) => {
          const Icon = resource.icon;
          return (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg border">
              <Icon className="w-8 h-8 text-primary shrink-0" />
              <div className="flex-1 min-w-0">
                <h4 className="font-medium mb-1">{resource.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {resource.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full sm:w-auto"
                  onClick={() => window.open(resource.url, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Access Resource
                </Button>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ResourcesSection;