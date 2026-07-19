/**
 * Hero Section — Full-bleed with dawn imagery
 * Design: Cinematic hero with overlay gradient, Bebas Neue display text
 */
import { IMAGES } from "@/lib/data";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Dawn training"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C1D]/90 via-[#0C0C1D]/70 to-[#0C0C1D]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C1D] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full container">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-amber-400" />
            <span className="text-amber-400 text-xs font-medium uppercase tracking-[0.3em]">
              6-Month Military Preparation Roadmap
            </span>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-8xl text-white leading-[0.9] mb-6">
            DAWN<br />
            <span className="text-amber-400">PROTOCOL</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl max-w-xl mb-4 leading-relaxed">
            Your comprehensive guide to SSB readiness — balancing engineering academics
            with military fitness, built for the future officer who wakes at 5 AM.
          </p>

          <p className="text-amber-400/80 text-sm font-medium tracking-wide mb-8">
            SSC Tech (Women) • OTA Preparation • Recovery to Peak Performance
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-[#0C0C1D] font-semibold rounded text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.97]"
            >
              START YOUR JOURNEY
            </button>
            <button
              onClick={() => document.getElementById("targets")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-amber-500/50 text-amber-400 hover:bg-amber-400/10 rounded text-sm transition-all duration-200"
            >
              VIEW TARGETS
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-slate-400 hover:text-amber-400 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
