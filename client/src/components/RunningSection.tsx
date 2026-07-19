/**
 * Running Section — Progressive running plan with gradient progress visualization
 * Design: Field schedule mode with gradient progress indicator
 */
import { RUNNING_PROGRESSION } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export default function RunningSection() {
  return (
    <section id="running" className="py-20 bg-[#0E0E20]">
      <div className="container">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 05 — Running Progression
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              ROAD TO 2.4 KM
            </h2>
          </div>
        </div>

        <p className="text-slate-400 mb-8 max-w-2xl text-sm">
          From walk-jog beginner to sub-12 minute 2.4 km. Progressive distance building with pace discipline.
          Follow the timeline — do not skip phases.
        </p>

        {/* Gradient Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2">
            <span>Start</span>
            <span>Target Achieved</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden bg-gradient-to-r from-red-500/40 via-amber-500/40 to-emerald-500/40 relative">
            <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full" style={{ width: "70%" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-mono text-white font-semibold">WEEK 1–24 PROGRESSION</div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-amber-500/20">
                <th className="text-left py-3 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono w-24">Weeks</th>
                <th className="text-left py-3 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono w-36">Distance</th>
                <th className="text-left py-3 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono w-28">Pace</th>
                <th className="text-left py-3 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono">Focus</th>
              </tr>
            </thead>
            <tbody>
              {RUNNING_PROGRESSION.map((week, i) => (
                <tr
                  key={i}
                  className={`border-b border-border/30 transition-colors ${
                    i >= 8 ? "bg-emerald-500/[0.03]" : ""
                  } hover:bg-amber-400/[0.03]`}
                >
                  <td className="py-3 px-4 font-mono text-xs text-amber-400/70">{week.week}</td>
                  <td className="py-3 px-4 text-white text-sm font-medium">{week.distance}</td>
                  <td className="py-3 px-4 font-mono text-xs text-slate-300">{week.pace}</td>
                  <td className="py-3 px-4 text-slate-400 text-sm">{week.focus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tips — compact grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-5">
            <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <ArrowRight size={14} className="text-amber-400" />
              Running Technique
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Land mid-foot, not on heels</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Arms at 90 degrees, swing forward-back</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Upright posture, slight forward lean</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Breathe rhythmically: 2 steps in, 2 out</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
              <ArrowRight size={14} className="text-amber-400" />
              Pace Strategy
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Start slower than target — negative splits</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Use a running app to track pace</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> First 400m should feel easy, not fast</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Practice at 6 AM to match test conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
