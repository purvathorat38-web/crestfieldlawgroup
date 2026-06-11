import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { SplitText } from "./ui/SplitText";
import { BlurText } from "./ui/BlurText";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SpotlightCard } from "./ui/SpotlightCard";
import { MagneticButton } from "./ui/MagneticButton";
import { GradientText } from "./ui/GradientText";
import { Particles } from "./ui/Particles";

const heroImg = "https://images.unsplash.com/photo-1760623128941-871039cd0ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBmaXJtJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzUwNjYxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    lines: ["1200 Wilshire Boulevard, Suite 450", "Los Angeles, CA 90017"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["(555) 234-5678", "Se Habla Español"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@crestfieldlaw.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Mon – Fri: 8:00 AM – 6:00 PM", "Sat: 9:00 AM – 2:00 PM", "24/7 Emergency Line Available"],
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[420px] overflow-hidden">
        <ImageWithFallback src={heroImg} alt="Office" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a1a2e]/84" />
        <Particles count={28} color="139, 105, 20" connected={false} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <BlurText text="Get In Touch" className="text-[#c9a227] uppercase tracking-[0.3em] text-sm mb-3" delay={0.1} />
            <SplitText
              text="Contact Us"
              tag="h1"
              delay={0.25}
              wordDelay={0.15}
              className="text-4xl md:text-5xl text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 } as React.CSSProperties}
            />
            <BlurText
              text="Your first consultation is always free — no obligations."
              className="text-white/70 text-base mt-4"
              delay={0.5}
            />
          </div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal direction="left">
              <h2
                className="text-2xl text-[#1a1a2e] mb-4"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                Free Case <GradientText animate>Evaluation</GradientText>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Don't wait to get the legal help you need. Contact us today for a free, no-obligation consultation. Our experienced attorneys are ready to review your case.
              </p>
            </ScrollReveal>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <ScrollReveal key={info.title} direction="left" delay={i * 0.08}>
                  <SpotlightCard className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-11 h-11 bg-[#8b6914]/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-[#8b6914]" />
                    </div>
                    <div>
                      <h4 className="text-[#1a1a2e] mb-1 text-sm" style={{ fontWeight: 600 }}>{info.title}</h4>
                      {info.lines.map((line, j) => (
                        <p key={j} className={`text-sm ${j === 0 ? "text-gray-600" : "text-gray-400"}`}>{line}</p>
                      ))}
                    </div>
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Form */}
          <ScrollReveal direction="right" delay={0.1} className="lg:col-span-3">
            <div className="bg-gray-50 border border-gray-100 p-8 md:p-10 shadow-sm">
              {submitted ? (
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3
                    className="text-2xl text-[#1a1a2e] mb-3"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    Thank You!
                  </h3>
                  <p className="text-gray-600">We've received your message and will contact you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3
                    className="text-2xl text-[#1a1a2e] mb-6"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    Send Us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-700 mb-1.5">First Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#8b6914] bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Last Name *</label>
                        <input
                          type="text"
                          required
                          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#8b6914] bg-white transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Email *</label>
                        <input
                          type="email"
                          required
                          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#8b6914] bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-700 mb-1.5">Phone *</label>
                        <input
                          type="tel"
                          required
                          className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#8b6914] bg-white transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5">Case Type</label>
                      <select className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#8b6914] bg-white transition-colors">
                        <option value="">Select a practice area</option>
                        <option>Personal Injury</option>
                        <option>Workers' Compensation</option>
                        <option>Employment Law</option>
                        <option>Family Law</option>
                        <option>Real Estate Law</option>
                        <option>Business Litigation</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-1.5">Tell Us About Your Case *</label>
                      <textarea
                        required
                        rows={5}
                        className="w-full border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-[#8b6914] bg-white resize-none transition-colors"
                      />
                    </div>
                    <MagneticButton strength={0.12}>
                      <button
                        type="submit"
                        className="relative overflow-hidden bg-[#8b6914] text-white px-10 py-3.5 uppercase tracking-wider text-sm hover:bg-[#74580f] transition-colors inline-flex items-center gap-2"
                      >
                        <span
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            top: 0,
                            left: "-80%",
                            width: "45%",
                            height: "100%",
                            background: "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%)",
                            transform: "skewX(-20deg)",
                            animation: "shine-sweep 3.5s ease-in-out infinite",
                            pointerEvents: "none",
                          }}
                        />
                        <Send className="w-4 h-4" /> Submit Your Case
                      </button>
                    </MagneticButton>
                    <p className="text-xs text-gray-400">Your information is kept strictly confidential. By submitting, you agree to our privacy policy.</p>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Map Placeholder ── */}
      <section className="bg-[#1a1a2e] relative h-[300px] flex items-center justify-center overflow-hidden">
        <Particles count={20} color="139, 105, 20" connected={false} />
        <div className="relative z-10 text-center">
          <MapPin className="w-10 h-10 text-[#c9a227] mx-auto mb-3" />
          <p className="text-white">1200 Wilshire Boulevard, Suite 450, Los Angeles, CA 90017</p>
          <p className="text-white/40 text-sm mt-1">Interactive map would be embedded here</p>
        </div>
      </section>
    </div>
  );
}