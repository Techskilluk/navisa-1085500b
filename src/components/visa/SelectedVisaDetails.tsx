import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Trash2 } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SelectedVisaDetailsProps {
  visa: {
    name: string;
    country: string;
    description: string;
    timeline: string;
    successRate: number;
  };
  onContinue: () => void;
  onDelete: () => void;
}

const SelectedVisaDetails = ({ visa, onContinue, onDelete }: SelectedVisaDetailsProps) => {
  const chartData = [
    { name: visa.name, rate: visa.successRate },
    { name: "Average", rate: 70 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">{visa.name}</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onDelete}
            className="text-destructive hover:text-destructive/90"
          >
            <Trash2 className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Keep the momentum going! Just a few more steps to finish your {visa.name} application for {visa.country}.
          </p>
          
          <Button 
            onClick={onContinue}
            className="w-full"
            size="lg"
          >
            Continue Application
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <div className="space-y-4">
            <h4 className="font-medium">Success Rate Comparison</h4>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
                  <XAxis 
                    dataKey="name"
                    tick={{ fill: '#FFFFFF', fontSize: 12 }}
                    tickLine={{ stroke: '#FFFFFF' }}
                  />
                  <YAxis
                    tick={{ fill: '#FFFFFF', fontSize: 12 }}
                    tickLine={{ stroke: '#FFFFFF' }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1A1B1E',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      color: '#FFFFFF'
                    }}
                  />
                  <Bar dataKey="rate" fill="#FFFFFF" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Estimated Timeline</span>
              <span className="text-sm text-muted-foreground">{visa.timeline}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SelectedVisaDetails;