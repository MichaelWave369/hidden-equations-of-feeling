import { useEffect, useMemo, useState } from 'react';
import rawCards from './data/formula_cards.json';
import rawExamples from './data/example_gallery.json';
import rawCrossReferenceMap from './data/cross_reference_map.json';
import type { FormulaCard } from './types/formula';
import { FormulaCardView } from './components/FormulaCardView';
import { DetailPanel } from './components/DetailPanel';
import { ExampleGallery } from './components/ExampleGallery';
import { FormulaOfTheDay } from './components/FormulaOfTheDay';
import {
  filterFormulaCards,
  findFormulaById,
  getDefaultFormula,
  getFamilyOptions,
  getFormulaTitle,
  getRelatedCards,
  type FamilyFilter
} from './lib/formulaSelectors';
import { getCardIdFromHash, setCardHash } from './lib/hashRouting';
import type { ExampleGalleryRecord } from './lib/formatMarkdown';
import { getExamplesForFormula } from './lib/exampleSelectors';
import {
  clearFavoriteFormulaIds,
  getFavoritesStatusText,
  isFavoriteFormula,
  readFavoriteFormulaIds,
  toggleFavoriteFormulaId,
  writeFavoriteFormulaIds
} from './lib/favoritesStorage';
import {
  findRelationship,
  formatRelationshipType,
  getCompareBoundaryText,
  getRecommendedComparePairs,
  getRelationshipDescription,
  type CrossReferenceMap
} from './lib/relationshipSelectors';

const cards = rawCards as FormulaCard[];
const examples = rawExamples as ExampleGalleryRecord[];
const crossReferenceMap = rawCrossReferenceMap as CrossReferenceMap;

function getInitialSelectedId(): string {
  const hashCardId = getCardIdFromHash();
  return findFormulaById(cards, hashCardId)?.id ?? getDefaultFormula(cards)?.id ?? '';
}

function getInitialFavoriteIds(): string[] {
  return readFavoriteFormulaIds().value;
}

export default function App() {
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState<FamilyFilter>('all');
  const [selectedId, setSelectedId] = useState(getInitialSelectedId);
  const [compareId, setCompareId] = useState(cards[1]?.id ?? getDefaultFormula(cards)?.id ?? '');
  const [favoriteIds, setFavoriteIds] = useState<string[]>(getInitialFavoriteIds);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [favoritesStatus, setFavoritesStatus] = useState(getFavoritesStatusText(favoriteIds.length));

  useEffect(() => {
    const handleHashChange = () => {
      const hashCardId = getCardIdFromHash();
      const hashCard = findFormulaById(cards, hashCardId);

      if (hashCard) {
        setSelectedId(hashCard.id);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const familyOptions = useMemo(() => getFamilyOptions(cards), []);
  const filtered = useMemo(() => filterFormulaCards(cards, query, family), [query, family]);
  const visibleCards = useMemo(() => {
    if (!showFavoritesOnly) return filtered;
    return filtered.filter(card => isFavoriteFormula(favoriteIds, card.id));
  }, [filtered, favoriteIds, showFavoritesOnly]);
  const recommendedPairs = useMemo(() => getRecommendedComparePairs(crossReferenceMap), []);

  const selected = findFormulaById(cards, selectedId) ?? visibleCards[0] ?? filtered[0] ?? getDefaultFormula(cards);
  const compare = findFormulaById(cards, compareId) ?? cards[1] ?? getDefaultFormula(cards);
  const related = getRelatedCards(cards, selected);
  const selectedExamples = getExamplesForFormula(examples, selected?.id);
  const activeRelationship = selected && compare ? findRelationship(crossReferenceMap, selected.id, compare.id) : undefined;

  const handleSelectCard = (cardId: string) => {
    setSelectedId(cardId);
    setCardHash(cardId);
  };

  const handleToggleFavorite = (formulaId: string) => {
    const nextFavoriteIds = toggleFavoriteFormulaId(favoriteIds, formulaId);
    const result = writeFavoriteFormulaIds(nextFavoriteIds);
    setFavoriteIds(result.value);
    setFavoritesStatus(result.ok ? getFavoritesStatusText(result.value.length) : result.message);

    if (result.value.length === 0) {
      setShowFavoritesOnly(false);
    }
  };

  const handleClearFavorites = () => {
    const result = clearFavoriteFormulaIds();
    setFavoriteIds([]);
    setShowFavoritesOnly(false);
    setFavoritesStatus(result.ok ? getFavoritesStatusText(0) : result.message);
  };

  const handleRecommendedPair = (pairKey: string) => {
    const [sourceId, targetId] = pairKey.split('::');
    if (!sourceId || !targetId) return;

    const source = findFormulaById(cards, sourceId);
    const target = findFormulaById(cards, targetId);
    if (!source || !target) return;

    setSelectedId(source.id);
    setCompareId(target.id);
    setCardHash(source.id);
  };

  return (
    <main>
      <header className="hero">
        <p className="kicker">PHI369 Labs / Professor Phi</p>
        <h1>The Hidden Equations of Feeling</h1>
        <p>A symbolic formula atlas for comedy, drama, story design, NPC emotion design, and reflective creative tools.</p>
        <div className="boundary-chip">Creative metaphor only — not clinical, diagnostic, empirical, or a human score.</div>
      </header>

      <FormulaOfTheDay cards={cards} onSelectFormula={handleSelectCard} />

      <section className="favorites-panel" aria-label="Local favorites">
        <p className="copy-status" role="status" aria-live="polite">
          {showFavoritesOnly ? `Showing ${visibleCards.length} matching local favorite${visibleCards.length === 1 ? '' : 's'}. ` : ''}{favoritesStatus}
        </p>
        <div className="favorites-actions">
          <button
            type="button"
            disabled={favoriteIds.length === 0}
            aria-pressed={showFavoritesOnly}
            onClick={() => setShowFavoritesOnly(current => !current)}
          >
            {showFavoritesOnly ? 'Show all formulas' : 'Show favorites only'}
          </button>
          {favoriteIds.length > 0 && (
            <button type="button" onClick={handleClearFavorites}>Clear local favorites</button>
          )}
        </div>
      </section>

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
          {visibleCards.map(card => (
            <FormulaCardView
              key={card.id}
              card={card}
              selected={card.id === selected?.id}
              onSelect={handleSelectCard}
              isFavorite={isFavoriteFormula(favoriteIds, card.id)}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
          {visibleCards.length === 0 && (
            <p className="footer-note">
              {showFavoritesOnly ? 'No saved favorites match the current search/filter yet.' : 'No formulas match the current search/filter yet.'}
            </p>
          )}
        </aside>
        {selected && (
          <DetailPanel
            card={selected}
            related={related}
            examples={selectedExamples}
            isFavorite={isFavoriteFormula(favoriteIds, selected.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        )}
      </section>

      <section className="compare-panel">
        <h2>Compare Mode</h2>
        <p>Use this to see how similar structures shift meaning across families, especially Comedy ↔ Drama mirrors.</p>
        <p className="copy-status">{getCompareBoundaryText(crossReferenceMap)}</p>

        <label>
          Suggested compare pair
          <select value="" onChange={e => handleRecommendedPair(e.target.value)}>
            <option value="">Choose a recommended pair...</option>
            {recommendedPairs.map(edge => (
              <option key={`${edge.source}::${edge.target}::${edge.relationship}`} value={`${edge.source}::${edge.target}`}>
                {getFormulaTitle(cards, edge.source)} ↔ {getFormulaTitle(cards, edge.target)} — {formatRelationshipType(edge.relationship)}
              </option>
            ))}
          </select>
        </label>

        <label>
          Compare selected formula with
          <select value={compareId} onChange={e => setCompareId(e.target.value)}>
            {cards.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
          </select>
        </label>

        {activeRelationship && (
          <div className="relationship-note">
            <strong>{formatRelationshipType(activeRelationship.relationship)}:</strong> {activeRelationship.label}
            <br />
            <small>{getRelationshipDescription(crossReferenceMap, activeRelationship.relationship)}</small>
          </div>
        )}

        {selected && compare && <div className="compare-grid">
          <FormulaCardView card={selected} />
          <FormulaCardView card={compare} />
        </div>}
      </section>

      <ExampleGallery examples={examples} cards={cards} onSelectFormula={handleSelectCard} />

      <footer className="footer-note">
        <strong>Publication note:</strong> v0.3 starter atlas. Full 52-card dataset and whitepaper expansion are staged in the local scaffold ZIP for the next commit pass.
      </footer>
    </main>
  );
}
