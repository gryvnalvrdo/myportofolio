/**
 * Defensive URL and link validation helpers.
 * Ensures only vetted protocols and local paths are rendered in interactive elements.
 */

const SAFE_EXTERNAL_PROTOCOLS = new Set(["https:"]);
const SAFE_CONTACT_PROTOCOLS = new Set(["https:", "mailto:", "tel:"]);

export function isSafeLocalAssetPath(src: string | null | undefined): src is string {
  if (!src) return false;
  const trimmed = src.trim();
  // Require strict root-relative path without protocol-relative "//"
  return trimmed.startsWith("/") && !trimmed.startsWith("//") && !trimmed.includes("..");
}

export function getSafeExternalHref(url: string): string {
  try {
    const parsed = new URL(url);
    if (SAFE_EXTERNAL_PROTOCOLS.has(parsed.protocol)) {
      return parsed.toString();
    }
    return "#";
  } catch {
    return "#";
  }
}

export function getSafeContactHref(url: string): string {
  try {
    const parsed = new URL(url);
    if (SAFE_CONTACT_PROTOCOLS.has(parsed.protocol)) {
      return parsed.toString();
    }
    return "#";
  } catch {
    return "#";
  }
}
