import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import logoImage from "figma:asset/aa9ab0a643469aed98135b7cf5bdb649b3a5c947.png";

export function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <img src={logoImage} alt="Ganges Logo" className="h-24 w-24" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-primary">
            Your Trusted Bridge to India
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover everything India has to offer - from physical products and digital services to immersive experiences and authentic learning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => window.open("https://lite.ganges.world", "_blank")} className="gap-2">
              Explore Ganges Lite
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => {
              const element = document.getElementById("services");
              element?.scrollIntoView({ behavior: "smooth" });
            }}>
              Discover Services
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="mb-2 text-primary">E-Commerce</h3>
            <p className="text-muted-foreground">Access Indian online stores with worldwide delivery</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="mb-2 text-primary">B2B Solutions</h3>
            <p className="text-muted-foreground">Connect with verified Indian manufacturers and exporters</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="mb-2 text-primary">Travel & Tourism</h3>
            <p className="text-muted-foreground">Plan your perfect journey across incredible India</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
            <h3 className="mb-2 text-primary">Learning</h3>
            <p className="text-muted-foreground">Learn from authentic Indian wisdom and traditions</p>
          </div>
        </div>
      </div>
    </section>
  );
}
