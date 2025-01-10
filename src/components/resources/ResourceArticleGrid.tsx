import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Understanding Work Visas",
    description: "A comprehensive guide to different types of work visas and their requirements.",
    image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png",
    category: "Visa Guide"
  },
  {
    id: 2,
    title: "Immigration Process Overview",
    description: "Step-by-step guide to navigating the immigration process successfully.",
    image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png",
    category: "Process Guide"
  },
  {
    id: 3,
    title: "Document Preparation Tips",
    description: "Essential tips for preparing your immigration documents correctly.",
    image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png",
    category: "Tips"
  }
];

const ResourceArticleGrid = () => {
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
};

export default ResourceArticleGrid;