import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Shield, Users, Award, Clock, ArrowRight, Star, Phone, CheckCircle, Quote, Scale, Gavel, Building } from "lucide-react";
import { Particles } from "./ui/Particles";
import { BlurText } from "./ui/BlurText";
import { ScrollReveal, StaggerReveal } from "./ui/ScrollReveal";
import { AnimatedCounter } from "./ui/AnimatedCounter";
import { SpotlightCard } from "./ui/SpotlightCard";
import { InfiniteMarquee } from "./ui/InfiniteMarquee";
import { MagneticButton } from "./ui/MagneticButton";
import { GradientText } from "./ui/GradientText";
import { SplitText } from "./ui/SplitText";
import { ShinyButton } from "./ui/ShinyButton";
import { TypewriterText } from "./ui/TypewriterText";

const heroImg = "https://images.unsplash.com/photo-1526642591341-bcfc36ffae2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMGRvd250b3duJTIwYnVpbGRpbmdzfGVufDF8fHx8MTc3NTA2NjE1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const injuryImg = "https://images.unsplash.com/photo-1615423263169-36d38558bd53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGluanVyeSUyMGFjY2lkZW50JTIwY2FyfGVufDF8fHx8MTc3NTA2NjE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const workersImg = "https://images.unsplash.com/photo-1553760844-46bed5c3143f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZXJzJTIwY29tcGVuc2F0aW9uJTIwY29uc3RydWN0aW9uJTIwc2FmZXR5fGVufDF8fHx8MTc3NTA2NjE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const employmentImg = "https://images.unsplash.com/photo-1630265927428-a62b061a5270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3ltZW50JTIwbGF3JTIwd29ya3BsYWNlJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTA2NjE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const familyImg = "https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMG91dGRvb3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwNjYxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const handshakeImg = "https://images.unsplash.com/photo-1758518730384-be3d205838e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGFncmVlbWVudCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzUwMjU2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const gavelImg = "https://images.unsplash.com/photo-1758541213979-fe8c9996e197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydHJvb20lMjBqdXN0aWNlJTIwZ2F2ZWx8ZW58MXx8fHwxNzc0OTYzMDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const practiceAreas = [
  { title: "Personal Injury", desc: "Aggressive representation for accident victims. We fight to get you the compensation you deserve.", img: injuryImg },
  { title: "Workers' Compensation", desc: "Injured on the job? We help workers navigate complex claims and secure maximum benefits.", img: workersImg },
  { title: "Employment Law", desc: "Protecting employee rights against workplace discrimination, harassment, and wrongful termination.", img: employmentImg },
  { title: "Family Law", desc: "Compassionate guidance through divorce, custody, and family disputes with your interests first.", img: familyImg },
];

const stats = [
  { icon: Shield, value: "$500M+", label: "Recovered for Clients" },
  { icon: Users, value: "10,000+", label: "Cases Handled" },
  { icon: Award, value: "25+", label: "Years of Experience" },
  { icon: Clock, value: "24/7", label: "Available for You" },
];

const testimonials = [
  { name: "Maria R.", text: "Crestfield Law Group fought tirelessly for my case. They secured a settlement that truly changed my life. I cannot thank them enough.", rating: 5 },
  { name: "James T.", text: "After my workplace injury, they handled everything professionally. I was able to focus on recovery while they took care of the legal battle.", rating: 5 },
  { name: "Sandra K.", text: "Compassionate, professional, and results-driven. They guided me through a difficult divorce with genuine care and expertise.", rating: 5 },
];

const marqueeItems = [
  { icon: Scale, label: "California State Bar Certified" },
  { icon: Award, label: "Super Lawyers® 2024" },
  { icon: Shield, label: "AV Preeminent® Rated" },
  { icon: Building, label: "Best Law Firms — U.S. News" },
  { icon: Gavel, label: "$500M+ Recovered" },
  { icon: Users, label: "10,000+ Clients Served" },
];

export function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[640px] md:h-[740px] overflow-hidden">
        <ImageWithFallback src={heroImg} alt="City skyline" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/92 via-[#1a1a2e]/70 to-[#1a1a2e]/30" />

        {/* Gold particles */}
        <Particles count={55} color="139, 105, 20" connected={true} maxDistance={130} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <BlurText
              text="Trusted Legal Advocates"
              className="text-[#c9a227] uppercase tracking-[0.3em] text-sm mb-5"
              delay={0.1}
            />

            <div className="mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: 1.15 }}>
              <SplitText
                text="Fighting for Justice."
                tag="h1"
                className="text-4xl md:text-5xl lg:text-6xl text-white block"
                delay={0.3}
                wordDelay={0.1}
              />
              <div className="text-4xl md:text-5xl lg:text-6xl mt-2" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                <TypewriterText
                  phrases={["Protecting Your Rights.", "Winning Your Case.", "Securing Your Future."]}
                  className="text-white"
                  typingSpeed={55}
                  deletingSpeed={32}
                  pauseMs={2200}
                />
              </div>
            </div>

            <BlurText
              text="For over 25 years, Crestfield Law Group has provided aggressive, results-driven legal representation. We are committed to achieving the best possible outcomes for our clients."
              className="text-white/80 text-lg mb-10 leading-relaxed"
              delay={0.55}
              duration={0.9}
            />

            <div className="flex flex-wrap gap-4" style={{ animation: "float-up-fade 0.7s ease 0.75s both" }}>
              <MagneticButton strength={0.2}>
                <Link to="/contact">
                  <ShinyButton className="bg-[#8b6914] text-white px-9 py-3.5 uppercase tracking-wider text-sm hover:bg-[#74580f] transition-colors inline-flex items-center gap-2">
                    Free Consultation <ArrowRight className="w-4 h-4" />
                  </ShinyButton>
                </Link>
              </MagneticButton>
              <a
                href="tel:5552345678"
                className="border border-white/35 text-white px-8 py-3.5 uppercase tracking-wider text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1a1a2e]/60 to-transparent pointer-events-none" />
      </section>

      {/* ── Infinite Marquee — Awards & Recognition ── */}
      <section className="bg-[#12112a] border-y border-[#8b6914]/20 py-4">
        <InfiniteMarquee
          speed={40}
          gap="4rem"
          items={marqueeItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-white/70 whitespace-nowrap">
              <item.icon className="w-4 h-4 text-[#c9a227] shrink-0" />
              <span className="text-sm uppercase tracking-wider">{item.label}</span>
              <span className="text-[#8b6914]/50 ml-4">✦</span>
            </div>
          ))}
        />
      </section>

      {/* ── Stats Bar ── */}
      <section className="bg-[#1a1a2e] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <ScrollReveal key={s.label} direction="up" delay={i * 0.1} className="text-center">
              <s.icon className="w-8 h-8 text-[#c9a227] mx-auto mb-3" />
              <div
                className="text-3xl text-white mb-1"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                <AnimatedCounter value={s.value} />
              </div>
              <div className="text-white/55 text-sm uppercase tracking-wider">{s.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" duration={0.8}>
            <p className="text-[#8b6914] uppercase tracking-[0.3em] text-sm mb-3">About Our Firm</p>
            <h2
              className="text-3xl md:text-4xl text-[#1a1a2e] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              A Legacy of <GradientText>Legal Excellence</GradientText>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded in 2001, Crestfield Law Group has built a reputation for providing exceptional legal services throughout California. Our team of experienced attorneys is dedicated to fighting for the rights of individuals and families who have been wronged.
            </p>
            <div className="space-y-3 mb-8">
              {["No fees unless we win your case", "Personalized attention for every client", "Proven track record of success", "Aggressive courtroom representation"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#8b6914] shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <MagneticButton strength={0.18}>
              <Link to="/about">
                <ShinyButton className="bg-[#8b6914] text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-[#74580f] transition-colors inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </ShinyButton>
              </Link>
            </MagneticButton>
          </ScrollReveal>

          <ScrollReveal direction="right" duration={0.8} delay={0.1}>
            <div className="relative">
              <ImageWithFallback src={handshakeImg} alt="Professional handshake" className="w-full h-[460px] object-cover shadow-xl" />
              <div className="absolute -bottom-6 -left-6 bg-[#8b6914] text-white p-6 shadow-lg hidden md:block">
                <div className="text-3xl" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>25+</div>
                <div className="text-sm uppercase tracking-wider">Years Serving<br />Our Community</div>
              </div>
              {/* Decorative gold border accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-[#c9a227]/40 pointer-events-none hidden md:block" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Practice Areas ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-14">
            <p className="text-[#8b6914] uppercase tracking-[0.3em] text-sm mb-3">What We Do</p>
            <h2
              className="text-3xl md:text-4xl text-[#1a1a2e]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Our Practice Areas
            </h2>
          </ScrollReveal>

          <StaggerReveal staggerDelay={0.12} baseDelay={0.05} direction="up" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practiceAreas.map((area) => (
              <Link key={area.title} to="/practice-areas" className="group block">
                <SpotlightCard className="bg-white shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
                  <div className="h-52 overflow-hidden">
                    <ImageWithFallback
                      src={area.img}
                      alt={area.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col h-[180px]">
                    <h3
                      className="text-lg text-[#1a1a2e] mb-2"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
                    >
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                      {area.desc}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-1 text-[#8b6914] text-sm group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </SpotlightCard>
              </Link>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative py-24 overflow-hidden">
        <ImageWithFallback src={gavelImg} alt="Justice" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a1a2e]/88" />
        <Particles count={35} color="201, 162, 39" connected={false} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2
              className="text-3xl md:text-4xl text-white mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Injured? Don't Wait. Get the Help{" "}
              <GradientText>You Deserve.</GradientText>
            </h2>
            <p className="text-white/80 text-lg mb-10">
              Every moment counts when building a strong case. Contact us today for a free, no-obligation consultation with one of our experienced attorneys.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <MagneticButton strength={0.15}>
                <Link to="/contact">
                  <ShinyButton className="bg-[#8b6914] text-white px-11 py-3.5 uppercase tracking-wider text-sm hover:bg-[#74580f] transition-colors inline-block">
                    Schedule Free Consultation
                  </ShinyButton>
                </Link>
              </MagneticButton>
              <a
                href="tel:5552345678"
                className="border border-white/30 text-white px-10 py-3.5 uppercase tracking-wider text-sm hover:bg-white/10 transition-colors"
              >
                (555) 234-5678
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal direction="up" className="text-center mb-14">
            <p className="text-[#8b6914] uppercase tracking-[0.3em] text-sm mb-3">Client Testimonials</p>
            <h2
              className="text-3xl md:text-4xl text-[#1a1a2e]"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              What Our Clients Say
            </h2>
          </ScrollReveal>

          <StaggerReveal staggerDelay={0.15} direction="up" className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <SpotlightCard
                key={t.name}
                className="bg-gray-50 p-8 border-t-4 border-[#8b6914] hover:shadow-lg transition-shadow"
              >
                <Quote className="w-8 h-8 text-[#c9a227]/40 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#c9a227] text-[#c9a227]" />
                  ))}
                </div>
                <p className="text-gray-600 italic leading-relaxed mb-6">"{t.text}"</p>
                <div className="text-[#1a1a2e]" style={{ fontWeight: 600 }}>{t.name}</div>
              </SpotlightCard>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="bg-[#1a1a2e] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #8b6914 0%, transparent 50%), radial-gradient(circle at 80% 50%, #8b6914 0%, transparent 50%)"
        }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h2
              className="text-3xl text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
            >
              Ready to Discuss Your Case?
            </h2>
            <p className="text-white/70 mb-10">Contact us today. Your initial consultation is completely free.</p>
            <MagneticButton strength={0.22}>
              <Link to="/contact">
                <ShinyButton className="bg-[#8b6914] text-white px-12 py-4 uppercase tracking-wider text-sm hover:bg-[#74580f] transition-colors inline-flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </ShinyButton>
              </Link>
            </MagneticButton>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
