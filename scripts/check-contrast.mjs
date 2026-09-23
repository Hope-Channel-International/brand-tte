/**
 * Valida os pares de cor da TTE contra o WCAG 2.1, lendo os valores reais
 * de design-system/tokens.json (a fonte da verdade publicada).
 *
 * Limiares: 4.5:1 texto normal | 3:1 texto grande (>=24px, ou negrito >=18.66px),
 * borda, icone e anel de foco.
 *
 * Alguns pares REPROVAM de proposito: sao decisoes de marca aprovadas.
 * O script marca cada um como esperado e so falha em regressao inesperada.
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tokens = JSON.parse(readFileSync(resolve(ROOT, "design-system/tokens.json"), "utf8"));

const first = tokens.color.themes[0].id;
const byName = new Map(tokens.color.tokens.map((t) => [t.name, t]));

/** Resolve alias `{outro-token}` e escolhe o valor do tema. */
function value(name, theme, depth = 0) {
  if (depth > 16) throw new Error(`cadeia de alias longa demais em ${name}`);
  const tok = byName.get(name);
  if (!tok) throw new Error(`token inexistente: ${name}`);
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

/** [rotulo, token de frente, token de fundo, limiar, esperado] */
const PAIRS = [
  ["ink sobre surface",              "ink",           "surface",        4.5, "pass"],
  ["ink-muted sobre surface",        "ink-muted",     "surface",        4.5, "depende do tema"],
  ["text-inverted sobre surface-dark","text-inverted","surface-dark",   4.5, "pass"],
  ["text-default sobre surface-light","text-default", "surface-light",  4.5, "pass"],
  ["hud-accent sobre hud-background","hud-accent",    "hud-background", 4.5, "pass"],
  ["hud-text sobre hud-background",  "hud-text",      "hud-background", 4.5, "pass"],
  ["text-muted sobre surface-dark",  "text-muted",    "surface-dark",   4.5, "pass"],
  ["text-muted sobre surface-light", "text-muted",    "surface-light",  4.5, "FALHA CONHECIDA"],
  ["white sobre surface-accent",     "white",         "surface-accent", 4.5, "FALHA CONHECIDA"],
  ["black sobre surface-accent",     "black",         "surface-accent", 4.5, "pass"],
  ["text-accent sobre surface-light","text-accent",   "surface-light",  4.5, "FALHA CONHECIDA"],
  // 3:1 — borda, icone, foco
  ["border-accent sobre surface-dark", "border-accent", "surface-dark",  3, "pass"],
  ["border-accent sobre surface-light","border-accent", "surface-light", 3, "pass"],
  ["border-default sobre surface",     "border-default","surface",       3, "pass"],
  ["icon-primary sobre surface-dark",  "icon-primary",  "surface-dark",  3, "pass"],
];

const KNOWN = new Set([
  "white sobre surface-accent",        // CTA primario: decisao de marca, 3,20:1
  "text-accent sobre surface-light",   // laranja sobre branco: so display/nao-texto
  "text-muted sobre surface-light",    // grey sobre branco: so sobre escuro
  "ink-muted sobre surface",           // o mesmo grey, pelo par tematico: reprova so no tema claro
]);

let regressions = 0;
let knownFails = 0;

for (const theme of tokens.color.themes.map((t) => t.id)) {
  console.log(`\n  tema ${theme}`);
  console.log("  " + "-".repeat(76));
  for (const [label, fgTok, bgTok, min] of PAIRS) {
    const fg = value(fgTok, theme);
    const bg = value(bgTok, theme);
    const r = contrast(fg, bg);
    const ok = r >= min;
    const known = KNOWN.has(label);
    let mark;
    if (ok) mark = "PASS";
    else if (known) { mark = "ESPERADO"; knownFails++; }
    else { mark = "REGRESSAO"; regressions++; }
    console.log(
      `  ${mark.padEnd(10)} ${label.padEnd(34)} ${r.toFixed(2).padStart(6)}:1  (min ${min})  ${fg} / ${bg}`,
    );
  }
}

console.log();
if (regressions > 0) {
  console.error(`  ${regressions} regressao(oes) de contraste: pares que deveriam passar e nao passam.\n`);
  process.exit(1);
}
console.log(`  Sem regressoes. ${knownFails} reprovacao(oes) esperada(s), todas decisoes de marca documentadas.\n`);
