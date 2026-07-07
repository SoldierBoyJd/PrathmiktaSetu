"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Waypoints, FilePlus2, FileText, Paperclip, MapPin, Search,
  ImageUp, Mic, Navigation, LocateFixed, Sparkles, Flame, Send,
  CheckCircle2, Lightbulb, Info, ShieldCheck, Wand2, TrafficCone,
  Droplets, HeartPulse, GraduationCap, Waves, Zap, CheckCheck,
} from "lucide-react";
import { toast } from "sonner";

const CATEGORIES = [
  { value: "roads", label: "Roads", icon: <TrafficCone className="size-4 text-[#ff6900]" /> },
  { value: "water", label: "Water", icon: <Droplets className="size-4 text-[#1E88E5]" /> },
  { value: "healthcare", label: "Healthcare", icon: <HeartPulse className="size-4 text-red-500" /> },
  { value: "education", label: "Education", icon: <GraduationCap className="size-4 text-[#71717b]" /> },
  { value: "drainage", label: "Drainage", icon: <Waves className="size-4 text-[#1E88E5]" /> },
  { value: "electricity", label: "Electricity", icon: <Zap className="size-4 text-[#ff6900]" /> },
];

const PUBLIC_NAV = [
  { href: "/", label: "Home" },
  { href: "/issues", label: "Issues" },
  { href: "/track", label: "Tracker" },
  { href: "/transparency", label: "Transparency" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function PublicSubmitComplaintPage() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!title.trim()) {
      toast.error("Please enter a complaint title.");
      return;
    }
    setSubmitting(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Complaint submitted successfully! Tracking ID: PS-2025-00847");
    setTimeout(() => {
      router.push("/track");
    }, 2000);
  };

  return (
    <div className="bg-[#F8FAF8] min-h-screen text-zinc-950">
      {/* Public Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200 shadow-sm">
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
                  className="font-medium rounded-md text-sm leading-5 px-3 py-2 text-[#71717b] hover:text-zinc-950 transition-colors"
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
            <span className="font-semibold rounded-lg bg-[#ff6900] text-orange-50 text-sm px-4 py-2 flex items-center gap-2">
              <FilePlus2 className="size-4" />
              Submit Complaint
            </span>
          </div>
        </div>
      </header>

      {/* Page header */}
      <div className="max-w-[1140px] mx-auto px-8 pt-10 pb-6">
        <div className="flex items-center gap-2 text-xs text-[#71717b] mb-4">
          <Link href="/" className="hover:text-zinc-950 transition-colors">Home</Link>
          <span>›</span>
          <span className="text-zinc-950">Submit Complaint</span>
        </div>
        <h1 className="font-extrabold text-3xl text-zinc-950 mb-2">Submit a Complaint</h1>
        <p className="text-[#71717b] text-base">
          Raise infrastructure issues &amp; local needs for your constituency — no account required.
        </p>
      </div>

      {/* Form */}
      <div className="max-w-[1140px] mx-auto px-8 pb-16">
        {submitted ? (
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-12 flex flex-col items-center gap-5 text-center">
            <div className="size-16 rounded-full bg-[#1E8E3E]/10 flex items-center justify-center">
              <CheckCheck className="size-8 text-[#1E8E3E]" />
            </div>
            <h2 className="font-bold text-2xl text-zinc-950">Complaint Submitted!</h2>
            <p className="text-[#71717b] text-base max-w-md">
              Your complaint has been received. Tracking ID:{" "}
              <span className="font-semibold text-[#ff6900]">PS-2025-00847</span>
            </p>
            <p className="text-[#71717b] text-sm">Redirecting to tracker…</p>
            <Link
              href="/track"
              className="font-semibold rounded-xl bg-[#ff6900] hover:bg-orange-600 text-orange-50 text-sm px-8 py-3 transition-colors"
            >
              Track My Complaint →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-12 gap-6">
            {/* Main form */}
            <div className="col-span-12 lg:col-span-8 flex flex-col gap-5">
              {/* Details */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-5">
                <div>
                  <h2 className="font-semibold text-base flex items-center gap-2 mb-1">
                    <FileText className="size-4 text-[#ff6900]" />
                    Complaint Details
                  </h2>
                  <p className="text-[#71717b] text-xs">
                    Describe the issue clearly so the right department can act quickly.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-zinc-950">Issue Title *</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                    placeholder="e.g. Broken streetlights near Sector 12 market"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-zinc-950">Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    maxLength={500}
                    className="rounded-xl border border-zinc-200 px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                    placeholder="Provide details — location landmarks, how long the issue has persisted, and its impact on residents."
                  />
                  <span className="text-[#71717b] text-[11px] self-end">
                    {description.length} / 500 characters
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-zinc-950">Category</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.value}
                        onClick={() => setCategory(cat.value)}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                          category === cat.value
                            ? "border-[#ff6900] bg-[#ff6900]/5 text-zinc-950"
                            : "border-zinc-200 text-zinc-950 hover:bg-zinc-50"
                        }`}
                      >
                        {cat.icon}
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Submitter info */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-5">
                <div>
                  <h2 className="font-semibold text-base flex items-center gap-2 mb-1">
                    <ShieldCheck className="size-4 text-[#ff6900]" />
                    Your Contact (Optional)
                  </h2>
                  <p className="text-[#71717b] text-xs">
                    Helps officials follow up. You can also submit anonymously.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm text-zinc-950">Full Name</label>
                    <input
                      className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                      placeholder="Your name (optional)"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm text-zinc-950">Phone / Email</label>
                    <input
                      className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                      placeholder="For status updates (optional)"
                    />
                  </div>
                </div>
              </div>

              {/* Evidence */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-5">
                <div>
                  <h2 className="font-semibold text-base flex items-center gap-2 mb-1">
                    <Paperclip className="size-4 text-[#ff6900]" />
                    Evidence
                  </h2>
                  <p className="text-[#71717b] text-xs">
                    Add photos or a voice note to strengthen your report.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm text-zinc-950">Image Upload</label>
                    <div className="text-center rounded-xl bg-[#ff6900]/5 border-2 border-dashed border-[#ff6900]/40 flex p-6 flex-col justify-center items-center gap-2 h-40 cursor-pointer hover:bg-[#ff6900]/10 transition-colors">
                      <div className="size-10 rounded-full bg-[#ff6900]/10 flex justify-center items-center">
                        <ImageUp className="size-5 text-[#ff6900]" />
                      </div>
                      <p className="font-medium text-sm">Drag &amp; drop images</p>
                      <p className="text-[#71717b] text-[11px]">
                        or{" "}
                        <span className="font-medium text-[#ff6900]">browse files</span> · PNG, JPG up to 10MB
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm text-zinc-950">Voice Note</label>
                    <div className="rounded-xl bg-zinc-50 border border-zinc-200 flex p-4 flex-col justify-between h-40">
                      <div className="flex items-center gap-3">
                        <button className="size-10 shrink-0 shadow-sm rounded-full bg-[#ff6900] flex justify-center items-center">
                          <Mic className="size-5 text-orange-50" />
                        </button>
                        <div>
                          <span className="font-medium text-sm">Record a voice note</span>
                          <p className="text-[#71717b] text-[11px]">Tap to start · max 60s</p>
                        </div>
                      </div>
                      <div className="flex px-1 items-end gap-[3px] h-10">
                        {[3, 6, 9, 5, 8, 4, 7, 3, 6, 9, 4, 7, 5, 8, 3].map((h, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-[#ff6900] w-1"
                            style={{ height: `${h * 4}px`, opacity: i > 8 ? 0.4 : 1 }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-4">
                <div>
                  <h2 className="font-semibold text-base flex items-center gap-2 mb-1">
                    <MapPin className="size-4 text-[#ff6900]" />
                    Location
                  </h2>
                  <p className="text-[#71717b] text-xs">
                    Pin the exact spot to help field officers reach the site.
                  </p>
                </div>
                <div className="relative">
                  <Search className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />
                  <input
                    className="w-full rounded-xl border border-zinc-200 pl-9 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                    placeholder="Search address or drop a pin below"
                  />
                </div>
                <div className="relative rounded-xl border border-zinc-200 h-56 overflow-hidden bg-zinc-100 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="size-10 rounded-full bg-[#ff6900] flex items-center justify-center shadow-lg ring-4 ring-[#ff6900]/20">
                      <MapPin className="size-5 text-orange-50" />
                    </div>
                    <span className="text-xs text-[#71717b] font-medium">Map view</span>
                  </div>
                  <div className="backdrop-blur shadow-sm rounded-lg bg-white/90 border border-zinc-200 flex absolute left-3 bottom-3 px-3 py-2 items-center gap-2">
                    <Navigation className="size-4 text-[#71717b]" />
                    <span className="font-medium text-xs">Sector 12, Ward 8 · 28.6139, 77.2090</span>
                  </div>
                  <button className="backdrop-blur rounded-lg bg-white/90 text-xs absolute right-3 top-3 gap-2 h-8 px-3 border border-zinc-200 flex items-center hover:bg-white transition-colors">
                    <LocateFixed className="size-3.5" />
                    Use my location
                  </button>
                </div>
              </div>

              {/* Submit */}
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-[#ff6900]/10 flex justify-center items-center">
                      <Sparkles className="size-4 text-[#ff6900]" />
                    </div>
                    <div>
                      <span className="font-medium text-sm">Auto-suggested Priority</span>
                      <p className="text-[#71717b] text-[11px]">
                        Based on category, location &amp; description
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-[#ff6900]/15 text-[#ff6900] border border-[#ff6900]/30 px-3 py-1 text-xs font-semibold flex items-center gap-1">
                    <Flame className="size-3.5" />
                    High Priority
                  </span>
                </div>
                <div className="h-px bg-zinc-200" />
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="font-semibold rounded-xl bg-[#ff6900] hover:bg-orange-600 text-orange-50 text-sm w-full h-11 flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="size-4 border-2 border-orange-200 border-t-white rounded-full animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Submit Complaint
                    </>
                  )}
                </button>
                <p className="text-center text-[#71717b] text-[11px]">
                  By submitting, you agree to share this report with your constituency office.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-24 flex flex-col gap-5">
                {/* AI Guidance */}
                <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="size-11 ring-2 ring-[#ff6900]/30 rounded-full bg-[#ff6900] flex items-center justify-center shrink-0">
                      <Sparkles className="size-5 text-orange-50" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base">AI Guidance</h3>
                      <span className="text-[#71717b] text-[11px] flex items-center gap-1">
                        <span className="size-1.5 rounded-full bg-[#1E8E3E]" />
                        Analyzing as you type
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-[#ff6900]/5 border border-[#ff6900]/20 p-4 flex flex-col gap-2">
                    <span className="font-semibold uppercase text-[#ff6900] text-xs tracking-wide">
                      Estimated Priority Score
                    </span>
                    <div className="flex items-end gap-2">
                      <span className="font-bold text-[#ff6900] text-4xl leading-none">82</span>
                      <span className="text-[#71717b] text-sm mb-1">/ 100</span>
                    </div>
                    <div className="rounded-full bg-[#ff6900]/15 w-full h-2 overflow-hidden">
                      <div className="w-[82%] bg-[#ff6900] rounded-full h-full" />
                    </div>
                    <span className="text-[#71717b] text-[11px]">
                      High urgency — likely to be escalated quickly.
                    </span>
                  </div>
                  <div className="h-px bg-zinc-200" />
                  <div className="flex flex-col gap-3">
                    <span className="font-semibold uppercase text-[#71717b] text-xs tracking-wide">
                      Tips
                    </span>
                    {[
                      "Be specific about the exact location and landmarks.",
                      "Attach clear photos showing the issue.",
                      "Mention how long the problem has persisted.",
                    ].map((tip) => (
                      <div key={tip} className="flex items-start gap-2">
                        <CheckCircle2 className="size-4 shrink-0 text-[#1E8E3E] mt-0.5" />
                        <p className="text-zinc-950 text-xs leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suggestions */}
                <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 flex flex-col gap-3">
                  <h3 className="font-semibold text-sm flex items-center gap-2">
                    <Wand2 className="size-4 text-[#71717b]" />
                    Real-time Suggestions
                  </h3>
                  <div className="rounded-xl bg-zinc-50 border border-zinc-200 flex p-3 items-start gap-2">
                    <Lightbulb className="size-4 shrink-0 text-[#ff6900] mt-0.5" />
                    <p className="text-xs leading-relaxed">
                      Reports with images are resolved{" "}
                      <span className="font-semibold text-[#1E8E3E]">2.3x faster</span>.
                    </p>
                  </div>
                  <div className="rounded-xl bg-zinc-50 border border-zinc-200 flex p-3 items-start gap-2">
                    <Info className="size-4 shrink-0 text-[#1E88E5] mt-0.5" />
                    <p className="text-xs leading-relaxed">
                      A descriptive title helps route your complaint faster.
                    </p>
                  </div>
                </div>

                {/* Security */}
                <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-4">
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-full bg-[#1E8E3E]/10 flex justify-center items-center">
                      <ShieldCheck className="size-4 text-[#1E8E3E]" />
                    </div>
                    <p className="text-[#71717b] text-xs">
                      Your complaint is{" "}
                      <span className="font-semibold text-zinc-950">secure &amp; tracked</span>{" "}
                      end-to-end.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white">
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
