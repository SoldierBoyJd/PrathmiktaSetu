import { useEffect } from "react";
import {
  AlertCircle,
  AlertTriangle,
  BarChart3,
  Check,
  DollarSign,
  Droplets,
  FileText,
  LampCeiling,
  LayoutDashboard,
  Lightbulb,
  Map,
  Recycle,
  School,
  Settings,
  TrafficCone,
  TrendingUp,
  Waves,
  X,
  Zap,
} from "lucide-react";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-[956px] bg-[#F8FAF8] text-zinc-950 flex w-full">
          <aside className="shrink-0 bg-white border-zinc-200 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex px-4 py-6 flex-col w-65">
            <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid flex mb-6 p-4 items-center gap-3">
              <div className="size-11 rounded-xl bg-[#ff6900] text-orange-50 flex justify-center items-center">
                <Lightbulb className="size-5" />
              </div>
              <div className="space-y-1">
                <div className="leading-none font-semibold text-sm leading-5">
                  Prathmikta Setu
                </div>
                <div className="text-[#71717b] text-xs leading-4">{`Bridging Citizens & Governance`}</div>
              </div>
            </div>
            <nav className="flex flex-col flex-1 gap-2">
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <LayoutDashboard className="size-4 text-[#71717b]" />
                <span>Dashboard</span>
              </div>
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <Map className="size-4 text-[#71717b]" />
                <span>Heatmap</span>
              </div>
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <BarChart3 className="size-4 text-[#71717b]" />
                <span>Analytics</span>
              </div>
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <AlertCircle className="size-4 text-[#71717b]" />
                <span>Complaints</span>
              </div>
              <div className="shadow-sm font-semibold rounded-xl bg-[#ff6900] text-orange-50 text-sm leading-5 flex p-3 items-center gap-3">
                <Lightbulb className="size-4" />
                <span>Recommendations</span>
              </div>
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <TrendingUp className="size-4 text-[#71717b]" />
                <span>Priority Scores</span>
              </div>
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <DollarSign className="size-4 text-[#71717b]" />
                <span>Budget Optimizer</span>
              </div>
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <AlertTriangle className="size-4 text-[#71717b]" />
                <span>Emergency Alerts</span>
              </div>
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <Zap className="size-4 text-[#71717b]" />
                <span>Digital Twin</span>
              </div>
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <FileText className="size-4 text-[#71717b]" />
                <span>Reports</span>
              </div>
              <div className="font-medium rounded-xl text-zinc-950 text-sm leading-5 flex p-3 items-center gap-3">
                <Settings className="size-4 text-[#71717b]" />
                <span>Settings</span>
              </div>
            </nav>
            <div className="rounded-2xl bg-zinc-100/40 border-zinc-200 border-1 border-solid mt-6 p-4">
              <div className="font-medium text-[#71717b] text-xs leading-4">
                AI-assisted governance
              </div>
              <div className="font-semibold text-sm leading-5 mt-2">
                Prioritize high-impact civic fixes with confidence.
              </div>
            </div>
          </aside>
          <div className="min-w-0 flex flex-col flex-1">
            <header className="sticky z-20 backdrop-blur-sm bg-[#F8FAF8]/95 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0">
              <div className="flex px-8 py-5 justify-between items-center gap-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h1 className="font-semibold text-3xl leading-9 tracking-tight">
                      AI Recommendations
                    </h1>
                    <span className="font-medium rounded-full bg-zinc-100 text-zinc-900 text-xs leading-4 px-3 py-1">
                      Live prioritization
                    </span>
                  </div>
                  <p className="text-[#71717b] text-sm leading-5">
                    Data-driven project suggestions ranked by impact and urgency
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="shadow-sm rounded-xl bg-white text-[#71717b] text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-3">
                    By Ward
                  </div>
                  <div className="shadow-sm rounded-xl bg-white text-[#71717b] text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-3">
                    Category
                  </div>
                  <div className="shadow-sm rounded-xl bg-white text-[#71717b] text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-3">
                    Confidence Level
                  </div>
                </div>
              </div>
            </header>
            <main className="p-8 flex-1">
              <div className="grid grid-cols-12 gap-6">
                <section className="col-span-9 space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="text-[#71717b] text-sm leading-5">
                            Total recommendations
                          </div>
                          <div className="font-semibold text-3xl leading-9 tracking-tight">
                            18
                          </div>
                        </div>
                        <div className="size-11 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                          <Lightbulb className="size-5" />
                        </div>
                      </div>
                    </div>
                    <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="text-[#71717b] text-sm leading-5">
                            Average confidence
                          </div>
                          <div className="font-semibold text-3xl leading-9 tracking-tight">
                            87%
                          </div>
                        </div>
                        <div className="size-11 rounded-xl bg-zinc-100 text-zinc-900 flex justify-center items-center">
                          <TrendingUp className="size-5" />
                        </div>
                      </div>
                    </div>
                    <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                      <div className="flex justify-between items-center">
                        <div className="space-y-1">
                          <div className="text-[#71717b] text-sm leading-5">
                            Estimated budget impact
                          </div>
                          <div className="font-semibold text-3xl leading-9 tracking-tight">
                            ₹12.4Cr
                          </div>
                        </div>
                        <div className="size-11 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                          <DollarSign className="size-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3">
                          <div className="size-11 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                            <Waves className="size-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                              Ward 12 · Drainage
                            </div>
                            <div className="leading-tight font-semibold text-lg leading-7">
                              Upgrade drainage system in Ward 12
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                          92% confidence
                        </div>
                      </div>
                      <p className="text-[#71717b] text-sm leading-6 mt-4">
                        Recurring complaints during monsoon indicate blocked
                        stormwater channels and localized flooding near schools
                        and markets.
                      </p>
                      <div className="grid grid-cols-2 text-sm leading-5 mt-5 gap-3">
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">Estimated cost</div>
                          <div className="font-semibold mt-1">₹2.8Cr</div>
                        </div>
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">
                            Citizens impacted
                          </div>
                          <div className="font-semibold mt-1">18,400</div>
                        </div>
                      </div>
                      <div className="flex mt-5 gap-3">
                        <button className="inline-flex shadow-sm font-semibold rounded-xl bg-[#ff6900] text-orange-50 text-sm leading-5 px-4 py-3 justify-center items-center flex-1 gap-2">
                          <Check className="size-4" />
                          Approve
                        </button>
                        <button className="inline-flex font-semibold rounded-xl bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-3 justify-center items-center flex-1 gap-2">
                          <X className="size-4" />
                          Dismiss
                        </button>
                      </div>
                    </div>
                    <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3">
                          <div className="size-11 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                            <TrafficCone className="size-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                              Ward 8 · Roads
                            </div>
                            <div className="leading-tight font-semibold text-lg leading-7">
                              Resurface pothole clusters on arterial roads
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                          89% confidence
                        </div>
                      </div>
                      <p className="text-[#71717b] text-sm leading-6 mt-4">
                        Complaint spikes and vehicle damage reports suggest
                        urgent resurfacing on routes with heavy bus and
                        ambulance traffic.
                      </p>
                      <div className="grid grid-cols-2 text-sm leading-5 mt-5 gap-3">
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">Estimated cost</div>
                          <div className="font-semibold mt-1">₹1.9Cr</div>
                        </div>
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">
                            Citizens impacted
                          </div>
                          <div className="font-semibold mt-1">12,700</div>
                        </div>
                      </div>
                      <div className="flex mt-5 gap-3">
                        <button className="inline-flex shadow-sm font-semibold rounded-xl bg-[#ff6900] text-orange-50 text-sm leading-5 px-4 py-3 justify-center items-center flex-1 gap-2">
                          <Check className="size-4" />
                          Approve
                        </button>
                        <button className="inline-flex font-semibold rounded-xl bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-3 justify-center items-center flex-1 gap-2">
                          <X className="size-4" />
                          Dismiss
                        </button>
                      </div>
                    </div>
                    <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3">
                          <div className="size-11 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                            <LampCeiling className="size-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                              Ward 5 · Lighting
                            </div>
                            <div className="leading-tight font-semibold text-lg leading-7">
                              Replace non-functional streetlights near transit
                              stops
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                          84% confidence
                        </div>
                      </div>
                      <p className="text-[#71717b] text-sm leading-6 mt-4">
                        Night-time safety complaints cluster around bus stops
                        and footpaths, with repeated reports of dark stretches
                        and near misses.
                      </p>
                      <div className="grid grid-cols-2 text-sm leading-5 mt-5 gap-3">
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">Estimated cost</div>
                          <div className="font-semibold mt-1">₹68L</div>
                        </div>
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">
                            Citizens impacted
                          </div>
                          <div className="font-semibold mt-1">9,200</div>
                        </div>
                      </div>
                      <div className="flex mt-5 gap-3">
                        <button className="inline-flex shadow-sm font-semibold rounded-xl bg-[#ff6900] text-orange-50 text-sm leading-5 px-4 py-3 justify-center items-center flex-1 gap-2">
                          <Check className="size-4" />
                          Approve
                        </button>
                        <button className="inline-flex font-semibold rounded-xl bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-3 justify-center items-center flex-1 gap-2">
                          <X className="size-4" />
                          Dismiss
                        </button>
                      </div>
                    </div>
                    <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3">
                          <div className="size-11 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                            <Droplets className="size-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                              Ward 19 · Water Supply
                            </div>
                            <div className="leading-tight font-semibold text-lg leading-7">
                              Repair leaking mains in high-demand blocks
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                          81% confidence
                        </div>
                      </div>
                      <p className="text-[#71717b] text-sm leading-6 mt-4">
                        Frequent low-pressure complaints and tanker dependency
                        point to aging mains and valve failures in dense
                        residential pockets.
                      </p>
                      <div className="grid grid-cols-2 text-sm leading-5 mt-5 gap-3">
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">Estimated cost</div>
                          <div className="font-semibold mt-1">₹1.2Cr</div>
                        </div>
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">
                            Citizens impacted
                          </div>
                          <div className="font-semibold mt-1">15,600</div>
                        </div>
                      </div>
                      <div className="flex mt-5 gap-3">
                        <button className="inline-flex shadow-sm font-semibold rounded-xl bg-[#ff6900] text-orange-50 text-sm leading-5 px-4 py-3 justify-center items-center flex-1 gap-2">
                          <Check className="size-4" />
                          Approve
                        </button>
                        <button className="inline-flex font-semibold rounded-xl bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-3 justify-center items-center flex-1 gap-2">
                          <X className="size-4" />
                          Dismiss
                        </button>
                      </div>
                    </div>
                    <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3">
                          <div className="size-11 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                            <Recycle className="size-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                              Ward 3 · Sanitation
                            </div>
                            <div className="leading-tight font-semibold text-lg leading-7">
                              Increase waste pickup frequency in market zones
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                          78% confidence
                        </div>
                      </div>
                      <p className="text-[#71717b] text-sm leading-6 mt-4">
                        Odor and overflow complaints peak on weekends,
                        especially around commercial corridors and food stalls.
                      </p>
                      <div className="grid grid-cols-2 text-sm leading-5 mt-5 gap-3">
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">Estimated cost</div>
                          <div className="font-semibold mt-1">₹44L</div>
                        </div>
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">
                            Citizens impacted
                          </div>
                          <div className="font-semibold mt-1">7,800</div>
                        </div>
                      </div>
                      <div className="flex mt-5 gap-3">
                        <button className="inline-flex shadow-sm font-semibold rounded-xl bg-[#ff6900] text-orange-50 text-sm leading-5 px-4 py-3 justify-center items-center flex-1 gap-2">
                          <Check className="size-4" />
                          Approve
                        </button>
                        <button className="inline-flex font-semibold rounded-xl bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-3 justify-center items-center flex-1 gap-2">
                          <X className="size-4" />
                          Dismiss
                        </button>
                      </div>
                    </div>
                    <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-center gap-3">
                          <div className="size-11 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                            <School className="size-5" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                              Ward 14 · Education
                            </div>
                            <div className="leading-tight font-semibold text-lg leading-7">
                              Upgrade school boundary wall and lighting
                            </div>
                          </div>
                        </div>
                        <div className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                          76% confidence
                        </div>
                      </div>
                      <p className="text-[#71717b] text-sm leading-6 mt-4">
                        Safety-related complaints from parents and staff
                        indicate a need for perimeter reinforcement and better
                        illumination.
                      </p>
                      <div className="grid grid-cols-2 text-sm leading-5 mt-5 gap-3">
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">Estimated cost</div>
                          <div className="font-semibold mt-1">₹96L</div>
                        </div>
                        <div className="rounded-xl bg-zinc-100 p-3">
                          <div className="text-[#71717b]">
                            Citizens impacted
                          </div>
                          <div className="font-semibold mt-1">5,100</div>
                        </div>
                      </div>
                      <div className="flex mt-5 gap-3">
                        <button className="inline-flex shadow-sm font-semibold rounded-xl bg-[#ff6900] text-orange-50 text-sm leading-5 px-4 py-3 justify-center items-center flex-1 gap-2">
                          <Check className="size-4" />
                          Approve
                        </button>
                        <button className="inline-flex font-semibold rounded-xl bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-3 justify-center items-center flex-1 gap-2">
                          <X className="size-4" />
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                <aside className="col-span-3 space-y-6">
                  <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                    <div className="flex items-center gap-3">
                      <div className="size-11 rounded-xl bg-[#ff6900] text-orange-50 flex justify-center items-center">
                        <Lightbulb className="size-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm leading-5">
                          AI Insight of the Day
                        </div>
                        <div className="text-[#71717b] text-xs leading-4">
                          Complaint trends to action
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-zinc-100 mt-5 p-4">
                      <div className="text-zinc-950 text-sm leading-6">
                        Drainage and road complaints are rising together in
                        low-lying wards, suggesting a combined infrastructure
                        intervention will deliver the highest impact this week.
                      </div>
                    </div>
                    <div className="space-y-3 mt-5">
                      <div className="rounded-xl bg-zinc-100/40 border-zinc-200 border-1 border-solid flex px-4 py-3 justify-between items-center">
                        <span className="text-[#71717b] text-sm leading-5">
                          Top recommendation
                        </span>
                        <span className="font-semibold text-zinc-950 text-sm leading-5">
                          Ward 12 drainage
                        </span>
                      </div>
                      <div className="rounded-xl bg-zinc-100/40 border-zinc-200 border-1 border-solid flex px-4 py-3 justify-between items-center">
                        <span className="text-[#71717b] text-sm leading-5">
                          Confidence uplift
                        </span>
                        <span className="font-semibold text-[#ff6900] text-sm leading-5">
                          +6% this week
                        </span>
                      </div>
                      <div className="rounded-xl bg-zinc-100/40 border-zinc-200 border-1 border-solid flex px-4 py-3 justify-between items-center">
                        <span className="text-[#71717b] text-sm leading-5">
                          Projected benefit
                        </span>
                        <span className="font-semibold text-zinc-950 text-sm leading-5">
                          18,400 citizens
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-sm leading-5">
                          Priority signals
                        </div>
                        <div className="text-[#71717b] text-xs leading-4">
                          What the model is seeing
                        </div>
                      </div>
                      <BarChart3 className="size-5 text-[#ff6900]" />
                    </div>
                    <div className="space-y-4 mt-5">
                      <div>
                        <div className="text-sm leading-5 flex mb-2 justify-between items-center">
                          <span className="text-[#71717b]">Drainage</span>
                          <span className="font-semibold">94%</span>
                        </div>
                        <div className="rounded-full bg-zinc-100 h-2">
                          <div className="w-[94%] rounded-full bg-[#ff6900] h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm leading-5 flex mb-2 justify-between items-center">
                          <span className="text-[#71717b]">Roads</span>
                          <span className="font-semibold">89%</span>
                        </div>
                        <div className="rounded-full bg-zinc-100 h-2">
                          <div className="w-[89%] rounded-full bg-[#ff6900] h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-sm leading-5 flex mb-2 justify-between items-center">
                          <span className="text-[#71717b]">Lighting</span>
                          <span className="font-semibold">84%</span>
                        </div>
                        <div className="rounded-full bg-zinc-100 h-2">
                          <div className="w-[84%] rounded-full bg-[#ff6900] h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                    <div className="font-semibold text-sm leading-5">
                      Recommended next step
                    </div>
                    <p className="text-[#71717b] text-sm leading-6 mt-2">
                      Approve the top three recommendations to address recurring
                      complaints in the most affected wards before the next
                      monsoon cycle.
                    </p>
                  </div>
                </aside>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
