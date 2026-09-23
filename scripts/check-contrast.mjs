/**
 * Validates TTE's color pairs against WCAG 2.1, reading the real values from
 * design-system/tokens.json (the published source of truth).
 *
 * Thresholds: 4.5:1 normal text | 3:1 large text (>=24px, or bold >=18.66px),
 * borders, icons and focus rings.
 *
 * Some pairs FAIL on purpose: they are approved brand decisions. The script marks
 * each of those as expected and only fails on an unexpected regression.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(readFileSync(resolve(ROOT, "design-system/tokens.json"), "utf8"));

const first = tokens.color.themes[0].id;
const byName = new Map(tokens.color.tokens.map((t) => [t.name, t]));

/** Resolves an `{other-token}` alias and picks the theme's value. */
function value(name, theme, depth = 0) {
  if (depth > 16) throw new Error(`alias chain too deep at ${name}`);
  const tok = byName.get(name);
  if (!tok) throw new Error(`unknown token: ${name}`);
  const raw = typeof tok.value === "string" ? tok.value : (tok.value[theme] ?? tok.value[first]);
  const m = /^\{(.+)\}$/.exec(raw);
  return m ? value(m[1], theme, depth + 1) : raw;
}

const chan = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
function luminance(hex) {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => chan(parseInt(h.slice(i, i + 2), 16) / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}

/** [label, foreground token, background token, threshold, expectation] */
const PAIRS = [
  ["ink on surface",                 "ink",           "surface",        4.5, "pass"],
  ["ink-muted on surface",           "ink-muted",     "surface",        4.5, "theme dependent"],
  ["text-inverted on surface-dark",  "text-inverted", "surface-dark",   4.5, "pass"],
  ["text-default on surface-light",  "text-default",  "surface-light",  4.5, "pass"],
  ["hud-accent on hud-background",   "hud-accent",    "hud-background", 4.5, "pass"],
  ["hud-text on hud-background",     "hud-text",      "hud-background", 4.5, "pass"],
  ["text-muted on surface-dark",     "text-muted",    "surface-dark",   4.5, "pass"],
  ["text-muted on surface-light",    "text-muted",    "surface-light",  4.5, "KNOWN FAILURE"],
  ["white on surface-accent",        "white",         "surface-accent", 4.5, "KNOWN FAILURE"],
  ["black on surface-accent",        "black",         "surface-accent", 4.5, "pass"],
  ["text-accent on surface-light",   "text-accent",   "surface-light",  4.5, "KNOWN FAILURE"],
  // 3:1 — borders, icons, focus rings
  ["border-accent on surface-dark",    "border-accent", "surface-dark",  3, "pass"],
  ["border-accent on surface-light",   "border-accent", "surface-light", 3, "pass"],
  ["border-default on surface",        "border-default","surface",       3, "pass"],
  ["icon-primary on surface-dark",     "icon-primary",  "surface-dark",  3, "pass"],
];

const KNOWN = new Set([
  "white on surface-accent",        // primary CTA: brand decision, 3.20:1
  "text-accent on surface-light",   // orange on white: display and non-text only
  "text-muted on surface-light",    // grey on white: keep it on dark grounds
  "ink-muted on surface",           // the same grey, via the theme pair: fails in the light theme only
]);

let regressions = 0;
let knownFails = 0;

for (const theme of tokens.color.themes.map((t) => t.id)) {
  console.log(`\n  theme ${theme}`);
  console.log("  " + "-".repeat(76));
  for (const [label, fgTok, bgTok, min] of PAIRS) {
    const fg = value(fgTok, theme);
    const bg = value(bgTok, theme);
    const r = contrast(fg, bg);
    const ok = r >= min;
    const known = KNOWN.has(label);
    let mark;
    if (ok) mark = "PASS";
    else if (known) { mark = "EXPECTED"; knownFails++; }
    else { mark = "REGRESSION"; regressions++; }
    console.log(
      `  ${mark.padEnd(10)} ${label.padEnd(34)} ${r.toFixed(2).padStart(6)}:1  (min ${min})  ${fg} / ${bg}`,
    );
  }
}

console.log();
if (regressions > 0) {
  console.error(`  ${regressions} contrast regression(s): pairs that should pass and do not.\n`);
  process.exit(1);
}
console.log(`  No regressions. ${knownFails} expected failure(s), all documented brand decisions.\n`);
