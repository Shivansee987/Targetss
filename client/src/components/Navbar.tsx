/**
 * Navbar — Sticky navigation with section links
 * Design: Dark navy with amber accent underline on active
 */
import { useState, useEffect } from "react";
import { IMAGES } from "@/lib/data";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "profile", label: "Profile" },
  { id: "targets", label: "Targets" },
  { id: "schedule", label: "Schedule" },
  { id: "workout", label: "Workouts" },
  { id: "running", label: "Running" },
  { id: "diet", label: "Nutrition" },
  { id: "assessment", label: "Assessments" },
  { id: "milestones", label: "Milestones" },
  { id: "olq", label: "OLQs" },
  { id: "safety", label: "Safety" },
];

interface NavbarProps {
  activeSection: string;
  setActiveSection: (s: string) => void;
}

export default function Navbar({ activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMobileOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0C0C1D]/95 backdrop-blur-xl shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3 group">
          <img
            src={IMAGES.logo}
            alt="Dawn Protocol"
            className="w-9 h-9 rounded-full border border-amber-500/30"
          />
          <span className="font-display text-xl text-amber-400 tracking-widest hidden sm:block">
            DAWN PROTOCOL
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative px-3 py-2 text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                activeSection === item.id
                  ? "text-amber-400"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-slate-300 p-2"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0C0C1D]/98 backdrop-blur-xl border-t border-slate-800">
          <div className="container py-4 grid grid-cols-2 gap-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-3 py-2 text-sm font-medium rounded transition-colors ${
                  activeSection === item.id
                    ? "text-amber-400 bg-amber-400/10"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
