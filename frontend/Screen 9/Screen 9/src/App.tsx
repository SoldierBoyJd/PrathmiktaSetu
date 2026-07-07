import { useEffect } from "react";
import {
  AlertCircle,
  AlertTriangle,
  BarChart3,
  ChevronDown,
  DollarSign,
  Droplets,
  FileText,
  LayoutDashboard,
  Lightbulb,
  Map,
  Settings,
  TrendingUp,
  Waves,
  Zap,
} from "lucide-react";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-[956px] bg-[#F8FAF8] text-zinc-950 flex w-full">
          <aside className="shrink-0 bg-white border-zinc-200 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex px-4 py-6 flex-col w-65">
            <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid flex mb-6 p-4 items-center gap-3">
              <div className="size-10 rounded-xl bg-[#ff6900] text-orange-50 flex justify-center items-center">
                <TrendingUp className="size-5" />
              </div>
              <div className="min-w-0">
                <div className="leading-none font-semibold text-sm leading-5">
                  Prathmikta Setu
                </div>
                <div className="text-[#71717b] text-xs leading-4 mt-1">{`Bridging Citizens & Governance`}</div>
              </div>
            </div>
            <nav className="flex flex-col flex-1 gap-2">
              <div className="shadow-sm rounded-xl bg-[#ff6900] text-orange-50 flex px-4 py-3 items-center gap-3">
                <LayoutDashboard className="size-4" />
                <span className="font-medium text-sm leading-5">Dashboard</span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <Map className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">Heatmap</span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <BarChart3 className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">Analytics</span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <AlertCircle className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">
                  Complaints
                </span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <Lightbulb className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">
                  Recommendations
                </span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <TrendingUp className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">
                  Priority Scores
                </span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <DollarSign className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">
                  Budget Optimizer
                </span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <AlertTriangle className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">
                  Emergency Alerts
                </span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <Zap className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">
                  Digital Twin
                </span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <FileText className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">Reports</span>
              </div>
              <div className="rounded-xl text-zinc-950 flex px-4 py-3 items-center gap-3">
                <Settings className="size-4 text-[#71717b]" />
                <span className="font-medium text-sm leading-5">Settings</span>
              </div>
            </nav>
            <div className="rounded-2xl bg-zinc-100 border-zinc-200 border-1 border-solid mt-6 p-4">
              <div className="font-medium uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                AI Ranking
              </div>
              <div className="font-semibold text-sm leading-5 mt-2">
                Urgency, impact, and cost-efficiency
              </div>
            </div>
          </aside>
          <div className="min-w-0 flex flex-col flex-1">
            <header className="sticky z-20 backdrop-blur-sm bg-[#F8FAF8]/95 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0">
              <div className="flex px-8 py-5 justify-between items-center gap-4">
                <div>
                  <h1 className="font-semibold text-3xl leading-9 tracking-tight">
                    Priority Scores
                  </h1>
                  <p className="text-[#71717b] text-sm leading-5 mt-1">
                    AI-ranked issues by urgency, impact, and cost-efficiency
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="shadow-sm rounded-xl bg-white text-[#71717b] text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-2">
                    Highest Score
                  </div>
                  <div className="shadow-sm rounded-xl bg-white text-[#71717b] text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-2">
                    Most Citizens Affected
                  </div>
                  <div className="shadow-sm rounded-xl bg-white text-[#71717b] text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-2">
                    Lowest Cost
                  </div>
                </div>
              </div>
            </header>
            <main className="px-8 py-6 flex-1">
              <div className="grid grid-cols-4 gap-4">
                <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[#71717b] text-sm leading-5">
                        Total Scored Issues
                      </div>
                      <div className="font-semibold text-3xl leading-9 mt-3">
                        248
                      </div>
                    </div>
                    <div className="size-11 rounded-xl bg-zinc-100 text-[#ff6900] flex justify-center items-center">
                      <FileText className="size-5" />
                    </div>
                  </div>
                </div>
                <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[#71717b] text-sm leading-5">
                        Average Priority Score
                      </div>
                      <div className="font-semibold text-3xl leading-9 mt-3">
                        76.4
                      </div>
                    </div>
                    <div className="size-11 rounded-xl bg-zinc-100 text-[#ff6900] flex justify-center items-center">
                      <TrendingUp className="size-5" />
                    </div>
                  </div>
                </div>
                <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[#71717b] text-sm leading-5">
                        High Priority Count
                      </div>
                      <div className="font-semibold text-[#ff6900] text-3xl leading-9 mt-3">
                        64
                      </div>
                    </div>
                    <div className="size-11 rounded-xl bg-[#ff6900]/10 text-[#ff6900] flex justify-center items-center">
                      <AlertTriangle className="size-5" />
                    </div>
                  </div>
                </div>
                <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-[#71717b] text-sm leading-5">
                        Score Distribution
                      </div>
                      <div className="flex mt-3 items-end gap-1">
                        <div className="rounded-full bg-[#ff6900]/30 w-2 h-6" />
                        <div className="rounded-full bg-[#ff6900]/45 w-2 h-10" />
                        <div className="rounded-full bg-[#ff6900]/60 w-2 h-8" />
                        <div className="rounded-full bg-[#ff6900]/75 w-2 h-12" />
                        <div className="rounded-full bg-[#ff6900] w-2 h-16" />
                      </div>
                    </div>
                    <div className="size-11 rounded-xl bg-zinc-100 text-[#ff6900] flex justify-center items-center">
                      <BarChart3 className="size-5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-[minmax(0,1fr)_320px] mt-6 gap-6">
                <section className="space-y-4">
                  <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 font-semibold rounded-full bg-[#ff6900] text-orange-50 text-sm leading-5 flex justify-center items-center">
                          1
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="size-4 text-[#ff6900]" />
                            <h2 className="font-semibold text-lg leading-7">
                              Open manhole near Sector 14 bus stand
                            </h2>
                          </div>
                          <div className="text-[#71717b] text-sm leading-5 flex mt-1 items-center gap-2">
                            <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-2 py-1">
                              Drainage
                            </span>
                            <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-2 py-1">
                              Ward 14 · Gurugram
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="size-20 rounded-full bg-white border-[#ff6900]/15 border-8 border-solid flex justify-center items-center">
                            <div className="text-center">
                              <div className="font-semibold text-[#ff6900] text-xl leading-7">
                                94
                              </div>
                              <div className="text-[#71717b] text-[10px]">
                                /100
                              </div>
                            </div>
                          </div>
                        </div>
                        <ChevronDown className="size-5 text-[#71717b]" />
                      </div>
                    </div>
                    <div className="flex mt-5 flex-wrap gap-2">
                      <span className="font-medium rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                        High Urgency
                      </span>
                      <span className="font-medium rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                        High Population Impact
                      </span>
                      <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-3 py-1">
                        Low Cost
                      </span>
                    </div>
                    <div className="grid grid-cols-3 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid mt-5 p-4 gap-3">
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Urgency Weight</span>
                          <span>92%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[92%] rounded-full bg-[#ff6900] h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Population Impact</span>
                          <span>88%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[88%] rounded-full bg-[#ff6900]/80 h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Budget Efficiency</span>
                          <span>76%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[76%] rounded-full bg-[#ff6900]/60 h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-sm leading-5 flex justify-center items-center">
                          2
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Waves className="size-4 text-[#ff6900]" />
                            <h2 className="font-semibold text-lg leading-7">
                              Severe potholes on Old Airport Road
                            </h2>
                          </div>
                          <div className="text-[#71717b] text-sm leading-5 flex mt-1 items-center gap-2">
                            <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-2 py-1">
                              Roads
                            </span>
                            <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-2 py-1">
                              Ward 8 · Bengaluru
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="size-20 rounded-full bg-white border-[#ff6900]/20 border-8 border-solid flex justify-center items-center">
                            <div className="text-center">
                              <div className="font-semibold text-[#ff6900] text-xl leading-7">
                                89
                              </div>
                              <div className="text-[#71717b] text-[10px]">
                                /100
                              </div>
                            </div>
                          </div>
                        </div>
                        <ChevronDown className="size-5 text-[#71717b]" />
                      </div>
                    </div>
                    <div className="flex mt-5 flex-wrap gap-2">
                      <span className="font-medium rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                        High Urgency
                      </span>
                      <span className="font-medium rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                        High Population Impact
                      </span>
                      <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-3 py-1">
                        Medium Cost
                      </span>
                    </div>
                    <div className="grid grid-cols-3 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid mt-5 p-4 gap-3">
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Urgency Weight</span>
                          <span>86%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[86%] rounded-full bg-[#ff6900] h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Population Impact</span>
                          <span>91%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[91%] rounded-full bg-[#ff6900]/80 h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Budget Efficiency</span>
                          <span>68%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[68%] rounded-full bg-[#ff6900]/60 h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 font-semibold rounded-full bg-zinc-100 text-zinc-950 text-sm leading-5 flex justify-center items-center">
                          3
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Droplets className="size-4 text-[#ff6900]" />
                            <h2 className="font-semibold text-lg leading-7">
                              Water supply interruptions in Ward 22
                            </h2>
                          </div>
                          <div className="text-[#71717b] text-sm leading-5 flex mt-1 items-center gap-2">
                            <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-2 py-1">
                              Water
                            </span>
                            <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-2 py-1">
                              Ward 22 · Pune
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="size-20 rounded-full bg-white border-zinc-100 border-8 border-solid flex justify-center items-center">
                            <div className="text-center">
                              <div className="font-semibold text-zinc-950 text-xl leading-7">
                                71
                              </div>
                              <div className="text-[#71717b] text-[10px]">
                                /100
                              </div>
                            </div>
                          </div>
                        </div>
                        <ChevronDown className="size-5 text-[#71717b]" />
                      </div>
                    </div>
                    <div className="flex mt-5 flex-wrap gap-2">
                      <span className="font-medium rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-3 py-1">
                        Moderate Urgency
                      </span>
                      <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-3 py-1">
                        High Population Impact
                      </span>
                      <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-3 py-1">
                        Low Cost
                      </span>
                    </div>
                    <div className="grid grid-cols-3 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid mt-5 p-4 gap-3">
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Urgency Weight</span>
                          <span>64%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[64%] rounded-full bg-[#ff6900] h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Population Impact</span>
                          <span>83%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[83%] rounded-full bg-[#ff6900]/80 h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Budget Efficiency</span>
                          <span>79%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[79%] rounded-full bg-[#ff6900]/60 h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid p-6">
                    <div className="flex justify-between items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 font-semibold rounded-full bg-zinc-100 text-zinc-950 text-sm leading-5 flex justify-center items-center">
                          4
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <Lightbulb className="size-4 text-[#ff6900]" />
                            <h2 className="font-semibold text-lg leading-7">
                              Non-functional street lights on MG Road
                            </h2>
                          </div>
                          <div className="text-[#71717b] text-sm leading-5 flex mt-1 items-center gap-2">
                            <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-2 py-1">
                              Electricity
                            </span>
                            <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-2 py-1">
                              Ward 3 · Indore
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <div className="size-20 rounded-full bg-white border-zinc-100 border-8 border-solid flex justify-center items-center">
                            <div className="text-center">
                              <div className="font-semibold text-zinc-950 text-xl leading-7">
                                63
                              </div>
                              <div className="text-[#71717b] text-[10px]">
                                /100
                              </div>
                            </div>
                          </div>
                        </div>
                        <ChevronDown className="size-5 text-[#71717b]" />
                      </div>
                    </div>
                    <div className="flex mt-5 flex-wrap gap-2">
                      <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-3 py-1">
                        Moderate Urgency
                      </span>
                      <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-3 py-1">
                        Medium Population Impact
                      </span>
                      <span className="font-medium rounded-full bg-zinc-100 text-zinc-950 text-xs leading-4 px-3 py-1">
                        Low Cost
                      </span>
                    </div>
                    <div className="grid grid-cols-3 rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid mt-5 p-4 gap-3">
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Urgency Weight</span>
                          <span>58%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[58%] rounded-full bg-[#ff6900] h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Population Impact</span>
                          <span>61%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[61%] rounded-full bg-[#ff6900]/80 h-2" />
                        </div>
                      </div>
                      <div>
                        <div className="text-[#71717b] text-xs leading-4 flex justify-between items-center">
                          <span>Budget Efficiency</span>
                          <span>72%</span>
                        </div>
                        <div className="rounded-full bg-white mt-2 h-2">
                          <div className="w-[72%] rounded-full bg-[#ff6900]/60 h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <aside className="sticky shadow-sm rounded-2xl bg-white border-zinc-200 border-1 border-solid top-27 p-6 h-fit">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-lg leading-7">
                        Score Distribution
                      </div>
                      <div className="text-[#71717b] text-sm leading-5 mt-1">
                        Across all issues
                      </div>
                    </div>
                    <BarChart3 className="size-5 text-[#ff6900]" />
                  </div>
                  <div className="space-y-4 mt-6">
                    <div className="flex items-end gap-3">
                      <div className="text-[#71717b] text-xs leading-4 w-16">
                        90-100
                      </div>
                      <div className="rounded-full bg-zinc-100 flex-1 h-3">
                        <div className="w-[78%] rounded-full bg-[#ff6900] h-3" />
                      </div>
                      <div className="font-medium text-right text-xs leading-4 w-10">
                        78
                      </div>
                    </div>
                    <div className="flex items-end gap-3">
                      <div className="text-[#71717b] text-xs leading-4 w-16">
                        80-89
                      </div>
                      <div className="rounded-full bg-zinc-100 flex-1 h-3">
                        <div className="w-[64%] rounded-full bg-[#ff6900]/90 h-3" />
                      </div>
                      <div className="font-medium text-right text-xs leading-4 w-10">
                        64
                      </div>
                    </div>
                    <div className="flex items-end gap-3">
                      <div className="text-[#71717b] text-xs leading-4 w-16">
                        70-79
                      </div>
                      <div className="rounded-full bg-zinc-100 flex-1 h-3">
                        <div className="w-[52%] rounded-full bg-[#ff6900]/75 h-3" />
                      </div>
                      <div className="font-medium text-right text-xs leading-4 w-10">
                        52
                      </div>
                    </div>
                    <div className="flex items-end gap-3">
                      <div className="text-[#71717b] text-xs leading-4 w-16">
                        60-69
                      </div>
                      <div className="rounded-full bg-zinc-100 flex-1 h-3">
                        <div className="w-[31%] rounded-full bg-[#ff6900]/60 h-3" />
                      </div>
                      <div className="font-medium text-right text-xs leading-4 w-10">
                        31
                      </div>
                    </div>
                    <div className="flex items-end gap-3">
                      <div className="text-[#71717b] text-xs leading-4 w-16">
                        0-59
                      </div>
                      <div className="rounded-full bg-zinc-100 flex-1 h-3">
                        <div className="w-[23%] rounded-full bg-zinc-900/30 h-3" />
                      </div>
                      <div className="font-medium text-right text-xs leading-4 w-10">
                        23
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-zinc-100 border-zinc-200 border-1 border-solid mt-6 p-4">
                    <div className="font-medium text-sm leading-5">
                      Priority Mix
                    </div>
                    <div className="flex mt-4 items-center gap-3">
                      <div className="bg-[conic-gradient(from_0deg,oklch(0.705_0.213_47.604)_0_42%,oklch(0.967_0.001_286.375)_42%_72%,oklch(0.705_0.213_47.604/.35)_72%_100%)] rounded-full w-24 h-24" />
                      <div className="space-y-2 text-[#71717b] text-xs leading-4">
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-[#ff6900]" />
                          High urgency
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-zinc-900/30" />
                          Medium priority
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="size-2 rounded-full bg-[#ff6900]/35" />
                          Low cost wins
                        </div>
                      </div>
                    </div>
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
