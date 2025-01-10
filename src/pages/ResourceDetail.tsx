import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

const ResourceDetail = () => {
  const { id } = useParams();

  // In a real app, this would fetch the article data based on the ID
  const article = {
    title: "Understanding Work Visas",
    content: `
      A work visa is an official document that allows foreign nationals to work in a specific country for a set period. Understanding the different types of work visas and their requirements is crucial for a successful application process.

      What is a Work Visa?
      A work visa, also known as a work permit or employment visa, is an endorsement on your passport that allows you to work in a foreign country legally. The type of work visa you need depends on various factors, including your qualifications, the nature of your work, and the duration of your stay.

      Key Requirements
      - Valid passport
      - Job offer from an approved employer
      - Educational qualifications
      - Professional experience
      - Language proficiency
      - Clean criminal record
    `,
    image: "/lovable-uploads/d695af27-98df-42b0-88f9-fea555532554.png"
  };

  return (
    <div className="min-h-screen bg-background pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link to="/resources">
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Button>
        </Link>

        <article className="prose prose-lg dark:prose-invert mx-auto">
          <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
          
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
          />

          <div className="space-y-4 whitespace-pre-wrap">
            {article.content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default ResourceDetail;