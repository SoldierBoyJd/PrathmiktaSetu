import { useEffect } from "react";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  BadgeCheck,
  BarChart3,
  Bell,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Clock,
  DollarSign,
  FileInput,
  FileText,
  Hammer,
  Hash,
  HelpCircle,
  Images,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  Map,
  Play,
  Plus,
  Radar as LucideRadar,
  Search,
  Settings,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Waypoints,
  Zap,
  ZoomIn,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 flex w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <aside className="shrink-0 bg-neutral-50 border-zinc-200 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex p-6 flex-col gap-6 w-70 h-239">
          <div className="flex px-2 items-center gap-2">
            <div className="size-10 bg-[var(--brand-orange)] shrink-0 rounded-xl flex justify-center items-center">
              <Waypoints className="size-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-bold text-base leading-6 tracking-tight">
                Prathmikta Setu
              </span>
              <span className="leading-tight text-[#71717b] text-[11px]">{`Bridging Citizens & Governance`}</span>
            </div>
          </div>
          <nav className="flex flex-col justify-start items-stretch gap-1">
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <LayoutDashboard className="size-4 text-[#71717b]" />
              Dashboard
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <Map className="size-4 text-[#71717b]" />
              Heatmap
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <BarChart3 className="size-4 text-[#71717b]" />
              Analytics
            </a>
            <a className="bg-[var(--brand-orange)] shadow-sm font-medium rounded-lg text-white text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <AlertCircle className="size-4" />
              Complaints
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <Lightbulb className="size-4 text-[#71717b]" />
              Recommendations
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <TrendingUp className="size-4 text-[#71717b]" />
              Priority Scores
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <DollarSign className="size-4 text-[#71717b]" />
              Budget Optimizer
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <AlertTriangle className="size-4 text-[#71717b]" />
              Emergency Alerts
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <Zap className="size-4 text-[#71717b]" />
              Digital Twin
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <FileText className="size-4 text-[#71717b]" />
              Reports
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-3 py-2 items-center gap-2">
              <Settings className="size-4 text-[#71717b]" />
              Settings
            </a>
          </nav>
          <div className="bg-[var(--bg-page)] rounded-xl border-zinc-200 border-1 border-solid flex mt-auto p-4 flex-col gap-1">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-[var(--brand-green)]" />
              <span className="font-semibold text-xs leading-4">
                Verified Portal
              </span>
            </div>
            <span className="leading-snug text-[#71717b] text-[11px]">
              Government of India · Constituency Development Cell
            </span>
          </div>
        </aside>
        <div className="bg-[var(--bg-page)] flex flex-col flex-1 h-239 overflow-hidden">
          <header className="shrink-0 sticky z-10 bg-white border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex top-0 px-8 justify-between items-center h-18">
            <div className="flex flex-col">
              <h1 className="font-bold text-lg leading-7 tracking-tight">
                Track Complaint
              </h1>
              <span className="text-[#71717b] text-xs leading-4">
                Public Grievance Tracker · Real-time status
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Button
                className="rounded-lg text-sm leading-5 gap-2 h-9"
                variant="outline"
              >
                <HelpCircle className="size-4" />
                Help
              </Button>
              <div className="flex items-center gap-2">
                <Avatar className="size-9">
                  <AvatarFallback className="bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-semibold text-xs leading-4">
                    RK
                  </AvatarFallback>
                </Avatar>
                <div className="leading-tight flex flex-col">
                  <span className="font-semibold text-xs leading-4">
                    Rahul Kumar
                  </span>
                  <span className="text-[#71717b] text-[11px]">Citizen</span>
                </div>
              </div>
            </div>
          </header>
          <div className="overflow-y-auto p-8 flex-1">
            <div className="max-w-[820px] flex mx-auto flex-col gap-8">
              <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Search className="size-4 text-[var(--brand-orange)]" />
                    <span className="font-semibold text-sm leading-5">
                      Look up your complaint
                    </span>
                  </div>
                  <span className="text-[#71717b] text-xs leading-4">
                    Enter the Complaint ID from your acknowledgement receipt to
                    view live status.
                  </span>
                  <div className="flex mt-2 items-center gap-2">
                    <div className="relative flex-1">
                      <Hash className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />
                      <Input
                        className="rounded-lg text-sm leading-5 pl-9 h-11"
                        defaultValue="PS-2024-DEL-018724"
                        placeholder="e.g. PS-2024-DEL-018724"
                      />
                    </div>
                    <Button className="bg-[var(--brand-orange)] font-semibold rounded-lg text-white px-6 gap-2 h-11">
                      <LucideRadar className="size-4" />
                      Track
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <span className="font-medium text-[#71717b] text-xs leading-4">
                        Complaint ID
                      </span>
                      <span className="font-semibold text-sm leading-5 tracking-tight">
                        PS-2024-DEL-018724 · Waterlogging near Sector 12 Main
                        Road
                      </span>
                    </div>
                    <Badge className="bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] font-semibold rounded-full text-sm leading-5 border-black/1 border-0 border-solid px-3 py-1.5 gap-1.5">
                      <span className="size-2 bg-[var(--brand-orange)] animate-pulse rounded-full" />
                      In Progress
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="grid grid-cols-3 p-0 gap-4">
                  <div className="bg-[var(--bg-page)] rounded-xl border-zinc-200 border-1 border-solid flex p-4 flex-col gap-2">
                    <div className="text-[#71717b] flex items-center gap-2">
                      <Activity className="size-4" />
                      <span className="font-medium text-xs leading-4">
                        Current Status
                      </span>
                    </div>
                    <span className="text-[var(--brand-orange)] leading-tight font-bold text-lg leading-7">
                      Work In Progress
                    </span>
                    <span className="text-[#71717b] text-[11px]">
                      Stage 4 of 5 · 72% complete
                    </span>
                  </div>
                  <div className="bg-[var(--bg-page)] rounded-xl border-zinc-200 border-1 border-solid flex p-4 flex-col gap-2">
                    <div className="text-[#71717b] flex items-center gap-2">
                      <Building2 className="size-4" />
                      <span className="font-medium text-xs leading-4">
                        Assigned Department
                      </span>
                    </div>
                    <span className="leading-tight font-bold text-lg leading-7">
                      Public Works Dept.
                    </span>
                    <span className="text-[#71717b] text-[11px]">
                      Ward 12 · Officer S. Verma
                    </span>
                  </div>
                  <div className="border-[var(--brand-green)]/30 bg-[var(--brand-green)]/5 rounded-xl border-black/1 border-1 border-solid flex p-4 flex-col gap-2">
                    <div className="text-[var(--brand-green)] flex items-center gap-2">
                      <CalendarCheck className="size-4" />
                      <span className="font-medium text-xs leading-4">
                        Expected Resolution
                      </span>
                    </div>
                    <span className="text-[var(--brand-green)] leading-tight font-bold text-lg leading-7">
                      18 Feb 2024
                    </span>
                    <span className="text-[#71717b] text-[11px]">
                      In 4 days · On schedule
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <div className="flex items-center gap-2">
                    <ListChecks className="size-4 text-[var(--brand-orange)]" />
                    <span className="font-bold text-base leading-6 tracking-tight">
                      Complaint Timeline
                    </span>
                  </div>
                  <span className="text-[#71717b] text-xs leading-4">
                    Every stage is logged transparently with a verifiable
                    timestamp.
                  </span>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-0">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-9 bg-[var(--brand-green)] shrink-0 rounded-full text-white flex justify-center items-center">
                        <FileInput className="size-4" />
                      </div>
                      <div className="bg-[var(--brand-green)] flex-1 w-0.5" />
                    </div>
                    <div className="flex pt-1 pb-6 flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm leading-5">
                          Submitted
                        </span>
                        <Badge className="bg-[var(--brand-green)]/10 text-[var(--brand-green)] rounded-full text-[10px] border-black/1 border-0 border-solid px-2 py-0.5">
                          Done
                        </Badge>
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">{`Complaint filed with photo & voice evidence via mobile app.`}</span>
                      <span className="text-[#71717b] text-[11px] flex mt-1 items-center gap-1">
                        <Clock className="size-3" />
                        08 Feb 2024 · 09:14 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-9 bg-[var(--brand-green)] shrink-0 rounded-full text-white flex justify-center items-center">
                        <BadgeCheck className="size-4" />
                      </div>
                      <div className="bg-[var(--brand-green)] flex-1 w-0.5" />
                    </div>
                    <div className="flex pt-1 pb-6 flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm leading-5">
                          Verified
                        </span>
                        <Badge className="bg-[var(--brand-green)]/10 text-[var(--brand-green)] rounded-full text-[10px] border-black/1 border-0 border-solid px-2 py-0.5">
                          Done
                        </Badge>
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">{`Location & category confirmed by AI and constituency officer.`}</span>
                      <span className="text-[#71717b] text-[11px] flex mt-1 items-center gap-1">
                        <Clock className="size-3" />
                        08 Feb 2024 · 04:40 PM
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-9 bg-[var(--brand-green)] shrink-0 rounded-full text-white flex justify-center items-center">
                        <UserCheck className="size-4" />
                      </div>
                      <div className="bg-gradient-to-b from-[var(--brand-green)] to-[var(--brand-orange)] flex-1 w-0.5" />
                    </div>
                    <div className="flex pt-1 pb-6 flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm leading-5">
                          Assigned
                        </span>
                        <Badge className="bg-[var(--brand-green)]/10 text-[var(--brand-green)] rounded-full text-[10px] border-black/1 border-0 border-solid px-2 py-0.5">
                          Done
                        </Badge>
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">
                        Routed to Public Works Dept., Ward 12 · Officer S.
                        Verma.
                      </span>
                      <span className="text-[#71717b] text-[11px] flex mt-1 items-center gap-1">
                        <Clock className="size-3" />
                        10 Feb 2024 · 11:02 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-9 bg-[var(--brand-orange)] shrink-0 ring-4 ring-[var(--brand-orange)]/20 rounded-full text-white flex justify-center items-center">
                        <Hammer className="size-4" />
                      </div>
                      <div className="bg-zinc-200 flex-1 w-0.5" />
                    </div>
                    <div className="flex pt-1 pb-6 flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm leading-5">
                          In Progress
                        </span>
                        <Badge className="bg-[var(--brand-orange)]/10 text-[var(--brand-orange)] rounded-full text-[10px] border-black/1 border-0 border-solid px-2 py-0.5">
                          Active
                        </Badge>
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">{`Drainage clearing & road resurfacing underway on site.`}</span>
                      <span className="text-[#71717b] text-[11px] flex mt-1 items-center gap-1">
                        <Clock className="size-3" />
                        14 Feb 2024 · 08:30 AM
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-9 shrink-0 rounded-full bg-white text-[#71717b] border-zinc-200 border-2 border-solid flex justify-center items-center">
                        <CheckCircle2 className="size-4" />
                      </div>
                    </div>
                    <div className="flex pt-1 flex-col">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-[#71717b] text-sm leading-5">
                          Resolved
                        </span>
                        <Badge
                          className="rounded-full text-[#71717b] text-[10px] border-zinc-200 border-0 border-solid px-2 py-0.5"
                          variant="outline"
                        >
                          Pending
                        </Badge>
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">{`Final inspection & citizen sign-off. Expected by 18 Feb 2024.`}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <div className="flex items-center gap-2">
                    <Images className="size-4 text-[var(--brand-orange)]" />
                    <span className="font-bold text-base leading-6 tracking-tight">
                      Evidence Gallery
                    </span>
                  </div>
                  <span className="text-[#71717b] text-xs leading-4">
                    Original submissions attached to this complaint.
                  </span>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="relative aspect-square group rounded-xl border-zinc-200 border-1 border-solid overflow-hidden">
                      <img
                        alt="Waterlogged damaged road"
                        className="object-cover w-full h-full"
                        data-authorname="Ashwini Chaudhary(Monty)"
                        data-authorurl="https://unsplash.com/@suicide_chewbacca"
                        data-blurhash="LJGut48_-;t6.m4.kCRj-;IUM|Rj"
                        data-photoid="b_7z8vJBiVY"
                        src="https://images.unsplash.com/photo-1730303559480-6c162dadca18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxkYW1hZ2VkJTIwcG90aG9sZSUyMHJvYWQlMjBzdHJlZXQlMjBJbmRpYXxlbnwxfDJ8fHwxNzgzMzUwNzY5fDA&ixlib=rb-4.1.0&q=80&w=400"
                      />
                      <div className="bg-gradient-to-t from-black/50 to-transparent transition-opacity opacity-0 flex absolute inset-0 justify-center items-center">
                        <ZoomIn className="size-6 text-white" />
                      </div>
                    </div>
                    <div className="relative aspect-square group rounded-xl border-zinc-200 border-1 border-solid overflow-hidden">
                      <img
                        alt="Roadwork repair"
                        className="object-cover w-full h-full"
                        data-authorname="Yale Cohen"
                        data-authorurl="https://unsplash.com/@coheny"
                        data-blurhash="LJF=]n4Tozt7S%Rj%2%M^,IUkCoy"
                        data-photoid="o96RfpHxw74"
                        src="https://images.unsplash.com/photo-1773380498433-f6c511f82e40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxicm9rZW4lMjBzdHJlZXQlMjBjb25zdHJ1Y3Rpb24lMjByZXBhaXJ8ZW58MXwyfHx8MTc4MzM1MDc2OXww&ixlib=rb-4.1.0&q=80&w=400"
                      />
                      <div className="bg-gradient-to-t from-black/50 to-transparent transition-opacity opacity-0 flex absolute inset-0 justify-center items-center">
                        <ZoomIn className="size-6 text-white" />
                      </div>
                    </div>
                    <div className="relative aspect-square group rounded-xl border-zinc-200 border-1 border-solid overflow-hidden">
                      <img
                        alt="Street drainage water"
                        className="object-cover w-full h-full"
                        data-authorname="Dhirendra Bhatta"
                        data-authorurl="https://unsplash.com/@woolencap01"
                        data-blurhash="LAC6}u_4D$%2I9-;V?WBR5xttRaf"
                        data-photoid="MCuesA76KEg"
                        src="https://images.unsplash.com/photo-1777571050990-e2aa05022963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMGRyYWluYWdlJTIwd2F0ZXJ8ZW58MXwyfHx8MTc4MzM1MDc2OXww&ixlib=rb-4.1.0&q=80&w=400"
                      />
                      <div className="bg-gradient-to-t from-black/50 to-transparent transition-opacity opacity-0 flex absolute inset-0 justify-center items-center">
                        <ZoomIn className="size-6 text-white" />
                      </div>
                    </div>
                    <div className="relative aspect-square bg-[var(--bg-page)] rounded-xl border-zinc-200 border-1 border-solid flex justify-center items-center overflow-hidden">
                      <div className="text-[#71717b] flex flex-col items-center gap-1">
                        <Plus className="size-6" />
                        <span className="font-medium text-xs leading-4">
                          +2 more
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[var(--bg-page)] rounded-xl border-zinc-200 border-1 border-solid flex p-4 items-center gap-4">
                    <Button className="size-10 shrink-0 bg-[var(--brand-orange)] rounded-full text-white">
                      <Play className="size-4" />
                    </Button>
                    <div className="flex flex-col flex-1 gap-1">
                      <span className="font-semibold text-xs leading-4">
                        Original Voice Report
                      </span>
                      <div className="flex items-center gap-1 h-6">
                        <span className="bg-[var(--brand-orange)] rounded-full w-1 h-3" />
                        <span className="bg-[var(--brand-orange)] rounded-full w-1 h-5" />
                        <span className="bg-[var(--brand-orange)] rounded-full w-1 h-4" />
                        <span className="bg-[var(--brand-orange)] rounded-full w-1 h-6" />
                        <span className="bg-[var(--brand-orange)] rounded-full w-1 h-3" />
                        <span className="rounded-full bg-zinc-200 w-1 h-4" />
                        <span className="rounded-full bg-zinc-200 w-1 h-5" />
                        <span className="rounded-full bg-zinc-200 w-1 h-2" />
                        <span className="rounded-full bg-zinc-200 w-1 h-4" />
                        <span className="rounded-full bg-zinc-200 w-1 h-3" />
                        <span className="rounded-full bg-zinc-200 w-1 h-5" />
                        <span className="rounded-full bg-zinc-200 w-1 h-2" />
                      </div>
                    </div>
                    <span className="tabular-nums text-[#71717b] text-xs leading-4">
                      0:12 / 0:34
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <div className="flex items-center gap-2">
                    <Bell className="size-4 text-[var(--brand-orange)]" />
                    <span className="font-bold text-base leading-6 tracking-tight">
                      Citizen Updates
                    </span>
                  </div>
                  <span className="text-[#71717b] text-xs leading-4">
                    Notifications and remarks shared by the assigned department.
                  </span>
                </CardHeader>
                <CardContent className="flex p-0 flex-col gap-4">
                  <div className="rounded-xl bg-white border-zinc-200 border-1 border-solid flex p-4 gap-3">
                    <div className="size-9 bg-[var(--brand-orange)]/10 shrink-0 rounded-full flex justify-center items-center">
                      <Hammer className="size-4 text-[var(--brand-orange)]" />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm leading-5">
                          Work commenced on site
                        </span>
                        <span className="text-[#71717b] text-[11px]">
                          14 Feb · 08:30 AM
                        </span>
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">
                        Machinery deployed for drainage clearing. Estimated 3
                        working days for full road resurfacing.
                      </span>
                      <span className="text-[var(--brand-orange)] font-medium text-[11px] mt-1">
                        — Public Works Dept., Ward 12
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white border-zinc-200 border-1 border-solid flex p-4 gap-3">
                    <div className="size-9 bg-[var(--brand-green)]/10 shrink-0 rounded-full flex justify-center items-center">
                      <UserCheck className="size-4 text-[var(--brand-green)]" />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm leading-5">
                          Complaint assigned to field officer
                        </span>
                        <span className="text-[#71717b] text-[11px]">
                          10 Feb · 11:02 AM
                        </span>
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">
                        Officer S. Verma has been assigned and conducted a
                        preliminary site inspection.
                      </span>
                      <span className="text-[var(--brand-green)] font-medium text-[11px] mt-1">
                        — Constituency Grievance Cell
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white border-zinc-200 border-1 border-solid flex p-4 gap-3">
                    <div className="size-9 bg-[var(--brand-green)]/10 shrink-0 rounded-full flex justify-center items-center">
                      <BadgeCheck className="size-4 text-[var(--brand-green)]" />
                    </div>
                    <div className="flex flex-col flex-1 gap-1">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-sm leading-5">{`Complaint verified & accepted`}</span>
                        <span className="text-[#71717b] text-[11px]">
                          08 Feb · 04:40 PM
                        </span>
                      </div>
                      <span className="text-[#71717b] text-xs leading-4">
                        Location tag and issue category validated. Priority
                        marked as High due to monsoon risk.
                      </span>
                      <span className="text-[var(--brand-green)] font-medium text-[11px] mt-1">
                        — Prathmikta Setu AI Verification
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="h-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
