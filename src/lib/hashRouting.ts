const CARD_ROUTE_PREFIX = '#/card/';

export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function isCardHash(hash: string): boolean {
  return hash.startsWith(CARD_ROUTE_PREFIX) && hash.length > CARD_ROUTE_PREFIX.length;
}

export function getCardIdFromHash(hash = isBrowser() ? window.location.hash : ''): string | null {
  if (!isCardHash(hash)) return null;

  const rawId = hash.slice(CARD_ROUTE_PREFIX.length).trim();
  if (!rawId) return null;

  try {
    return decodeURIComponent(rawId);
  } catch {
    return rawId;
  }
}

export function createCardHash(cardId: string): string {
  return `${CARD_ROUTE_PREFIX}${encodeURIComponent(cardId)}`;
}

export function setCardHash(cardId: string): void {
  if (!isBrowser() || !cardId) return;

  const nextHash = createCardHash(cardId);
  if (window.location.hash === nextHash) return;

  window.history.replaceState(null, '', nextHash);
}

export function clearCardHash(): void {
  if (!isBrowser()) return;

  const path = `${window.location.pathname}${window.location.search}`;
  window.history.replaceState(null, '', path);
}
