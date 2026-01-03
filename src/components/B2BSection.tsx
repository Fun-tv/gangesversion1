import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Building2, TrendingUp, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function B2BSection() {
  const platforms = [
    {
      name: "IndiaMART",
      description: "India's largest B2B marketplace connecting buyers with suppliers",
      url: "https://www.indiamart.com/",
      icon: Building2,
    },
    {
      name: "TradeIndia",
      description: "Leading B2B portal for Indian exporters, manufacturers, and suppliers",
      url: "https://www.tradeindia.com/",
      icon: TrendingUp,
    },
    {
      name: "Ganges B2B",
      description: "Our curated B2B marketplace for verified Indian exporters",
      comingSoon: true,
      icon: ShoppingCart,
    },
  ];

  return (
    <section id="b2b" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-primary">B2B Marketplace</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with verified Indian manufacturers, exporters, and suppliers for bulk purchases and business partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGIyYnxlbnwxfHx8fDE3NjAxMzk1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="B2B business partnership"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl mb-4">Why Choose Indian B2B Partners?</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Competitive pricing from manufacturers directly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Wide range of products across industries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Quality assurance and export certifications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Flexible MOQs and customization options</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Reliable logistics and shipping solutions</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <Card
                key={index}
                className={`${platform.comingSoon ? "border-dashed" : "hover:shadow-lg transition-shadow cursor-pointer"}`}
                onClick={() => !platform.comingSoon && platform.url && window.open(platform.url, "_blank")}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    {platform.comingSoon && (
                      <Badge variant="secondary">Coming Soon</Badge>
                    )}
                  </div>
                  <CardTitle>{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{platform.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
