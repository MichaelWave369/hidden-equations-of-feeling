import type { FormulaCard } from '../types/formula';
import { FormulaPlayground } from './FormulaPlayground';

export function DetailPanel({ card, related }: { card: FormulaCard; related: FormulaCard[] }) {
  return (
    <article className="detail-panel">
      <span className="family-pill" style={{ background: card.familyColor }}>{card.familyLabel}</span>
      <h2>{card.title}</h2>
      <p className="formula large" aria-label={card.formulaPlaintext}>{card.formula}</p>
      <p className="tagline">{card.tagline}</p>
      <FormulaPlayground card={card} />
      <h3>Variables</h3>
      <ul className="variable-list">
        {card.variables.map(v => <li key={v.symbol}><b>{v.symbol}</b> — {v.meaning} <small>{v.role}</small></li>)}
      </ul>
      <h3>Derivation / rationale</h3>
      <p>{card.derivation}</p>
      <h3>Reflection prompt</h3>
      <blockquote>{card.reflectionPrompt}</blockquote>
      <h3>Example application</h3>
      <p>{card.exampleApplication}</p>
      {related.length > 0 && <><h3>Suggested companions</h3><ul>{related.map(r => <li key={r.id}>{r.title}</li>)}</ul></>}
      <h3>Boundary</h3>
      <p>{card.boundaryNote}</p>
      <p className="warning">{card.misuseWarning}</p>
    </article>
  );
}
