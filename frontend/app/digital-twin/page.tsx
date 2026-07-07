"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";
import {
  CloudRain, TrafficCone, Building2, AlertTriangle, CheckCircle2,
  MapPin, MousePointer2, Plus, Minus, RotateCcw, PlayCircle,
  Sparkles, ChevronRight, Search, Zap,
} from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from "recharts";

const LAYERS = ["Infrastructure", "Drainage", "Traffic", "Population Density"];

const simData = [
  { month: "Jul", baseline: 1200, optimized: 980 },
  { month: "Aug", baseline: 1350, optimized: 1050 },
  { month: "Sep", baseline: 1180, optimized: 920 },
  { month: "Oct", baseline: 1420, optimized: 1080 },
  { month: "Nov", baseline: 1500, optimized: 1120 },
  { month: "Dec", baseline: 1280, optimized: 960 },
];

const scenarios = [
  {
    icon: <CloudRain className="size-5 text-[#ff6900]" />,
    iconBg: "bg-[#ff6900]/10",
    title: "Flood Impact Simulation",
    desc: "Drainage overflow and low-lying wards",
  },
  {
    icon: <TrafficCone className="size-5 text-emerald-600" />,
    iconBg: "bg-emerald-500/10",
    title: "Traffic Congestion Forecast",
    desc: "Peak-hour flow and bottleneck analysis",
  },
  {
    icon: <Building2 className="size-5 text-[#ff6900]" />,
    iconBg: "bg-[#ff6900]/10",
    title: "Infrastructure Aging Model",
    desc: "Asset wear, repair urgency, and lifespan",
  },
];

// Isometric-style SVG buildings representing a constituency
function IsometricMap() {
  const buildings = [
    { x: "10%", y: "18%", w: "w-28", h: "h-24", bg: "#d9e2d8" },
    { x: "22%", y: "28%", w: "w-20", h: "h-20", bg: "#cfd8cf" },
    { x: "38%", y: "16%", w: "w-24", h: "h-28", bg: "#e7d7c8" },
    { x: "56%", y: "24%", w: "w-28", h: "h-24", bg: "#d8e6d8" },
    { x: "72%", y: "18%", w: "w-24", h: "h-20", bg: "#d7d0c8" },
  ];

  return (
    <div className="relative rounded-2xl bg-[#f57c00]/8 border border-zinc-200 p-4 overflow-hidden">
      {/* Controls label */}
      <div className="z-10 shadow-sm rounded-full bg-white/90 text-xs border border-zinc-200 flex absolute left-4 top-4 px-3 py-2 items-center gap-2">
        <MousePointer2 className="size-3.5 text-[#ff6900]" />
        <span>Orbit</span>
        <span className="text-[#71717b]">·</span>
        <span>Zoom</span>
        <span className="text-[#71717b]">·</span>
        <span>Pan</span>
      </div>

      {/* Zoom/rotate controls */}
      <div className="z-10 shadow-sm rounded-2xl bg-white/90 border border-zinc-200 flex absolute right-4 top-4 p-2 flex-col gap-1">
        <button className="size-9 rounded-xl hover:bg-zinc-50 flex justify-center items-center transition-colors">
          <Plus className="size-4 text-zinc-700" />
        </button>
        <button className="size-9 rounded-xl hover:bg-zinc-50 flex justify-center items-center transition-colors">
          <Minus className="size-4 text-zinc-700" />
        </button>
        <button className="size-9 rounded-xl hover:bg-zinc-50 flex justify-center items-center transition-colors">
          <RotateCcw className="size-4 text-zinc-700" />
        </button>
      </div>

      {/* 3D viewport */}
      <div className="relative rounded-2xl bg-[#f57c00]/18 border border-zinc-200 overflow-hidden" style={{ height: 380 }}>
        {/* Ambient overlay */}
        <div className="opacity-40 bg-white/35 absolute inset-0 pointer-events-none" />

        {/* Ground grid lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.18 }}>
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={`v${i}`} x1={`${i * 11}%`} y1="0" x2={`${i * 11}%`} y2="100%" stroke="#8b9b8d" strokeWidth="0.8" />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={`${i * 14}%`} x2="100%" y2={`${i * 14}%`} stroke="#8b9b8d" strokeWidth="0.8" />
          ))}
        </svg>

        {/* Buildings (isometric blocks) */}
        {buildings.map((b, i) => (
          <div
            key={i}
            className={`${b.w} ${b.h} absolute rounded-xl shadow-[0_18px_30px_rgba(0,0,0,0.08)]`}
            style={{ left: b.x, top: b.y, background: b.bg }}
          />
        ))}

        {/* Roads */}
        <div className="left-[14%] top-[58%] w-[72%] opacity-70 rounded-full bg-[#8b9b8d] absolute h-3" />
        <div className="left-[12%] top-[62%] w-[76%] rounded-full absolute h-2" style={{ background: "rgba(255,105,0,0.7)" }} />
        <div className="left-[18%] top-[66%] w-[68%] rounded-full absolute h-2" style={{ background: "rgba(30,142,62,0.7)" }} />

        {/* Risk zone blurs */}
        <div className="left-[8%] top-[48%] blur-2xl rounded-full absolute w-28 h-28" style={{ background: "rgba(30,142,62,0.2)" }} />
        <div className="left-[62%] top-[42%] blur-2xl rounded-full absolute w-28 h-28" style={{ background: "rgba(255,105,0,0.2)" }} />

        {/* Alert pins */}
        <div
          className="size-10 shadow-lg rounded-full bg-[#ff6900] text-orange-50 border-4 border-white flex absolute justify-center items-center"
          style={{ left: "28%", top: "30%" }}
          title="High Risk Zone"
        >
          <AlertTriangle className="size-4" />
        </div>
        <div
          className="size-10 shadow-lg rounded-full bg-emerald-600 text-white border-4 border-white flex absolute justify-center items-center"
          style={{ left: "48%", top: "22%" }}
          title="Stable Zone"
        >
          <CheckCircle2 className="size-4" />
        </div>
        <div
          className="size-10 shadow-lg rounded-full bg-[#ff6900] text-orange-50 border-4 border-white flex absolute justify-center items-center"
          style={{ left: "66%", top: "34%" }}
          title="Issue Cluster"
        >
          <MapPin className="size-4" />
        </div>

        {/* Legend */}
        <div className="shadow-sm rounded-2xl bg-white/90 border border-zinc-200 absolute left-4 bottom-4 px-4 py-3">
          <div className="font-medium text-xs">Risk Zones</div>
          <div className="text-[#71717b] text-xs flex mt-2 items-center gap-3">
            <span className="inline-flex items-center gap-1">
              <span className="size-2 rounded-full bg-[#ff6900]" />
              High-risk
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="size-2 rounded-full bg-emerald-600" />
              Stable
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DigitalTwinPage() {
  const [activeLayer, setActiveLayer] = useState("Infrastructure");

  return (
    <DashboardLayout title="Digital Twin" subtitle="Interactive simulation of constituency infrastructure for forecasting and impact analysis.">
      {/* Live badge + search */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="inline-flex font-medium rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-200 px-3 py-1 items-center gap-2">
          <span className="size-2 rounded-full bg-emerald-500" />
          Live Simulation
        </span>
        <div className="relative w-80">
          <Search className="pointer-events-none top-1/2 size-4 -translate-y-1/2 text-[#71717b] absolute left-3" />
          <input
            className="outline-none rounded-xl bg-white text-sm border border-zinc-200 pl-10 pr-4 w-full h-11 focus:ring-1 focus:ring-[#ff6900] focus:border-[#ff6900]"
            placeholder="Search wards, projects, or layers"
          />
        </div>
      </div>

      <div className="grid grid-cols-[1fr_320px] gap-6">
        {/* Left: 3D model + scenario cards + forecast chart */}
        <section className="min-w-0 flex flex-col gap-6">

          {/* 3D Constituency Model Card */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-4">
            <div className="flex justify-between items-start gap-4 flex-wrap">
              <div>
                <h2 className="font-semibold text-lg text-zinc-950">Constituency 3D Model</h2>
                <p className="text-[#71717b] text-xs mt-0.5">Isometric infrastructure, terrain, and live risk overlays</p>
              </div>
              {/* Layer toggles */}
              <div className="flex flex-wrap items-center gap-2">
                {LAYERS.map(layer => (
                  <button
                    key={layer}
                    onClick={() => setActiveLayer(layer)}
                    className={`rounded-full text-xs px-4 h-9 font-medium transition-colors ${
                      activeLayer === layer
                        ? "bg-[#ff6900] text-orange-50"
                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200"
                    }`}
                  >
                    {layer}
                  </button>
                ))}
              </div>
            </div>

            {/* Isometric viewport */}
            <IsometricMap />
          </div>

          {/* Scenario simulation cards */}
          <div className="grid grid-cols-3 gap-4">
            {scenarios.map(s => (
              <div key={s.title} className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-4 flex flex-col gap-3 hover:shadow-md hover:border-[#ff6900]/30 transition-all group cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className={`size-10 rounded-xl ${s.iconBg} flex justify-center items-center`}>
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-zinc-950 group-hover:text-[#ff6900] transition-colors">{s.title}</p>
                    <p className="text-[#71717b] text-xs leading-tight">{s.desc}</p>
                  </div>
                </div>
                <div className="text-[#71717b] text-xs flex justify-between items-center border-t border-zinc-100 pt-2">
                  <span>View in 3D</span>
                  <ChevronRight className="size-4 text-[#ff6900]" />
                </div>
              </div>
            ))}
          </div>

          {/* Forecast chart */}
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm font-semibold text-zinc-950">Complaints Forecast Simulation</h3>
                <p className="text-xs text-[#71717b] mt-0.5">Projected complaint volume — baseline vs AI-optimized</p>
              </div>
              <button className="text-xs bg-[#ff6900] text-orange-50 px-3 py-1.5 rounded-lg font-semibold flex items-center gap-1.5 hover:bg-orange-600 transition-colors">
                <PlayCircle className="size-3.5" />Run New Simulation
              </button>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={simData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
                <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#71717b" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#71717b" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e4e4e7" }} />
                <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
                <Line type="monotone" dataKey="baseline" name="Baseline" stroke="#a1a1aa" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                <Line type="monotone" dataKey="optimized" name="Optimized" stroke="#ff6900" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-3 p-3 bg-[#ff6900]/5 rounded-xl border border-[#ff6900]/20">
              <p className="text-xs font-semibold text-[#ff6900]">AI Insight</p>
              <p className="text-[11px] text-[#71717b] mt-0.5 leading-relaxed">
                Implementing the optimized maintenance schedule reduces projected complaints by{" "}
                <strong className="text-zinc-950">22%</strong> over 6 months, saving an estimated{" "}
                <strong className="text-zinc-950">₹14.2 Lakhs</strong> in emergency repair costs.
              </p>
            </div>
          </div>
        </section>

        {/* Right: Forecast Impact panel */}
        <aside className="sticky top-[96px] h-fit">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg text-zinc-950">Forecast Impact</h3>
                <p className="text-[#71717b] text-xs mt-0.5">Proposed project simulation and outcomes</p>
              </div>
              <Sparkles className="size-5 text-[#ff6900]" />
            </div>

            {/* Before / After comparison */}
            <div className="rounded-2xl bg-white border border-zinc-200 p-3 overflow-hidden">
              <div className="text-[#71717b] text-xs flex justify-between items-center mb-3">
                <span>Before</span>
                <span>After</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-zinc-100 p-3">
                  <div className="rounded-lg h-28 bg-gradient-to-b from-zinc-300 to-zinc-400 flex items-end justify-center pb-3">
                    <div className="flex gap-1">
                      {[40, 55, 35, 60, 45].map((h, i) => (
                        <div key={i} className="w-3 rounded-t bg-zinc-500" style={{ height: h }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="rounded-xl bg-[#1e8e3e]/12 p-3">
                  <div className="rounded-lg h-28 bg-gradient-to-b from-emerald-100 to-emerald-200 flex items-end justify-center pb-3">
                    <div className="flex gap-1">
                      {[25, 35, 22, 40, 28].map((h, i) => (
                        <div key={i} className="w-3 rounded-t bg-emerald-500" style={{ height: h }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact metrics */}
            <div className="grid gap-3">
              {[
                { label: "Citizens affected", value: "42,800", icon: "👥" },
                { label: "Cost estimate", value: "₹3.4 Cr", icon: "💰" },
                { label: "Completion timeline", value: "18 weeks", icon: "📅" },
              ].map(m => (
                <div key={m.label} className="rounded-xl bg-white border border-zinc-200 p-4 flex items-center gap-3">
                  <span className="text-xl">{m.icon}</span>
                  <div>
                    <div className="text-[#71717b] text-xs">{m.label}</div>
                    <div className="font-bold text-xl text-zinc-950 mt-0.5">{m.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Complaint reduction indicator */}
            <div className="rounded-xl bg-[#1e8e3e]/8 border border-[#1e8e3e]/20 p-4 flex items-center gap-3">
              <Zap className="size-5 text-[#1E8E3E] shrink-0" />
              <div>
                <p className="text-xs font-semibold text-[#1E8E3E]">Projected Improvement</p>
                <p className="text-[11px] text-[#71717b] mt-0.5 leading-relaxed">
                  Expected <strong className="text-zinc-950">−22% complaints</strong> and <strong className="text-zinc-950">−31% emergency alerts</strong> post-completion.
                </p>
              </div>
            </div>

            {/* Run button */}
            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#ff6900] text-orange-50 w-full h-11 font-semibold text-sm hover:bg-orange-600 transition-colors">
              <PlayCircle className="size-4" />
              Run Simulation
            </button>
          </div>
        </aside>
      </div>
    </DashboardLayout>
  );
}
