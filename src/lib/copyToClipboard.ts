export interface CopyResult {
  ok: boolean;
  message: string;
}

export async function copyToClipboard(text: string): Promise<CopyResult> {
  if (!text.trim()) {
    return { ok: false, message: 'Nothing to copy.' };
  }

  if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) {
    return {
      ok: false,
      message: 'Clipboard copy is not available in this browser. You can still select and copy the text manually.'
    };
  }

  try {
    await navigator.clipboard.writeText(text);
    return { ok: true, message: 'Copied to clipboard.' };
  } catch {
    return {
      ok: false,
      message: 'Clipboard copy failed. You can still select and copy the text manually.'
    };
  }
}

export function copyResultLabel(result: CopyResult | null): string {
  if (!result) return '';
  return result.message;
}
