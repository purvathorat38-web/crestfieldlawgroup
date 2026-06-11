import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle, Award, Users, Scale, Target } from "lucide-react";
import { SplitText } from "./ui/SplitText";
import { BlurText } from "./ui/BlurText";
import { ScrollReveal, StaggerReveal } from "./ui/ScrollReveal";
import { SpotlightCard } from "./ui/SpotlightCard";
import { MagneticButton } from "./ui/MagneticButton";
import { ShinyButton } from "./ui/ShinyButton";
import { GradientText } from "./ui/GradientText";
import { Particles } from "./ui/Particles";

const officeImg = "https://images.unsplash.com/photo-1760623128941-871039cd0ef7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXclMjBmaXJtJTIwb2ZmaWNlJTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NzUwNjYxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const libraryImg = "https://images.unsplash.com/photo-1769092992534-f2d0210162b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGxpYnJhcnklMjBib29rcyUyMGxhd3xlbnwxfHx8fDE3NzUwNjYxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const values = [
  { icon: Scale, title: "Integrity", desc: "We uphold the highest ethical standards in everything we do, ensuring honest communication and transparent practices." },
  { icon: Target, title: "Results-Driven", desc: "Our primary focus is achieving the best possible outcome for every client. We measure success by your satisfaction." },
  { icon: Users, title: "Client-Centered", desc: "Every case receives personalized attention. We treat our clients like family and fight as if the case were our own." },
  { icon: Award, title: "Excellence", desc: "Our team continually pursues legal education and stays at the forefront of changes in the law to better serve you." },
];

const milestones = [
  { year: "2001", label: "Founded in Los Angeles" },
  { year: "2008", label: "Expanded to 3 Practice Areas" },
  { year: "2014", label: "Surpassed $100M Recovered" },
  { year: "2020", label: "Named Top Law Firm by CA Bar" },
  { year: "2024", label: "$500M+ Total Recovered" },
];

export function AboutPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[400px] overflow-hidden">
        <ImageWithFallback src={officeImg} alt="Law office" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a1a2e]/82" />
        <Particles count={30} color="139, 105, 20" connected={false} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <BlurText text="About Us" className="text-[#c9a227] uppercase tracking-[0.3em] text-sm mb-3" delay={0.1} />
            <SplitText
              text="Our Story & Mission"
              tag="h1"
              className="text-4xl md:text-5xl text-white"
              delay={0.25}
              wordDelay={0.1}
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 } as React.CSSProperties}
            />
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <p className="text-[#8b6914] uppercase tracking-[0.3em] text-sm mb-3">Who We Are</p>
            <h2
              className="text-3xl text-[#1a1a2e] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Dedicated Advocates for <GradientText>Over 25 Years</GradientText>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Crestfield Law Group was founded with a simple mission: to provide aggressive, compassionate legal representation to individuals and families throughout California. From our offices in Los Angeles, we have grown into a respected firm known for delivering results.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our attorneys bring decades of combined experience to the table. We have successfully recovered over $500 million for our clients in personal injury, workers' compensation, employment law, and family law matters.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              What sets us apart is our commitment to treating every client with dignity and respect. We understand that legal issues can be overwhelming, and we strive to provide clear communication and strong advocacy at every step.
            </p>
            <div className="flex flex-wrap gap-3">
              {["No Win, No Fee", "Free Consultations", "Bilingual Staff", "24/7 Availability"].map((item) => (
                <span key={item} className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-[#8b6914]" /> {item}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.8} delay={0.1}>
            <div className="relative">
              <ImageWithFallback src={libraryImg} alt="Legal library" className="w-full h-[500px] object-cover shadow-xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#c9a227]/40 pointer-events-none hidden md:block" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-20 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 50% 50%, #8b6914 0%, transparent 60%)"
        }} />
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-14">
            <p className="text-[#c9a227] uppercase tracking-[0.3em] text-sm mb-3">Our Journey</p>
            <h2
              className="text-3xl text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Milestones of Excellence
            </h2>
          </ScrollReveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#8b6914]/30 hidden md:block" />
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                  <div className={`flex items-center gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <SpotlightCard className="bg-white/5 border border-[#8b6914]/20 px-6 py-4 inline-block">
                        <div
                          className="text-2xl text-[#c9a227] mb-1"
                          style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                        >
                          {m.year}
                        </div>
                        <div className="text-white/80 text-sm">{m.label}</div>
                      </SpotlightCard>
                    </div>
                    {/* Center dot */}
                    <div className="w-4 h-4 rounded-full bg-[#8b6914] border-2 border-[#c9a227] shrink-0 hidden md:block" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-14">
            <p className="text-[#8b6914] uppercase tracking-[0.3em] text-sm mb-3">Our Values</p>
            <h2
              className="text-3xl text-[#1a1a2e]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              What Guides Us
            </h2>
          </ScrollReveal>
          <StaggerReveal staggerDelay={0.12} direction="up" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <SpotlightCard
                key={v.title}
                className="bg-white p-8 shadow-md hover:shadow-xl transition-shadow text-center group"
              >
                <div className="w-16 h-16 bg-[#8b6914]/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#8b6914]/20 transition-colors">
                  <v.icon className="w-8 h-8 text-[#8b6914]" />
                </div>
                <h3
                  className="text-lg text-[#1a1a2e] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                >
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
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
              Let Us Fight for You
            </h2>
            <p className="text-white/70 mb-10">Schedule a free consultation today and learn how our experienced attorneys can help.</p>
            <MagneticButton strength={0.2}>
              <Link to="/contact">
                <ShinyButton className="bg-[#8b6914] text-white px-12 py-4 uppercase tracking-wider text-sm hover:bg-[#74580f] transition-colors inline-flex items-center gap-2">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </ShinyButton>
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
