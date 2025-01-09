import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card } from "@/components/ui/card";

interface MatchData {
  program: string;
  match: number;
}

interface MatchChartProps {
  data: MatchData[];
}

const MatchChart = ({ data }: MatchChartProps) => {
  return (
    <Card className="p-6 bg-card">
      <div className="space-y-6">
        <h2 className="text-2xl font-medium">Program Matches</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
              <XAxis 
                dataKey="program" 
                tick={{ fill: '#FFFFFF', fontSize: 14 }}
                tickLine={{ stroke: '#FFFFFF' }}
              />
              <YAxis 
                tick={{ fill: '#FFFFFF', fontSize: 14 }}
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
              <Bar 
                dataKey="match" 
                fill="#FFFFFF" 
                name="Match %" 
                radius={[4, 4, 0, 0]}
                className="hover:opacity-80 transition-opacity"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};

export default MatchChart;