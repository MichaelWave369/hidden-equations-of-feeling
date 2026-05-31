import type { FormulaCard } from '../types/formula';

interface Props {
  card: FormulaCard;
  selected?: boolean;
  onSelect?: (id: string) => void;
}

export function FormulaCardView({ card, selected, onSelect }: Props) {
  return (
    <button className={`formula-card ${selected ? 'selected' : ''}`} style={{ borderColor: card.familyColor }} onClick={() => onSelect?.(card.id)}>
      <span className="family-pill" style={{ background: card.familyColor }}>{card.familyLabel}</span>
      <h3>{card.title}</h3>
      {card.canonicalTitle && card.canonicalTitle !== card.title && <p className="alias">Origin: {card.canonicalTitle}</p>}
      <p className="formula" aria-label={card.formulaPlaintext}>{card.formula}</p>
      <p className="tagline">{card.tagline}</p>
    </button>
  );
}
