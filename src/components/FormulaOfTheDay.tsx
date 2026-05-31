import { useMemo } from 'react';
import type { FormulaCard } from '../types/formula';
import { getDailyFormula, getDailyFormulaLabel } from '../lib/dailyFormula';

interface FormulaOfTheDayProps {
  cards: FormulaCard[];
  onSelectFormula: (formulaId: string) => void;
}

export function FormulaOfTheDay({ cards, onSelectFormula }: FormulaOfTheDayProps) {
  const daily = useMemo(() => getDailyFormula(cards), [cards]);

  if (!daily.card) {
    return null;
  }

  return (
    <section className="daily-formula" aria-label={getDailyFormulaLabel(daily)}>
      <div>
        <p className="kicker">Formula of the Day</p>
        <h2>{daily.card.title}</h2>
        <p className="formula" aria-label={daily.card.formulaPlaintext}>{daily.card.formula}</p>
        <p>{daily.card.tagline}</p>
        <blockquote>{daily.card.reflectionPrompt}</blockquote>
        <p className="copy-status">{daily.boundaryNote}</p>
      </div>
      <div className="daily-formula-action">
        <span className="example-category">{daily.dateKey}</span>
        <button type="button" onClick={() => onSelectFormula(daily.card!.id)}>
          Open today’s formula
        </button>
      </div>
    </section>
  );
}
