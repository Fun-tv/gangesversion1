import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "figma:asset/90e144617e807c259bb0875e482cdd3cb6c78b35.png";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [marketplacesOpen, setMarketplacesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img 
              src={logoImage} 
              alt="Ganges Logo" 
              className="h-12 w-12"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
            <span className="text-2xl text-[#1e3a8a] tracking-tight">GANGES</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative group">
              <button
                className="px-4 py-2 text-foreground hover:text-[#1e3a8a] transition-colors rounded-lg hover:bg-blue-50 flex items-center gap-1"
                onMouseEnter={() => setMarketplacesOpen(true)}
                onMouseLeave={() => setMarketplacesOpen(false)}
              >
                Marketplaces
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {marketplacesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border overflow-hidden"
                    onMouseEnter={() => setMarketplacesOpen(true)}
                    onMouseLeave={() => setMarketplacesOpen(false)}
                  >
                    <Link to="/lite" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                      <div>Ganges Lite</div>
                      <div className="text-xs text-muted-foreground">Shop Indian stores</div>
                    </Link>
                    <Link to="/b2b" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                      <div>B2B Marketplace</div>
                      <div className="text-xs text-muted-foreground">Wholesale & bulk</div>
                    </Link>
                    <Link to="/services" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                      <div>Services</div>
                      <div className="text-xs text-muted-foreground">Digital solutions</div>
                    </Link>
                    <Link to="/travel" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                      <div>Travel</div>
                      <div className="text-xs text-muted-foreground">Experience India</div>
                    </Link>
                    <Link to="/learning" className="block px-4 py-3 hover:bg-blue-50 transition-colors">
                      <div>Learning</div>
                      <div className="text-xs text-muted-foreground">Ancient wisdom</div>
                    </Link>
                    <Link to="/invest" className="block px-4 py-3 hover:bg-blue-50 transition-colors border-t border-border">
                      <div className="flex items-center gap-2">
                        <span>Invest in India</span>
                        <span className="text-xs bg-[#ff9933] text-white px-2 py-0.5 rounded">New</span>
                      </div>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/mission"
              className={`px-4 py-2 transition-colors rounded-lg hover:bg-blue-50 ${
                isActive("/mission") ? "text-[#1e3a8a] bg-blue-50" : "text-foreground hover:text-[#1e3a8a]"
              }`}
            >
              Our Mission
            </Link>
            <Link
              to="/founder"
              className={`px-4 py-2 transition-colors rounded-lg hover:bg-blue-50 ${
                isActive("/founder") ? "text-[#1e3a8a] bg-blue-50" : "text-foreground hover:text-[#1e3a8a]"
              }`}
            >
              Founder
            </Link>
            <Link
              to="/careers"
              className={`px-4 py-2 transition-colors rounded-lg hover:bg-blue-50 ${
                isActive("/careers") ? "text-[#1e3a8a] bg-blue-50" : "text-foreground hover:text-[#1e3a8a]"
              }`}
            >
              Careers
            </Link>
            <Link
              to="/newsroom"
              className={`px-4 py-2 transition-colors rounded-lg hover:bg-blue-50 ${
                isActive("/newsroom") ? "text-[#1e3a8a] bg-blue-50" : "text-foreground hover:text-[#1e3a8a]"
              }`}
            >
              Newsroom
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 transition-colors rounded-lg hover:bg-blue-50 ${
                isActive("/contact") ? "text-[#1e3a8a] bg-blue-50" : "text-foreground hover:text-[#1e3a8a]"
              }`}
            >
              Contact
            </Link>
            <Button 
              className="ml-2 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90"
              onClick={() => window.open("https://lite.ganges.world", "_blank")}
            >
              Shop Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-white overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-2 max-h-[70vh] overflow-y-auto">
              <div className="pb-2 mb-2 border-b border-border">
                <p className="text-xs text-muted-foreground mb-2">MARKETPLACES</p>
                <Link to="/lite" className="block py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                  Ganges Lite
                </Link>
                <Link to="/b2b" className="block py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                  B2B Marketplace
                </Link>
                <Link to="/services" className="block py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </Link>
                <Link to="/travel" className="block py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                  Travel
                </Link>
                <Link to="/learning" className="block py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                  Learning
                </Link>
                <Link to="/invest" className="block py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                  Invest in India
                </Link>
              </div>
              
              <Link to="/mission" className="py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                Our Mission
              </Link>
              <Link to="/founder" className="py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                Founder
              </Link>
              <Link to="/careers" className="py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                Careers
              </Link>
              <Link to="/newsroom" className="py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                Newsroom
              </Link>
              <Link to="/contact" className="py-2 text-foreground hover:text-[#1e3a8a]" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Button 
                className="mt-4 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90"
                onClick={() => {
                  window.open("https://lite.ganges.world", "_blank");
                  setMobileMenuOpen(false);
                }}
              >
                Shop Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
