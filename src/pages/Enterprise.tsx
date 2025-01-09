import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Clock, LineChart, Users } from "lucide-react";

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Why NAVISA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why NAVISA?</h2>
            <p className="text-xl text-muted">Streamline Your Operations, Elevate Your Service</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-6 w-6" />
                  Automated Onboarding
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Save time with automated onboarding and document management</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <LineChart className="h-6 w-6" />
                  Real-time Tracking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Track client applications with real-time updates</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Resource Hub
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Access a comprehensive resource hub for evidence and templates</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6" />
                  Marketplace
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Expand your reach through the consultant marketplace</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What NAVISA Offers</h2>
            <p className="text-xl text-muted">Everything you need to manage your clients' global migration journeys in one place</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Customer Onboarding Made Easy</h3>
              <p className="text-muted">Streamline your client onboarding process with our intuitive interface</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Application Tracking</h3>
              <p className="text-muted">Monitor application progress and keep clients informed at every step</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Resource Hub</h3>
              <p className="text-muted">Access comprehensive documentation and templates</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Consultant Marketplace</h3>
              <p className="text-muted">Connect with clients and grow your business</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button className="bg-white text-black hover:bg-white/90">
              Explore the Platform
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefits for Your Business</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Automate onboarding and document management to save time</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Keep clients informed with real-time updates and clear timelines</p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted">Effortlessly manage multiple clients and grow your business</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <p className="text-xl text-muted mb-6">Join hundreds of consultants already thriving with NAVISA</p>
            <Button className="bg-white text-black hover:bg-white/90">
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join the NAVISA Network Today</h2>
          <p className="text-xl text-muted mb-8">Grow your business, enhance your client relationships, and simplify your workflow</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-black hover:bg-white/90">
              Sign Up for NAVISA Enterprise
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;