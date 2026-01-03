import { Button } from "./ui/button";
import { Package, Truck, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function LiteSection() {
  return (
    <section id="lite" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-900 rounded-full mb-4">
              Ganges Lite
            </div>
            <h2 className="text-3xl sm:text-4xl mb-6 text-primary">
              Get What You Love From Indian Stores Delivered To Your Doorstep
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Shop from any Indian online marketplace and have your items shipped directly to you. We provide you with a virtual Indian address, consolidate your purchases, and deliver them anywhere in the world.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Package className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">Shop from Any Indian Store</h4>
                  <p className="text-muted-foreground">Access thousands of Indian e-commerce platforms and local stores</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">Virtual Indian Address</h4>
                  <p className="text-muted-foreground">Receive a dedicated Indian shipping address for all your purchases</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-2">Worldwide Delivery</h4>
                  <p className="text-muted-foreground">We consolidate and ship your orders anywhere in the world</p>
                </div>
              </div>
            </div>

            <Button size="lg" onClick={() => window.open("https://lite.ganges.world", "_blank")}>
              Start Shopping with Ganges Lite
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1739066598279-1297113f5c6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYXJrZXRwbGFjZSUyMGVjb21tZXJjZXxlbnwxfHx8fDE3NjAxMzk1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Indian marketplace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
