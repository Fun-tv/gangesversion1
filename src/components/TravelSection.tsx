import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Plane, Map, Camera, Compass, Hotel, Mountain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TravelSection() {
  const platforms = [
    {
      name: "MakeMyTrip",
      description: "India's leading travel portal for flights, hotels, and holiday packages",
      url: "https://www.makemytrip.com/",
      icon: Plane,
    },
    {
      name: "Yatra",
      description: "Complete travel solutions for domestic and international travel",
      url: "https://www.yatra.com/",
      icon: Map,
    },
    {
      name: "Thomas Cook India",
      description: "Trusted name in travel with comprehensive tour packages",
      url: "https://www.thomascook.in/",
      icon: Compass,
    },
    {
      name: "SOTC Travel",
      description: "Premium holiday packages and customized travel experiences",
      url: "https://www.sotc.in/",
      icon: Camera,
    },
    {
      name: "Travel Triangle",
      description: "Customized holiday packages with verified travel agents",
      url: "https://traveltriangle.com/",
      icon: Mountain,
    },
    {
      name: "India Someday",
      description: "Personalized India tours with expert local knowledge",
      url: "https://www.indiasomeday.com/",
      icon: Hotel,
    },
  ];

  return (
    <section id="travel" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-primary">Travel & Tourism</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the incredible diversity of India - from ancient heritage sites to modern cities, spiritual journeys to adventure tourism
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1748951447152-5a9992576e6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMHRhaiUyMG1haGFsJTIwdHJhdmVsfGVufDF8fHx8MTc2MDEzOTU4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="India travel destinations"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl mb-4">Discover Incredible India</h3>
            <p className="text-muted-foreground mb-6">
              India offers unparalleled diversity in travel experiences - from the snow-capped Himalayas to tropical beaches, ancient temples to bustling metropolises. Our partner platforms help you explore:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Heritage tours through historical monuments and UNESCO sites</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Spiritual journeys to sacred temples and pilgrimage sites</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Adventure tourism in mountains, deserts, and wildlife sanctuaries</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Cultural experiences including festivals, cuisine, and traditions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 mt-1">✓</span>
                <span>Ayurvedic wellness retreats and yoga centers</span>
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
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => window.open(platform.url, "_blank")}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-2">
                    <Icon className="h-6 w-6 text-amber-600" />
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
