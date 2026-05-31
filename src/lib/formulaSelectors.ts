import type { FormulaCard, FormulaFamily } from '../types/formula';

export type FamilyFilter = FormulaFamily | 'all';

export interface FamilyOption {
  value: FamilyFilter;
  label: string;
  count: number;
}

export function normalizeSearchText(value: string): string {
  return value.trim().toLowerCase();
}

export function findFormulaById(cards: FormulaCard[], id: string | null | undefined): FormulaCard | undefined {
  if (!id) return undefined;
  return cards.find(card => card.id === id);
}

export function getDefaultFormula(cards: FormulaCard[]): FormulaCard | undefined {
  return cards[0];
}

export function getFamilyOptions(cards: FormulaCard[]): FamilyOption[] {
  const counts = new Map<FormulaFamily, { label: string; count: number }>();

  for (const card of cards) {
    const current = counts.get(card.family) ?? { label: card.familyLabel, count: 0 };
    counts.set(card.family, { label: current.label, count: current.count + 1 });
  }

  return [
    { value: 'all', label: 'All families', count: cards.length },
    ...Array.from(counts.entries()).map(([family, entry]) => ({
      value: family,
      label: entry.label,
      count: entry.count
    }))
  ];
}

export function filterFormulaCards(cards: FormulaCard[], query: string, family: FamilyFilter): FormulaCard[] {
  const q = normalizeSearchText(query);

  return cards.filter(card => {
    const familyMatches = family === 'all' || card.family === family;
    if (!familyMatches) return false;

    if (!q) return true;

    const searchableText = [
      card.id,
      card.title,
      card.canonicalTitle,
      ...(card.alternateTitles ?? []),
      card.family,
      card.familyLabel,
      card.formula,
      card.formulaPlaintext,
      card.tagline,
      card.derivation,
      card.reflectionPrompt,
      card.exampleApplication,
      ...(card.useCases ?? []),
      ...(card.variables ?? []).map(variable => `${variable.symbol} ${variable.meaning} ${variable.role}`)
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    return searchableText.includes(q);
  });
}

export function getRelatedCards(cards: FormulaCard[], card: FormulaCard | undefined): FormulaCard[] {
  if (!card) return [];
  const refs = new Set(card.crossReferences ?? []);
  return cards.filter(candidate => refs.has(candidate.id));
}

export function getCardsByFamily(cards: FormulaCard[], family: FormulaFamily): FormulaCard[] {
  return cards.filter(card => card.family === family);
}

export function getFormulaTitle(cards: FormulaCard[], id: string): string {
  return findFormulaById(cards, id)?.title ?? id;
}
