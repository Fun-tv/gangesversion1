import { Button } from "../components/ui/button";
import { TrendingUp, Globe2, Users, Building2, Zap, Award, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function InvestPage() {
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
              <TrendingUp className="h-10 w-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Invest in India
            </h1>
            <p className="text-3xl text-white/95 leading-relaxed mb-4">
              The World's Fastest Growing Major Economy
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Discover unparalleled investment opportunities in the world's most dynamic market. India offers exceptional growth potential across sectors, backed by favorable policies and a massive consumer base.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why India */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Why Invest in India?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compelling reasons to choose India for your investment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Fastest Growing Economy",
                desc: "India is the world's fastest-growing major economy with consistent 7%+ GDP growth",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Users,
                title: "1.4 Billion Consumer Market",
                desc: "Access to the world's largest consumer market with rising middle class",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Building2,
                title: "Infrastructure Revolution",
                desc: "$1.4 trillion infrastructure investment plan creating massive opportunities",
                color: "from-green-500 to-green-600"
              },
              {
                icon: Zap,
                title: "Digital Transformation",
                desc: "$800 billion digital economy projected by 2030",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: Globe2,
                title: "Global Manufacturing Hub",
                desc: "Production Linked Incentive schemes and Make in India initiative",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: Award,
                title: "Ease of Doing Business",
                desc: "Improved ranking and business-friendly reforms attracting global investors",
                color: "from-orange-500 to-orange-600"
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-[#1e3a8a]/10 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-[#1e3a8a]">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Sectors */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Key Investment Sectors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-growth sectors offering exceptional returns
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1714391866650-c46a85a7f3b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGludmVzdG1lbnQlMjBidXNpbmVzcyUyMGdyb3d0aHxlbnwxfHx8fDE3NjAxNDYwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="India Investment Growth"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid gap-6">
                {[
                  {
                    sector: "Technology & IT",
                    value: "$387.5B",
                    desc: "Service exports, SaaS unicorns, and digital innovation"
                  },
                  {
                    sector: "Manufacturing",
                    value: "$1T Goal",
                    desc: "Target by 2025 with PLI schemes across 14 sectors"
                  },
                  {
                    sector: "Infrastructure",
                    value: "$1.4T",
                    desc: "National Infrastructure Pipeline investment"
                  },
                  {
                    sector: "Renewable Energy",
                    value: "500 GW",
                    desc: "Target by 2030, massive green energy push"
                  },
                  {
                    sector: "Pharmaceuticals",
                    value: "40% Global",
                    desc: "Generic medicine supply, growing at 12% annually"
                  },
                  {
                    sector: "Fintech",
                    value: "$150B",
                    desc: "Market size by 2025 with digital payments boom"
                  }
                ].map((sector, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-[#1e3a8a]">{sector.sector}</h4>
                      <span className="text-[#ff9933] px-3 py-1 bg-amber-100 rounded-full text-sm">
                        {sector.value}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{sector.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              India by the Numbers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Impressive statistics driving investor confidence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "3rd Largest", label: "Economy by 2027", desc: "Projected to overtake Germany and Japan" },
              { stat: "$820B+", label: "Export Value", desc: "Record exports driving growth" },
              { stat: "100+", label: "Unicorns", desc: "Third-largest startup ecosystem" },
              { stat: "7%+", label: "GDP Growth", desc: "Fastest among major economies" },
              { stat: "$75B+", label: "FDI Inflows", desc: "Annual foreign direct investment" },
              { stat: "650M+", label: "Internet Users", desc: "Massive digital adoption" },
              { stat: "$5T Goal", label: "Economy by 2027", desc: "Ambitious growth target" },
              { stat: "#1", label: "IT Outsourcing", desc: "Global leader in tech services" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white p-8 rounded-2xl shadow-2xl text-center"
              >
                <div className="text-4xl mb-2 text-[#ff9933]">{stat.stat}</div>
                <h4 className="text-xl mb-2">{stat.label}</h4>
                <p className="text-white/70 text-sm">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Initiatives */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Government Initiatives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Business-friendly policies attracting global capital
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Make in India - Manufacturing incentives",
              "Production Linked Incentive (PLI) schemes",
              "Digital India - Technology infrastructure",
              "Startup India - Entrepreneurship support",
              "Atmanirbhar Bharat - Self-reliance focus",
              "National Infrastructure Pipeline",
              "100% FDI in many sectors",
              "Simplified tax structure (GST)",
              "Ease of Doing Business reforms"
            ].map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="bg-white p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-[#138808] rounded-full flex items-center justify-center mt-1">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <p className="text-foreground">{initiative}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeInUp}>
            <Sparkles className="h-12 w-12 text-[#ff9933] mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl mb-6">
              Partner with India's Growth Story
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Explore investment opportunities in the world's most dynamic market. Connect with Ganges to discover how India can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg gap-2"
                onClick={() => window.location.href = "mailto:gangescompany@gmail.com?subject=Investment Inquiry"}
              >
                Explore Opportunities
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
                onClick={() => window.open("https://wa.me/918209893843", "_blank")}
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
