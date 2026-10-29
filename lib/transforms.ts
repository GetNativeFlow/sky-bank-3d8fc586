// Auto-generated from the NativeFlow Studio. Do not edit — regenerate from the studio.

// Value transforms (currency, dates, maps, expressions) used by bound values.

/* eslint-disable */

/**
 * Safe single-line expression evaluator for the Field Transform Pipeline.
 *
 * Pure runtime, no `eval`, no `Function`. Used by Canvas, Sandpack Preview,
 * and exported Expo apps — keep behavior identical (the codegen inlines a
 * line-for-line transcription of this file in `FETCH_HELPERS_BLOCK`).
 *
 * Allowed surface:
 *   - Literals: numbers, strings ('...' or "..."), template `...${...}...`,
 *               true, false, null, undefined
 *   - Identifiers from a small whitelist: value, prev, fmt
 *   - Member access: foo.bar, foo['bar'], foo[0]
 *   - Calls: any callable reached through a whitelisted root
 *   - Operators: + - * / % , ternary ? :, == != === !== > < >= <=, && ||, !,
 *                unary +/-, parentheses
 *
 * Anything else (assignment, `new`, statements, regex literals, function
 * decls, `this`, `import`, `await`, etc.) parses to an error.
 */

export interface ExpressionContext {
  value: unknown;
  prev?: unknown;
}

export interface SafeExpressionResult {
  ok: boolean;
  value?: unknown;
  error?: string;
}

const ROOT_WHITELIST = new Set(['value', 'prev', 'fmt']);

// Member names that reach Function or the prototype chain.
const BLOCKED_PROPS = new Set([
  'constructor', '__proto__', 'prototype',
  '__defineGetter__', '__defineSetter__', '__lookupGetter__', '__lookupSetter__',
]);

/* ────────────────── fmt helpers (shared with codegen) ────────────────── */

export const fmt = {
  currency(n: unknown, code: string = 'USD', locale: string = 'en-US'): string {
    const num = typeof n === 'number' ? n : Number(String(n ?? '').replace(/[^0-9.eE+\-]/g, ''));
    if (!isFinite(num)) return n == null ? '' : String(n);
    try {
      return new Intl.NumberFormat(locale, { style: 'currency', currency: code }).format(num);
    } catch {
      return String(num);
    }
  },
  date(v: unknown, style: 'short' | 'medium' | 'long' = 'short', locale: string = 'en-US'): string {
    const d = v instanceof Date ? v : new Date(String(v ?? ''));
    if (isNaN(d.getTime())) return v == null ? '' : String(v);
    try {
      return new Intl.DateTimeFormat(locale, { dateStyle: style }).format(d);
    } catch {
      return d.toISOString().slice(0, 10);
    }
  },
  upper(s: unknown): string {
    return s == null ? '' : String(s).toUpperCase();
  },
  lower(s: unknown): string {
    return s == null ? '' : String(s).toLowerCase();
  },
  pad(s: unknown, n: number, ch: string = '0'): string {
    return String(s ?? '').padStart(Math.max(0, n | 0), ch || '0');
  },
  round(n: unknown, d: number = 0): number {
    const num = typeof n === 'number' ? n : Number(n);
    if (!isFinite(num)) return 0;
    const m = Math.pow(10, d | 0);
    return Math.round(num * m) / m;
  },
};

/* ────────────────────────────── Tokenizer ─────────────────────────────── */

type Tok =
  | { t: 'num'; v: number }
  | { t: 'str'; v: string }
  | { t: 'tmpl'; parts: Array<{ kind: 'str'; v: string } | { kind: 'expr'; v: string }> }
  | { t: 'id'; v: string }
  | { t: 'punc'; v: string };

function tokenize(src: string): Tok[] {
  const out: Tok[] = [];
  let i = 0;
  const n = src.length;

  while (i < n) {
    const ch = src[i];
    if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') { i++; continue; }

    // String literal (no escapes beyond \', \", \\, \n, \t)
    if (ch === "'" || ch === '"') {
      const quote = ch;
      let s = '';
      i++;
      while (i < n && src[i] !== quote) {
        if (src[i] === '\\' && i + 1 < n) {
          const nx = src[++i];
          s += nx === 'n' ? '\n' : nx === 't' ? '\t' : nx;
          i++;
        } else {
          s += src[i++];
        }
      }
      if (i >= n) throw new Error('Unterminated string');
      i++; // closing quote
      out.push({ t: 'str', v: s });
      continue;
    }

    // Template literal — capture raw inner segments and lex pieces
    if (ch === '`') {
      const parts: Array<{ kind: 'str'; v: string } | { kind: 'expr'; v: string }> = [];
      let buf = '';
      i++;
      while (i < n && src[i] !== '`') {
        if (src[i] === '\\' && i + 1 < n) {
          const nx = src[++i];
          buf += nx === 'n' ? '\n' : nx === 't' ? '\t' : nx;
          i++;
          continue;
        }
        if (src[i] === '$' && src[i + 1] === '{') {
          if (buf) { parts.push({ kind: 'str', v: buf }); buf = ''; }
          i += 2;
          let depth = 1;
          let inner = '';
          while (i < n && depth > 0) {
            if (src[i] === '{') depth++;
            else if (src[i] === '}') { depth--; if (depth === 0) break; }
            inner += src[i++];
          }
          if (depth !== 0) throw new Error('Unterminated template expression');
          i++; // closing }
          parts.push({ kind: 'expr', v: inner });
          continue;
        }
        buf += src[i++];
      }
      if (i >= n) throw new Error('Unterminated template literal');
      i++; // closing `
      if (buf) parts.push({ kind: 'str', v: buf });
      out.push({ t: 'tmpl', parts });
      continue;
    }

    // Number
    if ((ch >= '0' && ch <= '9') || (ch === '.' && src[i + 1] >= '0' && src[i + 1] <= '9')) {
      let s = '';
      while (i < n && /[0-9.eE+\-]/.test(src[i])) {
        // Stop sign chars unless they directly follow e/E
        if ((src[i] === '+' || src[i] === '-') && !/[eE]/.test(src[i - 1])) break;
        s += src[i++];
      }
      const v = Number(s);
      if (!isFinite(v)) throw new Error(`Invalid number: ${s}`);
      out.push({ t: 'num', v });
      continue;
    }

    // Identifier
    if (/[A-Za-z_$]/.test(ch)) {
      let s = '';
      while (i < n && /[A-Za-z0-9_$]/.test(src[i])) s += src[i++];
      out.push({ t: 'id', v: s });
      continue;
    }

    // Punctuation / operators (longest match first)
    const three = src.slice(i, i + 3);
    if (three === '===' || three === '!==') { out.push({ t: 'punc', v: three }); i += 3; continue; }
    const two = src.slice(i, i + 2);
    if (['==', '!=', '>=', '<=', '&&', '||'].includes(two)) {
      out.push({ t: 'punc', v: two }); i += 2; continue;
    }
    if ('+-*/%(),.[]?:!<>'.includes(ch)) {
      out.push({ t: 'punc', v: ch }); i++; continue;
    }

    throw new Error(`Unexpected character: ${ch}`);
  }
  return out;
}

/* ─────────────────────────────── Parser ────────────────────────────────
 *
 * Recursive descent. Returns an AST as plain objects.
 */

type Node =
  | { k: 'num'; v: number }
  | { k: 'str'; v: string }
  | { k: 'bool'; v: boolean }
  | { k: 'null' }
  | { k: 'undef' }
  | { k: 'id'; v: string }
  | { k: 'tmpl'; parts: Array<{ kind: 'str'; v: string } | { kind: 'expr'; v: Node }> }
  | { k: 'mem'; obj: Node; prop: string; computed: boolean }
  | { k: 'idx'; obj: Node; idx: Node }
  | { k: 'call'; callee: Node; args: Node[] }
  | { k: 'unary'; op: '!' | '-' | '+'; arg: Node }
  | { k: 'bin'; op: string; l: Node; r: Node }
  | { k: 'cond'; test: Node; cons: Node; alt: Node };

class Parser {
  i = 0;
  constructor(public toks: Tok[]) {}

  peek(o = 0) { return this.toks[this.i + o]; }
  eat() { return this.toks[this.i++]; }
  expect(v: string) {
    const t = this.eat();
    if (!t || t.t !== 'punc' || t.v !== v) throw new Error(`Expected '${v}'`);
  }

  parse(): Node {
    const n = this.parseExpr();
    if (this.i !== this.toks.length) throw new Error('Unexpected trailing input');
    return n;
  }

  parseExpr(): Node { return this.parseTernary(); }

  parseTernary(): Node {
    const test = this.parseOr();
    const t = this.peek();
    if (t && t.t === 'punc' && t.v === '?') {
      this.eat();
      const cons = this.parseTernary();
      this.expect(':');
      const alt = this.parseTernary();
      return { k: 'cond', test, cons, alt };
    }
    return test;
  }

  parseOr(): Node {
    let l = this.parseAnd();
    while (this.peek()?.t === 'punc' && (this.peek() as any).v === '||') {
      this.eat(); const r = this.parseAnd(); l = { k: 'bin', op: '||', l, r };
    }
    return l;
  }
  parseAnd(): Node {
    let l = this.parseEq();
    while (this.peek()?.t === 'punc' && (this.peek() as any).v === '&&') {
      this.eat(); const r = this.parseEq(); l = { k: 'bin', op: '&&', l, r };
    }
    return l;
  }
  parseEq(): Node {
    let l = this.parseCmp();
    while (this.peek()?.t === 'punc' && ['==', '!=', '===', '!=='].includes((this.peek() as any).v)) {
      const op = (this.eat() as any).v; const r = this.parseCmp();
      l = { k: 'bin', op, l, r };
    }
    return l;
  }
  parseCmp(): Node {
    let l = this.parseAdd();
    while (this.peek()?.t === 'punc' && ['<', '>', '<=', '>='].includes((this.peek() as any).v)) {
      const op = (this.eat() as any).v; const r = this.parseAdd();
      l = { k: 'bin', op, l, r };
    }
    return l;
  }
  parseAdd(): Node {
    let l = this.parseMul();
    while (this.peek()?.t === 'punc' && ['+', '-'].includes((this.peek() as any).v)) {
      const op = (this.eat() as any).v; const r = this.parseMul();
      l = { k: 'bin', op, l, r };
    }
    return l;
  }
  parseMul(): Node {
    let l = this.parseUnary();
    while (this.peek()?.t === 'punc' && ['*', '/', '%'].includes((this.peek() as any).v)) {
      const op = (this.eat() as any).v; const r = this.parseUnary();
      l = { k: 'bin', op, l, r };
    }
    return l;
  }
  parseUnary(): Node {
    const t = this.peek();
    if (t && t.t === 'punc' && (t.v === '!' || t.v === '-' || t.v === '+')) {
      this.eat();
      return { k: 'unary', op: t.v as any, arg: this.parseUnary() };
    }
    return this.parsePostfix();
  }
  parsePostfix(): Node {
    let node = this.parsePrimary();
    for (;;) {
      const t = this.peek();
      if (!t) break;
      if (t.t === 'punc' && t.v === '.') {
        this.eat();
        const id = this.eat();
        if (!id || id.t !== 'id') throw new Error('Expected property name after .');
        node = { k: 'mem', obj: node, prop: id.v, computed: false };
      } else if (t.t === 'punc' && t.v === '[') {
        this.eat();
        const idx = this.parseExpr();
        this.expect(']');
        node = { k: 'idx', obj: node, idx };
      } else if (t.t === 'punc' && t.v === '(') {
        this.eat();
        const args: Node[] = [];
        if (!(this.peek()?.t === 'punc' && (this.peek() as any).v === ')')) {
          args.push(this.parseExpr());
          while (this.peek()?.t === 'punc' && (this.peek() as any).v === ',') {
            this.eat(); args.push(this.parseExpr());
          }
        }
        this.expect(')');
        node = { k: 'call', callee: node, args };
      } else break;
    }
    return node;
  }
  parsePrimary(): Node {
    const t = this.eat();
    if (!t) throw new Error('Unexpected end of input');
    if (t.t === 'num') return { k: 'num', v: t.v };
    if (t.t === 'str') return { k: 'str', v: t.v };
    if (t.t === 'tmpl') {
      const parts = t.parts.map((p) =>
        p.kind === 'str' ? { kind: 'str' as const, v: p.v } : { kind: 'expr' as const, v: parseExpression(p.v) },
      );
      return { k: 'tmpl', parts };
    }
    if (t.t === 'id') {
      if (t.v === 'true') return { k: 'bool', v: true };
      if (t.v === 'false') return { k: 'bool', v: false };
      if (t.v === 'null') return { k: 'null' };
      if (t.v === 'undefined') return { k: 'undef' };
      return { k: 'id', v: t.v };
    }
    if (t.t === 'punc' && t.v === '(') {
      const n = this.parseExpr();
      this.expect(')');
      return n;
    }
    throw new Error(`Unexpected token: ${(t as any).v}`);
  }
}

function parseExpression(src: string): Node {
  const p = new Parser(tokenize(src));
  return p.parse();
}

/* ────────────────────────────── Evaluator ────────────────────────────── */

function evalNode(node: Node, ctx: ExpressionContext): unknown {
  switch (node.k) {
    case 'num': return node.v;
    case 'str': return node.v;
    case 'bool': return node.v;
    case 'null': return null;
    case 'undef': return undefined;
    case 'id': {
      if (!ROOT_WHITELIST.has(node.v)) {
        throw new Error(`Identifier '${node.v}' is not allowed`);
      }
      if (node.v === 'value') return ctx.value;
      if (node.v === 'prev') return ctx.prev;
      if (node.v === 'fmt') return fmt;
      return undefined;
    }
    case 'tmpl': {
      let out = '';
      for (const p of node.parts) {
        if (p.kind === 'str') out += p.v;
        else out += stringify(evalNode(p.v, ctx));
      }
      return out;
    }
    case 'mem':
      return getMember(evalNode(node.obj, ctx), node.prop);
    case 'idx':
      return getMember(evalNode(node.obj, ctx), evalNode(node.idx, ctx));
    case 'call': {
      // Bind `this` to the receiver when this is a member call (so
      // `value.toUpperCase()` and `value.slice(0, 3)` work for strings).
      const c = node.callee;
      let thisArg: any = undefined;
      let callee: any;
      if (c.k === 'mem' || c.k === 'idx') {
        thisArg = evalNode(c.obj, ctx);
        callee = getMember(thisArg, c.k === 'mem' ? c.prop : evalNode(c.idx, ctx));
      } else {
        callee = evalNode(c, ctx);
      }
      if (typeof callee !== 'function') throw new Error('Attempted to call a non-function');
      const args = node.args.map((a) => evalNode(a, ctx));
      return callee.apply(thisArg, args);
    }
    case 'unary': {
      const v: any = evalNode(node.arg, ctx);
      if (node.op === '!') return !v;
      if (node.op === '-') return -v;
      return +v;
    }
    case 'bin': {
      const op = node.op;
      // Short-circuit logical
      if (op === '&&') return evalNode(node.l, ctx) && evalNode(node.r, ctx);
      if (op === '||') return evalNode(node.l, ctx) || evalNode(node.r, ctx);
      const a: any = evalNode(node.l, ctx);
      const b: any = evalNode(node.r, ctx);
      switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        case '%': return a % b;
        case '==': return a == b;
        case '!=': return a != b;
        case '===': return a === b;
        case '!==': return a !== b;
        case '<': return a < b;
        case '>': return a > b;
        case '<=': return a <= b;
        case '>=': return a >= b;
      }
      throw new Error(`Unknown operator: ${op}`);
    }
    case 'cond':
      return evalNode(node.test, ctx) ? evalNode(node.cons, ctx) : evalNode(node.alt, ctx);
  }
}

/** Reads obj[key]. The key is turned into a string once, then checked. */
function getMember(obj: any, key: unknown): unknown {
  const k = String(key);
  if (BLOCKED_PROPS.has(k)) throw new Error(`Property '${k}' is not allowed`);
  return obj == null ? undefined : obj[k];
}

function stringify(v: unknown): string {
  if (v == null) return '';
  return String(v);
}

/* ─────────────────────────────── Public API ──────────────────────────── */

/** Parse without throwing — returns an error message on failure. */
export function validateExpression(src: string): { ok: true } | { ok: false; error: string } {
  try {
    parseExpression(src);
    return { ok: true };
  } catch (e: any) {
    return { ok: false, error: e?.message || 'Invalid expression' };
  }
}

/** Evaluate a single-line expression. Always returns; errors are captured. */
export function evalExpression(src: string, ctx: ExpressionContext): SafeExpressionResult {
  try {
    const ast = parseExpression(src);
    const value = evalNode(ast, ctx);
    return { ok: true, value };
  } catch (e: any) {
    return { ok: false, error: e?.message || 'Evaluation error' };
  }
}

/**
 * Field Transform Pipeline — pure runtime
 *
 * Single source of truth used by Canvas, Sandpack Preview, and exported Expo
 * apps. The verbatim source of this file is also emitted into the generated
 * Expo project as `lib/transforms.ts`, guaranteeing byte-identical output for
 * the same `(value, steps)` across all three targets.
 *
 * RULES
 * - Pure. No imports, no side-effects. Safe to inline anywhere.
 * - Tolerant. Bad input never throws — return original value or empty string.
 * - Deterministic. Same input → same output (modulo Intl locale data).
 */

export type TransformStep =
  | {
      type: 'format-currency';
      currency: string;            // ISO-4217 e.g. 'USD'
      locale?: string;             // BCP-47 e.g. 'en-US'
      signDisplay?: 'auto' | 'always' | 'never' | 'exceptZero';
      minimumFractionDigits?: number;
      maximumFractionDigits?: number;
    }
  | {
      type: 'format-date';
      /** Preset or custom string. Presets: short, medium, long, relative. */
      format: 'short' | 'medium' | 'long' | 'relative' | string;
      locale?: string;
    }
  | {
      type: 'map-icon';
      cases: Array<{ when: string; then: string }>;
      default?: string;
      /** Match style. 'exact' (default) or 'ci' (case-insensitive). */
      matchMode?: 'exact' | 'ci';
    }
  | {
      type: 'map-color';
      cases: Array<{ when: string; then: string }>;
      default?: string;
      matchMode?: 'exact' | 'ci';
    }
  | {
      /** Coerce to a number — see the mirror in `@/types/studio`. */
      type: 'to-number';
    }
  | {
      /** Single-line sandboxed expression — see `safeExpression.ts`. */
      type: 'expression';
      expr: string;
      language?: 'js-safe';
    }
  | {
      /**
       * Reshape an array of API rows into chart points
       * `{ value, label, tooltipLabel? }`: pick the value and label fields, read
       * the label as a date ("27 May", tooltip "27 May 2026", via Intl in UTC),
       * and optionally plot percent change from the first row. The only
       * array-level step; a non-array value passes through untouched.
       */
      type: 'map-rows';
      /** Row field (dot path) holding the number. */
      valueField: string;
      /** Row field (dot path) holding the label. */
      labelField?: string;
      labelFormat?: 'raw' | 'date';
      /** `changeFromFirst` = (value / first value − 1) × 100. */
      valueMode?: 'absolute' | 'changeFromFirst';
      /** BCP-47. Omitted = the device's locale. */
      locale?: string;
    }
  | {
      /**
       * Multi-field compose — compiled into the bound expression by every
       * emitter (see `@/lib/composeTemplate`), so it is a no-op here. Present
       * in the union only so a stored pipeline still type-checks.
       */
      type: 'compose';
      template: string;
    };

/** Apply an ordered pipeline of transform steps to a value. */
export function applyTransforms(value: unknown, steps?: TransformStep[] | null): unknown {
  if (!steps || steps.length === 0) return value;
  let v: unknown = value;
  let prev: unknown = value;
  for (const step of steps) {
    try {
      v = applyStep(v, step, prev);
    } catch {
      // Bad step — skip, keep last good value
    }
    prev = v;
  }
  return v;
}

function applyStep(value: unknown, step: TransformStep, prev: unknown = value): unknown {
  switch (step.type) {
    case 'format-currency': {
      const num = toNumber(value);
      if (num == null) return value == null ? '' : String(value);
      const fmt = new Intl.NumberFormat(step.locale || 'en-US', {
        style: 'currency',
        currency: step.currency || 'USD',
        signDisplay: step.signDisplay || 'auto',
        minimumFractionDigits: step.minimumFractionDigits,
        maximumFractionDigits: step.maximumFractionDigits,
      });
      return fmt.format(num);
    }

    case 'format-date': {
      const d = toDate(value);
      if (!d) return value == null ? '' : String(value);
      const locale = step.locale || 'en-US';
      const f = step.format;
      if (f === 'relative') return formatRelative(d, locale);
      const opts = dateStyleOpts(f);
      if (opts) {
        return new Intl.DateTimeFormat(locale, opts).format(d);
      }
      // Treat as custom token format (very small subset)
      return formatCustomDate(d, String(f), locale);
    }

    case 'map-icon':
    case 'map-color': {
      const key = value == null ? '' : String(value);
      const cmp = step.matchMode === 'ci' ? key.toLowerCase() : key;
      for (const c of step.cases || []) {
        const w = step.matchMode === 'ci' ? String(c.when).toLowerCase() : String(c.when);
        if (w === cmp) return c.then;
      }
      return step.default ?? value;
    }

    case 'to-number': {
      // Deliberately stricter than `toNumber`, which strips non-numeric chars
      // so "$1,234" formats as currency. For a CAST that leniency is wrong:
      // typing "abc" would silently become 0. Only a string that is wholly
      // numeric converts; anything else passes through untouched so a
      // half-typed or empty field never collapses the value.
      if (typeof value === 'number') return value;
      if (typeof value !== 'string') return value;
      const t = value.trim();
      if (t === '') return value;
      const n = Number(t);
      return isFinite(n) ? n : value;
    }
    case 'expression': {
      const r = evalExpression(step.expr || '', { value, prev });
      // On error pass through the previous value (don't blow up the pipeline).
      return r.ok ? r.value : value;
    }
    case 'compose':
      // Compiled away at emit time — the value handed in is already composed.
      return value;
    case 'map-rows':
      return mapRows(value, step);
  }
  // Unknown step type — pass through.
  return value;
}

// ───────── helpers ─────────

/** Dot-path read on one row (`as_of`, `stats.total`). */
function readRowField(row: unknown, path: string | undefined): unknown {
  if (!path) return undefined;
  let cur: any = row;
  for (const key of path.split('.')) {
    if (cur == null || typeof cur !== 'object') return undefined;
    cur = cur[key];
  }
  return cur;
}

function rowNumber(v: unknown): number | null {
  if (v === null || v === undefined || v === '') return null;
  const n = typeof v === 'number' ? v : Number(v);
  return isFinite(n) ? n : null;
}

/** A date-only ISO string is a calendar day: read it in UTC so it never shifts. */
function rowDate(v: unknown): Date | null {
  if (typeof v === 'string') {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(v.trim());
    if (m) return new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
  }
  return toDate(v);
}

function rowLabel(raw: unknown, format: string | undefined, withYear: boolean, locale: string | undefined): string {
  if (raw === null || raw === undefined) return '';
  if (format === 'date') {
    const d = rowDate(raw);
    if (d) {
      try {
        return new Intl.DateTimeFormat(locale, {
          day: 'numeric',
          month: 'short',
          year: withYear ? 'numeric' : undefined,
          timeZone: 'UTC',
        }).format(d);
      } catch {
        return d.toISOString().slice(0, 10);
      }
    }
  }
  return String(raw);
}

function mapRows(value: unknown, step: Extract<TransformStep, { type: 'map-rows' }>): unknown {
  if (!Array.isArray(value)) return value;
  const numbers = value.map((row) => rowNumber(readRowField(row, step.valueField)));
  let base: number | null = null;
  if (step.valueMode === 'changeFromFirst') {
    for (const n of numbers) {
      if (n !== null && n !== 0) { base = n; break; }
    }
  }
  return value.map((row, i) => {
    let v = numbers[i];
    if (step.valueMode === 'changeFromFirst' && v !== null) v = base === null ? 0 : (v / base - 1) * 100;
    const raw = readRowField(row, step.labelField);
    const label = rowLabel(raw, step.labelFormat, false, step.locale);
    const tooltipLabel = rowLabel(raw, step.labelFormat, true, step.locale);
    return tooltipLabel !== label ? { value: v, label, tooltipLabel } : { value: v, label };
  });
}

function toNumber(v: unknown): number | null {
  if (typeof v === 'number' && isFinite(v)) return v;
  if (typeof v === 'string' && v.trim() !== '') {
    // Strip common currency chars to be lenient
    const cleaned = v.replace(/[^0-9.eE+\-]/g, '');
    const n = Number(cleaned);
    return isFinite(n) ? n : null;
  }
  return null;
}

function toDate(v: unknown): Date | null {
  if (v instanceof Date) return isNaN(v.getTime()) ? null : v;
  if (typeof v === 'number') {
    const d = new Date(v);
    return isNaN(d.getTime()) ? null : d;
  }
  if (typeof v === 'string' && v.trim() !== '') {
    const d = new Date(v);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
}

function dateStyleOpts(f: string): Intl.DateTimeFormatOptions | null {
  if (f === 'short') return { dateStyle: 'short' };
  if (f === 'medium') return { dateStyle: 'medium' };
  if (f === 'long') return { dateStyle: 'long' };
  return null;
}

function formatRelative(d: Date, locale: string): string {
  const diffMs = d.getTime() - Date.now();
  const abs = Math.abs(diffMs);
  const sec = Math.round(diffMs / 1000);
  const min = Math.round(diffMs / 60000);
  const hr = Math.round(diffMs / 3600000);
  const day = Math.round(diffMs / 86400000);
  const RTF: any = (Intl as any).RelativeTimeFormat;
  if (typeof RTF !== 'function') {
    return new Intl.DateTimeFormat(locale, { dateStyle: 'short' }).format(d);
  }
  const rtf = new RTF(locale, { numeric: 'auto' });
  if (abs < 60_000) return rtf.format(sec, 'second');
  if (abs < 3_600_000) return rtf.format(min, 'minute');
  if (abs < 86_400_000) return rtf.format(hr, 'hour');
  return rtf.format(day, 'day');
}

/** Tiny token formatter: YYYY MM DD HH mm ss. */
function formatCustomDate(d: Date, fmt: string, _locale: string): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return fmt
    .replace(/YYYY/g, String(d.getFullYear()))
    .replace(/MM/g, pad(d.getMonth() + 1))
    .replace(/DD/g, pad(d.getDate()))
    .replace(/HH/g, pad(d.getHours()))
    .replace(/mm/g, pad(d.getMinutes()))
    .replace(/ss/g, pad(d.getSeconds()));
}
