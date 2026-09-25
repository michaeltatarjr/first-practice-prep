import { useState } from "react";
import { CATEGORIES, GLOSSARY } from "../data/glossary";
import { WORDS_OF_DAY, filterGlossary, type GlossaryFilter } from "../lib/schedule";

const FILTERS: GlossaryFilter[] = ["All", "Word of the Day", ...CATEGORIES];

export function GlossaryView() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<GlossaryFilter>("All");
  const terms = filterGlossary(GLOSSARY, query, filter);

  return (
    <section className="stack">
      <input
        type="search"
        className="search"
        placeholder="Search terms..."
        aria-label="Search terms"
        maxLength={40}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <div className="chip-row">
        {FILTERS.map((f) => (
          <button key={f} type="button" className={filter === f ? "chip active" : "chip"} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </div>
      <p className="muted">
        {terms.length} of {GLOSSARY.length} terms
      </p>
      {terms.length ? (
        <dl className="glossary">
          {terms.map((t) => (
            <div key={t.term} className="term">
              <dt>
                {t.term}
                <span>{WORDS_OF_DAY.has(t.term) ? `${t.category} · Word of the Day` : t.category}</span>
              </dt>
              <dd>{t.def}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="muted">No terms match that search.</p>
      )}
    </section>
  );
}
