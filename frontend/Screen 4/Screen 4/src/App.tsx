import { useEffect } from "react";
import {
  AlertCircle,
  AlertTriangle,
  ArrowBigUp,
  AudioLines,
  BadgeCheck,
  BarChart3,
  Bell,
  Building2,
  Calendar,
  CalendarClock,
  Check,
  ChevronLeft,
  ChevronRight,
  Construction,
  DollarSign,
  Droplets,
  FileText,
  Flag,
  Flame,
  Landmark,
  LayoutDashboard,
  Lightbulb,
  Loader,
  Map,
  MapPin,
  MessageCircle,
  MessageSquare,
  Play,
  Search,
  Send,
  Settings,
  Share2,
  Sparkles,
  ThumbsUp,
  TrafficCone,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function App() {
  return (
    <div>
      <div className="font-sans bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <div className="min-h-[956px] flex w-full">
          <aside className="shrink-0 bg-neutral-50 border-zinc-200 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex flex-col w-70">
            <div className="shrink-0 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 items-center gap-3 h-18">
              <div className="size-10 rounded-xl bg-[#ff6900] flex justify-center items-center">
                <Landmark className="size-5 text-orange-50" />
              </div>
              <div className="flex flex-col">
                <span className="leading-tight font-bold text-sm leading-5 tracking-tight">
                  Prathmikta Setu
                </span>
                <span className="leading-tight text-[#71717b] text-[11px]">{`Bridging Citizens & Governance`}</span>
              </div>
            </div>
            <nav className="overflow-y-auto flex p-4 flex-col gap-1">
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <LayoutDashboard className="size-4 text-[#71717b]" />
                Dashboard
              </a>
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <Map className="size-4 text-[#71717b]" />
                Heatmap
              </a>
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <BarChart3 className="size-4 text-[#71717b]" />
                Analytics
              </a>
              <a className="shadow-sm font-medium rounded-lg bg-[#ff6900] text-orange-50 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <AlertCircle className="size-4" />
                Complaints
              </a>
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <Lightbulb className="size-4 text-[#71717b]" />
                Recommendations
              </a>
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <TrendingUp className="size-4 text-[#71717b]" />
                Priority Scores
              </a>
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <DollarSign className="size-4 text-[#71717b]" />
                Budget Optimizer
              </a>
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <AlertTriangle className="size-4 text-[#71717b]" />
                Emergency Alerts
              </a>
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <Zap className="size-4 text-[#71717b]" />
                Digital Twin
              </a>
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <FileText className="size-4 text-[#71717b]" />
                Reports
              </a>
              <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-3">
                <Settings className="size-4 text-[#71717b]" />
                Settings
              </a>
            </nav>
            <div className="border-zinc-200 border-t-1 border-r-0 border-b-0 border-l-0 border-solid mt-auto p-4">
              <div className="transition-colors rounded-lg flex p-2 items-center gap-3">
                <div className="size-9 font-semibold rounded-full bg-zinc-100 text-zinc-900 text-xs leading-4 flex justify-center items-center">
                  RS
                </div>
                <div className="leading-tight flex flex-col">
                  <span className="font-medium text-sm leading-5">
                    R. Sharma
                  </span>
                  <span className="text-[#71717b] text-[11px]">
                    Constituency Officer
                  </span>
                </div>
              </div>
            </div>
          </aside>
          <div className="min-w-0 flex flex-col flex-1">
            <header className="sticky z-20 shrink-0 backdrop-blur bg-white/95 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex top-0 px-8 justify-between items-center h-18">
              <div className="flex items-center gap-3">
                <div className="relative max-w-full w-80">
                  <Search className="top-1/2 -translate-y-1/2 size-4 text-[#71717b] absolute left-3" />
                  <Input
                    className="border-transparent bg-zinc-100/60 pl-9 h-10"
                    placeholder="Search issues, wards, departments..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  className="size-10 rounded-lg"
                  size="icon"
                  variant="outline"
                >
                  <Bell className="size-4" />
                </Button>
                <Button
                  className="size-10 rounded-lg"
                  size="icon"
                  variant="outline"
                >
                  <MessageSquare className="size-4" />
                </Button>
                <div className="size-9 font-semibold rounded-full bg-[#ff6900] text-orange-50 text-xs leading-4 flex justify-center items-center">
                  RS
                </div>
              </div>
            </header>
            <div className="text-sm leading-5 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-8 py-4 items-center gap-2">
              <a className="transition-colors text-[#71717b]">Issues</a>
              <ChevronRight className="size-4 text-[#71717b]" />
              <a className="transition-colors text-[#71717b]">{`Roads & Infrastructure`}</a>
              <ChevronRight className="size-4 text-[#71717b]" />
              <span className="font-medium text-zinc-950">{`Severe Pothole & Waterlogging on MG Road`}</span>
            </div>
            <main className="overflow-y-auto p-8 flex-1">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8 flex flex-col gap-8">
                  <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-6">
                    <CardHeader className="p-0 gap-4">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex items-start gap-4">
                          <div className="size-12 shrink-0 rounded-xl bg-[#ff6900]/10 flex justify-center items-center">
                            <Construction className="size-6 text-[#ff6900]" />
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                              <Badge className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 border-black/1 border-0 border-solid px-2.5 py-0.5">
                                <Flame className="size-3 mr-1" />
                                High Priority
                              </Badge>
                              <Badge className="rounded-full bg-zinc-100 text-zinc-900 text-xs leading-4 border-black/1 border-0 border-solid px-2.5 py-0.5">{`Roads & Infrastructure`}</Badge>
                              <span className="text-[#71717b] text-xs leading-4">
                                #ISS-2024-08471
                              </span>
                            </div>
                            <h1 className="font-bold text-2xl leading-8 tracking-tight">{`Severe Pothole & Waterlogging on MG Road`}</h1>
                          </div>
                        </div>
                        <Badge className="shrink-0 font-semibold rounded-full bg-[#F57C00]/15 text-amber-700 text-xs leading-4 border-black/1 border-0 border-solid px-3 py-1">
                          <span className="size-1.5 rounded-full bg-[#F57C00] mr-2" />
                          In Progress
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-6">
                      <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                        A large stretch of MG Road near Sector 14 crossing has
                        developed deep potholes measuring over two feet across.
                        During monsoon rainfall the entire junction becomes
                        severely waterlogged, submerging the potholes and
                        creating a serious hazard for two-wheelers and
                        pedestrians. Multiple minor accidents have been reported
                        over the past three weeks. Local shopkeepers and
                        commuters have collectively requested urgent repair and
                        improved drainage at this location.
                      </p>
                      <div className="flex flex-col gap-3">
                        <span className="font-semibold text-sm leading-5">
                          Submitted Photos
                        </span>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="relative col-span-2 aspect-[16/9] rounded-xl border-zinc-200 border-1 border-solid overflow-hidden">
                            <img
                              alt="Pothole on road"
                              className="object-cover w-full h-full"
                              data-authorname="Patrick Beznoska"
                              data-authorurl="https://unsplash.com/@patrick_beznoska"
                              data-blurhash="LGEfNSoz9FM{~qD*D*%2?btRIot7"
                              data-photoid="p5tjQydX5J0"
                              src="https://images.unsplash.com/photo-1516709678571-a33ff0114ae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkYW1hZ2VkJTIwcG90aG9sZSUyMHJvYWQlMjBzdHJlZXQlMjBJbmRpYXxlbnwxfDB8fHwxNzgzMzUwNzY5fDA&ixlib=rb-4.1.0&q=80&w=400"
                            />
                            <div className="bg-gradient-to-t from-black/60 to-transparent absolute inset-x-0 bottom-0 h-16" />
                            <div className="flex absolute left-3 bottom-3 items-center gap-2">
                              <Button
                                className="size-8 rounded-full bg-white/90"
                                size="icon"
                                variant="secondary"
                              >
                                <ChevronLeft className="size-4" />
                              </Button>
                              <Button
                                className="size-8 rounded-full bg-white/90"
                                size="icon"
                                variant="secondary"
                              >
                                <ChevronRight className="size-4" />
                              </Button>
                            </div>
                            <span className="font-medium text-white text-xs leading-4 absolute right-3 bottom-3">
                              1 / 3
                            </span>
                          </div>
                          <div className="flex flex-col gap-4">
                            <div className="relative aspect-[16/9] rounded-xl border-zinc-200 border-1 border-solid overflow-hidden">
                              <img
                                alt="Broken road"
                                className="object-cover w-full h-full"
                                data-authorname="Jens Aber"
                                data-authorurl="https://unsplash.com/@jensaber"
                                data-blurhash="LLJ8O.o#4n%M?voz-pRj_NbHWBWB"
                                data-photoid="fClNK-MIz_E"
                                src="https://images.unsplash.com/photo-1635068741358-ab1b9813623f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxicm9rZW4lMjBjaXR5JTIwcm9hZCUyMGluZnJhc3RydWN0dXJlfGVufDF8MHx8fDE3ODMzNTA3Njl8MA&ixlib=rb-4.1.0&q=80&w=400"
                              />
                            </div>
                            <div className="relative aspect-[16/9] rounded-xl border-zinc-200 border-1 border-solid overflow-hidden">
                              <img
                                alt="Waterlogged street"
                                className="object-cover w-full h-full"
                                data-authorname="Chris Gallagher"
                                data-authorurl="https://unsplash.com/@chriswebdog"
                                data-blurhash="LHCsaLR4D%kC0Jo#ozoME0ayxvRj"
                                data-photoid="4zxp5vlmvnI"
                                src="https://images.unsplash.com/photo-1547683905-f686c993aae5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx3YXRlcmxvZ2dlZCUyMGZsb29kZWQlMjBzdHJlZXR8ZW58MXwwfHx8MTc4MzM1MDc2OXww&ixlib=rb-4.1.0&q=80&w=400"
                              />
                              <div className="bg-zinc-950/50 flex absolute inset-0 justify-center items-center">
                                <span className="font-semibold text-white text-sm leading-5">
                                  +4 more
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-xl border-zinc-200 border-1 border-solid flex p-4 flex-col gap-3">
                          <div className="flex items-center gap-2">
                            <AudioLines className="size-4 text-[#ff6900]" />
                            <span className="font-semibold text-sm leading-5">
                              Voice Submission
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Button
                              className="size-10 shrink-0 rounded-full bg-[#ff6900] text-orange-50"
                              size="icon"
                            >
                              <Play className="size-4" />
                            </Button>
                            <div className="flex items-end flex-1 gap-0.5 h-8 overflow-hidden">
                              <span className="rounded-full bg-[#ff6900] w-1 h-3" />
                              <span className="rounded-full bg-[#ff6900] w-1 h-5" />
                              <span className="rounded-full bg-[#ff6900] w-1 h-7" />
                              <span className="rounded-full bg-[#ff6900] w-1 h-4" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-6" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-8" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-3" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-5" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-7" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-4" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-6" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-3" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-8" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-5" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-4" />
                              <span className="rounded-full bg-[#ff6900]/40 w-1 h-6" />
                            </div>
                            <span className="tabular-nums shrink-0 text-[#71717b] text-xs leading-4">
                              0:42
                            </span>
                          </div>
                        </div>
                        <div className="relative rounded-xl border-zinc-200 border-1 border-solid overflow-hidden">
                          <img
                            alt="map"
                            className="object-cover min-h-[110px] w-full h-full"
                            src="https://screens-image-components-public.s3.eu-north-1.amazonaws.com/city-navigation-map.png"
                          />
                          <div className="flex absolute inset-0 justify-center items-center">
                            <div className="flex flex-col items-center">
                              <MapPin className="size-8 drop-shadow-md text-[#ff6900]" />
                              <span className="font-medium rounded-full bg-white/90 text-[11px] mt-1 px-2 py-0.5">
                                MG Road, Sector 14
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-1">
                      <CardTitle className="font-semibold text-base leading-6">
                        Issue Timeline
                      </CardTitle>
                      <CardDescription className="text-xs leading-4">
                        Live progress across departments
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ol className="relative flex flex-col">
                        <li className="relative flex pb-6 gap-4">
                          <span className="bg-[#1E8E3E] absolute left-[15px] top-8 bottom-0 w-px" />
                          <span className="size-8 shrink-0 z-10 rounded-full bg-[#1E8E3E] flex justify-center items-center">
                            <Check className="size-4 text-white" />
                          </span>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-semibold text-sm leading-5">
                              Submitted
                            </span>
                            <span className="text-[#71717b] text-xs leading-4">
                              Citizen Portal • 12 Aug 2024, 09:14 AM
                            </span>
                          </div>
                        </li>
                        <li className="relative flex pb-6 gap-4">
                          <span className="bg-[#1E8E3E] absolute left-[15px] top-8 bottom-0 w-px" />
                          <span className="size-8 shrink-0 z-10 rounded-full bg-[#1E8E3E] flex justify-center items-center">
                            <Check className="size-4 text-white" />
                          </span>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-semibold text-sm leading-5">
                              Under Review
                            </span>
                            <span className="text-[#71717b] text-xs leading-4">
                              Grievance Cell • 12 Aug 2024, 02:40 PM
                            </span>
                          </div>
                        </li>
                        <li className="relative flex pb-6 gap-4">
                          <span className="bg-[#1E8E3E] absolute left-[15px] top-8 bottom-0 w-px" />
                          <span className="size-8 shrink-0 z-10 rounded-full bg-[#1E8E3E] flex justify-center items-center">
                            <Check className="size-4 text-white" />
                          </span>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-semibold text-sm leading-5">
                              Assigned
                            </span>
                            <span className="text-[#71717b] text-xs leading-4">
                              PWD, Roads Division • 13 Aug 2024, 11:05 AM
                            </span>
                          </div>
                        </li>
                        <li className="relative flex pb-6 gap-4">
                          <span className="bg-zinc-200 absolute left-[15px] top-8 bottom-0 w-px" />
                          <span className="size-8 shrink-0 z-10 ring-4 ring-primary/15 rounded-full bg-[#ff6900] flex justify-center items-center">
                            <Loader className="size-4 text-orange-50" />
                          </span>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-semibold text-[#ff6900] text-sm leading-5">
                              In Progress
                            </span>
                            <span className="text-[#71717b] text-xs leading-4">
                              PWD, Roads Division • 15 Aug 2024, 08:30 AM
                            </span>
                          </div>
                        </li>
                        <li className="relative flex gap-4">
                          <span className="size-8 shrink-0 z-10 rounded-full bg-zinc-100 border-zinc-200 border-1 border-solid flex justify-center items-center">
                            <Flag className="size-4 text-[#71717b]" />
                          </span>
                          <div className="flex flex-col gap-0.5">
                            <span className="font-medium text-[#71717b] text-sm leading-5">
                              Resolved
                            </span>
                            <span className="text-[#71717b] text-xs leading-4">
                              Pending completion
                            </span>
                          </div>
                        </li>
                      </ol>
                    </CardContent>
                  </Card>
                  <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-6">
                    <CardHeader className="p-0 gap-1">
                      <div className="flex justify-between items-center">
                        <CardTitle className="font-semibold text-base leading-6">
                          Community Discussion
                        </CardTitle>
                        <Badge className="rounded-full bg-zinc-100 text-zinc-900 text-xs leading-4 border-black/1 border-0 border-solid">
                          18 updates
                        </Badge>
                      </div>
                      <CardDescription className="text-xs leading-4">{`Citizen updates & official responses`}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-4">
                      <div className="flex gap-3">
                        <div className="size-9 shrink-0 rounded-full border-zinc-200 border-1 border-solid overflow-hidden">
                          <img
                            alt="Citizen"
                            className="object-cover w-full h-full"
                            data-authorname="Garv Chaplot"
                            data-authorurl="https://unsplash.com/@garv_4"
                            data-blurhash="LCF68|00_3xu%M00%MM{4nxuIUxu"
                            data-photoid="tBb9r_x5SHE"
                            src="https://images.unsplash.com/photo-1647598378229-a0ec16456b1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBtYW4lMjBwb3J0cmFpdCUyMGNpdGl6ZW58ZW58MXwyfHx8MTc4MzM1MDc2OXww&ixlib=rb-4.1.0&q=80&w=400"
                          />
                        </div>
                        <div className="rounded-xl border-zinc-200 border-1 border-solid flex p-4 flex-col flex-1 gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm leading-5">
                              Anil Kumar
                            </span>
                            <Badge className="rounded-full bg-zinc-100 text-zinc-900 text-[10px] border-black/1 border-0 border-solid px-2">
                              Resident
                            </Badge>
                            <span className="text-[#71717b] text-xs leading-4 ml-auto">
                              2 days ago
                            </span>
                          </div>
                          <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                            This junction is genuinely dangerous after rain.
                            Thank you for taking it up so quickly — please
                            prioritise the drainage as well, not just the
                            surface patch.
                          </p>
                          <div className="flex pt-1 items-center gap-4">
                            <button className="text-[#71717b] text-xs leading-4 flex items-center gap-1.5">
                              <ThumbsUp className="size-3.5" />
                              24
                            </button>
                            <button className="text-[#71717b] text-xs leading-4 flex items-center gap-1.5">
                              <MessageCircle className="size-3.5" />
                              Reply
                            </button>
                          </div>
                          <div className="border-zinc-200 border-t-0 border-r-0 border-b-0 border-l-2 border-solid flex mt-2 pl-4 flex-col gap-1.5">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-[#1E8E3E] text-sm leading-5">
                                PWD Roads Division
                              </span>
                              <Badge className="rounded-full bg-[#1E8E3E]/10 text-[#1E8E3E] text-[10px] border-black/1 border-0 border-solid px-2">
                                <BadgeCheck className="size-3 mr-1" />
                                Official
                              </Badge>
                              <span className="text-[#71717b] text-xs leading-4 ml-auto">
                                1 day ago
                              </span>
                            </div>
                            <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                              Noted. A dedicated drainage survey has been added
                              to the work order. Resurfacing crew is scheduled
                              for this week.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="size-9 shrink-0 font-semibold rounded-full bg-zinc-100 text-zinc-900 text-xs leading-4 flex justify-center items-center">
                          PM
                        </div>
                        <div className="rounded-xl border-zinc-200 border-1 border-solid flex p-4 flex-col flex-1 gap-2">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-sm leading-5">
                              Priya Menon
                            </span>
                            <Badge className="rounded-full bg-zinc-100 text-zinc-900 text-[10px] border-black/1 border-0 border-solid px-2">
                              Shopkeeper
                            </Badge>
                            <span className="text-[#71717b] text-xs leading-4 ml-auto">
                              3 days ago
                            </span>
                          </div>
                          <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                            Business has dropped because customers avoid this
                            stretch. Adding my support and photos of the
                            flooding from yesterday.
                          </p>
                          <div className="flex pt-1 items-center gap-4">
                            <button className="text-[#71717b] text-xs leading-4 flex items-center gap-1.5">
                              <ThumbsUp className="size-3.5" />
                              11
                            </button>
                            <button className="text-[#71717b] text-xs leading-4 flex items-center gap-1.5">
                              <MessageCircle className="size-3.5" />
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl border-zinc-200 border-1 border-solid flex pl-4 pr-2 py-2 items-center gap-3">
                        <Input
                          className="shadow-none border-black/1 border-0 border-solid px-0 h-9"
                          placeholder="Add a public update or comment..."
                        />
                        <Button className="rounded-lg bg-[#ff6900] text-orange-50 h-9">
                          <Send className="size-4 mr-1.5" />
                          Post
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="col-span-4">
                  <div className="sticky flex top-22 flex-col gap-6">
                    <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-5">
                      <CardHeader className="p-0 gap-1">
                        <CardTitle className="font-semibold text-base leading-6">
                          Issue Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex p-0 flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <span className="text-[#71717b] text-xs leading-4">
                            Assigned Department
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="size-9 rounded-lg bg-[#ff6900]/10 flex justify-center items-center">
                              <Building2 className="size-4 text-[#ff6900]" />
                            </div>
                            <div className="leading-tight flex flex-col">
                              <span className="font-semibold text-sm leading-5">
                                PWD, Roads Division
                              </span>
                              <span className="text-[#71717b] text-xs leading-4">
                                Sector 14 Sub-Office
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-zinc-200 h-px" />
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col gap-1">
                            <span className="text-[#71717b] text-xs leading-4">
                              Expected Resolution
                            </span>
                            <div className="flex items-center gap-1.5">
                              <CalendarClock className="size-4 text-[#1E8E3E]" />
                              <span className="font-semibold text-sm leading-5">
                                22 Aug 2024
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <span className="text-[#71717b] text-xs leading-4">
                              Reported On
                            </span>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="size-4 text-[#71717b]" />
                              <span className="font-semibold text-sm leading-5">
                                12 Aug 2024
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-zinc-200 h-px" />
                        <Button className="rounded-xl bg-[#ff6900] text-orange-50 justify-between w-full h-11">
                          <span className="flex items-center gap-2">
                            <ArrowBigUp className="size-5" />
                            Upvote this Issue
                          </span>
                          <span className="tabular-nums font-bold">347</span>
                        </Button>
                        <Button
                          className="rounded-xl w-full h-11"
                          variant="outline"
                        >
                          <Share2 className="size-4 mr-2" />
                          Share
                        </Button>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                      <CardHeader className="p-0 gap-1">
                        <CardTitle className="font-semibold text-base leading-6">
                          Related Issues
                        </CardTitle>
                        <CardDescription className="text-xs leading-4">{`Nearby in Roads & Infrastructure`}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex p-0 flex-col gap-2">
                        <a className="transition-colors rounded-xl flex p-3 items-start gap-3">
                          <div className="size-9 shrink-0 rounded-lg bg-zinc-100 flex justify-center items-center">
                            <TrafficCone className="size-4 text-[#ff6900]" />
                          </div>
                          <div className="min-w-0 flex flex-col gap-0.5">
                            <span className="truncate font-medium text-sm leading-5">
                              Broken divider near Sector 12
                            </span>
                            <span className="text-[#71717b] text-xs leading-4">
                              128 upvotes • In Progress
                            </span>
                          </div>
                        </a>
                        <a className="transition-colors rounded-xl flex p-3 items-start gap-3">
                          <div className="size-9 shrink-0 rounded-lg bg-zinc-100 flex justify-center items-center">
                            <Droplets className="size-4 text-[#ff6900]" />
                          </div>
                          <div className="min-w-0 flex flex-col gap-0.5">
                            <span className="truncate font-medium text-sm leading-5">
                              Drain overflow on Station Road
                            </span>
                            <span className="text-[#71717b] text-xs leading-4">
                              96 upvotes • Under Review
                            </span>
                          </div>
                        </a>
                        <a className="transition-colors rounded-xl flex p-3 items-start gap-3">
                          <div className="size-9 shrink-0 rounded-lg bg-zinc-100 flex justify-center items-center">
                            <Lightbulb className="size-4 text-[#ff6900]" />
                          </div>
                          <div className="min-w-0 flex flex-col gap-0.5">
                            <span className="truncate font-medium text-sm leading-5">
                              Non-functional street lights
                            </span>
                            <span className="text-[#71717b] text-xs leading-4">
                              64 upvotes • Resolved
                            </span>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm rounded-2xl bg-[#ff6900]/5 border-black/1 border-0 border-solid p-6 gap-3">
                      <CardContent className="flex p-0 items-start gap-3">
                        <div className="size-9 shrink-0 rounded-lg bg-[#ff6900] flex justify-center items-center">
                          <Sparkles className="size-4 text-orange-50" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-sm leading-5">
                            AI Priority Insight
                          </span>
                          <p className="leading-relaxed text-[#71717b] text-xs leading-4">
                            High recurrence in this ward. Estimated ₹4.2L repair
                            cost impacts ~8,400 daily commuters. Recommended for
                            immediate action.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
