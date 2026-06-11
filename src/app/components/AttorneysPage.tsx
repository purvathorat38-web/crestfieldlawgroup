import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Mail, Phone, GraduationCap, Briefcase, Star } from "lucide-react";
import { SplitText } from "./ui/SplitText";
import { BlurText } from "./ui/BlurText";
import { ScrollReveal, StaggerReveal } from "./ui/ScrollReveal";
import { TiltCard } from "./ui/TiltCard";
import { SpotlightCard } from "./ui/SpotlightCard";
import { MagneticButton } from "./ui/MagneticButton";
import { ShinyButton } from "./ui/ShinyButton";
import { GradientText } from "./ui/GradientText";
import { Particles } from "./ui/Particles";

const heroImg = "https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGxpYnJhcnklMjBib29rcyUyMGxhd3xlbnwxfHx8fDE3NzUwNjYxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const attorney1 = "https://images.unsplash.com/photo-1736939681295-bb2e6759dddc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHN1aXR8ZW58MXx8fHwxNzc0OTY0NTc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const attorney2 = "https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBsYXd5ZXIlMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzc1MDY2MTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const attorney3 = "https://images.unsplash.com/photo-1644268756918-16348d1bc619?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXR0b3JuZXklMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzUwNjYxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const attorneys = [
  {
    name: "David Crestfield",
    title: "Founding Partner",
    img: attorney1,
    bio: "David founded Crestfield Law Group over 25 years ago with a vision to provide aggressive yet compassionate legal representation. He specializes in personal injury and has recovered millions for his clients.",
    education: "J.D., UCLA School of Law",
    bar: "California State Bar, 2001",
    areas: ["Personal Injury", "Wrongful Death", "Business Litigation"],
    accolades: ["Super Lawyer® 2024", "Top 100 Trial Attorneys"],
  },
  {
    name: "Elena Vasquez",
    title: "Senior Partner",
    img: attorney2,
    bio: "Elena brings over 18 years of experience in employment law and workers' compensation. She is a fierce advocate for workers' rights and has been recognized as a Super Lawyer for five consecutive years.",
    education: "J.D., Stanford Law School",
    bar: "California State Bar, 2008",
    areas: ["Employment Law", "Workers' Compensation", "Discrimination"],
    accolades: ["Super Lawyer® 5× Consecutive", "Best Lawyers in America®"],
  },
  {
    name: "Michael Thornton",
    title: "Associate Attorney",
    img: attorney3,
    bio: "Michael focuses on family law and real estate litigation. Known for his meticulous preparation and client-centered approach, he ensures every case receives the attention it deserves.",
    education: "J.D., USC Gould School of Law",
    bar: "California State Bar, 2015",
    areas: ["Family Law", "Real Estate Law", "Civil Litigation"],
    accolades: ["Rising Star 2024", "AV Preeminent® Rated"],
  },
];

export function AttorneysPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[420px] overflow-hidden">
        <ImageWithFallback src={heroImg} alt="Legal library" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a1a2e]/82" />
        <Particles count={28} color="139, 105, 20" connected={false} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <BlurText text="Our Team" className="text-[#c9a227] uppercase tracking-[0.3em] text-sm mb-3" delay={0.1} />
            <SplitText
              text="Meet Our Attorneys"
              tag="h1"
              delay={0.25}
              wordDelay={0.1}
              className="text-4xl md:text-5xl text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 } as React.CSSProperties}
            />
            <div className="w-16 h-0.5 bg-[#8b6914] mt-5" style={{ animation: "float-up-fade 0.6s ease 0.6s both" }} />
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our attorneys are seasoned legal professionals with proven track records. Each brings unique expertise and unwavering dedication to every case they handle.
          </p>
        </div>
      </section>

      {/* ── Attorneys ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {attorneys.map((a, i) => (
            <ScrollReveal
              key={a.name}
              direction={i % 2 === 0 ? "left" : "right"}
              duration={0.85}
              delay={0.05}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                {/* Image with 3D tilt */}
                <div style={{ direction: "ltr" }}>
                  <TiltCard maxTilt={8} scale={1.02} glare className="shadow-2xl">
                    <ImageWithFallback
                      src={a.img}
                      alt={a.name}
                      className="w-full h-[500px] object-cover"
                    />
                    {/* Overlay badge */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a1a2e]/80 to-transparent p-6">
                      <p className="text-white/70 text-xs uppercase tracking-wider">{a.title}</p>
                      <p className="text-white" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}>{a.name}</p>
                    </div>
                  </TiltCard>
                </div>

                {/* Info */}
                <div style={{ direction: "ltr" }}>
                  <h2
                    className="text-3xl text-[#1a1a2e] mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    {a.name}
                  </h2>
                  <p className="text-[#8b6914] uppercase tracking-wider text-sm mb-6">{a.title}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{a.bio}</p>

                  {/* Details */}
                  <SpotlightCard className="bg-gray-50 border border-gray-100 p-6 mb-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-[#8b6914] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#1a1a2e] text-sm" style={{ fontWeight: 600 }}>Education</span>
                        <p className="text-gray-600 text-sm">{a.education}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-5 h-5 text-[#8b6914] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#1a1a2e] text-sm" style={{ fontWeight: 600 }}>Bar Admission</span>
                        <p className="text-gray-600 text-sm">{a.bar}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-[#8b6914] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[#1a1a2e] text-sm" style={{ fontWeight: 600 }}>Accolades</span>
                        <p className="text-gray-600 text-sm">{a.accolades.join(" · ")}</p>
                      </div>
                    </div>
                  </SpotlightCard>

                  {/* Practice Areas */}
                  <div className="mb-6">
                    <p className="text-[#1a1a2e] text-sm mb-2" style={{ fontWeight: 600 }}>Practice Areas</p>
                    <div className="flex flex-wrap gap-2">
                      {a.areas.map((area) => (
                        <span key={area} className="bg-[#8b6914]/10 text-[#8b6914] border border-[#8b6914]/20 px-3 py-1 text-sm">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a href="mailto:info@crestfieldlaw.com" className="flex items-center gap-2 text-[#8b6914] text-sm hover:underline">
                      <Mail className="w-4 h-4" /> Email
                    </a>
                    <a href="tel:5552345678" className="flex items-center gap-2 text-[#8b6914] text-sm hover:underline">
                      <Phone className="w-4 h-4" /> Call
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Why Our Team ── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-12">
            <p className="text-[#8b6914] uppercase tracking-[0.3em] text-sm mb-3">What Sets Us Apart</p>
            <h2
              className="text-3xl text-[#1a1a2e]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              The <GradientText>Crestfield</GradientText> Difference
            </h2>
          </ScrollReveal>
          <StaggerReveal staggerDelay={0.1} direction="up" className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Trial-Tested", desc: "Our attorneys have won cases in state and federal courts across California, giving you the confidence that comes from proven courtroom experience." },
              { title: "Client-First Always", desc: "You'll have direct access to your attorney — not just a case manager. We keep you informed and involved every step of the way." },
              { title: "No Fee Unless We Win", desc: "We work on a contingency basis for most cases, meaning you pay nothing unless we secure a recovery for you." },
            ].map((item) => (
              <SpotlightCard key={item.title} className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-10 h-1 bg-[#8b6914] mb-5" />
                <h3
                  className="text-lg text-[#1a1a2e] mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </SpotlightCard>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#1a1a2e] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2
              className="text-3xl text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Schedule a Free Consultation
            </h2>
            <p className="text-white/70 mb-10">Speak directly with one of our experienced attorneys about your case.</p>
            <MagneticButton strength={0.2}>
              <Link to="/contact">
                <ShinyButton className="bg-[#8b6914] text-white px-12 py-4 uppercase tracking-wider text-sm hover:bg-[#74580f] transition-colors inline-flex items-center gap-2">
                  Contact Us Today <ArrowRight className="w-4 h-4" />
                </ShinyButton>
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
