"use client";

import { useState } from "react";

const GRID_ROWS = 10;
const GRID_COLS = 14;

function seededRandom(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

function generateHeatData() {
  const center = { r: 4.5, c: 7 };
  const rows: number[][] = [];
  let seed = 0;
  for (let r = 0; r < GRID_ROWS; r++) {
    const row: number[] = [];
    for (let c = 0; c < GRID_COLS; c++) {
      const dist = Math.sqrt(Math.pow((r - center.r) * 1.2, 2) + Math.pow((c - center.c) * 0.9, 2));
      const base = Math.max(0, 1 - dist / 5.5);
      const noise = seededRandom(seed++) * 0.3;
      row.push(Math.min(1, base + noise));
    }
    rows.push(row);
  }
  return rows;
}

const heatData = generateHeatData();

function cellColor(val: number) {
  if (val < 0.15) return "#fafafa";
  if (val < 0.3)  return "#fed7aa";
  if (val < 0.5)  return "#fb923c";
  if (val < 0.65) return "#f97316";
  if (val < 0.8)  return "#ea580c";
  return "#c2410c";
}

const constituencies = ["All Constituencies", "Ward 1-5", "Ward 6-10", "Ward 11-15"];

export default function IssueHeatmap() {
  const [selected, setSelected] = useState("All Constituencies");

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-zinc-200 h-full">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-zinc-950">AI Issue Heatmap</h3>
        <select
          value={selected}
          onChange={e => setSelected(e.target.value)}
          className="text-xs border border-zinc-200 rounded-lg px-2 py-1 text-[#71717b] bg-white focus:outline-none focus:ring-1 focus:ring-[#ff6900]"
        >
          {constituencies.map(c => <option key={c}>{c}</option>)}
        </select>
      </div>
      <div className="rounded-xl overflow-hidden border border-zinc-200">
        {heatData.map((row, ri) => (
          <div key={ri} className="flex">
            {row.map((val, ci) => (
              <div
                key={ci}
                className="flex-1 h-[18px] cursor-pointer hover:opacity-70 transition-opacity"
                style={{ background: cellColor(val) }}
                title={`Intensity: ${(val * 100).toFixed(0)}%`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <span className="text-[10px] text-[#71717b]">Low</span>
        <div className="flex-1 h-2 rounded-full" style={{ background: "linear-gradient(to right, #fed7aa, #fb923c, #ea580c, #c2410c)" }} />
        <span className="text-[10px] text-[#71717b]">High</span>
      </div>
    </div>
  );
}
