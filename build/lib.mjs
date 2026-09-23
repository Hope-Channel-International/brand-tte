import { readFileSync, readdirSync } from "node:fs";
import { resolve, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const read = (p) => readFileSync(resolve(ROOT, p), "utf8");
export const readB64 = (p) => readFileSync(resolve(ROOT, p)).toString("base64");
export const list = (p) => readdirSync(resolve(ROOT, p)).filter((f) => f.endsWith(".svg")).sort();

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Inline SVG, without <?xml?>, width/height stripped so CSS controls the size. */
export function inlineSvg(path) {
  let s = read(path)
    .replace(/<\?xml[^>]*\?>/g, "")
    .replace(/<!DOCTYPE[^>]*>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .trim();
  s = s.replace(/<svg([^>]*)>/, (m, attrs) => {
    const cleaned = attrs.replace(/\s(width|height)="[^"]*"/g, "");
    return `<svg${cleaned} preserveAspectRatio="xMidYMid meet">`;
  });
  return s.replace(/\s+/g, " ");
}

export const svgDataUri = (path) =>
  `data:image/svg+xml;base64,${Buffer.from(read(path), "utf8").toString("base64")}`;

/* ---------- WCAG contrast ---------- */
const chan = (v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
export function luminance(hex) {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => chan(parseInt(h.slice(i, i + 2), 16) / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
export function contrast(a, b) {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
}
/** WCAG 2.1 verdict by text size. */
export function verdict(ratio) {
  return {
    ratio: Math.round(ratio * 100) / 100,
    normal: ratio >= 4.5,   // < 18.66px bold or < 24px regular
    large: ratio >= 3,      // >= 18.66px bold or >= 24px regular
    nonText: ratio >= 3,    // borders, icons, focus rings
  };
}

export const titleCase = (s) =>
  s.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export const logoLabel = (file) => titleCase(basename(file, ".svg"));
