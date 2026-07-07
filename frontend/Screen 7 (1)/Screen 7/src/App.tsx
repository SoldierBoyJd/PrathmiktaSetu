import { useEffect } from "react";
import {
  AlertCircle,
  AlertTriangle,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  CloudRain,
  DollarSign,
  FileText,
  LayoutDashboard,
  Lightbulb,
  Map,
  MapPin,
  Minus,
  MousePointer2,
  PlayCircle,
  Plus,
  RotateCcw,
  Search,
  Settings,
  Sparkles,
  TrafficCone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-[956px] bg-[#F8FAF8] text-zinc-950 flex w-full">
          <aside className="shrink-0 bg-white border-zinc-200 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex px-4 py-6 flex-col w-65">
            <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid flex p-4 items-center gap-3">
              <div className="size-11 rounded-xl bg-[#ff6900] text-orange-50 flex justify-center items-center">
                <Zap className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="leading-none font-semibold text-sm leading-5">
                  Prathmikta Setu
                </div>
                <div className="text-[#71717b] text-xs leading-4 mt-1">{`Bridging Citizens & Governance`}</div>
              </div>
            </div>
            <nav className="flex mt-6 flex-col flex-1 gap-2">
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <LayoutDashboard className="size-4 text-[#71717b]" />
                <span>Dashboard</span>
              </button>
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <Map className="size-4 text-[#71717b]" />
                <span>Heatmap</span>
              </button>
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <BarChart3 className="size-4 text-[#71717b]" />
                <span>Analytics</span>
              </button>
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <AlertCircle className="size-4 text-[#71717b]" />
                <span>Complaints</span>
              </button>
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <Lightbulb className="size-4 text-[#71717b]" />
                <span>Recommendations</span>
              </button>
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <TrendingUp className="size-4 text-[#71717b]" />
                <span>Priority Scores</span>
              </button>
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <DollarSign className="size-4 text-[#71717b]" />
                <span>Budget Optimizer</span>
              </button>
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <AlertTriangle className="size-4 text-[#71717b]" />
                <span>Emergency Alerts</span>
              </button>
              <button className="shadow-sm font-medium rounded-xl bg-[#ff6900] text-orange-50 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <Zap className="size-4" />
                <span>Digital Twin</span>
              </button>
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <FileText className="size-4 text-[#71717b]" />
                <span>Reports</span>
              </button>
              <button className="transition-colors font-medium rounded-xl text-zinc-950 text-sm leading-5 flex px-4 py-3 items-center gap-3">
                <Settings className="size-4 text-[#71717b]" />
                <span>Settings</span>
              </button>
            </nav>
            <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-4">
              <div className="font-medium text-sm leading-5">
                Verified Portal
              </div>
              <div className="text-[#71717b] text-xs leading-4 mt-1">
                Government of India · Constituency Development Cell
              </div>
            </div>
          </aside>
          <main className="min-w-0 flex flex-col flex-1">
            <header className="sticky z-20 backdrop-blur-sm bg-[#F8FAF8]/95 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0">
              <div className="flex px-8 py-5 justify-between items-center gap-4">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <h1 className="font-semibold text-2xl leading-8 tracking-tight">
                      Digital Twin
                    </h1>
                    <span className="inline-flex font-medium rounded-full bg-emerald-50 text-emerald-700 text-xs leading-4 border-emerald-200 border-1 border-solid px-3 py-1 items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500" />
                      Live Simulation
                    </span>
                  </div>
                  <p className="max-w-3xl text-[#71717b] text-sm leading-5 mt-1">
                    Interactive 3D simulation of constituency infrastructure for
                    forecasting and impact analysis
                  </p>
                </div>
                <div className="flex items-center gap-3 w-90">
                  <div className="relative flex-1">
                    <Search className="pointer-events-none top-1/2 size-4 -translate-y-1/2 text-[#71717b] absolute left-3" />
                    <input
                      className="outline-none ring-0 rounded-xl bg-white text-sm leading-5 border-zinc-200 border-1 border-solid pl-10 pr-4 w-full h-11"
                      placeholder="Search wards, projects, or layers"
                    />
                  </div>
                </div>
              </div>
            </header>
            <div className="px-8 py-6 flex-1">
              <div className="grid grid-cols-[minmax(0,1fr)_320px] gap-6">
                <section className="min-w-0">
                  <Card className="shadow-sm bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-2">
                      <div className="flex justify-between items-center gap-4">
                        <div>
                          <CardTitle className="text-lg leading-7">
                            Constituency 3D Model
                          </CardTitle>
                          <CardDescription>
                            Isometric infrastructure, terrain, and live risk
                            overlays
                          </CardDescription>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Button
                            className="rounded-full text-xs leading-4 px-4 h-9"
                            variant="secondary"
                          >
                            Infrastructure
                          </Button>
                          <Button
                            className="rounded-full text-xs leading-4 px-4 h-9"
                            variant="outline"
                          >
                            Drainage
                          </Button>
                          <Button
                            className="rounded-full text-xs leading-4 px-4 h-9"
                            variant="outline"
                          >
                            Traffic
                          </Button>
                          <Button
                            className="rounded-full text-xs leading-4 px-4 h-9"
                            variant="outline"
                          >
                            Population Density
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 gap-4">
                      <div className="relative rounded-2xl bg-[#f57c00]/8 border-zinc-200 border-1 border-solid p-4 overflow-hidden">
                        <div className="z-10 shadow-sm rounded-full bg-white/90 text-xs leading-4 border-zinc-200 border-1 border-solid flex absolute left-4 top-4 px-3 py-2 items-center gap-2">
                          <MousePointer2 className="size-3.5 text-[#ff6900]" />
                          <span>Orbit</span>
                          <span className="text-[#71717b]">·</span>
                          <span>Zoom</span>
                          <span className="text-[#71717b]">·</span>
                          <span>Pan</span>
                        </div>
                        <div className="z-10 shadow-sm rounded-2xl bg-white/90 border-zinc-200 border-1 border-solid flex absolute right-4 top-4 p-2 flex-col gap-2">
                          <button className="size-9 rounded-xl flex justify-center items-center">
                            <Plus className="size-4" />
                          </button>
                          <button className="size-9 rounded-xl flex justify-center items-center">
                            <Minus className="size-4" />
                          </button>
                          <button className="size-9 rounded-xl flex justify-center items-center">
                            <RotateCcw className="size-4" />
                          </button>
                        </div>
                        <div className="relative rounded-2xl bg-[#f57c00]/18 border-zinc-200 border-1 border-solid h-130 overflow-hidden">
                          <div className="opacity-40 bg-white/35 absolute inset-0" />
                          <div className="left-[10%] top-[18%] shadow-[0_18px_30px_rgba(0,0,0,0.08)] rounded-xl bg-[#d9e2d8] absolute w-28 h-24" />
                          <div className="left-[22%] top-[28%] shadow-[0_18px_30px_rgba(0,0,0,0.08)] rounded-lg bg-[#cfd8cf] absolute w-20 h-20" />
                          <div className="left-[38%] top-[16%] shadow-[0_18px_30px_rgba(0,0,0,0.08)] rounded-xl bg-[#e7d7c8] absolute w-24 h-28" />
                          <div className="left-[56%] top-[24%] shadow-[0_18px_30px_rgba(0,0,0,0.08)] rounded-xl bg-[#d8e6d8] absolute w-28 h-24" />
                          <div className="left-[72%] top-[18%] shadow-[0_18px_30px_rgba(0,0,0,0.08)] rounded-xl bg-[#d7d0c8] absolute w-24 h-20" />
                          <div className="left-[14%] top-[58%] w-[72%] opacity-70 rounded-full bg-[#8b9b8d] absolute h-3" />
                          <div className="left-[12%] top-[62%] w-[76%] rounded-full bg-[#f57c00]/70 absolute h-2" />
                          <div className="left-[18%] top-[66%] w-[68%] rounded-full bg-[#1e8e3e]/70 absolute h-2" />
                          <div className="left-[8%] top-[48%] blur-2xl rounded-full bg-[#1e8e3e]/20 absolute w-28 h-28" />
                          <div className="left-[62%] top-[42%] blur-2xl rounded-full bg-[#f57c00]/20 absolute w-28 h-28" />
                          <div className="left-[28%] top-[30%] size-10 shadow-lg rounded-full bg-[#ff6900] text-orange-50 border-white border-4 border-solid flex absolute justify-center items-center">
                            <AlertTriangle className="size-4" />
                          </div>
                          <div className="left-[48%] top-[22%] size-10 shadow-lg rounded-full bg-emerald-600 text-white border-white border-4 border-solid flex absolute justify-center items-center">
                            <CheckCircle2 className="size-4" />
                          </div>
                          <div className="left-[66%] top-[34%] size-10 shadow-lg rounded-full bg-[#ff6900] text-orange-50 border-white border-4 border-solid flex absolute justify-center items-center">
                            <MapPin className="size-4" />
                          </div>
                          <div className="shadow-sm rounded-2xl bg-white/90 border-zinc-200 border-1 border-solid absolute left-4 bottom-4 px-4 py-3">
                            <div className="font-medium text-xs leading-4">
                              Risk Zones
                            </div>
                            <div className="text-[#71717b] text-xs leading-4 flex mt-2 items-center gap-3">
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
                    </CardContent>
                  </Card>
                  <div className="grid grid-cols-3 mt-6 gap-4">
                    <Card className="shadow-sm bg-white border-zinc-200 border-0 border-solid p-4 gap-3">
                      <CardHeader className="p-0 gap-2">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                            <CloudRain className="size-5" />
                          </div>
                          <div>
                            <CardTitle className="text-sm leading-5">
                              Flood Impact Simulation
                            </CardTitle>
                            <CardDescription>
                              Drainage overflow and low-lying wards
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 gap-2">
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>View in 3D</span>
                          <ChevronRight className="size-4 text-[#ff6900]" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm bg-white border-zinc-200 border-0 border-solid p-4 gap-3">
                      <CardHeader className="p-0 gap-2">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex justify-center items-center">
                            <TrafficCone className="size-5" />
                          </div>
                          <div>
                            <CardTitle className="text-sm leading-5">
                              Traffic Congestion Forecast
                            </CardTitle>
                            <CardDescription>
                              Peak-hour flow and bottleneck analysis
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 gap-2">
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>View in 3D</span>
                          <ChevronRight className="size-4 text-[#ff6900]" />
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm bg-white border-zinc-200 border-0 border-solid p-4 gap-3">
                      <CardHeader className="p-0 gap-2">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                            <Building2 className="size-5" />
                          </div>
                          <div>
                            <CardTitle className="text-sm leading-5">
                              Infrastructure Aging Model
                            </CardTitle>
                            <CardDescription>
                              Asset wear, repair urgency, and lifespan
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-0 gap-2">
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>View in 3D</span>
                          <ChevronRight className="size-4 text-[#ff6900]" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </section>
                <aside className="sticky top-27 h-fit">
                  <Card className="shadow-sm bg-white border-zinc-200 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-2">
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg leading-7">
                            Forecast Impact
                          </CardTitle>
                          <CardDescription>
                            Proposed project simulation and outcomes
                          </CardDescription>
                        </div>
                        <Sparkles className="size-5 text-[#ff6900]" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 gap-4">
                      <div className="rounded-2xl bg-white border-zinc-200 border-1 border-solid p-3 overflow-hidden">
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Before</span>
                          <span>After</span>
                        </div>
                        <div className="grid grid-cols-2 mt-3 gap-3">
                          <div className="rounded-xl bg-zinc-100 p-3">
                            <div className="bg-[linear-gradient(180deg,#d9d9d9,#bfc7bf)] rounded-lg h-28" />
                          </div>
                          <div className="rounded-xl bg-[#1e8e3e]/12 p-3">
                            <div className="bg-[linear-gradient(180deg,#cfe7d4,#a9cdb0)] rounded-lg h-28" />
                          </div>
                        </div>
                      </div>
                      <div className="grid gap-3">
                        <div className="rounded-xl bg-white border-zinc-200 border-1 border-solid p-4">
                          <div className="text-[#71717b] text-xs leading-4">
                            Citizens affected
                          </div>
                          <div className="font-semibold text-2xl leading-8 mt-1">
                            42,800
                          </div>
                        </div>
                        <div className="rounded-xl bg-white border-zinc-200 border-1 border-solid p-4">
                          <div className="text-[#71717b] text-xs leading-4">
                            Cost estimate
                          </div>
                          <div className="font-semibold text-2xl leading-8 mt-1">
                            ₹3.4Cr
                          </div>
                        </div>
                        <div className="rounded-xl bg-white border-zinc-200 border-1 border-solid p-4">
                          <div className="text-[#71717b] text-xs leading-4">
                            Completion timeline
                          </div>
                          <div className="font-semibold text-2xl leading-8 mt-1">
                            18 weeks
                          </div>
                        </div>
                      </div>
                      <Button className="rounded-xl bg-[#ff6900] text-orange-50 w-full h-11">
                        <PlayCircle className="size-4 mr-2" />
                        Run Simulation
                      </Button>
                    </CardContent>
                  </Card>
                </aside>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
