import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { ROOT, read, list, inlineSvg } from "./lib.mjs";
import { css } from "./css.mjs";
import { cover, rules, logos, color } from "./sections-a.mjs";
import { typography, tokens, components, organisms, patterns, voice, imagery, footer } from "./sections-b.mjs";

const NAV = [
  ["cover", "Cover"], ["rules", "Rules"], ["logos", "Logos"], ["color", "Color"],
  ["typography", "Typography"], ["tokens", "Tokens"], ["components", "Components"],
  ["organisms", "Organisms"], ["patterns", "Patterns"], ["voice", "Voice"], ["imagery", "Imagery"],
];

/** Map of path -> raw SVG, so the copy button hands over the original file. */
const svgSources = {};
for (const dir of ["assets/logos/mark", "assets/logos/wordmark", "assets/logos/complete", "assets/logos/hope-channel", "assets/patterns"]) {
  for (const f of list(dir)) svgSources[`${dir}/${f}`] = read(`${dir}/${f}`);
}

const js = `
(function () {
  var SVG = window.__TTE_SVG__ || {};

  function flash(btn, label) {
    var prev = btn.textContent;
    btn.textContent = label; btn.classList.add('ok');
    setTimeout(function () { btn.textContent = prev; btn.classList.remove('ok'); }, 1400);
  }
  function copy(text, btn) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(function () { flash(btn, 'Copiado'); },
        function () { flash(btn, 'Falhou'); });
      return;
    }
    var ta = document.createElement('textarea');
    ta.value = text; ta.setAttribute('readonly', '');
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); flash(btn, 'Copiado'); }
    catch (e) { flash(btn, 'Falhou'); }
    document.body.removeChild(ta);
  }

  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-copy-svg]');
    if (b) { copy(SVG[b.getAttribute('data-copy-svg')] || '', b); return; }
    var p = e.target.closest('[data-copy-pane]');
    if (p) {
      var pane = document.querySelector('[data-pane="' + p.getAttribute('data-copy-pane') + '"] code');
      copy(pane ? pane.textContent : '', p);
    }
  });

  // Tabs: one group per [data-tabs], panes by [data-pane].
  document.querySelectorAll('[data-tabs]').forEach(function (group) {
    var btns = Array.prototype.slice.call(group.querySelectorAll('[data-tab]'));
    function show(id) {
      btns.forEach(function (b) { b.setAttribute('aria-selected', String(b.getAttribute('data-tab') === id)); });
      btns.forEach(function (b) {
        var pane = document.querySelector('[data-pane="' + b.getAttribute('data-tab') + '"]');
        if (pane) pane.hidden = b.getAttribute('data-tab') !== id;
      });
    }
    group.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tab]'); if (b) show(b.getAttribute('data-tab'));
    });
    group.addEventListener('keydown', function (e) {
      var i = btns.indexOf(document.activeElement); if (i < 0) return;
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : -1;
      if (n < 0) return;
      e.preventDefault();
      var t = btns[(n + btns.length) % btns.length];
      t.focus(); show(t.getAttribute('data-tab'));
    });
    var first = btns.find(function (b) { return b.getAttribute('aria-selected') === 'true'; }) || btns[0];
    if (first) show(first.getAttribute('data-tab'));
  });

  // Nav: marks the visible section.
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  var byId = {}; links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      links.forEach(function (a) { a.classList.remove('is-active'); });
      var a = byId[en.target.id]; if (a) { a.classList.add('is-active'); }
    });
  }, { rootMargin: '-64px 0px -70% 0px', threshold: 0 });
  document.querySelectorAll('section[id]').forEach(function (s) { io.observe(s); });
})();
`;

const html = `<!doctype html>
<html lang="pt-BR" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>TTE Brand Kit</title>
<meta name="description" content="Complete brand kit for To The Ends of The Earth: tokens, logos, typography, components and rules, in a single self-contained file.">
<style>${css}</style>
</head>
<body>

<header class="topbar"><div class="wrap topbar__in">
  <span class="topbar__mark">${inlineSvg("assets/logos/mark/mark-full-white.svg")}</span>
  <span class="topbar__name">To the ends of the earth · brand kit</span>
  <div class="navscroll"><nav class="nav">
    ${NAV.map(([id, label]) => `<a href="#${id}">${label}</a>`).join("")}
  </nav></div>
</div></header>

<main>
${cover()}
${rules()}
${logos()}
${color()}
${typography()}
${tokens()}
${components()}
${organisms()}
${patterns()}
${voice()}
${imagery()}
</main>

${footer()}

<script>window.__TTE_SVG__=${JSON.stringify(svgSources)};</script>
<script>${js}</script>
</body>
</html>`;

const out = resolve(ROOT, "tte-brand-kit.html");
writeFileSync(out, html, "utf8");
console.log(`tte-brand-kit.html  ${(Buffer.byteLength(html) / 1024).toFixed(0)} KB`);
console.log(`  sections: ${NAV.length}`);
console.log(`  embedded SVGs: ${Object.keys(svgSources).length}`);
