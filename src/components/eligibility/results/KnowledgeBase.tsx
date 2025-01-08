import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BookOpen, Award, Newspaper } from "lucide-react";
import { useState } from "react";

interface Article {
  type: "news" | "success" | "guide";
  title: string;
  description: string;
  date: string;
}

interface KnowledgeBaseProps {
  articles: Article[];
}

const KnowledgeBase = ({ articles: initialArticles }: KnowledgeBaseProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [articles, setArticles] = useState(initialArticles);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = initialArticles.filter(article => 
      article.title.toLowerCase().includes(query.toLowerCase()) ||
      article.description.toLowerCase().includes(query.toLowerCase())
    );
    setArticles(filtered);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-medium">Knowledge Base</h2>
        <div className="w-64">
          <Input
            type="search"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="success">Success Stories</TabsTrigger>
        </TabsList>

        <ScrollArea className="h-[400px]">
          <div className="grid gap-4">
            {articles.map((article, index) => (
              <Card 
                key={index} 
                className="p-4 hover:bg-accent/5 transition-colors cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  {article.type === "news" && <Newspaper className="h-5 w-5 text-blue-500" />}
                  {article.type === "success" && <Award className="h-5 w-5 text-green-500" />}
                  {article.type === "guide" && <BookOpen className="h-5 w-5 text-purple-500" />}
                  <div className="flex-1">
                    <h3 className="font-medium">{article.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {article.description}
                    </p>
                    <time className="text-xs text-muted-foreground mt-2 block">
                      {new Date(article.date).toLocaleDateString()}
                    </time>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </Tabs>
    </div>
  );
};

export default KnowledgeBase;