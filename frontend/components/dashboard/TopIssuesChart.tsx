"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Roads", value: 29.8, color: "#2D7A3A" },
  { name: "Water Supply", value: 20.7, color: "#2980B9" },
  { name: "Sanitation", value: 14.9, color: "#F5831F" },
  { name: "Electricity", value: 12.3, color: "#E74C3C" },
  { name: "Healthcare", value: 9.0, color: "#9B59B6" },
  { name: "Others", value: 13.3, color: "#A0AEC0" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-lg p-2 text-xs">
        <p className="font-semibold text-[#1A2332]">{payload[0].name}</p>
        <p className="text-[#718096]">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const renderCustomLabel = ({
  cx,
  cy,
}: {
  cx: number;
  cy: number;
}) => (
  <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central">
    <tspan x={cx} dy="-6" fontSize="16" fontWeight="bold" fill="#1A2332">
      12,842
    </tspan>
    <tspan x={cx} dy="18" fontSize="9" fill="#718096">
      Total
    </tspan>
  </text>
);

export default function TopIssuesChart() {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-[#E2E8F0] h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-[#1A2332]">Top Issue Categories</h3>
        <button className="text-xs text-[#2D7A3A] font-medium hover:underline">
          View all →
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <ResponsiveContainer width={130} height={130}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={42}
                outerRadius={60}
                dataKey="value"
                labelLine={false}
                label={renderCustomLabel}
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={entry.color} strokeWidth={0} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 space-y-1.5">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: item.color }}
              />
              <span className="text-xs text-[#4A5568] flex-1 truncate">{item.name}</span>
              <span className="text-xs font-semibold text-[#1A2332]">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
