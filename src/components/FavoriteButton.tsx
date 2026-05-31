import { FAVORITES_PRIVACY_NOTE } from '../lib/favoritesStorage';

interface FavoriteButtonProps {
  formulaId: string;
  isFavorite: boolean;
  onToggleFavorite: (formulaId: string) => void;
  compact?: boolean;
}

export function FavoriteButton({ formulaId, isFavorite, onToggleFavorite, compact = false }: FavoriteButtonProps) {
  const label = isFavorite ? 'Saved as favorite' : 'Save as favorite';

  return (
    <button
      type="button"
      className={`favorite-button${isFavorite ? ' active' : ''}${compact ? ' compact' : ''}`}
      aria-pressed={isFavorite}
      aria-label={`${label}. ${FAVORITES_PRIVACY_NOTE}`}
      title={FAVORITES_PRIVACY_NOTE}
      onClick={() => onToggleFavorite(formulaId)}
    >
      <span aria-hidden="true">{isFavorite ? '★' : '☆'}</span>
      {compact ? label : `${label} locally`}
    </button>
  );
}
