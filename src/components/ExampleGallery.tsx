import { useMemo, useState } from 'react';
import type { FormulaCard } from '../types/formula';
import { copyToClipboard, type CopyResult } from '../lib/copyToClipboard';
import { formatExampleMarkdown, type ExampleGalleryRecord } from '../lib/formatMarkdown';
import {
  filterExamples,
  formatExampleCategory,
  getExampleCategoryOptions,
  type ExampleCategory
} from '../lib/exampleSelectors';
import { getFormulaTitle } from '../lib/formulaSelectors';

interface ExampleGalleryProps {
  examples: ExampleGalleryRecord[];
  cards: FormulaCard[];
  onSelectFormula: (formulaId: string) => void;
}

export function ExampleGallery({ examples, cards, onSelectFormula }: ExampleGalleryProps) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ExampleCategory>('all');
  const [copyResult, setCopyResult] = useState<CopyResult | null>(null);

  const categoryOptions = useMemo(() => getExampleCategoryOptions(examples), [examples]);
  const filteredExamples = useMemo(() => filterExamples(examples, query, category), [examples, query, category]);

  const handleCopyExample = async (example: ExampleGalleryRecord) => {
    const result = await copyToClipboard(formatExampleMarkdown(example, getFormulaTitle(cards, example.formulaId)));
    setCopyResult({
      ok: result.ok,
      message: result.ok ? `${example.title} copied with boundary note.` : result.message
    });
  };

  return (
    <section className="example-gallery" aria-labelledby="examples-heading">
      <div className="example-gallery-header">
        <div>
          <p className="kicker">Worked examples</p>
          <h2 id="examples-heading">Examples Gallery</h2>
          <p>See how formulas become comedy beats, drama scenes, NPC arcs, prompts, and game mechanics.</p>
        </div>
        <div className="boundary-chip">Examples are craft lenses, not people scores.</div>
      </div>

      <div className="example-toolbar" aria-label="Filter examples">
        <input
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Search examples, tags, scenarios..."
        />
        <select value={category} onChange={event => setCategory(event.target.value as ExampleCategory)}>
          {categoryOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label} ({option.count})
            </option>
          ))}
        </select>
      </div>

      <p className="copy-status" role="status" aria-live="polite">
        {copyResult?.message ?? 'Copied examples include the project boundary note.'}
      </p>

      <div className="example-grid">
        {filteredExamples.map(example => (
          <article className="example-card" key={example.id}>
            <span className="example-category">{formatExampleCategory(example.category)}</span>
            <h3>{example.title}</h3>
            <p>{example.summary}</p>

            <dl>
              <dt>Formula</dt>
              <dd>
                <button type="button" className="link-button" onClick={() => onSelectFormula(example.formulaId)}>
                  {getFormulaTitle(cards, example.formulaId)}
                </button>
              </dd>
              <dt>Scenario</dt>
              <dd>{example.scenario}</dd>
              <dt>Example</dt>
              <dd>{example.exampleText}</dd>
              <dt>Why it works</dt>
              <dd>{example.whyItWorks}</dd>
              <dt>How to use</dt>
              <dd>{example.howToUse}</dd>
            </dl>

            <div className="example-boundary">
              <strong>Boundary:</strong> {example.boundaryNote}
            </div>
            <div className="example-warning">
              <strong>Misuse warning:</strong> {example.misuseWarning}
            </div>

            <div className="example-actions">
              <button type="button" onClick={() => handleCopyExample(example)}>Copy example</button>
            </div>
          </article>
        ))}
      </div>

      {filteredExamples.length === 0 && (
        <p className="footer-note">No examples match that search yet. Try a different word or category.</p>
      )}
    </section>
  );
}
