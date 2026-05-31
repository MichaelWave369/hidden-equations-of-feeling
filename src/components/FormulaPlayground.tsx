import { useMemo, useState } from 'react';
import type { FormulaCard } from '../types/formula';

function label(value: number) {
  if (value < 34) return 'low';
  if (value < 67) return 'medium';
  return 'high';
}

export function FormulaPlayground({ card }: { card: FormulaCard }) {
  const usable = card.variables.filter(v => v.role !== 'output').slice(0, 8);
  const initial = Object.fromEntries(usable.map(v => [v.symbol, 50]));
  const [values, setValues] = useState<Record<string, number>>(initial);

  const score = useMemo(() => {
    if (!usable.length) return 50;
    let total = 50;
    for (const v of usable) {
      const raw = values[v.symbol] ?? 50;
      const centered = raw - 50;
      if (v.role === 'buffer' || v.role === 'stabilizer') total -= centered * 0.35;
      else total += centered * 0.35;
    }
    return Math.max(0, Math.min(100, Math.round(total)));
  }, [values, usable]);

  return (
    <section className="playground" aria-label={`Symbolic playground for ${card.title}`}>
      <div className="boundary-chip">Symbolic, not diagnostic / not measurement</div>
      <h3>Formula Playground</h3>
      <p>Move the variables to feel the pattern shift. This is a teaching interface, not a score of a person.</p>
      <div className="meter" aria-label={`Symbolic intensity ${score} out of 100`}>
        <span style={{ width: `${score}%`, background: card.familyColor }} />
      </div>
      <strong>{label(score)} symbolic intensity</strong>
      <div className="slider-grid">
        {usable.map(v => (
          <label key={v.symbol}>
            <span>{v.symbol} <small>{v.role}</small></span>
            <input
              type="range"
              min="0"
              max="100"
              value={values[v.symbol] ?? 50}
              onChange={e => setValues(current => ({ ...current, [v.symbol]: Number(e.target.value) }))}
            />
            <em>{label(values[v.symbol] ?? 50)}</em>
          </label>
        ))}
      </div>
    </section>
  );
}
