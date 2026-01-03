import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Clock, HelpCircle, Handshake, Package, Facebook } from "lucide-react";
import { motion } from "motion/react";

export default function ContactPage() {
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
              <MessageCircle className="h-10 w-10 text-white" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Contact Us
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed mb-4">
              Connect With Our Global Team
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Whether you're a global customer seeking authentic Indian products, an Indian supplier looking to reach international markets, or a partner interested in collaboration, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Global Headquarters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-2 border-[#1e3a8a]/10">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-xl flex items-center justify-center mb-4">
                    <MapPin className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-[#1e3a8a]">Global Headquarters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground">Ganges</p>
                    <p className="text-foreground">Malviya Nagar, Jaipur</p>
                    <p className="text-foreground">Rajasthan, India - 302017</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Email Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-2 border-[#1e3a8a]/10">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Mail className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-[#1e3a8a]">Email Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">General Inquiries</p>
                    <a
                      href="mailto:contact@ganges.world"
                      className="text-[#1e3a8a] hover:text-[#ff9933] transition-colors block mb-1"
                    >
                      contact@ganges.world
                    </a>
                    <a
                      href="mailto:gangescompany@gmail.com"
                      className="text-[#1e3a8a] hover:text-[#ff9933] transition-colors block"
                    >
                      gangescompany@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Business Partnerships</p>
                    <a
                      href="mailto:contact@ganges.world"
                      className="text-[#1e3a8a] hover:text-[#ff9933] transition-colors block mb-1"
                    >
                      contact@ganges.world
                    </a>
                    <a
                      href="mailto:gangescompany@gmail.com"
                      className="text-[#1e3a8a] hover:text-[#ff9933] transition-colors block"
                    >
                      gangescompany@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Phone Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all border-2 border-[#1e3a8a]/10">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Phone className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-[#1e3a8a]">Call Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Phone</p>
                    <a
                      href="tel:+918209893843"
                      className="text-[#1e3a8a] hover:text-[#ff9933] transition-colors text-lg"
                    >
                      +91 8209893843
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Business Hours</p>
                    <div className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground mt-1" />
                      <p className="text-foreground text-sm">Mon-Sat: 9:00 AM - 6:00 PM IST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* WhatsApp Support Banner */}
          <motion.div {...fadeInUp}>
            <Card className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white border-0 overflow-hidden relative">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '30px 30px'
                }}></div>
              </div>
              <CardHeader className="relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <MessageCircle className="h-8 w-8" />
                    </div>
                    <div>
                      <CardTitle className="text-white mb-2">24/7 WhatsApp Support</CardTitle>
                      <CardDescription className="text-white/90">
                        Get instant help on WhatsApp. Stuck or have any inquiries? Just message us!
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-[#25D366] hover:bg-white/90 shadow-xl whitespace-nowrap"
                    onClick={() => window.open("https://wa.me/918209893843", "_blank")}
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Message on WhatsApp
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Business Inquiries */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Business Inquiries
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized support for different business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Supplier Partnerships",
                desc: "Indian businesses looking to reach global markets",
                email: "gangescompany@gmail.com",
                icon: Handshake
              },
              {
                title: "B2B Opportunities",
                desc: "International buyers seeking Indian manufacturers",
                email: "gangescompany@gmail.com",
                icon: Package
              }
            ].map((inquiry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-xl flex items-center justify-center mb-4">
                      <inquiry.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-[#1e3a8a]">{inquiry.title}</CardTitle>
                    <CardDescription className="text-base">{inquiry.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90"
                      onClick={() => window.location.href = "mailto:gangescompany@gmail.com"}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Inquiry
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Customer Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to help with any questions or issues
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-blue-50 to-amber-50 border-2 border-[#1e3a8a]/10">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-[#1e3a8a] mb-2">Need Help?</CardTitle>
                <CardDescription className="text-lg">
                  For any problems, questions, or support - just message us on WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                  onClick={() => window.open("https://wa.me/918209893843", "_blank")}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp: +91 8209893843
                </Button>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Or email us at:</p>
                  <a
                    href="mailto:contact@ganges.world"
                    className="text-[#1e3a8a] hover:text-[#ff9933] transition-colors block mb-1"
                  >
                    contact@ganges.world
                  </a>
                  <a
                    href="mailto:gangescompany@gmail.com"
                    className="text-[#1e3a8a] hover:text-[#ff9933] transition-colors block"
                  >
                    gangescompany@gmail.com
                  </a>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  Available 24/7 for your convenience
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Connect on Social Media
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Follow us for updates, stories, and insights
            </p>

            <div className="flex justify-center gap-6">
              {[
                {
                  icon: Instagram,
                  name: "Instagram",
                  handle: "@gangesofficial",
                  url: "https://www.instagram.com/gangesofficial/",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Linkedin,
                  name: "LinkedIn",
                  handle: "Ganges",
                  url: "https://www.linkedin.com/company/gangesofficial/",
                  color: "from-blue-700 to-blue-800"
                },
                {
                  icon: Facebook,
                  name: "Facebook",
                  handle: "Ganges",
                  url: "https://www.facebook.com/people/Ganges/61583564062540/",
                  color: "from-blue-600 to-blue-700"
                }
              ].map((social, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <button
                    onClick={() => window.open(social.url, "_blank")}
                    className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-border"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center`}>
                      <social.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-[#1e3a8a] mb-1">{social.name}</p>
                      <p className="text-sm text-muted-foreground">{social.handle}</p>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
