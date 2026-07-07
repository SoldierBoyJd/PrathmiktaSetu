import { useEffect } from "react";
import {
  ArrowBigUp,
  ArrowDownWideNarrow,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Construction,
  Droplets,
  Flame,
  GraduationCap,
  Lightbulb,
  Map,
  MapPin,
  Maximize2,
  Plus,
  Search,
  Sparkles,
  Tag,
  TriangleAlert,
  Waypoints,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function App() {
  return (
    <div>
      <div className="font-sans bg-white text-zinc-950 w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <header className="sticky z-30 bg-white border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid top-0 w-full h-18">
          <div className="max-w-[1140px] flex mx-auto px-8 justify-between items-center h-full">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="size-9 rounded-lg bg-[#ff6900] flex justify-center items-center">
                  <Waypoints className="size-5 text-orange-50" />
                </div>
                <div className="leading-none flex flex-col">
                  <span className="font-bold text-zinc-950 text-base leading-6 tracking-tight">
                    Prathmikta Setu
                  </span>
                  <span className="font-medium text-[#71717b] text-[11px]">{`Bridging Citizens & Governance`}</span>
                </div>
              </div>
              <nav className="flex items-center gap-1">
                <a className="font-medium rounded-lg text-[#71717b] text-sm leading-5 px-3 py-2">
                  Home
                </a>
                <a className="font-semibold rounded-lg text-[#ff6900] text-sm leading-5 px-3 py-2">
                  Issues
                </a>
                <a className="font-medium rounded-lg text-[#71717b] text-sm leading-5 px-3 py-2">
                  Track
                </a>
                <a className="font-medium rounded-lg text-[#71717b] text-sm leading-5 px-3 py-2">
                  Transparency
                </a>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Button
                className="rounded-lg text-[#71717b]"
                size="icon"
                variant="ghost"
              >
                <Bell className="size-5" />
              </Button>
              <Button className="rounded-lg bg-[#ff6900] text-orange-50 px-4 gap-2">
                <Plus className="size-4" />
                Submit Complaint
              </Button>
            </div>
          </div>
        </header>
        <main className="max-w-[1140px] mx-auto p-8">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-zinc-950 text-2xl leading-8 tracking-tight">
              Public Issue Feed
            </h1>
            <p className="text-[#71717b] text-sm leading-5">
              Explore, upvote, and track civic issues reported across your
              constituency.
            </p>
          </div>
          <div className="flex mt-6 flex-col gap-4">
            <div className="relative">
              <Search className="top-1/2 size-5 -translate-y-1/2 text-[#71717b] absolute left-4" />
              <Input
                className="rounded-xl bg-white text-sm leading-5 border-zinc-200 border-0 border-solid pl-12 h-12"
                placeholder="Search issues by title, location, or keyword..."
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                className="font-medium rounded-full bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-0 border-solid px-3 gap-2 h-9"
                variant="outline"
              >
                <span className="size-2 rounded-full bg-[#ff6900]" />
                Status
                <ChevronDown className="size-4 text-[#71717b]" />
              </Button>
              <Button
                className="font-medium rounded-full bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-0 border-solid px-3 gap-2 h-9"
                variant="outline"
              >
                <MapPin className="size-4 text-[#71717b]" />
                Location
                <ChevronDown className="size-4 text-[#71717b]" />
              </Button>
              <Button
                className="font-medium rounded-full bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-0 border-solid px-3 gap-2 h-9"
                variant="outline"
              >
                <Tag className="size-4 text-[#71717b]" />
                Category
                <ChevronDown className="size-4 text-[#71717b]" />
              </Button>
              <Button
                className="font-medium rounded-full bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-0 border-solid px-3 gap-2 h-9"
                variant="outline"
              >
                <Flame className="size-4 text-[#71717b]" />
                Popularity
                <ChevronDown className="size-4 text-[#71717b]" />
              </Button>
              <Button
                className="font-medium rounded-full bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-0 border-solid px-3 gap-2 h-9"
                variant="outline"
              >
                <ArrowBigUp className="size-4 text-[#71717b]" />
                Upvotes
                <ChevronDown className="size-4 text-[#71717b]" />
              </Button>
              <div className="flex ml-auto items-center gap-2">
                <span className="text-[#71717b] text-sm leading-5">
                  Sort by
                </span>
                <Button
                  className="font-medium rounded-full bg-white text-zinc-950 text-sm leading-5 border-zinc-200 border-0 border-solid px-3 gap-2 h-9"
                  variant="outline"
                >
                  <ArrowDownWideNarrow className="size-4 text-[#71717b]" />
                  Most Recent
                  <ChevronDown className="size-4 text-[#71717b]" />
                </Button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 mt-6 gap-6">
            <div className="col-span-8 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="font-medium text-[#71717b] text-sm leading-5">
                  Showing
                  <span className="font-semibold text-zinc-950">1,248</span>
                  issues
                </span>
                <div className="font-medium text-[#71717b] text-xs leading-4 flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    <span className="size-2 rounded-full bg-[#ff6900]" />
                    Pending
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-2 bg-[oklch(0.55_0.15_150)] rounded-full" />
                    Resolved
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="size-2 rounded-full bg-[#e7000b]" />
                    Urgent
                  </span>
                </div>
              </div>
              <Card className="rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 gap-4">
                  <div className="size-12 shrink-0 bg-[oklch(0.577_0.245_27.325/0.1)] rounded-xl flex justify-center items-center">
                    <TriangleAlert className="size-6 text-[#e7000b]" />
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-zinc-950 text-base leading-6">
                            Open manhole near Sector 14 bus stand
                          </h3>
                          <Badge className="font-semibold rounded-full bg-[#e7000b]/10 text-[#e7000b] text-xs leading-4 px-2 py-0.5">
                            Urgent
                          </Badge>
                        </div>
                        <p className="line-clamp-2 max-w-[520px] text-[#71717b] text-sm leading-5">
                          A large uncovered manhole on the main pedestrian path
                          poses a serious safety risk, especially at night with
                          no street lighting nearby. Multiple residents have
                          reported near-accidents.
                        </p>
                      </div>
                      <div className="rounded-xl border-zinc-200 border-1 border-solid flex px-3 py-2 flex-col items-center gap-1">
                        <ArrowBigUp className="size-5 text-[#ff6900]" />
                        <span className="font-bold text-zinc-950 text-sm leading-5">
                          642
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#71717b] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        Sector 14, Gurugram
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="size-3.5" />
                        Drainage
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />2 hours ago
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 gap-4">
                  <div className="size-12 shrink-0 bg-[oklch(0.705_0.213_47.604/0.1)] rounded-xl flex justify-center items-center">
                    <Construction className="size-6 text-[#ff6900]" />
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-zinc-950 text-base leading-6">
                            Severe potholes on Old Airport Road
                          </h3>
                          <Badge className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-2 py-0.5">
                            Pending
                          </Badge>
                        </div>
                        <p className="line-clamp-2 max-w-[520px] text-[#71717b] text-sm leading-5">
                          The road stretch has developed multiple deep potholes
                          causing daily traffic congestion and vehicle damage.
                          Waterlogging worsens the condition during monsoon.
                        </p>
                      </div>
                      <div className="rounded-xl border-zinc-200 border-1 border-solid flex px-3 py-2 flex-col items-center gap-1">
                        <ArrowBigUp className="size-5 text-[#ff6900]" />
                        <span className="font-bold text-zinc-950 text-sm leading-5">
                          1.2k
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#71717b] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        HAL Road, Bengaluru
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="size-3.5" />
                        Roads
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />5 hours ago
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 gap-4">
                  <div className="size-12 shrink-0 bg-[oklch(0.55_0.15_150/0.12)] rounded-xl flex justify-center items-center">
                    <Droplets className="size-6 text-[oklch(0.5_0.15_150)]" />
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-zinc-950 text-base leading-6">
                            Water supply restored in Ward 22
                          </h3>
                          <Badge className="bg-[oklch(0.55_0.15_150/0.12)] text-[oklch(0.45_0.15_150)] font-semibold rounded-full text-xs leading-4 px-2 py-0.5">
                            Resolved
                          </Badge>
                        </div>
                        <p className="line-clamp-2 max-w-[520px] text-[#71717b] text-sm leading-5">
                          The recurring water shortage due to a broken main
                          pipeline has been repaired by the municipal
                          corporation. Regular supply has resumed for over 3,000
                          households.
                        </p>
                      </div>
                      <div className="rounded-xl border-zinc-200 border-1 border-solid flex px-3 py-2 flex-col items-center gap-1">
                        <ArrowBigUp className="size-5 text-[#ff6900]" />
                        <span className="font-bold text-zinc-950 text-sm leading-5">
                          894
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#71717b] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        Ward 22, Pune
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="size-3.5" />
                        Water
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />1 day ago
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 gap-4">
                  <div className="size-12 shrink-0 bg-[oklch(0.705_0.213_47.604/0.1)] rounded-xl flex justify-center items-center">
                    <Lightbulb className="size-6 text-[#ff6900]" />
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-zinc-950 text-base leading-6">
                            Non-functional street lights on MG Road
                          </h3>
                          <Badge className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-2 py-0.5">
                            Pending
                          </Badge>
                        </div>
                        <p className="line-clamp-2 max-w-[520px] text-[#71717b] text-sm leading-5">
                          Over a dozen street lights have been non-operational
                          for the past three weeks, raising safety concerns for
                          commuters and shopkeepers in the evening hours.
                        </p>
                      </div>
                      <div className="rounded-xl border-zinc-200 border-1 border-solid flex px-3 py-2 flex-col items-center gap-1">
                        <ArrowBigUp className="size-5 text-[#ff6900]" />
                        <span className="font-bold text-zinc-950 text-sm leading-5">
                          521
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#71717b] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        MG Road, Indore
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="size-3.5" />
                        Electricity
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />2 days ago
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-4">
                <CardContent className="flex p-0 gap-4">
                  <div className="size-12 shrink-0 bg-[oklch(0.705_0.213_47.604/0.1)] rounded-xl flex justify-center items-center">
                    <GraduationCap className="size-6 text-[#ff6900]" />
                  </div>
                  <div className="flex flex-col flex-1 gap-3">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-zinc-950 text-base leading-6">
                            Government school needs boundary wall repair
                          </h3>
                          <Badge className="font-semibold rounded-full bg-[#ff6900]/10 text-[#ff6900] text-xs leading-4 px-2 py-0.5">
                            Pending
                          </Badge>
                        </div>
                        <p className="line-clamp-2 max-w-[520px] text-[#71717b] text-sm leading-5">
                          The collapsed boundary wall of the primary school
                          compromises student safety and allows stray animals to
                          enter the premises. Parents have requested urgent
                          repairs.
                        </p>
                      </div>
                      <div className="rounded-xl border-zinc-200 border-1 border-solid flex px-3 py-2 flex-col items-center gap-1">
                        <ArrowBigUp className="size-5 text-[#ff6900]" />
                        <span className="font-bold text-zinc-950 text-sm leading-5">
                          378
                        </span>
                      </div>
                    </div>
                    <div className="font-medium text-[#71717b] text-xs leading-4 flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3.5" />
                        Rampur, Lucknow
                      </span>
                      <span className="flex items-center gap-1">
                        <Tag className="size-3.5" />
                        Education
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="size-3.5" />3 days ago
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex mt-2 justify-center items-center gap-2">
                <Button
                  className="size-9 rounded-lg text-[#71717b] border-zinc-200 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  <ChevronLeft className="size-4" />
                </Button>
                <Button
                  className="size-9 rounded-lg bg-[#ff6900] text-orange-50"
                  size="icon"
                >
                  1
                </Button>
                <Button
                  className="size-9 rounded-lg text-zinc-950 border-zinc-200 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  2
                </Button>
                <Button
                  className="size-9 rounded-lg text-zinc-950 border-zinc-200 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  3
                </Button>
                <span className="text-[#71717b] text-sm leading-5 px-1">
                  ...
                </span>
                <Button
                  className="size-9 rounded-lg text-zinc-950 border-zinc-200 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  42
                </Button>
                <Button
                  className="size-9 rounded-lg text-[#71717b] border-zinc-200 border-0 border-solid"
                  size="icon"
                  variant="outline"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
            <div className="col-span-4">
              <div className="sticky flex top-24 flex-col gap-4">
                <Card className="rounded-2xl border-zinc-200 border-0 border-solid p-0 gap-4 overflow-hidden">
                  <div className="relative w-full h-75">
                    <img
                      alt="Map preview of pinned issue locations"
                      className="object-cover w-full h-full"
                      src="https://screens-image-components-public.s3.eu-north-1.amazonaws.com/city-navigation-map.png"
                    />
                    <div className="left-1/4 top-1/3 size-8 ring-4 ring-primary/25 font-bold rounded-full bg-[#ff6900] text-orange-50 text-xs leading-4 flex absolute justify-center items-center">
                      14
                    </div>
                    <div className="right-1/4 top-1/2 size-7 ring-4 ring-destructive/25 font-bold rounded-full bg-[#e7000b] text-white text-xs leading-4 flex absolute justify-center items-center">
                      7
                    </div>
                    <div className="bottom-1/4 left-1/3 size-6 bg-[oklch(0.5_0.15_150)] ring-4 ring-[oklch(0.5_0.15_150/0.25)] font-bold rounded-full text-white text-xs leading-4 flex absolute justify-center items-center">
                      5
                    </div>
                    <div className="bg-[linear-gradient(to_bottom,oklch(0.141_0.005_285.823/0.55),transparent)] absolute inset-x-0 top-0 p-4">
                      <div className="font-semibold text-white text-sm leading-5 flex items-center gap-2">
                        <Map className="size-4" />
                        Issue Map Preview
                      </div>
                    </div>
                  </div>
                  <CardContent className="flex p-4 flex-col gap-3">
                    <div className="font-medium text-xs leading-4 flex justify-between items-center">
                      <span className="text-[#71717b] flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full bg-[#ff6900]" />
                        Pending clusters
                      </span>
                      <span className="font-semibold text-zinc-950">86</span>
                    </div>
                    <div className="font-medium text-xs leading-4 flex justify-between items-center">
                      <span className="text-[#71717b] flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full bg-[#e7000b]" />
                        Urgent hotspots
                      </span>
                      <span className="font-semibold text-zinc-950">12</span>
                    </div>
                    <div className="font-medium text-xs leading-4 flex justify-between items-center">
                      <span className="text-[#71717b] flex items-center gap-1.5">
                        <span className="size-2.5 bg-[oklch(0.5_0.15_150)] rounded-full" />
                        Resolved areas
                      </span>
                      <span className="font-semibold text-zinc-950">340</span>
                    </div>
                    <Button
                      className="font-medium rounded-lg text-zinc-950 text-sm leading-5 border-zinc-200 border-0 border-solid mt-1 gap-2 w-full"
                      variant="outline"
                    >
                      <Maximize2 className="size-4" />
                      Open Full Heatmap
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-[oklch(0.705_0.213_47.604/0.06)] rounded-2xl border-zinc-200 border-0 border-solid p-6 gap-3">
                  <CardContent className="flex p-0 flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-lg bg-[#ff6900] flex justify-center items-center">
                        <Sparkles className="size-4 text-orange-50" />
                      </div>
                      <span className="font-semibold text-zinc-950 text-sm leading-5">
                        AI Insight
                      </span>
                    </div>
                    <p className="leading-relaxed text-[#71717b] text-sm leading-5">
                      Drainage and road issues account for
                      <span className="font-semibold text-zinc-950">58%</span>of
                      this week's urgent reports, concentrated around central
                      wards. Prioritizing these could impact
                      <span className="font-semibold text-[#ff6900]">
                        42,000+
                      </span>
                      citizens.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
