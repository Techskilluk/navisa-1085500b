import { Card, CardContent } from "@/components/ui/card";

const ResourcesLoading = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((index) => (
        <Card key={index} className="animate-pulse">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-muted rounded" />
              <div className="space-y-2">
                <div className="h-4 w-24 bg-muted rounded" />
                <div className="h-3 w-32 bg-muted rounded" />
              </div>
            </div>
            <div className="mt-4 h-6 w-16 bg-muted rounded" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ResourcesLoading;