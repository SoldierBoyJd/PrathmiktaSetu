import { useEffect } from "react";
import {
  BarChart3,
  CheckCircle2,
  Clock,
  EyeOff,
  FilePlus2,
  Landmark,
  LayoutDashboard,
  Mail,
  MapPin,
  Megaphone,
  MessageSquareOff,
  Mic,
  Phone,
  ScanEye,
  ShieldCheck,
  Star,
  TrendingUp,
  Users,
  Waypoints,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { FallbackComponent } from "./CustomComponents";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="sticky z-50 backdrop-blur-sm bg-white/95 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full h-18">
          <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-full">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-lg bg-[#ff6900] text-orange-50 flex justify-center items-center">
                  <Waypoints className="size-5" />
                </div>
                <div className="leading-none flex flex-col">
                  <span className="font-bold text-zinc-950 text-base leading-6 tracking-tight">
                    Prathmikta Setu
                  </span>
                  <span className="font-medium text-[#71717b] text-[11px]">{`Bridging Citizens & Governance`}</span>
                </div>
              </div>
              <nav className="hidden items-center gap-1">
                <a className="font-semibold rounded-md text-[#ff6900] text-sm leading-5 px-3 py-2">
                  Home
                </a>
                <a className="font-medium rounded-md text-[#71717b] text-sm leading-5 px-3 py-2">
                  Issues
                </a>
                <a className="font-medium rounded-md text-[#71717b] text-sm leading-5 px-3 py-2">
                  Tracker
                </a>
                <a className="font-medium rounded-md text-[#71717b] text-sm leading-5 px-3 py-2">
                  Transparency
                </a>
                <a className="font-medium rounded-md text-[#71717b] text-sm leading-5 px-3 py-2">
                  About
                </a>
                <a className="font-medium rounded-md text-[#71717b] text-sm leading-5 px-3 py-2">
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="font-medium text-[#71717b] text-sm leading-5 hidden px-3 h-9"
                variant="ghost"
              >
                Sign In
              </Button>
              <Button className="font-semibold rounded-lg bg-[#ff6900] text-orange-50 text-sm leading-5 px-4 gap-2 h-9">
                <FilePlus2 className="size-4" />
                Submit Complaint
              </Button>
            </div>
          </div>
        </header>
        <main className="max-w-[1140px] mx-auto px-8">
          <section className="grid grid-cols-1 py-16 gap-12">
            <div className="flex flex-col gap-6">
              <div className="rounded-full bg-[#ff6900]/5 border-[#ff6900]/20 border-1 border-solid flex px-3 py-1 items-center gap-2 w-fit">
                <span className="size-2 rounded-full bg-zinc-100 flex" />
                <span className="font-semibold text-[#ff6900] text-xs leading-4">
                  AI-Powered Governance Intelligence
                </span>
              </div>
              <h1 className="leading-tight font-extrabold text-zinc-950 text-4xl leading-10 tracking-tight">
                Smarter Constituency Development,
                <span className="text-[#ff6900]">Powered by AI</span>
              </h1>
              <p className="max-w-xl leading-relaxed text-[#71717b] text-base leading-6">
                Prathmikta Setu turns citizen voices into data-driven decisions.
                Report issues by text, voice, photo, or location — while AI
                helps officials prioritize projects, optimize budgets, and build
                stronger constituencies.
              </p>
              <div className="flex pt-2 flex-wrap items-center gap-3">
                <Button className="font-semibold rounded-lg bg-[#ff6900] text-orange-50 text-sm leading-5 px-6 gap-2 h-11">
                  <Megaphone className="size-4" />
                  Report an Issue
                </Button>
                <Button
                  className="font-semibold rounded-lg text-zinc-950 text-sm leading-5 border-zinc-200 border-0 border-solid px-6 gap-2 h-11"
                  variant="outline"
                >
                  <BarChart3 className="size-4" />
                  View Transparency Dashboard
                </Button>
              </div>
              <div className="flex pt-4 items-center gap-6">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-5 text-zinc-100" />
                  <span className="font-medium text-[#71717b] text-sm leading-5">
                    Government-Grade Security
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Landmark className="size-5 text-zinc-100" />
                  <span className="font-medium text-[#71717b] text-sm leading-5">
                    Trusted by 42 Constituencies
                  </span>
                </div>
              </div>
            </div>
            <div className="relative shadow-sm rounded-3xl bg-white border-zinc-200 border-1 border-solid overflow-hidden">
              <div className="relative w-full h-72">
                <img
                  alt="Government Secretariat Building"
                  className="object-cover w-full h-full"
                  data-authorname="Zoshua Colah"
                  data-authorurl="https://unsplash.com/@zoshuacolah"
                  data-blurhash="LSE3#OrXJUr?LgM{soR*TeR+s9W;"
                  data-photoid="hcE6HEtaQAE"
                  src="https://images.unsplash.com/photo-1760872645518-8d0ee5ce9098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmclMjBwYXJsaWFtZW50JTIwYXJjaGl0ZWN0dXJlfGVufDF8MHx8fDE3ODMzNTA3Njh8MA&ixlib=rb-4.1.0&q=80&w=800"
                />
                <div className="bg-[linear-gradient(to_top,oklch(0.141_0.005_285.823/.55),transparent_60%)] absolute inset-0" />
              </div>
              <div className="grid grid-cols-3 p-6 gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-extrabold text-[#ff6900] text-2xl leading-8">
                    1.2M+
                  </span>
                  <span className="font-medium text-[#71717b] text-xs leading-4">
                    Issues Reported
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-extrabold text-zinc-100 text-2xl leading-8">
                    87%
                  </span>
                  <span className="font-medium text-[#71717b] text-xs leading-4">
                    Resolution Rate
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-extrabold text-zinc-950 text-2xl leading-8">
                    42
                  </span>
                  <span className="font-medium text-[#71717b] text-xs leading-4">
                    Constituencies
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="text-center flex mb-10 flex-col items-center gap-3">
              <span className="font-bold uppercase text-[#ff6900] text-xs leading-4 tracking-widest">
                The Challenge
              </span>
              <h2 className="font-bold text-zinc-950 text-3xl leading-9 tracking-tight">
                Citizens Face Real Barriers Every Day
              </h2>
              <p className="max-w-2xl text-[#71717b] text-sm leading-5">
                Fragmented channels, slow responses, and no visibility into what
                happens after a complaint is filed.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                    <MessageSquareOff className="size-5 text-[#ff6900]" />
                  </div>
                  <CardTitle className="font-bold text-zinc-950 text-base leading-6">
                    No Clear Channel
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                    Complaints are scattered across offices, phone lines, and
                    paper forms with no unified tracking system.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                    <Clock className="size-5 text-[#ff6900]" />
                  </div>
                  <CardTitle className="font-bold text-zinc-950 text-base leading-6">
                    Slow Resolution
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                    Without prioritization, urgent infrastructure issues wait
                    behind routine requests for months.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                    <EyeOff className="size-5 text-[#ff6900]" />
                  </div>
                  <CardTitle className="font-bold text-zinc-950 text-base leading-6">
                    Zero Transparency
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                    Citizens rarely know how public budgets are allocated or
                    whether their concerns were even received.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="py-16">
            <div className="text-center flex mb-12 flex-col items-center gap-3">
              <span className="font-bold uppercase text-[#ff6900] text-xs leading-4 tracking-widest">
                How It Works
              </span>
              <h2 className="font-bold text-zinc-950 text-3xl leading-9 tracking-tight">
                From Complaint to Resolution in Four Steps
              </h2>
            </div>
            <div className="relative grid grid-cols-1 gap-8">
              <div className="left-[12%] right-[12%] bg-zinc-200 hidden absolute top-6 h-px" />
              <div className="relative text-center flex flex-col items-center gap-4">
                <div className="z-10 size-12 ring-8 ring-background font-bold rounded-full bg-[#ff6900] text-orange-50 text-lg leading-7 flex justify-center items-center">
                  1
                </div>
                <h3 className="font-bold text-zinc-950 text-base leading-6">
                  Report
                </h3>
                <p className="text-[#71717b] text-sm leading-5">
                  Submit via text, voice, photo, or geo-tagged location in
                  seconds.
                </p>
              </div>
              <div className="relative text-center flex flex-col items-center gap-4">
                <div className="z-10 size-12 ring-8 ring-background font-bold rounded-full bg-[#ff6900] text-orange-50 text-lg leading-7 flex justify-center items-center">
                  2
                </div>
                <h3 className="font-bold text-zinc-950 text-base leading-6">
                  AI Analysis
                </h3>
                <p className="text-[#71717b] text-sm leading-5">
                  AI categorizes, scores priority, and detects emergency
                  patterns.
                </p>
              </div>
              <div className="relative text-center flex flex-col items-center gap-4">
                <div className="z-10 size-12 ring-8 ring-background font-bold rounded-full bg-[#ff6900] text-orange-50 text-lg leading-7 flex justify-center items-center">
                  3
                </div>
                <h3 className="font-bold text-zinc-950 text-base leading-6">
                  Prioritize
                </h3>
                <p className="text-[#71717b] text-sm leading-5">
                  Officials receive ranked, budget-optimized recommendations.
                </p>
              </div>
              <div className="relative text-center flex flex-col items-center gap-4">
                <div className="z-10 size-12 ring-8 ring-background font-bold rounded-full bg-zinc-100 text-orange-50 text-lg leading-7 flex justify-center items-center">
                  4
                </div>
                <h3 className="font-bold text-zinc-950 text-base leading-6">
                  Resolve
                </h3>
                <p className="text-[#71717b] text-sm leading-5">
                  Track progress transparently until the issue is closed.
                </p>
              </div>
            </div>
          </section>
          <section className="py-16">
            <div className="text-center flex mb-10 flex-col items-center gap-3">
              <span className="font-bold uppercase text-[#ff6900] text-xs leading-4 tracking-widest">
                Intelligence Engine
              </span>
              <h2 className="font-bold text-zinc-950 text-3xl leading-9 tracking-tight">
                AI Features Built for Governance
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                    <Mic className="size-5 text-[#ff6900]" />
                  </div>
                  <CardTitle className="font-bold text-zinc-950 text-base leading-6">
                    Voice Input
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                    Report in your local language — AI transcribes and
                    structures it instantly.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                    <ScanEye className="size-5 text-[#ff6900]" />
                  </div>
                  <CardTitle className="font-bold text-zinc-950 text-base leading-6">
                    Photo Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                    Computer vision assesses damage severity and infrastructure
                    gaps from images.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                    <MapPin className="size-5 text-[#ff6900]" />
                  </div>
                  <CardTitle className="font-bold text-zinc-950 text-base leading-6">
                    Location Tagging
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                    Geo-clustering reveals hotspots and recurring problems
                    across wards.
                  </p>
                </CardContent>
              </Card>
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-3">
                  <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                    <TrendingUp className="size-5 text-[#ff6900]" />
                  </div>
                  <CardTitle className="font-bold text-zinc-950 text-base leading-6">
                    Priority Scoring
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                    Weighs population impact, urgency, and cost to rank every
                    project.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="py-16">
            <div className="grid grid-cols-1 gap-6">
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-8 gap-6">
                <CardHeader className="p-0 gap-3">
                  <div className="size-11 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                    <Landmark className="size-5 text-[#ff6900]" />
                  </div>
                  <CardTitle className="font-bold text-zinc-950 text-xl leading-7">{`For Government & Officials`}</CardTitle>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-[#ff6900] mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">
                      Data-driven prioritization of development projects
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-[#ff6900] mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">
                      Budget optimization with cost-benefit forecasting
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-[#ff6900] mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">
                      Real-time emergency detection and alerts
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-[#ff6900] mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">
                      Digital twin simulations for infrastructure planning
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-8 gap-6">
                <CardHeader className="p-0 gap-3">
                  <div className="size-11 rounded-xl bg-zinc-100/10 flex justify-center items-center">
                    <Users className="size-5 text-zinc-100" />
                  </div>
                  <CardTitle className="font-bold text-zinc-950 text-xl leading-7">
                    For Citizens
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-zinc-100 mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">
                      Report issues in seconds from any device
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-zinc-100 mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">
                      Track complaint status end-to-end transparently
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-zinc-100 mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">
                      See public budget utilization and ward performance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-5 shrink-0 text-zinc-100 mt-0.5" />
                    <span className="text-[#71717b] text-sm leading-5">
                      Upvote community issues that matter most
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="py-16">
            <Card className="shadow-none rounded-3xl bg-white border-zinc-200 border-0 border-solid p-10 gap-8">
              <CardHeader className="text-center p-0 items-center gap-2">
                <CardTitle className="font-bold text-zinc-950 text-2xl leading-8">
                  Platform Impact at a Glance
                </CardTitle>
                <p className="text-[#71717b] text-sm leading-5">
                  Live figures from constituencies actively using Prathmikta
                  Setu
                </p>
              </CardHeader>
              <CardContent className="grid grid-cols-2 p-0 gap-8">
                <div className="text-center flex flex-col items-center gap-1">
                  <span className="font-extrabold text-zinc-950 text-4xl leading-10">
                    1.2M+
                  </span>
                  <span className="font-medium text-[#71717b] text-sm leading-5">
                    Total Complaints
                  </span>
                </div>
                <div className="text-center flex flex-col items-center gap-1">
                  <span className="font-extrabold text-zinc-100 text-4xl leading-10">
                    87%
                  </span>
                  <span className="font-medium text-[#71717b] text-sm leading-5">
                    Resolved
                  </span>
                </div>
                <div className="text-center flex flex-col items-center gap-1">
                  <span className="font-extrabold text-zinc-950 text-4xl leading-10">
                    42
                  </span>
                  <span className="font-medium text-[#71717b] text-sm leading-5">
                    Active Constituencies
                  </span>
                </div>
                <div className="text-center flex flex-col items-center gap-1">
                  <span className="font-extrabold text-[#ff6900] text-4xl leading-10">
                    ₹340Cr
                  </span>
                  <span className="font-medium text-[#71717b] text-sm leading-5">
                    Budget Optimized
                  </span>
                </div>
              </CardContent>
            </Card>
          </section>
          <section className="py-16">
            <div className="text-center flex mb-10 flex-col items-center gap-3">
              <span className="font-bold uppercase text-zinc-100 text-xs leading-4 tracking-widest">
                Measurable Results
              </span>
              <h2 className="font-bold text-zinc-950 text-3xl leading-9 tracking-tight">
                Success Metrics That Matter
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-semibold text-zinc-950 text-sm leading-5">
                      Resolution Efficiency
                    </CardTitle>
                    <span className="font-bold text-zinc-100 text-sm leading-5">
                      87%
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden">
                    <div className="w-[87%] rounded-full bg-zinc-100 h-full" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-semibold text-zinc-950 text-sm leading-5">
                      Citizen Satisfaction
                    </CardTitle>
                    <span className="font-bold text-zinc-100 text-sm leading-5">
                      92%
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden">
                    <div className="w-[92%] rounded-full bg-zinc-100 h-full" />
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-none rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <div className="flex justify-between items-center">
                    <CardTitle className="font-semibold text-zinc-950 text-sm leading-5">
                      Budget Utilization
                    </CardTitle>
                    <span className="font-bold text-zinc-100 text-sm leading-5">
                      78%
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden">
                    <div className="w-[78%] rounded-full bg-zinc-100 h-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
          <section className="py-16">
            <div className="text-center flex mb-10 flex-col items-center gap-3">
              <span className="font-bold uppercase text-[#ff6900] text-xs leading-4 tracking-widest">
                Trusted Voices
              </span>
              <h2 className="font-bold text-zinc-950 text-3xl leading-9 tracking-tight">{`What Citizens & Officials Say`}</h2>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <Card className="shadow-sm rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="text-[#ff6900] flex gap-1">
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                  </div>
                  <p className="leading-relaxed text-zinc-950 text-sm leading-5">
                    \"I reported a broken drainage line by photo and it was
                    fixed within a week. For the first time I felt heard.\"
                  </p>
                </CardContent>
                <CardFooter className="p-0 gap-3">
                  <div className="size-10 rounded-full overflow-hidden">
                    <img
                      alt="Priya Sharma"
                      className="object-cover w-full h-full"
                      data-authorname="Ashwin Vaswani"
                      data-authorurl="https://unsplash.com/@ashwinv11"
                      data-blurhash="LbHBe~-p%gW=~WWBt6j[bcNGMxn%"
                      data-photoid="1CoyeOsvqG4"
                      src="https://images.unsplash.com/photo-1547212371-eb5e6a4b590c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjaXRpemVuJTIwd29tYW4lMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfDJ8fHwxNzgzMzUwNzY4fDA&ixlib=rb-4.1.0&q=80&w=200"
                    />
                  </div>
                  <div className="leading-tight flex flex-col">
                    <span className="font-semibold text-zinc-950 text-sm leading-5">
                      Priya Sharma
                    </span>
                    <span className="text-[#71717b] text-xs leading-4">
                      Citizen, Ward 12
                    </span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="shadow-sm rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="text-[#ff6900] flex gap-1">
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                  </div>
                  <p className="leading-relaxed text-zinc-950 text-sm leading-5">
                    \"The priority scoring engine transformed how we allocate
                    our development budget. Every decision is now defensible.\"
                  </p>
                </CardContent>
                <CardFooter className="p-0 gap-3">
                  <div className="size-10 rounded-full overflow-hidden">
                    <img
                      alt="Rajesh Nair"
                      className="object-cover w-full h-full"
                      data-authorname="Garv Chaplot"
                      data-authorurl="https://unsplash.com/@garv_4"
                      data-blurhash="LKE:0n-;00M{00IUxuj[M{t7t7of"
                      data-photoid="96hIuXp5Bcg"
                      src="https://images.unsplash.com/photo-1647598378432-1aa8fa34f37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBvZmZpY2lhbCUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8Mnx8fDE3ODMzNTA3Njh8MA&ixlib=rb-4.1.0&q=80&w=200"
                    />
                  </div>
                  <div className="leading-tight flex flex-col">
                    <span className="font-semibold text-zinc-950 text-sm leading-5">
                      Rajesh Nair
                    </span>
                    <span className="text-[#71717b] text-xs leading-4">
                      District Administrator
                    </span>
                  </div>
                </CardFooter>
              </Card>
              <Card className="shadow-sm rounded-2xl bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="text-[#ff6900] flex gap-1">
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                    <Star className="size-4 fill-primary" />
                  </div>
                  <p className="leading-relaxed text-zinc-950 text-sm leading-5">
                    \"Emergency detection flagged a water contamination cluster
                    days before it escalated. This platform saves lives.\"
                  </p>
                </CardContent>
                <CardFooter className="p-0 gap-3">
                  <div className="size-10 rounded-full overflow-hidden">
                    <img
                      alt="Vikram Menon"
                      className="object-cover w-full h-full"
                      data-authorname="Garv Chaplot"
                      data-authorurl="https://unsplash.com/@garv_4"
                      data-blurhash="LQJRdV_3t7t7IUxuIURj00Rj%MWB"
                      data-photoid="jApVOZn4ahA"
                      src="https://images.unsplash.com/photo-1695185577162-312236628a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBnb3Zlcm5tZW50JTIwb2ZmaWNpYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8Mnx8fDE3ODMzNTA3Njh8MA&ixlib=rb-4.1.0&q=80&w=200"
                    />
                  </div>
                  <div className="leading-tight flex flex-col">
                    <span className="font-semibold text-zinc-950 text-sm leading-5">
                      Vikram Menon
                    </span>
                    <span className="text-[#71717b] text-xs leading-4">
                      Constituency Officer
                    </span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </section>
          <section className="py-16">
            <div className="relative bg-[linear-gradient(135deg,oklch(0.705_0.213_47.604),oklch(0.646_0.222_41.116))] rounded-3xl p-12 overflow-hidden">
              <div className="text-center flex flex-col items-center gap-6">
                <h2 className="max-w-2xl font-extrabold text-orange-50 text-3xl leading-9 tracking-tight">
                  Ready to Build a More Responsive Constituency?
                </h2>
                <p className="max-w-xl text-orange-50/90 text-sm leading-5">
                  Join thousands of citizens and officials using AI to bridge
                  the gap between people and governance.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-3">
                  <Button className="font-semibold rounded-lg bg-white text-[#ff6900] text-sm leading-5 px-6 gap-2 h-11">
                    <FilePlus2 className="size-4" />
                    Submit a Complaint
                  </Button>
                  <Button
                    className="bg-transparent font-semibold rounded-lg text-orange-50 text-sm leading-5 border-orange-50/40 border-0 border-solid px-6 gap-2 h-11"
                    variant="outline"
                  >
                    <LayoutDashboard className="size-4" />
                    Explore Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-[oklch(0.21_0.006_285.885)] text-[oklch(0.985_0_0)]">
          <div className="max-w-[1140px] mx-auto px-8 py-14">
            <div className="grid grid-cols-1 gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="size-9 rounded-lg bg-[#ff6900] text-orange-50 flex justify-center items-center">
                    <Waypoints className="size-5" />
                  </div>
                  <div className="leading-none flex flex-col">
                    <span className="font-bold text-base leading-6">
                      Prathmikta Setu
                    </span>
                    <span className="text-white/60 text-[11px]">{`Bridging Citizens & Governance`}</span>
                  </div>
                </div>
                <p className="leading-relaxed text-white/60 text-sm leading-5">
                  An AI-powered constituency development platform built for
                  transparent, data-driven governance.
                </p>
                <div className="flex items-center gap-3">
                  <div className="size-9 rounded-lg bg-white/10 flex justify-center items-center">
                    <FallbackComponent className="size-4" />
                  </div>
                  <div className="size-9 rounded-lg bg-white/10 flex justify-center items-center">
                    <FallbackComponent className="size-4" />
                  </div>
                  <div className="size-9 rounded-lg bg-white/10 flex justify-center items-center">
                    <FallbackComponent className="size-4" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-semibold text-sm leading-5">
                  Platform
                </span>
                <a className="text-white/60 text-sm leading-5">
                  Submit Complaint
                </a>
                <a className="text-white/60 text-sm leading-5">Public Issues</a>
                <a className="text-white/60 text-sm leading-5">
                  Track Complaint
                </a>
                <a className="text-white/60 text-sm leading-5">Transparency</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-semibold text-sm leading-5">
                  Organization
                </span>
                <a className="text-white/60 text-sm leading-5">About</a>
                <a className="text-white/60 text-sm leading-5">Contact</a>
                <a className="text-white/60 text-sm leading-5">Careers</a>
                <a className="text-white/60 text-sm leading-5">Press</a>
              </div>
              <div className="flex flex-col gap-3">
                <span className="font-semibold text-sm leading-5">Contact</span>
                <div className="text-white/60 text-sm leading-5 flex items-center gap-2">
                  <Mail className="size-4" />
                  support@prathmiktasetu.gov.in
                </div>
                <div className="text-white/60 text-sm leading-5 flex items-center gap-2">
                  <Phone className="size-4" />
                  1800-11-2024
                </div>
                <div className="text-white/60 text-sm leading-5 flex items-center gap-2">
                  <MapPin className="size-4" />
                  New Delhi, India
                </div>
              </div>
            </div>
            <div className="border-white/10 border-t-1 border-r-0 border-b-0 border-l-0 border-solid flex mt-10 pt-6 flex-col justify-between items-center gap-4">
              <div className="text-white/50 text-sm leading-5 flex items-center gap-2">
                <Landmark className="size-4" />
                <span>Government of India Initiative</span>
              </div>
              <span className="text-white/50 text-sm leading-5">
                © 2024 Prathmikta Setu. All rights reserved.
              </span>
              <div className="text-white/50 text-sm leading-5 flex items-center gap-4">
                <a>Privacy</a>
                <a>Terms</a>
                <a>Accessibility</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
