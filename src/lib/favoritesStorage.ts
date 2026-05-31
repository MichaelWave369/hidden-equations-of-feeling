import {
  readJsonFromLocalStorage,
  removeFromLocalStorage,
  uniqueStringList,
  writeJsonToLocalStorage,
  type StorageResult
} from './localStorageSafe';

export const FAVORITES_STORAGE_KEY = 'hidden-equations-of-feeling:favorites:v1';

export const FAVORITES_PRIVACY_NOTE =
  'Favorites are stored locally in this browser only. They are not uploaded, tracked, synced, or used to score you.';

export function readFavoriteFormulaIds(): StorageResult<string[]> {
  const result = readJsonFromLocalStorage<string[]>(FAVORITES_STORAGE_KEY, []);

  return {
    ...result,
    value: Array.isArray(result.value) ? uniqueStringList(result.value) : []
  };
}

export function writeFavoriteFormulaIds(ids: string[]): StorageResult<string[]> {
  return writeJsonToLocalStorage(FAVORITES_STORAGE_KEY, uniqueStringList(ids));
}

export function isFavoriteFormula(favoriteIds: string[], formulaId: string): boolean {
  return favoriteIds.includes(formulaId);
}

export function addFavoriteFormulaId(favoriteIds: string[], formulaId: string): string[] {
  return uniqueStringList([...favoriteIds, formulaId]);
}

export function removeFavoriteFormulaId(favoriteIds: string[], formulaId: string): string[] {
  return uniqueStringList(favoriteIds.filter(id => id !== formulaId));
}

export function toggleFavoriteFormulaId(favoriteIds: string[], formulaId: string): string[] {
  if (isFavoriteFormula(favoriteIds, formulaId)) {
    return removeFavoriteFormulaId(favoriteIds, formulaId);
  }

  return addFavoriteFormulaId(favoriteIds, formulaId);
}

export function clearFavoriteFormulaIds(): StorageResult<null> {
  return removeFromLocalStorage(FAVORITES_STORAGE_KEY);
}

export function getFavoritesStatusText(count: number): string {
  if (count === 0) return `No favorites saved. ${FAVORITES_PRIVACY_NOTE}`;
  if (count === 1) return `1 favorite saved locally. ${FAVORITES_PRIVACY_NOTE}`;
  return `${count} favorites saved locally. ${FAVORITES_PRIVACY_NOTE}`;
}
