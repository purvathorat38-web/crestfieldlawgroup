import { Link } from "react-router";
import { Phone, Mail, MapPin, Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white/80">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Scale className="w-7 h-7 text-[#8b6914]" />
            <div>
              <span className="text-xl text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>CRESTFIELD</span>
              <span className="block text-xs tracking-[0.3em] text-[#8b6914] uppercase">Law Group</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Providing dedicated legal representation to individuals and families across California for over 25 years.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-sm uppercase tracking-wider mb-4" style={{ fontWeight: 600 }}>Quick Links</h3>
          <div className="space-y-2 text-sm">
            {["About", "Practice Areas", "Attorneys", "Results", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase().replace(" ", "-")}`} className="block hover:text-[#8b6914] transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Practice Areas */}
        <div>
          <h3 className="text-white text-sm uppercase tracking-wider mb-4" style={{ fontWeight: 600 }}>Practice Areas</h3>
          <div className="space-y-2 text-sm">
            {["Personal Injury", "Workers' Compensation", "Employment Law", "Real Estate Law", "Business Litigation", "Family Law"].map((a) => (
              <Link key={a} to="/practice-areas" className="block hover:text-[#8b6914] transition-colors">{a}</Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-sm uppercase tracking-wider mb-4" style={{ fontWeight: 600 }}>Contact Us</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-[#8b6914] shrink-0" />
              <span>1200 Wilshire Boulevard, Suite 450<br />Los Angeles, CA 90017</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#8b6914]" />
              <span>(555) 234-5678</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#8b6914]" />
              <span>info@crestfieldlaw.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 text-center text-sm py-6 text-white/50">
        &copy; 2026 Crestfield Law Group. All rights reserved. | The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.
      </div>
    </footer>
  );
}
