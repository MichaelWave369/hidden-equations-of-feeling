import type { FormulaCard } from '../types/formula';
import { FavoriteButton } from './FavoriteButton';

interface Props {
  card: FormulaCard;
  selected?: boolean;
  onSelect?: (id: string) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function FormulaCardView({ card, selected, onSelect, isFavorite = false, onToggleFavorite }: Props) {
  return (
    <article className={`formula-card ${selected ? 'selected' : ''}`} style={{ borderColor: card.familyColor }}>
      <button type="button" className="formula-card-select" onClick={() => onSelect?.(card.id)}>
        <span className="family-pill" style={{ background: card.familyColor }}>{card.familyLabel}</span>
        <h3>{card.title}</h3>
        {card.canonicalTitle && card.canonicalTitle !== card.title && <p className="alias">Origin: {card.canonicalTitle}</p>}
        <p className="formula" aria-label={card.formulaPlaintext}>{card.formula}</p>
        <p className="tagline">{card.tagline}</p>
      </button>

      {onToggleFavorite && (
        <FavoriteButton
          formulaId={card.id}
          isFavorite={isFavorite}
          onToggleFavorite={onToggleFavorite}
          compact
        />
      )}
    </article>
  );
}
