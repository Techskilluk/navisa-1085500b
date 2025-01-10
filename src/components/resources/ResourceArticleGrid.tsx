import ResourceGrid from "./ResourceGrid";

const articles = [
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
  return <ResourceGrid articles={articles} />;
};

export default ResourceArticleGrid;