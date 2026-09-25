import { describe, expect, it } from "vitest";
import { DEFAULT_STATE, parseState, sanitizeChecks, sanitizeTracker } from "./storage";

describe("sanitizeChecks", () => {
  it("keeps only well-formed check ids set to true", () => {
    const polluted = JSON.parse(
      '{"2026-09-28-0":true,"__proto__":{"admin":true},"2026-09-28-1":"yes","bad-id":true}',
    ) as unknown;
    expect(sanitizeChecks(polluted)).toEqual({ "2026-09-28-0": true });
    expect(sanitizeChecks(["x"])).toEqual({});
    expect(sanitizeChecks(null)).toEqual({});
  });
});

describe("sanitizeTracker", () => {
  it("keeps known keys with short numeric strings", () => {
    const raw = { "dribR-w1": "42", "dribL-w1": "abc", "layR-w3": "1234", other: "5", "layL-w1": "" };
    expect(sanitizeTracker(raw)).toEqual({ "dribR-w1": "42" });
  });
});

describe("parseState", () => {
  it("returns defaults for missing or invalid JSON", () => {
    expect(parseState(null)).toEqual(DEFAULT_STATE);
    expect(parseState("{not-json")).toEqual(DEFAULT_STATE);
    expect(parseState("[]")).toEqual(DEFAULT_STATE);
  });

  it("accepts a valid snapshot", () => {
    const raw = JSON.stringify({
      tab: "glossary",
      checks: { "2026-10-05-2": true },
      tracker: { "layR-w1": "7" },
    });
    expect(parseState(raw)).toEqual({
      tab: "glossary",
      checks: { "2026-10-05-2": true },
      tracker: { "layR-w1": "7" },
    });
  });

  it("falls back on unknown tabs", () => {
    expect(parseState(JSON.stringify({ tab: "admin" })).tab).toBe("today");
  });
});
