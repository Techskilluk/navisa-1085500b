import { Card } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";

interface Criteria {
  category: string;
  score: number;
  maxScore: number;
  status: "pass" | "improvement";
}

interface CriteriaBreakdownProps {
  criteria: Criteria[];
}

const CriteriaBreakdown = ({ criteria }: CriteriaBreakdownProps) => {
  return (
    <Card className="p-6 bg-card">
      <h2 className="text-2xl font-medium mb-6">Detailed Criteria Breakdown</h2>
      <div className="space-y-4">
        {criteria.map((criteria, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg hover:bg-accent/5 transition-colors">
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
                  className="h-full bg-accent transition-all duration-300"
                  style={{ width: `${(criteria.score / criteria.maxScore) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CriteriaBreakdown;