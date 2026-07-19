/**
 * Footer — Closing motivational message with chevron emblem
 */
import { IMAGES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-16 bg-[#0A0A18] border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <img
            src={IMAGES.logo}
            alt="Dawn Protocol"
            className="w-14 h-14 rounded-full mb-6 border border-amber-500/20"
          />

          <h2 className="font-display text-3xl sm:text-4xl text-white mb-3">
            STAY DISCIPLINED. STAY CONSISTENT.
          </h2>
          <p className="text-slate-400 text-sm max-w-md mb-8 leading-relaxed">
            The difference between a candidate and an officer is consistency over time.
            Every day you follow this plan brings you closer to OTA.
          </p>

          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-slate-500 font-mono uppercase tracking-wider mb-8">
            <span>SSC Tech (Women)</span>
            <span className="text-slate-700">/</span>
            <span>Officers Training Academy</span>
            <span className="text-slate-700">/</span>
            <span>6-Month Roadmap</span>
          </div>

          {/* Chevron divider */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-slate-800" />
            <svg width="12" height="12" viewBox="0 0 12 12" className="text-amber-400/30">
              <path d="M2 10 L6 2 L10 10" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="w-12 h-px bg-slate-800" />
          </div>

          <p className="text-slate-600 text-[10px] font-mono uppercase tracking-wider">
            Dawn Protocol — Built with discipline and purpose
          </p>
        </div>
      </div>
    </footer>
  );
}
