import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Briefcase, Heart, TrendingUp, Users, Globe2, Lightbulb, Code, Palette, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export default function CareersPage() {
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
              <Briefcase className="h-10 w-10 text-white" />
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Careers at Ganges
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed mb-4">
              Join the Mission to Connect India to the World
            </p>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Ganges is growing rapidly, and we're seeking passionate individuals who share our vision of making India's incredible offerings accessible globally. Join us in building the world's most trusted bridge to India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Open Positions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Shape the future of global commerce and cultural exchange
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Product Manager",
                department: "Product",
                location: "Remote / Jaipur",
                type: "Full-time",
                icon: Lightbulb,
                desc: "Drive platform development and user experience across our marketplace ecosystem",
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Senior Frontend Developer",
                department: "Engineering",
                location: "Remote / Jaipur",
                type: "Full-time",
                icon: Code,
                desc: "Build beautiful, performant interfaces for our global user base",
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Backend Developer",
                department: "Engineering",
                location: "Remote / Jaipur",
                type: "Full-time",
                icon: Code,
                desc: "Scale our infrastructure to handle millions of transactions",
                color: "from-green-500 to-green-600"
              },
              {
                title: "UX/UI Designer",
                department: "Design",
                location: "Remote / Jaipur",
                type: "Full-time",
                icon: Palette,
                desc: "Create intuitive experiences that celebrate Indian aesthetics",
                color: "from-pink-500 to-pink-600"
              },
              {
                title: "Marketing Manager",
                department: "Marketing",
                location: "Remote / Jaipur",
                type: "Full-time",
                icon: MessageSquare,
                desc: "Tell our story and connect with audiences across the globe",
                color: "from-amber-500 to-amber-600"
              },
              {
                title: "Business Development",
                department: "Sales",
                location: "Remote / Jaipur",
                type: "Full-time",
                icon: TrendingUp,
                desc: "Build partnerships with Indian suppliers and international clients",
                color: "from-orange-500 to-orange-600"
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 border-transparent hover:border-[#1e3a8a]/20">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <job.icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-[#1e3a8a]">{job.title}</CardTitle>
                    <div className="flex gap-2 flex-wrap mt-2">
                      <Badge variant="secondary">{job.department}</Badge>
                      <Badge variant="outline">{job.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 text-base">{job.desc}</CardDescription>
                    <p className="text-sm text-muted-foreground mb-4">📍 {job.location}</p>
                    <Button
                      className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90"
                      onClick={() => window.open("https://forms.gle/zm1NiX6Q2bvsGCeKA", "_blank")}
                    >
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Don't see the perfect role? We're always looking for talented individuals.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white"
              onClick={() => window.location.href = "mailto:gangescompany@gmail.com?subject=Resume Submission"}
            >
              Send Us Your Resume
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              What We Offer
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              More than just a job - a mission with purpose
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Globe2,
                title: "Global Impact",
                desc: "Opportunity to impact global cultural exchange and connect millions"
              },
              {
                icon: Users,
                title: "Diverse Team",
                desc: "Work with an international team passionate about India"
              },
              {
                icon: TrendingUp,
                title: "Competitive Compensation",
                desc: "Fair pay and equity participation in our growth"
              },
              {
                icon: Lightbulb,
                title: "Professional Development",
                desc: "Continuous learning opportunities and skill development"
              },
              {
                icon: Heart,
                title: "Flexible Work",
                desc: "Remote-friendly with flexible arrangements"
              },
              {
                icon: Briefcase,
                title: "Cultural Heritage",
                desc: "Direct involvement in preserving and promoting Indian heritage"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h4 className="mb-3 text-[#1e3a8a]">{benefit.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl mb-6 text-[#1e3a8a]">Company Culture</h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Mission-Driven",
                    desc: "Every role contributes to connecting cultures and creating opportunities"
                  },
                  {
                    title: "Quality-Focused",
                    desc: "Excellence in everything we do, from code to customer service"
                  },
                  {
                    title: "Globally Minded",
                    desc: "International perspective rooted in Indian values"
                  },
                  {
                    title: "Innovation-Embracing",
                    desc: "Leveraging technology for cultural bridge-building"
                  },
                  {
                    title: "Community-Centered",
                    desc: "Supporting Indian artisans and global customers alike"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-[#138808] rounded-full flex items-center justify-center mt-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="mb-2 text-[#1e3a8a]">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                    </div>
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
                  src="https://images.unsplash.com/photo-1758518731457-5ef826b75b3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHRlYW18ZW58MXx8fHwxNzYwMTEzMDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join our team and help build the bridge between India and the world
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Apply Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
                onClick={() => window.location.href = "mailto:gangescompany@gmail.com?subject=Career Question"}
              >
                Ask Questions
              </Button>
            </div>
            <p className="mt-8 text-white/70">
              Contact: <a href="mailto:gangescompany@gmail.com" className="text-[#ff9933] hover:underline">gangescompany@gmail.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
