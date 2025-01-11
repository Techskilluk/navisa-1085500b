import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";

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
              <Badge variant="outline">Template</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return null;
};

export default ResourceGrid;