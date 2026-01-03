import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { BookOpen, Heart, Star, Music, Sparkles, GraduationCap, Brain, Flower2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function LearningPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const platforms = [
    {
      name: "Kerala Ayurveda Academy",
      desc: "Authentic Ayurveda education and practitioner training programs with government recognition",
      url: "https://ayurvedaacademy.com/",
      icon: Heart,
      category: "Ayurveda",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Vishuddhi Yoga Ayurveda",
      desc: "Comprehensive online Ayurvedic programs combining traditional wisdom with modern learning",
      url: "https://vishuddhi.com/",
      icon: Flower2,
      category: "Ayurveda",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "House of Beauty India",
      desc: "Basic to advanced Ayurvedic certifications for beauty and wellness practitioners",
      url: "https://www.houseofbeautyindia.com/",
      icon: Sparkles,
      category: "Ayurveda",
      color: "from-teal-500 to-teal-600"
    },
    {
      name: "Aarambh Yoga",
      desc: "Traditional Hatha and Ashtanga yoga practices with comprehensive teacher training",
      url: "https://aarambhyoga.com/",
      icon: Star,
      category: "Yoga",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Yoga Vidya Gurukul",
      desc: "Traditional yoga education in the Gurukul system with certified teacher training programs",
      url: "https://www.yvgonline.com/",
      icon: GraduationCap,
      category: "Yoga",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Sri Yoga Ashram",
      desc: "200-hour YTT combined with Vedic studies for a comprehensive yoga education",
      url: "https://www.sriyogaashram.org/",
      icon: BookOpen,
      category: "Yoga",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      name: "Nabatara Institute",
      desc: "Government-recognized Vedic astrology certification programs with expert faculty",
      url: "https://nabatarainstitute.com/",
      icon: Brain,
      category: "Astrology",
      color: "from-amber-500 to-amber-600"
    },
    {
      name: "NatyaSutra Online",
      desc: "Traditional Indian classical dance forms taught by master teachers",
      url: "https://natyasutra.com/",
      icon: Music,
      category: "Arts",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Ganges School",
      desc: "Curated learning platform for Indian traditional arts and sciences - Your complete gateway to India's wisdom",
      comingSoon: true,
      icon: Sparkles,
      category: "Multi-Disciplinary",
      color: "from-orange-500 to-orange-600"
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
              <GraduationCap className="h-10 w-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Learning & Education
            </h1>
            <p className="text-3xl text-white/95 leading-relaxed mb-4">
              Master Ancient Wisdom and Modern Skills
            </p>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              India's educational excellence spans from 5,000-year-old traditions to cutting-edge technology. Access authentic learning experiences from verified Indian institutions and masters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ancient Wisdom Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Ancient Wisdom for Modern Life
            </h2>
            <p className="text-xl text-foreground max-w-4xl mx-auto leading-relaxed">
              India's traditional knowledge systems have enriched humanity for thousands of years. Now, you can learn directly from experienced practitioners and accredited institutions offering:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                emoji: "🌿",
                title: "Ayurveda",
                desc: "The science of life and holistic healing"
              },
              {
                emoji: "🧘",
                title: "Yoga",
                desc: "Physical, mental, and spiritual practices"
              },
              {
                emoji: "✨",
                title: "Vedic Astrology",
                desc: "Ancient astronomical and predictive sciences"
              },
              {
                emoji: "💃",
                title: "Classical Arts",
                desc: "Dance, music, and traditional performances"
              }
            ].map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-[#1e3a8a]/10 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="text-6xl mb-4">{subject.emoji}</div>
                <h3 className="mb-3 text-[#1e3a8a]">{subject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{subject.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Platforms */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-6 text-[#1e3a8a]">
              Traditional Wisdom Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from authentic Indian institutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
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
                        <div className={`w-14 h-14 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                          <span className="text-xs text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">
                            {platform.category}
                          </span>
                          {platform.comingSoon && (
                            <Badge className="bg-[#ff9933] text-white">Coming 2026</Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-[#1e3a8a]">{platform.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed mb-4">
                        {platform.desc}
                      </CardDescription>
                      {!platform.comingSoon && (
                        <Button variant="outline" className="w-full group">
                          Learn More
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:ml-3 transition-all" />
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Ayurveda Programs",
                courses: [
                  "Certified Ayurvedic Practitioner",
                  "Panchakarma Therapy Specialist",
                  "Ayurvedic Nutrition & Cooking",
                  "Herbal Medicine & Pharmacology",
                  "Ayurvedic Beauty & Wellness"
                ]
              },
              {
                title: "Yoga & Meditation",
                courses: [
                  "200-Hour Yoga Teacher Training",
                  "500-Hour Advanced YTT",
                  "Ashtanga Vinyasa Specialization",
                  "Pranayama & Meditation Mastery",
                  "Yoga Philosophy & Sanskrit"
                ]
              },
              {
                title: "Vedic Sciences",
                courses: [
                  "Vedic Astrology Foundation",
                  "Advanced Jyotish Techniques",
                  "Vastu Shastra Architecture",
                  "Vedic Mathematics",
                  "Sanskrit Language Studies"
                ]
              },
              {
                title: "Traditional Arts",
                courses: [
                  "Bharatanatyam Classical Dance",
                  "Kathak Dance Traditions",
                  "Hindustani Classical Music",
                  "Traditional Painting Arts",
                  "Indian Classical Instruments"
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-[#1e3a8a]/10 shadow-lg"
              >
                <h3 className="mb-6 text-[#1e3a8a] text-2xl">{category.title}</h3>
                <ul className="space-y-3">
                  {category.courses.map((course, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#138808] rounded-full flex items-center justify-center mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-foreground">{course}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ganges School Coming Soon */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <Card className="bg-gradient-to-br from-blue-50 to-amber-50 border-2 border-dashed border-[#1e3a8a]/30 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e3a8a] to-[#ff9933] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-10 w-10 text-white" />
                </div>
                <Badge className="mx-auto mb-4 bg-[#ff9933] text-white px-4 py-2 text-base">Launching 2026</Badge>
                <CardTitle className="text-4xl text-[#1e3a8a] mb-4">Ganges School</CardTitle>
                <CardDescription className="text-xl max-w-3xl mx-auto mb-8">
                  Our comprehensive learning platform launching in 2026, featuring authentic Indian wisdom and modern skills training
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Live interactive sessions with master teachers",
                    "Certification programs recognized internationally",
                    "Cultural immersion experiences in India",
                    "Student community platform for networking",
                    "Progress tracking and assessment tools",
                    "Lifetime access to course materials",
                    "One-on-one mentorship opportunities",
                    "Integration with traditional Gurukul system"
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-3 items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-[#138808] rounded-full flex items-center justify-center mt-1">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      </div>
                      <span className="text-foreground text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a] to-[#1a1a2e] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-4xl sm:text-5xl mb-6">
              Begin Your Learning Journey
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Unlock India's timeless wisdom and transform your life through authentic learning
            </p>
            <Button 
              size="lg"
              className="bg-[#ff9933] hover:bg-[#ff9933]/90 text-white px-8 py-6 text-lg"
              onClick={() => window.location.href = "mailto:gangescompany@gmail.com?subject=Learning Inquiry"}
            >
              Explore Courses
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
