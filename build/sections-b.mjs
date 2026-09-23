import { read, esc, inlineSvg, svgDataUri } from "./lib.mjs";

/* ============ 05 · TYPOGRAPHY ============ */
const MONA = [
  ["Display / 2XL", "d2xl", "96px", "Black 900", "95%", "2%", "UPPERCASE", "To the ends"],
  ["Display / XL", "dxl", "72px", "Black 900", "95%", "2%", "UPPERCASE", "Of the earth"],
  ["Display / L", "dl", "60px", "ExtraBold 800", "100%", "2%", "UPPERCASE", "Unreached"],
  ["Heading / H1", "h1", "48px", "ExtraBold 800", "105%", "1%", "UPPERCASE", "The prophetic certainty"],
  ["Heading / H2", "h2", "36px", "ExtraBold 800", "110%", "1%", "UPPERCASE", "The impossible tension"],
  ["Heading / H3", "h3", "28px", "Bold 700", "100%", "1%", "UPPERCASE", "Prayer as authority"],
  ["Heading / H4", "h4", "22px", "Bold 700", "100%", "2%", "UPPERCASE", "Beautiful feet"],
  ["Label / Large", "lbl-lg", "16px", "ExtraBold 800", "100%", "4%", "UPPERCASE", "Join the mission"],
  ["Label / Medium", "lbl-md", "13px", "ExtraBold 800", "100%", "4%", "UPPERCASE", "Pray now"],
  ["Body / Regular", "mona-body", "16px", "Medium 500", "120%", "0%", "Sentence", "The gospel of Jesus will reach every people group on earth before the end."],
  ["Body / Small", "mona-body-sm", "14px", "Medium 500", "120%", "0%", "Sentence", "Prayer is an exercise of delegated authority in the unseen realm."],
];
const MONO = [
  ["HUD / XL", "hud-xl", "20px", "Bold 700", "120%", "6%", "UPPERCASE", "Target : Tajik"],
  ["HUD / Default", "hud", "14px", "Regular 400", "120%", "6%", "UPPERCASE", "Est. pop : 12,000,000"],
  ["HUD / Small", "hud-sm", "12px", "Regular 400", "120%", "6%", "UPPERCASE", "Gospel access : 0.1%"],
  ["HUD / Micro", "hud-xs", "10px", "Regular 400", "120%", "6%", "UPPERCASE", "33.0N 65.0E"],
  ["Body / Regular", "body", "16px", "Regular 400", "140%", "1%", "Sentence", "A government can expel a missionary. It cannot stop a video crossing a digital border."],
  ["Body / Small", "body-sm", "14px", "Regular 400", "140%", "1%", "Sentence", "The statistic feels impossible. The theology says the outcome is inevitable."],
  ["Body / XS", "body-xs", "12px", "Regular 400", "160%", "1%", "Sentence", "Hope Channel International · 39.0560 N 76.9634 W"],
  ["Label / Default", "mono-label", "12px", "Bold 700", "140%", "3%", "UPPERCASE", "Status : unreached"],
];

const specimens = (rows) => rows.map(([name, cls, size, weight, lh, ls, cs, sample]) => `
  <div class="spec">
    <div class="spec__meta">
      <span><b>${name}</b></span><span>${size}</span><span>${weight}</span>
      <span>LH ${lh}</span><span>LS ${ls}</span><span>${cs}</span><span>.${cls}</span>
    </div>
    <div class="spec__demo"><div class="${cls}">${esc(sample)}</div></div>
  </div>`).join("");

export const typography = () => `
<section id="typography">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">04 · Typography</div>
      <h2 class="h1">Two families, two roles</h2>
      <p class="lead">
        <b>Mona Sans mobilizes, Space Mono operates.</b> Mona Sans is the brand's voice — display, headings,
        the emotional moments. Space Mono is the instrument — HUD, data, coordinates, controls. No other typeface, ever.
        The specimens below render in the real fonts, embedded in this file.
      </p>
    </div>

    <div class="panel" style="margin-bottom:26px">
      <div class="panel__h"><span>Mona Sans — display, headings, editorial</span><span>200–900 variable</span></div>
      <div class="panel__b">${specimens(MONA)}</div>
    </div>
    <div class="panel" style="margin-bottom:26px">
      <div class="panel__h"><span>Space Mono — HUD, data, body</span><span>400 · 700</span></div>
      <div class="panel__b">${specimens(MONO)}</div>
    </div>

    <div class="grid-2">
      <div class="panel"><div class="panel__h">Rules</div><div class="panel__b">
        <ul class="rules rules--do">
          <li data-m="+">Mona Sans is UPPERCASE in all display and heading use</li>
          <li data-m="+">One exception: Mona Sans Body Regular and Small, in sentence case, for longer reading</li>
          <li data-m="+">Space Mono is uppercase for HUD and labels; sentence case in body only</li>
          <li data-m="+">Line height below 100% in Display is intentional — it makes a compact editorial block</li>
          <li data-m="+">Wide tracking in Space Mono is intentional — it reinforces the data-readout feel</li>
        </ul>
      </div></div>
      <div class="panel"><div class="panel__h">The split that never crosses</div><div class="panel__b">
        <p class="body-sm" style="color:#D3D1C7;margin-bottom:16px">
          The button inherits the same logic: <code>intent</code> picks the typeface by role.
        </p>
        <div class="kv">
          <div class="kv__r"><span class="kv__a">Mona Sans — Pray, Give, Join</span><span class="kv__b">Mona Sans — Filter, Export</span></div>
          <div class="kv__r"><span class="kv__a">Space Mono — Filter, Export, Next</span><span class="kv__b">Space Mono — Pray now</span></div>
        </div>
      </div></div>
    </div>
  </div>
</section>`;

/* ============ 06 · TOKENS ============ */
const codeBlock = (id, text) => `
  <div class="codewrap" data-pane="${id}" hidden>
    <button class="copybtn" data-copy-pane="${id}">Copy</button>
    <pre><code>${esc(text)}</code></pre>
  </div>`;

export const tokens = () => {
  const files = [
    ["css", "tokens.css", read("tokens/tokens.css")],
    ["json", "tokens.json", read("tokens/tokens.json")],
    ["scss", "tokens.scss", read("tokens/tokens.scss")],
    ["tw", "tokens.tailwind.js", read("tokens/tokens.tailwind.js")],
  ];
  return `
<section id="tokens">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">05 · Tokens</div>
      <h2 class="h1">Source of truth</h2>
      <p class="lead">
        Three layers: <b>primitives</b> (raw values, never used directly), <b>brand</b> (what each value means)
        and <b>semantic</b> (where and how it is used). In application, always the semantic layer. The four formats
        below are the full contents of the official files — copy and paste into your project.
      </p>
    </div>
    <div class="tabs" role="tablist" data-tabs="tok" style="margin-bottom:20px">
      ${files.map(([id, label], i) => `<button role="tab" data-tab="${id}" aria-selected="${i === 0}">${label}</button>`).join("")}
    </div>
    ${files.map(([id, , text]) => codeBlock(id, text)).join("")}

    <div class="grid" style="margin-top:36px">
      ${[
        ["Control scale", "36 · <b>44</b> · 56 px", "Button, Input and Select all size from here. 44px is the system default."],
        ["Radius", "<b>0</b> px", "Always. One exception: <code>--radius-full</code> for circular avatars."],
        ["Border", "1 · <b>2</b> · 4 px", "Thin for HUD lines and dividers, default for standard borders, thick for active states."],
        ["Spacing", "base <b>4</b> px", "0 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128"],
      ].map(([l, v, d]) => `
      <div class="panel"><div class="panel__b">
        <div class="hud-xs muted" style="margin-bottom:9px">${l}</div>
        <div class="h4" style="margin-bottom:9px">${v}</div>
        <p class="body-xs muted">${d}</p>
      </div></div>`).join("")}
    </div>
  </div>
</section>`;
};

/* ============ 07 · COMPONENTS ============ */
export const components = () => `
<section id="components">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">06 · Design system</div>
      <h2 class="h1">Base components</h2>
      <p class="lead">
        A shadcn/ui base (Radix + Tailwind) with the brand entering through the token layer.
        Radius 0, uppercase and Fire Orange as emphasis only — by construction, never by manual discipline.
      </p>
    </div>

    <div class="panel" style="margin-bottom:20px">
      <div class="panel__h"><span>Button — two independent axes</span><span>intent × variant × size</span></div>
      <div class="panel__b">
        <p class="body-sm measure" style="color:#D3D1C7;margin-bottom:22px">
          <code>intent</code> picks the <b>typeface</b> by the button's role. <code>variant</code> picks the <b>visual treatment</b>.
          <code>size</code> is the third axis. Mona Sans mobilizes, Space Mono operates — never cross the wires.
        </p>

        <div class="hud-xs accent" style="margin-bottom:12px">intent = mobilize · Mona Sans · the voice</div>
        <div class="row" style="margin-bottom:26px">
          <button class="btn btn--mobilize btn--default btn--lg">Join the mission</button>
          <button class="btn btn--mobilize btn--default">Pray now</button>
          <button class="btn btn--mobilize btn--outline">Give</button>
          <button class="btn btn--mobilize btn--secondary">Learn more</button>
          <button class="btn btn--mobilize btn--inverted">Partner</button>
          <button class="btn btn--mobilize btn--link">Read the story</button>
        </div>

        <div class="hud-xs accent" style="margin-bottom:12px">intent = operate · Space Mono · the instrument</div>
        <div class="row" style="margin-bottom:26px">
          <button class="btn btn--operate btn--default btn--sm">Export data</button>
          <button class="btn btn--operate btn--outline btn--sm">Filter</button>
          <button class="btn btn--operate btn--ghost btn--sm">Reset</button>
          <button class="btn btn--operate btn--secondary btn--sm">Next</button>
          <button class="btn btn--operate btn--outline btn--sm" disabled>Disabled</button>
        </div>

        <div class="hud-xs accent" style="margin-bottom:12px">size · 56 / 44 / 36 px</div>
        <div class="row">
          <button class="btn btn--mobilize btn--default btn--lg">Large 56</button>
          <button class="btn btn--mobilize btn--default">Default 44</button>
          <button class="btn btn--operate btn--default btn--sm">Small 36</button>
          <button class="btn btn--mobilize btn--outline btn--icon" aria-label="Next">&rarr;</button>
        </div>
      </div>
    </div>

    <div class="grid-2">
      <div class="panel">
        <div class="panel__h">Badge — HUD tag</div>
        <div class="panel__b"><div class="row">
          <span class="tag">Unreached</span>
          <span class="tag tag--accent">Priority</span>
          <span class="tag tag--solid">Live</span>
          <span class="tag"><i class="tag__sw" style="background:var(--desert)"></i>Desert</span>
          <span class="tag"><i class="tag__sw" style="background:var(--arctic)"></i>Arctic</span>
          <span class="tag"><i class="tag__sw" style="background:var(--city)"></i>City</span>
          <span class="tag"><i class="tag__sw" style="background:var(--forest)"></i>Forest</span>
        </div></div>
      </div>

      <div class="panel">
        <div class="panel__h">Input — 44px, radius 0</div>
        <div class="panel__b" style="display:grid;gap:18px">
          <div class="field"><label for="d-i1">People group</label><input class="inp" id="d-i1" placeholder="Search…"></div>
          <div class="field"><label for="d-i2">Coordinates</label><input class="inp" id="d-i2" value="33.0°N 65.0°E"></div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__h">Tabs — HUD underline</div>
        <div class="panel__b">
          <div class="tabs" role="tablist" data-tabs="demo">
            <button role="tab" data-tab="a" aria-selected="true">Overview</button>
            <button role="tab" data-tab="b" aria-selected="false">Data</button>
            <button role="tab" data-tab="c" aria-selected="false">Prayer</button>
          </div>
          <div data-pane="a" hidden><p class="body-sm" style="color:#D3D1C7;padding-top:16px">Fire Orange marks the active tab. A 2px bar, radius 0.</p></div>
          <div data-pane="b" hidden><p class="body-sm" style="color:#D3D1C7;padding-top:16px">Space Mono on every tab label — a tab is a control, not a call to action.</p></div>
          <div data-pane="c" hidden><p class="body-sm" style="color:#D3D1C7;padding-top:16px">The inactive tab uses <code>text.muted</code>.</p></div>
        </div>
      </div>

      <div class="panel">
        <div class="panel__h">Table — data</div>
        <div class="panel__b" style="padding:0"><div class="tscroll"><table>
          <thead><tr><th>People group</th><th>Pop.</th><th>Access</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Tajik</td><td>12,000,000</td><td class="accent">0.1%</td><td><span class="tag">Unreached</span></td></tr>
            <tr><td>Brahmin</td><td>58,000,000</td><td class="accent">0.02%</td><td><span class="tag">Unreached</span></td></tr>
            <tr><td>Turkish</td><td>61,000,000</td><td class="accent">0.07%</td><td><span class="tag">Unreached</span></td></tr>
          </tbody>
        </table></div></div>
      </div>
    </div>
  </div>
</section>`;

/* ============ 08 · ORGANISMS ============ */
export const organisms = () => `
<section id="organisms">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">07 · Organisms</div>
      <h2 class="h1">The signature layer</h2>
      <p class="lead">
        The components no kit ships. Each one composes already-approved primitives — nothing here reinvents a button or a badge.
        Fire Orange stays emphasis: a tick, an accent, one highlighted value. Never a large fill.
      </p>
    </div>

    <div class="grid-2" style="margin-bottom:20px">
      <div>
        <div class="hud-xs accent" style="margin-bottom:12px">HUD Panel — the signature</div>
        <div class="hudp">
          <div class="hudp__tick"></div>
          <div class="hudp__h"><i class="hudp__sq"></i><span class="hudp__t">Target · Tajik</span>
            <span class="tag tag--accent" style="margin-left:auto">Unreached</span></div>
          <div class="hudr"><span class="hudr__l">Est. pop</span><span class="hudr__v">12,000,000</span></div>
          <div class="hudr"><span class="hudr__l">Gospel access</span><span class="hudr__v hudr__v--a">0.1%</span></div>
          <div class="hudr"><span class="hudr__l">Biome</span><span class="hudr__v"><span class="tag"><i class="tag__sw" style="background:var(--desert)"></i>Desert</span></span></div>
          <div class="hudr"><span class="hudr__l">Coords</span><span class="hudr__v">33.0°N 65.0°E</span></div>
          <div class="hudr"><span class="hudr__l">Access</span><span class="hudr__v">Restricted</span></div>
        </div>
        <p class="body-xs muted" style="margin-top:12px">
          An orange tick on top, a Space Mono title fronted by an orange square, and <code>LABEL : VALUE</code> rows on hairline separators.
          <code>accent</code> highlights the number that matters.
        </p>
      </div>

      <div>
        <div class="hud-xs accent" style="margin-bottom:12px">People Group Card — the dossier</div>
        <article class="pgc">
          <div class="pgc__media">
            <div class="pgc__tags">
              <span class="tag tag--accent">Unreached</span>
              <span class="tag"><i class="tag__sw" style="background:var(--desert)"></i>Desert</span>
            </div>
            <div class="pgc__coords">33.0°N 65.0°E</div>
          </div>
          <div class="pgc__body">
            <div>
              <h4 class="pgc__name">Tajik</h4>
              <div class="pgc__region">Central Asia · Afghanistan, Tajikistan</div>
            </div>
            <div class="pgc__rows">
              <div class="hudr"><span class="hudr__l">Est. pop</span><span class="hudr__v">12,000,000</span></div>
              <div class="hudr"><span class="hudr__l">Gospel access</span><span class="hudr__v hudr__v--a">0.1%</span></div>
            </div>
            <div class="pgc__acts">
              <button class="btn btn--mobilize btn--default btn--sm">Pray now</button>
              <button class="btn btn--operate btn--outline btn--sm">View data</button>
            </div>
          </div>
        </article>
        <p class="body-xs muted" style="margin-top:12px">
          With no photograph, the media area falls back to the brand's topographic texture — <b>never a grey box</b>. Dignity over pity.
          The action pair puts mobilize next to operate.
        </p>
      </div>
    </div>

    <div class="panel" style="margin-bottom:20px">
      <div class="panel__h">Mission Stat — the impossible number</div>
      <div class="panel__b">
        <div class="grid">
          ${[["3.6B", "People with no access to the gospel"], ["7,200+", "Unreached people groups"], ["0.1%", "Gospel access · Tajik"]]
            .map(([v, l]) => `
          <div class="mstat"><i class="mstat__tick"></i><div>
            <div class="mstat__v">${v}</div><div class="mstat__l">${l}</div>
          </div></div>`).join("")}
        </div>
      </div>
    </div>

    <div class="hud-xs accent" style="margin-bottom:12px">Topographic Background — the texture, at 12% opacity</div>
    <div class="topoband">
      <p class="hud-sm muted" style="margin-bottom:14px">Matthew 24:14</p>
      <p class="h2 measure" style="margin-inline:auto">This gospel will be preached<br>to <span class="accent">all nations</span></p>
    </div>
  </div>
</section>`;

/* ============ 09 · PATTERNS ============ */
export const patterns = () => `
<section id="patterns">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">08 · Patterns</div>
      <h2 class="h1">Topographic texture</h2>
      <p class="lead">
        The contour lines are the signature texture. Always present, always quiet —
        <code>--opacity-topographic: 0.12</code>. In Fire Orange on dark they read as contours of fire.
        The two samples below appear at full opacity only to show the drawing; in application, always 12%.
      </p>
    </div>
    <div class="grid-2">
      ${[["pattern-simple.svg", "Simple", "An open mesh. Use it in a section band and behind a card."],
         ["pattern-tile.svg", "Tile", "Dense and repeatable. Use it on a large surface and as an immersive background."]]
        .map(([f, n, d]) => `
      <figure class="logo-card">
        <div style="min-height:230px;background:var(--black) url('${svgDataUri(`assets/patterns/${f}`)}') center/440px repeat"></div>
        <figcaption class="logo-foot">
          <span class="logo-name">${n} — ${d}</span>
          <button class="copybtn" data-copy-svg="assets/patterns/${f}">SVG</button>
        </figcaption>
      </figure>`).join("")}
    </div>
  </div>
</section>`;

/* ============ 10 · VOICE ============ */
const VOICE = [
  ["Urgent", "every sentence leans forward, as if 3.6 billion eternal destinies depend on what happens next", "Panicked or manipulative — never guilt, never manufactured urgency"],
  ["Theologically grounded", "every claim anchored in chapter and verse; precise, Adventist, eschatological", "Preachy or academic — theology as clarity, never a lecture"],
  ["Gritty and authentic", "dust on the lens over studio polish", "Low-budget or careless — the grit is deliberate, executed at Netflix quality"],
  ["Dignifying", "the unreached as proud, ancient cultures worthy of respect", "Pitying or patronizing — never poverty pity"],
  ["Mobilizing", "every piece ends with a clear path to action", "Passive or merely informational"],
  ["Spirit-centered", "the Holy Spirit is the protagonist and the power source", "Human-centered"],
  ["Courageous", "the language of frontier, conviction, holy risk", "Reckless or flippant"],
];
const TERMS = [
  ["Prayer Partner", "supporter, prayer warrior (in formal use)"],
  ["Mission Partner", "donor, giver, contributor"],
  ["the gospel of Jesus", "the name of Jesus"],
  ["unreached people groups", "lost people, the unsaved, pagans"],
  ["spiritual biomes", "mission fields, target areas"],
  ["delegated authority", "prayer power, spiritual warfare"],
  ["the midnight cry", "end-times message"],
  ["investment, partnership", "charity, charitable"],
  ["campaign", "crusade"],
  ["name the region", "third world"],
];

export const voice = () => `
<section id="voice">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">09 · Voice</div>
      <h2 class="h1">How the brand speaks</h2>
      <p class="lead">
        The voice is constant across every channel; the tone flexes by context. If TTE were a person:
        a seasoned field operative, dust on their boots and fire in their prayers, who quotes Scripture
        the way a soldier quotes coordinates — precisely, from memory, because lives depend on it.
      </p>
    </div>

    <div class="panel" style="margin-bottom:20px"><div class="tscroll"><table>
      <thead><tr><th>We are</th><th>We are not</th></tr></thead>
      <tbody>${VOICE.map(([a, d, b]) => `<tr><td><b class="accent">${a}</b> — ${d}</td><td class="muted">${b}</td></tr>`).join("")}</tbody>
    </table></div></div>

    <div class="grid-2">
      <div class="panel">
        <div class="panel__h">Terminology</div>
        <div class="panel__b"><div class="kv">
          ${TERMS.map(([a, b]) => `<div class="kv__r"><span class="kv__a">${a}</span><span class="kv__b">${b}</span></div>`).join("")}
        </div></div>
      </div>
      <div class="panel">
        <div class="panel__h">Editorial rules</div>
        <div class="panel__b"><ul class="rules rules--do">
          <li data-m="+">Never use emdashes</li>
          <li data-m="+">Never use negative sentence structures (“we're not X, we're Y”) — always frame positively</li>
          <li data-m="+">Do not waffle; every sentence earns its place</li>
          <li data-m="+">Vary the rhythm of paragraphs</li>
          <li data-m="+">Strengthen theology with chapter and verse</li>
          <li data-m="+">Write for sophisticated donors (“further reduces”, not “reduces”)</li>
          <li data-m="+">Close with theological depth</li>
          <li data-m="+">Use Problem-Agitate-Solution for donor communications</li>
          <li data-m="+">Lead to action with a micro-commitment: Pray / Give / Learn</li>
        </ul></div>
      </div>
    </div>
  </div>
</section>`;

/* ============ 11 · IMAGERY ============ */
export const imagery = () => `
<section id="imagery">
  <div class="wrap">
    <div class="sec-head">
      <div class="eyebrow">10 · Imagery</div>
      <h2 class="h1">Imagery system</h2>
      <p class="lead">
        Editorial expedition photography. The soul of National Geographic, the attitude of Arc'teryx,
        the urgency of a dispatch from the field. Every image passes two tests before it exists.
      </p>
    </div>

    <div class="grid-2" style="margin-bottom:26px">
      ${[["The Movement Test", "Does this look like something a young adult would wear on a t-shirt — or like a donation button? If it looks like church, it fails."],
         ["The Pulse Test", "Does this raise the viewer's heart rate? It should feel urgent and slightly unsettling. Never comforting."]]
        .map(([t, d]) => `
      <div class="panel" style="border-color:var(--orange)"><div class="panel__b">
        <h3 class="h4 accent" style="margin-bottom:11px">${t}</h3>
        <p class="body-sm" style="color:#D3D1C7">${d}</p>
      </div></div>`).join("")}
    </div>

    <h3 class="h4" style="margin-bottom:18px">The four narrative layers</h3>
    <div class="grid" style="margin-bottom:34px">
      ${[["01", "The Scale", "16–24mm", "Extreme wide. The human figure fills 5% to 15% of the frame; the environment dominates. Makes the mission feel impossible."],
         ["02", "The Stillness", "50–85mm", "The subject tack-sharp against blurred chaos, eyes closed in prayer. The calm before breakthrough."],
         ["03", "The POV", "24–35mm", "Handheld first person, motion blur welcome. Places the viewer inside the mission."],
         ["04", "The HUD", "85–135mm", "Tight portrait with Space Mono data overlaid: TARGET, EST. POP, STATUS, ACCESS, BIOME, COORDS. Makes the statistic human."]]
        .map(([n, t, lens, d]) => `
      <div class="panel"><div class="panel__b">
        <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:11px">
          <span class="hud-xs accent">${n}</span><span class="hud-xs muted">${lens}</span>
        </div>
        <h4 class="h4" style="margin-bottom:11px">${t}</h4>
        <p class="body-xs muted">${d}</p>
      </div></div>`).join("")}
    </div>

    <div class="grid-2">
      <div class="panel"><div class="panel__h">Always</div><div class="panel__b"><ul class="rules rules--do">
        <li data-m="+">Real people in real contexts, dignity over pity</li>
        <li data-m="+">Topographic overlay present</li>
        <li data-m="+">HUD data present, at least partially</li>
        <li data-m="+">One emphasis word in orange in the headline</li>
        <li data-m="+">Natural light, golden hour, film grain (Portra 400)</li>
        <li data-m="+">Desaturated 15–25%, shadows leaning amber or teal</li>
        <li data-m="+">Warm White <code>#F4F3F1</code> as the only white — never pure white</li>
      </ul></div></div>
      <div class="panel"><div class="panel__h">Never</div><div class="panel__b"><ul class="rules rules--dont">
        <li data-m="x">Generic stock or staged poses</li>
        <li data-m="x">Studio light, ring light, oversaturated filters</li>
        <li data-m="x">“Hands raised” or “cross in sunset” clichés</li>
        <li data-m="x">Poverty tourism</li>
        <li data-m="x">AI-generated people as primary imagery</li>
        <li data-m="x">Western-savior framing</li>
        <li data-m="x">Pure black in the shadows</li>
      </ul></div></div>
    </div>

    <div class="panel" style="margin-top:20px"><div class="panel__h">Quality gates — every visual asset passes all four</div><div class="panel__b">
      <div class="grid">
        ${[["Movement Test", "Looks like a lifestyle brand, not a donation button"],
           ["Pulse Test", "Raises the heart rate; urgent, not comforting"],
           ["Mobilization Trigger", "Makes the viewer feel “I have to pray / do something”"],
           ["Scroll-Stopper", "Stops the scroll within 10 seconds"]]
          .map(([t, d], i) => `
        <div><div class="hud-xs accent" style="margin-bottom:7px">0${i + 1}</div>
        <div class="lbl-md" style="margin-bottom:7px">${t}</div>
        <p class="body-xs muted">${d}</p></div>`).join("")}
      </div>
    </div></div>
  </div>
</section>`;

export const footer = () => `
<footer><div class="wrap">
  <div style="display:flex;flex-wrap:wrap;gap:18px;align-items:center;justify-content:space-between">
    <div style="width:120px;opacity:.65">${inlineSvg("assets/logos/wordmark/horizontal-white.svg")}</div>
    <div style="text-align:right;line-height:1.9">
      <div>TTE Brand Kit · single file · generated from tte-brand-system</div>
      <div>Hope Channel International · 39.0560 N 76.9634 W</div>
    </div>
  </div>
</div></footer>`;
