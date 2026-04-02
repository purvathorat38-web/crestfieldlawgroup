import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, TrendingUp, Trophy, Star } from "lucide-react";
import { SplitText } from "./ui/SplitText";
import { BlurText } from "./ui/BlurText";
import { ScrollReveal, StaggerReveal } from "./ui/ScrollReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { SpotlightCard } from "./ui/SpotlightCard";
import { MagneticButton } from "./ui/MagneticButton";
import { ShinyButton } from "./ui/ShinyButton";
import { GradientText } from "./ui/GradientText";
import { Particles } from "./ui/Particles";
import { InfiniteMarquee } from "./ui/InfiniteMarquee";

const heroImg = "https://images.unsplash.com/photo-1758541213979-fe8c9996e197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydHJvb20lMjBqdXN0aWNlJTIwZ2F2ZWx8ZW58MXx8fHwxNzc0OTYzMDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const results = [
  { amount: "$12.5M", type: "Personal Injury", desc: "Truck accident resulting in catastrophic injuries. Settlement reached after aggressive negotiation." },
  { amount: "$8.2M", type: "Wrongful Death", desc: "Family lost a loved one due to medical negligence. Jury verdict in favor of our client." },
  { amount: "$5.7M", type: "Workplace Injury", desc: "Construction worker suffered permanent disability. Full compensation secured through litigation." },
  { amount: "$4.1M", type: "Auto Accident", desc: "Multi-vehicle collision on the freeway. Settlement covered all medical expenses and future care." },
  { amount: "$3.8M", type: "Employment Discrimination", desc: "Corporate executive wrongfully terminated based on age. Landmark settlement achieved." },
  { amount: "$2.9M", type: "Slip & Fall", desc: "Serious injury at a commercial property due to negligent maintenance. Pre-trial settlement." },
  { amount: "$2.4M", type: "Workers' Compensation", desc: "Denied claim overturned on appeal. Full benefits restored including vocational rehabilitation." },
  { amount: "$1.8M", type: "Product Liability", desc: "Defective product caused severe burns. Manufacturer held accountable through litigation." },
  { amount: "$1.5M", type: "Medical Malpractice", desc: "Surgical error led to permanent nerve damage. Settlement reached during mediation." },
  { amount: "$1.2M", type: "Wrongful Termination", desc: "Employee fired in retaliation for reporting safety violations. Full damages recovered." },
  { amount: "$950K", type: "Dog Bite Injury", desc: "Child severely injured by neighbor's dog. Insurance settlement covered reconstructive surgery." },
  { amount: "$780K", type: "Wage & Hour Violation", desc: "Class action for unpaid overtime affecting 200+ workers. Comprehensive settlement secured." },
];

const summaryStats = [
  { value: "$500M+", label: "Total Recovered" },
  { value: "10,000+", label: "Clients Represented" },
  { value: "98%", label: "Success Rate" },
  { value: "25+", label: "Years of Results" },
];

const marqueeWins = [
  "$12.5M — Personal Injury",
  "$8.2M — Wrongful Death",
  "$5.7M — Workplace Injury",
  "$4.1M — Auto Accident",
  "$3.8M — Discrimination",
  "$2.9M — Slip & Fall",
  "$2.4M — Workers' Comp",
  "$1.8M — Product Liability",
];

export function ResultsPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[440px] overflow-hidden">
        <ImageWithFallback src={heroImg} alt="Courtroom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a1a2e]/85" />
        <Particles count={40} color="201, 162, 39" connected={true} maxDistance={110} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <BlurText text="Proven Track Record" className="text-[#c9a227] uppercase tracking-[0.3em] text-sm mb-3" delay={0.1} />
            <SplitText
              text="Case Results"
              tag="h1"
              delay={0.25}
              wordDelay={0.15}
              className="text-4xl md:text-6xl text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 } as React.CSSProperties}
            />
            <BlurText
              text="Numbers that speak for themselves."
              className="text-white/70 text-lg mt-4"
              delay={0.5}
            />
            <div className="w-16 h-0.5 bg-[#8b6914] mt-5" style={{ animation: "float-up-fade 0.6s ease 0.7s both" }} />
          </div>
        </div>
      </section>

      {/* ── Summary Stats ── */}
      <section className="bg-[#1a1a2e] py-14 border-b border-[#8b6914]/20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {summaryStats.map((s, i) => (
            <ScrollReveal key={s.label} direction="up" delay={i * 0.1}>
              <div
                className="text-4xl text-white mb-1"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                <GradientText animate>
                  <AnimatedCounter value={s.value} />
                </GradientText>
              </div>
              <div className="text-white/55 text-sm uppercase tracking-wider">{s.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Marquee of wins ── */}
      <section className="bg-[#12112a] border-b border-[#8b6914]/20 py-4">
        <InfiniteMarquee
          speed={45}
          gap="5rem"
          items={marqueeWins.map((w) => (
            <div key={w} className="flex items-center gap-3 text-[#c9a227]/80 whitespace-nowrap">
              <Trophy className="w-4 h-4 shrink-0" />
              <span className="text-sm uppercase tracking-wider">{w}</span>
              <span className="text-[#8b6914]/40 ml-2">◆</span>
            </div>
          ))}
        />
      </section>

      {/* ── Disclaimer ── */}
      <section className="bg-gray-50 py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-gray-500 text-sm italic text-center">
            *Past results do not guarantee future outcomes. Every case is unique and must be evaluated on its own merits.
          </p>
        </div>
      </section>

      {/* ── Results Grid ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-14">
            <p className="text-[#8b6914] uppercase tracking-[0.3em] text-sm mb-3">Over $500 Million Recovered</p>
            <h2
              className="text-3xl text-[#1a1a2e]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Notable <GradientText>Settlements & Verdicts</GradientText>
            </h2>
          </ScrollReveal>

          <StaggerReveal staggerDelay={0.07} baseDelay={0.05} direction="up" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((r, i) => (
              <SpotlightCard
                key={i}
                className="bg-white border border-gray-100 shadow-md hover:shadow-lg transition-shadow p-6 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-3xl text-[#8b6914]"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    <AnimatedCounter value={r.amount} duration={2} />
                  </span>
                  <div className="w-10 h-10 bg-[#8b6914]/10 rounded-full flex items-center justify-center group-hover:bg-[#8b6914]/20 transition-colors">
                    <TrendingUp className="w-5 h-5 text-[#8b6914]" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-3 h-3 text-[#c9a227]" />
                  <h3 className="text-[#1a1a2e] text-sm" style={{ fontWeight: 600 }}>{r.type}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-[#8b6914] uppercase tracking-wider">Crestfield Law Group</span>
                </div>
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
              Let Us Fight for Your Case
            </h2>
            <p className="text-white/70 mb-10">Our results speak for themselves. Contact us for a free case evaluation.</p>
            <MagneticButton strength={0.2}>
              <Link to="/contact">
                <ShinyButton className="bg-[#8b6914] text-white px-12 py-4 uppercase tracking-wider text-sm hover:bg-[#74580f] transition-colors inline-flex items-center gap-2">
                  Free Consultation <ArrowRight className="w-4 h-4" />
                </ShinyButton>
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
