import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Download, 
  Calendar, 
  CheckCircle, 
  XCircle, 
  BookOpen,
  Newspaper,
  Award,
  Info,
  Search
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { EligibilityData } from "./EligibilityForm";
import { useState } from "react";
import { Input } from "@/components/ui/input";

interface AssessmentResultsProps {
  data: EligibilityData;
}

const AssessmentResults = ({ data }: AssessmentResultsProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data for the chart
  const matchData = [
    { program: "Express Entry (Canada)", match: 85 },
    { program: "Global Talent (UK)", match: 75 },
    { program: "EB-1/EB-2 (USA)", match: 58 },
  ];

  // Sample criteria breakdown
  const criteriaBreakdown = [
    { category: "Education", score: 25, maxScore: 30, status: "pass" },
    { category: "Work Experience", score: 15, maxScore: 20, status: "pass" },
    { category: "Language", score: 18, maxScore: 20, status: "pass" },
    { category: "Age", score: 8, maxScore: 10, status: "pass" },
    { category: "Adaptability", score: 5, maxScore: 10, status: "improvement" },
  ];

  // Sample knowledge base articles
  const articles = [
    {
      type: "news",
      title: "2024 Immigration Policy Updates",
      description: "Latest changes in immigration policies across major destinations",
      date: "2024-03-15"
    },
    {
      type: "success",
      title: "From Tech Lead to Canadian PR",
      description: "How a software engineer successfully navigated Express Entry",
      date: "2024-03-10"
    },
    {
      type: "guide",
      title: "Complete Guide to Language Tests",
      description: "Everything you need to know about IELTS and CELPIP",
      date: "2024-03-05"
    }
  ].filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDownload = () => {
    console.log("Downloading assessment report...");
    // Implementation for PDF generation would go here
  };

  const handleBookConsultation = () => {
    console.log("Booking consultation...");
    // Implementation for consultation booking would go here
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Your Immigration Assessment Results</h1>
        <Button
          onClick={handleDownload}
          className="bg-accent hover:bg-accent/90 space-x-2"
        >
          <Download className="h-4 w-4" />
          <span>Download Report</span>
        </Button>
      </div>

      {/* Results Overview */}
      <Card className="p-6 bg-card">
        <div className="space-y-6">
          <h2 className="text-2xl font-medium">Program Matches</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={matchData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="program" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="match" fill="#8989DE" name="Match %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      {/* Criteria Breakdown */}
      <Card className="p-6 bg-card">
        <h2 className="text-2xl font-medium mb-6">Detailed Criteria Breakdown</h2>
        <div className="space-y-4">
          {criteriaBreakdown.map((criteria, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg">
              <div className="flex items-center space-x-3">
                {criteria.status === "pass" ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-yellow-500" />
                )}
                <span className="font-medium">{criteria.category}</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-sm text-muted-foreground">
                  {criteria.score}/{criteria.maxScore} points
                </div>
                <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent"
                    style={{ width: `${(criteria.score / criteria.maxScore) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="p-8 bg-accent/10">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Ready to Take the Next Step?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book a consultation with our immigration experts to discuss your results
            and create a personalized immigration strategy.
          </p>
          <Button 
            onClick={handleBookConsultation}
            size="lg"
            className="bg-accent hover:bg-accent/90 space-x-2"
          >
            <Calendar className="h-5 w-5" />
            <span>Book Immigration Consultation</span>
          </Button>
        </div>
      </Card>

      {/* Knowledge Base */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-medium">Knowledge Base</h2>
          <div className="w-64">
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
            <TabsTrigger value="guides">Guides</TabsTrigger>
            <TabsTrigger value="success">Success Stories</TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[400px] mt-4">
            <div className="grid gap-4">
              {articles.map((article, index) => (
                <Card key={index} className="p-4 hover:bg-accent/5 transition-colors cursor-pointer">
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
    </div>
  );
};

export default AssessmentResults;