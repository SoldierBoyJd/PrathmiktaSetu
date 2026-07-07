import { useEffect } from "react";
import {
  AlertCircle,
  AlertTriangle,
  BarChart3,
  CheckCircle2,
  CircleHelp,
  DollarSign,
  Droplets,
  FileText,
  Flame,
  GraduationCap,
  HeartPulse,
  ImageUp,
  Info,
  Landmark,
  LayoutDashboard,
  Lightbulb,
  LocateFixed,
  Map,
  MapPin,
  Mic,
  Navigation,
  PackageSearch,
  Paperclip,
  Search,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  TrafficCone,
  TrendingUp,
  Wand2,
  Waves,
  Zap,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export default function App() {
  return (
    <div>
      <div className="bg-[oklch(0.985_0.005_150)] bg-white text-zinc-950 flex w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <aside className="shrink-0 sticky bg-neutral-50 border-zinc-200 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex top-0 flex-col w-70 h-239">
          <div className="shrink-0 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 items-center gap-2 h-18">
            <div className="size-9 shrink-0 rounded-lg bg-[#ff6900] flex justify-center items-center">
              <Landmark className="size-5 text-orange-50" />
            </div>
            <div className="flex flex-col">
              <span className="leading-tight font-bold text-zinc-950 text-sm leading-5">
                Prathmikta Setu
              </span>
              <span className="leading-tight text-[#71717b] text-[11px]">{`Bridging Citizens & Governance`}</span>
            </div>
          </div>
          <nav className="overflow-y-auto flex p-4 flex-col gap-1">
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
            <a className="shadow-sm font-medium rounded-lg bg-[#ff6900] text-orange-50 text-sm leading-5 flex px-3 py-2 items-center gap-2">
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
        </aside>
        <div className="min-w-0 flex flex-col flex-1">
          <header className="shrink-0 sticky z-20 bg-white border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex top-0 px-8 justify-between items-center h-18">
            <div className="flex flex-col">
              <h1 className="leading-tight font-bold text-zinc-950 text-lg leading-7">
                Submit a Complaint
              </h1>
              <p className="text-[#71717b] text-xs leading-4">{`Raise infrastructure issues & local needs for your constituency`}</p>
            </div>
            <div className="flex items-center gap-4">
              <a className="font-medium text-zinc-100 text-sm leading-5 flex items-center gap-2">
                <PackageSearch className="size-4" />
                Track Complaint
              </a>
              <div className="bg-zinc-200 w-px h-6" />
              <Button className="rounded-lg gap-2" variant="outline">
                <CircleHelp className="size-4" />
                Help
              </Button>
              <Avatar className="size-9">
                <AvatarFallback className="font-semibold bg-zinc-100/15 text-zinc-100 text-xs leading-4">
                  RS
                </AvatarFallback>
              </Avatar>
            </div>
          </header>
          <main className="p-8 flex-1">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-8 flex flex-col gap-6">
                <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-6">
                  <CardHeader className="p-0 gap-1">
                    <CardTitle className="text-base leading-6 flex items-center gap-2">
                      <FileText className="size-4 text-[#ff6900]" />
                      Complaint Details
                    </CardTitle>
                    <CardDescription>
                      Describe the issue clearly so the right department can act
                      quickly.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-sm leading-5">
                        Issue Title
                      </Label>
                      <Input
                        className="rounded-lg"
                        placeholder="e.g. Broken streetlights near Sector 12 market"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-sm leading-5">
                        Description
                      </Label>
                      <Textarea
                        className="min-h-28 resize-none rounded-lg"
                        placeholder="Provide details — location landmarks, how long the issue has persisted, and its impact on residents."
                      />
                      <span className="text-[#71717b] text-[11px] self-end">
                        0 / 500 characters
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-sm leading-5">
                        Category
                      </Label>
                      <Select>
                        <SelectTrigger className="rounded-lg w-full">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="roads">
                            <span className="flex items-center gap-2">
                              <TrafficCone className="size-4 text-[#ff6900]" />
                              Roads
                            </span>
                          </SelectItem>
                          <SelectItem value="water">
                            <span className="flex items-center gap-2">
                              <Droplets className="size-4 text-[#1E88E5]" />
                              Water
                            </span>
                          </SelectItem>
                          <SelectItem value="healthcare">
                            <span className="flex items-center gap-2">
                              <HeartPulse className="size-4 text-[#e7000b]" />
                              Healthcare
                            </span>
                          </SelectItem>
                          <SelectItem value="education">
                            <span className="flex items-center gap-2">
                              <GraduationCap className="size-4 text-zinc-100" />
                              Education
                            </span>
                          </SelectItem>
                          <SelectItem value="drainage">
                            <span className="flex items-center gap-2">
                              <Waves className="size-4 text-[#1E88E5]" />
                              Drainage
                            </span>
                          </SelectItem>
                          <SelectItem value="electricity">
                            <span className="flex items-center gap-2">
                              <Zap className="size-4 text-[#ff6900]" />
                              Electricity
                            </span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-6">
                  <CardHeader className="p-0 gap-1">
                    <CardTitle className="text-base leading-6 flex items-center gap-2">
                      <Paperclip className="size-4 text-[#ff6900]" />
                      Evidence
                    </CardTitle>
                    <CardDescription>
                      Add photos or a voice note to strengthen your report.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-2 p-0 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-sm leading-5">
                        Image Upload
                      </Label>
                      <div className="text-center rounded-xl bg-[#ff6900]/5 border-[#ff6900]/50 border-2 border-dashed flex p-6 flex-col justify-center items-center gap-2 h-40">
                        <div className="size-10 rounded-full bg-[#ff6900]/10 flex justify-center items-center">
                          <ImageUp className="size-5 text-[#ff6900]" />
                        </div>
                        <p className="font-medium text-sm leading-5">{`Drag & drop images`}</p>
                        <p className="text-[#71717b] text-[11px]">
                          or
                          <span className="font-medium text-[#ff6900]">
                            browse files
                          </span>
                          · PNG, JPG up to 10MB
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-sm leading-5">
                        Voice Upload
                      </Label>
                      <div className="rounded-xl bg-zinc-100/40 border-zinc-200 border-1 border-solid flex p-4 flex-col justify-between h-40">
                        <div className="flex items-center gap-3">
                          <button className="size-10 shrink-0 shadow-sm rounded-full bg-[#ff6900] flex justify-center items-center">
                            <Mic className="size-5 text-orange-50" />
                          </button>
                          <div className="flex flex-col">
                            <span className="font-medium text-sm leading-5">
                              Record a voice note
                            </span>
                            <span className="text-[#71717b] text-[11px]">
                              Tap to start · max 60s
                            </span>
                          </div>
                        </div>
                        <div className="flex px-1 items-end gap-[3px] h-10">
                          <span className="rounded-full bg-[#ff6900]/40 w-1 h-3" />
                          <span className="rounded-full bg-[#ff6900]/60 w-1 h-6" />
                          <span className="rounded-full bg-[#ff6900] w-1 h-9" />
                          <span className="rounded-full bg-[#ff6900]/70 w-1 h-5" />
                          <span className="rounded-full bg-[#ff6900]/50 w-1 h-8" />
                          <span className="rounded-full bg-[#ff6900] w-1 h-4" />
                          <span className="rounded-full bg-[#ff6900]/60 w-1 h-7" />
                          <span className="rounded-full bg-[#ff6900]/40 w-1 h-3" />
                          <span className="rounded-full bg-[#ff6900]/80 w-1 h-6" />
                          <span className="rounded-full bg-[#ff6900]/50 w-1 h-9" />
                          <span className="rounded-full bg-[#ff6900] w-1 h-4" />
                          <span className="rounded-full bg-[#ff6900]/60 w-1 h-7" />
                          <span className="rounded-full bg-[#ff6900]/40 w-1 h-5" />
                          <span className="rounded-full bg-[#ff6900]/70 w-1 h-8" />
                          <span className="rounded-full bg-[#ff6900]/50 w-1 h-3" />
                          <span className="rounded-full bg-[#ff6900] w-1 h-6" />
                          <span className="rounded-full bg-[#ff6900]/40 w-1 h-4" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-6">
                  <CardHeader className="p-0 gap-1">
                    <CardTitle className="text-base leading-6 flex items-center gap-2">
                      <MapPin className="size-4 text-[#ff6900]" />
                      Location
                    </CardTitle>
                    <CardDescription>
                      Pin the exact spot to help field officers reach the site.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Label className="font-medium text-sm leading-5">
                        Address
                      </Label>
                      <div className="relative">
                        <Search className="size-4 top-1/2 -translate-y-1/2 text-[#71717b] absolute left-3" />
                        <Input
                          className="rounded-lg pl-9"
                          placeholder="Search address or drop a pin below"
                        />
                      </div>
                    </div>
                    <div className="relative rounded-xl border-zinc-200 border-1 border-solid h-64 overflow-hidden">
                      <img
                        alt="map"
                        className="object-cover w-full h-full"
                        src="https://screens-image-components-public.s3.eu-north-1.amazonaws.com/city-navigation-map.png"
                      />
                      <div className="flex absolute inset-0 justify-center items-center">
                        <div className="-translate-y-3 flex flex-col items-center">
                          <div className="size-9 shadow-lg ring-4 ring-primary/25 rounded-full bg-[#ff6900] flex justify-center items-center">
                            <MapPin className="size-5 text-orange-50" />
                          </div>
                        </div>
                      </div>
                      <div className="backdrop-blur shadow-sm rounded-lg bg-white/90 border-zinc-200 border-1 border-solid flex absolute left-3 bottom-3 px-3 py-2 items-center gap-2">
                        <Navigation className="size-4 text-zinc-100" />
                        <span className="font-medium text-xs leading-4">
                          Sector 12, Ward 8 · 28.6139, 77.2090
                        </span>
                      </div>
                      <Button
                        className="backdrop-blur rounded-lg bg-white/90 text-xs leading-4 absolute right-3 top-3 gap-2 h-8"
                        variant="outline"
                      >
                        <LocateFixed className="size-3.5" />
                        Use my location
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-[#ff6900]/10 flex justify-center items-center">
                        <Sparkles className="size-4 text-[#ff6900]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm leading-5">
                          Auto-suggested Priority
                        </span>
                        <span className="text-[#71717b] text-[11px]">{`Based on category, location & description`}</span>
                      </div>
                    </div>
                    <Badge className="rounded-full bg-[#ff6900]/15 text-[#ff6900] border-[#ff6900]/30 border-1 border-solid px-3 py-1 gap-1">
                      <Flame className="size-3.5" />
                      High Priority
                    </Badge>
                  </div>
                  <Separator />
                  <Button className="font-semibold rounded-lg text-sm leading-5 gap-2 w-full h-11">
                    <Send className="size-4" />
                    Submit Complaint
                  </Button>
                  <p className="text-center text-[#71717b] text-[11px]">
                    By submitting, you agree to share this report with your
                    constituency office.
                  </p>
                </Card>
              </div>
              <div className="col-span-4">
                <div className="sticky flex top-26 flex-col gap-6">
                  <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-6 overflow-hidden">
                    <CardHeader className="p-0 gap-0">
                      <div className="flex items-center gap-3">
                        <div className="size-11 ring-2 ring-primary/30 shrink-0 rounded-full overflow-hidden">
                          <img
                            alt="AI assistant"
                            className="object-cover w-full h-full"
                            data-authorname="Justin Ha"
                            data-authorurl="https://unsplash.com/@mekanizm"
                            data-blurhash="LUEoe#Ny8|slrqWDxts.0NxDo}R."
                            data-photoid="q2iOc-BtN_4"
                            src="https://images.unsplash.com/photo-1657642119697-6a70dc74c03d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3ODc2NDd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMEFJJTIwcm9ib3QlMjBhc3Npc3RhbnQlMjBpbGx1c3RyYXRpb258ZW58MXwyfHx8MTc4MzM1MDc2N3ww&ixlib=rb-4.1.0&q=80&w=400"
                          />
                        </div>
                        <div className="flex flex-col">
                          <CardTitle className="text-base leading-6">
                            AI Guidance
                          </CardTitle>
                          <span className="font-medium text-zinc-100 text-[11px] flex items-center gap-1">
                            <span className="size-1.5 rounded-full bg-zinc-100" />
                            Analyzing as you type
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-4">
                      <div className="rounded-xl bg-[#ff6900]/5 border-[#ff6900]/20 border-1 border-solid flex p-4 flex-col gap-2">
                        <span className="font-semibold uppercase text-[#ff6900] text-xs leading-4 tracking-wide">
                          Estimated Priority Score
                        </span>
                        <div className="flex items-end gap-2">
                          <span className="leading-none font-bold text-[#ff6900] text-4xl leading-10">
                            82
                          </span>
                          <span className="text-[#71717b] text-sm leading-5 mb-1">
                            / 100
                          </span>
                        </div>
                        <div className="rounded-full bg-[#ff6900]/15 w-full h-2 overflow-hidden">
                          <div className="w-[82%] bg-[linear-gradient(90deg,oklch(0.769_0.188_70.08),oklch(0.705_0.213_47.604))] rounded-full h-full" />
                        </div>
                        <span className="text-[#71717b] text-[11px]">
                          High urgency — likely to be escalated quickly.
                        </span>
                      </div>
                      <Separator />
                      <div className="flex flex-col gap-3">
                        <span className="font-semibold uppercase text-[#71717b] text-xs leading-4 tracking-wide">
                          Tips for effective complaints
                        </span>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 shrink-0 text-zinc-100 mt-0.5" />
                          <p className="text-zinc-950 text-xs leading-4">
                            Be specific about the exact location and landmarks.
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 shrink-0 text-zinc-100 mt-0.5" />
                          <p className="text-zinc-950 text-xs leading-4">
                            Attach clear photos showing the issue.
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="size-4 shrink-0 text-zinc-100 mt-0.5" />
                          <p className="text-zinc-950 text-xs leading-4">
                            Mention how long the problem has persisted.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-sm rounded-2xl bg-zinc-100/5 border-zinc-200 border-0 border-solid p-6 gap-4">
                    <CardHeader className="p-0 gap-1">
                      <CardTitle className="text-sm leading-5 flex items-center gap-2">
                        <Wand2 className="size-4 text-zinc-100" />
                        Real-time Suggestions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex p-0 flex-col gap-3">
                      <div className="rounded-lg bg-white border-zinc-200 border-1 border-solid flex p-3 items-start gap-2">
                        <Lightbulb className="size-4 shrink-0 text-[#ff6900] mt-0.5" />
                        <p className="text-xs leading-4">
                          Consider adding a photo — reports with images are
                          resolved
                          <span className="font-semibold text-zinc-100">
                            2.3x faster
                          </span>
                          .
                        </p>
                      </div>
                      <div className="rounded-lg bg-white border-zinc-200 border-1 border-solid flex p-3 items-start gap-2">
                        <Info className="size-4 shrink-0 text-[#1E88E5] mt-0.5" />
                        <p className="text-xs leading-4">
                          Your title looks a bit short. A descriptive title
                          helps routing.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-sm rounded-2xl border-zinc-200 border-0 border-solid p-4 gap-0">
                    <div className="flex items-center gap-3">
                      <div className="size-9 shrink-0 rounded-full bg-zinc-100/15 flex justify-center items-center">
                        <ShieldCheck className="size-4 text-zinc-100" />
                      </div>
                      <p className="text-[#71717b] text-xs leading-4">
                        Your complaint is
                        <span className="font-semibold text-zinc-950">{`secure & tracked`}</span>
                        end-to-end.
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
