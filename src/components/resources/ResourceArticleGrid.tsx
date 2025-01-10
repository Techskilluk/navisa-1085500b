import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

interface ResourceArticleGridProps {
  articles: Article[];
}

const ResourceArticleGrid = ({ articles }: ResourceArticleGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
      ))}
    </div>
  );
};

export default ResourceArticleGrid;