import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { BookOpen, Heart, Star, Music, Sparkles, GraduationCap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function LearningSection() {
  const platforms = [
    {
      name: "Ayurdhama",
      description: "Authentic Ayurveda education and practitioner training programs",
      url: "https://ayurdhama.com/",
      icon: Heart,
      category: "Ayurveda",
    },
    {
      name: "European Academy of Ayurveda",
      description: "International Ayurveda certifications and courses",
      url: "https://www.ayurveda-academy.com/",
      icon: BookOpen,
      category: "Ayurveda",
    },
    {
      name: "Ayurvidya",
      description: "Traditional Ayurvedic wisdom and modern wellness practices",
      url: "https://www.ayurvidya.com/",
      icon: Sparkles,
      category: "Ayurveda",
    },
    {
      name: "Aarambh Yoga",
      description: "Comprehensive yoga teacher training and certification",
      url: "https://aarambhyoga.com/",
      icon: Star,
      category: "Yoga",
    },
    {
      name: "Yoga Vidya Gurukul",
      description: "Traditional yoga education in the Gurukul system",
      url: "https://www.yvgonline.com/",
      icon: GraduationCap,
      category: "Yoga",
    },
    {
      name: "Ganges School",
      description: "Curated learning platform for Indian traditional arts and sciences",
      comingSoon: true,
      icon: Music,
      category: "Multi-Disciplinary",
    },
  ];

  return (
    <section id="learning" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-primary">Learning & Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Learn from authentic Indian traditions and ancient wisdom - Ayurveda, Yoga, Astrology, Classical Arts, and more
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl mb-4">Ancient Wisdom for Modern Life</h3>
            <p className="text-muted-foreground mb-6">
              India's traditional knowledge systems have enriched humanity for thousands of years. Now, you can learn directly from experienced practitioners and accredited institutions offering:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Ayurveda - The science of life and holistic healing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Yoga - Physical, mental, and spiritual practices</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Vedic Astrology - Ancient astronomical and predictive sciences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Classical Dance & Music - Bharatanatyam, Kathak, and more</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Meditation & Mindfulness - Traditional techniques for well-being</span>
              </li>
            </ul>
          </div>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1677478828548-5ad1496a6f14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGluZGlhfGVufDF8fHx8MTc2MDExNTE0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Yoga and meditation"
              className="w-full h-full object-cover"
            />
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
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs text-muted-foreground">{platform.category}</span>
                      {platform.comingSoon && (
                        <Badge variant="secondary">Coming Soon</Badge>
                      )}
                    </div>
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
