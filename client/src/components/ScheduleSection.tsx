/**
 * Schedule Section — Official field-schedule style with clean table layout
 * Design: Official document feel with monospace timing and amber accent rows
 */
import { WEEKLY_SCHEDULE } from "@/lib/data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlarmClock, Dumbbell, Timer, UtensilsCrossed, TrainFront, GraduationCap, Laptop, Apple, Wind, BookOpen, Target, Code, BedDouble, Waves, Users } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  AlarmClock: <AlarmClock size={14} />,
  Dumbbell: <Dumbbell size={14} />,
  Timer: <Timer size={14} />,
  UtensilsCrossed: <UtensilsCrossed size={14} />,
  TrainFront: <TrainFront size={14} />,
  GraduationCap: <GraduationCap size={14} />,
  Laptop: <Laptop size={14} />,
  Apple: <Apple size={14} />,
  Wind: <Wind size={14} />,
  BookOpen: <BookOpen size={14} />,
  Target: <Target size={14} />,
  Code: <Code size={14} />,
  BedDouble: <BedDouble size={14} />,
  Waves: <Waves size={14} />,
  Users: <Users size={14} />,
};

function renderSchedule(schedule: typeof WEEKLY_SCHEDULE.weekday) {
  // Determine highlight rows (training, meals, sleep)
  const highlightKeywords = ["Workout", "Training", "Run", "Strength", "Swimming", "Breakfast", "Lunch", "Dinner", "Sleep", "Meditation"];

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-[#0C0C1D]">
            <th className="text-left py-2.5 px-4 text-amber-400/60 text-[10px] uppercase tracking-wider font-mono font-semibold w-[140px]">Time</th>
            <th className="text-left py-2.5 px-4 text-amber-400/60 text-[10px] uppercase tracking-wider font-mono font-semibold">Activity</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((slot, i) => {
            const isHighlight = highlightKeywords.some(k => slot.activity.includes(k));
            return (
              <tr
                key={i}
                className={`border-b border-border/30 transition-colors ${
                  isHighlight
                    ? "bg-amber-400/[0.03] hover:bg-amber-400/[0.06]"
                    : "hover:bg-card/50"
                }`}
              >
                <td className="py-2.5 px-4 font-mono text-xs text-amber-400/70 whitespace-nowrap">
                  {slot.time}
                </td>
                <td className="py-2.5 px-4">
                  <div className="flex items-center gap-2">
                    <span className={`flex-shrink-0 ${isHighlight ? "text-amber-400/80" : "text-slate-500"}`}>
                      {iconMap[slot.icon]}
                    </span>
                    <span className={`text-sm ${isHighlight ? "text-white" : "text-slate-300"}`}>
                      {slot.activity}
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-20 bg-background">
      <div className="container">
        <div className="mb-10 flex items-center gap-4">
          <div className="w-1 h-8 bg-amber-400" />
          <div>
            <span className="text-amber-400/60 text-[10px] font-mono uppercase tracking-[0.4em]">
              Section 03 — Daily Timetable
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-white mt-1">
              YOUR DAILY SCHEDULE
            </h2>
          </div>
        </div>

        <p className="text-slate-400 mb-8 max-w-2xl text-sm">
          A disciplined routine that balances fitness, academics, and SSB preparation without burnout.
          Every slot is intentional — no wasted minutes.
        </p>

        <Tabs defaultValue="weekday" className="w-full">
          <TabsList className="bg-card border border-border mb-6">
            <TabsTrigger value="weekday" className="data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400 font-mono text-xs">
              MON – FRI
            </TabsTrigger>
            <TabsTrigger value="weekend" className="data-[state=active]:bg-amber-500/20 data-[state=active]:text-amber-400 font-mono text-xs">
              SAT – SUN
            </TabsTrigger>
          </TabsList>

          <TabsContent value="weekday">
            {renderSchedule(WEEKLY_SCHEDULE.weekday)}
          </TabsContent>
          <TabsContent value="weekend">
            {renderSchedule(WEEKLY_SCHEDULE.weekend)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
