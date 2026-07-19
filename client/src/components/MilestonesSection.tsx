/**
 * Milestones Section — Monthly milestones with chevron badge motif
 * Design: Alternates between dashboard and checklist visual modes
 */
import { MONTHLY_MILESTONES } from "@/lib/data";
import { useState } from "react";
import { IMAGES } from "@/lib/data";
import { Check, ChevronRight } from "lucide-react";

export default function MilestonesSection() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section id="milestones" className="py-20 bg-[#0E0E20]">
      <div className="container">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 08 — Monthly Milestones
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              YOUR MILESTONES
            </h2>
          </div>
        </div>

        {/* Progress overview bar */}
        <div className="mb-10 bg-card border border-border rounded-lg p-4 flex items-center gap-4">
          <img src={IMAGES.logo} alt="" className="w-6 h-6 opacity-50" />
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-slate-400 font-mono uppercase tracking-wider">Overall Progress</span>
              <span className="text-amber-400 font-mono">
                {Math.round((checked.size / MONTHLY_MILESTONES.reduce((a, m) => a + m.milestones.length, 0)) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-600 to-amber-400 rounded-full transition-all duration-700"
                style={{
                  width: `${(checked.size / MONTHLY_MILESTONES.reduce((a, m) => a + m.milestones.length, 0)) * 100}%`
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {MONTHLY_MILESTONES.map((month) => {
            const monthChecked = month.milestones.filter((_, i) =>
              checked.has(`${month.month}-${i}`)
            ).length;
            const progress = (monthChecked / month.milestones.length) * 100;
            const isComplete = monthChecked === month.milestones.length;

            return (
              <div
                key={month.month}
                className={`relative bg-card border rounded-lg p-6 transition-all duration-300 overflow-hidden ${
                  isComplete
                    ? "border-emerald-500/30 bg-emerald-500/5"
                    : "border-border hover:border-amber-500/20"
                }`}
              >
                {/* Chevron top-right badge */}
                <div className="absolute top-0 right-0 opacity-10">
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M0 60 L60 0 L60 60 Z" fill={isComplete ? "#10B981" : "#F59E0B"} />
                  </svg>
                </div>

                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    {isComplete ? (
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <Check size={16} className="text-emerald-400" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <span className="font-display text-sm text-amber-400">{month.month}</span>
                      </div>
                    )}
                    <div>
                      <h3 className="text-white font-semibold text-sm">Month {month.month}</h3>
                      <span className="text-[10px] text-slate-500 font-mono">
                        {monthChecked}/{month.milestones.length} complete
                      </span>
                    </div>
                  </div>

                  <ChevronRight size={16} className={isComplete ? "text-emerald-400" : "text-slate-600"} />
                </div>

                {/* Progress bar */}
                <div className="w-full h-1 bg-slate-800 rounded-full mb-5">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      isComplete ? "bg-emerald-400" : "bg-amber-400"
                    }`}
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <ul className="space-y-2.5">
                  {month.milestones.map((milestone, i) => {
                    const key = `${month.month}-${i}`;
                    const isChecked = checked.has(key);
                    return (
                      <li
                        key={i}
                        onClick={() => toggle(key)}
                        className="flex items-start gap-3 cursor-pointer group py-1"
                      >
                        <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded border flex items-center justify-center transition-all ${
                          isChecked
                            ? "bg-emerald-500/20 border-emerald-500/50"
                            : "border-slate-600 group-hover:border-amber-400/50"
                        }`}>
                          {isChecked && <Check size={10} className="text-emerald-400" />}
                        </span>
                        <span className={`text-sm transition-all leading-relaxed ${
                          isChecked ? "text-emerald-400/80" : "text-slate-300 group-hover:text-white"
                        }`}>
                          {milestone}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
