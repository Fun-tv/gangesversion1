import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Calendar, ArrowRight, BookOpen, TrendingUp, Globe2, Sparkles, Star, ExternalLink, Quote } from "lucide-react";
import { motion } from "motion/react";
import surveyMain from "../assets/news_survey_main.jpg";
import survey1 from "../assets/news_survey_1.jpg";
import survey2 from "../assets/news_survey_2.jpg";

export default function NewsroomPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const featuredPosts = [
    {
      title: "India's Exports Reach $776.68 Billion: Breaking Records in 2023-24",
      category: "Export Statistics",
      date: "March 2024",
      excerpt: "India's total exports soared to $776.68 billion in FY 2023-24, with services exports reaching $387.5 billion and merchandise exports at $389.18 billion, marking a significant milestone in global trade.",
      link: "https://pib.gov.in/PressReleasePage.aspx?PRID=2015791",
      source: "Ministry of Commerce & Industry, Govt. of India",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Traditional Indian Handicrafts: $4.35 Billion Export Market with 25.7% Growth",
      category: "Handicrafts Sector",
      date: "February 2024",
      excerpt: "India's handicraft exports reached $4.35 billion with impressive 25.7% annual growth, employing over 7 million artisans and preserving traditional craftsmanship while meeting global demand for authentic products.",
      link: "https://www.business-standard.com/economy/news/indian-handicrafts-exports-rise-25-7-to-4-35-bn-in-fy24-124020800567_1.html",
      source: "Business Standard / EPCH Data",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "India Controls 55% of Global IT Services Outsourcing Market",
      category: "IT Services Leadership",
      date: "January 2024",
      excerpt: "Indian software companies like Zoho, Freshworks, and Postman are leading the global digital transformation, with India commanding 55% of the worldwide IT services outsourcing market valued at billions.",
      link: "https://www.nasscom.in/knowledge-center/publications/indian-tech-industry-factsheet",
      source: "NASSCOM Industry Report",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Cross-Border E-commerce: How Platforms Like Ganges Lite Are Changing Global Shopping",
      category: "E-commerce Innovation",
      date: "December 2024",
      excerpt: "Real customer success: Books unavailable on Amazon until 2026 delivered from India in just 10 days. Platforms enabling seamless access to Indian products worldwide with unprecedented speed and reliability.",
      link: "#customer-review",
      source: "Customer Success Story",
      color: "from-amber-500 to-amber-600"
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
              <BookOpen className="h-10 w-10 text-white" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Newsroom
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Real Stories, Real Impact, Real India
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto mt-4">
              Authentic news, verified data, and customer success stories showcasing India's growing presence in global markets
            </p>
          </motion.div>
        </div>
      </section>

      {/* Customer Review Section */}
      <section id="customer-review" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Badge className="mb-4 bg-[#ff9933] text-white text-sm px-4 py-1">Customer Success Story</Badge>
            <h2 className="text-4xl sm:text-5xl mb-4 text-[#1e3a8a]">
              Real Customer, Real Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              How Ganges Lite delivered the impossible
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="max-w-4xl mx-auto border-2 border-[#ff9933]/20 shadow-2xl">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-amber-50">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[#ff9933] text-[#ff9933]" />
                  ))}
                </div>
                <Quote className="h-12 w-12 text-[#1e3a8a]/20 mb-4" />
                <CardDescription className="text-lg text-foreground leading-relaxed">
                  "I was searching for the book 'Co-Intelligence Revolution' by Venkat Ramaswamy, a fellow IIT Madras alumnus. It wasn't available on Amazon.com until February 2026, but <span className="font-semibold text-[#ff9933]">Ganges Lite made it possible for me to get it in October - within just 10 days</span> of placing my order! The service was incredibly fast and reliable. Highly recommended for anyone wanting to get products from India to anywhere in the world."
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div>
                    <h4 className="font-semibold text-lg text-[#1e3a8a]">Viswa Reddy</h4>
                    <p className="text-muted-foreground">Product Manager at Jio</p>
                    <p className="text-sm text-muted-foreground">New Jersey, USA</p>
                    <Badge variant="outline" className="mt-2 border-[#1e3a8a] text-[#1e3a8a]">IIT Madras Alumnus</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Featured News Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Latest India Export News
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Authentic articles from verified sources with real statistics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#1e3a8a]/20 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${post.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    <CardTitle className="text-2xl text-[#1e3a8a] mb-4 leading-tight">{post.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed mb-4">{post.excerpt}</CardDescription>
                    <p className="text-xs text-muted-foreground italic">Source: {post.source}</p>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      className="w-full group"
                      onClick={() => {
                        if (post.link.startsWith('#')) {
                          document.querySelector(post.link)?.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.open(post.link, "_blank");
                        }
                      }}
                    >
                      {post.link.startsWith('#') ? 'Read Review' : 'Read Full Article'}
                      {post.link.startsWith('#') ? (
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" />
                      ) : (
                        <ExternalLink className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" />
                      )}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Survey Data & Insights */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Survey Insights & Data
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real data visualizing India's export landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: surveyMain, title: "Market Survey Overview", desc: "Comprehensive analysis of India's export markets" },
              { img: survey1, title: "Survey Results - Part 1", desc: "Customer preferences and buying patterns" },
              { img: survey2, title: "Survey Results - Part 2", desc: "Service satisfaction and delivery metrics" }
            ].map((survey, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={survey.img}
                      alt={survey.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#1e3a8a]">{survey.title}</CardTitle>
                    <CardDescription>{survey.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Conversations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Founder Conversations
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In-person discussions with our international audience
            </p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="bg-gradient-to-br from-blue-50 to-amber-50 border-2 border-[#1e3a8a]/10">
              <CardHeader className="text-center">
                <Globe2 className="h-16 w-16 text-[#1e3a8a] mx-auto mb-4" />
                <CardTitle className="text-2xl text-[#1e3a8a]">Building Global Connections</CardTitle>
                <CardDescription className="text-lg">
                  Our founder regularly engages with customers, partners, and stakeholders worldwide to understand their needs and share India's incredible offerings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Photos from recent international conversations coming soon
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6">
              India By The Numbers
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Verified statistics showcasing India's global impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stat: "$776.68B", label: "Total Exports (2023-24)", source: "Govt. of India" },
              { stat: "$4.35B", label: "Handicrafts Exports", source: "EPCH" },
              { stat: "55%", label: "Global IT Outsourcing Share", source: "NASSCOM" },
              { stat: "7M+", label: "Artisans Employed", source: "Ministry of Textiles" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center border border-white/20"
              >
                <div className="text-5xl font-bold mb-3 text-[#ff9933]">{item.stat}</div>
                <h4 className="text-lg mb-2 font-semibold">{item.label}</h4>
                <p className="text-sm text-white/60">Source: {item.source}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Get authentic insights about India's export success stories and market trends
            </p>
            <Button
              size="lg"
              className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = "mailto:gangescompany@gmail.com?subject=Newsletter Subscription"}
            >
              Subscribe to Newsletter
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
