import { DAYS, WEEK_THEMES } from "../data/plan";
import type { CheckMap, TrackerKey, TrackerMap } from "../data/types";
import { checkId, dayById, dayProgress, dayTasks, localDayId, planTotals } from "../lib/schedule";
import { isTrackerValue } from "../lib/storage";
import { CheckRow } from "./CheckRow";

type TodayViewProps = {
  dayId: string;
  checks: CheckMap;
  tracker: TrackerMap;
  onSelectDay: (id: string) => void;
  onCheck: (id: string, checked: boolean) => void;
  onTracker: (key: TrackerKey, value: string) => void;
};

const TRACKER_ROWS: { label: string; key: "dribR" | "dribL" | "layR" | "layL" }[] = [
  { label: "Right-hand dribbles in 30 sec", key: "dribR" },
  { label: "Left-hand dribbles in 30 sec", key: "dribL" },
  { label: "Right-side layups made (of 10)", key: "layR" },
  { label: "Left-side layups made (of 10)", key: "layL" },
];

const WEEKS = [1, 2, 3] as const;

export function TodayView({ dayId, checks, tracker, onSelectDay, onCheck, onTracker }: TodayViewProps) {
  const day = dayById(dayId);
  const index = DAYS.findIndex((d) => d.id === day.id);
  const tasks = dayTasks(day);
  const progress = dayProgress(day, checks);
  const totals = planTotals(checks);
  const todayId = localDayId(new Date());

  return (
    <section className="stack">
      <div className="stat-row">
        <div className="stat">
          <strong>
            {totals.trainingDone}/{totals.trainingTotal}
          </strong>
          <span>Training days done</span>
        </div>
        <div className="stat">
          <strong>{totals.total ? Math.round((totals.done / totals.total) * 100) : 0}%</strong>
          <span>All tasks checked</span>
        </div>
      </div>

      <div className="day-stepper">
        <button type="button" className="step" disabled={index <= 0} onClick={() => onSelectDay(DAYS[index - 1].id)}>
          Prev
        </button>
        <div className="day-now">
          <strong>
            {day.dow}, {day.date}
          </strong>
          <span>
            {day.kind === "practice" ? "Game day" : `Week ${day.week}`} · {day.focus}
          </span>
        </div>
        <button
          type="button"
          className="step"
          disabled={index >= DAYS.length - 1}
          onClick={() => onSelectDay(DAYS[index + 1].id)}
        >
          Next
        </button>
      </div>

      <div className="calendar" role="listbox" aria-label="Plan day">
        <div className="cal-grid cal-head">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={`${d}-${i}`}>{d}</span>
          ))}
        </div>
        {WEEKS.map((week) => (
          <div key={week}>
            <p className="week-label">
              Week {week}: {WEEK_THEMES[week]}
            </p>
            <div className="cal-grid">
              {DAYS.filter((d) => d.week === week).map((d) => {
                const p = dayProgress(d, checks);
                const complete = p.total > 0 && p.done === p.total;
                const classes = ["cal-day"];
                if (d.id === day.id) classes.push("active");
                if (complete) classes.push("complete");
                if (d.kind === "rest") classes.push("rest");
                if (d.kind === "practice") classes.push("practice");
                if (d.id === todayId) classes.push("today");
                return (
                  <button
                    key={d.id}
                    type="button"
                    role="option"
                    aria-selected={d.id === day.id}
                    aria-label={`${d.dow} ${d.date}, ${d.focus}${complete ? ", done" : ""}`}
                    className={classes.join(" ")}
                    onClick={() => onSelectDay(d.id)}
                  >
                    <span className="cal-num">{d.date.split(" ")[1]}</span>
                    <span className="cal-mark">{d.kind === "practice" ? "Game" : complete ? "Done" : p.total ? `${p.done}/${p.total}` : "Rest"}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="section-head">
        <h2>{day.focus}</h2>
        {tasks.length ? (
          <p className="muted">
            {progress.done} of {progress.total}
          </p>
        ) : null}
      </div>

      {tasks.length === 0 ? (
        <article className="callout">
          <p>Rest day. Muscles get stronger when they recover. No basketball today.</p>
        </article>
      ) : (
        <div>
          {tasks.map((task, i) => (
            <CheckRow
              key={checkId(day.id, i)}
              id={checkId(day.id, i)}
              label={task}
              checked={checks[checkId(day.id, i)] === true}
              onChange={onCheck}
            />
          ))}
        </div>
      )}

      <div className="section-head">
        <h2>Progress tracker</h2>
      </div>
      <p className="muted">Fill in Week 1 on Sep 28 and Oct 9, then Week 3 on Oct 15.</p>
      <table className="tracker">
        <thead>
          <tr>
            <th scope="col">Measure</th>
            <th scope="col">Week 1</th>
            <th scope="col">Week 3</th>
          </tr>
        </thead>
        <tbody>
          {TRACKER_ROWS.map((row) => (
            <tr key={row.key}>
              <th scope="row">{row.label}</th>
              {(["w1", "w3"] as const).map((w) => {
                const key = `${row.key}-${w}` as TrackerKey;
                return (
                  <td key={w}>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={3}
                      aria-label={`${row.label}, ${w === "w1" ? "Week 1" : "Week 3"}`}
                      value={tracker[key] ?? ""}
                      onChange={(event) => {
                        if (isTrackerValue(event.target.value)) onTracker(key, event.target.value);
                      }}
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
