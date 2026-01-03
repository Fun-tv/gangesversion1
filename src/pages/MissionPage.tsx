import { Target, Globe2, Users, Sparkles, Heart, Shield, TrendingUp, Award } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function MissionPage() {
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
              <Target className="h-10 w-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Our Mission
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Empowering Global Access to India's Heritage and Innovation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-2xl text-foreground leading-relaxed">
              At Ganges, we believe India's remarkable diversity - from ancient traditions to modern innovations - should be accessible to everyone, everywhere. Our mission is to eliminate barriers between global consumers and India's incredible marketplace, creating meaningful connections that celebrate India's rich heritage while embracing its dynamic future.
            </p>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            className="bg-gradient-to-br from-blue-50 to-amber-50 p-12 rounded-3xl border border-[#1e3a8a]/10 shadow-xl"
          >
            <h2 className="text-3xl mb-6 text-[#1e3a8a] text-center">Our Vision</h2>
            <p className="text-xl text-foreground leading-relaxed text-center">
              To become the world's most trusted gateway to India, facilitating authentic cultural exchange and economic collaboration that benefits communities across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Authenticity",
                desc: "Every product and service represents genuine Indian craftsmanship and expertise",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: Award,
                title: "Quality",
                desc: "We partner only with verified suppliers who meet international standards",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: Heart,
                title: "Cultural Respect",
                desc: "We honor and preserve India's traditions while embracing innovation",
                color: "from-pink-500 to-pink-600"
              },
              {
                icon: Globe2,
                title: "Global Accessibility",
                desc: "Making India's offerings available to customers worldwide",
                color: "from-green-500 to-green-600"
              },
              {
                icon: TrendingUp,
                title: "Sustainable Growth",
                desc: "Supporting artisans, businesses, and communities across India",
                color: "from-amber-500 to-amber-600"
              },
              {
                icon: Users,
                title: "Community Impact",
                desc: "Creating positive change for both Indian suppliers and global customers",
                color: "from-orange-500 to-orange-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-[#1e3a8a]">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Goals Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Impact Goals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable commitments to creating positive change
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "1M+",
                title: "Global Customers",
                desc: "Connect 1 million global customers to authentic Indian products by 2028"
              },
              {
                number: "100K+",
                title: "Indian Partners",
                desc: "Support 100,000+ Indian artisans, businesses, and service providers"
              },
              {
                number: "$1B+",
                title: "Cross-Border Trade",
                desc: "Facilitate $1 billion in cross-border trade through our platform as soon as possible"
              },
              {
                number: "∞",
                title: "Cultural Preservation",
                desc: "Preserve and promote India's cultural heritage globally for generations to come"
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="text-5xl mb-4 text-[#ff9933]">{goal.number}</div>
                <h3 className="mb-3 text-2xl">{goal.title}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{goal.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-[#1e3a8a]">
                Building Bridges, Creating Opportunities
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Ganges is more than a marketplace - we're a movement to connect cultures, empower communities, and celebrate the incredible diversity of India. Every transaction on our platform creates ripple effects: supporting local artisans, preserving traditional crafts, and bringing authentic Indian experiences to the global stage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our commitment extends beyond commerce. We're dedicated to sustainable practices, fair trade, and creating economic opportunities that benefit both Indian suppliers and international customers. Together, we're building a more connected, culturally rich world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1679914599766-d2235a18f12d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYSUyMGFyY2hpdGVjdHVyZSUyMGhlcml0YWdlfGVufDF8fHx8MTc2MDE0NTc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Indian Architecture Heritage"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#ff9933] rounded-2xl opacity-20 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#1e3a8a] rounded-2xl opacity-20 blur-2xl"></div>
            </motion.div>
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
              Join Us in Our Mission
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're a customer discovering India's treasures or a supplier sharing your craft with the world, you're part of our mission to connect cultures and create opportunities.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
