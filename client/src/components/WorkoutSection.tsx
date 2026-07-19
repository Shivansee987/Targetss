/**
 * Workout Section — 3-phase training plan with mission-status header
 * Design: Official training document with structured tables
 */
import { useState } from "react";
import { WORKOUT_PHASES } from "@/lib/data";
import { Dumbbell } from "lucide-react";

function WorkoutTable({ phase }: { phase: typeof WORKOUT_PHASES[0] }) {
  return (
    <div className="space-y-8">
      {/* Phase header */}
      <div className="bg-card border border-border rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Dumbbell size={18} className="text-amber-400" />
          <h3 className="text-white font-semibold text-sm">{phase.phase}</h3>
        </div>
        <span className={`text-[10px] px-2 py-1 rounded font-mono uppercase tracking-wider ${
          phase.intensity === "Low" ? "bg-emerald-500/15 text-emerald-400" :
          phase.intensity === "Medium" ? "bg-amber-500/15 text-amber-400" :
          "bg-red-500/15 text-red-400"
        }`}>
          Intensity: {phase.intensity}
        </span>
      </div>

      {/* Morning Table */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-amber-400" />
          <h4 className="text-white font-mono text-xs uppercase tracking-wider">Morning Session — 05:15 to 06:30</h4>
        </div>
        <div className="bg-card/50 border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-[#0C0C1D]/50">
                <th className="text-left py-2 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono w-20">Day</th>
                <th className="text-left py-2 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono">Activity</th>
                <th className="text-right py-2 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono w-20">Time</th>
              </tr>
            </thead>
            <tbody>
              {phase.morning.map((day, i) => (
                <tr key={i} className="border-b border-border/30 hover:bg-amber-400/[0.03] transition-colors">
                  <td className="py-2.5 px-4 font-mono text-xs text-amber-400/70">{day.day}</td>
                  <td className="py-2.5 px-4 text-slate-200 text-sm">{day.activity}</td>
                  <td className="py-2.5 px-4 text-right font-mono text-xs text-slate-400">{day.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Evening Table */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-amber-400/50" />
          <h4 className="text-white font-mono text-xs uppercase tracking-wider">Evening Session — 18:00 to 19:30</h4>
        </div>
        <div className="bg-card/50 border border-border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-[#0C0C1D]/50">
                <th className="text-left py-2 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono w-20">Day</th>
                <th className="text-left py-2 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono">Activity</th>
                <th className="text-right py-2 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono w-20">Time</th>
              </tr>
            </thead>
            <tbody>
              {phase.evening.map((day, i) => (
                <tr key={i} className="border-b border-border/30 hover:bg-amber-400/[0.03] transition-colors">
                  <td className="py-2.5 px-4 font-mono text-xs text-amber-400/70">{day.day}</td>
                  <td className="py-2.5 px-4 text-slate-200 text-sm">{day.activity}</td>
                  <td className="py-2.5 px-4 text-right font-mono text-xs text-slate-400">{day.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function WorkoutSection() {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <section id="workout" className="py-20 bg-[#0E0E20]">
      <div className="container">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 04 — Training Program
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              WORKOUT PLAN
            </h2>
          </div>
        </div>

        <p className="text-slate-400 mb-8 max-w-2xl text-sm">
          Progressive overload across 3 phases. No high-intensity until medically cleared.
          Start at Phase 1 and advance only when targets are met.
        </p>

        {/* Phase Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {WORKOUT_PHASES.map((phase, i) => (
            <button
              key={i}
              onClick={() => setActivePhase(i)}
              className={`px-4 py-2 rounded text-xs font-mono uppercase tracking-wider transition-all duration-200 ${
                activePhase === i
                  ? "bg-amber-500 text-[#0C0C1D]"
                  : "bg-card border border-border text-slate-400 hover:border-amber-500/30 hover:text-slate-200"
              }`}
            >
              {phase.phase.split(":")[0].trim()}
            </button>
          ))}
        </div>

        <WorkoutTable phase={WORKOUT_PHASES[activePhase]} />
      </div>
    </section>
  );
}
