import { Linkedin, Mail, Instagram, MessageCircle, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "figma:asset/90e144617e807c259bb0875e482cdd3cb6c78b35.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1e3a8a] to-[#1a1a2e] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Ganges Logo" className="h-12 w-12" />
              <span className="text-2xl">GANGES</span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Your trusted bridge to India - connecting the world to authentic Indian products, services, and experiences.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/gangesofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ff9933] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/people/Ganges/61583564062540/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ff9933] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/gangesofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ff9933] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/918209893843"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ff9933] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="mailto:gangescompany@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#ff9933] transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4">Marketplaces</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/lite" className="hover:text-[#ff9933] transition-colors">
                  Ganges Lite
                </Link>
              </li>
              <li>
                <Link to="/b2b" className="hover:text-[#ff9933] transition-colors">
                  B2B Marketplace
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#ff9933] transition-colors">
                  Digital Services
                </Link>
              </li>
              <li>
                <Link to="/travel" className="hover:text-[#ff9933] transition-colors">
                  Travel & Tourism
                </Link>
              </li>
              <li>
                <Link to="/learning" className="hover:text-[#ff9933] transition-colors">
                  Learning
                </Link>
              </li>
              <li>
                <Link to="/invest" className="hover:text-[#ff9933] transition-colors">
                  Invest in India
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/mission" className="hover:text-[#ff9933] transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link to="/founder" className="hover:text-[#ff9933] transition-colors">
                  Founder Market Fit
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-[#ff9933] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/newsroom" className="hover:text-[#ff9933] transition-colors">
                  Newsroom
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link to="/contact" className="hover:text-[#ff9933] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://wa.me/918209893843" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff9933] transition-colors">
                  WhatsApp Help
                </a>
              </li>
              <li>
                <a href="mailto:gangescompany@gmail.com" className="hover:text-[#ff9933] transition-colors">
                  Email Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60 text-center md:text-left">
            &copy; {new Date().getFullYear()} Ganges. All rights reserved. Building bridges between India and the world.
          </p>
          <p className="text-sm text-white/60">
            Malviya Nagar, Jaipur, Rajasthan, India - 302017
          </p>
        </div>
      </div>
    </footer>
  );
}
