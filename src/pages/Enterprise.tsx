import { Button } from "@/components/ui/button";
import { Mail, ArrowRight, Clock, ChartBar, Users } from "lucide-react";
import { motion } from "framer-motion";

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-[#002B5C] to-[#004B9C] overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 text-center space-y-8 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Empowering Immigration Consultants and Businesses to Serve Clients Seamlessly
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Streamline client management, track applications, and grow your business with NAVISA's all-in-one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#00A9A5] hover:bg-[#00A9A5]/90 text-white px-8">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Why NAVISA Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
                  Why NAVISA?
                </h2>
                <p className="text-xl text-gray-600">
                  Streamline Your Operations, Elevate Your Service
                </p>
              </div>
              <ul className="space-y-6">
                {[
                  { icon: Clock, text: "Save time with automated onboarding and document management" },
                  { icon: ChartBar, text: "Track client applications with real-time updates" },
                  { icon: Users, text: "Access a resource hub for evidence and templates" },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#00A9A5]/10">
                      <item.icon className="w-6 h-6 text-[#00A9A5]" />
                    </div>
                    <p className="text-lg text-gray-700">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#002B5C] to-[#00A9A5] p-1">
                <div className="w-full h-full rounded-2xl bg-white p-8">
                  <img 
                    src="/navisa-logo.svg" 
                    alt="NAVISA Platform" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] mb-4">
              What NAVISA Offers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to manage your clients' global migration journeys in one place
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Customer Onboarding Made Easy",
                description: "Streamline the client intake process with our intuitive interface",
              },
              {
                title: "Application Tracking",
                description: "Monitor progress and keep clients informed at every step",
              },
              {
                title: "Resource Hub",
                description: "Access templates and documentation guidance",
              },
              {
                title: "Consultant Marketplace",
                description: "Connect with clients and grow your practice",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-[#002B5C] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Steps */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] text-center mb-16">
            Onboard Your Business in Three Simple Steps
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Create Your Business Profile",
              "Invite Your Clients",
              "Manage and Deliver",
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#00A9A5] text-white flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-[#002B5C]">{step}</h3>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-[#00A9A5]" />
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button size="lg" className="bg-[#00A9A5] hover:bg-[#00A9A5]/90 text-white px-8">
              Sign Up for NAVISA Enterprise
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002B5C] text-center mb-16">
            Benefits for Your Business
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Efficiency",
                description: "Automate onboarding and document management to save time",
              },
              {
                title: "Transparency",
                description: "Keep clients informed with real-time updates and clear timelines",
              },
              {
                title: "Scalability",
                description: "Effortlessly manage multiple clients and grow your business",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-[#002B5C]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl text-gray-600 mb-8">
            Join hundreds of consultants already thriving with NAVISA
          </p>
          <div className="text-center">
            <Button size="lg" className="bg-[#00A9A5] hover:bg-[#00A9A5]/90 text-white px-8">
              Get Started Now
            </Button>
          </div>
        </div>
      </section>

      {/* Join NAVISA Network */}
      <section className="py-20 bg-gradient-to-r from-[#002B5C] to-[#004B9C] text-white">
        <div className="container px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the NAVISA Network Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Grow your business, enhance your client relationships, and simplify your workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#00A9A5] hover:bg-[#00A9A5]/90 text-white px-8">
              Sign Up for NAVISA Enterprise
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enterprise;