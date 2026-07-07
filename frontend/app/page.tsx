"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Waypoints,
  BarChart3,
  MessageSquareOff,
  Clock,
  EyeOff,
  Mic,
  ScanEye,
  MapPin,
  TrendingUp,
  CheckCircle2,
  Landmark,
  Users,
  ShieldCheck,
  Megaphone,
  Star,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-white text-zinc-950 min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
        <div className="max-w-[1140px] flex mx-auto px-4 sm:px-8 justify-between items-center h-[72px]">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="size-9 rounded-lg bg-[#ff6900] text-orange-50 flex justify-center items-center">
                <Waypoints className="size-5" />
              </div>
              <div className="leading-none flex flex-col">
                <span className="font-bold text-zinc-950 text-base leading-6 tracking-tight">
                  Prathmikta Setu
                </span>
                <span className="font-medium text-[#71717b] text-[11px] hidden sm:block">
                  Bridging Citizens &amp; Governance
                </span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium rounded-md text-sm leading-5 px-3 py-2 transition-colors ${
                    i === 0
                      ? "font-semibold text-[#ff6900]"
                      : "text-[#71717b] hover:text-zinc-950"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="font-medium text-[#71717b] text-sm leading-5 px-3 py-2 hover:text-zinc-950 border border-zinc-200 rounded-lg transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="font-semibold rounded-lg bg-[#ff6900] text-orange-50 text-sm leading-5 px-4 py-2 flex items-center gap-2 hover:bg-orange-600 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden size-10 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileNavOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {mobileNavOpen && (
          <div className="md:hidden border-t border-zinc-200 bg-white px-4 py-4 flex flex-col gap-2">
            {navLinks.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileNavOpen(false)}
                className={`font-medium text-sm px-3 py-2.5 rounded-lg ${
                  i === 0
                    ? "text-[#ff6900] font-semibold bg-[#ff6900]/5"
                    : "text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-2 border-t border-zinc-100">
              <Link
                href="/login"
                onClick={() => setMobileNavOpen(false)}
                className="font-medium text-sm px-3 py-2.5 rounded-lg border border-zinc-200 text-zinc-700 text-center hover:bg-zinc-50 transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileNavOpen(false)}
                className="font-semibold text-sm px-3 py-2.5 rounded-lg bg-[#ff6900] text-orange-50 text-center hover:bg-orange-600 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-[1140px] mx-auto px-4 sm:px-8">
        {/* Hero */}
        <section className="grid md:grid-cols-2 py-10 md:py-16 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <div className="rounded-full bg-[#ff6900]/5 border border-[#ff6900]/20 flex px-3 py-1 items-center gap-2 w-fit">
              <span className="size-2 rounded-full bg-[#ff6900] flex" />
              <span className="font-semibold text-[#ff6900] text-xs leading-4">
                AI-Powered Governance Intelligence
              </span>
            </div>
            <h1 className="font-extrabold text-zinc-950 text-3xl md:text-4xl leading-tight tracking-tight">
              Smarter Constituency Development,{" "}
              <span className="text-[#ff6900]">Powered by AI</span>
            </h1>
            <p className="max-w-xl leading-relaxed text-[#71717b] text-base">
              Prathmikta Setu turns citizen voices into data-driven decisions. Report
              issues by text, voice, photo, or location — while AI helps officials
              prioritize projects, optimize budgets, and build stronger constituencies.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/register"
                className="font-semibold rounded-lg bg-[#ff6900] text-orange-50 text-sm px-6 py-2.5 flex items-center gap-2 hover:bg-orange-600 transition-colors h-11"
              >
                <Megaphone className="size-4" />
                Report an Issue
              </Link>
              <Link
                href="/transparency"
                className="font-semibold rounded-lg text-zinc-950 text-sm border border-zinc-200 px-6 py-2.5 flex items-center gap-2 hover:bg-zinc-50 transition-colors h-11"
              >
                <BarChart3 className="size-4" />
                View Transparency
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-[#1E8E3E]" />
                <span className="font-medium text-[#71717b] text-sm">
                  Government-Grade Security
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Landmark className="size-5 text-[#71717b]" />
                <span className="font-medium text-[#71717b] text-sm">
                  Trusted by 42 Constituencies
                </span>
              </div>
            </div>
          </div>
          <div className="relative shadow-sm rounded-3xl bg-white border border-zinc-200 overflow-hidden">
            <div className="relative w-full h-64 md:h-72 bg-gradient-to-br from-[#ff6900]/10 to-zinc-100 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-4 p-6 md:p-8 w-full">
                {[
                  { icon: "🏗️", label: "Infrastructure" },
                  { icon: "💧", label: "Water Supply" },
                  { icon: "⚡", label: "Electricity" },
                  { icon: "🏥", label: "Healthcare" },
                  { icon: "🛣️", label: "Roads" },
                  { icon: "🎓", label: "Education" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl bg-white border border-zinc-200 p-2 md:p-3 flex flex-col items-center gap-1 shadow-sm"
                  >
                    <span className="text-xl md:text-2xl">{item.icon}</span>
                    <span className="text-[10px] font-medium text-[#71717b] text-center">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 p-5 md:p-6 gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-extrabold text-[#ff6900] text-xl md:text-2xl">1.2M+</span>
                <span className="font-medium text-[#71717b] text-xs">Issues Reported</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-extrabold text-[#1E8E3E] text-xl md:text-2xl">87%</span>
                <span className="font-medium text-[#71717b] text-xs">Resolution Rate</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-extrabold text-zinc-950 text-xl md:text-2xl">42</span>
                <span className="font-medium text-[#71717b] text-xs">Constituencies</span>
              </div>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="py-10 md:py-16">
          <div className="text-center flex mb-8 md:mb-10 flex-col items-center gap-3">
            <span className="font-bold uppercase text-[#ff6900] text-xs tracking-widest">
              The Challenge
            </span>
            <h2 className="font-bold text-zinc-950 text-2xl md:text-3xl tracking-tight">
              Citizens Face Real Barriers Every Day
            </h2>
            <p className="max-w-2xl text-[#71717b] text-sm">
              Fragmented channels, slow responses, and no visibility into what happens
              after a complaint is filed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                icon: <MessageSquareOff className="size-5 text-[#ff6900]" />,
                title: "No Clear Channel",
                desc: "Complaints are scattered across offices, phone lines, and paper forms with no unified tracking system.",
              },
              {
                icon: <Clock className="size-5 text-[#ff6900]" />,
                title: "Slow Resolution",
                desc: "Without prioritization, urgent infrastructure issues wait behind routine requests for months.",
              },
              {
                icon: <EyeOff className="size-5 text-[#ff6900]" />,
                title: "Zero Transparency",
                desc: "Citizens rarely know how public budgets are allocated or whether their concerns were even received.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white border border-zinc-200 p-6 flex flex-col gap-4"
              >
                <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-zinc-950 text-base">{item.title}</h3>
                <p className="text-[#71717b] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="py-10 md:py-16">
          <div className="text-center flex mb-10 md:mb-12 flex-col items-center gap-3">
            <span className="font-bold uppercase text-[#ff6900] text-xs tracking-widest">
              How It Works
            </span>
            <h2 className="font-bold text-zinc-950 text-2xl md:text-3xl tracking-tight">
              From Complaint to Resolution in Four Steps
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative">
            <div className="hidden md:block absolute left-[12.5%] right-[12.5%] top-6 h-px bg-zinc-200" />
            {[
              { n: "1", title: "Report", desc: "Submit via text, voice, photo, or geo-tagged location in seconds." },
              { n: "2", title: "AI Analysis", desc: "AI categorizes, scores priority, and detects emergency patterns." },
              { n: "3", title: "Prioritize", desc: "Officials receive ranked, budget-optimized recommendations." },
              { n: "4", title: "Resolve", desc: "Track progress transparently until the issue is closed." },
            ].map((step) => (
              <div key={step.n} className="text-center flex flex-col items-center gap-3 md:gap-4">
                <div className="z-10 size-12 ring-8 ring-white font-bold rounded-full bg-[#ff6900] text-orange-50 text-lg flex justify-center items-center">
                  {step.n}
                </div>
                <h3 className="font-bold text-zinc-950 text-sm md:text-base">{step.title}</h3>
                <p className="text-[#71717b] text-xs md:text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI Features */}
        <section className="py-10 md:py-16">
          <div className="text-center flex mb-8 md:mb-10 flex-col items-center gap-3">
            <span className="font-bold uppercase text-[#ff6900] text-xs tracking-widest">
              Intelligence Engine
            </span>
            <h2 className="font-bold text-zinc-950 text-2xl md:text-3xl tracking-tight">
              AI Features Built for Governance
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Mic className="size-5 text-[#ff6900]" />, title: "Voice Input", desc: "Report in your local language — AI transcribes and structures it instantly." },
              { icon: <ScanEye className="size-5 text-[#ff6900]" />, title: "Photo Analysis", desc: "Computer vision assesses damage severity and infrastructure gaps from images." },
              { icon: <MapPin className="size-5 text-[#ff6900]" />, title: "Location Tagging", desc: "Geo-clustering reveals hotspots and recurring problems across wards." },
              { icon: <TrendingUp className="size-5 text-[#ff6900]" />, title: "Priority Scoring", desc: "Weighs population impact, urgency, and cost to rank every project." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-white border border-zinc-200 p-4 md:p-6 flex flex-col gap-3 md:gap-4">
                <div className="size-10 md:size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-zinc-950 text-sm md:text-base">{item.title}</h3>
                <p className="text-[#71717b] text-xs md:text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* For whom */}
        <section className="py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            <div className="rounded-2xl bg-white border border-zinc-200 p-6 md:p-8 flex flex-col gap-5 md:gap-6">
              <div>
                <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center mb-3">
                  <Landmark className="size-5 text-[#ff6900]" />
                </div>
                <h3 className="font-bold text-zinc-950 text-lg md:text-xl">
                  For Government &amp; Officials
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Data-driven prioritization of development projects",
                  "Budget optimization with cost-benefit forecasting",
                  "Real-time emergency detection and alerts",
                  "Digital twin simulations for infrastructure planning",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-[#ff6900] mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/login"
                className="mt-auto font-semibold rounded-lg bg-[#ff6900] text-orange-50 text-sm px-5 py-2.5 flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors w-fit"
              >
                Access MP Dashboard →
              </Link>
            </div>
            <div className="rounded-2xl bg-white border border-zinc-200 p-6 md:p-8 flex flex-col gap-5 md:gap-6">
              <div>
                <div className="size-11 rounded-xl bg-zinc-100 flex justify-center items-center mb-3">
                  <Users className="size-5 text-[#71717b]" />
                </div>
                <h3 className="font-bold text-zinc-950 text-lg md:text-xl">For Citizens</h3>
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Report issues in seconds from any device",
                  "Track complaint status end-to-end transparently",
                  "See public budget utilization and ward performance",
                  "Upvote community issues that matter most",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-[#1E8E3E] mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/register"
                className="mt-auto font-semibold rounded-lg border border-zinc-200 text-zinc-950 text-sm px-5 py-2.5 flex items-center justify-center gap-2 hover:bg-zinc-50 transition-colors w-fit"
              >
                Get Started as Citizen →
              </Link>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 md:py-16">
          <div className="rounded-3xl bg-white border border-zinc-200 p-6 md:p-10">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="font-bold text-zinc-950 text-xl md:text-2xl">
                Platform Impact at a Glance
              </h2>
              <p className="text-[#71717b] text-sm mt-2">
                Live figures from constituencies actively using Prathmikta Setu
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { value: "1.2M+", label: "Total Complaints", color: "text-zinc-950" },
                { value: "87%", label: "Resolved", color: "text-[#1E8E3E]" },
                { value: "42", label: "Active Constituencies", color: "text-zinc-950" },
                { value: "₹340Cr", label: "Budget Optimized", color: "text-[#ff6900]" },
              ].map((s) => (
                <div key={s.label} className="text-center flex flex-col items-center gap-1">
                  <span className={`font-extrabold text-3xl md:text-4xl ${s.color}`}>
                    {s.value}
                  </span>
                  <span className="font-medium text-[#71717b] text-xs md:text-sm">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success metrics */}
        <section className="py-10 md:py-16">
          <div className="text-center flex mb-8 md:mb-10 flex-col items-center gap-3">
            <span className="font-bold uppercase text-[#71717b] text-xs tracking-widest">
              Measurable Results
            </span>
            <h2 className="font-bold text-zinc-950 text-2xl md:text-3xl tracking-tight">
              Success Metrics That Matter
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { label: "Resolution Efficiency", value: 87, color: "#1E8E3E" },
              { label: "Citizen Satisfaction", value: 92, color: "#1E8E3E" },
              { label: "Budget Utilization", value: 78, color: "#ff6900" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl bg-white border border-zinc-200 p-5 md:p-6 flex flex-col gap-3"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-zinc-950 text-sm">{m.label}</span>
                  <span className="font-bold text-sm" style={{ color: m.color }}>
                    {m.value}%
                  </span>
                </div>
                <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden">
                  <div
                    className="rounded-full h-full"
                    style={{ width: `${m.value}%`, background: m.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-10 md:py-16">
          <div className="text-center flex mb-8 md:mb-10 flex-col items-center gap-3">
            <span className="font-bold uppercase text-[#ff6900] text-xs tracking-widest">
              Trusted Voices
            </span>
            <h2 className="font-bold text-zinc-950 text-2xl md:text-3xl tracking-tight">
              What Citizens &amp; Officials Say
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                stars: 5,
                quote: "I reported a broken drainage line by photo and it was fixed within a week. For the first time I felt heard.",
                name: "Priya Sharma",
                role: "Resident, Bhopal",
                initials: "PS",
              },
              {
                stars: 5,
                quote: "The AI prioritization helped us clear 60% more issues this quarter. The budget optimizer alone saved us ₹4.2 crore.",
                name: "Rohan Verma",
                role: "MP, Lucknow East",
                initials: "RV",
              },
              {
                stars: 5,
                quote: "Transparency dashboard means my constituents can verify every rupee spent. It has completely changed how we engage.",
                name: "Nandita Iyer",
                role: "Municipal Councillor",
                initials: "NI",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="rounded-2xl bg-white border border-zinc-200 p-5 md:p-6 flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[#ff6900] text-[#ff6900]" />
                  ))}
                </div>
                <p className="text-zinc-950 text-sm leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-[#ff6900]/10 flex items-center justify-center">
                    <span className="text-[#ff6900] font-semibold text-xs">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-zinc-950">{t.name}</p>
                    <p className="text-[#71717b] text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 md:py-16">
          <div className="rounded-3xl bg-[#ff6900] p-8 md:p-12 text-center flex flex-col items-center gap-5 md:gap-6">
            <h2 className="font-bold text-white text-2xl md:text-3xl tracking-tight">
              Ready to Transform Your Constituency?
            </h2>
            <p className="text-orange-100 text-sm md:text-base max-w-xl">
              Join 42 constituencies already using AI to build better communities.
            </p>
            <div className="flex gap-3 flex-wrap justify-center">
              <Link
                href="/register"
                className="font-semibold rounded-lg bg-white text-[#ff6900] text-sm px-6 md:px-8 py-3 hover:bg-orange-50 transition-colors"
              >
                Get Started →
              </Link>
              <Link
                href="/login"
                className="font-semibold rounded-lg border border-white/40 text-white text-sm px-6 md:px-8 py-3 hover:bg-white/10 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 mt-8">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-8 py-6 md:py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-[#ff6900] flex items-center justify-center">
              <Waypoints className="size-4 text-orange-50" />
            </div>
            <span className="font-bold text-zinc-950 text-sm">Prathmikta Setu</span>
          </div>
          <div className="flex items-center gap-5 text-xs text-[#71717b]">
            <Link href="/about" className="hover:text-zinc-950 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-zinc-950 transition-colors">Contact</Link>
          </div>
          <p className="text-[#71717b] text-xs text-center sm:text-right">
            © 2025 Prathmikta Setu · Government of India · Constituency Development Cell
          </p>
        </div>
      </footer>
    </div>
  );
}
