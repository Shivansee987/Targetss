/**
 * Diet Section — Nutrition protocol with structured meal cards
 * Design: Mix of compact cards and full-width tables for variety
 */
import { DIET_PLAN, SUPPLEMENT_GUIDANCE } from "@/lib/data";
import { Pill, Droplets } from "lucide-react";

function MealCard({ meal }: { meal: typeof DIET_PLAN.breakfast.options[0] }) {
  return (
    <div className="bg-card/50 border border-border/50 rounded-lg p-4 hover:border-amber-500/15 transition-colors">
      <p className="text-white font-medium text-sm mb-3 leading-relaxed">{meal.meal}</p>
      <div className="flex gap-4 text-[11px]">
        <span className="text-slate-500">
          <span className="font-mono text-slate-300">{meal.calories}</span> cal
        </span>
        <span className="text-slate-500">
          Iron: <span className={meal.iron === "Very High" ? "text-emerald-400 font-medium" : meal.iron === "High" ? "text-emerald-400/70" : "text-slate-400"}>{meal.iron}</span>
        </span>
        <span className="text-slate-500">
          Protein: <span className={meal.protein === "Very High" ? "text-emerald-400 font-medium" : meal.protein === "High" ? "text-emerald-400/70" : "text-slate-400"}>{meal.protein}</span>
        </span>
      </div>
    </div>
  );
}

export default function DietSection() {
  return (
    <section id="diet" className="py-20 bg-background">
      <div className="container">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 06 — Nutrition Protocol
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              DIET PLAN
            </h2>
          </div>
        </div>

        <p className="text-slate-400 mb-8 max-w-2xl text-sm">
          Iron-rich, high-protein Indian meals designed for anemia recovery and performance.
          Choose one option per meal slot — rotate for variety.
        </p>

        {/* Meals Grid — alternating layout */}
        <div className="space-y-8">
          {Object.entries(DIET_PLAN).map(([key, section]) => (
            <div key={key}>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-amber-400/60" />
                <h3 className="text-white font-mono text-xs uppercase tracking-wider">{section.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {section.options.map((meal, i) => (
                  <MealCard key={i} meal={meal} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Hydration — full-width banner */}
        <div className="mt-10 bg-gradient-to-r from-[#0E0E20] to-[#0C0C1D] border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Droplets size={14} className="text-amber-400" />
            <h3 className="text-white font-mono text-xs uppercase tracking-wider">Hydration Protocol</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-300">
            {[
              "3–4L daily minimum",
              "500ml warm + lemon on wake",
              "Bottle to college always",
              "Electrolytes on heavy days",
              "Coconut water post-workout",
              "No sugary drinks",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <span className="text-amber-400/50 mt-0.5">+</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supplements Table */}
        <div className="mt-8 bg-card border border-border rounded-lg overflow-hidden">
          <div className="px-5 py-3 border-b border-border bg-[#0C0C1D]/50">
            <div className="flex items-center gap-2">
              <Pill size={14} className="text-amber-400" />
              <h3 className="text-white font-mono text-xs uppercase tracking-wider">Supplement Schedule</h3>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono">Supplement</th>
                  <th className="text-left py-2 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono">Timing</th>
                  <th className="text-left py-2 px-4 text-slate-500 text-[10px] uppercase tracking-wider font-mono">Note</th>
                </tr>
              </thead>
              <tbody>
                {SUPPLEMENT_GUIDANCE.map((supp, i) => (
                  <tr key={i} className="border-b border-border/30 hover:bg-amber-400/[0.02] transition-colors">
                    <td className="py-2.5 px-4 text-white font-medium text-sm">{supp.supplement}</td>
                    <td className="py-2.5 px-4 text-slate-300 text-sm">{supp.timing}</td>
                    <td className="py-2.5 px-4 text-slate-400 text-xs">{supp.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
