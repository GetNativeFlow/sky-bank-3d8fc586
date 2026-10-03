// Bundled snapshot of the Studio theme at export time.
// Runtime overrides written by NativeFlowThemeProvider take precedence — see
// setRuntimeThemeColors / setRuntimeTypography / setRuntimeSpacing /
// setRuntimeBorderRadius below.
export const themes = {
  "light": {
    colors: {

    },
  },
};

let _runtimeColors: Record<string, Record<string, string>> | null = null;
let _runtimeTypography: Record<string, Record<string, unknown>> | null = null;
let _runtimeSpacing: Record<string, Record<string, number>> | null = null;
let _runtimeBorderRadius: Record<string, Record<string, number>> | null = null;

// Bundled defaults for sections not yet authored in the Studio. Provider
// overrides are layered on top per-mode (runtime > bundled > default mode).
const _bundledTypography: Record<string, Record<string, unknown>> = {};
const _bundledSpacing: Record<string, Record<string, number>> = {};
const _bundledBorderRadius: Record<string, Record<string, number>> = {};

/** Called by NativeFlowThemeProvider after a successful remote theme fetch. */
export function setRuntimeThemeColors(next: Record<string, Record<string, string>> | null) {
  _runtimeColors = next;
}

/** Runtime override slot for typography (fontFamily, scale, weight). */
export function setRuntimeTypography(next: Record<string, Record<string, unknown>> | null) {
  _runtimeTypography = next;
}

/** Runtime override slot for spacing scale (xs..xxl). */
export function setRuntimeSpacing(next: Record<string, Record<string, number>> | null) {
  _runtimeSpacing = next;
}

/** Runtime override slot for borderRadius scale (sm..full). */
export function setRuntimeBorderRadius(next: Record<string, Record<string, number>> | null) {
  _runtimeBorderRadius = next;
}


export type ThemeMode = keyof typeof themes;
export const defaultMode: ThemeMode = "light";

export function getThemeColors(mode: ThemeMode = defaultMode) {
  const runtime = _runtimeColors && ((_runtimeColors as any)[mode] || (_runtimeColors as any)[defaultMode]);
  if (runtime) return runtime as (typeof themes)[ThemeMode]['colors'];
  return themes[mode]?.colors || themes[defaultMode]?.colors || {};
}

export function getTypography(mode = defaultMode) {
  const runtime = _runtimeTypography && (_runtimeTypography[mode] || _runtimeTypography[defaultMode]);
  if (runtime) return runtime;
  return _bundledTypography[mode] || _bundledTypography[defaultMode] || {};
}

export function getSpacing(mode = defaultMode) {
  const runtime = _runtimeSpacing && (_runtimeSpacing[mode] || _runtimeSpacing[defaultMode]);
  if (runtime) return runtime;
  return _bundledSpacing[mode] || _bundledSpacing[defaultMode] || {};
}

export function getBorderRadius(mode = defaultMode) {
  const runtime = _runtimeBorderRadius && (_runtimeBorderRadius[mode] || _runtimeBorderRadius[defaultMode]);
  if (runtime) return runtime;
  return _bundledBorderRadius[mode] || _bundledBorderRadius[defaultMode] || {};
}
