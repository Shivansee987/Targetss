/**
 * Safety Section — Medical precautions and recovery strategies
 * Design: Warning cards (red accent) + Recovery cards (emerald accent)
 */
import { SAFETY_PRECAUTIONS, RECOVERY_STRATEGIES } from "@/lib/data";
import { AlertTriangle, RefreshCw, Heart } from "lucide-react";

export default function SafetySection() {
  return (
    <section id="safety" className="py-20 bg-[#0E0E20]">
      <div className="container">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 10 — Safety & Recovery
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              SAFETY FIRST
            </h2>
          </div>
        </div>

        <p className="text-slate-400 mb-8 max-w-2xl text-sm">
          Your health condition requires careful management. No target is worth risking injury or health.
        </p>

        {/* Safety Precautions — Warning style */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <AlertTriangle size={14} className="text-red-400" />
            <h3 className="text-white font-mono text-xs uppercase tracking-wider">Medical Safety Precautions</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SAFETY_PRECAUTIONS.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-red-500/15 rounded-lg p-4 hover:border-red-500/25 transition-colors"
              >
                <h4 className="text-red-400 font-semibold text-xs mb-2 uppercase tracking-wider">{item.condition}</h4>
                <p className="text-slate-300 text-xs leading-relaxed">{item.precaution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recovery Strategies — Emerald style */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <RefreshCw size={14} className="text-emerald-400" />
            <h3 className="text-white font-mono text-xs uppercase tracking-wider">Recovery & Wellness</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {RECOVERY_STRATEGIES.map((item, i) => (
              <div
                key={i}
                className="bg-card border border-emerald-500/10 rounded-lg p-4 hover:border-emerald-500/20 transition-colors"
              >
                <h4 className="text-emerald-400 font-semibold text-xs mb-2">{item.strategy}</h4>
                <p className="text-slate-300 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-amber-500/8 to-amber-500/2 border border-amber-500/15 rounded-lg p-8 text-center">
          <Heart size={22} className="text-amber-400 mx-auto mb-3" />
          <h3 className="font-display text-2xl text-white mb-2">
            YOUR BODY IS YOUR FIRST WEAPON
          </h3>
          <p className="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Recovery is not weakness — it is strategic. Every rest day, every good meal, every hour of sleep
            is an investment in your performance. Train smart, recover well, and the targets will follow.
          </p>
        </div>
      </div>
    </section>
  );
}
