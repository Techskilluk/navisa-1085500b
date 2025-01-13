import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const TimelineSection = () => {
  const location = useLocation();
  const [timelineData, setTimelineData] = useState([
    {
      stage: "Document Upload",
      duration: "Completed",
      value: 100,
      color: "#28A745"
    },
    {
      stage: "Review & Submission",
      duration: "0-3 months",
      value: 75,
      color: "#002B5C"
    },
    {
      stage: "Final Result",
      duration: "6+ months",
      value: 50,
      color: "#FFC107"
    }
  ]);

  useEffect(() => {
    if (location.state?.documentSubmission) {
      setTimelineData(prev => [
        { ...prev[0], stage: "Document Upload", duration: "Completed", value: 100 },
        ...prev.slice(1)
      ]);
    }
  }, [location.state]);

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Timeline Estimates</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={timelineData}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis type="number" hide />
              <YAxis
                dataKey="stage"
                type="category"
                tick={{ fill: '#FFFFFF', fontSize: 12 }}
                width={150}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-background p-2 rounded-lg border border-border">
                        <p className="font-medium">{payload[0].payload.stage}</p>
                        <p className="text-sm text-muted-foreground">
                          {payload[0].payload.duration}
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Bar
                dataKey="value"
                fill="#002B5C"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TimelineSection;