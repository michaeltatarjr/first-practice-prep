export type TabId = "today" | "howto" | "glossary";

export type DayKind = "train" | "fun" | "rest" | "light" | "practice";

export type Day = {
  id: string;
  dow: string;
  date: string;
  week: 1 | 2 | 3;
  kind: DayKind;
  focus: string;
  tasks: string[];
  word?: string;
};

export type Skill = {
  title: string;
  summary: string;
  steps: string[];
  mistakes: string;
};

export type Category = "Rules" | "Court" | "Positions" | "Offense" | "Defense";

export type Term = {
  term: string;
  category: Category;
  def: string;
};

export type TrackerKey =
  | "dribR-w1"
  | "dribR-w3"
  | "dribL-w1"
  | "dribL-w3"
  | "layR-w1"
  | "layR-w3"
  | "layL-w1"
  | "layL-w3";

export type CheckMap = Record<string, true>;

export type TrackerMap = Partial<Record<TrackerKey, string>>;

export type AppState = {
  tab: TabId;
  checks: CheckMap;
  tracker: TrackerMap;
};
