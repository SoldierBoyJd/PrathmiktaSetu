import Link from "next/link";
import {
  Waypoints, FilePlus2, Eye, Cpu, ShieldCheck, CheckCircle2,
  TrendingUp, Users, Landmark, Zap, Clock, Globe,
} from "lucide-react";

const PUBLIC_NAV = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
];

const TEAM = [
  {
    name: "Aryan Sharma",
    role: "CEO & Co-Founder",
    initials: "AS",
    bio: "Former IAS officer with 12 years in public administration. Passionate about civic tech.",
  },
  {
    name: "Priya Kapoor",
    role: "CTO & Co-Founder",
    initials: "PK",
    bio: "Ex-Google engineer. Leads product & engineering with a focus on scalable AI systems.",
  },
  {
    name: "Rahul Menon",
    role: "Head of AI",
    initials: "RM",
    bio: "PhD in NLP from IIT Bombay. Architect of our priority scoring and anomaly detection models.",
  },
];

const VALUES = [
  {
    icon: <Eye className="size-6 text-[#ff6900]" />,
    title: "Transparency",
    desc: "Every rupee allocated and every issue resolved is publicly visible. We believe open data builds trust.",
  },
  {
    icon: <Cpu className="size-6 text-[#ff6900]" />,
    title: "AI-Powered",
    desc: "Our models analyze thousands of complaints daily to surface the highest-impact interventions for officials.",
  },
  {
    icon: <ShieldCheck className="size-6 text-[#ff6900]" />,
    title: "Accountability",
    desc: "Every department action is timestamped and auditable, creating a complete chain of responsibility.",
  },
];

const DIFFERENCES = [
  {
    label: "Traditional Systems",
    items: [
      "Paper-based or siloed portals",
      "No intelligent prioritization",
      "Citizens have no tracking visibility",
      "Budget decisions made without data",
      "Complaints lost in bureaucratic queues",
    ],
    color: "text-red-500",
    icon: "✗",
  },
  {
    label: "Prathmikta Setu",
    items: [
      "Unified multi-channel platform",
      "AI-driven priority scoring",
      "End-to-end transparent tracking",
      "Data-driven budget optimization",
      "Automated escalation & routing",
    ],
    color: "text-[#1E8E3E]",
    icon: "✓",
  },
];

const STATS = [
  { value: "1.2M+", label: "Issues Tracked", color: "text-[#ff6900]" },
  { value: "87%", label: "Resolution Rate", color: "text-[#1E8E3E]" },
  { value: "42", label: "Constituencies", color: "text-zinc-950" },
  { value: "₹340Cr", label: "Budget Optimized", color: "text-[#ff6900]" },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-zinc-950 min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-[72px]">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-9 rounded-lg bg-[#ff6900] text-orange-50 flex justify-center items-center">
                <Waypoints className="size-5" />
              </div>
              <div className="leading-none flex flex-col">
                <span className="font-bold text-zinc-950 text-base leading-6 tracking-tight">
                  Prathmikta Setu
                </span>
                <span className="font-medium text-[#71717b] text-[11px]">
                  Bridging Citizens &amp; Governance
                </span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {PUBLIC_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium rounded-md text-sm leading-5 px-3 py-2 transition-colors ${
                    item.href === "/about"
                      ? "font-semibold text-[#ff6900]"
                      : "text-[#71717b] hover:text-zinc-950"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="font-medium text-[#71717b] text-sm px-3 py-2 hover:text-zinc-950"
            >
              Sign In
            </Link>
            <Link
              href="/submit-complaint"
              className="font-semibold rounded-lg bg-[#ff6900] text-orange-50 text-sm px-4 py-2 flex items-center gap-2 hover:bg-orange-600 transition-colors"
            >
              <FilePlus2 className="size-4" />
              Submit Complaint
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-[1140px] mx-auto px-8">
        {/* Hero */}
        <section className="py-20 text-center flex flex-col items-center gap-6">
          <div className="rounded-full bg-[#ff6900]/5 border border-[#ff6900]/20 flex px-3 py-1 items-center gap-2">
            <span className="size-2 rounded-full bg-[#ff6900]" />
            <span className="font-semibold text-[#ff6900] text-xs">Our Story &amp; Mission</span>
          </div>
          <h1 className="font-extrabold text-5xl text-zinc-950 tracking-tight leading-tight max-w-3xl">
            About <span className="text-[#ff6900]">Prathmikta Setu</span>
          </h1>
          <p className="text-[#71717b] text-lg max-w-2xl leading-relaxed">
            We&apos;re building the infrastructure for a more responsive, transparent,
            and AI-powered democracy — starting at the constituency level.
          </p>
        </section>

        {/* Mission */}
        <section className="py-16">
          <div className="rounded-3xl bg-gradient-to-br from-[#ff6900]/5 to-zinc-50 border border-[#ff6900]/20 p-12 grid md:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col gap-5">
              <div className="size-14 rounded-2xl bg-[#ff6900] flex items-center justify-center">
                <Globe className="size-7 text-orange-50" />
              </div>
              <h2 className="font-bold text-3xl text-zinc-950 leading-tight">
                Bridge the gap between citizens and government
              </h2>
              <p className="text-[#71717b] text-base leading-relaxed">
                India has over 4,120 Parliamentary and Assembly constituencies. Each one
                is a micro-universe of needs, problems, and aspirations. Prathmikta Setu
                gives every citizen a voice and every official the intelligence to act.
              </p>
              <p className="text-[#71717b] text-base leading-relaxed">
                Our name means &ldquo;Priority Bridge&rdquo; — connecting the most urgent
                citizen needs to decision-makers at the speed of AI.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users className="size-5 text-[#ff6900]" />, label: "Citizen Voices", value: "1.2M+" },
                { icon: <TrendingUp className="size-5 text-[#1E8E3E]" />, label: "Resolved", value: "87%" },
                { icon: <Landmark className="size-5 text-[#1E88E5]" />, label: "Constituencies", value: "42" },
                { icon: <Zap className="size-5 text-[#ff6900]" />, label: "Avg Resolution", value: "4.2d" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white border border-zinc-200 p-5 flex flex-col gap-2">
                  <div className="size-10 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="font-extrabold text-2xl text-zinc-950">{s.value}</span>
                  <span className="text-[#71717b] text-xs font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="text-center flex mb-10 flex-col items-center gap-3">
            <span className="font-bold uppercase text-[#ff6900] text-xs tracking-widest">
              Our Values
            </span>
            <h2 className="font-bold text-3xl text-zinc-950 tracking-tight">
              What drives everything we build
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl bg-white border border-zinc-200 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
              >
                <div className="size-12 rounded-xl bg-[#ff6900]/10 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-bold text-zinc-950 text-lg">{v.title}</h3>
                <p className="text-[#71717b] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How we're different */}
        <section className="py-16">
          <div className="text-center flex mb-10 flex-col items-center gap-3">
            <span className="font-bold uppercase text-[#71717b] text-xs tracking-widest">
              The Difference
            </span>
            <h2 className="font-bold text-3xl text-zinc-950 tracking-tight">
              How we compare to traditional systems
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {DIFFERENCES.map((col) => (
              <div
                key={col.label}
                className="rounded-2xl bg-white border border-zinc-200 p-6 flex flex-col gap-4"
              >
                <h3 className="font-bold text-zinc-950 text-base border-b border-zinc-100 pb-3">
                  {col.label}
                </h3>
                <div className="flex flex-col gap-3">
                  {col.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span
                        className={`font-bold text-base leading-5 shrink-0 ${col.color}`}
                      >
                        {col.icon}
                      </span>
                      <span className="text-sm text-zinc-700 leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="text-center flex mb-10 flex-col items-center gap-3">
            <span className="font-bold uppercase text-[#ff6900] text-xs tracking-widest">
              The Team
            </span>
            <h2 className="font-bold text-3xl text-zinc-950 tracking-tight">
              People building the bridge
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl bg-white border border-zinc-200 p-6 flex flex-col items-center text-center gap-4"
              >
                <div className="size-20 rounded-full bg-[#ff6900] flex items-center justify-center">
                  <span className="font-bold text-orange-50 text-xl">{member.initials}</span>
                </div>
                <div>
                  <h3 className="font-bold text-zinc-950 text-base">{member.name}</h3>
                  <p className="text-[#ff6900] text-xs font-semibold mt-0.5">{member.role}</p>
                </div>
                <p className="text-[#71717b] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="rounded-3xl bg-white border border-zinc-200 p-10">
            <div className="text-center mb-8">
              <h2 className="font-bold text-2xl text-zinc-950">Platform Impact</h2>
              <p className="text-[#71717b] text-sm mt-2">
                Live metrics from constituencies using Prathmikta Setu
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center flex flex-col items-center gap-1">
                  <span className={`font-extrabold text-4xl ${s.color}`}>{s.value}</span>
                  <span className="font-medium text-[#71717b] text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="rounded-3xl bg-[#ff6900] p-12 text-center flex flex-col items-center gap-6">
            <h2 className="font-bold text-white text-3xl tracking-tight">
              Ready to make a difference?
            </h2>
            <p className="text-orange-100 text-base max-w-xl">
              Join citizens and officials already using Prathmikta Setu to build better communities.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link
                href="/submit-complaint"
                className="font-semibold rounded-lg bg-white text-[#ff6900] text-sm px-8 py-3 hover:bg-orange-50 transition-colors"
              >
                Submit a Complaint →
              </Link>
              <Link
                href="/contact"
                className="font-semibold rounded-lg border border-white/40 text-white text-sm px-8 py-3 hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 mt-8">
        <div className="max-w-[1140px] mx-auto px-8 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-[#ff6900] flex items-center justify-center">
              <Waypoints className="size-4 text-orange-50" />
            </div>
            <span className="font-bold text-zinc-950 text-sm">Prathmikta Setu</span>
          </div>
          <p className="text-[#71717b] text-xs">
            © 2025 Prathmikta Setu · Government of India · Constituency Development Cell
          </p>
        </div>
      </footer>
    </div>
  );
}
