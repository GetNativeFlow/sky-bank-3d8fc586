"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// packages/dynamic-ui-native/src/index.ts
var src_exports = {};
__export(src_exports, {
  DynamicUIView: () => DynamicUIView,
  SVG_NAMES_USED: () => SVG_NAMES_USED,
  SseParser: () => SseParser,
  UIThemeProvider: () => UIThemeProvider,
  ViewSettingsContext: () => ViewSettingsContext,
  catalog: () => catalog,
  darkTheme: () => darkTheme,
  effectiveConfirm: () => effectiveConfirm,
  lightTheme: () => lightTheme,
  registry: () => registry,
  toLook: () => toLook,
  useTheme: () => useTheme,
  xhrTransport: () => xhrTransport
});
module.exports = __toCommonJS(src_exports);

// packages/dynamic-ui-native/src/DynamicUIView.tsx
var React8 = __toESM(require("react"));
var import_react_native12 = require("react-native");
var import_core = require("@json-render/core");
var import_react_native13 = require("@json-render/react-native");

// packages/dynamic-ui-catalog/src/components.ts
var TONES = ["default", "muted", "primary", "success", "warning", "error"];
var STATUS_TONES = ["default", "primary", "success", "warning", "error"];
var BAR_TONES = ["primary", "success", "warning", "error"];
var SPACE = ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"];
var TEXT_SIZES = ["2xs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl"];
var layoutProps = {
  gap: { kind: "enum", values: SPACE, description: "Space between children." },
  padding: { kind: "enum", values: SPACE, description: "Inner padding." },
  align: { kind: "enum", values: ["flex-start", "center", "flex-end", "stretch"], description: "Cross-axis alignment." },
  justify: {
    kind: "enum",
    values: ["flex-start", "center", "flex-end", "space-between"],
    description: "Main-axis distribution."
  },
  wrap: { kind: "boolean", description: "Let children wrap onto the next line." }
};
var textProps = {
  text: { kind: "string", bindable: true, description: "The text to show." },
  size: { kind: "enum", values: TEXT_SIZES, description: "Font size token." },
  bold: { kind: "boolean", description: "Bold weight." },
  italic: { kind: "boolean", description: "Italic." },
  tone: { kind: "enum", values: TONES, description: "Theme color name." },
  align: { kind: "enum", values: ["left", "center", "right"], description: "Text alignment." },
  numberOfLines: { kind: "number", description: "Truncate after this many lines." }
};
var chartProps = {
  format: { kind: "enum", values: ["money", "number", "percent"], description: "How values are written." },
  tone: { kind: "enum", values: BAR_TONES, description: "Color." }
};
var COMPONENTS = {
  Column: {
    kind: "container",
    description: 'Vertical stack. The root of an answer is usually a Column with gap "lg".',
    props: layoutProps,
    inRow: true
  },
  Row: {
    kind: "container",
    description: "Horizontal stack. Set wrap true when it holds more than two Cards.",
    props: layoutProps,
    inRow: true
  },
  Box: {
    kind: "container",
    description: "Generic container when you need to set direction explicitly.",
    props: {
      ...layoutProps,
      direction: { kind: "enum", values: ["row", "column"], description: "Stack direction." },
      background: { kind: "enum", values: ["surface", "background", "none"], description: "Fill." }
    },
    inRow: true
  },
  Card: {
    kind: "container",
    description: "Titled surface that spaces its own children. Put related figures in one Card.",
    props: {
      title: { kind: "string", bindable: true, description: "Card title." },
      subtitle: { kind: "string", bindable: true, description: "Smaller line under the title." },
      gap: { kind: "enum", values: SPACE, description: "Space between children." },
      padding: { kind: "enum", values: SPACE, description: "Inner padding." }
    },
    inRow: true
  },
  Divider: { kind: "leaf", description: "Thin horizontal rule.", props: {}, inRow: true },
  Spacer: {
    kind: "leaf",
    description: "Fixed vertical gap.",
    props: { size: { kind: "enum", values: SPACE, description: "Height." } },
    inRow: true
  },
  Text: { kind: "leaf", description: "Body text.", props: textProps, inRow: true },
  Heading: {
    kind: "leaf",
    description: "Headline text. Use for amounts and section titles.",
    props: { ...textProps, sub: { kind: "boolean", description: "Render at 75% size, as a subheading." } },
    inRow: true
  },
  Badge: {
    kind: "leaf",
    description: "Small status pill. success for paid or active, error for blocked or overdue.",
    props: {
      text: { kind: "string", bindable: true, description: "Label." },
      tone: { kind: "enum", values: STATUS_TONES, description: "Status color." }
    },
    inRow: true
  },
  ListRow: {
    kind: "leaf",
    description: "One row of a list: title, subtitle, and a trailing value. Put rows inside a Card.",
    props: {
      title: { kind: "string", bindable: true, description: "Main label." },
      subtitle: { kind: "string", bindable: true, description: 'Secondary line, e.g. "date \xB7 category".' },
      trailing: { kind: "string", bindable: true, description: "Right-aligned value, e.g. an amount." },
      trailingTone: { kind: "enum", values: TONES, description: "Color for the trailing value." }
    },
    inRow: true
  },
  ProgressBar: {
    kind: "leaf",
    description: "Share of a total, as a bar.",
    props: {
      progress: { kind: "number", bindable: true, description: "Between 0 and 1." },
      tone: { kind: "enum", values: BAR_TONES, description: "Bar color." }
    },
    inRow: true
  },
  Button: {
    kind: "button",
    description: "Tappable action: ask a follow-up question, start an operation (the user confirms first), open an app page, or open a link from the data.",
    props: {
      label: { kind: "string", bindable: true, description: "Button text." },
      variant: { kind: "enum", values: ["solid", "outline"], description: "Style." },
      size: { kind: "enum", values: ["sm", "md"], description: "Size." }
    },
    inRow: true
  },
  Repeat: {
    kind: "repeat",
    description: `Draws its children once per row of a source. Inside, a prop can be {"$row": {"field": \u2026}} to show that row's value. Put it inside a Card, with a ListRow as the child.`,
    props: {
      limit: { kind: "number", description: "At most this many rows. Default 20." },
      empty: { kind: "string", description: "Shown when there are no rows." }
    },
    inRow: false
  },
  BarChart: {
    kind: "chart",
    description: "Bars, one per row. For amounts by category or by period.",
    props: chartProps,
    inRow: false
  },
  LineChart: {
    kind: "chart",
    description: "A line over rows, for a trend over time. sparkline true draws a small line with no axes.",
    props: { ...chartProps, sparkline: { kind: "boolean", description: "Small, no axes or labels." } },
    inRow: false
  },
  Form: {
    kind: "form",
    description: "A form for one operation, or for a question. The app draws the fields; you pre-fill values and choose which fields to show. Submitting an operation always goes to a confirm step the user controls.",
    props: {
      title: { kind: "string", description: "Heading above the fields." },
      submitLabel: { kind: "string", description: "Submit button text." }
    },
    inRow: false
  }
};
var COMPONENT_NAMES = Object.keys(COMPONENTS);
var STYLABLE = ["Column", "Row", "Box", "Card", "Divider", "Text", "Heading", "Badge", "Button", "Form"];

// packages/dynamic-ui-catalog/src/values.ts
var REDUCES = ["sum", "count", "avg", "min", "max", "first"];
var NUMERIC_REDUCES = ["sum", "avg", "min", "max", "first"];
var FORMATS = ["money", "date", "number", "percent"];
function toNumber(value) {
  const n = typeof value === "number" ? value : typeof value === "string" && value.trim() !== "" ? Number(value) : NaN;
  return Number.isFinite(n) ? n : void 0;
}
function formatValue(value, format, options = {}) {
  if (value === void 0 || value === null) return "";
  if (!format) return typeof value === "number" ? formatNumber(value, options.locale, 0, 2) : String(value);
  if (format === "date") {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    try {
      return date.toLocaleDateString(options.locale, { day: "numeric", month: "short", year: "numeric" });
    } catch {
      return date.toISOString().slice(0, 10);
    }
  }
  const n = toNumber(value);
  if (n === void 0) return String(value);
  if (format === "percent") return `${formatNumber(n * 100, options.locale, 0, 1)}%`;
  if (format === "number") return formatNumber(n, options.locale, 0, 2);
  if (options.currency) {
    try {
      return new Intl.NumberFormat(options.locale, { style: "currency", currency: options.currency }).format(n);
    } catch {
    }
  }
  return formatNumber(n, options.locale, 2, 2);
}
function formatNumber(n, locale, min, max) {
  try {
    return new Intl.NumberFormat(locale, { minimumFractionDigits: min, maximumFractionDigits: max }).format(n);
  } catch {
    return n.toFixed(max);
  }
}

// packages/dynamic-ui-catalog/src/data.ts
var PIN_WORDS = /* @__PURE__ */ new Set(["pin", "mpin", "tpin", "upipin", "otp", "cvv", "cvc"]);
var PASSWORD_WORDS = /* @__PURE__ */ new Set(["password", "passwd", "pwd", "passcode"]);
function sensitiveKind(input) {
  if (input.sensitive === false || input.type === "boolean") return void 0;
  const words = input.name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase().split(/[^a-z0-9]+/);
  const pinLike = words.some((w) => PIN_WORDS.has(w)) || input.type === "number" || input.type === "integer";
  const guessed = input.format === "password" || words.some((w) => PIN_WORDS.has(w) || PASSWORD_WORDS.has(w));
  if (!input.sensitive && !guessed) return void 0;
  return pinLike ? "pin" : "password";
}
function isSensitive(input) {
  return sensitiveKind(input) !== void 0;
}

// packages/dynamic-ui-catalog/src/prompt.ts
var VALUES = [
  `A prop marked "or value" may be a literal, or a value from a source: {"$data": {"source": "<name>", "field": "<field>"}}. Text may add "format": ${FORMATS.join("|")}.`,
  `A field from a row list (with []) needs "reduce": ${REDUCES.join("|")}, e.g. {"$data": {"source": "<name>", "field": "[].<number field>", "reduce": "sum"}}. Use ${NUMERIC_REDUCES.filter((r) => r !== "first").join("/")} only on number fields.`,
  'A reduce may add "where": {"<row field>": <value>} to use only the rows that match, e.g. income vs spending: {"$data": {"source": "<name>", "field": "[].amount", "reduce": "sum", "where": {"type": "credit"}}}. Row fields are written without the list part. Use where when a question splits rows by a field.',
  'To show each row, use a Repeat: "props": {"rows": {"source": "<name>", "path": "<row list>"}}. Inside it, a prop can be {"$row": {"field": "<row field>"}}. Row fields are written without the list part: "balance", not "[].balance".',
  "$row works only inside a Repeat. A Repeat cannot hold a Repeat, a chart or a Form.",
  'A row the user picked earlier is {"$pick": {"name": "<pick>", "field": "<row field>"}}. It works wherever a $data value does. Picks are listed with the question under PICKED ROWS.',
  'Charts take "props": {"rows": {"source", "path"}, "x": "<row field>", "y": "<number row field>"}.',
  "Use only the component, prop, source, field, operation and page names listed below, spelled exactly. Anything else is dropped."
];

// packages/dynamic-ui-catalog/src/definition.ts
var import_zod = require("zod");
function zodFor(spec) {
  switch (spec.kind) {
    case "string":
      return import_zod.z.string();
    case "number":
      return import_zod.z.number();
    case "boolean":
      return import_zod.z.boolean();
    case "enum":
      return import_zod.z.enum(spec.values);
  }
}
var formField = import_zod.z.object({
  name: import_zod.z.string(),
  label: import_zod.z.string(),
  type: import_zod.z.enum(["string", "number", "integer", "boolean"]),
  format: import_zod.z.string().optional(),
  enum: import_zod.z.array(import_zod.z.string()).optional(),
  required: import_zod.z.boolean().optional(),
  description: import_zod.z.string().optional()
});
function propsSchema(name) {
  const spec = COMPONENTS[name];
  const shape = {};
  for (const [prop, p] of Object.entries(spec.props)) shape[prop] = zodFor(p).optional();
  switch (spec.kind) {
    case "chart":
      shape.rows = import_zod.z.array(import_zod.z.record(import_zod.z.string(), import_zod.z.unknown())).optional();
      shape.x = import_zod.z.string();
      shape.y = import_zod.z.string();
      break;
    case "repeat":
      shape.rows = import_zod.z.array(import_zod.z.unknown()).optional();
      break;
    case "form":
      shape.operation = import_zod.z.string().optional();
      shape.fields = import_zod.z.array(formField);
      shape.values = import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional();
      break;
  }
  shape.formats = import_zod.z.record(import_zod.z.string(), import_zod.z.enum(FORMATS)).optional();
  if (STYLABLE.includes(name)) shape.style = import_zod.z.string().optional();
  return import_zod.z.object(shape);
}
var SLOTS = {
  container: ["default"],
  repeat: ["default"],
  leaf: [],
  chart: [],
  button: [],
  form: []
};
var catalogDefinition = {
  components: Object.fromEntries(
    COMPONENT_NAMES.map((name) => [
      name,
      { props: propsSchema(name), slots: SLOTS[COMPONENTS[name].kind], description: COMPONENTS[name].description }
    ])
  ),
  actions: {
    ask: {
      params: import_zod.z.object({
        query: import_zod.z.string().optional(),
        template: import_zod.z.string().optional(),
        values: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional(),
        pick: import_zod.z.object({ name: import_zod.z.string(), source: import_zod.z.string(), path: import_zod.z.string(), row: import_zod.z.unknown() }).optional()
      }),
      description: "Ask a follow-up question. A template has {name:type} slots filled from values. With pick, the device keeps the tapped row for later answers."
    },
    runOperation: {
      params: import_zod.z.object({ operation: import_zod.z.string(), values: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional() }),
      description: "Start an operation. The app confirms with the user, then the server runs it."
    },
    openPage: {
      params: import_zod.z.object({ page: import_zod.z.string(), params: import_zod.z.record(import_zod.z.string(), import_zod.z.unknown()).optional() }),
      description: "Open an app page."
    },
    openUrl: {
      params: import_zod.z.object({ link: import_zod.z.object({ url: import_zod.z.string() }) }),
      description: "Open a link from the data, such as a file URL. Only http and https links open."
    }
  }
};

// packages/dynamic-ui-native/src/components/action.tsx
var import_react_native = require("react-native");

// packages/dynamic-ui-native/src/theme.tsx
var React = __toESM(require("react"));
var import_jsx_runtime = require("react/jsx-runtime");
var lightTheme = {
  background: "#F1F4F8",
  surface: "#FFFFFF",
  text: "#14181B",
  muted: "#6B7280",
  border: "#E5E7EB",
  primary: "#4B39EF",
  onPrimary: "#FFFFFF",
  success: "#249689",
  warning: "#F9CF58",
  error: "#FF5963",
  chart: ["#4B39EF", "#12B886", "#F59F00", "#E64980", "#15AABF"],
  radius: 8
};
var darkTheme = {
  background: "#14181B",
  surface: "#1D2428",
  text: "#F1F4F8",
  muted: "#9AA5B1",
  border: "#2D3436",
  primary: "#8B7FFF",
  onPrimary: "#14181B",
  success: "#34D982",
  warning: "#FBD24A",
  error: "#FF6B5B",
  chart: ["#8B7FFF", "#34D982", "#FBD24A", "#F783AC", "#3BC9DB"],
  radius: 8
};
var ThemeContext = React.createContext(lightTheme);
function UIThemeProvider({ theme, children }) {
  const value = React.useMemo(() => ({ ...lightTheme, ...theme }), [theme]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, { value, children });
}
function useTheme() {
  return React.useContext(ThemeContext);
}
function resolveTone(theme, tone) {
  switch (tone) {
    case "primary":
      return theme.primary;
    case "success":
      return theme.success;
    case "warning":
      return theme.warning;
    case "error":
      return theme.error;
    case "muted":
      return theme.muted;
    default:
      return theme.text;
  }
}

// packages/dynamic-ui-native/src/components/action.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Button({ label, variant = "solid", size = "md", disabled, look, onPress }) {
  var _a;
  const theme = useTheme();
  const solid = variant === "solid";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_react_native.Pressable,
    {
      accessibilityRole: "button",
      disabled,
      onPress,
      style: ({ pressed }) => ({
        paddingHorizontal: size === "sm" ? 12 : 16,
        paddingVertical: size === "sm" ? 7 : 11,
        borderRadius: theme.radius,
        borderWidth: 1,
        borderColor: theme.primary,
        backgroundColor: solid ? theme.primary : "transparent",
        opacity: disabled ? 0.5 : pressed ? 0.8 : 1,
        alignSelf: "flex-start",
        ...look == null ? void 0 : look.view
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        import_react_native.Text,
        {
          style: {
            color: (_a = look == null ? void 0 : look.color) != null ? _a : solid ? theme.onPrimary : theme.primary,
            fontSize: size === "sm" ? 14 : 16,
            fontWeight: "600"
          },
          children: label != null ? label : ""
        }
      )
    }
  );
}

// packages/dynamic-ui-native/src/components/field.tsx
var React3 = __toESM(require("react"));
var import_react_native3 = require("react-native");

// packages/dynamic-ui-native/src/components/text.tsx
var React2 = __toESM(require("react"));
var import_react_native2 = require("react-native");

// packages/dynamic-ui-native/src/tokens.ts
var TEXT_SIZE_PX = Object.freeze({
  "2xs": 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60
});
var HEADING_SIZE_PX = Object.freeze({
  xs: 14,
  sm: 16,
  md: 18,
  lg: 20,
  xl: 24,
  "2xl": 28,
  "3xl": 32,
  "4xl": 36,
  "5xl": 40
});
var SPACE_TOKEN_PX = Object.freeze({
  none: 0,
  xs: 4,
  sm: 6,
  md: 8,
  lg: 12,
  xl: 16,
  "2xl": 20,
  "3xl": 24,
  "4xl": 32
});
function spaceToPixels(token, fallback = 0) {
  var _a;
  if (typeof token === "number" && Number.isFinite(token)) return token;
  if (typeof token !== "string") return fallback;
  return (_a = SPACE_TOKEN_PX[token]) != null ? _a : fallback;
}
function fontSizeFor(kind, size, sub) {
  var _a;
  const map = kind === "Heading" ? HEADING_SIZE_PX : TEXT_SIZE_PX;
  const fallback = kind === "Heading" ? 24 : 16;
  const resolved = (_a = typeof size === "string" ? map[size] : void 0) != null ? _a : fallback;
  return sub ? Math.round(resolved * 0.75) : resolved;
}

// packages/dynamic-ui-native/src/components/text.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var InkContext = React2.createContext({});
function Ink({ color, background, children }) {
  const outer = React2.useContext(InkContext);
  if (!color && !background) return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_jsx_runtime3.Fragment, { children });
  const value = { color: color != null ? color : background ? void 0 : outer.color, background: background != null ? background : outer.background };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(InkContext.Provider, { value, children });
}
function channels(color) {
  var _a;
  const hex = (_a = /^#([0-9a-f]{3}|[0-9a-f]{6})([0-9a-f]{2})?$/i.exec(color.trim())) == null ? void 0 : _a[1];
  if (hex) {
    const h = hex.length === 3 ? hex.split("").map((c) => c + c).join("") : hex;
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  const rgb = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i.exec(color);
  return rgb ? [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])] : null;
}
function luminance([r, g, b]) {
  const lin = (v) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
function contrast(a, b) {
  const ca = channels(a);
  const cb = channels(b);
  if (!ca || !cb) return null;
  const la = luminance(ca);
  const lb = luminance(cb);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}
var MIN_CONTRAST = 3;
function textStyle(kind, p, theme, ink) {
  var _a, _b, _c, _d;
  const plain = !p.tone || p.tone === "default";
  let themed = (_b = p.color) != null ? _b : (_a = p.look) == null ? void 0 : _a.color;
  if (themed && ink.color && ink.background && ((_c = contrast(themed, ink.background)) != null ? _c : MIN_CONTRAST) < MIN_CONTRAST) themed = void 0;
  const onSurface = !themed && ink.color && (plain || p.tone === "muted");
  return {
    ...(_d = p.look) == null ? void 0 : _d.view,
    fontSize: fontSizeFor(kind, p.size, p.sub),
    fontWeight: p.bold ? "bold" : "normal",
    fontStyle: p.italic ? "italic" : "normal",
    textAlign: p.align,
    color: onSurface ? ink.color : themed && plain ? themed : resolveTone(theme, p.tone),
    ...onSurface && !plain ? { opacity: 0.7 } : {}
  };
}
function Text(props) {
  var _a;
  const theme = useTheme();
  const ink = React2.useContext(InkContext);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native2.Text, { numberOfLines: props.numberOfLines, style: textStyle("Text", props, theme, ink), children: (_a = props.text) != null ? _a : "" });
}
function Heading(props) {
  var _a;
  const theme = useTheme();
  const ink = React2.useContext(InkContext);
  const resolved = { size: "xl", bold: true, ...props };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_native2.Text, { numberOfLines: props.numberOfLines, style: textStyle("Heading", resolved, theme, ink), children: (_a = props.text) != null ? _a : "" });
}

// packages/dynamic-ui-native/src/components/field.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
function TextField({
  label,
  placeholder,
  value,
  onChangeText,
  onSubmit,
  error,
  helperText,
  multiline,
  disabled,
  autoFocus,
  right,
  left,
  keyboardType,
  secureTextEntry
}) {
  const theme = useTheme();
  const [focused, setFocused] = React3.useState(false);
  const borderColor = error ? theme.error : focused ? theme.primary : theme.border;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native3.View, { style: { gap: 6 }, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { text: label, size: "xs", bold: true, tone: "muted" }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      import_react_native3.View,
      {
        style: {
          flexDirection: "row",
          alignItems: multiline ? "flex-end" : "center",
          gap: 8,
          borderWidth: 1,
          borderColor,
          borderRadius: theme.radius,
          backgroundColor: theme.surface,
          paddingLeft: left ? 10 : 12,
          paddingRight: right ? 6 : 12,
          opacity: disabled ? 0.6 : 1
        },
        children: [
          left,
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react_native3.TextInput,
            {
              value,
              keyboardType,
              secureTextEntry,
              ...secureTextEntry ? { autoCorrect: false, autoCapitalize: "none", autoComplete: "off" } : null,
              onChangeText,
              onSubmitEditing: onSubmit,
              onFocus: () => setFocused(true),
              onBlur: () => setFocused(false),
              placeholder,
              placeholderTextColor: theme.muted,
              editable: !disabled,
              autoFocus,
              multiline,
              blurOnSubmit: !multiline,
              returnKeyType: onSubmit ? "send" : "default",
              style: {
                flex: 1,
                minHeight: multiline ? 44 : 40,
                maxHeight: multiline ? 120 : void 0,
                paddingVertical: 10,
                fontSize: 16,
                color: theme.text,
                // The frame above draws focus; the browser's own ring would be a second border.
                ...import_react_native3.Platform.OS === "web" ? { outlineStyle: "none" } : null
              }
            }
          ),
          right
        ]
      }
    ),
    error ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { text: error, size: "xs", tone: "error" }) : null,
    !error && helperText ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { text: helperText, size: "xs", tone: "muted" }) : null
  ] });
}
function NumberField({ prefix, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    TextField,
    {
      ...props,
      keyboardType: "decimal-pad",
      left: prefix ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { text: prefix, size: "md", tone: "muted" }) : void 0
    }
  );
}
function MoneyField(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(NumberField, { ...props });
}
function DateField(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextField, { placeholder: "YYYY-MM-DD", ...props, keyboardType: "numbers-and-punctuation" });
}
function Select({ label, value, options, onChange, error, disabled, placeholder = "Choose\u2026" }) {
  var _a;
  const theme = useTheme();
  const [open, setOpen] = React3.useState(false);
  const current = options.find((o) => o.value === value);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native3.View, { style: { gap: 6 }, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { text: label, size: "xs", bold: true, tone: "muted" }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_react_native3.Pressable,
      {
        accessibilityRole: "button",
        disabled,
        onPress: () => setOpen((o) => !o),
        style: {
          borderWidth: 1,
          borderColor: error ? theme.error : open ? theme.primary : theme.border,
          borderRadius: theme.radius,
          backgroundColor: theme.surface,
          paddingHorizontal: 12,
          paddingVertical: 11,
          opacity: disabled ? 0.6 : 1
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { text: (_a = current == null ? void 0 : current.label) != null ? _a : placeholder, size: "md", tone: current ? "default" : "muted" })
      }
    ),
    open ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_native3.View, { style: { borderWidth: 1, borderColor: theme.border, borderRadius: theme.radius, backgroundColor: theme.surface }, children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_react_native3.Pressable,
      {
        accessibilityRole: "button",
        onPress: () => {
          onChange(option.value);
          setOpen(false);
        },
        style: { paddingHorizontal: 12, paddingVertical: 10 },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { text: option.label, size: "md", bold: option.value === value })
      },
      option.value
    )) }) : null,
    error ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { text: error, size: "xs", tone: "error" }) : null
  ] });
}
function SwitchField({ label, value, onChange, disabled }) {
  const theme = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_react_native3.View, { style: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 12 }, children: [
    label ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Text, { text: label, size: "sm" }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_react_native3.Switch,
      {
        value,
        onValueChange: onChange,
        disabled,
        trackColor: { true: theme.primary, false: theme.border },
        accessibilityLabel: label
      }
    )
  ] });
}

// packages/dynamic-ui-native/src/components/form.tsx
var React4 = __toESM(require("react"));
var import_react_native4 = require("react-native");

// packages/dynamic-ui-native/src/components/inputs.ts
function widgetFor(input, money) {
  var _a;
  if ((_a = input.enum) == null ? void 0 : _a.length) return "select";
  if (input.type === "boolean") return "switch";
  if (input.format === "date" || input.format === "date-time") return "date";
  if (input.type === "number" || input.type === "integer") return money || input.format === "money" ? "money" : "number";
  return "text";
}
function labelFor(input, override) {
  if (override) return override;
  if (input.label) return input.label;
  const words = input.name.split(".").pop().replace(/[_-]+/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2");
  return words.charAt(0).toUpperCase() + words.slice(1);
}
function toWidgetValue(widget, value) {
  if (widget === "switch") return value === true || value === "true";
  if (value === void 0 || value === null) return "";
  if (widget === "date") {
    const s = String(value);
    return /^\d{4}-\d{2}-\d{2}/.test(s) ? s.slice(0, 10) : s;
  }
  return String(value);
}
var DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
function parseInput(field, raw) {
  var _a, _b, _c;
  const { input, widget } = field;
  if (widget === "switch") return { value: raw === true };
  const text = String(raw).trim();
  if (text === "") return input.required ? { error: `${field.label} is required.` } : {};
  if (widget === "select") {
    const allowed = (_c = (_b = (_a = field.options) == null ? void 0 : _a.map((o) => o.value)) != null ? _b : input.enum) != null ? _c : [];
    return allowed.includes(text) ? { value: text } : { error: `Choose a ${field.label.toLowerCase()}.` };
  }
  if (widget === "number" || widget === "money") {
    const n = Number(text.replace(/,/g, ""));
    if (!Number.isFinite(n)) return { error: `${field.label} must be a number.` };
    if (input.type === "integer" && !Number.isInteger(n)) return { error: `${field.label} must be a whole number.` };
    if (input.min !== void 0 && n < input.min) return { error: `${field.label} must be at least ${input.min}.` };
    if (input.max !== void 0 && n > input.max) return { error: `${field.label} must be at most ${input.max}.` };
    return { value: n };
  }
  if (widget === "date") {
    if (!DATE_RE.test(text) || Number.isNaN((/* @__PURE__ */ new Date(`${text}T00:00:00Z`)).getTime())) {
      return { error: `${field.label} must be a date like 2026-09-30.` };
    }
    return { value: input.format === "date-time" ? `${text}T00:00:00Z` : text };
  }
  if (input.pattern) {
    try {
      if (!new RegExp(input.pattern).test(text)) return { error: `${field.label} is not in the right format.` };
    } catch {
    }
  }
  if (input.min !== void 0 && text.length < input.min) return { error: `${field.label} is too short.` };
  if (input.max !== void 0 && text.length > input.max) return { error: `${field.label} is too long.` };
  return { value: text };
}
function parseAll(fields, raw) {
  var _a;
  const values = {};
  const errors = {};
  for (const field of fields) {
    const result = parseInput(field, (_a = raw[field.input.name]) != null ? _a : field.initial);
    if (result.error) errors[field.input.name] = result.error;
    else if (result.value !== void 0) values[field.input.name] = result.value;
  }
  return { values, errors };
}
function formInputs(fields, values = {}, settings = []) {
  return fields.flatMap((field) => {
    const setting = settings.find((s) => s.name === field.name);
    if (setting == null ? void 0 : setting.hidden) return [];
    const input = { ...field, label: field.label === field.name ? void 0 : field.label };
    const widget = widgetFor(input, setting == null ? void 0 : setting.money);
    return [{ input, label: labelFor(input, setting == null ? void 0 : setting.label), widget, initial: toWidgetValue(widget, values[field.name]) }];
  });
}
var SLOT_RE = /\{(\w+)(?::(text|number|money|date))?\}/g;
function fillAskTemplate(template, values) {
  return template.replace(SLOT_RE, (_, name) => {
    var _a;
    return String((_a = values[name]) != null ? _a : "");
  });
}

// packages/dynamic-ui-native/src/components/form.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function FormView({ title, fields, submitLabel = "Continue", currencySymbol, busy, error, look, onSubmit }) {
  const theme = useTheme();
  const [raw, setRaw] = React4.useState(
    () => Object.fromEntries(fields.map((f) => [f.input.name, f.initial]))
  );
  const [errors, setErrors] = React4.useState({});
  const set = (name) => (next) => {
    setRaw((r) => ({ ...r, [name]: next }));
    setErrors((e) => {
      if (!e[name]) return e;
      const { [name]: _, ...rest } = e;
      return rest;
    });
  };
  const submit = () => {
    const { values, errors: found } = parseAll(fields, raw);
    setErrors(found);
    if (Object.keys(found).length === 0) onSubmit(values);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    import_react_native4.View,
    {
      style: {
        gap: 12,
        padding: 16,
        borderRadius: theme.radius,
        borderWidth: 1,
        borderColor: theme.border,
        backgroundColor: theme.surface,
        ...look == null ? void 0 : look.view
      },
      children: [
        title ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Heading, { text: title, size: "lg", color: look == null ? void 0 : look.color }) : null,
        fields.map((field) => {
          var _a, _b, _c;
          const name = field.input.name;
          const value = (_a = raw[name]) != null ? _a : field.initial;
          const common = { label: field.label, error: errors[name], disabled: busy };
          switch (field.widget) {
            case "switch":
              return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SwitchField, { label: field.label, value: value === true, onChange: set(name), disabled: busy }, name);
            case "select":
              return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
                Select,
                {
                  ...common,
                  value: String(value),
                  options: (_c = field.options) != null ? _c : ((_b = field.input.enum) != null ? _b : []).map((v) => ({ label: v, value: v })),
                  onChange: set(name)
                },
                name
              );
            case "money":
              return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MoneyField, { ...common, prefix: currencySymbol, value: String(value), onChangeText: set(name) }, name);
            case "number":
              return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NumberField, { ...common, value: String(value), onChangeText: set(name) }, name);
            case "date":
              return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DateField, { ...common, value: String(value), onChangeText: set(name) }, name);
            default:
              return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TextField, { ...common, value: String(value), onChangeText: set(name) }, name);
          }
        }),
        error ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { text: error, size: "sm", tone: "error" }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { label: busy ? "Working\u2026" : submitLabel, disabled: busy, onPress: submit })
      ]
    }
  );
}

// packages/dynamic-ui-native/src/components/secure.tsx
var React5 = __toESM(require("react"));
var import_react_native5 = require("react-native");
var import_jsx_runtime6 = require("react/jsx-runtime");
var MAX_PIN = 12;
function pinLength(input) {
  var _a;
  const m = (_a = input.pattern) == null ? void 0 : _a.match(/\{(\d+)\}/);
  return m ? Math.min(Number(m[1]), MAX_PIN) : void 0;
}
var KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "back"];
function PinPad({ label, value, onChange, length, disabled, error }) {
  const theme = useTheme();
  const max = length != null ? length : MAX_PIN;
  const slots = length != null ? length : Math.max(4, value.length);
  const press = (key) => {
    if (key === "back") onChange(value.slice(0, -1));
    else if (key && value.length < max) onChange(value + key);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_react_native5.View, { style: { gap: 12, alignItems: "center" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Text, { text: label, size: "sm", bold: true, tone: "muted" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_react_native5.View,
      {
        accessible: true,
        accessibilityLabel: `${label}: ${value.length}${length ? ` of ${length}` : ""} digits entered`,
        style: { flexDirection: "row", gap: 12, minHeight: 16 },
        children: Array.from({ length: slots }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react_native5.View,
          {
            style: {
              width: 14,
              height: 14,
              borderRadius: 7,
              borderWidth: 1.5,
              borderColor: error ? theme.error : theme.primary,
              backgroundColor: i < value.length ? theme.primary : "transparent"
            }
          },
          i
        ))
      }
    ),
    error ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Text, { text: error, size: "xs", tone: "error" }) : null,
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native5.View, { style: { flexDirection: "row", flexWrap: "wrap", width: 3 * 72 + 2 * 12, gap: 12 }, children: KEYS.map(
      (key, i) => key === "" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native5.View, { style: { width: 72, height: 52 } }, i) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react_native5.Pressable,
        {
          accessibilityRole: "button",
          accessibilityLabel: key === "back" ? "Delete" : key,
          disabled: disabled || (key === "back" ? !value : value.length >= max),
          onPress: () => press(key),
          style: ({ pressed }) => ({
            width: 72,
            height: 52,
            borderRadius: theme.radius,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: pressed ? theme.border : key === "back" ? "transparent" : theme.background,
            opacity: disabled ? 0.5 : 1
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native5.Text, { style: { fontSize: key === "back" ? 18 : 22, fontWeight: "600", color: theme.text }, children: key === "back" ? "\u232B" : key })
        },
        i
      )
    ) })
  ] });
}
function PasswordField({ label, value, onChange, disabled, error }) {
  const theme = useTheme();
  const [shown, setShown] = React5.useState(false);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    TextField,
    {
      label,
      value,
      onChangeText: onChange,
      disabled,
      error,
      secureTextEntry: !shown,
      right: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react_native5.Pressable,
        {
          accessibilityRole: "button",
          accessibilityLabel: shown ? "Hide password" : "Show password",
          onPress: () => setShown(!shown),
          style: { paddingHorizontal: 8, paddingVertical: 6 },
          children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react_native5.Text, { style: { color: theme.primary, fontWeight: "600", fontSize: 14 }, children: shown ? "Hide" : "Show" })
        }
      )
    }
  );
}
function SecureInput(props) {
  const { input, ...rest } = props;
  return sensitiveKind(input) === "pin" ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PinPad, { ...rest, length: pinLength(input) }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(PasswordField, { ...rest });
}

// packages/dynamic-ui-native/src/registry.tsx
var React7 = __toESM(require("react"));
var import_react_native10 = require("react-native");
var import_react_native11 = require("@json-render/react-native");

// packages/dynamic-ui-native/src/components/chart.tsx
var React6 = __toESM(require("react"));
var import_react_native6 = require("react-native");
var import_react_native_svg = require("react-native-svg");
var import_jsx_runtime7 = require("react/jsx-runtime");
var SVG_NAMES_USED = ["Svg", "Rect", "Line", "Path", "Text"];
var MAX_POINTS = 60;
function colorFor(theme, tone) {
  var _a;
  if (tone) return theme[tone];
  return (_a = theme.chart[0]) != null ? _a : theme.primary;
}
function toPoints(rows, x, y) {
  if (!Array.isArray(rows) || !x || !y) return [];
  const points = rows.map((row) => {
    var _a;
    return { label: String((_a = row[x]) != null ? _a : ""), value: Number(row[y]) };
  }).filter((p) => Number.isFinite(p.value));
  if (points.length <= MAX_POINTS) return points;
  const step = points.length / MAX_POINTS;
  return Array.from({ length: MAX_POINTS }, (_, i) => points[Math.floor(i * step)]);
}
function useWidth(initial = 300) {
  const [width, setWidth] = React6.useState(initial);
  const onLayout = React6.useCallback((e) => {
    const next = Math.round(e.nativeEvent.layout.width);
    if (next > 0) setWidth(next);
  }, []);
  return { width, onLayout };
}
function Empty() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Text, { text: "No data yet", size: "sm", tone: "muted" });
}
function labelEvery(count, max) {
  return Math.max(1, Math.ceil(count / max));
}
function BarChart({ rows, x, y, format, tone, height = 180, formatOptions }) {
  const theme = useTheme();
  const { width, onLayout } = useWidth();
  const points = toPoints(rows, x, y);
  if (points.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Empty, {});
  const labelSpace = 20;
  const valueSpace = points.length <= 8 ? 16 : 0;
  const plot = height - labelSpace - valueSpace;
  const top = Math.max(0, ...points.map((p) => p.value));
  const bottom = Math.min(0, ...points.map((p) => p.value));
  const span = top - bottom || 1;
  const baseline = valueSpace + top / span * plot;
  const slot = width / points.length;
  const bar = Math.max(2, slot * 0.6);
  const every = labelEvery(points.length, Math.floor(width / 48));
  const color = colorFor(theme, tone);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native6.View, { onLayout, style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_native_svg.Svg, { width, height, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg.Line, { x1: 0, y1: baseline, x2: width, y2: baseline, stroke: theme.border, strokeWidth: 1 }),
    points.map((p, i) => {
      const h = Math.abs(p.value) / span * plot;
      const bx = i * slot + (slot - bar) / 2;
      const by = p.value >= 0 ? baseline - h : baseline;
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(React6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg.Rect, { x: bx, y: by, width: bar, height: Math.max(1, h), rx: 2, fill: color }),
        valueSpace ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg.Text, { x: bx + bar / 2, y: by - 4, fontSize: 10, fill: theme.muted, textAnchor: "middle", children: formatValue(p.value, format != null ? format : "number", formatOptions) }) : null,
        i % every === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg.Text, { x: bx + bar / 2, y: height - 6, fontSize: 10, fill: theme.muted, textAnchor: "middle", children: p.label }) : null
      ] }, i);
    })
  ] }) });
}
function LineChart({ rows, x, y, format, tone, height, sparkline, formatOptions }) {
  const theme = useTheme();
  const { width, onLayout } = useWidth(sparkline ? 120 : 300);
  const points = toPoints(rows, x, y);
  if (points.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Empty, {});
  const h = height != null ? height : sparkline ? 32 : 180;
  const labelSpace = sparkline ? 0 : 20;
  const pad = sparkline ? 2 : 8;
  const plot = h - labelSpace - pad * 2;
  const top = Math.max(...points.map((p) => p.value));
  const bottom = Math.min(...points.map((p) => p.value));
  const span = top - bottom || 1;
  const step = points.length > 1 ? (width - pad * 2) / (points.length - 1) : 0;
  const px = (i) => pad + i * step;
  const py = (v) => pad + (1 - (v - bottom) / span) * plot;
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"}${px(i).toFixed(1)},${py(p.value).toFixed(1)}`).join(" ");
  const every = labelEvery(points.length, Math.floor(width / 56));
  const color = colorFor(theme, tone);
  const last = points[points.length - 1];
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native6.View, { onLayout, style: { width: sparkline ? void 0 : "100%", flexGrow: sparkline ? 1 : void 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_native_svg.Svg, { width, height: h, children: [
    sparkline ? null : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg.Line, { x1: 0, y1: pad + plot, x2: width, y2: pad + plot, stroke: theme.border, strokeWidth: 1 }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg.Path, { d, stroke: color, strokeWidth: sparkline ? 1.5 : 2, fill: "none", strokeLinejoin: "round", strokeLinecap: "round" }),
    sparkline ? null : points.map(
      (p, i) => i % every === 0 ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg.Text, { x: px(i), y: h - 6, fontSize: 10, fill: theme.muted, textAnchor: "middle", children: p.label }, i) : null
    ),
    sparkline ? null : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_native_svg.Text, { x: width - pad, y: Math.max(10, py(last.value) - 6), fontSize: 10, fill: theme.muted, textAnchor: "end", children: formatValue(last.value, format != null ? format : "number", formatOptions) })
  ] }) });
}

// packages/dynamic-ui-native/src/components/data.tsx
var import_react_native7 = require("react-native");
var import_jsx_runtime8 = require("react/jsx-runtime");
function ListRow({ title, subtitle, trailing, trailingTone = "default" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react_native7.View, { style: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 8 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_react_native7.View, { style: { flex: 1, gap: 2, minWidth: 0 }, children: [
      title ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Text, { text: title, size: "sm", bold: true, numberOfLines: 1 }) : null,
      subtitle ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Text, { text: subtitle, size: "xs", tone: "muted", numberOfLines: 1 }) : null
    ] }),
    trailing ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Text, { text: trailing, size: "sm", bold: true, tone: trailingTone }) : null
  ] });
}
function ProgressBar({ progress = 0, tone = "primary" }) {
  const theme = useTheme();
  const pct = Math.max(0, Math.min(1, Number(progress) || 0));
  const color = tone === "success" ? theme.success : tone === "warning" ? theme.warning : tone === "error" ? theme.error : theme.primary;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_native7.View, { style: { height: 6, borderRadius: 3, backgroundColor: theme.border, overflow: "hidden" }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react_native7.View, { style: { width: `${pct * 100}%`, height: "100%", backgroundColor: color } }) });
}

// packages/dynamic-ui-native/src/components/layout.tsx
var import_react_native8 = require("react-native");
var import_jsx_runtime9 = require("react/jsx-runtime");
function Box({
  direction = "column",
  gap,
  padding,
  contentPadding,
  align,
  justify,
  wrap,
  flex,
  background = "none",
  look,
  children
}) {
  const theme = useTheme();
  const outer = {
    flexDirection: direction,
    gap: spaceToPixels(gap),
    padding: spaceToPixels(padding),
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? "wrap" : "nowrap",
    flex,
    backgroundColor: background === "surface" ? theme.surface : background === "background" ? theme.background : void 0,
    ...look == null ? void 0 : look.view
  };
  const inner = spaceToPixels(contentPadding);
  if (!inner) return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native8.View, { style: outer, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Ink, { color: look == null ? void 0 : look.color, background: outer.backgroundColor, children }) });
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native8.View, { style: outer, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native8.View, { style: { padding: inner, flexDirection: direction, gap: spaceToPixels(gap), flex: 1 }, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Ink, { color: look == null ? void 0 : look.color, background: outer.backgroundColor, children }) }) });
}
function Column(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Box, { ...props, direction: "column" });
}
function Row(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Box, { ...props, direction: "row" });
}
function Divider({ look }) {
  const theme = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native8.View, { style: { height: 1, alignSelf: "stretch", backgroundColor: theme.border, ...look == null ? void 0 : look.view } });
}
function Spacer({ size = "lg" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react_native8.View, { style: { height: spaceToPixels(size, 12) } });
}

// packages/dynamic-ui-native/src/components/surface.tsx
var import_react_native9 = require("react-native");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Card({ title, subtitle, gap = "lg", padding = "xl", look, children }) {
  var _a;
  const theme = useTheme();
  const background = (_a = look == null ? void 0 : look.view.backgroundColor) != null ? _a : theme.surface;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_react_native9.View,
    {
      style: {
        backgroundColor: theme.surface,
        borderRadius: theme.radius,
        borderWidth: 1,
        borderColor: theme.border,
        padding: spaceToPixels(padding, 16),
        gap: spaceToPixels(gap, 12),
        ...look == null ? void 0 : look.view
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(Ink, { color: look == null ? void 0 : look.color, background, children: [
        title ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { text: title, size: "md", bold: true }) : null,
        subtitle ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { text: subtitle, size: "xs", tone: "muted" }) : null,
        children
      ] })
    }
  );
}
function Badge({ text, tone = "default", look }) {
  const theme = useTheme();
  const color = tone === "success" ? theme.success : tone === "warning" ? theme.warning : tone === "error" ? theme.error : tone === "primary" ? theme.primary : theme.muted;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_react_native9.View,
    {
      style: {
        alignSelf: "flex-start",
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 999,
        borderWidth: 1,
        borderColor: color,
        ...look == null ? void 0 : look.view
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Ink, { background: look == null ? void 0 : look.view.backgroundColor, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Text, { text: text != null ? text : "", size: "xs", bold: true, tone: tone !== "default" ? tone : (look == null ? void 0 : look.color) ? "default" : "muted", color: tone === "default" ? look == null ? void 0 : look.color : void 0 }) })
    }
  );
}

// packages/dynamic-ui-native/src/registry.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var catalog = import_react_native11.schema.createCatalog(catalogDefinition);
var ViewSettingsContext = React7.createContext({});
function useText(props, name) {
  var _a;
  const { formatOptions } = React7.useContext(ViewSettingsContext);
  const value = props[name];
  if (value === void 0 || value === null) return void 0;
  const format = (_a = props.formats) == null ? void 0 : _a[name];
  return formatValue(value, format, formatOptions);
}
function useLook(type, props) {
  const { lookFor } = React7.useContext(ViewSettingsContext);
  return lookFor == null ? void 0 : lookFor(type, typeof props.style === "string" ? props.style : void 0);
}
function pick(props, ...names) {
  return Object.fromEntries(names.filter((n) => props[n] !== void 0).map((n) => [n, props[n]]));
}
var LAYOUT = ["gap", "padding", "align", "justify", "wrap"];
function Form({ props, emit, bindings }) {
  var _a, _b;
  const store = (0, import_react_native11.useStateStore)();
  const { currencySymbol, fieldSettings } = React7.useContext(ViewSettingsContext);
  const values = (_a = props.values) != null ? _a : {};
  const operation = typeof props.operation === "string" ? props.operation : void 0;
  const fields = formInputs((_b = props.fields) != null ? _b : [], values, operation ? fieldSettings == null ? void 0 : fieldSettings(operation) : void 0);
  const look = useLook("Form", props);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    FormView,
    {
      look,
      title: props.title,
      submitLabel: props.submitLabel,
      currencySymbol,
      fields,
      onSubmit: (next) => {
        if (bindings == null ? void 0 : bindings.values) store.set(bindings.values, { ...values, ...next });
        emit("submit");
      }
    },
    JSON.stringify(values)
  );
}
function Repeat({ props, children }) {
  const rows = props.rows;
  if (Array.isArray(rows) && rows.length === 0 && typeof props.empty === "string") {
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Text, { text: props.empty, size: "sm", tone: "muted" });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_native10.View, { style: { gap: 4 }, children });
}
var components = {
  Column: ({ props, children }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Column, { ...pick(props, ...LAYOUT), look: useLook("Column", props), children }),
  Row: ({ props, children }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Row, { ...pick(props, ...LAYOUT), look: useLook("Row", props), children }),
  Box: ({ props, children }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Box, { ...pick(props, ...LAYOUT, "direction", "background"), look: useLook("Box", props), children }),
  Card: ({ props, children }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Card, { title: useText(props, "title"), subtitle: useText(props, "subtitle"), ...pick(props, "gap", "padding"), look: useLook("Card", props), children }),
  Divider: ({ props }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Divider, { look: useLook("Divider", props) }),
  Spacer: ({ props }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Spacer, { ...pick(props, "size") }),
  Text: ({ props }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Text, { ...pick(props, "size", "bold", "italic", "tone", "align", "numberOfLines"), text: useText(props, "text"), look: useLook("Text", props) }),
  Heading: ({ props }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    Heading,
    {
      ...pick(props, "size", "bold", "italic", "tone", "align", "numberOfLines", "sub"),
      text: useText(props, "text"),
      look: useLook("Heading", props)
    }
  ),
  Badge: ({ props }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Badge, { ...pick(props, "tone"), text: useText(props, "text"), look: useLook("Badge", props) }),
  ListRow: ({ props }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    ListRow,
    {
      ...pick(props, "trailingTone"),
      title: useText(props, "title"),
      subtitle: useText(props, "subtitle"),
      trailing: useText(props, "trailing")
    }
  ),
  ProgressBar: ({ props }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ProgressBar, { ...pick(props, "progress", "tone") }),
  Button: ({ props, emit }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Button, { ...pick(props, "variant", "size"), label: useText(props, "label"), look: useLook("Button", props), onPress: () => emit("press") }),
  Repeat: ({ props, children }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Repeat, { props, children }),
  BarChart: ({ props }) => {
    const { formatOptions } = React7.useContext(ViewSettingsContext);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(BarChart, { ...pick(props, "rows", "x", "y", "format", "tone"), formatOptions });
  },
  LineChart: ({ props }) => {
    const { formatOptions } = React7.useContext(ViewSettingsContext);
    return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LineChart, { ...pick(props, "rows", "x", "y", "format", "tone", "sparkline"), formatOptions });
  },
  Form: ({ props, emit, bindings }) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Form, { props, emit, bindings })
};
var { registry } = (0, import_react_native11.defineRegistry)(catalog, { components });

// packages/dynamic-ui-native/src/look.ts
var SPACING = [
  "padding",
  "paddingHorizontal",
  "paddingVertical",
  "paddingTop",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "margin",
  "marginHorizontal",
  "marginVertical",
  "marginTop",
  "marginBottom",
  "marginLeft",
  "marginRight",
  "gap",
  "borderWidth",
  "borderRadius"
];
var COLORS = ["backgroundColor", "borderColor"];
function toLook(style) {
  if (!style) return void 0;
  const view = {};
  for (const key of SPACING) {
    const n = typeof style[key] === "string" ? Number(style[key]) : style[key];
    if (typeof n === "number" && Number.isFinite(n)) view[key] = n;
  }
  for (const key of COLORS) if (typeof style[key] === "string" && style[key]) view[key] = style[key];
  const color = typeof style.color === "string" && style.color ? style.color : void 0;
  return { view, ...color ? { color } : {} };
}

// packages/dynamic-ui-native/src/stream.ts
var SseParser = class {
  constructor() {
    this.buffer = "";
  }
  push(chunk) {
    this.buffer += chunk;
    const out = [];
    let end;
    while ((end = this.buffer.indexOf("\n\n")) !== -1) {
      const block = this.buffer.slice(0, end);
      this.buffer = this.buffer.slice(end + 2);
      let event = "message";
      const data = [];
      for (const line of block.split("\n")) {
        if (line.startsWith("event:")) event = line.slice(6).trim();
        else if (line.startsWith("data:")) data.push(line.slice(5).replace(/^ /, ""));
      }
      if (!data.length) continue;
      try {
        out.push({ event, data: JSON.parse(data.join("\n")) });
      } catch {
      }
    }
    return out;
  }
};
var xhrTransport = (request, onText) => new Promise((resolve, reject) => {
  var _a;
  const xhr = new XMLHttpRequest();
  let seen = 0;
  const flush = () => {
    var _a2;
    const text = (_a2 = xhr.responseText) != null ? _a2 : "";
    if (text.length > seen) {
      const chunk = text.slice(seen);
      seen = text.length;
      onText(chunk);
    }
  };
  xhr.open("POST", request.url);
  for (const [name, value] of Object.entries(request.headers)) xhr.setRequestHeader(name, value);
  xhr.onprogress = flush;
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 3) flush();
  };
  xhr.onload = () => {
    var _a2;
    flush();
    resolve({ status: xhr.status, text: (_a2 = xhr.responseText) != null ? _a2 : "" });
  };
  xhr.onerror = () => reject(new Error("Network error."));
  xhr.onabort = () => reject(new Error("Stopped."));
  (_a = request.signal) == null ? void 0 : _a.addEventListener("abort", () => xhr.abort());
  xhr.send(request.body);
});

// packages/dynamic-ui-native/src/DynamicUIView.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function effectiveConfirm(op) {
  if (op.confirm === "none" && (!op.safe || op.inputs.some(isSensitive))) return "sheet";
  return op.confirm;
}
function secretValue(input, text) {
  return input.type === "number" || input.type === "integer" ? Number(text) : text;
}
function fixedValues(op, me) {
  var _a;
  const out = {};
  for (const field of (_a = op.fields) != null ? _a : []) {
    if (field.fixed === void 0) continue;
    out[field.name] = typeof field.fixed === "object" ? me == null ? void 0 : me[field.fixed.$me] : field.fixed;
  }
  return out;
}
function display(value, input, op, options) {
  var _a, _b;
  if (typeof value === "boolean") return value ? "Yes" : "No";
  const widget = widgetFor(input, (_b = (_a = op.fields) == null ? void 0 : _a.find((f) => f.name === input.name)) == null ? void 0 : _b.money);
  if (widget === "money") return formatValue(value, "money", options);
  if (widget === "date") return formatValue(value, "date", options);
  return String(value != null ? value : "");
}
async function readError(res) {
  try {
    const body = JSON.parse(res.text);
    if (typeof body.error === "string") return body.error;
  } catch {
  }
  return `Something went wrong (${res.status}).`;
}
function SourceErrors({ store }) {
  var _a;
  const state = React8.useSyncExternalStore(store.subscribe, store.getSnapshot);
  const errors = Object.values((_a = state.errors) != null ? _a : {});
  return errors.length ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native12.View, { style: { gap: 4 }, children: errors.map((e) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: e, size: "sm", tone: "error" }, e)) }) : null;
}
function bubble(width, side, box) {
  return width === "full" ? { ...box, alignSelf: "stretch" } : { ...box, alignSelf: side, maxWidth: "85%" };
}
var DynamicUIView = React8.forwardRef(function DynamicUIView2(props, ref) {
  var _a, _b;
  const {
    endpoint,
    operations = [],
    authHeaders,
    sessionFetch,
    me,
    navigate,
    confirmBiometric,
    placeholder = "Ask anything\u2026",
    showComposer = true,
    onBusyChange,
    greeting,
    emptyHint,
    formatOptions,
    currencySymbol,
    transport = xhrTransport,
    looks,
    defaultLooks,
    questionWidth = "fit",
    answerWidth = "full",
    questionAlign = "right",
    questionStyle,
    answerStyle
  } = props;
  const theme = useTheme();
  const [input, setInput] = React8.useState("");
  const [entries, setEntries] = React8.useState([]);
  const [busy, setBusy] = React8.useState(false);
  const [pending, setPending] = React8.useState(null);
  const [secrets, setSecrets] = React8.useState({});
  const base = endpoint.replace(/\/$/, "");
  const notes = React8.useRef([]);
  const picks = React8.useRef({});
  const note = (text) => notes.current.push(`[${text}]`);
  const update = (index, change) => setEntries((list) => list.map((e, i) => i === index ? { ...e, ...change } : e));
  const ask = async (question, pick2) => {
    const q = question.trim();
    if (!q || busy) return;
    if (pick2) picks.current[pick2.name] = { source: pick2.source, path: pick2.path, row: pick2.row };
    setInput("");
    setPending(null);
    setBusy(true);
    const sent = [...notes.current, q].join("\n");
    notes.current = [];
    const history = entries.flatMap(
      (e) => e.status === "done" ? [{ role: "user", content: e.sent }, { role: "assistant", content: e.answer ? JSON.stringify(e.answer) : e.text }] : []
    );
    const index = entries.length;
    const store = (0, import_react_native13.createStateStore)({});
    setEntries((list) => [...list, { question: q, sent, text: "", spec: null, store, status: "streaming" }]);
    const spec = { root: "", elements: {} };
    let text = "";
    let ended = null;
    const parser = new SseParser();
    const flush = () => update(index, { text, spec: spec.root ? JSON.parse(JSON.stringify(spec)) : null });
    try {
      const res = await transport(
        {
          url: base,
          headers: { "Content-Type": "application/json", ...await authHeaders() },
          body: JSON.stringify({ message: sent, history, picks: picks.current })
        },
        (chunk) => {
          var _a2, _b2;
          for (const { event, data } of parser.push(chunk)) {
            const d = data;
            if (event === "text") text += String((_a2 = d.delta) != null ? _a2 : "");
            else if (event === "patch") (0, import_core.applySpecStreamPatch)(spec, d);
            else if (event === "state") store.set(String(d.path), d.value);
            else if (event === "done") ended = { status: "done", answer: d.answer };
            else if (event === "error") ended = { status: "error", error: String((_b2 = d.message) != null ? _b2 : "Something went wrong.") };
          }
          flush();
        }
      );
      if (res.status !== 200) ended = { status: "error", error: await readError(res) };
      flush();
      update(index, ended != null ? ended : { status: "error", error: "The answer stopped early." });
    } catch (e) {
      update(index, { status: "error", error: e.message });
    } finally {
      setBusy(false);
    }
  };
  React8.useImperativeHandle(ref, () => ({ ask: (question) => void ask(question) }));
  const busyListener = React8.useRef(onBusyChange);
  busyListener.current = onBusyChange;
  React8.useEffect(() => {
    var _a2;
    (_a2 = busyListener.current) == null ? void 0 : _a2.call(busyListener, busy);
  }, [busy]);
  const config = (name) => operations.find((o) => o.name === name);
  const startOperation = (name, values) => {
    const op = config(name);
    if (!op) {
      setPending({ stage: "done", operation: name, message: `This app can\u2019t run \u201C${name}\u201D.` });
      return;
    }
    const fixed = fixedValues(op, me);
    const missing = op.inputs.filter((i) => i.required && !isSensitive(i) && values[i.name] === void 0 && fixed[i.name] === void 0);
    if (missing.length) {
      setPending({ stage: "edit", operation: name, values, only: missing.map((i) => i.name) });
      return;
    }
    const mode = effectiveConfirm(op);
    if (mode === "screen") {
      if (!navigate || !op.screen) {
        setPending({ stage: "done", operation: name, message: "The screen for this is not available." });
        return;
      }
      const merged = { ...values, ...fixed };
      navigate(op.screen.pageId, Object.fromEntries(Object.entries(op.screen.params).map(([p, inputName]) => [p, merged[inputName]])));
      note(`The user opened the app screen for ${name}.`);
      setPending(null);
      return;
    }
    if (mode === "none") {
      void run(name, values);
      return;
    }
    setPending({ stage: "review", operation: name, values });
  };
  const run = async (name, values) => {
    var _a2, _b2;
    const op = config(name);
    if (!op) return;
    if (effectiveConfirm(op) === "sheet+biometric") {
      const passed = confirmBiometric ? await confirmBiometric().catch(() => false) : false;
      if (!passed) {
        note(`The user did not pass the biometric check for ${name}.`);
        setPending({ stage: "error", operation: name, values, error: confirmBiometric ? "Not confirmed." : "Biometric check is not available." });
        return;
      }
    }
    const typed = Object.fromEntries(
      op.inputs.filter((i) => isSensitive(i) && secrets[i.name]).map((i) => [i.name, secretValue(i, secrets[i.name])])
    );
    setSecrets({});
    setPending({ stage: "running", operation: name, values });
    try {
      const res = await sessionFetch(`${base}/operation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ operation: name, values: { ...values, ...typed } })
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.ok) {
        note(`The user confirmed ${name}. It did not go through.`);
        setPending({ stage: "error", operation: name, values, error: (_a2 = body.error) != null ? _a2 : "It didn\u2019t go through." });
        return;
      }
    } catch (e) {
      note(`The user confirmed ${name}. It did not go through.`);
      setPending({ stage: "error", operation: name, values, error: e.message });
      return;
    }
    note(`The user confirmed ${name}. It went through.`);
    setPending({ stage: "done", operation: name, message: (_b2 = op.successMessage) != null ? _b2 : "Done." });
    if (op.refreshAsk) void ask(op.refreshAsk);
  };
  const latest = React8.useRef({ ask, startOperation, navigate });
  latest.current = { ask, startOperation, navigate };
  const handlers = React8.useMemo(
    () => ({
      ask: (p) => {
        var _a2, _b2;
        const question = typeof p.template === "string" ? fillAskTemplate(p.template, (_a2 = p.values) != null ? _a2 : {}) : String((_b2 = p.query) != null ? _b2 : "");
        const pick2 = p.pick;
        void latest.current.ask(question, pick2 && typeof pick2.name === "string" ? pick2 : void 0);
      },
      runOperation: (p) => {
        var _a2, _b2;
        return latest.current.startOperation(String((_a2 = p.operation) != null ? _a2 : ""), (_b2 = p.values) != null ? _b2 : {});
      },
      openPage: (p) => {
        var _a2, _b2, _c, _d;
        return (_d = (_c = latest.current).navigate) == null ? void 0 : _d.call(_c, String((_a2 = p.page) != null ? _a2 : ""), (_b2 = p.params) != null ? _b2 : {});
      },
      openUrl: (p) => {
        var _a2;
        const url = (_a2 = p.link) == null ? void 0 : _a2.url;
        if (typeof url === "string" && /^https?:\/\//i.test(url)) void import_react_native12.Linking.openURL(url).catch(() => {
        });
      }
    }),
    []
  );
  const settings = React8.useMemo(
    () => ({
      formatOptions,
      currencySymbol,
      fieldSettings: (name) => {
        var _a2;
        return (_a2 = config(name)) == null ? void 0 : _a2.fields;
      },
      lookFor: (type, name) => {
        var _a2, _b2;
        return toLook((_b2 = looks == null ? void 0 : looks[type]) == null ? void 0 : _b2[(_a2 = name != null ? name : defaultLooks == null ? void 0 : defaultLooks[type]) != null ? _a2 : ""]);
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formatOptions, currencySymbol, operations, looks, defaultLooks]
  );
  const questionLook = questionStyle ? (_a = settings.lookFor) == null ? void 0 : _a.call(settings, "Box", questionStyle) : void 0;
  const answerLook = answerStyle ? (_b = settings.lookFor) == null ? void 0 : _b.call(settings, "Box", answerStyle) : void 0;
  const questionBox = {
    backgroundColor: theme.primary,
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 14,
    ...questionLook == null ? void 0 : questionLook.view
  };
  const answerBox = {
    backgroundColor: theme.surface,
    borderColor: theme.border,
    borderWidth: 1,
    borderRadius: 18,
    padding: 14,
    gap: 10,
    ...answerLook == null ? void 0 : answerLook.view
  };
  function renderPending(p) {
    const op = config(p.operation);
    if (p.stage === "done") return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: p.message, size: "sm", tone: "success" });
    if (!op) return null;
    if (p.stage === "edit") {
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        FormView,
        {
          title: op.description,
          submitLabel: "Review",
          currencySymbol,
          fields: formInputs(
            op.inputs.filter((i) => !isSensitive(i)).filter((i) => {
              var _a2;
              return !((_a2 = op.fields) == null ? void 0 : _a2.some((f) => f.name === i.name && f.fixed !== void 0));
            }).filter((i) => !p.only || p.only.includes(i.name)).map((i) => {
              var _a2;
              return { ...i, label: (_a2 = i.label) != null ? _a2 : i.name };
            }),
            p.values,
            op.fields
          ),
          onSubmit: (values) => setPending({ stage: "review", operation: p.operation, values: { ...p.values, ...values } })
        }
      );
    }
    const shown = { ...p.values, ...fixedValues(op, me) };
    const secure = op.inputs.filter(isSensitive);
    const busy2 = p.stage === "running";
    const labelOf = (input2) => {
      var _a2, _b2;
      return labelFor(input2, (_b2 = (_a2 = op.fields) == null ? void 0 : _a2.find((f) => f.name === input2.name)) == null ? void 0 : _b2.label);
    };
    const card = { gap: 12, padding: 16, borderRadius: theme.radius, borderWidth: 1, borderColor: theme.primary, backgroundColor: theme.surface };
    const actions = /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_native12.View, { style: { flexDirection: "row", gap: 8, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        Button,
        {
          label: busy2 ? "Working\u2026" : p.stage === "error" ? "Try again" : "Confirm",
          disabled: busy2 || secure.some((i) => i.required && !secrets[i.name]),
          onPress: () => void run(p.operation, p.values)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        Button,
        {
          label: "Edit",
          variant: "outline",
          disabled: busy2,
          onPress: () => {
            setSecrets({});
            setPending({ stage: "edit", operation: p.operation, values: p.values });
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
        Button,
        {
          label: "Cancel",
          variant: "outline",
          disabled: busy2,
          onPress: () => {
            note(`The user cancelled ${p.operation}.`);
            setSecrets({});
            setPending(null);
          }
        }
      )
    ] });
    const error = p.stage === "error" ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: p.error, size: "sm", tone: "error" }) : null;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_native12.View, { style: { gap: 12 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_native12.View, { style: card, children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Heading, { text: "Check and confirm", size: "lg" }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: op.description, size: "sm", tone: "muted" }),
        op.inputs.filter((i) => !isSensitive(i) && shown[i.name] !== void 0).map((input2) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_native12.View, { style: { flexDirection: "row", justifyContent: "space-between", gap: 12 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: labelOf(input2), size: "sm", tone: "muted" }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: display(shown[input2.name], input2, op, formatOptions), size: "sm", bold: true })
        ] }, input2.name)),
        secure.length ? null : error,
        secure.length ? null : actions
      ] }),
      secure.length ? /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_native12.View, { style: card, children: [
        secure.map((input2) => {
          var _a2;
          return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
            SecureInput,
            {
              input: input2,
              label: `Enter ${labelOf(input2)}`,
              value: (_a2 = secrets[input2.name]) != null ? _a2 : "",
              onChange: (next) => setSecrets((all) => ({ ...all, [input2.name]: next })),
              disabled: busy2
            },
            input2.name
          );
        }),
        error,
        actions
      ] }) : null
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(ViewSettingsContext.Provider, { value: settings, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_native12.View, { style: { flex: 1, gap: 12 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_native12.ScrollView, { style: { flex: 1 }, contentContainerStyle: { gap: 16, paddingBottom: 8 }, children: [
      entries.length === 0 && greeting ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: greeting, size: "md" }) : null,
      entries.length === 0 && emptyHint ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: emptyHint, size: "sm", tone: "muted" }) : null,
      entries.map((entry, i) => {
        var _a2;
        return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(import_react_native12.View, { style: { gap: 10 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native12.View, { testID: "question-bubble", style: bubble(questionWidth, questionAlign === "left" ? "flex-start" : "flex-end", questionBox), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: entry.question, size: "md", color: (_a2 = questionLook == null ? void 0 : questionLook.color) != null ? _a2 : theme.onPrimary }) }),
          /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native12.View, { testID: "answer-bubble", style: bubble(answerWidth, "flex-start", answerBox), children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(Ink, { color: answerLook == null ? void 0 : answerLook.color, background: answerBox.backgroundColor, children: [
            entry.status === "streaming" && !entry.text && !entry.spec ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: "Thinking\u2026", size: "sm", tone: "muted" }) : null,
            entry.text ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: entry.text, size: "md" }) : null,
            entry.spec ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native13.JSONUIProvider, { registry, store: entry.store, handlers, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react_native13.Renderer, { spec: entry.spec, registry, includeStandard: false, loading: entry.status === "streaming" }) }) : null,
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SourceErrors, { store: entry.store }),
            entry.error ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Text, { text: entry.error, size: "sm", tone: "error" }) : null
          ] }) })
        ] }, i);
      }),
      pending ? renderPending(pending) : null
    ] }),
    showComposer ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      TextField,
      {
        value: input,
        onChangeText: setInput,
        placeholder,
        onSubmit: () => void ask(input),
        disabled: busy,
        right: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Button, { label: "Send", size: "sm", disabled: busy || !input.trim(), onPress: () => void ask(input) })
      }
    ) : null
  ] }) });
});
