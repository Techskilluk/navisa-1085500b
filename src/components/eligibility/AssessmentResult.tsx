import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Calendar } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { EligibilityData } from "./EligibilityForm";

interface AssessmentResultProps {
  data: EligibilityData;
}

const AssessmentResult = ({ data }: AssessmentResultProps) => {
  // Dummy data for the chart
  const ratingData = [
    { name: "Education", success: 42, evaluation: 35 },
    { name: "Experience", success: 50, evaluation: 45 },
    { name: "Skills Match", success: 38, evaluation: 42 },
  ];

  // Dummy visa recommendations
  const recommendations = [
    { program: "Express entry (canada)", score: "85%" },
    { program: "Global talent visa (UK)", score: "75%" },
    { program: "EB-1/EB-2 (USA)", score: "58%" },
  ];

  const handleDownload = () => {
    console.log("Downloading assessment result...");
    // Implementation for PDF generation would go here
  };

  const handleBookConsultation = () => {
    console.log("Booking consultation...");
    // Implementation for consultation booking would go here
  };

  return (
    <Card className="p-8 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Eligibility assessment result</h2>
          <div className="space-x-4">
            <Button
              variant="outline"
              onClick={handleDownload}
              className="space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download result</span>
            </Button>
            <Button onClick={handleBookConsultation}>Book consultation</Button>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Top recommendation</h3>
            <div className="space-y-4">
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-card rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-4 bg-secondary rounded" />
                    <span>{rec.program}</span>
                  </div>
                  <span className="font-medium">{rec.score}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Ratings</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ratingData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Bar
                    dataKey="success"
                    fill="#8989DE"
                    name="Success rate"
                  />
                  <Bar
                    dataKey="evaluation"
                    fill="#E6E4DD"
                    name="Evaluation score"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Take the next steps</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                Based on your profile, you are most suited for the express entry visa pathway
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Get all your documentation ready</li>
                <li>Prepare for language proficiency test</li>
                <li>Review your career portfolio showcasing your best work</li>
              </ul>
            </div>
            <div className="bg-accent/10 p-6 rounded-lg">
              <h4 className="font-medium mb-2">
                Ready to tailor your application for maximum success?
              </h4>
              <p className="text-muted-foreground mb-4">
                Book a consultation with our expert now
              </p>
              <Button onClick={handleBookConsultation} className="space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Book consultation</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AssessmentResult;