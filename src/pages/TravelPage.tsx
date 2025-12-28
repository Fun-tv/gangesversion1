import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Plane, Map, Camera, Compass, Hotel, Mountain, Heart, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function TravelPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const platforms = [
    {
      name: "MakeMyTrip",
      desc: "India's leading travel portal for flights, hotels, and holiday packages serving millions of travelers",
      url: "https://www.makemytrip.com/",
      icon: Plane,
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Yatra",
      desc: "Complete travel solutions for domestic and international travel with comprehensive packages",
      url: "https://www.yatra.com/",
      icon: Map,
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Thomas Cook India",
      desc: "Trusted name in travel with comprehensive tour packages and specialized 'Darshans' spiritual tours",
      url: "https://www.thomascook.in/",
      icon: Compass,
      color: "from-green-500 to-green-600"
    },
    {
      name: "SOTC Travel",
      desc: "Premium holiday packages and customized travel experiences with multi-generational family tours",
      url: "https://www.sotc.in/",
      icon: Camera,
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "Travel Triangle",
      desc: "Customized holiday packages with verified travel agents for personalized trip planning",
      url: "https://traveltriangle.com/",
      icon: Mountain,
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "India Someday",
      desc: "Personalized India tours with expert local knowledge and boutique travel experiences",
      url: "https://www.indiasomeday.com/",
      icon: Hotel,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#1a1a2e] text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 bg-[#ff9933] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Plane className="h-10 w-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Travel & Tourism
            </h1>
            <p className="text-3xl text-white/95 leading-relaxed mb-4">
              Experience the Soul of India
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              India welcomes millions of international visitors seeking spiritual awakening, cultural immersion, and adventure. Partner with India's leading travel companies to create unforgettable journeys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Discover India */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Discover Incredible India
            </h2>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              India offers unparalleled diversity in travel experiences - from the snow-capped Himalayas to tropical beaches, ancient temples to bustling metropolises. Our partner platforms help you explore:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "🏛️",
                title: "Heritage Tours",
                desc: "Historical monuments and UNESCO sites through the Golden Triangle and beyond"
              },
              {
                emoji: "🕉️",
                title: "Spiritual Journeys",
                desc: "Sacred temples and pilgrimage sites in Varanasi, Rishikesh, and Kerala"
              },
              {
                emoji: "🏔️",
                title: "Adventure Tourism",
                desc: "Trekking in mountains, desert safaris, and wildlife sanctuaries"
              },
              {
                emoji: "🎭",
                title: "Cultural Experiences",
                desc: "Festivals, cuisine, and traditional arts across diverse regions"
              },
              {
                emoji: "🧘",
                title: "Wellness Retreats",
                desc: "Ayurvedic treatments, yoga centers, and meditation programs"
              },
              {
                emoji: "🏖️",
                title: "Beach Destinations",
                desc: "Tropical coastlines, backwaters, and island paradises"
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-[#1e3a8a]/10 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="text-6xl mb-4">{experience.emoji}</div>
                <h3 className="mb-3 text-[#1e3a8a]">{experience.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{experience.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Partners */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Premium Travel Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted platforms for your Indian adventure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card 
                    className="h-full hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-[#1e3a8a]/20"
                    onClick={() => window.open(platform.url, "_blank")}
                  >
                    <CardHeader>
                      <div className={`w-14 h-14 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-[#1e3a8a]">{platform.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {platform.desc}
                      </CardDescription>
                      <Button variant="outline" className="w-full group">
                        Explore Tours
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Travel Experiences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Travel Experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Curated journeys for every traveler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Sparkles,
                title: "Spiritual Journeys",
                desc: "Yoga retreats, meditation courses, and pilgrimage circuits to sacred sites",
                highlights: ["Rishikesh Yoga Capital", "Varanasi Ganges Aarti", "Kerala Ayurveda Centers"]
              },
              {
                icon: Heart,
                title: "Cultural Heritage",
                desc: "Palace stays, artisan workshops, cooking classes, and traditional performances",
                highlights: ["Rajasthan Palaces", "Artisan Villages", "Classical Dance Shows"]
              },
              {
                icon: Mountain,
                title: "Adventure Tourism",
                desc: "Himalayan treks, wildlife safaris, coastal adventures, and extreme sports",
                highlights: ["Ladakh Expeditions", "Jim Corbett Safari", "Goa Water Sports"]
              },
              {
                icon: Hotel,
                title: "Wellness Tourism",
                desc: "Ayurvedic treatments, spa retreats, detox programs, and holistic healing",
                highlights: ["Panchakarma Therapy", "Wellness Resorts", "Meditation Retreats"]
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-[#1e3a8a]/10 shadow-lg"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-xl flex items-center justify-center flex-shrink-0">
                    <experience.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-3 text-[#1e3a8a]">{experience.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{experience.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {experience.highlights.map((highlight, idx) => (
                    <span key={idx} className="bg-white px-3 py-1.5 rounded-lg text-sm text-foreground border border-[#1e3a8a]/20">
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <Card className="bg-gradient-to-br from-blue-50 to-amber-50 border-2 border-dashed border-[#1e3a8a]/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Compass className="h-8 w-8 text-white" />
                </div>
                <div className="inline-block bg-[#ff9933] text-white px-4 py-2 rounded-full mb-4">
                  Coming Soon
                </div>
                <CardTitle className="text-3xl text-[#1e3a8a] mb-4">
                  Ganges Travel Concierge
                </CardTitle>
                <CardDescription className="text-lg max-w-2xl mx-auto mb-6">
                  Personalized trip planning with verified local guides and authentic experiences
                </CardDescription>
                <div className="grid md:grid-cols-2 gap-4 text-left mt-6">
                  {[
                    "Custom itinerary planning",
                    "Verified local guides",
                    "Authentic cultural experiences",
                    "24/7 travel support"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#138808] rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl mb-6">
              Begin Your Indian Journey
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              From spiritual awakening to adventure tourism, discover the incredible diversity of India
            </p>
            <Button 
              size="lg"
              className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = "mailto:gangescompany@gmail.com?subject=Travel Inquiry"}
            >
              Plan My Trip
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
