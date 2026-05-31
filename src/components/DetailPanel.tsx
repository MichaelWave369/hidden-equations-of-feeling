import { useState } from 'react';
import type { FormulaCard } from '../types/formula';
import { copyToClipboard, type CopyResult } from '../lib/copyToClipboard';
import {
  formatCitationSnippet,
  formatFormulaLine,
  formatFormulaMarkdown,
  formatReflectionPromptMarkdown
} from '../lib/formatMarkdown';
import { FormulaPlayground } from './FormulaPlayground';

export function DetailPanel({ card, related }: { card: FormulaCard; related: FormulaCard[] }) {
  const [copyResult, setCopyResult] = useState<CopyResult | null>(null);

  const handleCopy = async (label: string, text: string) => {
    const result = await copyToClipboard(text);
    setCopyResult({
      ok: result.ok,
      message: result.ok ? `${label} copied with boundary note.` : result.message
    });
  };

  return (
    <article className="detail-panel">
      <span className="family-pill" style={{ background: card.familyColor }}>{card.familyLabel}</span>
      <h2>{card.title}</h2>
      <p className="formula large" aria-label={card.formulaPlaintext}>{card.formula}</p>
      <p className="tagline">{card.tagline}</p>

      <div className="copy-tools" aria-label="Copy formula content">
        <button type="button" onClick={() => handleCopy('Formula', formatFormulaLine(card))}>Copy formula</button>
        <button type="button" onClick={() => handleCopy('Reflection prompt', formatReflectionPromptMarkdown(card))}>Copy prompt</button>
        <button type="button" onClick={() => handleCopy('Markdown card', formatFormulaMarkdown(card))}>Copy Markdown card</button>
        <button type="button" onClick={() => handleCopy('Citation snippet', formatCitationSnippet(card))}>Copy citation</button>
      </div>

      <p className="copy-status" role="status" aria-live="polite">
        {copyResult?.message ?? 'Copied content includes the project boundary when needed.'}
      </p>

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
