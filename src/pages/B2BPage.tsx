import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { TrendingUp, Building2, Package, Pill, Shirt, Cog, Wheat, Star, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function B2BPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

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
              <Building2 className="h-10 w-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              B2B Marketplace
            </h1>
            <p className="text-3xl text-white/95 leading-relaxed mb-4">
              Connect with India's $200 Billion B2B Opportunity
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              India's B2B marketplace is projected to reach $200 billion by 2030, growing at over 20% CAGR. Ganges B2B connects international buyers with verified Indian suppliers across manufacturing, textiles, pharmaceuticals, and technology services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Current Partnerships
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting you with India's leading B2B platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "IndiaMART",
                desc: "India's largest B2B marketplace with over 60 million users connecting buyers with suppliers",
                url: "https://www.indiamart.com/",
                icon: Building2,
                comingSoon: false
              },
              {
                name: "TradeIndia",
                desc: "Connecting global buyers with Indian exporters since 1996 across all industries",
                url: "https://www.tradeindia.com/",
                icon: TrendingUp,
                comingSoon: false
              },
              {
                name: "Ganges B2B Direct",
                desc: "Our proprietary B2B platform launching Q2 2026 with AI-powered supplier matching",
                comingSoon: true,
                icon: Star
              }
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card 
                  className={`h-full ${platform.comingSoon ? 'border-dashed border-2' : 'hover:shadow-2xl cursor-pointer'} transition-all`}
                  onClick={() => !platform.comingSoon && platform.url && window.open(platform.url, "_blank")}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-xl flex items-center justify-center">
                        <platform.icon className="h-7 w-7 text-white" />
                      </div>
                      {platform.comingSoon && (
                        <Badge className="bg-[#ff9933] text-white">Coming Soon</Badge>
                      )}
                    </div>
                    <CardTitle className="text-[#1e3a8a]">{platform.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{platform.desc}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Industries */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Key Industries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Diverse sectors driving India's B2B export growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Pill,
                title: "Pharmaceuticals",
                desc: "India supplies 40% of global generic medicines with world-class manufacturing",
                highlight: "40% Global Supply",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Shirt,
                title: "Textiles & Apparel",
                desc: "Premium cotton, technical textiles, and fashion accessories with competitive pricing",
                highlight: "$44B+ Exports",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Cog,
                title: "Engineering Goods",
                desc: "Automotive components, industrial equipment, and electrical devices",
                highlight: "Top 5 Globally",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Wheat,
                title: "Agricultural Products",
                desc: "Basmati rice, spices, tea, pulses, and organic produce of premium quality",
                highlight: "$50B+ Market",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: Star,
                title: "Handicrafts",
                desc: "$4.35 billion market with 25.7% annual growth in traditional crafts",
                highlight: "25.7% Growth",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: Package,
                title: "Electronics & Tech",
                desc: "IT hardware, electronics manufacturing, and technology components",
                highlight: "Fast Growing",
                color: "from-orange-500 to-orange-600"
              }
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <industry.icon className="h-8 w-8 text-white" />
                </div>
                <Badge className="mb-4 bg-blue-100 text-[#1e3a8a] hover:bg-blue-100">{industry.highlight}</Badge>
                <h3 className="mb-3 text-[#1e3a8a]">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{industry.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why India */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-[#1e3a8a]">
                Why Choose Indian B2B Partners?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Competitive pricing from manufacturers directly",
                  "Wide range of products across industries",
                  "Quality assurance and export certifications",
                  "Flexible MOQs and customization options",
                  "Reliable logistics and shipping solutions",
                  "English-speaking business environment",
                  "Strong IP protection and legal framework"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#138808] rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <p className="text-lg text-foreground leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717386255893-59c0846cdef0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiMmIlMjBtYW51ZmFjdHVyaW5nJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjAxNDYwNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="B2B Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon Feature */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <Card className="bg-gradient-to-br from-blue-50 to-amber-50 border-2 border-dashed border-[#1e3a8a]/30 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <Badge className="mx-auto mb-4 bg-[#ff9933] text-white px-4 py-2 text-base">Launching Q2 2026</Badge>
                <CardTitle className="text-3xl text-[#1e3a8a] mb-4">Ganges B2B Direct</CardTitle>
                <CardDescription className="text-lg max-w-3xl mx-auto">
                  Our proprietary B2B platform launching Q2 2026, featuring:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    "AI-powered supplier matching",
                    "Integrated quality assurance",
                    "Streamlined logistics solutions",
                    "Trade finance options",
                    "Real-time order tracking",
                    "Dedicated account managers",
                    "Custom pricing negotiations",
                    "Secure payment gateway"
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#1e3a8a] rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "$200B", label: "Market Size by 2030", desc: "Projected B2B marketplace value" },
              { stat: "20%+", label: "Annual Growth", desc: "CAGR of India's B2B sector" },
              { stat: "$820B+", label: "Current Exports", desc: "India's total export value" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white p-10 rounded-2xl shadow-2xl text-center"
              >
                <div className="text-5xl mb-4 text-[#ff9933]">{item.stat}</div>
                <h4 className="text-2xl mb-3">{item.label}</h4>
                <p className="text-white/80 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl mb-6">
              Ready to Connect with Indian Suppliers?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Start exploring B2B opportunities with verified Indian manufacturers and exporters
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg"
                onClick={() => window.location.href = "mailto:gangescompany@gmail.com?subject=B2B Inquiry"}
              >
                Contact for B2B
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
                onClick={() => window.open("https://wa.me/918209893843", "_blank")}
              >
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
