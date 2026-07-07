"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Waypoints, FilePlus2, Mail, Phone, MapPin, Send,
  ChevronDown, ChevronUp, CheckCheck,
} from "lucide-react";
import { toast } from "sonner";

const PUBLIC_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const SUBJECTS = [
  { value: "", label: "Select a subject" },
  { value: "general", label: "General Enquiry" },
  { value: "partnership", label: "Partnership / Collaboration" },
  { value: "technical", label: "Technical Support" },
  { value: "government", label: "Government Onboarding" },
];

const CONTACT_INFO = [
  {
    icon: <Mail className="size-5 text-[#ff6900]" />,
    bg: "bg-[#ff6900]/10",
    label: "Email",
    value: "contact@prathmiktasetu.gov.in",
    sub: "We reply within 24 hours",
  },
  {
    icon: <Phone className="size-5 text-[#1E88E5]" />,
    bg: "bg-[#1E88E5]/10",
    label: "Phone",
    value: "+91 11 2345 6789",
    sub: "Mon–Fri, 9am–6pm IST",
  },
  {
    icon: <MapPin className="size-5 text-[#1E8E3E]" />,
    bg: "bg-[#1E8E3E]/10",
    label: "Office",
    value: "Ministry of Electronics & IT",
    sub: "New Delhi, 110001",
  },
];

const FAQS = [
  {
    q: "How do I track my complaint?",
    a: "Visit the Tracker page and enter your Tracking ID (e.g., PS-2025-XXXXX) — you'll see real-time status updates, department assignments, and resolution timelines.",
  },
  {
    q: "Is my personal information kept private?",
    a: "Yes. We follow government-grade data protection standards. Your personal details are only shared with the directly responsible department, never made public.",
  },
  {
    q: "How can my constituency get onboarded?",
    a: "Contact us via the form above or email government@prathmiktasetu.gov.in. Our team will schedule a demo and guide you through the onboarding process.",
  },
  {
    q: "Can I submit a complaint without creating an account?",
    a: "Absolutely. Visit the Submit Complaint page — no account is required. You'll receive a Tracking ID to monitor your complaint without logging in.",
  },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1100));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you within 24 hours.");
  };

  return (
    <div className="bg-[#F8FAF8] min-h-screen text-zinc-950">
      {/* Header */}
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
                  className={`font-medium rounded-md text-sm leading-5 px-3 py-2 transition-colors ${
                    item.href === "/contact"
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

      {/* Page hero */}
      <div className="bg-white border-b border-zinc-200">
        <div className="max-w-[1140px] mx-auto px-8 py-14 text-center flex flex-col items-center gap-4">
          <span className="font-bold uppercase text-[#ff6900] text-xs tracking-widest">
            Get in Touch
          </span>
          <h1 className="font-extrabold text-4xl text-zinc-950 tracking-tight">
            Contact Us
          </h1>
          <p className="text-[#71717b] text-lg max-w-xl leading-relaxed">
            Whether you have a question, a partnership idea, or need technical help —
            our team is here for you.
          </p>
        </div>
      </div>

      <main className="max-w-[1140px] mx-auto px-8 py-14 flex flex-col gap-14">
        {/* Contact grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="flex flex-col gap-5">
            <h2 className="font-bold text-xl text-zinc-950">Reach us directly</h2>
            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((c) => (
                <div
                  key={c.label}
                  className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5 flex items-start gap-4"
                >
                  <div className={`size-11 rounded-xl ${c.bg} flex items-center justify-center shrink-0`}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#71717b]">
                      {c.label}
                    </p>
                    <p className="font-semibold text-sm text-zinc-950 mt-0.5">{c.value}</p>
                    <p className="text-[11px] text-[#71717b] mt-0.5">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-12 flex flex-col items-center gap-5 text-center h-full justify-center">
                <div className="size-16 rounded-full bg-[#1E8E3E]/10 flex items-center justify-center">
                  <CheckCheck className="size-8 text-[#1E8E3E]" />
                </div>
                <h3 className="font-bold text-xl text-zinc-950">Message Sent!</h3>
                <p className="text-[#71717b] text-base max-w-sm">
                  Thank you for reaching out. We&apos;ll reply to{" "}
                  <span className="font-semibold text-zinc-950">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                  }}
                  className="font-semibold rounded-xl border border-zinc-200 text-zinc-700 text-sm px-6 py-2.5 hover:bg-zinc-50 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-5">
                <h2 className="font-bold text-xl text-zinc-950">Send us a message</h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm text-zinc-950">Full Name *</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-medium text-sm text-zinc-950">Email Address *</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-zinc-950">Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="rounded-xl border border-zinc-200 px-3 h-11 text-sm focus:outline-none focus:ring-1 focus:ring-[#ff6900] bg-white appearance-none"
                  >
                    {SUBJECTS.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-medium text-sm text-zinc-950">Message *</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="rounded-xl border border-zinc-200 px-3 py-2.5 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
                    placeholder="Tell us how we can help…"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="font-semibold rounded-xl bg-[#ff6900] hover:bg-orange-600 text-orange-50 text-sm w-full h-11 flex items-center justify-center gap-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="size-4 border-2 border-orange-200 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send className="size-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="text-center flex mb-8 flex-col items-center gap-2">
            <span className="font-bold uppercase text-[#ff6900] text-xs tracking-widest">FAQ</span>
            <h2 className="font-bold text-3xl text-zinc-950 tracking-tight">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-sm text-zinc-950 pr-4">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={16} className="text-[#71717b] shrink-0" />
                  ) : (
                    <ChevronDown size={16} className="text-[#71717b] shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <div className="h-px bg-zinc-100 mb-3" />
                    <p className="text-[#71717b] text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white mt-8">
        <div className="max-w-[1140px] mx-auto px-8 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-7 rounded-lg bg-[#ff6900] flex items-center justify-center">
              <Waypoints className="size-4 text-orange-50" />
            </div>
            <span className="font-bold text-zinc-950 text-sm">Prathmikta Setu</span>
          </div>
          <p className="text-[#71717b] text-xs">
            © 2026 Prathmikta Setu — An Initiative Project by Jainam, Nikhil &amp; Garima
          </p>
        </div>
      </footer>
    </div>
  );
}
