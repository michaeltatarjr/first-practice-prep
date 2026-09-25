import { DAYS, PRACTICE_DAY_ID } from "../data/plan";
import type { CheckMap, Day, Term } from "../data/types";

const MS_PER_DAY = 86_400_000;

export const WORDS_OF_DAY: ReadonlySet<string> = new Set(DAYS.flatMap((d) => (d.word ? [d.word] : [])));

export function localDayId(now: Date): string {
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${m}-${d}`;
}

export function defaultDayId(now: Date): string {
  const today = localDayId(now);
  const first = DAYS[0].id;
  const last = DAYS[DAYS.length - 1].id;
  if (today < first) return first;
  if (today > last) return last;
  return today;
}

export function dayById(id: string): Day {
  return DAYS.find((d) => d.id === id) ?? DAYS[0];
}

export function daysUntilPractice(now: Date): number {
  const [y, m, d] = PRACTICE_DAY_ID.split("-").map(Number);
  const practice = new Date(y, m - 1, d).getTime();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round((practice - today) / MS_PER_DAY);
}

export function dayTasks(day: Day): string[] {
  return day.word ? [...day.tasks, `Word of the Day: ${day.word} (explain it to a parent)`] : day.tasks;
}

export function checkId(dayId: string, index: number): string {
  return `${dayId}-${index}`;
}

export function dayProgress(day: Day, checks: CheckMap): { done: number; total: number } {
  const tasks = dayTasks(day);
  const done = tasks.filter((_, i) => checks[checkId(day.id, i)] === true).length;
  return { done, total: tasks.length };
}

export function planTotals(checks: CheckMap): { done: number; total: number; trainingDone: number; trainingTotal: number } {
  let done = 0;
  let total = 0;
  let trainingDone = 0;
  let trainingTotal = 0;
  for (const day of DAYS) {
    const p = dayProgress(day, checks);
    done += p.done;
    total += p.total;
    if (day.kind === "train") {
      trainingTotal += 1;
      if (p.done === p.total) trainingDone += 1;
    }
  }
  return { done, total, trainingDone, trainingTotal };
}

export function toggleCheck(checks: CheckMap, id: string, checked: boolean): CheckMap {
  const next: CheckMap = { ...checks };
  if (checked) {
    next[id] = true;
  } else {
    delete next[id];
  }
  return next;
}

export type GlossaryFilter = "All" | "Word of the Day" | Term["category"];

export function filterGlossary(terms: Term[], query: string, filter: GlossaryFilter): Term[] {
  const q = query.trim().toLowerCase();
  return terms.filter((t) => {
    if (filter === "Word of the Day" && !WORDS_OF_DAY.has(t.term)) return false;
    if (filter !== "All" && filter !== "Word of the Day" && t.category !== filter) return false;
    if (!q) return true;
    return t.term.toLowerCase().includes(q) || t.def.toLowerCase().includes(q);
  });
}
