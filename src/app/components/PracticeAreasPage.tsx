import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SplitText } from "./ui/SplitText";
import { BlurText } from "./ui/BlurText";
import { ScrollReveal } from "./ui/ScrollReveal";
import { MagneticButton } from "./ui/MagneticButton";
import { ShinyButton } from "./ui/ShinyButton";
import { GradientText } from "./ui/GradientText";
import { Particles } from "./ui/Particles";
import { SpotlightCard } from "./ui/SpotlightCard";

const heroImg = "https://images.unsplash.com/photo-1764113697577-b5899b9a339d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FsZXMlMjBvZiUyMGp1c3RpY2UlMjBsYXclMjBzeW1ib2x8ZW58MXx8fHwxNzc1MDY2MTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const injuryImg = "https://images.unsplash.com/photo-1615423263169-36d38558bd53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb25hbCUyMGluanVyeSUyMGFjY2lkZW50JTIwY2FyfGVufDF8fHx8MTc3NTA2NjE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const workersImg = "https://images.unsplash.com/photo-1553760844-46bed5c3143f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZXJzJTIwY29tcGVuc2F0aW9uJTIwY29uc3RydWN0aW9uJTIwc2FmZXR5fGVufDF8fHx8MTc3NTA2NjE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const employmentImg = "https://images.unsplash.com/photo-1630265927428-a62b061a5270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbXBsb3ltZW50JTIwbGF3JTIwd29ya3BsYWNlJTIwb2ZmaWNlfGVufDF8fHx8MTc3NTA2NjE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const familyImg = "https://images.unsplash.com/photo-1603367563698-67012943fd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoYXBweSUyMG91dGRvb3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzUwNjYxNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const realEstateImg = "https://images.unsplash.com/flagged/photo-1558954157-aa76c0d246c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcHJvcGVydHklMjBsYXclMjBob3VzZXxlbnwxfHx8fDE3NzUwNjYxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const areas = [
  {
    title: "Personal Injury",
    img: injuryImg,
    desc: "If you or a loved one has been injured due to someone else's negligence, our personal injury attorneys are here to help. We handle car accidents, truck accidents, slip and falls, motorcycle accidents, pedestrian accidents, and more.",
    points: ["Car & Truck Accidents", "Slip & Fall Injuries", "Motorcycle Accidents", "Wrongful Death", "Catastrophic Injuries"],
  },
  {
    title: "Workers' Compensation",
    img: workersImg,
    desc: "Workplace injuries can be devastating. Our workers' compensation team helps injured employees secure the benefits they deserve, including medical treatment, lost wages, and disability payments.",
    points: ["Workplace Injuries", "Repetitive Stress Injuries", "Construction Accidents", "Denied Claims Appeals", "Third-Party Claims"],
  },
  {
    title: "Employment Law",
    img: employmentImg,
    desc: "We protect employees from unlawful workplace practices. Whether you've experienced discrimination, harassment, retaliation, or wrongful termination, our employment law attorneys will fight for your rights.",
    points: ["Wrongful Termination", "Workplace Discrimination", "Sexual Harassment", "Wage & Hour Disputes", "Retaliation Claims"],
  },
  {
    title: "Family Law",
    img: familyImg,
    desc: "Family matters require sensitivity and strength. Our family law team provides compassionate guidance through divorce, child custody, spousal support, and other family-related legal issues.",
    points: ["Divorce & Separation", "Child Custody & Support", "Spousal Support", "Property Division", "Domestic Violence Protection"],
  },
  {
    title: "Real Estate Law",
    img: realEstateImg,
    desc: "From residential transactions to commercial disputes, our real estate attorneys provide comprehensive legal services to protect your property interests and investments.",
    points: ["Purchase & Sale Agreements", "Landlord-Tenant Disputes", "Commercial Leasing", "Title Issues", "Property Litigation"],
  },
  {
    title: "Business Litigation",
    img: heroImg,
    desc: "Our business litigation team handles complex commercial disputes with strategic precision. We represent businesses and individuals in contract disputes, partnership disagreements, and more.",
    points: ["Contract Disputes", "Partnership Disputes", "Breach of Fiduciary Duty", "Business Torts", "Commercial Collections"],
  },
];

export function PracticeAreasPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative h-[420px] overflow-hidden">
        <ImageWithFallback src={heroImg} alt="Scales of justice" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[#1a1a2e]/82" />
        <Particles count={28} color="139, 105, 20" connected={false} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center">
          <div>
            <BlurText text="Our Expertise" className="text-[#c9a227] uppercase tracking-[0.3em] text-sm mb-3" delay={0.1} />
            <SplitText
              text="Practice Areas"
              tag="h1"
              delay={0.25}
              wordDelay={0.12}
              className="text-4xl md:text-5xl text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 } as React.CSSProperties}
            />
            <div className="w-16 h-0.5 bg-[#8b6914] mt-5" style={{ animation: "float-up-fade 0.6s ease 0.6s both" }} />
          </div>
        </div>
      </section>

      {/* ── Practice Area Intro ── */}
      <section className="bg-gray-50 py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced attorneys handle a broad spectrum of legal matters. Whatever your situation, Crestfield Law Group has the expertise to fight for you.
          </p>
        </div>
      </section>

      {/* ── Areas ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 space-y-24">
          {areas.map((area, i) => (
            <ScrollReveal
              key={area.title}
              direction={i % 2 === 0 ? "left" : "right"}
              duration={0.8}
              delay={0.05}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                <div style={{ direction: "ltr" }}>
                  <div className="relative overflow-hidden group shadow-lg">
                    <ImageWithFallback
                      src={area.img}
                      alt={area.title}
                      className="w-full h-[380px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gold corner accent */}
                    <div className="absolute top-0 left-0 w-16 h-1 bg-[#8b6914]" />
                    <div className="absolute top-0 left-0 w-1 h-16 bg-[#8b6914]" />
                  </div>
                </div>
                <div style={{ direction: "ltr" }}>
                  <h2
                    className="text-3xl text-[#1a1a2e] mb-4"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    <GradientText animate={false}>{area.title}</GradientText>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{area.desc}</p>
                  <SpotlightCard className="bg-gray-50 border border-gray-100 p-5 mb-6">
                    <ul className="space-y-2">
                      {area.points.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-gray-700">
                          <CheckCircle className="w-4 h-4 text-[#8b6914] shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                  <MagneticButton strength={0.18}>
                    <Link to="/contact">
                      <ShinyButton className="bg-[#8b6914] text-white px-8 py-3 uppercase tracking-wider text-sm hover:bg-[#74580f] transition-colors inline-flex items-center gap-2">
                        Get Free Consultation <ArrowRight className="w-4 h-4" />
                      </ShinyButton>
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
