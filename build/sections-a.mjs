import { inlineSvg, list, logoLabel, esc, contrast, verdict } from "./lib.mjs";

/* ============ 01 · COVER ============ */
export const cover = () => `
<section id="cover">
  <div class="wrap">
    <div style="max-width:940px">
      <div class="eyebrow">Brand kit · v2.0 · single file</div>
      <div style="max-width:520px;margin-bottom:34px">${inlineSvg("assets/logos/complete/vertical-white.svg")}</div>
      <p class="dl" style="margin-bottom:26px">The whole brand<br>in <span class="accent">one file</span></p>
      <p class="body measure" style="color:#D3D1C7">
        Tokens, logos, typography, components and rules for To The Ends of The Earth.
        Real fonts embedded, SVGs inline, nothing loaded from the network. Open it anywhere,
        copy what you need, or hand the file to an agent as the brand's complete instruction set.
      </p>
      <div class="row" style="margin-top:34px">
        <a class="btn btn--mobilize btn--default btn--lg" href="#logos">See the system</a>
        <a class="btn btn--operate btn--outline btn--sm" href="#tokens">Copy tokens</a>
      </div>
    </div>

    <div class="grid" style="margin-top:64px">
      ${[
        ["Archetype", "Explorer × Hero"],
        ["Parent brand", "Hope Channel International"],
        ["Theological engine", "Acts 1:8"],
        ["Core tension", "3.6 billion unreached"],
      ].map(([l, v]) => `
      <div class="panel"><div class="panel__b">
        <div class="hud-xs muted" style="margin-bottom:9px">${l}</div>
        <div class="lbl-lg">${v}</div>
      </div></div>`).join("")}
    </div>

    <div class="topoband" style="margin-top:16px">
      <p class="hud-sm accent" style="margin-bottom:14px">The tension that defines the brand</p>
      <p class="h3 measure" style="margin-inline:auto">
        The statistic feels <span class="accent">impossible</span>.<br>The theology says the outcome is <span class="accent">inevitable</span>.
      </p>
    </div>
  </div>
</section>`;

/* ============ 02 · RULES ============ */
export const rules = () => `
<section id="rules">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">01 · Foundation</div>
      <h2 class="h1">Non-negotiable rules</h2>
      <p class="lead">Six rules that are never broken when generating any asset. Where this conflicts with an older document, this wins.</p>
    </div>
    <div class="grid-2">
      ${[
        ["Color", "Fire Orange <code>#FE5442</code> is maximum emphasis — never a dominant background on a long layout. Black <code>#28272A</code> is the default immersive background. White <code>#FFFFFF</code> is for editorial layouts and text on dark."],
        ["Typography", "Only Mona Sans (display and headings) and Space Mono (HUD, data, body). No other typeface, ever. Mona Sans is always UPPERCASE in display use."],
        ["Border radius", "<code>0px</code> on everything. The brand is angular and tactical. One exception: circular avatars (<code>9999px</code>)."],
        ["Tokens, never raw hex", "Every color and type decision references a token. Never invent a hex value."],
        ["Two distinct palettes", "<b>Identity</b> (logo, type, UI): white is pure <code>#FFFFFF</code>. <b>Imagery</b> (photography): white is Warm White <code>#F4F3F1</code>. No TTE photograph contains pure white."],
        ["Hope Channel lockup", "Present in all official material — co-brand or the “Powered by Hope Channel” endorsement."],
      ].map(([t, d], i) => `
      <div class="panel"><div class="panel__b">
        <div class="hud-xs accent" style="margin-bottom:11px">${String(i + 1).padStart(2, "0")}</div>
        <h3 class="h4" style="margin-bottom:11px">${t}</h3>
        <p class="body-sm" style="color:#D3D1C7">${d}</p>
      </div></div>`).join("")}
    </div>
  </div>
</section>`;

/* ============ 03 · LOGOS ============ */
const stageFor = (file) => {
  const n = file.toLowerCase();
  if (n.includes("white") || n.includes("dark-bg")) return n.includes("dark-bg") ? "photo" : "dark";
  return "light";
};

function logoGroup(dir, heading, note) {
  const files = list(dir);
  return `
  <div style="margin-bottom:50px">
    <div style="display:flex;align-items:baseline;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:16px">
      <h3 class="h4">${heading}</h3>
      <span class="hud-xs muted">${files.length} variant${files.length > 1 ? "s" : ""}</span>
    </div>
    <p class="body-sm muted measure" style="margin-bottom:20px">${note}</p>
    <div class="grid">
      ${files.map((f) => {
        const path = `${dir}/${f}`;
        return `
      <figure class="logo-card">
        <div class="logo-stage logo-stage--${stageFor(f)}">${inlineSvg(path)}</div>
        <figcaption class="logo-foot">
          <span class="logo-name" title="${esc(f)}">${esc(logoLabel(f))}</span>
          <button class="copybtn" data-copy-svg="${esc(path)}">SVG</button>
        </figcaption>
      </figure>`;
      }).join("")}
    </div>
  </div>`;
}

export const logos = () => `
<section id="logos">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">02 · Atoms</div>
      <h2 class="h1">Logo system</h2>
      <p class="lead">
        The mark is a bird in flight — a dove (the Holy Spirit) fused with a flame (Pentecost).
        Body in black, defining wing in Fire Orange, oriented forward and upward.
        Clearspace equals the height of the “T” in the wordmark. White on dark or photography;
        black on light. All 26 SVGs below are embedded in this file — click <b>SVG</b> to copy the source.
      </p>
    </div>
    ${logoGroup("assets/logos/mark", "Mark — the bird", "The symbol on its own. Use it when the wordmark already appears in context, and in avatars, favicons and small applications.")}
    ${logoGroup("assets/logos/wordmark", "Wordmark", "The type alone. The <i>orange</i> variants set “THE EARTH” in Fire Orange — the preferred form when there is room.")}
    ${logoGroup("assets/logos/complete", "Complete lockup", "Bird plus wordmark. The canonical form of the brand. The <i>modular</i> variants redistribute the elements for extreme widths.")}
    ${logoGroup("assets/logos/hope-channel", "Hope Channel co-brand", "The parent brand's endorsement. Required on all official material, as a co-brand or as “Powered by Hope Channel”.")}
    <div class="grid-2">
      <div class="panel"><div class="panel__h">Always</div><div class="panel__b">
        <ul class="rules rules--do">
          <li data-m="+">Clearspace of at least the height of the “T” in the wordmark</li>
          <li data-m="+">White logo on a dark background or photography</li>
          <li data-m="+">Black logo on a light background</li>
          <li data-m="+">Hope Channel lockup present on official material</li>
        </ul>
      </div></div>
      <div class="panel"><div class="panel__h">Never</div><div class="panel__b">
        <ul class="rules rules--dont">
          <li data-m="x">Distort, stretch or rotate</li>
          <li data-m="x">Recolor outside the approved variants</li>
          <li data-m="x">Separate the icon from the wordmark in a combined lockup</li>
          <li data-m="x">Apply a shadow, outline or gradient</li>
        </ul>
      </div></div>
    </div>
  </div>
</section>`;

/* ============ 04 · COLOR ============ */
const PRIMARY = [
  ["Fire Orange", "#FE5442", "brand.primary", "Fire of the Holy Spirit, urgency, breakthrough", "Emphasis only — CTAs, wordmark accent, the icon's wing, HUD labels. Never a dominant background."],
  ["Black", "#28272A", "brand.dark", "The earth, the soil, the darkness of unreached places", "Default immersive background; text on light."],
  ["White", "#FFFFFF", "brand.light", "Gospel light piercing the darkness", "Editorial and light layouts; text on dark."],
  ["Grey", "#949494", "text.muted", "Supporting neutral", "Secondary and inactive. Passes on dark; only 3.03:1 on white."],
];
const BIOMES = [
  ["Desert / Arid", "#B86C55", "biome.desert"],
  ["Arctic / Frozen", "#7BA7BC", "biome.arctic"],
  ["Urban / City", "#4A4A52", "biome.city"],
  ["Tropical / Forest", "#2D5A3D", "biome.forest"],
];
const PAIRS = [
  ["White on Fire Orange", "#FFFFFF", "#FE5442", "Primary CTA (button label)"],
  ["Black on Fire Orange", "#28272A", "#FE5442", "Alternative CTA label"],
  ["Fire Orange on Black", "#FE5442", "#28272A", "HUD label, accent on dark"],
  ["Fire Orange on White", "#FE5442", "#FFFFFF", "Accent on a light layout"],
  ["White on Black", "#FFFFFF", "#28272A", "Body on the immersive background"],
  ["Black on White", "#28272A", "#FFFFFF", "Body on an editorial layout"],
  ["Grey on Black", "#949494", "#28272A", "text.muted on dark"],
  ["Grey on White", "#949494", "#FFFFFF", "text.muted on light"],
];

export const color = () => {
  const rows = PAIRS.map(([name, fg, bg, use]) => {
    const v = verdict(contrast(fg, bg));
    const p = (ok) => `<span class="pill pill--${ok ? "pass" : "fail"}">${ok ? "PASS" : "FAIL"}</span>`;
    return `<tr>
      <td><span style="display:inline-block;width:11px;height:11px;background:${fg};outline:1px solid rgba(255,255,255,.3);margin-right:7px;vertical-align:-1px"></span>${name}</td>
      <td class="ratio">${v.ratio.toFixed(2)}:1</td>
      <td>${p(v.normal)}</td><td>${p(v.large)}</td><td>${p(v.nonText)}</td>
      <td class="muted">${use}</td>
    </tr>`;
  }).join("");

  return `
<section id="color">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">03 · Color</div>
      <h2 class="h1">Palette</h2>
      <p class="lead">Three primary colors, four biome accents. Fire Orange is signal, never surface. Values validated against the Figma source of truth.</p>
    </div>

    <h3 class="h4" style="margin-bottom:18px">Primary</h3>
    <div class="grid" style="margin-bottom:46px">
      ${PRIMARY.map(([n, hex, tok, meaning, use]) => `
      <div class="sw">
        <div class="sw__chip" style="background:${hex}"></div>
        <div class="sw__meta">
          <div class="sw__name">${n}</div>
          <div class="sw__hex">${hex} · ${tok}</div>
          <div class="sw__use"><i>${meaning}</i></div>
          <div class="sw__use">${use}</div>
        </div>
      </div>`).join("")}
    </div>

    <h3 class="h4" style="margin-bottom:8px">Biome — secondary accent</h3>
    <p class="body-sm muted measure" style="margin-bottom:18px">
      Context accents for regional content. They never replace Fire Orange as the signal color,
      and they are marked <b>pending final approval</b> in the source tokens.
    </p>
    <div class="grid" style="margin-bottom:46px">
      ${BIOMES.map(([n, hex, tok]) => `
      <div class="sw">
        <div class="sw__chip" style="background:${hex};height:78px"></div>
        <div class="sw__meta"><div class="sw__name">${n}</div><div class="sw__hex">${hex} · ${tok}</div></div>
      </div>`).join("")}
    </div>

    <h3 class="h4" style="margin-bottom:8px">WCAG 2.1 contrast</h3>
    <p class="body-sm muted measure" style="margin-bottom:18px">
      Computed in this file from the real token values. <b>Normal</b> = 4.5:1 (text under 24px, or bold under 18.66px).
      <b>Large</b> = 3:1. <b>Non-text</b> = 3:1 (borders, icons, focus rings).
    </p>
    <div class="panel"><div class="tscroll">
      <table>
        <thead><tr><th>Pair</th><th>Ratio</th><th>Normal</th><th>Large</th><th>Non-text</th><th>Where it appears</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div></div>
    <div class="panel" style="margin-top:16px;border-color:var(--orange)"><div class="panel__b">
      <div class="hud-sm accent" style="margin-bottom:11px">Documented exception</div>
      <p class="body-sm" style="color:#D3D1C7">
        White on Fire Orange measures <b>3.20:1</b>: it passes as large or bold text and fails as normal text.
        That is exactly the primary CTA (orange fill, white label). The Button spec already records this as an
        open follow-up and names the way out: a dark label on orange measures <b>4.64:1</b> and passes as normal text.
        Grey <code>#949494</code> on white measures <b>3.03:1</b> — keep the grey on dark grounds only.
      </p>
    </div></div>
  </div>
</section>`;
};
