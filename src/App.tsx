import { useMemo, useState } from 'react';
import rawCards from './data/formula_cards.json';
import type { FormulaCard } from './types/formula';
import { FormulaCardView } from './components/FormulaCardView';
import { DetailPanel } from './components/DetailPanel';

const cards = rawCards as FormulaCard[];
const families = Array.from(new Set(cards.map(c => c.family)));

export default function App() {
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState('all');
  const [selectedId, setSelectedId] = useState(cards[0]?.id ?? '');
  const [compareId, setCompareId] = useState(cards[1]?.id ?? '');

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return cards.filter(card =>
      (family === 'all' || card.family === family) &&
      [card.title, card.canonicalTitle, card.tagline, card.familyLabel, card.formula].join(' ').toLowerCase().includes(q)
    );
  }, [query, family]);

  const selected = cards.find(c => c.id === selectedId) ?? filtered[0] ?? cards[0];
  const compare = cards.find(c => c.id === compareId) ?? cards[1] ?? cards[0];
  const related = cards.filter(c => selected?.crossReferences.includes(c.id));

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
        <select value={family} onChange={e => setFamily(e.target.value)}>
          <option value="all">All families</option>
          {families.map(f => <option key={f} value={f}>{cards.find(c => c.family === f)?.familyLabel ?? f}</option>)}
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
