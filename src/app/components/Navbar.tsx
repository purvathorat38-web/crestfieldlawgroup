import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Phone, Scale } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/practice-areas", label: "Practice Areas" },
    { to: "/attorneys", label: "Attorneys" },
    { to: "/results", label: "Results" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-[#1a1a2e] text-white/80 text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span>Dedicated Legal Representation You Can Trust</span>
          <div className="hidden md:flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" />
            <span>(555) 234-5678</span>
            <span className="mx-2 text-white/30">|</span>
            <span className="text-[#c9a227]">Free Consultation Available</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.97)"
            : "rgba(255,255,255,1)",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled
            ? "0 2px 24px rgba(0,0,0,0.10)"
            : "0 1px 0 rgba(0,0,0,0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <Scale
              className="w-8 h-8 text-[#8b6914] transition-transform duration-300 group-hover:rotate-12"
            />
            <div>
              <span
                className="text-2xl tracking-wide text-[#1a1a2e]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                CRESTFIELD
              </span>
              <span className="block text-xs tracking-[0.3em] text-[#8b6914] uppercase">
                Law Group
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm uppercase tracking-wider transition-colors hover:text-[#8b6914] relative group ${
                  location.pathname === l.to ? "text-[#8b6914]" : "text-[#1a1a2e]"
                }`}
              >
                {l.label}
                {/* Active / hover underline */}
                <span
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#8b6914] transition-all duration-300"
                  style={{ width: location.pathname === l.to ? "100%" : "0%" }}
                />
              </Link>
            ))}
            <MagneticButton strength={0.15}>
              <Link
                to="/contact"
                className="relative overflow-hidden bg-[#8b6914] text-white px-6 py-2.5 text-sm uppercase tracking-wider hover:bg-[#74580f] transition-colors inline-block"
              >
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-80%",
                    width: "45%",
                    height: "100%",
                    background: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
                    transform: "skewX(-20deg)",
                    animation: "shine-sweep 4s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />
                Free Case Review
              </Link>
            </MagneticButton>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#1a1a2e] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3 shadow-lg">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobileOpen(false)}
                className={`block text-sm uppercase tracking-wider py-2 border-b border-gray-50 ${
                  location.pathname === l.to ? "text-[#8b6914]" : "text-[#1a1a2e] hover:text-[#8b6914]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block bg-[#8b6914] text-white text-center px-6 py-2.5 text-sm uppercase tracking-wider mt-2"
            >
              Free Case Review
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
