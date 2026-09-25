import { CUE_CARDS, SKILLS, WARM_UP_STEPS } from "../data/skills";

export function HowToView() {
  return (
    <section className="stack">
      <div className="cue-grid">
        {CUE_CARDS.map((card) => (
          <article key={card.title} className="cue">
            <h3>{card.title}</h3>
            {card.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </article>
        ))}
      </div>

      <article className="callout">
        <h2>Daily warm-up</h2>
        <p>Do this before every training day. About 3 minutes.</p>
        <ul className="plain-list">
          {WARM_UP_STEPS.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ul>
      </article>

      {SKILLS.map((skill) => (
        <details key={skill.title} className="skill">
          <summary>
            <strong>{skill.title}</strong>
            <span>{skill.summary}</span>
          </summary>
          <ol>
            {skill.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mistakes">
            <strong>Common mistakes:</strong> {skill.mistakes}
          </p>
        </details>
      ))}

      <p className="muted">
        Search YouTube for kid-friendly demos from Breakthrough Basketball, ILoveBasketballTV, or Pro Training
        Basketball. Watching a 2-minute clip before trying a new skill helps a lot.
      </p>
    </section>
  );
}
