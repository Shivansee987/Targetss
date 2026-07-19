// Dawn Protocol — Data Layer
// All content for the 6-month SSB Military Preparation Roadmap

// Image URLs from webdev-static-assets
export const IMAGES = {
  hero: "/manus-storage/hero-dawn_c4b0638c.png",
  workout: "/manus-storage/section-workout_4abd632f.png",
  nutrition: "/manus-storage/section-nutrition_ebb302df.png",
  mental: "/manus-storage/section-mental_9fc88c8d.png",
  logo: "/manus-storage/logo-emblem_616fc859.png",
};

export const PROFILE = {
  name: "Future Officer",
  age: 20,
  course: "SSC Tech (Women) — SSC(T)",
  target: "Officers Training Academy (OTA)",
  college: "B.Tech CSE",
  collegeTimings: "8:00 AM – 4:00 PM (Mon–Fri)",
  leaveHome: "7:15 AM",
  returnHome: "5:00 PM",
  wakeUp: "5:00 AM",
  sleep: "10:00 PM",
  hemoglobin: "7.4 g/dL (under treatment)",
  deficiencies: "Iron, Vitamin D, Vitamin B12",
  status: "Recovery Phase",
};

export const PHYSICAL_TARGETS = [
  { exercise: "2.4 km Run", target: "< 12 minutes", current: "16+ minutes", difficulty: "High" },
  { exercise: "Push-ups", target: "25+", current: "5–8", difficulty: "Medium" },
  { exercise: "Pull-ups", target: "5", current: "0–1", difficulty: "High" },
  { exercise: "Sit-ups", target: "50", current: "15–20", difficulty: "Medium" },
  { exercise: "Bodyweight Squats", target: "100", current: "30–40", difficulty: "Medium" },
  { exercise: "Plank", target: "2 min", current: "30 sec", difficulty: "Medium" },
  { exercise: "Swimming", target: "Basic strokes", current: "Beginner", difficulty: "High" },
  { exercise: "Endurance & Agility", target: "Strong", current: "Developing", difficulty: "Medium" },
];

export const SIX_MONTH_OVERVIEW = [
  { month: 1, title: "Foundation & Recovery", focus: "Build base fitness, treat anemia, establish routine", intensity: "Low" },
  { month: 2, title: "Strength Building", focus: "Progressive strength training, running base", intensity: "Low-Medium" },
  { month: 3, title: "Endurance Development", focus: "Longer runs, increased volume, agility work", intensity: "Medium" },
  { month: 4, title: "Performance Push", focus: "Speed work, advanced strength, SSB awareness", intensity: "Medium-High" },
  { month: 5, title: "Peak Training", focus: "Target pace running, max strength, mock tests", intensity: "High" },
  { month: 6, title: "Taper & SSB Ready", focus: "Maintain fitness, mental prep, recovery focus", intensity: "Medium" },
];

export const WEEKLY_SCHEDULE = {
  weekday: [
    { time: "5:00 – 5:15 AM", activity: "Wake Up, Hydration (500ml warm water + lemon)", icon: "AlarmClock" },
    { time: "5:15 – 6:30 AM", activity: "Morning Workout (see training plan below)", icon: "Dumbbell" },
    { time: "6:30 – 7:00 AM", activity: "Shower, Prepare for College", icon: "Timer" },
    { time: "7:00 – 7:15 AM", activity: "Nutritious Breakfast (high iron + protein)", icon: "UtensilsCrossed" },
    { time: "7:15 AM", activity: "Leave for College", icon: "TrainFront" },
    { time: "8:00 – 12:00 PM", activity: "College Classes", icon: "GraduationCap" },
    { time: "12:00 – 12:30 PM", activity: "Lunch (balanced, iron-rich)", icon: "UtensilsCrossed" },
    { time: "12:30 – 4:00 PM", activity: "Classes / Lab Work", icon: "Laptop" },
    { time: "4:00 – 5:00 PM", activity: "Travel Home, Snack (nuts + fruit)", icon: "Apple" },
    { time: "5:00 – 5:30 PM", activity: "Rest & Recovery (15 min meditation + stretch)", icon: "Wind" },
    { time: "5:30 – 6:00 PM", activity: "SSB Prep: Current Affairs + GK Reading", icon: "BookOpen" },
    { time: "6:00 – 7:30 PM", activity: "Evening Training / Study Block", icon: "Target" },
    { time: "7:30 – 8:00 PM", activity: "Dinner (high protein, iron-rich)", icon: "UtensilsCrossed" },
    { time: "8:00 – 9:30 PM", activity: "Academic Work / Coding Practice", icon: "Code" },
    { time: "9:30 – 10:00 PM", activity: "Wind Down: Journal, Plan Tomorrow", icon: "Moon" },
    { time: "10:00 PM", activity: "Sleep", icon: "BedDouble" },
  ],
  weekend: [
    { time: "5:00 – 5:15 AM", activity: "Wake Up, Hydration", icon: "AlarmClock" },
    { time: "5:15 – 6:45 AM", activity: "Long Run / Extended Workout", icon: "Dumbbell" },
    { time: "6:45 – 7:30 AM", activity: "Shower, Extended Recovery", icon: "Timer" },
    { time: "7:30 – 8:30 AM", activity: "Nutritious Breakfast", icon: "UtensilsCrossed" },
    { time: "8:30 – 10:00 AM", activity: "Swimming Practice (Saturday) / Rest (Sunday)", icon: "Waves" },
    { time: "10:00 – 12:00 PM", activity: "SSB Prep: Group Discussion Practice, Interview Skills", icon: "Users" },
    { time: "12:00 – 1:00 PM", activity: "Lunch", icon: "UtensilsCrossed" },
    { time: "1:00 – 2:00 PM", activity: "Nap / Active Recovery", icon: "BedDouble" },
    { time: "2:00 – 4:00 PM", activity: "Academic Work / Coding Projects", icon: "Code" },
    { time: "4:00 – 5:30 PM", activity: "Evening Activity: Walk, Sports, or Light Training", icon: "Target" },
    { time: "5:30 – 7:00 PM", activity: "SSB Prep: Current Affairs Deep Dive, Leadership Reading", icon: "BookOpen" },
    { time: "7:00 – 8:00 PM", activity: "Dinner", icon: "UtensilsCrossed" },
    { time: "8:00 – 9:30 PM", activity: "Academic Work", icon: "Laptop" },
    { time: "9:30 – 10:00 PM", activity: "Wind Down, Plan Week", icon: "Moon" },
    { time: "10:00 PM", activity: "Sleep", icon: "BedDouble" },
  ],
};

export const WORKOUT_PHASES = [
  {
    phase: "Phase 1: Months 1–2 (Foundation)",
    intensity: "Low",
    morning: [
      { day: "Mon", activity: "Light Jog 15 min + Stretching", duration: "45 min" },
      { day: "Tue", activity: "Bodyweight Circuit: 2 rounds (squats, knee push-ups, plank, lunges)", duration: "40 min" },
      { day: "Wed", activity: "Brisk Walk 20 min + Yoga/Flexibility", duration: "45 min" },
      { day: "Thu", activity: "Light Jog 15 min + Core Work (crunches, leg raises, side plank)", duration: "40 min" },
      { day: "Fri", activity: "Walk-Jog Intervals 20 min + Full Stretch", duration: "45 min" },
      { day: "Sat", activity: "Long Walk 30 min + Swimming (if available)", duration: "60 min" },
      { day: "Sun", activity: "Active Recovery: Light stretching, yoga, walk", duration: "30 min" },
    ],
    evening: [
      { day: "Mon", activity: "Study: SSB OLQs + Current Affairs", duration: "60 min" },
      { day: "Tue", activity: "Strength: Resistance band exercises", duration: "45 min" },
      { day: "Wed", activity: "Study: Personality Development + Communication", duration: "60 min" },
      { day: "Thu", activity: "Strength: Bodyweight progression", duration: "45 min" },
      { day: "Fri", activity: "Study: Leader Qualities + Group Discussion Tips", duration: "60 min" },
      { day: "Sat", activity: "Rest / Light Activity", duration: "—" },
      { day: "Sun", activity: "Weekly Assessment + Planning", duration: "30 min" },
    ],
  },
  {
    phase: "Phase 2: Months 3–4 (Building)",
    intensity: "Medium",
    morning: [
      { day: "Mon", activity: "Run 2 km + Strength Circuit", duration: "55 min" },
      { day: "Tue", activity: "Push-up progression + Core + Agility drills", duration: "50 min" },
      { day: "Wed", activity: "Run 2 km + Upper body strength", duration: "55 min" },
      { day: "Thu", activity: "Speed intervals (200m x 4) + Flexibility", duration: "50 min" },
      { day: "Fri", activity: "Run 2.4 km + Full body circuit", duration: "60 min" },
      { day: "Sat", activity: "Long Run 3 km + Swimming", duration: "70 min" },
      { day: "Sun", activity: "Active Recovery + Yoga", duration: "40 min" },
    ],
    evening: [
      { day: "Mon", activity: "Pull-up attempts (negatives) + Back exercises", duration: "50 min" },
      { day: "Tue", activity: "SSB Prep: Interview Practice", duration: "60 min" },
      { day: "Wed", activity: "Strength: Squats, lunges, burpees progression", duration: "50 min" },
      { day: "Thu", activity: "SSB Prep: Group Discussion + PGT", duration: "60 min" },
      { day: "Fri", activity: "Full body strength + Core endurance", duration: "50 min" },
      { day: "Sat", activity: "Rest / Light Stretching", duration: "—" },
      { day: "Sun", activity: "Weekly Assessment + Review", duration: "30 min" },
    ],
  },
  {
    phase: "Phase 3: Months 5–6 (Peak)",
    intensity: "High",
    morning: [
      { day: "Mon", activity: "Run 2.4 km (target pace) + Upper body", duration: "60 min" },
      { day: "Tue", activity: "25+ push-ups test + Pull-ups + Core circuit", duration: "55 min" },
      { day: "Wed", activity: "Interval run (400m x 4) + Full body strength", duration: "60 min" },
      { day: "Thu", activity: "Endurance run 3 km + Agility ladder", duration: "55 min" },
      { day: "Fri", activity: "Simulated fitness test (all exercises)", duration: "60 min" },
      { day: "Sat", activity: "Long run 4 km + Swimming (30 min)", duration: "75 min" },
      { day: "Sun", activity: "Active Recovery + Mobility work", duration: "40 min" },
    ],
    evening: [
      { day: "Mon", activity: "SSB Prep: Psychology Tests (TAT, WAT, SRT)", duration: "60 min" },
      { day: "Tue", activity: "Strength maintenance + Flexibility", duration: "45 min" },
      { day: "Wed", activity: "SSB Prep: Mock Interview + Feedback", duration: "60 min" },
      { day: "Thu", activity: "Strength maintenance + Core endurance", duration: "45 min" },
      { day: "Fri", activity: "SSB Prep: GD Practice + Current Affairs", duration: "60 min" },
      { day: "Sat", activity: "Rest / Light Activity", duration: "—" },
      { day: "Sun", activity: "Full Mock SSB Day + Self Assessment", duration: "120 min" },
    ],
  },
];

export const RUNNING_PROGRESSION = [
  { week: "1–2", distance: "1 km walk-jog", pace: "No target", focus: "Build tolerance" },
  { week: "3–4", distance: "1.5 km jog", pace: "Comfortable", focus: "Continuous jogging" },
  { week: "5–6", distance: "2 km jog", pace: "Steady", focus: "Pace consistency" },
  { week: "7–8", distance: "2 km timed", pace: "< 10:30", focus: "Speed awareness" },
  { week: "9–10", distance: "2.4 km jog", pace: "Comfortable", focus: "Distance building" },
  { week: "11–12", distance: "2.4 km timed", pace: "< 14 min", focus: "Pace discipline" },
  { week: "13–14", distance: "2.4 km + 3 km", pace: "< 13 min", focus: "Endurance + speed" },
  { week: "15–16", distance: "2.4 km timed", pace: "< 12:30", focus: "Target approach" },
  { week: "17–18", distance: "2.4 km timed", pace: "< 12 min", focus: "Target achieved" },
  { week: "19–24", distance: "2.4 km + extra km", pace: "< 12 min", focus: "Maintenance + buffer" },
];

export const DIET_PLAN = {
  breakfast: {
    title: "Breakfast (7:00–7:15 AM)",
    options: [
      { meal: "Moong Dal Chilla + Paneer bhurji + Curd", calories: 350, iron: "High", protein: "High" },
      { meal: "Oats with banana + boiled eggs (2) + almonds", calories: 400, iron: "Medium", protein: "High" },
      { meal: "Ragi Dosa + Sambar + Coconut chutney + Milk", calories: 380, iron: "Very High", protein: "Medium" },
      { meal: "Sprouts chaat + Poha with peanuts + Orange juice", calories: 360, iron: "High", protein: "Medium" },
    ],
  },
  midMorning: {
    title: "Mid-Morning Snack (During College Break)",
    options: [
      { meal: "Mixed nuts (almonds, walnuts, dates) + Iron-rich supplement", calories: 200, iron: "High", protein: "Medium" },
      { meal: "Banana + Peanut butter sandwich", calories: 250, iron: "Low", protein: "Medium" },
    ],
  },
  lunch: {
    title: "Lunch (12:00–12:30 PM)",
    options: [
      { meal: "Brown rice + Rajma + Palak Paneer + Salad + Jaggery", calories: 500, iron: "Very High", protein: "High" },
      { meal: "Chapati (2) + Chole + Bhindi sabzi + Curd + Beetroot salad", calories: 480, iron: "High", protein: "High" },
      { meal: "Grilled chicken breast + Dal + Rice + Green leafy vegetable + Orange", calories: 550, iron: "High", protein: "Very High" },
      { meal: "Quinoa bowl + Chickpea curry + Raita + Mixed greens", calories: 470, iron: "Very High", protein: "High" },
    ],
  },
  evening: {
    title: "Evening Snack (5:00 PM — Post College)",
    options: [
      { meal: "Banana + 10 soaked almonds + Dates (2)", calories: 180, iron: "Medium", protein: "Low" },
      { meal: "Sprouts bhel + Green tea", calories: 150, iron: "Medium", protein: "Medium" },
    ],
  },
  dinner: {
    title: "Dinner (7:30–8:00 PM)",
    options: [
      { meal: "Roti (2) + Paneer Bhurji + Dal + Salad + Beetroot juice", calories: 450, iron: "Very High", protein: "High" },
      { meal: "Brown rice + Fish curry + Methi sabzi + Curd", calories: 480, iron: "High", protein: "Very High" },
      { meal: "Moong Dal Khichdi + Raita + Jaggery + Fruits", calories: 400, iron: "High", protein: "Medium" },
      { meal: "Chicken + Vegetable pulao + Raita + Boiled egg", calories: 500, iron: "Medium", protein: "Very High" },
    ],
  },
  preBed: {
    title: "Before Bed (9:30 PM)",
    options: [
      { meal: "Warm turmeric milk + Soaked dates", calories: 120, iron: "Low", protein: "Low" },
      { meal: "Warm milk with jaggery + Handful of nuts", calories: 150, iron: "Low", protein: "Low" },
    ],
  },
};

export const SUPPLEMENT_GUIDANCE = [
  { supplement: "Iron + Folic Acid", timing: "After breakfast with Vitamin C source", note: "As prescribed by doctor for anemia" },
  { supplement: "Vitamin D3", timing: "With lunch (fat-soluble)", note: "2000 IU or as prescribed" },
  { supplement: "Vitamin B12", timing: "With breakfast", note: "Sublingual or tablet form" },
  { supplement: "Omega-3 (Fish Oil / Flaxseed)", timing: "With dinner", note: "Anti-inflammatory, recovery" },
  { supplement: "Whey Protein (optional)", timing: "Post-workout or with breakfast", note: "If dietary protein is insufficient" },
  { supplement: "Multivitamin", timing: "With breakfast", note: "Fill nutritional gaps" },
];

export const WEEKLY_ASSESSMENT = {
  metrics: [
    { name: "2.4 km Run Time", unit: "min:sec", format: "time" },
    { name: "Push-ups (max)", unit: "reps", format: "number" },
    { name: "Pull-ups (max)", unit: "reps", format: "number" },
    { name: "Sit-ups (1 min)", unit: "reps", format: "number" },
    { name: "Bodyweight Squats", unit: "reps", format: "number" },
    { name: "Plank Hold", unit: "sec", format: "number" },
    { name: "Burpees (1 min)", unit: "reps", format: "number" },
    { name: "Weight", unit: "kg", format: "number" },
    { name: "Resting Heart Rate", unit: "bpm", format: "number" },
    { name: "Energy Level (1–10)", unit: "score", format: "number" },
    { name: "Sleep Quality (1–10)", unit: "score", format: "number" },
    { name: "Mood (1–10)", unit: "score", format: "number" },
  ],
};

export const MONTHLY_MILESTONES = [
  {
    month: 1,
    milestones: [
      "Establish 5 AM wake-up habit (5/7 days)",
      "Complete all morning workout sessions",
      "Run 1 km without stopping",
      "Hemoglobin level improvement (recheck with doctor)",
      "Iron supplement routine established",
      "Read 2 books on military leadership",
    ],
  },
  {
    month: 2,
    milestones: [
      "1.5 km continuous jog achieved",
      "10 push-ups (full form)",
      "1 negative pull-up (controlled descent)",
      "30 sit-ups in 1 minute",
      "Swimming basics: floating + breaststroke kick",
      "Maintain 7+ hours sleep average",
    ],
  },
  {
    month: 3,
    milestones: [
      "2 km run under 12:00 pace",
      "15+ push-ups",
      "1 full pull-up (or 2 negative)",
      "40 sit-ups in 1 minute",
      "Swimming: 25m freestyle",
      "Read current affairs daily (30 min)",
    ],
  },
  {
    month: 4,
    milestones: [
      "2.4 km run under 14:00",
      "20 push-ups",
      "3 pull-ups",
      "45 sit-ups",
      "60 bodyweight squats",
      "Group discussion practice: 2 sessions/week",
    ],
  },
  {
    month: 5,
    milestones: [
      "2.4 km run under 12:30",
      "25 push-ups",
      "4 pull-ups",
      "50 sit-ups",
      "100 bodyweight squats",
      "Complete mock SSB interview",
    ],
  },
  {
    month: 6,
    milestones: [
      "2.4 km run under 12:00",
      "25+ push-ups consistently",
      "5 pull-ups",
      "50+ sit-ups",
      "100 squats + strong endurance",
      "Confident SSB interview readiness",
      "All fitness targets met or exceeded",
    ],
  },
];

export const OLQS = [
  { name: "Effective Intelligence", description: "Practical problem-solving, ability to make decisions under pressure" },
  { name: "Reasoning Ability", description: "Logical thinking, structured analysis, clear articulation" },
  { name: "Organizing Ability", description: "Planning, delegation, resource management" },
  { name: "Power of Expression", description: "Clear communication, confidence in speaking" },
  { name: "Social Adaptability", description: "Team player, adjusts to different people and situations" },
  { name: "Cooperation", description: "Willingness to work with others, support team goals" },
  { name: "Sense of Responsibility", description: "Accountability, reliability, commitment to duties" },
  { name: "Initiative", description: "Self-starting, proactive, takes charge when needed" },
  { name: "Self Confidence", description: "Belief in own abilities, positive self-image" },
  { name: "Speed of Decision", description: "Quick, effective decisions without hesitation" },
  { name: "Determination", description: "Persistence, never give up attitude" },
  { name: "Courage", description: "Physical and moral bravery, stand by principles" },
  { name: "Stamina", description: "Physical and mental endurance to handle tough situations" },
  { name: "Liveliness", description: "Enthusiasm, positive energy, engaging personality" },
];

export const SAFETY_PRECAUTIONS = [
  { condition: "Anemia (Low Hemoglobin)", precaution: "Avoid high-intensity workouts until Hb > 10 g/dL. Focus on low-intensity cardio and walking. Monitor energy levels before each session. Stop immediately if dizzy." },
  { condition: "Iron Deficiency", precaution: "Time iron supplements away from calcium/dairy. Pair with Vitamin C (lemon water, oranges) for absorption. Avoid tea/coffee within 1 hour of meals." },
  { condition: "Vitamin D Deficiency", precaution: "15–20 min sun exposure daily (morning). Take supplement with fat-containing meal. Monitor bone/muscle pain — may indicate deficiency." },
  { condition: "Vitamin B12 Deficiency", precaution: "May cause fatigue and weakness — factor this into workout intensity. Sublingual B12 for better absorption. Monitor tingling/numbness." },
  { condition: "General Overtraining Prevention", precaution: "Never increase training volume by more than 10% per week. Include rest days. If resting heart rate is elevated >10 bpm, take extra rest day." },
  { condition: "College Schedule Balance", precaution: "During exams/assignments, reduce workout intensity by 30%. Sleep priority over workout. Never skip meals for training." },
];

export const RECOVERY_STRATEGIES = [
  { strategy: "Sleep Priority", detail: "7–8 hours non-negotiable. Consistent 10 PM bedtime. No screens 30 min before sleep." },
  { strategy: "Hydration Protocol", detail: "3–4 liters/day minimum. 500ml upon waking. Carry water bottle to college. Include electrolytes on heavy training days." },
  { strategy: "Active Recovery", detail: "Light walking, stretching, foam rolling on rest days. Never go completely sedentary after heavy training." },
  { strategy: "Foam Rolling", detail: "10 min post-workout. Focus on quads, hamstrings, calves, IT band, upper back." },
  { strategy: "Meditation", detail: "10–15 min daily. Improves focus, reduces cortisol, aids recovery. Use apps or guided sessions." },
  { strategy: "Nutrition Timing", detail: "Protein within 45 min post-workout. Complex carbs 2 hours before training. No heavy meals within 2 hours of sleep." },
  { strategy: "Cold/Heat Therapy", detail: "Cold shower post-intense sessions (2–3 min). Warm bath on rest days for muscle relaxation." },
];
