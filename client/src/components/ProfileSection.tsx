/**
 * Profile Section — Candidate overview with circular readiness indicators
 * Design: Mission-control dashboard feel with chevron emblems
 */
import { PROFILE, SIX_MONTH_OVERVIEW } from "@/lib/data";
import { IMAGES } from "@/lib/data";
import { User, Clock, Heart, BookOpen, Target, AlertTriangle } from "lucide-react";

function ReadinessRing({ label, value, size = 80, strokeWidth = 4 }: { label: string; value: number; size?: number; strokeWidth?: number }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="oklch(0.2 0.02 260)" strokeWidth={strokeWidth} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={value > 70 ? "oklch(0.7 0.15 160)" : value > 40 ? "oklch(0.75 0.18 75)" : "oklch(0.6 0.22 25)"}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000"
        />
      </svg>
      <span className="text-[10px] text-slate-400 uppercase tracking-wider text-center">{label}</span>
    </div>
  );
}

export default function ProfileSection() {
  return (
    <section id="profile" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 49px, oklch(0.75 0.18 75) 49px, oklch(0.75 0.18 75) 50px)",
      }} />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 01 — Candidate Brief
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              YOUR PROFILE
            </h2>
          </div>
        </div>

        {/* Main Grid — Profile + Readiness */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <div className="bg-card/80 border border-border rounded-lg p-6 backdrop-blur-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {[
                  { label: "Age", value: "20 years", icon: <User size={16} /> },
                  { label: "Course", value: PROFILE.course, icon: <BookOpen size={16} /> },
                  { label: "College Timings", value: PROFILE.collegeTimings, icon: <Clock size={16} /> },
                  { label: "Target", value: PROFILE.target, icon: <Target size={16} /> },
                  { label: "Hemoglobin", value: PROFILE.hemoglobin, icon: <Heart size={16} /> },
                  { label: "Deficiencies", value: PROFILE.deficiencies, icon: <AlertTriangle size={16} /> },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-amber-400/50 mt-1">{item.icon}</span>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">{item.label}</span>
                      <p className="text-white text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Daily schedule strip */}
              <div className="mt-6 pt-5 border-t border-border">
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">Daily Window</span>
                <div className="mt-2 flex flex-wrap gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <span className="text-slate-300">5:00 AM — 6:30 AM</span>
                    <span className="text-slate-500">Morning Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-500" />
                    <span className="text-slate-300">8:00 AM — 4:00 PM</span>
                    <span className="text-slate-500">College</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-300">6:00 PM — 7:30 PM</span>
                    <span className="text-slate-500">Evening Block</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Readiness Rings */}
          <div className="bg-card/80 border border-border rounded-lg p-6 backdrop-blur-sm flex flex-col items-center justify-center">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-mono mb-6">Current Readiness</span>
            <div className="grid grid-cols-2 gap-6">
              <ReadinessRing label="Strength" value={25} />
              <ReadinessRing label="Endurance" value={15} />
              <ReadinessRing label="Nutrition" value={40} />
              <ReadinessRing label="Discipline" value={60} />
            </div>
            <span className="text-[10px] text-amber-400/60 mt-6 font-mono">PHASE 1 — RECOVERY</span>
          </div>
        </div>

        {/* 6-Month Overview — Mission Timeline */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <img src={IMAGES.logo} alt="" className="w-5 h-5 opacity-60" />
            <h3 className="font-display text-xl text-white uppercase tracking-wider">
              Mission Timeline — 6 Months to SSB Ready
            </h3>
          </div>
        </div>

        <div className="relative">
          {/* Timeline connector line */}
          <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-amber-400/40 via-amber-400/20 to-transparent hidden md:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SIX_MONTH_OVERVIEW.map((month) => (
              <div
                key={month.month}
                className="relative bg-card border border-border rounded-lg p-5 hover:border-amber-500/20 transition-all duration-300 group"
              >
                {/* Month badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-display text-2xl text-amber-400/90">M{month.month}</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-mono uppercase tracking-wider ${
                    month.intensity.includes("Low") ? "bg-emerald-500/15 text-emerald-400" :
                    month.intensity === "Medium" ? "bg-amber-500/15 text-amber-400" :
                    "bg-red-500/15 text-red-400"
                  }`}>
                    {month.intensity}
                  </span>
                </div>
                <h4 className="text-white font-semibold text-sm mb-1">{month.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{month.focus}</p>

                {/* Chevron accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-amber-400/10 rounded-tr-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
