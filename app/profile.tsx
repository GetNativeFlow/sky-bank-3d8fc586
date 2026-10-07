import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';

function Profile() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  // ── Auto-generated fetch helpers ──
  const __vars = {};
  // Tokenise a variable path the same way resolvePathValue does (see
  // src/lib/apiResponseUtils.ts — one grammar for canvas, codegen and preview):
  // dot keys, [0] indices, and [] meaning index 0. Guarded by the parity test in
  // src/lib/__tests__/apiPayloadVariables.test.ts.
  const __pathTokens = (path) => {
    const out = [];
    const re = /([^\.\[\]]+)|\[(\d*)\]/g;
    let m;
    while ((m = re.exec(path)) !== null) {
      if (m[1] != null) out.push(m[1]);
      else out.push(m[2] === '' ? 0 : Number(m[2]));
    }
    return out;
  };
  // Longest-prefix match on the scope, then walk the remainder, so
  // `cart.user.address.city` and `cart.lines[0].sku` reach into object and array
  // variables. `found` stays false when a segment is absent (a typo) but is true
  // for a variable that legitimately holds null.
  const __lookupVar = (key) => {
    const tokens = __pathTokens(String(key).trim());
    for (let i = tokens.length; i >= 1; i--) {
      const head = tokens.slice(0, i).join('.');
      if (!(head in __vars)) continue;
      let v = __vars[head];
      for (const tok of tokens.slice(i)) {
        if (v == null) return { found: false };
        if (typeof tok === 'number') {
          if (!Array.isArray(v) || !(tok in v)) return { found: false };
        } else {
          // Same array auto-unwrap as resolvePathValue: a string key against an
          // array reads the first item, so `lines.sku` == `lines[0].sku`.
          if (Array.isArray(v)) { v = v[0]; if (v == null) return { found: false }; }
          if (!(tok in Object(v))) return { found: false };
        }
        v = v[tok];
      }
      return { found: true, value: v };
    }
    return { found: false };
  };
  const interpolateVars = (s) => {
    if (typeof s !== 'string') return s;
    return s.replace(/("?)\{\{\s*([\w.[\]-]+)\s*\}\}("?)/g, (_m, q1, key, q2) => {
      try {
        const hit = __lookupVar(key);
        // Unknown variable: leave it intact, quotes included, so the bad request is
        // visible in the network tab instead of silently sending an empty value.
        if (!hit.found) return _m;
        if (typeof hit.value === 'string') return q1 + hit.value + q2;
        // Non-strings (object / array / number / boolean / null) are emitted as
        // JSON. When the reference fills the whole quoted slot the quotes go with it,
        // so `{"tags": "{{ cart.tags }}"}` sends a real array and `"{{ cart.qty }}"`
        // a real number rather than JSON trapped inside a string.
        const json = JSON.stringify(hit.value);
        return q1 && q2 ? json : q1 + json + q2;
      } catch { return _m; }
    });
  };
  const walkArrayPath = (json, path) => {
    if (!path) {
      if (Array.isArray(json)) return json;
      if (json && Array.isArray(json.data)) return json.data;
      // Walk one level deep to find the first array (legacy behavior).
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
  };
  // ── Field Transform Pipeline (Phase 1) — keep in sync with src/lib/transforms/applyTransforms.ts ──
  const __toNumber = (v) => {
    if (typeof v === 'number' && isFinite(v)) return v;
    if (typeof v === 'string' && v.trim() !== '') {
      const cleaned = v.replace(/[^0-9.eE+\-]/g, '');
      const n = Number(cleaned);
      return isFinite(n) ? n : null;
    }
    return null;
  };
  const __toDate = (v) => {
    if (v instanceof Date) return isNaN(v.getTime()) ? null : v;
    if (typeof v === 'number') { const d = new Date(v); return isNaN(d.getTime()) ? null : d; }
    if (typeof v === 'string' && v.trim() !== '') { const d = new Date(v); return isNaN(d.getTime()) ? null : d; }
    return null;
  };
  const __dateOpts = (f) => f === 'short' ? { dateStyle: 'short' } : f === 'medium' ? { dateStyle: 'medium' } : f === 'long' ? { dateStyle: 'long' } : null;
  const __formatRelative = (d, locale) => {
    const diff = d.getTime() - Date.now();
    const RTF = Intl && Intl.RelativeTimeFormat;
    if (typeof RTF !== 'function') return new Intl.DateTimeFormat(locale, { dateStyle: 'short' }).format(d);
    const rtf = new RTF(locale, { numeric: 'auto' });
    const abs = Math.abs(diff);
    if (abs < 60000) return rtf.format(Math.round(diff / 1000), 'second');
    if (abs < 3600000) return rtf.format(Math.round(diff / 60000), 'minute');
    if (abs < 86400000) return rtf.format(Math.round(diff / 3600000), 'hour');
    return rtf.format(Math.round(diff / 86400000), 'day');
  };
  const __formatCustomDate = (d, fmt) => {
    const pad = (n) => String(n).padStart(2, '0');
    return String(fmt)
      .replace(/YYYY/g, String(d.getFullYear()))
      .replace(/MM/g, pad(d.getMonth() + 1))
      .replace(/DD/g, pad(d.getDate()))
      .replace(/HH/g, pad(d.getHours()))
      .replace(/mm/g, pad(d.getMinutes()))
      .replace(/ss/g, pad(d.getSeconds()));
  };
  const __readRowField = (row, path) => {
    if (!path) return undefined;
    let cur = row;
    for (const key of String(path).split('.')) {
      if (cur == null || typeof cur !== 'object') return undefined;
      cur = cur[key];
    }
    return cur;
  };
  const __rowNumber = (v) => {
    if (v === null || v === undefined || v === '') return null;
    const n = typeof v === 'number' ? v : Number(v);
    return isFinite(n) ? n : null;
  };
  const __rowDate = (v) => {
    if (typeof v === 'string') {
      const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(v.trim());
      if (m) return new Date(Date.UTC(Number(m[1]), Number(m[2]) - 1, Number(m[3])));
    }
    return __toDate(v);
  };
  const __rowLabel = (raw, format, withYear, locale) => {
    if (raw === null || raw === undefined) return '';
    if (format === 'date') {
      const d = __rowDate(raw);
      if (d) {
        try {
          return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short', year: withYear ? 'numeric' : undefined, timeZone: 'UTC' }).format(d);
        } catch (_e) {
          return d.toISOString().slice(0, 10);
        }
      }
    }
    return String(raw);
  };
  const __mapRows = (value, step) => {
    if (!Array.isArray(value)) return value;
    const numbers = value.map((row) => __rowNumber(__readRowField(row, step.valueField)));
    let base = null;
    if (step.valueMode === 'changeFromFirst') {
      for (const n of numbers) { if (n !== null && n !== 0) { base = n; break; } }
    }
    return value.map((row, i) => {
      let v = numbers[i];
      if (step.valueMode === 'changeFromFirst' && v !== null) v = base === null ? 0 : (v / base - 1) * 100;
      const raw = __readRowField(row, step.labelField);
      const label = __rowLabel(raw, step.labelFormat, false, step.locale);
      const tooltipLabel = __rowLabel(raw, step.labelFormat, true, step.locale);
      return tooltipLabel !== label ? { value: v, label: label, tooltipLabel: tooltipLabel } : { value: v, label: label };
    });
  };
  const __applyStep = (value, step, prev) => {
    switch (step.type) {
      case 'format-currency': {
        const num = __toNumber(value);
        if (num == null) return value == null ? '' : String(value);
        return new Intl.NumberFormat(step.locale || 'en-US', {
          style: 'currency',
          currency: step.currency || 'USD',
          signDisplay: step.signDisplay || 'auto',
          minimumFractionDigits: step.minimumFractionDigits,
          maximumFractionDigits: step.maximumFractionDigits,
        }).format(num);
      }
      case 'format-date': {
        const d = __toDate(value);
        if (!d) return value == null ? '' : String(value);
        const locale = step.locale || 'en-US';
        if (step.format === 'relative') return __formatRelative(d, locale);
        const opts = __dateOpts(step.format);
        if (opts) return new Intl.DateTimeFormat(locale, opts).format(d);
        return __formatCustomDate(d, step.format);
      }
      case 'to-number': {
        // Stricter than __toNumber (which strips chars for currency): only a
        // wholly-numeric string converts, everything else passes through.
        if (typeof value === 'number') return value;
        if (typeof value !== 'string') return value;
        const t = value.trim();
        if (t === '') return value;
        const n = Number(t);
        return isFinite(n) ? n : value;
      }
      case 'map-icon':
      case 'map-color': {
        const key = value == null ? '' : String(value);
        const cmp = step.matchMode === 'ci' ? key.toLowerCase() : key;
        for (const c of (step.cases || [])) {
          const w = step.matchMode === 'ci' ? String(c.when).toLowerCase() : String(c.when);
          if (w === cmp) return c.then;
        }
        return step.default != null ? step.default : value;
      }
      case 'expression': {
        const r = __evalExpr(step.expr || '', { value: value, prev: prev });
        return r.ok ? r.value : value;
      }
      case 'map-rows':
        return __mapRows(value, step);
      default:
        return value;
    }
  };
  // ── Safe expression evaluator (mirrors src/lib/transforms/safeExpression.ts) ──
  // This is a line-for-line transcription of the Studio's runtime evaluator so
  // expressions produce byte-identical output across Canvas, Sandpack Preview,
  // and the exported Expo app. Do NOT replace with new Function — that path
  // diverges from the AST-based parser used by canvas and would break parity.
  const __fmt = {
    currency: (n, code, locale) => {
      const num = typeof n === 'number' ? n : Number(String(n == null ? '' : n).replace(/[^0-9.eE+\-]/g, ''));
      if (!isFinite(num)) return n == null ? '' : String(n);
      try { return new Intl.NumberFormat(locale || 'en-US', { style: 'currency', currency: code || 'USD' }).format(num); }
      catch (_e) { return String(num); }
    },
    date: (v, style, locale) => {
      const d = v instanceof Date ? v : new Date(String(v == null ? '' : v));
      if (isNaN(d.getTime())) return v == null ? '' : String(v);
      try { return new Intl.DateTimeFormat(locale || 'en-US', { dateStyle: style || 'short' }).format(d); }
      catch (_e) { return d.toISOString().slice(0, 10); }
    },
    upper: (s) => s == null ? '' : String(s).toUpperCase(),
    lower: (s) => s == null ? '' : String(s).toLowerCase(),
    pad: (s, n, ch) => String(s == null ? '' : s).padStart(Math.max(0, n | 0), ch || '0'),
    round: (n, d) => { const x = Number(n); if (!isFinite(x)) return 0; const m = Math.pow(10, (d|0)); return Math.round(x * m) / m; },
  };
  const __EXPR_ROOTS = { value: true, prev: true, fmt: true };
  const __exprTokenize = (src) => {
    const out = []; let i = 0; const n = src.length;
    while (i < n) {
      const ch = src[i];
      if (ch === ' ' || ch === '\t' || ch === '\n' || ch === '\r') { i++; continue; }
      if (ch === "'" || ch === '"') {
        const q = ch; let s = ''; i++;
        while (i < n && src[i] !== q) {
          if (src[i] === '\\' && i + 1 < n) { const nx = src[++i]; s += nx === 'n' ? '\n' : nx === 't' ? '\t' : nx; i++; }
          else s += src[i++];
        }
        if (i >= n) throw new Error('Unterminated string');
        i++; out.push({ t: 'str', v: s }); continue;
      }
      if (ch === '`') {
        const parts = []; let buf = ''; i++;
        while (i < n && src[i] !== '`') {
          if (src[i] === '\\' && i + 1 < n) { const nx = src[++i]; buf += nx === 'n' ? '\n' : nx === 't' ? '\t' : nx; i++; continue; }
          if (src[i] === '$' && src[i + 1] === '{') {
            if (buf) { parts.push({ kind: 'str', v: buf }); buf = ''; }
            i += 2; let depth = 1; let inner = '';
            while (i < n && depth > 0) {
              if (src[i] === '{') depth++;
              else if (src[i] === '}') { depth--; if (depth === 0) break; }
              inner += src[i++];
            }
            if (depth !== 0) throw new Error('Unterminated template expression');
            i++; parts.push({ kind: 'expr', v: inner }); continue;
          }
          buf += src[i++];
        }
        if (i >= n) throw new Error('Unterminated template literal');
        i++; if (buf) parts.push({ kind: 'str', v: buf });
        out.push({ t: 'tmpl', parts }); continue;
      }
      if ((ch >= '0' && ch <= '9') || (ch === '.' && src[i + 1] >= '0' && src[i + 1] <= '9')) {
        let s = '';
        while (i < n && /[0-9.eE+\-]/.test(src[i])) {
          if ((src[i] === '+' || src[i] === '-') && !/[eE]/.test(src[i - 1])) break;
          s += src[i++];
        }
        const v = Number(s); if (!isFinite(v)) throw new Error('Invalid number');
        out.push({ t: 'num', v }); continue;
      }
      if (/[A-Za-z_$]/.test(ch)) {
        let s = '';
        while (i < n && /[A-Za-z0-9_$]/.test(src[i])) s += src[i++];
        out.push({ t: 'id', v: s }); continue;
      }
      const three = src.slice(i, i + 3);
      if (three === '===' || three === '!==') { out.push({ t: 'punc', v: three }); i += 3; continue; }
      const two = src.slice(i, i + 2);
      if (['==','!=','>=','<=','&&','||'].indexOf(two) >= 0) { out.push({ t: 'punc', v: two }); i += 2; continue; }
      if ('+-*/%(),.[]?:!<>'.indexOf(ch) >= 0) { out.push({ t: 'punc', v: ch }); i++; continue; }
      throw new Error('Unexpected character: ' + ch);
    }
    return out;
  };
  const __exprParse = (toks) => {
    let i = 0;
    const peek = (o) => toks[i + (o || 0)];
    const eat = () => toks[i++];
    const expect = (v) => { const t = eat(); if (!t || t.t !== 'punc' || t.v !== v) throw new Error("Expected '" + v + "'"); };
    const parseExpr = () => parseTernary();
    const parseTernary = () => {
      const test = parseOr();
      const t = peek();
      if (t && t.t === 'punc' && t.v === '?') { eat(); const c = parseTernary(); expect(':'); const a = parseTernary(); return { k:'cond', test, cons:c, alt:a }; }
      return test;
    };
    const parseOr = () => { let l = parseAnd(); while (peek() && peek().t==='punc' && peek().v==='||'){eat();l={k:'bin',op:'||',l,r:parseAnd()};} return l; };
    const parseAnd = () => { let l = parseEq(); while (peek() && peek().t==='punc' && peek().v==='&&'){eat();l={k:'bin',op:'&&',l,r:parseEq()};} return l; };
    const parseEq = () => { let l = parseCmp(); while (peek() && peek().t==='punc' && ['==','!=','===','!=='].indexOf(peek().v)>=0){const op=eat().v;l={k:'bin',op,l,r:parseCmp()};} return l; };
    const parseCmp = () => { let l = parseAdd(); while (peek() && peek().t==='punc' && ['<','>','<=','>='].indexOf(peek().v)>=0){const op=eat().v;l={k:'bin',op,l,r:parseAdd()};} return l; };
    const parseAdd = () => { let l = parseMul(); while (peek() && peek().t==='punc' && ['+','-'].indexOf(peek().v)>=0){const op=eat().v;l={k:'bin',op,l,r:parseMul()};} return l; };
    const parseMul = () => { let l = parseUnary(); while (peek() && peek().t==='punc' && ['*','/','%'].indexOf(peek().v)>=0){const op=eat().v;l={k:'bin',op,l,r:parseUnary()};} return l; };
    const parseUnary = () => { const t = peek(); if (t && t.t==='punc' && (t.v==='!'||t.v==='-'||t.v==='+')){eat(); return {k:'unary',op:t.v,arg:parseUnary()};} return parsePostfix(); };
    const parsePostfix = () => {
      let node = parsePrimary();
      for(;;){ const t = peek(); if (!t) break;
        if (t.t==='punc' && t.v==='.'){eat();const id=eat();if(!id||id.t!=='id')throw new Error('prop');node={k:'mem',obj:node,prop:id.v};}
        else if (t.t==='punc' && t.v==='['){eat();const idx=parseExpr();expect(']');node={k:'idx',obj:node,idx};}
        else if (t.t==='punc' && t.v==='('){eat();const args=[];if(!(peek()&&peek().t==='punc'&&peek().v===')')){args.push(parseExpr());while(peek()&&peek().t==='punc'&&peek().v===','){eat();args.push(parseExpr());}}expect(')');node={k:'call',callee:node,args};}
        else break;
      } return node;
    };
    const parsePrimary = () => {
      const t = eat(); if (!t) throw new Error('EOF');
      if (t.t==='num') return {k:'num',v:t.v};
      if (t.t==='str') return {k:'str',v:t.v};
      if (t.t==='tmpl') return {k:'tmpl',parts:t.parts.map((p)=>p.kind==='str'?{kind:'str',v:p.v}:{kind:'expr',v:__exprParse(__exprTokenize(p.v))})};
      if (t.t==='id'){if(t.v==='true')return{k:'bool',v:true};if(t.v==='false')return{k:'bool',v:false};if(t.v==='null')return{k:'null'};if(t.v==='undefined')return{k:'undef'};return{k:'id',v:t.v};}
      if (t.t==='punc' && t.v==='('){const n=parseExpr();expect(')');return n;}
      throw new Error('Unexpected token');
    };
    const ast = parseExpr();
    if (i !== toks.length) throw new Error('Trailing input');
    return ast;
  };
  const __exprEval = (node, ctx) => {
    switch (node.k) {
      case 'num': case 'str': case 'bool': return node.v;
      case 'null': return null;
      case 'undef': return undefined;
      case 'id': {
        if (!__EXPR_ROOTS[node.v]) throw new Error("Identifier '" + node.v + "' not allowed");
        if (node.v === 'value') return ctx.value;
        if (node.v === 'prev') return ctx.prev;
        if (node.v === 'fmt') return __fmt;
        return undefined;
      }
      case 'tmpl': { let o=''; for(const p of node.parts){ o += p.kind==='str'?p.v:(__exprEval(p.v,ctx)==null?'':String(__exprEval(p.v,ctx))); } return o; }
      case 'mem': { const obj=__exprEval(node.obj,ctx); return obj==null?undefined:obj[node.prop]; }
      case 'idx': { const obj=__exprEval(node.obj,ctx); const key=__exprEval(node.idx,ctx); return obj==null?undefined:obj[key]; }
      case 'call': {
        const callee = __exprEval(node.callee, ctx);
        if (typeof callee !== 'function') throw new Error('Not a function');
        let thisArg = undefined;
        if (node.callee.k === 'mem' || node.callee.k === 'idx') thisArg = __exprEval(node.callee.obj, ctx);
        return callee.apply(thisArg, node.args.map((a) => __exprEval(a, ctx)));
      }
      case 'unary': { const v=__exprEval(node.arg,ctx); return node.op==='!'?!v:node.op==='-'?-v:+v; }
      case 'bin': {
        const op=node.op;
        if (op==='&&') return __exprEval(node.l,ctx) && __exprEval(node.r,ctx);
        if (op==='||') return __exprEval(node.l,ctx) || __exprEval(node.r,ctx);
        const a=__exprEval(node.l,ctx), b=__exprEval(node.r,ctx);
        switch(op){case '+':return a+b;case '-':return a-b;case '*':return a*b;case '/':return a/b;case '%':return a%b;case '==':return a==b;case '!=':return a!=b;case '===':return a===b;case '!==':return a!==b;case '<':return a<b;case '>':return a>b;case '<=':return a<=b;case '>=':return a>=b;}
        throw new Error('op');
      }
      case 'cond': return __exprEval(node.test,ctx) ? __exprEval(node.cons,ctx) : __exprEval(node.alt,ctx);
    }
  };
  const __evalExpr = (src, ctx) => {
    try {
      const s = String(src || '');
      if (!s.trim()) return { ok: true, value: ctx.value };
      const ast = __exprParse(__exprTokenize(s));
      return { ok: true, value: __exprEval(ast, ctx) };
    } catch (e) {
      return { ok: false, error: (e && e.message) || 'Eval error' };
    }
  };
  const __applyTransforms = (value, steps) => {
    if (!steps || steps.length === 0) return value;
    let v = value;
    let prev = value;
    for (const step of steps) {
      try { v = __applyStep(v, step, prev); } catch (_e) {}
      prev = v;
    }
    return v;
  };

  const [listaccountsthedemohasonemainaccountData, setListaccountsthedemohasonemainaccountData] = useState(null);
  const [listaccountsthedemohasonemainaccountDataLoading, setListaccountsthedemohasonemainaccountDataLoading] = useState(false);
  const [listaccountsthedemohasonemainaccountDataError, setListaccountsthedemohasonemainaccountDataError] = useState(null);

  const fetchListaccountsthedemohasonemainaccountData = () => {
    setListaccountsthedemohasonemainaccountDataLoading(true);
    setListaccountsthedemohasonemainaccountDataError(null);
    fetch(interpolateVars('https://wylsvmumemzvltauwqno.supabase.co/rest/v1/accounts') + '?' + new URLSearchParams([[interpolateVars('select'), interpolateVars('*')]]).toString(), { method: 'GET', headers: { 'apikey': interpolateVars('sb_publishable_7a7JrfhaF6ofII_rSFE8mQ_dZWL0adq') } })
      .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
      .then(json => { setListaccountsthedemohasonemainaccountData(json); setListaccountsthedemohasonemainaccountDataLoading(false); })
      .catch(err => {
        console.warn('[Preview] List accounts (the demo has one main account) fetch failed:', err && err.message ? err.message : err);
        setListaccountsthedemohasonemainaccountDataError(err && err.message ? err.message : String(err));
        setListaccountsthedemohasonemainaccountDataLoading(false);
      });
  };

  useEffect(() => { fetchListaccountsthedemohasonemainaccountData(); }, []);

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View testID="9f221306-48ce-4f2f-9ca3-fdf9769dfd30" style={styles.node_9f221306_48ce_4f2f_9ca3_fdf9769dfd30}>
      <View style={styles.node_9f221306_48ce_4f2f_9ca3_fdf9769dfd30Content}>
              <View testID="eb8748fd-c642-4d0f-9ab4-d4b24df67d09" accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} onPress={() => { try { (() => { console.warn('[navigateTo] Target page not found for pageId:', undefined); })(); } catch(e) { console.error('[Action Error]', e); } }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#000000" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m12 19-7-7 7-7"></Path><Path d="M19 12H5"></Path></G></Svg></View>
              <Text testID="1ac7516d-0325-4f3e-b7c0-69de8f4eb6f7" accessible={true} accessibilityRole="header" accessibilityLabel="Profile" style={styles.node_1ac7516d_0325_4f3e_b7c0_69de8f4eb6f7} onPress={() => { try { app.navigate("Home"); } catch(e) { console.error('[Action Error]', e); } }}>Profile</Text>
      </View>
      </View>
      <View testID="b8b1a1da-5bd9-4dd6-8d4d-0ed949964326" style={styles.node_b8b1a1da_5bd9_4dd6_8d4d_0ed949964326}>
              <View testID="3a763209-226c-4f3e-ad60-53b3fde780ec" style={styles.node_3a763209_226c_4f3e_ad60_53b3fde780ec}>
                        <View testID="f5369c3d-86e9-4857-b9fc-450f66301419" style={styles.node_f5369c3d_86e9_4857_b9fc_450f66301419}>
                                    <View testID="db2f8d08-e0cf-47c7-a72e-b0d24e7db415" style={styles.node_db2f8d08_e0cf_47c7_a72e_b0d24e7db415}>
                                                  <Text testID="cc417b16-dbd7-45e7-a779-267af4e53e57" style={styles.node_cc417b16_dbd7_45e7_a779_267af4e53e57}>AC</Text>
                                    </View>
                                    <View testID="35e4ecd4-69c5-48f8-9ae3-0f043b588f1f" style={styles.node_35e4ecd4_69c5_48f8_9ae3_0f043b588f1f}>
                                                  <Text testID="afa33fca-0fb6-4247-bf27-5ccc4345ae40" style={styles.node_afa33fca_0fb6_4247_bf27_5ccc4345ae40}>{(() => { const __v = (listaccountsthedemohasonemainaccountData?.[0]?.owner_name || ''); return (__v == null || typeof __v === 'object') ? '' : String(__v); })()}</Text>
                                                  <Text testID="b8d7c215-6b50-409b-a46a-fa705762624a" style={styles.node_b8d7c215_6b50_409b_a46a_fa705762624a}>{(() => { const __v = (listaccountsthedemohasonemainaccountData?.[0]?.ifsc || ''); return (__v == null || typeof __v === 'object') ? '' : String(__v); })()}</Text>
                                    </View>
                        </View>
                        <View testID="710d7761-9ee6-4e53-b2dd-5487abc11e9a" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
              </View>
              <View testID="e969b75a-e4fd-4d66-a277-946791a63ec7" style={styles.node_e969b75a_e4fd_4d66_a277_946791a63ec7}>
                        <View testID="02a2a623-a1c4-4337-81d3-5de453c05704" style={styles.node_02a2a623_a1c4_4337_81d3_5de453c05704}>
                                    <View testID="23740ae3-84c0-402b-8d73-e0a6f7150ee9" style={styles.node_23740ae3_84c0_402b_8d73_e0a6f7150ee9}>
                                                  <View testID="5a20323d-9f40-49ec-b7fd-278ca6c70a80" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#0D1B4C" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></Path><Circle cx="12" cy="7" r="4"></Circle></G></Svg></View>
                                                  <Text testID="c8a3a6d5-04e4-4598-be5f-eb76dfd51930" style={styles.node_c8a3a6d5_04e4_4598_be5f_eb76dfd51930}>Personal Details</Text>
                                    </View>
                                    <View testID="b4746faf-de37-42f0-8861-af5235a7724a" accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
                        </View>
                        <View testID="53796f62-1ab2-4a44-9639-3c80be24a79d" style={styles.node_53796f62_1ab2_4a44_9639_3c80be24a79d}>
                                    <View testID="a992412c-558e-4906-be22-793702958d52" style={styles.node_a992412c_558e_4906_be22_793702958d52}>
                                                  <View testID="6d07657c-23ad-449d-aedc-ccff8b7581e8" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#0D1B4C" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></Path><Circle cx="12" cy="12" r="3"></Circle></G></Svg></View>
                                                  <Text testID="6901989e-70a4-4ae3-b8ec-1125ac9ea10f" style={styles.node_6901989e_70a4_4ae3_b8ec_1125ac9ea10f}>Account Settings</Text>
                                    </View>
                                    <View testID="687b5592-1e60-4807-b7d5-00835798614d" accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
                        </View>
                        <View testID="e8f62aef-a4de-4549-9759-2408aa61f3ba" style={styles.node_e8f62aef_a4de_4549_9759_2408aa61f3ba}>
                                    <View testID="92613fc1-61fb-41b8-be4e-b195896e0b23" style={styles.node_92613fc1_61fb_41b8_be4e_b195896e0b23}>
                                                  <View testID="dcf22c2e-1707-4d67-a571-08da14f135d9" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#0D1B4C" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M10.268 21a2 2 0 0 0 3.464 0"></Path><Path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></Path></G></Svg></View>
                                                  <Text testID="db9cf163-10b0-4e32-9e89-dadc27debd31" style={styles.node_db9cf163_10b0_4e32_9e89_dadc27debd31}>Notifications</Text>
                                    </View>
                                    <View testID="5cec395a-0dec-4891-a45d-d9b29770dd5a" style={styles.node_5cec395a_0dec_4891_a45d_d9b29770dd5a}>
                                                  <View testID="7a2c4cf6-7d44-4737-bfc8-b97a7a703f20" style={styles.node_7a2c4cf6_7d44_4737_bfc8_b97a7a703f20}>
                                                                  <Text testID="947d74ce-f60c-4d11-96d2-7e4375f0768f" style={styles.node_947d74ce_f60c_4d11_96d2_7e4375f0768f}>3</Text>
                                                  </View>
                                                  <View testID="c20c6dd1-2caf-48ac-9d0c-9b77b54095cd" accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
                                    </View>
                        </View>
                        <View testID="e02d2edc-d57e-4c5e-9a87-adeed17582b8" style={styles.node_e02d2edc_d57e_4c5e_9a87_adeed17582b8}>
                                    <View testID="ae3f61b2-1812-4f92-bd9b-f25fb8857ba5" style={styles.node_ae3f61b2_1812_4f92_bd9b_f25fb8857ba5}>
                                                  <View testID="24b775c4-bb8c-4def-b23e-521affec514d" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#0D1B4C" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></Path><Path d="m9 12 2 2 4-4"></Path></G></Svg></View>
                                                  <Text testID="7196bd30-5096-4e66-9f69-f71dd259fd54" style={styles.node_7196bd30_5096_4e66_9f69_f71dd259fd54}>Security & Privacy</Text>
                                    </View>
                                    <View testID="99dd5f1b-f855-433f-ae50-222fcc3830b3" accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
                        </View>
                        <View testID="abc490ef-b2ff-49cc-8f96-d8cce1b13155" style={styles.node_abc490ef_b2ff_49cc_8f96_d8cce1b13155}>
                                    <View testID="dfc1eb48-7e3b-40ac-8833-0405e346ca3c" style={styles.node_dfc1eb48_7e3b_40ac_8833_0405e346ca3c}>
                                                  <View testID="2a5cb822-2b42-4d5f-bc66-1586b4de7959" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#0D1B4C" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle><Path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></Path><Path d="M12 17h.01"></Path></G></Svg></View>
                                                  <Text testID="51ea90c6-aa3c-4e3e-981c-5c750f1bacc9" style={styles.node_51ea90c6_aa3c_4e3e_981c_5c750f1bacc9}>Help & Support</Text>
                                    </View>
                                    <View testID="6f59bd36-4570-471f-944b-5051db49a43e" accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
                        </View>
                        <View testID="115ec3b7-5008-40f0-bbf2-50770a5433e3" style={styles.node_115ec3b7_5008_40f0_bbf2_50770a5433e3}>
                                    <View testID="4919edfc-b8d8-457e-944c-47e64952fba6" style={styles.node_4919edfc_b8d8_457e_944c_47e64952fba6}>
                                                  <View testID="00b883db-a0c6-478e-80c9-4f651f1c2463" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#0D1B4C" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle><Path d="M12 16v-4"></Path><Path d="M12 8h.01"></Path></G></Svg></View>
                                                  <Text testID="9001cd73-003b-46c7-8e6b-753d663fa99f" style={styles.node_9001cd73_003b_46c7_8e6b_753d663fa99f}>About SkyBank</Text>
                                    </View>
                                    <View testID="667eae46-e601-4f2f-b60d-09f68de2a845" accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
                        </View>
              </View>
              <TouchableOpacity testID="488ff8eb-59ec-46ba-8994-b90d8639675e" accessible={true} accessibilityRole="button" style={styles.node_488ff8eb_59ec_46ba_8994_b90d8639675e} activeOpacity={0.7} onPress={() => { try { app.navigate("Login"); } catch(e) { console.error('[Action Error]', e); } }}>
                        <View testID="49c61af1-62a0-4a4a-a3d1-431b284fd61d" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#D92D20" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></Path><Polyline points="16 17 21 12 16 7"></Polyline><Line x1="21" x2="9" y1="12" y2="12"></Line></G></Svg></View>
                        <Text testID="3e0becf3-58c6-447c-a174-82f536bfbc6c" style={styles.node_3e0becf3_58c6_447c_a174_82f536bfbc6c}>Log Out</Text>
              </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#F5F7FB',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F5F9',
    overflow: 'visible',
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
  },
  containerContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    alignSelf: 'stretch',
  },
  node_9f221306_48ce_4f2f_9ca3_fdf9769dfd30: {
    width: '100%',
  },
  node_9f221306_48ce_4f2f_9ca3_fdf9769dfd30Content: {
    flexGrow: 1,
    alignSelf: 'stretch',
    paddingTop: 45,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  node_eb8748fd_c642_4d0f_9ab4_d4b24df67d09: {
    color: '#000000',
  },
  node_1ac7516d_0325_4f3e_b7c0_69de8f4eb6f7: {
    color: '#0D1B4C',
    fontWeight: '800',
    fontSize: 28,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_b8b1a1da_5bd9_4dd6_8d4d_0ed949964326: {
    gap: 20,
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_3a763209_226c_4f3e_ad60_53b3fde780ec: {
    padding: 20,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    alignItems: 'stretch',
    borderRadius: 16,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_f5369c3d_86e9_4857_b9fc_450f66301419: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_db2f8d08_e0cf_47c7_a72e_b0d24e7db415: {
    width: 64,
    height: 64,
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#D6E4FB',
  },
  node_cc417b16_dbd7_45e7_a779_267af4e53e57: {
    color: '#0D1B4C',
    fontSize: 20,
    fontWeight: '700',
  },
  node_35e4ecd4_69c5_48f8_9ae3_0f043b588f1f: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_afa33fca_0fb6_4247_bf27_5ccc4345ae40: {
    color: '#0D1B4C',
    fontSize: 18,
    fontWeight: '700',
  },
  node_b8d7c215_6b50_409b_a46a_fa705762624a: {
    color: '#6B7280',
    fontSize: 14,
  },
  node_710d7761_9ee6_4e53_b2dd_5487abc11e9a: {
    color: '#9CA3AF',
  },
  node_e969b75a_e4fd_4d66_a277_946791a63ec7: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
  },
  node_02a2a623_a1c4_4337_81d3_5de453c05704: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_23740ae3_84c0_402b_8d73_e0a6f7150ee9: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_5a20323d_9f40_49ec_b7fd_278ca6c70a80: {
    color: '#0D1B4C',
  },
  node_c8a3a6d5_04e4_4598_be5f_eb76dfd51930: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_b4746faf_de37_42f0_8861_af5235a7724a: {
    color: '#9CA3AF',
  },
  node_53796f62_1ab2_4a44_9639_3c80be24a79d: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_a992412c_558e_4906_be22_793702958d52: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_6d07657c_23ad_449d_aedc_ccff8b7581e8: {
    color: '#0D1B4C',
  },
  node_6901989e_70a4_4ae3_b8ec_1125ac9ea10f: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_687b5592_1e60_4807_b7d5_00835798614d: {
    color: '#9CA3AF',
  },
  node_e8f62aef_a4de_4549_9759_2408aa61f3ba: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_92613fc1_61fb_41b8_be4e_b195896e0b23: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_dcf22c2e_1707_4d67_a571_08da14f135d9: {
    color: '#0D1B4C',
  },
  node_db9cf163_10b0_4e32_9e89_dadc27debd31: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_5cec395a_0dec_4891_a45d_d9b29770dd5a: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 6,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_7a2c4cf6_7d44_4737_bfc8_b97a7a703f20: {
    width: 26,
    height: 26,
    alignItems: 'center',
    borderRadius: 13,
    justifyContent: 'center',
    backgroundColor: '#D92D20',
  },
  node_947d74ce_f60c_4d11_96d2_7e4375f0768f: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  node_c20c6dd1_2caf_48ac_9d0c_9b77b54095cd: {
    color: '#9CA3AF',
  },
  node_e02d2edc_d57e_4c5e_9a87_adeed17582b8: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_ae3f61b2_1812_4f92_bd9b_f25fb8857ba5: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_24b775c4_bb8c_4def_b23e_521affec514d: {
    color: '#0D1B4C',
  },
  node_7196bd30_5096_4e66_9f69_f71dd259fd54: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_99dd5f1b_f855_433f_ae50_222fcc3830b3: {
    color: '#9CA3AF',
  },
  node_abc490ef_b2ff_49cc_8f96_d8cce1b13155: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_dfc1eb48_7e3b_40ac_8833_0405e346ca3c: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_2a5cb822_2b42_4d5f_bc66_1586b4de7959: {
    color: '#0D1B4C',
  },
  node_51ea90c6_aa3c_4e3e_981c_5c750f1bacc9: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_6f59bd36_4570_471f_944b_5051db49a43e: {
    color: '#9CA3AF',
  },
  node_115ec3b7_5008_40f0_bbf2_50770a5433e3: {
    alignItems: 'stretch',
    paddingTop: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_4919edfc_b8d8_457e_944c_47e64952fba6: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_00b883db_a0c6_478e_80c9_4f651f1c2463: {
    color: '#0D1B4C',
  },
  node_9001cd73_003b_46c7_8e6b_753d663fa99f: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_667eae46_e601_4f2f_b60d_09f68de2a845: {
    color: '#9CA3AF',
  },
  node_488ff8eb_59ec_46ba_8994_b90d8639675e: {
    padding: 20,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    alignItems: 'stretch',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  node_49c61af1_62a0_4a4a_a3d1_431b284fd61d: {
    color: '#D92D20',
  },
  node_3e0becf3_58c6_447c_a174_82f536bfbc6c: {
    color: '#D92D20',
    fontSize: 17,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
});


export default function ProfileGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Profile {...props} /></Can>;
}
