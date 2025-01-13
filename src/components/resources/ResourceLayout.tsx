import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ResourceArticleGrid from "./ResourceArticleGrid";
import ResourceTemplateGrid from "./ResourceTemplateGrid";
import PageHeader from "@/components/PageHeader";

const ResourceLayout = () => {
  return (
    <div className="min-h-screen bg-background pb-12">
      <PageHeader
        title="Immigration Resources"
        subtitle="Access guides, articles, and document templates for your immigration journey"
        showCta={false}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <Tabs defaultValue="articles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
            <TabsTrigger value="articles">Articles & Guides</TabsTrigger>
            <TabsTrigger value="templates">Document Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-6">
            <ResourceArticleGrid />
          </TabsContent>

          <TabsContent value="templates" className="space-y-6">
            <ResourceTemplateGrid />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default ResourceLayout;