"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { PageHeader } from "@/components/ui/page-header";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const simData = [
  { month: "Jul", baseline: 1200, optimized: 980, predicted: 1050 },
  { month: "Aug", baseline: 1350, optimized: 1050, predicted: 1100 },
  { month: "Sep", baseline: 1180, optimized: 920, predicted: 980 },
  { month: "Oct", baseline: 1420, optimized: 1080, predicted: 1150 },
  { month: "Nov", baseline: 1500, optimized: 1120, predicted: 1200 },
  { month: "Dec", baseline: 1280, optimized: 960, predicted: 1020 },
];

const infrastructure = [
  { asset: "Main Water Pipeline – Ward 8", health: 42, status: "Critical", nextMaint: "Overdue" },
  { asset: "Road Network – Ward 12", health: 58, status: "Warning", nextMaint: "Jul 2025" },
  { asset: "Electricity Grid – Sector A", health: 74, status: "Good", nextMaint: "Sep 2025" },
  { asset: "Drain System – Ward 9", health: 35, status: "Critical", nextMaint: "Overdue" },
  { asset: "Street Lighting – Ward 5", health: 88, status: "Good", nextMaint: "Dec 2025" },
];

const healthColors: Record<string, string> = {
  Critical: "#E74C3C",
  Warning: "#F5831F",
  Good: "#27AE60",
};

export default function DigitalTwinPage() {
  return (
    <DashboardLayout>
      <PageHeader
        title="Digital Twin"
        subtitle="Simulate policy decisions and infrastructure changes before deploying them in the real world."
      />

      <div className="grid grid-cols-12 gap-4">
        {/* Simulation chart */}
        <div className="col-span-8 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-[#1A2332]">Complaints Forecast Simulation</h3>
            <div className="flex items-center gap-2">
              <button className="text-xs bg-[#2D7A3A] text-white px-3 py-1.5 rounded-lg font-medium">Run Simulation</button>
              <button className="text-xs border border-[#E2E8F0] text-[#4A5568] px-3 py-1.5 rounded-lg font-medium hover:bg-[#F5F7FA]">Reset</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={simData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F0F0F0" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#A0AEC0" }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E2E8F0" }} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="baseline" name="Baseline" stroke="#A0AEC0" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              <Line type="monotone" dataKey="optimized" name="Optimized" stroke="#2D7A3A" strokeWidth={2.5} dot={false} />
              <Line type="monotone" dataKey="predicted" name="AI Predicted" stroke="#2980B9" strokeWidth={2} strokeDasharray="3 3" dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-3 p-3 bg-[#E8F5E9] rounded-lg border border-[#C6E6CB]">
            <p className="text-xs font-semibold text-[#2D7A3A]">AI Insight</p>
            <p className="text-[11px] text-[#4A5568] mt-0.5 leading-relaxed">
              Implementing the optimized maintenance schedule reduces projected complaints by <strong>22%</strong> over the next 6 months, saving an estimated ₹14.2 Lakhs in emergency repair costs.
            </p>
          </div>
        </div>

        {/* Parameters panel */}
        <div className="col-span-4 bg-white rounded-xl p-5 shadow-sm border border-[#E2E8F0]">
          <h3 className="text-sm font-semibold text-[#1A2332] mb-4">Simulation Parameters</h3>
          <div className="space-y-4">
            {[
              { label: "Budget Increase", value: 20, unit: "%" },
              { label: "Staff Deployment", value: 35, unit: "%" },
              { label: "Maintenance Frequency", value: 60, unit: "%" },
              { label: "Response Time SLA", value: 50, unit: "%" },
            ].map((p) => (
              <div key={p.label}>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-[#4A5568] font-medium">{p.label}</span>
                  <span className="text-[#2D7A3A] font-semibold">+{p.value}{p.unit}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={p.value}
                  className="w-full h-1.5 rounded-full appearance-none bg-[#E2E8F0] accent-[#2D7A3A] cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Infrastructure health */}
        <div className="col-span-12 bg-white rounded-xl shadow-sm border border-[#E2E8F0]">
          <div className="px-4 py-3 border-b border-[#E2E8F0]">
            <h3 className="text-sm font-semibold text-[#1A2332]">Infrastructure Health Monitor</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  {["Asset", "Health Score", "Status", "Next Maintenance"].map((h) => (
                    <th key={h} className="px-4 py-3 text-left font-semibold text-[#A0AEC0] uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F0F0F0]">
                {infrastructure.map((item) => (
                  <tr key={item.asset} className="hover:bg-[#F8FAFC]">
                    <td className="px-4 py-3 font-medium text-[#1A2332]">{item.asset}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-[#EDF2F7] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${item.health}%`, background: healthColors[item.status] }}
                          />
                        </div>
                        <span className="font-semibold" style={{ color: healthColors[item.status] }}>{item.health}%</span>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                        style={{
                          color: healthColors[item.status],
                          background: `${healthColors[item.status]}20`,
                        }}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className={`px-4 py-3 font-medium ${item.nextMaint === "Overdue" ? "text-[#E74C3C]" : "text-[#4A5568]"}`}>
                      {item.nextMaint}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
