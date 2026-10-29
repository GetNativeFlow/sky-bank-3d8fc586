// Auto-generated from the NativeFlow Studio. Do not edit — regenerate from the studio.
// Helpers screens use as nf.*.
/* eslint-disable */
export { applyTransforms } from './transforms';

/**
 * The array a response holds at `path` (dot keys). With no path: the response
 * itself, its `data` field, or its first array field.
 */
export function walkArrayPath(json: any, path?: string): any[] {
  if (!path) {
    if (Array.isArray(json)) return json;
    if (json && Array.isArray(json.data)) return json.data;
    if (json && typeof json === 'object') {
      for (const k of Object.keys(json)) {
        if (Array.isArray(json[k])) return json[k];
      }
    }
    return [];
  }
  const parts = String(path).split('.').filter(Boolean);
  let cur = json;
  for (const p of parts) { if (cur == null) return []; cur = cur[p]; }
  return Array.isArray(cur) ? cur : [];
}

/** Split a variable path into keys and indexes: `cart.lines[0].sku`; `[]` means index 0. */
function pathTokens(path: string): Array<string | number> {
  const out: Array<string | number> = [];
  const re = /([^.[\]]+)|\[(\d*)\]/g;
  let m;
  while ((m = re.exec(path)) !== null) {
    if (m[1] != null) out.push(m[1]);
    else out.push(m[2] === '' ? 0 : Number(m[2]));
  }
  return out;
}

/**
 * Find `key` in `vars`: longest matching prefix first, then walk the rest.
 * `found` is false for a missing segment, true for a variable that holds null.
 */
function lookupVar(vars: Record<string, any>, key: string): { found: boolean; value?: any } {
  const tokens = pathTokens(String(key).trim());
  for (let i = tokens.length; i >= 1; i--) {
    const head = tokens.slice(0, i).join('.');
    if (!(head in vars)) continue;
    let v = vars[head];
    for (const tok of tokens.slice(i)) {
      if (v == null) return { found: false };
      if (typeof tok === 'number') {
        if (!Array.isArray(v) || !(tok in v)) return { found: false };
      } else {
        // A key against an array reads its first item, so `lines.sku` == `lines[0].sku`.
        if (Array.isArray(v)) { v = v[0]; if (v == null) return { found: false }; }
        if (!(tok in Object(v))) return { found: false };
      }
      v = v[tok];
    }
    return { found: true, value: v };
  }
  return { found: false };
}

/**
 * Replace `{{ name }}` references in `s` with values from `vars`.
 * Unknown names stay as written, so a bad request shows up in the network tab.
 * Non-strings go in as JSON; a reference that fills a whole quoted slot drops
 * the quotes, so `"{{ cart.qty }}"` sends a real number.
 */
export function interpolate(s: any, vars: Record<string, any>): any {
  if (typeof s !== 'string') return s;
  return s.replace(/("?)\{\{\s*([\w.[\]-]+)\s*\}\}("?)/g, (match, q1, key, q2) => {
    try {
      const hit = lookupVar(vars, key);
      if (!hit.found) return match;
      if (typeof hit.value === 'string') return q1 + hit.value + q2;
      const json = JSON.stringify(hit.value);
      return q1 && q2 ? json : q1 + json + q2;
    } catch { return match; }
  });
}

/** A value as Text content: null, undefined and objects render as ''. */
export function text(value: any): string {
  return value == null || typeof value === 'object' ? '' : String(value);
}

function logActionError(e: unknown) {
  console.error('[Action Error]', e);
}

/** Wrap an action handler so a thrown or rejected error is logged instead of crashing the screen. */
export function safely<A extends any[]>(fn: (...args: A) => any): (...args: A) => any {
  return (...args: A) => {
    try {
      const result = fn(...args);
      if (result && typeof result.then === 'function') result.then(undefined, logActionError);
      return result;
    } catch (e) {
      logActionError(e);
    }
  };
}
