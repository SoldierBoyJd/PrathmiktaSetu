import { useEffect } from "react";
import {
  AlertCircle,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  Clock,
  DollarSign,
  Download,
  Eye,
  FileText,
  Flag,
  HandHeart,
  Landmark,
  LayoutDashboard,
  Lightbulb,
  Map,
  Search,
  Settings,
  Smile,
  Timer,
  TrendingUp,
  User,
  UserPlus,
  Users,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Pie,
  PieChart as RechartsPieChart,
  XAxis,
  YAxis,
} from "recharts";

export default function App() {
  return (
    <div>
      <div className="bg-white text-zinc-950 flex w-full h-fit h-fit min-h-screen w-screen min-w-screen max-w-screen overflow-visible">
        <aside className="shrink-0 bg-neutral-50 border-zinc-200 border-t-0 border-r-1 border-b-0 border-l-0 border-solid flex flex-col w-70 h-239">
          <div className="shrink-0 border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex px-6 items-center gap-2 h-18">
            <div className="size-9 rounded-xl bg-[#ff6900] flex justify-center items-center">
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
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <LayoutDashboard className="size-4 text-[#71717b]" />
              Dashboard
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <Map className="size-4 text-[#71717b]" />
              Heatmap
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <BarChart3 className="size-4 text-[#71717b]" />
              Analytics
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <AlertCircle className="size-4 text-[#71717b]" />
              Complaints
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <Lightbulb className="size-4 text-[#71717b]" />
              Recommendations
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <TrendingUp className="size-4 text-[#71717b]" />
              Priority Scores
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <DollarSign className="size-4 text-[#71717b]" />
              Budget Optimizer
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <AlertTriangle className="size-4 text-[#71717b]" />
              Emergency Alerts
            </a>
            <a className="shadow-sm font-medium rounded-lg bg-[#ff6900] text-orange-50 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <Zap className="size-4" />
              Digital Twin
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <FileText className="size-4 text-[#71717b]" />
              Reports
            </a>
            <a className="transition-colors font-medium rounded-lg text-zinc-950 text-sm leading-5 flex px-4 py-2 items-center gap-2">
              <Settings className="size-4 text-[#71717b]" />
              Settings
            </a>
          </nav>
        </aside>
        <div className="flex flex-col flex-1 h-239 overflow-hidden">
          <header className="shrink-0 sticky z-10 bg-white border-zinc-200 border-t-0 border-r-0 border-b-1 border-l-0 border-solid flex top-0 px-8 justify-between items-center h-18">
            <div className="flex items-center gap-2">
              <Eye className="size-5 text-[#ff6900]" />
              <span className="font-semibold text-sm leading-5">
                Public Transparency Portal
              </span>
              <span className="inline-flex font-medium rounded-full bg-zinc-100 text-[#71717b] text-[11px] ml-2 px-2 py-0.5 items-center gap-1">
                <span className="size-1.5 rounded-full bg-[#1E8E3E]" />
                Live Data
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="rounded-lg border-zinc-200 border-1 border-solid flex px-4 py-2 items-center gap-2 w-64">
                <Search className="size-4 text-[#71717b]" />
                <input
                  className="bg-transparent outline-none text-sm leading-5 w-full"
                  placeholder="Search wards, projects..."
                />
              </div>
              <button className="relative size-9 transition-colors rounded-lg border-zinc-200 border-1 border-solid flex justify-center items-center">
                <Bell className="size-4 text-[#71717b]" />
                <span className="size-2 rounded-full bg-[#ff6900] absolute right-1.5 top-1.5" />
              </button>
              <div className="size-9 rounded-full bg-zinc-100 flex justify-center items-center">
                <User className="size-4 text-[#71717b]" />
              </div>
            </div>
          </header>
          <main className="overflow-y-auto p-8 flex-1">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-2xl leading-8 tracking-tight">
                  Public Transparency Dashboard
                </h1>
                <p className="text-[#71717b] text-sm leading-5">
                  Real-time accountability metrics for constituency development.
                  Every citizen report, resolution, and rupee tracked openly.
                </p>
              </div>
              <div className="grid grid-cols-4 gap-6">
                <Card className="p-6 gap-4">
                  <CardHeader className="p-0 flex-row justify-between items-center gap-2">
                    <span className="font-medium text-[#71717b] text-sm leading-5">
                      Resolved Issues
                    </span>
                    <div className="size-9 rounded-lg bg-[#1E8E3E]/10 flex justify-center items-center">
                      <CheckCircle2 className="size-4 text-[#1E8E3E]" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-1">
                    <span className="font-bold text-[#1E8E3E] text-3xl leading-9">
                      12,847
                    </span>
                    <span className="inline-flex font-medium text-[#1E8E3E] text-xs leading-4 items-center gap-1">
                      <ArrowUpRight className="size-3.5" />
                      +8.2% this month
                    </span>
                  </CardContent>
                </Card>
                <Card className="p-6 gap-4">
                  <CardHeader className="p-0 flex-row justify-between items-center gap-2">
                    <span className="font-medium text-[#71717b] text-sm leading-5">
                      Pending Issues
                    </span>
                    <div className="size-9 rounded-lg bg-[#ff6900]/10 flex justify-center items-center">
                      <Clock className="size-4 text-[#ff6900]" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-1">
                    <span className="font-bold text-[#ff6900] text-3xl leading-9">
                      2,134
                    </span>
                    <span className="inline-flex font-medium text-[#71717b] text-xs leading-4 items-center gap-1">
                      <ArrowDownRight className="size-3.5" />
                      -3.1% this month
                    </span>
                  </CardContent>
                </Card>
                <Card className="p-6 gap-4">
                  <CardHeader className="p-0 flex-row justify-between items-center gap-2">
                    <span className="font-medium text-[#71717b] text-sm leading-5">
                      Budget Utilization
                    </span>
                    <div className="size-9 rounded-lg bg-[#ff6900]/10 flex justify-center items-center">
                      <DollarSign className="size-4 text-[#ff6900]" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-2">
                    <span className="font-bold text-3xl leading-9">74%</span>
                    <div className="rounded-full bg-zinc-100 w-full h-2 overflow-hidden">
                      <div className="w-[74%] rounded-full bg-[#ff6900] h-full" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 gap-4">
                  <CardHeader className="p-0 flex-row justify-between items-center gap-2">
                    <span className="font-medium text-[#71717b] text-sm leading-5">
                      Total Citizen Reports
                    </span>
                    <div className="size-9 rounded-lg bg-zinc-100 flex justify-center items-center">
                      <Users className="size-4 text-[#71717b]" />
                    </div>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col gap-1">
                    <span className="font-bold text-3xl leading-9">14,981</span>
                    <span className="inline-flex font-medium text-[#71717b] text-xs leading-4 items-center gap-1">
                      <UserPlus className="size-3.5" />
                      +412 new today
                    </span>
                  </CardContent>
                </Card>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <Card className="col-span-2 p-6 gap-4">
                  <CardHeader className="p-0 gap-1">
                    <CardTitle className="font-semibold text-base leading-6">
                      Ward Performance
                    </CardTitle>
                    <CardDescription className="text-[#71717b] text-xs leading-4">
                      Issues reported vs resolved across top wards
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ChartContainer
                      className="w-full h-65"
                      config={{
                        reported: {
                          color: "oklch(0.705 0.213 47.604)",
                          label: "Reported",
                        },
                        resolved: {
                          color: "oklch(0.6 0.17 152)",
                          label: "Resolved",
                        },
                      }}
                    >
                      <RechartsBarChart
                        data={[
                          { reported: 820, resolved: 640, ward: "Andheri" },
                          { reported: 640, resolved: 560, ward: "Bandra" },
                          { reported: 710, resolved: 520, ward: "Dadar" },
                          { reported: 580, resolved: 490, ward: "Kurla" },
                          { reported: 490, resolved: 430, ward: "Worli" },
                          { reported: 660, resolved: 480, ward: "Malad" },
                        ]}
                      >
                        <CartesianGrid
                          stroke="oklch(0.92 0.004 286.32)"
                          vertical={false}
                        />
                        <XAxis
                          axisLine={false}
                          dataKey="ward"
                          fontSize={12}
                          tickLine={false}
                          tickMargin={8}
                        />
                        <YAxis
                          axisLine={false}
                          fontSize={12}
                          tickLine={false}
                        />
                        <ChartTooltip />
                        <Bar
                          dataKey="reported"
                          fill="oklch(0.705 0.213 47.604)"
                          radius={[4, 4, 0, 0]}
                        />
                        <Bar
                          dataKey="resolved"
                          fill="oklch(0.6 0.17 152)"
                          radius={[4, 4, 0, 0]}
                        />
                      </RechartsBarChart>
                    </ChartContainer>
                    <div className="flex pt-4 items-center gap-6">
                      <span className="inline-flex text-[#71717b] text-xs leading-4 items-center gap-2">
                        <span className="size-2.5 rounded-full bg-[#ff6900]" />
                        Reported
                      </span>
                      <span className="inline-flex text-[#71717b] text-xs leading-4 items-center gap-2">
                        <span className="size-2.5 rounded-full bg-[#1E8E3E]" />
                        Resolved
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 gap-4">
                  <CardHeader className="p-0 gap-1">
                    <CardTitle className="font-semibold text-base leading-6">
                      Project Progress
                    </CardTitle>
                    <CardDescription className="text-[#71717b] text-xs leading-4">
                      Development status breakdown
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex p-0 flex-col items-center">
                    <ChartContainer
                      className="w-full h-50"
                      config={{
                        completed: {
                          color: "oklch(0.6 0.17 152)",
                          label: "Completed",
                        },
                        ongoing: {
                          color: "oklch(0.705 0.213 47.604)",
                          label: "Ongoing",
                        },
                        planned: {
                          color: "oklch(0.92 0.004 286.32)",
                          label: "Planned",
                        },
                      }}
                    >
                      <RechartsPieChart>
                        <ChartTooltip />
                        <Pie
                          data={[
                            {
                              fill: "oklch(0.6 0.17 152)",
                              name: "Completed",
                              value: 48,
                            },
                            {
                              fill: "oklch(0.705 0.213 47.604)",
                              name: "Ongoing",
                              value: 34,
                            },
                            {
                              fill: "oklch(0.92 0.004 286.32)",
                              name: "Planned",
                              value: 18,
                            },
                          ]}
                          dataKey="value"
                          innerRadius={55}
                          nameKey="name"
                          outerRadius={80}
                          strokeWidth={2}
                        />
                      </RechartsPieChart>
                    </ChartContainer>
                    <div className="flex pt-2 flex-col gap-2 w-full">
                      <span className="text-xs leading-4 flex justify-between items-center">
                        <span className="inline-flex text-[#71717b] items-center gap-2">
                          <span className="size-2.5 rounded-full bg-[#1E8E3E]" />
                          Completed
                        </span>
                        <span className="font-medium">48%</span>
                      </span>
                      <span className="text-xs leading-4 flex justify-between items-center">
                        <span className="inline-flex text-[#71717b] items-center gap-2">
                          <span className="size-2.5 rounded-full bg-[#ff6900]" />
                          Ongoing
                        </span>
                        <span className="font-medium">34%</span>
                      </span>
                      <span className="text-xs leading-4 flex justify-between items-center">
                        <span className="inline-flex text-[#71717b] items-center gap-2">
                          <span className="size-2.5 rounded-full bg-zinc-200" />
                          Planned
                        </span>
                        <span className="font-medium">18%</span>
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <Card className="p-6 gap-4">
                <CardHeader className="p-0 gap-1">
                  <CardTitle className="font-semibold text-base leading-6">
                    Community Metrics
                  </CardTitle>
                  <CardDescription className="text-[#71717b] text-xs leading-4">
                    How citizens experience governance in this constituency
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-3 p-0 gap-8">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="inline-flex font-medium text-sm leading-5 items-center gap-2">
                        <Smile className="size-4 text-[#1E8E3E]" />
                        Citizen Satisfaction
                      </span>
                      <span className="font-bold text-[#1E8E3E] text-sm leading-5">
                        86%
                      </span>
                    </div>
                    <div className="rounded-full bg-zinc-100 w-full h-2.5 overflow-hidden">
                      <div className="w-[86%] rounded-full bg-[#1E8E3E] h-full" />
                    </div>
                    <span className="text-[#71717b] text-xs leading-4">
                      Based on 9,240 feedback responses
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="inline-flex font-medium text-sm leading-5 items-center gap-2">
                        <Timer className="size-4 text-[#1E8E3E]" />
                        Response Time Avg
                      </span>
                      <span className="font-bold text-[#1E8E3E] text-sm leading-5">
                        72%
                      </span>
                    </div>
                    <div className="rounded-full bg-zinc-100 w-full h-2.5 overflow-hidden">
                      <div className="w-[72%] rounded-full bg-[#1E8E3E] h-full" />
                    </div>
                    <span className="text-[#71717b] text-xs leading-4">
                      Avg first response: 2.4 days
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="inline-flex font-medium text-sm leading-5 items-center gap-2">
                        <HandHeart className="size-4 text-[#1E8E3E]" />
                        Participation Rate
                      </span>
                      <span className="font-bold text-[#1E8E3E] text-sm leading-5">
                        64%
                      </span>
                    </div>
                    <div className="rounded-full bg-zinc-100 w-full h-2.5 overflow-hidden">
                      <div className="w-[64%] rounded-full bg-[#1E8E3E] h-full" />
                    </div>
                    <span className="text-[#71717b] text-xs leading-4">
                      Active reporters this quarter
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="p-6 gap-4">
                <CardHeader className="p-0 flex-row justify-between items-center gap-1">
                  <div className="flex flex-col gap-1">
                    <CardTitle className="font-semibold text-base leading-6">
                      Ward-Level Accountability
                    </CardTitle>
                    <CardDescription className="text-[#71717b] text-xs leading-4">
                      Detailed performance breakdown by ward
                    </CardDescription>
                  </div>
                  <button className="inline-flex transition-colors font-medium rounded-lg text-sm leading-5 border-zinc-200 border-1 border-solid px-4 py-2 items-center gap-2">
                    <Download className="size-4" />
                    Export
                  </button>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-zinc-200 border-0 border-solid">
                        <TableHead className="font-semibold text-[#71717b] text-xs leading-4">
                          Ward Name
                        </TableHead>
                        <TableHead className="font-semibold text-[#71717b] text-xs leading-4">
                          Issues Reported
                        </TableHead>
                        <TableHead className="font-semibold text-[#71717b] text-xs leading-4">
                          Resolved %
                        </TableHead>
                        <TableHead className="font-semibold text-[#71717b] text-xs leading-4">
                          Budget Spent
                        </TableHead>
                        <TableHead className="font-semibold text-right text-[#71717b] text-xs leading-4">
                          Status
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow className="border-l-primary bg-[#ff6900]/5 border-zinc-200 border-t-0 border-r-0 border-b-0 border-l-2 border-solid">
                        <TableCell className="font-medium">
                          <span className="inline-flex items-center gap-2">
                            <Flag className="size-3.5 text-[#ff6900]" />
                            Dadar West
                          </span>
                        </TableCell>
                        <TableCell>710</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center gap-2">
                            <span className="rounded-full bg-zinc-100 w-20 h-1.5 overflow-hidden">
                              <span className="block w-[52%] rounded-full bg-[#ff6900] h-full" />
                            </span>
                            52%
                          </span>
                        </TableCell>
                        <TableCell>₹4.2 Cr</TableCell>
                        <TableCell className="text-right">
                          <Badge className="rounded-full bg-[#ff6900]/10 text-[#ff6900] border-black/1 border-0 border-solid">
                            Priority
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-zinc-200 border-0 border-solid">
                        <TableCell className="font-medium">
                          Andheri East
                        </TableCell>
                        <TableCell>820</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center gap-2">
                            <span className="rounded-full bg-zinc-100 w-20 h-1.5 overflow-hidden">
                              <span className="block w-[78%] rounded-full bg-[#1E8E3E] h-full" />
                            </span>
                            78%
                          </span>
                        </TableCell>
                        <TableCell>₹6.8 Cr</TableCell>
                        <TableCell className="text-right">
                          <Badge className="rounded-full bg-[#1E8E3E]/10 text-[#1E8E3E] border-black/1 border-0 border-solid">
                            On Track
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-zinc-200 border-0 border-solid">
                        <TableCell className="font-medium">
                          Bandra North
                        </TableCell>
                        <TableCell>640</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center gap-2">
                            <span className="rounded-full bg-zinc-100 w-20 h-1.5 overflow-hidden">
                              <span className="block w-[88%] rounded-full bg-[#1E8E3E] h-full" />
                            </span>
                            88%
                          </span>
                        </TableCell>
                        <TableCell>₹5.1 Cr</TableCell>
                        <TableCell className="text-right">
                          <Badge className="rounded-full bg-[#1E8E3E]/10 text-[#1E8E3E] border-black/1 border-0 border-solid">
                            On Track
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-l-primary bg-[#ff6900]/5 border-zinc-200 border-t-0 border-r-0 border-b-0 border-l-2 border-solid">
                        <TableCell className="font-medium">
                          <span className="inline-flex items-center gap-2">
                            <Flag className="size-3.5 text-[#ff6900]" />
                            Kurla South
                          </span>
                        </TableCell>
                        <TableCell>580</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center gap-2">
                            <span className="rounded-full bg-zinc-100 w-20 h-1.5 overflow-hidden">
                              <span className="block w-[45%] rounded-full bg-[#ff6900] h-full" />
                            </span>
                            45%
                          </span>
                        </TableCell>
                        <TableCell>₹3.4 Cr</TableCell>
                        <TableCell className="text-right">
                          <Badge className="rounded-full bg-[#ff6900]/10 text-[#ff6900] border-black/1 border-0 border-solid">
                            Priority
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-zinc-200 border-0 border-solid">
                        <TableCell className="font-medium">
                          Worli Central
                        </TableCell>
                        <TableCell>490</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center gap-2">
                            <span className="rounded-full bg-zinc-100 w-20 h-1.5 overflow-hidden">
                              <span className="block w-[91%] rounded-full bg-[#1E8E3E] h-full" />
                            </span>
                            91%
                          </span>
                        </TableCell>
                        <TableCell>₹4.9 Cr</TableCell>
                        <TableCell className="text-right">
                          <Badge className="rounded-full bg-[#1E8E3E]/10 text-[#1E8E3E] border-black/1 border-0 border-solid">
                            On Track
                          </Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow className="border-zinc-200 border-0 border-solid">
                        <TableCell className="font-medium">
                          Malad West
                        </TableCell>
                        <TableCell>660</TableCell>
                        <TableCell>
                          <span className="inline-flex items-center gap-2">
                            <span className="rounded-full bg-zinc-100 w-20 h-1.5 overflow-hidden">
                              <span className="block w-[73%] rounded-full bg-[#1E8E3E] h-full" />
                            </span>
                            73%
                          </span>
                        </TableCell>
                        <TableCell>₹5.6 Cr</TableCell>
                        <TableCell className="text-right">
                          <Badge className="rounded-full bg-zinc-100 text-[#71717b] border-black/1 border-0 border-solid">
                            Review
                          </Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
