import { Button } from "../components/ui/button";
import { Package, Truck, Globe, ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function LiteShopPage() {
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
              <ShoppingBag className="h-10 w-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Ganges Lite
            </h1>
            <p className="text-3xl text-white/95 leading-relaxed mb-4">
              Your Personal Shopping Assistant for Indian Markets
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Get What You Love From Indian Stores, Delivered Globally
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Description */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Shop India Like Never Before
            </h2>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              Ganges Lite revolutionizes how you access India's local marketplaces. Simply find any product from Indian e-commerce platforms, ship it to your dedicated Ganges virtual address, and we'll handle international delivery to your doorstep.
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
                  src="https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBzaGlwcGluZ3xlbnwxfHx8fDE3NjAwNDg3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Logistics and shipping"
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                Access India's booming $295.6 million e-commerce market that's growing at 21.5% annually. With Ganges Lite, distance is no longer a barrier to discovering authentic Indian products.
              </p>
              <Button 
                size="lg" 
                className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white gap-2"
                onClick={() => window.open("https://lite.ganges.world", "_blank")}
              >
                Visit Ganges Lite
                <ArrowRight className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              How Ganges Lite Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Four simple steps to get anything from India
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Browse",
                desc: "Shop from any Indian online marketplace (Amazon India, Flipkart, etc.)",
                icon: ShoppingBag,
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "2",
                title: "Ship",
                desc: "Use your unique Ganges virtual address in India for delivery",
                icon: Package,
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "3",
                title: "Consolidate",
                desc: "We receive, inspect, and consolidate your orders securely",
                icon: CheckCircle2,
                color: "from-green-500 to-green-600"
              },
              {
                step: "4",
                title: "Deliver",
                desc: "Professional international shipping to your location worldwide",
                icon: Globe,
                color: "from-amber-500 to-amber-600"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="relative mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}>
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#ff9933] rounded-full flex items-center justify-center text-white shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h3 className="mb-3 text-[#1e3a8a]">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Key Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Why thousands choose Ganges Lite
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Access to Products Unavailable in Your Country",
                desc: "Discover unique Indian products that aren't available through standard international shipping",
                emoji: "🌍"
              },
              {
                title: "Competitive Pricing from Indian Retailers",
                desc: "Enjoy local Indian pricing instead of inflated international rates",
                emoji: "💰"
              },
              {
                title: "Professional Packaging & Quality Inspection",
                desc: "We inspect every item to ensure it meets quality standards before shipping",
                emoji: "✅"
              },
              {
                title: "Consolidated Shipping to Reduce Costs",
                desc: "Combine multiple orders into one shipment to save on international delivery",
                emoji: "📦"
              },
              {
                title: "Full Tracking & Insurance Coverage",
                desc: "Track your package every step of the way with complete insurance protection",
                emoji: "🔒"
              },
              {
                title: "Dedicated Customer Support",
                desc: "Get help from our team whenever you need assistance",
                emoji: "💬"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-[#1e3a8a]/10 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{benefit.emoji}</div>
                <h4 className="mb-3 text-[#1e3a8a]">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              The Opportunity
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Perfect timing to access India's booming e-commerce market
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                stat: "$295.6M",
                label: "E-commerce Market Size",
                desc: "India's thriving online marketplace"
              },
              {
                stat: "21.5%",
                label: "Annual Growth Rate",
                desc: "Rapid expansion creating new opportunities"
              }
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
              Start Shopping Today
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of customers accessing India's marketplace through Ganges Lite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg gap-2"
                onClick={() => window.open("https://lite.ganges.world", "_blank")}
              >
                Visit Ganges Lite
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
                onClick={() => window.open("https://wa.me/918209893843", "_blank")}
              >
                Get Help on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
