import { Button } from "./ui/button";
import { Linkedin, Award, Rocket, Heart } from "lucide-react";
import founderImage from "figma:asset/84b69ce654ddae0ae6f8c5991ad960c9ed21d9cb.png";

export function FounderSection() {
  return (
    <section id="founder" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl mb-4 text-primary">Founder Market Fit</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary behind Ganges
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="relative aspect-[3/4] w-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={founderImage}
                  alt="Jay Agarwal - Founder of Ganges"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl mb-2">Jay Agarwal</h3>
            <p className="text-xl text-muted-foreground mb-6">Founder & CEO</p>

            <div className="space-y-6 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Jay Agarwal founded Ganges with a clear vision: to bridge the gap between India's rich offerings and global demand. Having experienced firsthand the challenges international customers face when trying to access authentic Indian products and services, Jay set out to create a comprehensive platform that would make this journey seamless.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With a deep understanding of both Indian markets and international business practices, Jay brings unique insights to Ganges. His passion for India's cultural heritage, combined with his expertise in e-commerce and logistics, positions him perfectly to lead Ganges in becoming the world's trusted gateway to India.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Under Jay's leadership, Ganges has evolved from a simple shipping service (Ganges Lite) into a comprehensive ecosystem encompassing e-commerce, B2B trade, digital services, tourism, and education - all designed to showcase the very best of India to the world.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="h-5 w-5 text-blue-600" />
                  <h4>Visionary</h4>
                </div>
                <p className="text-sm text-muted-foreground">Building India's global bridge</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <h4>Expert</h4>
                </div>
                <p className="text-sm text-muted-foreground">E-commerce & logistics mastery</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="h-5 w-5 text-blue-600" />
                  <h4>Passionate</h4>
                </div>
                <p className="text-sm text-muted-foreground">Champion of Indian heritage</p>
              </div>
            </div>

            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => window.open("https://www.linkedin.com/in/jayagarwalg", "_blank")}
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
