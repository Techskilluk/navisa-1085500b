import { Progress } from "@/components/ui/progress";

interface UploadProgressProps {
  totalFiles: number;
  uploadedFiles: number;
}

const UploadProgress = ({ totalFiles, uploadedFiles }: UploadProgressProps) => {
  const progress = totalFiles > 0 ? (uploadedFiles / totalFiles) * 100 : 0;

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>Upload Progress</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default UploadProgress;