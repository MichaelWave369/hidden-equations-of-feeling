import type { FormulaCard } from '../types/formula';

export interface DailyFormulaResult {
  card: FormulaCard | undefined;
  dateKey: string;
  index: number;
  boundaryNote: string;
}

export const DAILY_FORMULA_BOUNDARY =
  'Formula of the Day is a local, deterministic creative prompt. It does not track you, profile you, diagnose you, or score your feelings.';

function padDatePart(value: number): string {
  return String(value).padStart(2, '0');
}

export function getLocalDateKey(date = new Date()): string {
  const year = date.getFullYear();
  const month = padDatePart(date.getMonth() + 1);
  const day = padDatePart(date.getDate());
  return `${year}-${month}-${day}`;
}

export function dateKeyToNumber(dateKey: string): number {
  let hash = 0;

  for (const character of dateKey) {
    hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
  }

  return hash;
}

export function getDailyFormula(cards: FormulaCard[], date = new Date()): DailyFormulaResult {
  const dateKey = getLocalDateKey(date);

  if (!cards.length) {
    return {
      card: undefined,
      dateKey,
      index: -1,
      boundaryNote: DAILY_FORMULA_BOUNDARY
    };
  }

  const index = dateKeyToNumber(dateKey) % cards.length;

  return {
    card: cards[index],
    dateKey,
    index,
    boundaryNote: DAILY_FORMULA_BOUNDARY
  };
}

export function getDailyFormulaLabel(result: DailyFormulaResult): string {
  if (!result.card) return `No Formula of the Day available for ${result.dateKey}.`;
  return `Formula of the Day for ${result.dateKey}: ${result.card.title}`;
}
