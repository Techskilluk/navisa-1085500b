import { useNavigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Upload } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Document Upload</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center min-h-[200px] text-center p-4">
            <Upload className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Upload your required documents for visa application
            </p>
            <Button onClick={() => navigate("/documents/upload")}>
              Start Upload
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Document Status</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center min-h-[200px] text-center p-4">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Check the status of your uploaded documents
            </p>
            <Button onClick={() => navigate("/documents/validation")}>
              View Status
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;