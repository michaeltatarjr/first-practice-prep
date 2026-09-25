import type { AppState, CheckMap, TabId, TrackerKey, TrackerMap } from "../data/types";

export const STORAGE_KEY = "first-practice-prep:v1";
const CHECK_ID = /^\d{4}-\d{2}-\d{2}-\d{1,2}$/;
const TRACKER_VALUE = /^\d{0,3}$/;
const TABS: TabId[] = ["today", "howto", "glossary"];
export const TRACKER_KEYS: TrackerKey[] = [
  "dribR-w1",
  "dribR-w3",
  "dribL-w1",
  "dribL-w3",
  "layR-w1",
  "layR-w3",
  "layL-w1",
  "layL-w3",
];

export const DEFAULT_STATE: AppState = {
  tab: "today",
  checks: {},
  tracker: {},
};

function isTab(value: unknown): value is TabId {
  return typeof value === "string" && (TABS as string[]).includes(value);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export function sanitizeChecks(value: unknown): CheckMap {
  if (!isRecord(value)) return {};
  const next: CheckMap = {};
  for (const key of Object.keys(value)) {
    if (CHECK_ID.test(key) && value[key] === true) {
      next[key] = true;
    }
  }
  return next;
}

export function isTrackerValue(value: unknown): value is string {
  return typeof value === "string" && TRACKER_VALUE.test(value);
}

export function sanitizeTracker(value: unknown): TrackerMap {
  if (!isRecord(value)) return {};
  const next: TrackerMap = {};
  for (const key of TRACKER_KEYS) {
    const v = value[key];
    if (isTrackerValue(v) && v !== "") {
      next[key] = v;
    }
  }
  return next;
}

function fresh(): AppState {
  return { ...DEFAULT_STATE, checks: {}, tracker: {} };
}

export function parseState(raw: string | null): AppState {
  if (!raw) return fresh();
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isRecord(parsed)) return fresh();
    return {
      tab: isTab(parsed.tab) ? parsed.tab : DEFAULT_STATE.tab,
      checks: sanitizeChecks(parsed.checks),
      tracker: sanitizeTracker(parsed.tracker),
    };
  } catch {
    return fresh();
  }
}

export function loadState(): AppState {
  try {
    return parseState(window.localStorage.getItem(STORAGE_KEY));
  } catch {
    return fresh();
  }
}

export function saveState(state: AppState): void {
  try {
    const payload = JSON.stringify({
      tab: isTab(state.tab) ? state.tab : DEFAULT_STATE.tab,
      checks: sanitizeChecks(state.checks),
      tracker: sanitizeTracker(state.tracker),
    });
    window.localStorage.setItem(STORAGE_KEY, payload);
  } catch {
    // Quota or private-mode failures should not crash the UI.
  }
}
