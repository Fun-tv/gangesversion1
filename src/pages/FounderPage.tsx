import { Button } from "../components/ui/button";
import { Linkedin, Award, Rocket, Heart, Globe2, TrendingUp, Users, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import founderImage from "figma:asset/jay blue suited photo 1.png";

export default function FounderPage() {
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Founder Market Fit
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Meet Jay Agarwal - Bridging Cultures Through Commerce
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Founder Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-24">
                <div className="relative">
                  <div className="absolute -inset-6 bg-gradient-to-r from-[#1e3a8a] to-[#ff9933] rounded-3xl opacity-20 blur-2xl"></div>
                  <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={founderImage}
                      alt="Jay Agarwal - Founder of Ganges"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-amber-50 p-6 rounded-2xl border border-[#1e3a8a]/10">
                    <h3 className="text-2xl mb-2 text-[#1e3a8a]">Jay Agarwal</h3>
                    <p className="text-xl text-muted-foreground mb-4">Founder & CEO</p>
                    <Button
                      className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 gap-2"
                      onClick={() => window.open("https://www.linkedin.com/in/jayagarwalg", "_blank")}
                    >
                      <Linkedin className="h-5 w-5" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3 space-y-8"
            >
              <div>
                <h2 className="text-3xl mb-6 text-[#1e3a8a]">The Vision</h2>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  Jay Agarwal's vision for Ganges stems from his deep understanding of both India's vast potential and global market demands. As a native of India with extensive international exposure, Jay recognized the gap between what the world desires from India and how these authentic offerings reach global consumers.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-[#1e3a8a]/10">
                <h2 className="text-3xl mb-6 text-[#1e3a8a]">Jay's Journey</h2>
                <div className="space-y-4 text-lg text-foreground leading-relaxed">
                  <p>
                    Born and raised in India, Jay witnessed firsthand the incredible craftsmanship of local artisans, the innovation of Indian tech companies, and the transformative power of India's spiritual traditions. His early career in business development and international trade revealed a critical insight: while global demand for Indian products and services was growing exponentially, there was no single, trusted platform connecting authentic Indian offerings to international markets.
                  </p>
                  <p>
                    This realization became the seed for Ganges - a comprehensive ecosystem designed to bridge the gap between India's rich offerings and the world's appetite for authenticity, quality, and cultural connection. Jay understood that success would require more than just logistics; it would demand a deep respect for Indian heritage, unwavering commitment to quality, and innovative use of technology.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl mb-6 text-[#1e3a8a]">Market Understanding</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Jay's unique position bridges two worlds:
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Heart,
                      title: "Deep Indian Roots",
                      desc: "Understanding of local suppliers, artisan communities, and cultural nuances",
                      color: "from-pink-500 to-pink-600"
                    },
                    {
                      icon: Globe2,
                      title: "Global Market Insight",
                      desc: "Recognition of international quality standards and consumer preferences",
                      color: "from-blue-500 to-blue-600"
                    },
                    {
                      icon: Lightbulb,
                      title: "Digital Innovation",
                      desc: "Vision for leveraging technology to scale traditional Indian businesses globally",
                      color: "from-amber-500 to-amber-600"
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ y: -5 }}
                      className="bg-white p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mb-4`}>
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                      <h4 className="mb-2 text-[#1e3a8a]">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Why Jay, Why Now
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The perfect convergence of expertise, timing, and opportunity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            {[
              {
                stat: "$820B+",
                label: "India's Export Value",
                desc: "India's exports reaching record highs"
              },
              {
                stat: "$800B",
                label: "Digital Economy by 2030",
                desc: "Projected growth of India's digital sector"
              },
              {
                stat: "$200B",
                label: "B2B Market by 2030",
                desc: "India's B2B marketplace opportunity"
              },
              {
                stat: "$4.35B",
                label: "Handicrafts Export",
                desc: "Growing at 25.7% annually"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white p-8 rounded-2xl shadow-xl"
              >
                <div className="text-4xl mb-2 text-[#ff9933]">{item.stat}</div>
                <h4 className="text-xl mb-2">{item.label}</h4>
                <p className="text-white/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="bg-white p-10 rounded-2xl border border-border shadow-xl max-w-4xl mx-auto">
            <p className="text-xl text-foreground leading-relaxed text-center">
              With India's exports reaching record highs of $820+ billion and the digital economy projected to hit $800 billion by 2030, Jay's timing is perfect. His combination of cultural authenticity, business acumen, and technological vision positions Ganges to capture this massive opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Founding Principles
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Jay established Ganges on three core principles:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Authentic Representation",
                desc: "Every offering must genuinely represent Indian quality and tradition",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: TrendingUp,
                title: "Global Standards",
                desc: "All products and services must meet international quality expectations",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Users,
                title: "Community Impact",
                desc: "Success should benefit Indian artisans, businesses, and local communities",
                color: "from-green-500 to-green-600"
              }
            ].map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-[#1e3a8a]/10 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <principle.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-[#1e3a8a]">{principle.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{principle.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Qualities */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Leadership That Drives Success
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Rocket,
                title: "Visionary",
                desc: "Building India's global bridge for the future"
              },
              {
                icon: Award,
                title: "Expert",
                desc: "E-commerce, logistics, and market mastery"
              },
              {
                icon: Heart,
                title: "Passionate",
                desc: "Champion of Indian heritage and innovation"
              }
            ].map((quality, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-full flex items-center justify-center mx-auto mb-4">
                  <quality.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="mb-2 text-xl text-[#1e3a8a]">{quality.title}</h4>
                <p className="text-muted-foreground">{quality.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
