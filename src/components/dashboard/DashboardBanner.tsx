import { useAuth } from "@/contexts/AuthContext";

const DashboardBanner = () => {
  const { user } = useAuth();

  return (
    <header className="w-full bg-card/50 backdrop-blur-sm border-b border-border/10 p-6 lg:p-8 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div>
            <h1 className="text-xl lg:text-2xl font-semibold text-white">
              Welcome back, {user?.email?.split('@')[0] || 'User'}! 👋
            </h1>
            <p className="text-sm lg:text-base text-muted-foreground mt-2">
              Manage your visa application process and track your progress
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardBanner;