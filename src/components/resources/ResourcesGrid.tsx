import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface Template {
  id: string;
  visa_type: string;
  document_type: string;
  template_url: string;
}

interface ResourcesGridProps {
  templates: Template[];
}

const ResourcesGrid = ({ templates }: ResourcesGridProps) => {
  const handleDownload = async (url: string, filename: string) => {
    try {
      console.log("Downloading template:", url);
      const response = await fetch(url);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Error downloading template:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map((template) => (
        <Card key={template.id} className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {template.document_type}
            </CardTitle>
            <CardDescription>
              For {template.visa_type} visa applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => handleDownload(
                template.template_url,
                `${template.document_type.toLowerCase().replace(/\s+/g, '-')}.pdf`
              )}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Template
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResourcesGrid;