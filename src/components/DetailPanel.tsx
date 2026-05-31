import { useState } from 'react';
import type { FormulaCard } from '../types/formula';
import { copyToClipboard, type CopyResult } from '../lib/copyToClipboard';
import { formatExampleCategory } from '../lib/exampleSelectors';
import {
  formatCitationSnippet,
  formatExampleMarkdown,
  formatFormulaLine,
  formatFormulaMarkdown,
  formatReflectionPromptMarkdown,
  type ExampleGalleryRecord
} from '../lib/formatMarkdown';
import { FavoriteButton } from './FavoriteButton';
import { FormulaPlayground } from './FormulaPlayground';

interface DetailPanelProps {
  card: FormulaCard;
  related: FormulaCard[];
  examples: ExampleGalleryRecord[];
  isFavorite?: boolean;
  onToggleFavorite?: (formulaId: string) => void;
}

export function DetailPanel({ card, related, examples, isFavorite = false, onToggleFavorite }: DetailPanelProps) {
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
      <div className="detail-heading-row">
        <span className="family-pill" style={{ background: card.familyColor }}>{card.familyLabel}</span>
        {onToggleFavorite && (
          <FavoriteButton formulaId={card.id} isFavorite={isFavorite} onToggleFavorite={onToggleFavorite} />
        )}
      </div>
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

      {examples.length > 0 && (
        <section className="related-examples" aria-label="Worked examples for this formula">
          <h3>Worked examples</h3>
          <div className="related-example-list">
            {examples.map(example => (
              <article className="related-example" key={example.id}>
                <span className="example-category">{formatExampleCategory(example.category)}</span>
                <h4>{example.title}</h4>
                <p>{example.summary}</p>
                <blockquote>{example.exampleText}</blockquote>
                <p><strong>Why it works:</strong> {example.whyItWorks}</p>
                <button
                  type="button"
                  onClick={() => handleCopy('Example', formatExampleMarkdown(example, card.title))}
                >
                  Copy example
                </button>
              </article>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && <><h3>Suggested companions</h3><ul>{related.map(r => <li key={r.id}>{r.title}</li>)}</ul></>}
      <h3>Boundary</h3>
      <p>{card.boundaryNote}</p>
      <p className="warning">{card.misuseWarning}</p>
    </article>
  );
}
