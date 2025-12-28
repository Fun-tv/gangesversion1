import { Button } from "../components/ui/button";
import { ArrowRight, Package, Globe2, TrendingUp, GraduationCap, Plane, Briefcase, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function HomePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1e3a8a] via-[#1e3a8a] to-[#1a1a2e] text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <motion.div 
            className="text-center max-w-5xl mx-auto"
            initial="initial"
            animate="animate"
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-[#ff9933]" />
              <span className="text-sm">Connecting the World to India's Infinite Possibilities</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight"
            >
              Welcome to Ganges
              <br />
              <span className="text-[#ff9933]">Your Trusted Bridge to India</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl sm:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Discover the incredible wealth of India - from authentic handicrafts and premium textiles to cutting-edge digital services and transformative spiritual experiences. Whether you're seeking physical products, B2B partnerships, travel adventures, or learning opportunities, Ganges connects you directly to India's finest offerings.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button 
                size="lg" 
                className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg gap-2 shadow-xl hover:shadow-2xl transition-all"
                onClick={() => window.open("https://lite.ganges.world", "_blank")}
              >
                Get What You Love From India
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
                asChild
              >
                <Link to="/mission">Explore Our Mission</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 0L60 8.33C120 16.7 240 33.3 360 41.7C480 50 600 50 720 41.7C840 33.3 960 16.7 1080 16.7C1200 16.7 1320 33.3 1380 41.7L1440 50V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0V0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Connecting the World to India's Infinite Possibilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Ganges serves as the definitive bridge between global consumers and India's vast marketplace. We curate and showcase the best of India - from traditional handicrafts worth $4.35 billion in exports to modern digital services from companies like Zoho, making India's diverse offerings accessible to the world through one trusted platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: "Authentic Indian Products", desc: "Direct access to artisan-made handicrafts, textiles, and traditional goods" },
              { icon: Briefcase, title: "Digital Services Hub", desc: "Connect with India's leading tech companies and service providers" },
              { icon: Plane, title: "Cultural Experiences", desc: "Immersive travel and learning opportunities in yoga, Ayurveda, and traditional arts" },
              { icon: TrendingUp, title: "B2B Marketplace", desc: "Tap into India's $200 billion B2B marketplace opportunity by 2030" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-[#1e3a8a]/10 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-3 text-[#1e3a8a]">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Why Choose Ganges?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your gateway to authentic India, backed by quality and trust
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1755452540355-b0797e93ea03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBoYW5kaWNyYWZ0cyUyMGNvbG9yZnVsfGVufDF8fHx8MTc2MDE0NTc1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Indian Handicrafts"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {[
                "Authentic Indian Products: Direct access to artisan-made handicrafts, textiles, and traditional goods",
                "Digital Services Hub: Connect with India's leading tech companies and service providers",
                "Cultural Experiences: Immersive travel and learning opportunities in yoga, Ayurveda, and traditional arts",
                "B2B Marketplace: Tap into India's $200 billion B2B marketplace opportunity by 2030",
                "Trusted Quality: Every partner and product is verified for authenticity and excellence"
              ].map((text, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#138808] rounded-full flex items-center justify-center mt-1">
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-lg text-foreground leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketplaces Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Explore Our Marketplaces
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Six specialized platforms to connect you with every aspect of India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Ganges Lite", desc: "Shop from any Indian store, delivered globally", link: "/lite", icon: Package, color: "from-blue-500 to-blue-600" },
              { title: "B2B Marketplace", desc: "Connect with verified Indian manufacturers", link: "/b2b", icon: TrendingUp, color: "from-purple-500 to-purple-600" },
              { title: "Services", desc: "Access world-class Indian digital services", link: "/services", icon: Briefcase, color: "from-green-500 to-green-600" },
              { title: "Travel", desc: "Experience the soul of incredible India", link: "/travel", icon: Plane, color: "from-amber-500 to-amber-600" },
              { title: "Learning", desc: "Master ancient wisdom and modern skills", link: "/learning", icon: GraduationCap, color: "from-pink-500 to-pink-600" },
              { title: "Invest in India", desc: "Discover investment opportunities", link: "/invest", icon: Globe2, color: "from-orange-500 to-orange-600" }
            ].map((marketplace, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Link to={marketplace.link} className="block h-full">
                  <div className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all h-full flex flex-col">
                    <div className={`w-16 h-16 bg-gradient-to-br ${marketplace.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <marketplace.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="mb-3 text-[#1e3a8a]">{marketplace.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{marketplace.desc}</p>
                    <div className="flex items-center text-[#1e3a8a] group-hover:gap-2 transition-all">
                      <span>Explore</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" />
                    </div>
                  </div>
                </Link>
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl mb-6">
              Ready to Discover India?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Start your journey with Ganges today and experience the best of what India has to offer
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg"
                onClick={() => window.open("https://lite.ganges.world", "_blank")}
              >
                Shop Ganges Lite
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
