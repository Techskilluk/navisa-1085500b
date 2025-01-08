import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { EligibilityData } from "./EligibilityForm";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import MatchChart from "./results/MatchChart";
import CriteriaBreakdown from "./results/CriteriaBreakdown";
import KnowledgeBase from "./results/KnowledgeBase";
import CallToAction from "./results/CallToAction";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface AssessmentResultsProps {
  data: EligibilityData;
}

const AssessmentResults = ({ data }: AssessmentResultsProps) => {
  const { toast } = useToast();
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Sample data for the chart
  const matchData = [
    { program: "Express Entry (Canada)", match: 85 },
    { program: "Global Talent (UK)", match: 75 },
    { program: "EB-1/EB-2 (USA)", match: 58 },
  ];

  // Sample criteria breakdown
  const criteriaBreakdown = [
    { category: "Education", score: 25, maxScore: 30, status: "pass" as const },
    { category: "Work Experience", score: 15, maxScore: 20, status: "pass" as const },
    { category: "Language", score: 18, maxScore: 20, status: "pass" as const },
    { category: "Age", score: 8, maxScore: 10, status: "pass" as const },
    { category: "Adaptability", score: 5, maxScore: 10, status: "improvement" as const },
  ];

  // Sample knowledge base articles
  const articles = [
    {
      type: "news" as const,
      title: "2024 Immigration Policy Updates",
      description: "Latest changes in immigration policies across major destinations",
      date: "2024-03-15"
    },
    {
      type: "success" as const,
      title: "From Tech Lead to Canadian PR",
      description: "How a software engineer successfully navigated Express Entry",
      date: "2024-03-10"
    },
    {
      type: "guide" as const,
      title: "Complete Guide to Language Tests",
      description: "Everything you need to know about IELTS and CELPIP",
      date: "2024-03-05"
    }
  ];

  const handleDownload = async () => {
    setIsGeneratingPDF(true);
    try {
      const element = document.getElementById('assessment-results');
      if (!element) return;

      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      // Add header with timestamp and ID
      const timestamp = new Date().toLocaleString();
      const uniqueId = `ID: ${Math.random().toString(36).substr(2, 9)}`;
      
      pdf.setFontSize(10);
      pdf.text(`Generated on: ${timestamp}`, 10, 10);
      pdf.text(uniqueId, 10, 15);
      
      pdf.addImage(imgData, 'PNG', 0, 20, pdfWidth, pdfHeight);
      pdf.save('assessment-results.pdf');

      toast({
        title: "Success",
        description: "Your assessment report has been downloaded.",
      });
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleBookConsultation = () => {
    console.log("Booking consultation...");
    toast({
      title: "Consultation Request Sent",
      description: "We'll contact you shortly to schedule your consultation.",
    });
  };

  return (
    <div id="assessment-results" className="max-w-7xl mx-auto p-6 space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Your Immigration Assessment Results</h1>
        <Button
          onClick={handleDownload}
          disabled={isGeneratingPDF}
          className="bg-accent hover:bg-accent/90 space-x-2 px-6 py-4 text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <Download className="h-4 w-4" />
          <span>{isGeneratingPDF ? "Generating..." : "Download Report"}</span>
        </Button>
      </div>

      <MatchChart data={matchData} />
      <CriteriaBreakdown criteria={criteriaBreakdown} />
      <CallToAction onBookConsultation={handleBookConsultation} />
      <KnowledgeBase articles={articles} />
    </div>
  );
};

export default AssessmentResults;