import { useMemo, useState } from 'react';
import rawCards from './data/formula_cards.json';
import type { FormulaCard } from './types/formula';
import { FormulaCardView } from './components/FormulaCardView';
import { DetailPanel } from './components/DetailPanel';
import {
  filterFormulaCards,
  findFormulaById,
  getDefaultFormula,
  getFamilyOptions,
  getRelatedCards,
  type FamilyFilter
} from './lib/formulaSelectors';

const cards = rawCards as FormulaCard[];

export default function App() {
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState<FamilyFilter>('all');
  const [selectedId, setSelectedId] = useState(getDefaultFormula(cards)?.id ?? '');
  const [compareId, setCompareId] = useState(cards[1]?.id ?? getDefaultFormula(cards)?.id ?? '');

  const familyOptions = useMemo(() => getFamilyOptions(cards), []);
  const filtered = useMemo(() => filterFormulaCards(cards, query, family), [query, family]);

  const selected = findFormulaById(cards, selectedId) ?? filtered[0] ?? getDefaultFormula(cards);
  const compare = findFormulaById(cards, compareId) ?? cards[1] ?? getDefaultFormula(cards);
  const related = getRelatedCards(cards, selected);

  return (
    <main>
      <header className="hero">
        <p className="kicker">PHI369 Labs / Professor Phi</p>
        <h1>The Hidden Equations of Feeling</h1>
        <p>A symbolic formula atlas for comedy, drama, story design, NPC emotion design, and reflective creative tools.</p>
        <div className="boundary-chip">Creative metaphor only — not clinical, diagnostic, empirical, or a human score.</div>
      </header>

      <section className="toolbar" aria-label="Filter formula cards">
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search formulas, families, or variables..." />
        <select value={family} onChange={e => setFamily(e.target.value as FamilyFilter)}>
          {familyOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label} ({option.count})
            </option>
          ))}
        </select>
      </section>

      <section className="layout">
        <aside className="card-grid">
          {filtered.map(card => <FormulaCardView key={card.id} card={card} selected={card.id === selected?.id} onSelect={setSelectedId} />)}
        </aside>
        {selected && <DetailPanel card={selected} related={related} />}
      </section>

      <section className="compare-panel">
        <h2>Compare Mode</h2>
        <p>Use this to see how similar structures shift meaning across families, especially Comedy ↔ Drama mirrors.</p>
        <select value={compareId} onChange={e => setCompareId(e.target.value)}>
          {cards.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
        </select>
        {selected && compare && <div className="compare-grid">
          <FormulaCardView card={selected} />
          <FormulaCardView card={compare} />
        </div>}
      </section>

      <footer className="footer-note">
        <strong>Publication note:</strong> v0.3 starter atlas. Full 52-card dataset and whitepaper expansion are staged in the local scaffold ZIP for the next commit pass.
      </footer>
    </main>
  );
}
