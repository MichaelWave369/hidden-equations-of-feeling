export interface StorageResult<T> {
  ok: boolean;
  value: T;
  message: string;
}

export function canUseLocalStorage(): boolean {
  if (typeof window === 'undefined' || !window.localStorage) return false;

  try {
    const testKey = '__hidden_equations_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

export function readJsonFromLocalStorage<T>(key: string, fallback: T): StorageResult<T> {
  if (!canUseLocalStorage()) {
    return {
      ok: false,
      value: fallback,
      message: 'Local browser storage is not available. Nothing was loaded.'
    };
  }

  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) {
      return {
        ok: true,
        value: fallback,
        message: 'No saved local value found.'
      };
    }

    return {
      ok: true,
      value: JSON.parse(raw) as T,
      message: 'Loaded from local browser storage.'
    };
  } catch {
    return {
      ok: false,
      value: fallback,
      message: 'Saved local value could not be read, so the default was used.'
    };
  }
}

export function writeJsonToLocalStorage<T>(key: string, value: T): StorageResult<T> {
  if (!canUseLocalStorage()) {
    return {
      ok: false,
      value,
      message: 'Local browser storage is not available. Nothing was saved.'
    };
  }

  try {
    window.localStorage.setItem(key, JSON.stringify(value));
    return {
      ok: true,
      value,
      message: 'Saved locally in this browser only.'
    };
  } catch {
    return {
      ok: false,
      value,
      message: 'Could not save locally in this browser.'
    };
  }
}

export function removeFromLocalStorage(key: string): StorageResult<null> {
  if (!canUseLocalStorage()) {
    return {
      ok: false,
      value: null,
      message: 'Local browser storage is not available. Nothing was cleared.'
    };
  }

  try {
    window.localStorage.removeItem(key);
    return {
      ok: true,
      value: null,
      message: 'Cleared local browser storage for this item.'
    };
  } catch {
    return {
      ok: false,
      value: null,
      message: 'Could not clear local browser storage for this item.'
    };
  }
}

export function uniqueStringList(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean))).sort();
}
