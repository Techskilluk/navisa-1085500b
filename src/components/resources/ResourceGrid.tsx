import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface Template {
  id: string;
  visa_type: string;
  document_type: string;
  template_url: string;
}

interface ResourceGridProps {
  articles?: Article[];
  templates?: Template[];
}

const ResourceGrid = ({ articles, templates }: ResourceGridProps) => {
  const { toast } = useToast();

  const handleDownload = async (template: Template) => {
    try {
      console.log("Downloading template:", template.template_url);
      const response = await fetch(template.template_url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `${template.document_type.toLowerCase().replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
      
      toast({
        title: "Download Started",
        description: "Your document template is being downloaded.",
      });
    } catch (error) {
      console.error("Error downloading template:", error);
      toast({
        variant: "destructive",
        title: "Download Failed",
        description: "There was an error downloading the template. Please try again.",
      });
    }
  };

  if (articles) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.id} to={`/resources/${article.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-video relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-full"
                />
                <Badge 
                  className="absolute top-4 right-4" 
                  variant="secondary"
                >
                  {article.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {article.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    );
  }

  if (templates) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6 flex flex-col items-start gap-4">
              <div className="flex items-center gap-3">
                <FileText className="h-6 w-6 text-primary" />
                <div>
                  <h3 className="font-semibold">{template.document_type}</h3>
                  <p className="text-sm text-muted-foreground">
                    For {template.visa_type} visa
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => handleDownload(template)}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return null;
};

export default ResourceGrid;