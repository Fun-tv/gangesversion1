import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Code, Database, Cloud, Mail, Users, BarChart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ServicesSection() {
  const services = [
    {
      name: "Zoho",
      description: "Complete suite of business, productivity, and collaboration applications",
      url: "https://www.zoho.com/",
      icon: Cloud,
      category: "Business Suite",
    },
    {
      name: "Freshworks",
      description: "Customer engagement software for sales, marketing, and support",
      url: "https://www.freshworks.com/",
      icon: Users,
      category: "Customer Engagement",
    },
    {
      name: "Tally Solutions",
      description: "Business management software for accounting and inventory",
      url: "https://tallysolutions.com/",
      icon: BarChart,
      category: "Accounting",
    },
    {
      name: "Wingify",
      description: "A/B testing and conversion optimization platform (VWO)",
      url: "https://wingify.com/",
      icon: Code,
      category: "Analytics",
    },
    {
      name: "Postman",
      description: "API platform for building and using APIs",
      url: "https://www.postman.com/",
      icon: Database,
      category: "Development",
    },
    {
      name: "CleverTap",
      description: "Customer engagement and retention platform",
      url: "https://clevertap.com/",
      icon: Mail,
      category: "Marketing",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-primary">Digital Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access world-class digital services and SaaS products from innovative Indian companies trusted by millions globally
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl mb-4">Power Your Business with Indian Innovation</h3>
            <p className="text-muted-foreground mb-6">
              India has emerged as a global leader in software services, creating world-class products that compete on the international stage. From business management to customer engagement, these platforms offer:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Cost-effective solutions with enterprise-grade features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Excellent customer support and service</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Scalable infrastructure for growing businesses</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Regular updates and innovative features</span>
              </li>
            </ul>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1726064855955-5fe51cd6993c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc2VydmljZXMlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MDA4MzI5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Digital services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => window.open(service.url, "_blank")}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <span className="text-xs text-muted-foreground">{service.category}</span>
                  </div>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
