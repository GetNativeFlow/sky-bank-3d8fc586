import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../../lib/app';

function Accounts() {
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
      <View style={styles.node_b162845d_9870_419b_a69b_56891e84177c}>
              <Text style={styles.node_8dfa70bf_7050_43df_bfd0_5f3aa33027d0}>Accounts</Text>
              <View style={styles.node_f460cc10_d8d8_454c_bfc5_3bb6ad8e431f}>
                        <View style={styles.node_dc36b80f_7c9c_4718_a8b2_0ebad9837737}>
                                    <View style={styles.node_99636dc5_4558_4a30_b364_0fe1f0581fcf}>
                                                  <View style={styles.node_15d204bc_1b8c_486f_b22a_2d3987234801}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2554E8" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="20" height="14" x="2" y="5" rx="2"></Rect><Line x1="2" x2="22" y1="10" y2="10"></Line></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_44834177_c21a_4512_9031_6368fe86127f}>
                                                                  <Text style={styles.node_4c108132_6f84_42a7_8a39_ef4d6139329f}>{(() => { const __v = (listaccountsthedemohasonemainaccountData?.[0]?.account_type || ''); return (__v == null || typeof __v === 'object') ? '' : String(__v); })()}</Text>
                                                                  <Text style={styles.node_377e2383_67c0_463c_94f4_b2ae5ee30db7}>XXXX 1001</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_6fcfdd89_0cf9_4796_8f64_4d6376dc0cc9}>
                                                  <Text style={styles.node_b021fbe0_cc1e_479b_9764_ef4786296d4e}>{(() => { const __v = ((__applyTransforms(listaccountsthedemohasonemainaccountData?.[0]?.balance, [{"type":"format-currency","locale":"en-US","currency":"INR","signDisplay":"auto"}])) || ''); return (__v == null || typeof __v === 'object') ? '' : String(__v); })()}</Text>
                                                  <Text style={styles.node_bc9863ff_d459_45fa_add2_6a9f117bbf49}>Available balance</Text>
                                    </View>
                        </View>
                        <View style={styles.node_e6b6854b_b41d_4bf1_a1ba_125d79a28a36}>
                                    <View style={styles.node_7dbd99b4_5e55_438a_a641_e03690ab235d}>
                                                  <View style={styles.node_21209365_bac9_433b_9082_f6e8e509f175}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2554E8" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></Path><Rect width="20" height="14" x="2" y="6" rx="2"></Rect></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_c2398949_0fc3_44df_b19e_e1acb8e27cd9}>
                                                                  <Text style={styles.node_cf6ae041_85ee_4f80_874b_9e00a90be859}>Current Account</Text>
                                                                  <Text style={styles.node_20919358_dc71_42fa_908a_ec4a09a1e89d}>XXXX 5678</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_75d33d9c_1cb6_484d_8b02_ba89f47a0e20}>
                                                  <Text style={styles.node_dc42ff94_6313_428f_b0bb_432b5846d52c}>₹ 3,02,450.00</Text>
                                                  <Text style={styles.node_4526d2d5_2b60_4f32_8bc9_92b0d587a181}>Available balance</Text>
                                    </View>
                        </View>
                        <View style={styles.node_30f8ed68_89a3_4d82_b1ec_bf070e0ef8f8}>
                                    <View style={styles.node_f64e14fa_0c4a_4938_9c6c_66c002021416}>
                                                  <View style={styles.node_343f1774_1451_414d_9974_089026bd4a43}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#B9690A" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle><Polyline points="12 6 12 12 16 14"></Polyline></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_3d2cbc00_5103_4f2d_9695_f7308f0c1aa2}>
                                                                  <Text style={styles.node_8698799f_8c79_4f9e_8e9b_2c4a5759b8d3}>Fixed Deposit</Text>
                                                                  <Text style={styles.node_e21b514b_c678_45ff_b2d4_b73083e26b13}>FDXXXX 9012</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_19f72dd7_fe1d_4f37_8e90_5d7de0b86745}>
                                                  <Text style={styles.node_b17165e6_88f8_454e_94c1_30617dbaaa60}>₹ 5,00,000.00</Text>
                                                  <Text style={styles.node_fc2338f0_79f5_4bc2_a087_59738bc207ad}>Matures in 120 days</Text>
                                    </View>
                        </View>
              </View>
              <View style={styles.node_83b1ebd7_39be_469e_bbce_1fbe8ebfd17e}>
                        <Text style={styles.node_79d3afcf_9fde_4a11_95b3_0b00851d81cc}>Recent Transactions</Text>
                        <Text style={styles.node_25e50913_5a1e_4a66_bbaa_4c7a2d045552} onPress={() => { try { app.navigate("Transactions"); } catch(e) { console.error('[Action Error]', e); } }}>View all</Text>
              </View>
              <View style={styles.node_358fcf03_a5a0_41b4_9d8e_323cac25fd98}>
                        <View style={styles.node_16518aff_3347_49b5_bfff_7cbd6e749268}>
                                    <View style={styles.node_49a927e4_c935_4c9c_bc29_28ea59efe350}>
                                                  <View style={styles.node_efa0e42e_85d7_460c_9846_3fe64f1fa3ce}>
                                                                  <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#B9690A" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></Path><Path d="M3 6h18"></Path><Path d="M16 10a4 4 0 0 1-8 0"></Path></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_ee380dc2_7bf2_4204_a3c2_44f4f4cc3452}>
                                                                  <Text style={styles.node_df335606_fdc6_4c65_b985_32a8f990f878}>Amazon</Text>
                                                                  <Text style={styles.node_94a6c23a_beea_4d54_b96a_0427cfb10743}>Shopping</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_94f84188_8175_4fe3_9584_b9e2ea7e81c8}>
                                                  <Text style={styles.node_b82f2910_ad80_4e26_bd64_fa7e763b3bf4}>- ₹ 2,499.00</Text>
                                                  <Text style={styles.node_86702664_2188_44f6_8731_b130f0d1d748}>Today</Text>
                                    </View>
                        </View>
                        <View style={[styles.node_44537f9e_54b3_4d58_b88c_f4943c890198, { height: 1, backgroundColor: '#EEF0F4', alignSelf: 'stretch' }]} />
                        <View style={styles.node_6662a08a_0f91_4cf4_8a51_67162ed5e680}>
                                    <View style={styles.node_3a9c005e_fe1c_4bb8_a3bd_b14cbd91f97b}>
                                                  <View style={styles.node_6bbe1ead_6623_4226_badf_859adde98ac7}>
                                                                  <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#1E8A4C" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></Path><Rect width="20" height="14" x="2" y="6" rx="2"></Rect></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_f69bb7af_0b2f_4d0d_bd0a_2c75a0655ae1}>
                                                                  <Text style={styles.node_5697f71b_864b_4973_81ea_e86900797892}>Salary Credit</Text>
                                                                  <Text style={styles.node_61ac234a_7979_434d_8b56_e39b3252d21c}>Employer</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_38b3863f_20c8_46bc_8ae6_cd6c916c76ff}>
                                                  <Text style={styles.node_388c10cc_44e3_4fed_9e2a_73c4b9636885}>+ ₹ 1,20,000.00</Text>
                                                  <Text style={styles.node_826df505_b869_401a_bb76_54467f4f8c54}>Yesterday</Text>
                                    </View>
                        </View>
                        <View style={[styles.node_379068ab_f12c_4781_b857_d720aa9d5a3b, { height: 1, backgroundColor: '#EEF0F4', alignSelf: 'stretch' }]} />
                        <View style={styles.node_3596d520_778f_4083_8298_43cd7e821371}>
                                    <View style={styles.node_e8372cf4_d10c_4131_bf3d_d689ab4e457a}>
                                                  <View style={styles.node_8756ef9d_be3c_4f0c_8f89_54f581321268}>
                                                                  <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#C23636" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></Path><Path d="M7 2v20"></Path><Path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></Path></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_a4e5d405_cb86_4fbf_9f56_8d7a101370df}>
                                                                  <Text style={styles.node_681b0ee1_d2c5_4d57_83a3_96495bf06500}>Zomato</Text>
                                                                  <Text style={styles.node_9233d9e0_b0c8_4891_8568_4fb148b2ba40}>Food & Dining</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_a5045ba2_0396_4b94_98dd_2b542612eebe}>
                                                  <Text style={styles.node_d8b0e4ba_3a09_45cb_9cbe_0d4f3e18dd51}>- ₹ 749.00</Text>
                                                  <Text style={styles.node_b700ab85_82f4_4a43_9c25_07ad216a8aa4}>12 Sep 2025</Text>
                                    </View>
                        </View>
              </View>
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
    backgroundColor: '#F3F5F9',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
  node_b162845d_9870_419b_a69b_56891e84177c: {
    gap: 0,
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
  node_8dfa70bf_7050_43df_bfd0_5f3aa33027d0: {
    color: '#0F1E4D',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 20,
  },
  node_f460cc10_d8d8_454c_bfc5_3bb6ad8e431f: {
    gap: 14,
    marginBottom: 28,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_dc36b80f_7c9c_4718_a8b2_0ebad9837737: {
    padding: 16,
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
  node_99636dc5_4558_4a30_b364_0fe1f0581fcf: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_15d204bc_1b8c_486f_b22a_2d3987234801: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#DCE7FF',
  },
  node_ad09b9a7_d7ee_4119_9e61_c2dc7b8e74f7: {
    color: '#2554E8',
  },
  node_44834177_c21a_4512_9031_6368fe86127f: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_4c108132_6f84_42a7_8a39_ef4d6139329f: {
    color: '#0F1E4D',
    fontSize: 17,
    fontWeight: '700',
  },
  node_377e2383_67c0_463c_94f4_b2ae5ee30db7: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_6fcfdd89_0cf9_4796_8f64_4d6376dc0cc9: {
    gap: 2,
    minWidth: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_b021fbe0_cc1e_479b_9764_ef4786296d4e: {
    color: '#0F1E4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '800',
  },
  node_bc9863ff_d459_45fa_add2_6a9f117bbf49: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_e6b6854b_b41d_4bf1_a1ba_125d79a28a36: {
    padding: 16,
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
  node_7dbd99b4_5e55_438a_a641_e03690ab235d: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_21209365_bac9_433b_9082_f6e8e509f175: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#DCE7FF',
  },
  node_3b100685_d30b_4718_a67f_a01d982a00a0: {
    color: '#2554E8',
  },
  node_c2398949_0fc3_44df_b19e_e1acb8e27cd9: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_cf6ae041_85ee_4f80_874b_9e00a90be859: {
    color: '#0F1E4D',
    fontSize: 17,
    fontWeight: '700',
  },
  node_20919358_dc71_42fa_908a_ec4a09a1e89d: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_75d33d9c_1cb6_484d_8b02_ba89f47a0e20: {
    gap: 2,
    minWidth: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_dc42ff94_6313_428f_b0bb_432b5846d52c: {
    color: '#0F1E4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '800',
  },
  node_4526d2d5_2b60_4f32_8bc9_92b0d587a181: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_30f8ed68_89a3_4d82_b1ec_bf070e0ef8f8: {
    padding: 16,
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
  node_f64e14fa_0c4a_4938_9c6c_66c002021416: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_343f1774_1451_414d_9974_089026bd4a43: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#FBE6C8',
  },
  node_1cda5acf_49e2_43a8_bd9e_58884393458b: {
    color: '#B9690A',
  },
  node_3d2cbc00_5103_4f2d_9695_f7308f0c1aa2: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_8698799f_8c79_4f9e_8e9b_2c4a5759b8d3: {
    color: '#0F1E4D',
    fontSize: 17,
    fontWeight: '700',
  },
  node_e21b514b_c678_45ff_b2d4_b73083e26b13: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_19f72dd7_fe1d_4f37_8e90_5d7de0b86745: {
    gap: 2,
    minWidth: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_b17165e6_88f8_454e_94c1_30617dbaaa60: {
    color: '#0F1E4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '800',
  },
  node_fc2338f0_79f5_4bc2_a087_59738bc207ad: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_83b1ebd7_39be_469e_bbce_1fbe8ebfd17e: {
    alignItems: 'stretch',
    marginBottom: 14,
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_79d3afcf_9fde_4a11_95b3_0b00851d81cc: {
    color: '#0F1E4D',
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_25e50913_5a1e_4a66_bbaa_4c7a2d045552: {
    color: '#2554E8',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_358fcf03_a5a0_41b4_9d8e_323cac25fd98: {
    gap: 0,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    paddingTop: 6,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_16518aff_3347_49b5_bfff_7cbd6e749268: {
    alignItems: 'stretch',
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_49a927e4_c935_4c9c_bc29_28ea59efe350: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_efa0e42e_85d7_460c_9846_3fe64f1fa3ce: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#FBE6C8',
  },
  node_68b0ff8a_4045_41a0_8e8e_54fc992b7f5e: {
    color: '#B9690A',
  },
  node_ee380dc2_7bf2_4204_a3c2_44f4f4cc3452: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_df335606_fdc6_4c65_b985_32a8f990f878: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  node_94a6c23a_beea_4d54_b96a_0427cfb10743: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_94f84188_8175_4fe3_9584_b9e2ea7e81c8: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_b82f2910_ad80_4e26_bd64_fa7e763b3bf4: {
    color: '#0F1E4D',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_86702664_2188_44f6_8731_b130f0d1d748: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_44537f9e_54b3_4d58_b88c_f4943c890198: {
    height: 1,
    backgroundColor: '#EEF0F4',
  },
  node_6662a08a_0f91_4cf4_8a51_67162ed5e680: {
    alignItems: 'stretch',
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_3a9c005e_fe1c_4bb8_a3bd_b14cbd91f97b: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_6bbe1ead_6623_4226_badf_859adde98ac7: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#D3F0DE',
  },
  node_e8be2322_f3d4_4a72_a805_afee76c3729c: {
    color: '#1E8A4C',
  },
  node_f69bb7af_0b2f_4d0d_bd0a_2c75a0655ae1: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_5697f71b_864b_4973_81ea_e86900797892: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  node_61ac234a_7979_434d_8b56_e39b3252d21c: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_38b3863f_20c8_46bc_8ae6_cd6c916c76ff: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_388c10cc_44e3_4fed_9e2a_73c4b9636885: {
    color: '#1E8A4C',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_826df505_b869_401a_bb76_54467f4f8c54: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_379068ab_f12c_4781_b857_d720aa9d5a3b: {
    height: 1,
    backgroundColor: '#EEF0F4',
  },
  node_3596d520_778f_4083_8298_43cd7e821371: {
    alignItems: 'stretch',
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_e8372cf4_d10c_4131_bf3d_d689ab4e457a: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_8756ef9d_be3c_4f0c_8f89_54f581321268: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#FBDADA',
  },
  node_7cba9b74_cb9f_4dcb_acc7_6a6d086968bf: {
    color: '#C23636',
  },
  node_a4e5d405_cb86_4fbf_9f56_8d7a101370df: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_681b0ee1_d2c5_4d57_83a3_96495bf06500: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  node_9233d9e0_b0c8_4891_8568_4fb148b2ba40: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_a5045ba2_0396_4b94_98dd_2b542612eebe: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_d8b0e4ba_3a09_45cb_9cbe_0d4f3e18dd51: {
    color: '#0F1E4D',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_b700ab85_82f4_4a43_9c25_07ad216a8aa4: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
});


export default function AccountsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Accounts {...props} /></Can>;
}
