/**
 * Assessment Section — Weekly fitness assessment with compact form
 * Design: Official assessment sheet style
 */
import { WEEKLY_ASSESSMENT } from "@/lib/data";
import { useState } from "react";
import { ClipboardList } from "lucide-react";

export default function AssessmentSection() {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="assessment" className="py-20 bg-background">
      <div className="container">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 07 — Weekly Assessment
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              FITNESS TRACKER
            </h2>
          </div>
        </div>

        <p className="text-slate-400 mb-8 max-w-2xl text-sm">
          Log your weekly assessment every Sunday. Track progress and adjust training accordingly.
        </p>

        <div className="bg-card border border-border rounded-lg overflow-hidden">
          {/* Header bar */}
          <div className="px-6 py-3 border-b border-border bg-[#0C0C1D]/50 flex items-center gap-3">
            <ClipboardList size={16} className="text-amber-400" />
            <span className="text-white text-sm font-medium">Weekly Assessment — Sunday 09:00</span>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {WEEKLY_ASSESSMENT.metrics.map((metric, i) => (
                <div key={i} className="space-y-1">
                  <label className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                    {metric.name} <span className="text-slate-600">({metric.unit})</span>
                  </label>
                  <input
                    type="text"
                    value={values[metric.name] || ""}
                    onChange={(e) => handleChange(metric.name, e.target.value)}
                    placeholder={`—`}
                    className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-white font-mono placeholder:text-slate-700 focus:border-amber-500/40 focus:outline-none transition-colors"
                  />
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-border/50 flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
              <div>
                <p className="text-amber-400 text-xs font-medium mb-1">Assessment Protocol</p>
                <ul className="space-y-1 text-[11px] text-slate-400">
                  <li>Perform all physical tests in same conditions — morning, after warm-up</li>
                  <li>Take resting heart rate first thing in the morning</li>
                  <li>Energy/mood scores are subjective — be honest for accurate tracking</li>
                  <li>If energy level is below 5/10, reduce training intensity that week</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
