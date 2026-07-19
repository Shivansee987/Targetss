/**
 * Dawn Protocol — Home Page
 * Design: Post-Bauhaus Functional Minimalism meets Military Discipline
 * Palette: Deep Navy (#0F172A) + Warm Amber (#F59E0B) + Slate neutrals
 * Typography: Bebas Neue (headings) + Inter (body) + JetBrains Mono (data)
 */

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import TargetsSection from "@/components/TargetsSection";
import ScheduleSection from "@/components/ScheduleSection";
import WorkoutSection from "@/components/WorkoutSection";
import RunningSection from "@/components/RunningSection";
import DietSection from "@/components/DietSection";
import AssessmentSection from "@/components/AssessmentSection";
import MilestonesSection from "@/components/MilestonesSection";
import OLQSection from "@/components/OLQSection";
import SafetySection from "@/components/SafetySection";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <HeroSection />
      <ProfileSection />
      <TargetsSection />
      <ScheduleSection />
      <WorkoutSection />
      <RunningSection />
      <DietSection />
      <AssessmentSection />
      <MilestonesSection />
      <OLQSection />
      <SafetySection />
      <Footer />
    </div>
  );
}
