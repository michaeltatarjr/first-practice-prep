import { describe, expect, it } from "vitest";
import { GLOSSARY } from "../data/glossary";
import { DAYS } from "../data/plan";
import {
  WORDS_OF_DAY,
  dayById,
  dayProgress,
  daysUntilPractice,
  defaultDayId,
  filterGlossary,
  planTotals,
  toggleCheck,
} from "./schedule";

describe("plan data", () => {
  it("covers 21 consecutive days ending on practice day", () => {
    expect(DAYS).toHaveLength(21);
    expect(DAYS[0].id).toBe("2026-09-28");
    expect(DAYS[20].id).toBe("2026-10-18");
    expect(new Set(DAYS.map((d) => d.id)).size).toBe(21);
  });

  it("has a glossary entry for every Word of the Day", () => {
    const terms = new Set(GLOSSARY.map((t) => t.term));
    for (const word of WORDS_OF_DAY) {
      expect(terms.has(word)).toBe(true);
    }
  });
});

describe("defaultDayId", () => {
  it("clamps to the plan range and picks today inside it", () => {
    expect(defaultDayId(new Date(2026, 8, 25))).toBe("2026-09-28");
    expect(defaultDayId(new Date(2026, 9, 7, 18))).toBe("2026-10-07");
    expect(defaultDayId(new Date(2026, 10, 1))).toBe("2026-10-18");
  });
});

describe("daysUntilPractice", () => {
  it("counts calendar days regardless of time of day", () => {
    expect(daysUntilPractice(new Date(2026, 8, 25, 10, 29))).toBe(23);
    expect(daysUntilPractice(new Date(2026, 9, 18, 23, 0))).toBe(0);
    expect(daysUntilPractice(new Date(2026, 9, 19))).toBe(-1);
  });
});

describe("progress", () => {
  it("counts the Word of the Day as a task", () => {
    const day = dayById("2026-09-28");
    expect(dayProgress(day, {}).total).toBe(day.tasks.length + 1);
  });

  it("tracks completed training days", () => {
    const day = dayById("2026-09-28");
    let checks = {};
    for (let i = 0; i <= day.tasks.length; i += 1) {
      checks = toggleCheck(checks, `${day.id}-${i}`, true);
    }
    expect(planTotals(checks).trainingDone).toBe(1);
    checks = toggleCheck(checks, `${day.id}-0`, false);
    expect(planTotals(checks).trainingDone).toBe(0);
  });
});

describe("filterGlossary", () => {
  it("filters by category, Word of the Day, and search text", () => {
    expect(filterGlossary(GLOSSARY, "", "Positions")).toHaveLength(5);
    expect(filterGlossary(GLOSSARY, "", "Word of the Day")).toHaveLength(WORDS_OF_DAY.size);
    expect(filterGlossary(GLOSSARY, "PIVOT", "All").map((t) => t.term)).toContain("Pivot foot");
  });
});
