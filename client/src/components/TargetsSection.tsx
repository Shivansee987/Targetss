/**
 * Targets Section — Physical fitness targets with circular indicators
 * Design: Mission-status readout with tighter amber discipline
 */
import { PHYSICAL_TARGETS } from "@/lib/data";

function MiniRing({ progress, size = 36 }: { progress: number; size?: number }) {
  const strokeWidth = 3;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="oklch(0.2 0.02 260)" strokeWidth={strokeWidth} />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={progress > 50 ? "oklch(0.7 0.15 160)" : "oklch(0.75 0.18 75)"}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
        className="transition-all duration-1000"
      />
    </svg>
  );
}

export default function TargetsSection() {
  return (
    <section id="targets" className="py-20 bg-[#0E0E20]">
      <div className="container">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 02 — Physical Targets
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              YOUR MISSION TARGETS
            </h2>
          </div>
        </div>

        <p className="text-slate-400 mb-10 max-w-2xl text-sm">
          Exceed these standards comfortably. Your body is your first weapon — train it like one.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PHYSICAL_TARGETS.map((target, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-4 hover:border-amber-500/20 transition-all duration-300 flex items-center gap-4"
            >
              {/* Mini progress ring */}
              <div className="flex-shrink-0">
                <MiniRing progress={target.difficulty === "High" ? 15 : target.difficulty === "Medium" ? 35 : 55} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white font-semibold text-sm">{target.exercise}</h3>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono uppercase tracking-wider ${
                    target.difficulty === "High" ? "bg-red-500/15 text-red-400" :
                    target.difficulty === "Medium" ? "bg-amber-500/15 text-amber-400" :
                    "bg-emerald-500/15 text-emerald-400"
                  }`}>
                    {target.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-500 text-xs font-mono">{target.current}</span>
                  <span className="text-slate-600">→</span>
                  <span className="text-amber-400 text-xs font-mono font-semibold">{target.target}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
