import { Target, Globe2, Users, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function MissionSection() {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-primary">Our Mission</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Building the world's most trusted bridge to India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1656316538618-ea4daa396729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjdWx0dXJlJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzYwMTM5NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Indian culture and heritage"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-4">Connecting the World to India</h3>
                <p className="text-muted-foreground leading-relaxed">
                  At Ganges, we believe that India's rich heritage, innovative products, and timeless wisdom should be accessible to everyone, everywhere. Our mission is to create a seamless, trusted platform that connects the global community to the very best of India.
                </p>
              </div>

              <div>
                <h4 className="mb-3">What Drives Us</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We're building more than just a marketplace - we're creating a comprehensive ecosystem that brings together e-commerce, B2B trade, digital services, tourism, and traditional learning. Whether you're looking to purchase authentic Indian products, partner with manufacturers, explore the country's diverse landscapes, or learn ancient wisdom, Ganges is your gateway.
                </p>
              </div>

              <div>
                <h4 className="mb-3">Our Commitment</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to authenticity, quality, and trust. Every partner on our platform is carefully vetted, every service is genuine, and every experience is designed to showcase the true essence of India to the world.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-7 w-7 text-blue-600" />
            </div>
            <h4 className="mb-2">Authenticity</h4>
            <p className="text-muted-foreground text-sm">Genuine products and services from verified Indian sources</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe2 className="h-7 w-7 text-blue-600" />
            </div>
            <h4 className="mb-2">Global Reach</h4>
            <p className="text-muted-foreground text-sm">Serving customers worldwide with reliable logistics</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-7 w-7 text-blue-600" />
            </div>
            <h4 className="mb-2">Trust</h4>
            <p className="text-muted-foreground text-sm">Building lasting relationships through transparency and quality</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="h-7 w-7 text-blue-600" />
            </div>
            <h4 className="mb-2">Excellence</h4>
            <p className="text-muted-foreground text-sm">Curating only the best experiences India has to offer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
