import type { Day, TabId } from "./types";

export const PRACTICE_DAY_ID = "2026-10-18";

export const TABS: { id: TabId; label: string }[] = [
  { id: "today", label: "Daily Plan" },
  { id: "howto", label: "How-To" },
  { id: "glossary", label: "Glossary" },
];

export const WARM_UP = "Warm-up (3 min, see How-To)";

export const WEEK_THEMES: Record<Day["week"], string> = {
  1: "Ball handling and form shooting",
  2: "Layups, footwork, and passing",
  3: "Defense and putting it together",
};

export const DAYS: Day[] = [
  {
    id: "2026-09-28", dow: "Mon", date: "Sep 28", week: 1, kind: "train", focus: "Dribbling",
    tasks: [WARM_UP, "Stationary dribble, right hand: 3 x 30 sec (eyes up)", "Stationary dribble, left hand: 3 x 30 sec (eyes up)", "Form shooting 3 ft in front of rim: 20 shots using BEEF", "Record 30-second dribble counts in the tracker"],
    word: "Traveling",
  },
  {
    id: "2026-09-29", dow: "Tue", date: "Sep 29", week: 1, kind: "train", focus: "Dribbling",
    tasks: [WARM_UP, "Low dribble (below knees), each hand: 2 x 30 sec", "High dribble (waist), each hand: 2 x 30 sec", "Form shooting 3 ft: 20 shots, hold follow-through until the ball lands"],
    word: "Double dribble",
  },
  {
    id: "2026-09-30", dow: "Wed", date: "Sep 30", week: 1, kind: "train", focus: "Crossover",
    tasks: [WARM_UP, "Crossover in place: 3 x 30 sec", "Walk dribbling right hand down, left hand back: 4 trips", "Form shooting 5 ft: 20 shots"],
    word: "Carrying",
  },
  {
    id: "2026-10-01", dow: "Thu", date: "Oct 1", week: 1, kind: "train", focus: "Moving dribble",
    tasks: [WARM_UP, "Stationary dribble, each hand: 2 x 30 sec", "Jog dribbling right hand down, left hand back: 4 trips", "Form shooting 5 ft from left, middle, right: 10 shots each"],
    word: "Three seconds",
  },
  {
    id: "2026-10-02", dow: "Fri", date: "Oct 2", week: 1, kind: "train", focus: "Speed dribble",
    tasks: [WARM_UP, "Crossover while walking: 4 trips", "Speed dribble (push ball out front, run): 4 trips", "Make 10 in a row from 3 ft, then 5 in a row from 5 ft"],
    word: "Backcourt",
  },
  {
    id: "2026-10-03", dow: "Sat", date: "Oct 3", week: 1, kind: "fun", focus: "Fun day",
    tasks: ["Play H-O-R-S-E or shoot around with family or a friend (20 min)", "Watch 10 min of a college or NBA game and point out one foul and one travel"],
  },
  { id: "2026-10-04", dow: "Sun", date: "Oct 4", week: 1, kind: "rest", focus: "Rest", tasks: [] },
  {
    id: "2026-10-05", dow: "Mon", date: "Oct 5", week: 2, kind: "train", focus: "Right layups",
    tasks: [WARM_UP, "Dribble review: each hand 30 sec, crossover 30 sec", "Right-side layup walk-through: 10", "Right-side layup at a slow jog: 10"],
    word: "Triple threat",
  },
  {
    id: "2026-10-06", dow: "Tue", date: "Oct 6", week: 2, kind: "train", focus: "Left layups",
    tasks: [WARM_UP, "Left-side layup walk-through: 10", "Left-side layup at a slow jog: 10", "Jump stops: 10"],
    word: "Pivot foot",
  },
  {
    id: "2026-10-07", dow: "Wed", date: "Oct 7", week: 2, kind: "train", focus: "Footwork + passing",
    tasks: [WARM_UP, "Jump stop, then pivot forward and backward on each foot: 10 each", "Chest pass against a wall: 25", "Bounce pass against a wall: 25", "Layups: 10 right side, 10 left side"],
    word: "Paint",
  },
  {
    id: "2026-10-08", dow: "Thu", date: "Oct 8", week: 2, kind: "train", focus: "Passing",
    tasks: [WARM_UP, "Overhead pass against a wall: 20", "Catch, triple threat, pivot, pass: 15", "Layups off 1 dribble: 10 right side, 10 left side"],
    word: "Give-and-go",
  },
  {
    id: "2026-10-09", dow: "Fri", date: "Oct 9", week: 2, kind: "train", focus: "Layups off dribble",
    tasks: [WARM_UP, "Layups off the dribble from the wing: 10 right, 10 left", "Form shooting 7 ft from three spots: 10 each", "Wall passes (chest, bounce, overhead): 15 each", "Record layups made in the tracker"],
    word: "Wing",
  },
  {
    id: "2026-10-10", dow: "Sat", date: "Oct 10", week: 2, kind: "fun", focus: "Fun day",
    tasks: ["Play with other kids if possible (park, YMCA, church gym, neighbor's hoop)", "If not, play 1-on-1 or H-O-R-S-E with a parent", "Watch a 10-min YouTube layup tutorial (Breakthrough Basketball or ILoveBasketballTV)"],
  },
  { id: "2026-10-11", dow: "Sun", date: "Oct 11", week: 2, kind: "rest", focus: "Rest", tasks: [] },
  {
    id: "2026-10-12", dow: "Mon", date: "Oct 12", week: 3, kind: "train", focus: "Defense",
    tasks: [WARM_UP, "Defensive stance hold: 3 x 20 sec", "Defensive slides across the driveway and back: 6 trips", "Speed dribble into a right-side layup: 10"],
    word: "Man-to-man",
  },
  {
    id: "2026-10-13", dow: "Tue", date: "Oct 13", week: 3, kind: "train", focus: "Catch and shoot",
    tasks: [WARM_UP, "Defensive slides: 6 trips", "Speed dribble into a left-side layup: 10", "Catch-and-shoot from 7 ft: 20"],
    word: "Box out",
  },
  {
    id: "2026-10-14", dow: "Wed", date: "Oct 14", week: 3, kind: "train", focus: "Rebounding",
    tasks: [WARM_UP, "Box-out practice with a parent shooting: 10", "Crossover into a layup: 5 right, 5 left", "Free throws with the same routine every time: 20"],
    word: "Help side",
  },
  {
    id: "2026-10-15", dow: "Thu", date: "Oct 15", week: 3, kind: "train", focus: "Test day",
    tasks: [WARM_UP, "Dribble test, each hand 30 sec (record in tracker)", "Layup test: 10 right, 10 left (record in tracker)", "Sprints: 5 x baseline to half court and back"],
    word: "Pick / Screen",
  },
  {
    id: "2026-10-16", dow: "Fri", date: "Oct 16", week: 3, kind: "train", focus: "Full mix",
    tasks: [WARM_UP, "5 min dribbling, 5 min layups, 5 min shooting, 5 min defensive slides", "Free throws: 10"],
    word: "Fast break",
  },
  {
    id: "2026-10-17", dow: "Sat", date: "Oct 17", week: 3, kind: "light", focus: "Get ready",
    tasks: ["10-min easy shoot-around, finish on a made shot", "Pack the bag: basketball shoes, shorts, t-shirt, water bottle", "Review every Word of the Day in the Glossary", "Early bedtime"],
  },
  {
    id: PRACTICE_DAY_ID, dow: "Sun", date: "Oct 18", week: 3, kind: "practice", focus: "First practice",
    tasks: ["Eat a good meal 2-3 hours before", "Arrive 10 minutes early", "Introduce yourself to the coach", "Hustle on every drill, even when tired", "Ball still when the coach is talking", "Talk on defense: \"ball!\", \"shot!\", \"help!\"", "Cheer for teammates", "Have fun"],
  },
];
