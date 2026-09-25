import { useEffect, useState } from "react";
import { GlossaryView } from "./components/GlossaryView";
import { HowToView } from "./components/HowToView";
import { TodayView } from "./components/TodayView";
import { TABS } from "./data/plan";
import type { AppState, TabId, TrackerKey } from "./data/types";
import { daysUntilPractice, defaultDayId, toggleCheck } from "./lib/schedule";
import { loadState, saveState } from "./lib/storage";

function countdownText(days: number): string {
  if (days > 1) return `${days} days until first practice · Sun, Oct 18`;
  if (days === 1) return "First practice is tomorrow";
  if (days === 0) return "First practice is today";
  return "First practice done. Keep practicing.";
}

export default function App() {
  const [state, setState] = useState<AppState>(() => loadState());
  const [dayId, setDayId] = useState(() => defaultDayId(new Date()));

  useEffect(() => {
    saveState(state);
  }, [state]);

  function setTab(tab: TabId) {
    setState((prev) => ({ ...prev, tab }));
    window.scrollTo(0, 0);
  }

  function onCheck(id: string, checked: boolean) {
    setState((prev) => ({ ...prev, checks: toggleCheck(prev.checks, id, checked) }));
  }

  function onTracker(key: TrackerKey, value: string) {
    setState((prev) => ({ ...prev, tracker: { ...prev.tracker, [key]: value } }));
  }

  return (
    <div className="app">
      <header className="top">
        <p className="brand">Hoops Prep</p>
        <h1>First practice prep</h1>
        <p className="eyebrow">{countdownText(daysUntilPractice(new Date()))}</p>
      </header>

      <main>
        {state.tab === "today" ? (
          <TodayView
            dayId={dayId}
            checks={state.checks}
            tracker={state.tracker}
            onSelectDay={setDayId}
            onCheck={onCheck}
            onTracker={onTracker}
          />
        ) : null}
        {state.tab === "howto" ? <HowToView /> : null}
        {state.tab === "glossary" ? <GlossaryView /> : null}
      </main>

      <nav className="tab-bar" aria-label="Primary">
        {TABS.map((item) => (
          <button
            key={item.id}
            type="button"
            className={state.tab === item.id ? "tab active" : "tab"}
            onClick={() => setTab(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
