/**
 * OLQ Section — Officer Like Qualities reference grid
 * Design: Compact grid with subtle rank/chevron visual language
 */
import { OLQS } from "@/lib/data";
import { Brain, Users, MessageSquare, Compass, Target, Shield, Star } from "lucide-react";

const qualityIcons = [
  <Brain size={14} />, <Brain size={14} />, <Users size={14} />,
  <MessageSquare size={14} />, <Users size={14} />, <Users size={14} />,
  <Shield size={14} />, <Target size={14} />, <Star size={14} />,
  <Target size={14} />, <Shield size={14} />, <Shield size={14} />,
  <Star size={14} />, <Star size={14} />,
];

export default function OLQSection() {
  return (
    <section id="olq" className="py-20 bg-background">
      <div className="container">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 09 — Mental Preparation
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              OFFICER LIKE QUALITIES
            </h2>
          </div>
        </div>

        <p className="text-slate-400 mb-8 max-w-2xl text-sm">
          The 15 OLQs assessed during SSB. Develop these qualities through daily practice, not just preparation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {OLQS.map((olq, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-4 hover:border-amber-500/15 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-amber-400/70 group-hover:text-amber-400 transition-colors">{qualityIcons[i]}</span>
                <h3 className="text-white font-semibold text-xs uppercase tracking-wider">{olq.name}</h3>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">{olq.description}</p>
            </div>
          ))}
        </div>

        {/* SSB Prep Tips */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Compass size={14} className="text-amber-400" />
              Daily SSB Habits
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Read current affairs 30 min daily (The Hindu, DD News)</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Practice speaking 5 min on any topic (record yourself)</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Write one paragraph daily on leadership topics</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Solve 5 TAT pictures weekly with story writing</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Join or organize group discussions with friends</li>
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <h3 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
              <Target size={14} className="text-amber-400" />
              SSB Interview Preparation
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Prepare 30+ personal questions (family, hobbies, goals)</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Know your strengths and weaknesses deeply</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Practice "Why armed forces?" answer daily</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Read 2 books/month on leadership and military history</li>
              <li className="flex items-start gap-2"><span className="text-amber-400/50 mt-0.5">+</span> Practice positive body language in mirror</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
