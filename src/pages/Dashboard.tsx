import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import ApplicationStatus from "@/components/dashboard/ApplicationStatus";
import TimelineSection from "@/components/dashboard/TimelineSection";
import ResourcesSection from "@/components/dashboard/ResourcesSection";
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
  const location = useLocation();
  const submission = location.state?.documentSubmission;

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Success Probability Card */}
          <Card className="bg-card lg:col-span-2">
            <CardHeader>
              <CardTitle>Success Probability</CardTitle>
              <CardDescription>
                Based on your profile assessment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
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
                    <Bar 
                      dataKey="value" 
                      fill={submission?.visaType ? "#002B5C" : "#FFFFFF"}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Application Status Card */}
          <div className="lg:col-span-1">
            <ApplicationStatus />
          </div>
        </div>

        {/* Timeline, Active Applications, and Resources */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <TimelineSection />
          </div>
          
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Active Applications</CardTitle>
              <CardDescription>
                Track your ongoing applications
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center">
              {submission ? (
                <div className="text-left w-full space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-[#28A745] rounded-full" />
                    <div>
                      <p className="font-medium">{submission.visaType}</p>
                      <p className="text-sm text-muted-foreground">
                        Submitted on {submission.timestamp}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <FileText className="h-16 w-16 text-muted mb-4" />
                  <p className="text-muted">
                    You currently do not have any active/pending applications
                  </p>
                </>
              )}
            </CardContent>
          </Card>

          <div className="lg:col-span-1">
            <ResourcesSection />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;