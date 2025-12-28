import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Code, Database, Cloud, Mail, Users, BarChart, Zap, TrendingUp, ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      name: "Zoho",
      desc: "Complete suite of business, productivity, and collaboration applications serving 80+ million users globally",
      url: "https://www.zoho.com/",
      icon: Cloud,
      category: "Business Suite",
      color: "from-blue-500 to-blue-600",
      ownedByGanges: false
    },
    {
      name: "Freshworks",
      desc: "Customer engagement software for sales, marketing, and support trusted by 67,000+ businesses",
      url: "https://www.freshworks.com/",
      icon: Users,
      category: "Customer Engagement",
      color: "from-purple-500 to-purple-600",
      ownedByGanges: false
    },
    {
      name: "Tally Solutions",
      desc: "Business management software for accounting and inventory used by millions of businesses",
      url: "https://tallysolutions.com/",
      icon: BarChart,
      category: "Accounting",
      color: "from-green-500 to-green-600",
      ownedByGanges: false
    },
    {
      name: "Wingify (VWO)",
      desc: "A/B testing and conversion optimization platform trusted by leading brands worldwide",
      url: "https://wingify.com/",
      icon: TrendingUp,
      category: "Analytics",
      color: "from-amber-500 to-amber-600",
      ownedByGanges: false
    },
    {
      name: "Postman",
      desc: "API platform for building and using APIs, the industry standard for API development",
      url: "https://www.postman.com/",
      icon: Database,
      category: "Development",
      color: "from-pink-500 to-pink-600",
      ownedByGanges: false
    },
    {
      name: "CleverTap",
      desc: "Customer engagement and retention platform powering personalized experiences at scale",
      url: "https://clevertap.com/",
      icon: Zap,
      category: "Marketing",
      color: "from-orange-500 to-orange-600",
      ownedByGanges: false
    },
    {
      name: "Caller",
      desc: "Your personal AI companion - coming soon. Join the waitlist to be among the first to experience intelligent voice conversations",
      url: "https://callagent.dev/",
      icon: Phone,
      category: "AI Companion",
      color: "from-indigo-500 to-indigo-600",
      ownedByGanges: true
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
              <Code className="h-10 w-10 text-white" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Digital Services
            </h1>
            <p className="text-3xl text-white/95 leading-relaxed mb-4">
              Access India's World-Class Digital Services
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              India's service exports reached $387.5 billion in 2024-25, making it a global leader in technology, consulting, and digital services. Connect with India's finest service providers through our curated platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-[#1e3a8a]">
                Power Your Business with Indian Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                India has emerged as a global leader in software services, creating world-class products that compete on the international stage. From business management to customer engagement, these platforms offer:
              </p>

              <div className="space-y-4">
                {[
                  "Cost-effective solutions with enterprise-grade features",
                  "Excellent customer support and service",
                  "Scalable infrastructure for growing businesses",
                  "Regular updates and innovative features",
                  "Trusted by millions globally"
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
                  src="https://images.unsplash.com/photo-1759884247447-beea12f8a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAwNzMyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Software Development"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Featured Service Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              World-class platforms trusted by millions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
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
                    onClick={() => window.open(service.url, "_blank")}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          {service.ownedByGanges && (
                            <span className="text-xs font-semibold bg-gradient-to-r from-[#ff9933] to-[#ff7700] text-white px-3 py-1 rounded-full shadow-md">
                              By Ganges
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                            {service.category}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-[#1e3a8a]">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {service.desc}
                      </CardDescription>
                      <Button variant="outline" className="w-full group">
                        Visit Website
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

      {/* Service Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Service Categories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for every business need
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "IT Services & Software Development",
              "Digital Marketing & SEO",
              "Business Process Outsourcing",
              "Financial Services & Fintech",
              "Healthcare & Telemedicine",
              "Education Technology",
              "Cloud Infrastructure Services",
              "Cybersecurity Solutions",
              "Data Analytics & AI"
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-[#1e3a8a]/10 shadow-lg hover:shadow-xl transition-all text-center"
              >
                <p className="text-[#1e3a8a]">{category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "$387.5B", label: "Service Exports 2024-25", desc: "India's global leadership in services" },
              { stat: "80M+", label: "Zoho Users", desc: "Trusted worldwide" },
              { stat: "$800B", label: "Digital Economy by 2030", desc: "Projected market size" }
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

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <Card className="bg-gradient-to-br from-blue-50 to-amber-50 border-2 border-dashed border-[#1e3a8a]/30">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <div className="inline-block bg-[#ff9933] text-white px-4 py-2 rounded-full mb-4">
                  Coming Soon
                </div>
                <CardTitle className="text-3xl text-[#1e3a8a] mb-4">
                  Ganges Services Marketplace
                </CardTitle>
                <CardDescription className="text-lg max-w-2xl mx-auto">
                  Direct access to vetted Indian service providers with integrated project management and payment systems
                </CardDescription>
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
              Transform Your Business with Indian Services
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with world-class service providers from India
            </p>
            <Button
              size="lg"
              className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = "mailto:gangescompany@gmail.com?subject=Services Inquiry"}
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
