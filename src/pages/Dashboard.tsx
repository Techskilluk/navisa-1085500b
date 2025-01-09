import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FileText } from "lucide-react";

const data = [
  { name: 'EB-1/EB-2', value: 75 },
  { name: 'Express Entry', value: 85 },
  { name: 'Global Talent', value: 65 },
];

const Dashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg lg:text-xl">Success Probability</CardTitle>
            <CardDescription>
              Based on your profile assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border/50" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fill: '#FFFFFF', fontSize: 12 }}
                    tickLine={{ stroke: '#FFFFFF' }}
                    angle={-45}
                    textAnchor="end"
                    height={60}
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
                  <Bar 
                    dataKey="value" 
                    fill="#FFFFFF"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-lg lg:text-xl">Active Applications</CardTitle>
            <CardDescription>
              Track your ongoing applications
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center p-4">
            <FileText className="h-12 w-12 lg:h-16 lg:w-16 text-muted mb-4" />
            <p className="text-sm lg:text-base text-muted">
              You currently do not have any active/pending applications
            </p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;