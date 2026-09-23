import { readB64, svgDataUri } from "./lib.mjs";

const mona = readB64("assets/fonts/MonaSans-Variable.woff2");
const monoR = readB64("assets/fonts/SpaceMono-Regular.woff2");
const monoB = readB64("assets/fonts/SpaceMono-Bold.woff2");
const topo = svgDataUri("assets/patterns/pattern-simple.svg");

export const css = `
/* The brand's real fonts, embedded — the file needs no network. */
@font-face{font-family:'Mona Sans';src:url(data:font/woff2;base64,${mona}) format('woff2');font-weight:200 900;font-display:swap}
@font-face{font-family:'Space Mono';src:url(data:font/woff2;base64,${monoR}) format('woff2');font-weight:400;font-display:swap}
@font-face{font-family:'Space Mono';src:url(data:font/woff2;base64,${monoB}) format('woff2');font-weight:700;font-display:swap}

:root{
  --orange:#FE5442; --black:#28272A; --white:#FFFFFF; --grey:#949494;
  --ink:#1C1B1E; --ink-2:#232226; --line:rgba(255,255,255,.14); --line-2:rgba(255,255,255,.08);
  --desert:#B86C55; --arctic:#7BA7BC; --city:#4A4A52; --forest:#2D5A3D;
  --hc-blue:#264CA3; --hc-yellow:#FAD306;
  --opacity-topographic:.12;
  --mona:'Mona Sans',system-ui,sans-serif; --mono:'Space Mono',ui-monospace,monospace;
  --wrap:1220px; --topo:url("${topo}");
}

*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;border-radius:0}
html{scroll-behavior:smooth;scroll-padding-top:76px}
body{
  background:var(--ink);color:var(--white);font-family:var(--mono);
  font-size:15px;line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden;
}
img,svg{display:block;max-width:100%}
p,li,td,th,dd,dt{overflow-wrap:anywhere}
a{color:inherit}
button{font:inherit;color:inherit;background:none;border:none;cursor:pointer}
:focus-visible{outline:2px solid var(--orange);outline-offset:2px}

/* ---------- brand typography ---------- */
.mona{font-family:var(--mona)}
.d2xl{font-family:var(--mona);font-size:clamp(48px,9vw,96px);font-weight:900;line-height:.95;letter-spacing:.02em;text-transform:uppercase}
.dxl {font-family:var(--mona);font-size:clamp(40px,7vw,72px);font-weight:900;line-height:.95;letter-spacing:.02em;text-transform:uppercase}
.dl  {font-family:var(--mona);font-size:clamp(34px,6vw,60px);font-weight:800;line-height:1;letter-spacing:.02em;text-transform:uppercase}
.h1  {font-family:var(--mona);font-size:clamp(30px,5vw,48px);font-weight:800;line-height:1.05;letter-spacing:.01em;text-transform:uppercase}
.h2  {font-family:var(--mona);font-size:clamp(26px,4vw,36px);font-weight:800;line-height:1.1;letter-spacing:.01em;text-transform:uppercase}
.h3  {font-family:var(--mona);font-size:28px;font-weight:700;line-height:1;letter-spacing:.01em;text-transform:uppercase}
.h4  {font-family:var(--mona);font-size:22px;font-weight:700;line-height:1;letter-spacing:.02em;text-transform:uppercase}
.lbl-lg{font-family:var(--mona);font-size:16px;font-weight:800;line-height:1;letter-spacing:.04em;text-transform:uppercase}
.lbl-md{font-family:var(--mona);font-size:13px;font-weight:800;line-height:1;letter-spacing:.04em;text-transform:uppercase}
.mona-body{font-family:var(--mona);font-size:16px;font-weight:500;line-height:1.2}
.mona-body-sm{font-family:var(--mona);font-size:14px;font-weight:500;line-height:1.2}
.hud-xl{font-family:var(--mono);font-size:20px;font-weight:700;line-height:1.2;letter-spacing:.06em;text-transform:uppercase}
.hud   {font-family:var(--mono);font-size:14px;font-weight:400;line-height:1.2;letter-spacing:.06em;text-transform:uppercase}
.hud-sm{font-family:var(--mono);font-size:12px;font-weight:400;line-height:1.2;letter-spacing:.06em;text-transform:uppercase}
.hud-xs{font-family:var(--mono);font-size:10px;font-weight:400;line-height:1.2;letter-spacing:.06em;text-transform:uppercase}
.body  {font-family:var(--mono);font-size:16px;line-height:1.4;letter-spacing:.01em}
.body-sm{font-family:var(--mono);font-size:14px;line-height:1.4;letter-spacing:.01em}
.body-xs{font-family:var(--mono);font-size:12px;line-height:1.6;letter-spacing:.01em}
.mono-label{font-family:var(--mono);font-size:12px;font-weight:700;line-height:1.4;letter-spacing:.03em;text-transform:uppercase}
.accent{color:var(--orange)}
.muted{color:var(--grey)}
.measure{max-width:68ch}

/* ---------- shell ---------- */
.wrap{width:100%;max-width:var(--wrap);margin-inline:auto;padding-inline:20px}
@media(min-width:768px){.wrap{padding-inline:40px}}

.topbar{
  position:sticky;top:0;z-index:50;background:rgba(28,27,30,.92);
  backdrop-filter:blur(12px);border-bottom:1px solid var(--line);
}
.topbar__in{display:flex;align-items:center;gap:16px;height:60px;min-width:0}
.topbar__mark{width:30px;flex:none}
.topbar__name{font-family:var(--mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--grey);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
@media(max-width:720px){.topbar__name{display:none}}
.navscroll{margin-left:auto;overflow-x:auto;overscroll-behavior-x:contain;scrollbar-width:none;min-width:0;flex:1 1 auto}
.navscroll::-webkit-scrollbar{display:none}
.nav{display:flex;gap:2px}
.nav a{
  padding:8px 11px;font-family:var(--mono);font-size:11px;letter-spacing:.08em;
  text-transform:uppercase;color:var(--grey);text-decoration:none;white-space:nowrap;
  border-bottom:2px solid transparent;transition:color .18s,border-color .18s;
}
.nav a:hover{color:var(--white)}
.nav a.is-active{color:var(--orange);border-bottom-color:var(--orange)}

section{padding-block:clamp(56px,8vw,104px);border-top:1px solid var(--line-2);scroll-margin-top:70px}
section:first-of-type{border-top:none}
.eyebrow{
  display:flex;align-items:center;gap:10px;margin-bottom:18px;
  font-family:var(--mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--orange);
}
.eyebrow::before{content:'';width:22px;height:2px;background:var(--orange);flex:none}
.lead{margin-top:18px;color:var(--grey);max-width:68ch;font-size:15px;line-height:1.6}
.sec-head{margin-bottom:44px}

/* ---------- grids and cards ---------- */
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(min(260px,100%),1fr))}
.grid-2{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(min(340px,100%),1fr))}
.panel{border:1px solid var(--line);background:var(--ink-2)}
.panel__h{
  display:flex;align-items:center;justify-content:space-between;gap:12px;
  padding:11px 16px;border-bottom:1px solid var(--line);
  font-family:var(--mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--grey);
}
.panel__b{padding:20px}

/* ---------- logos ---------- */
.logo-card{border:1px solid var(--line);background:var(--ink-2);display:flex;flex-direction:column}
.logo-stage{
  flex:1;display:grid;place-items:center;padding:30px 24px;min-height:150px;position:relative;
}
.logo-stage svg{width:100%;height:auto;max-height:86px}
.logo-stage--light{background:var(--white)}
.logo-stage--dark{background:var(--black)}
.logo-stage--photo{background:var(--black);position:relative}
.logo-stage--photo::before{
  content:'';position:absolute;inset:0;background:var(--topo) center/560px repeat;
  opacity:var(--opacity-topographic);pointer-events:none;
}
.logo-stage--photo>svg{position:relative;z-index:1}
.logo-foot{
  display:flex;align-items:center;justify-content:space-between;gap:10px;
  padding:10px 14px;border-top:1px solid var(--line);
}
.logo-name{font-family:var(--mono);font-size:10.5px;letter-spacing:.07em;text-transform:uppercase;color:var(--grey);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.copybtn{
  flex:none;padding:5px 9px;border:1px solid var(--line);
  font-family:var(--mono);font-size:9.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--grey);
  transition:color .18s,border-color .18s,background-color .18s;
}
.copybtn:hover{color:var(--orange);border-color:var(--orange)}
.copybtn.ok{color:var(--black);background:var(--orange);border-color:var(--orange)}

/* ---------- color ---------- */
.sw{border:1px solid var(--line);display:flex;flex-direction:column}
.sw__chip{height:112px;position:relative}
.sw__meta{padding:13px 15px;background:var(--ink-2);display:grid;gap:5px}
.sw__name{font-family:var(--mona);font-size:14px;font-weight:800;letter-spacing:.04em;text-transform:uppercase}
.sw__hex{font-family:var(--mono);font-size:12px;letter-spacing:.06em;color:var(--orange);text-transform:uppercase}
.sw__use{font-family:var(--mono);font-size:11px;line-height:1.5;color:var(--grey)}

table{width:100%;border-collapse:collapse;font-family:var(--mono);font-size:12.5px}
th,td{padding:10px 13px;text-align:left;border-bottom:1px solid var(--line-2);vertical-align:top}
th{font-size:10.5px;letter-spacing:.11em;text-transform:uppercase;color:var(--orange);font-weight:700;white-space:nowrap}
td code{font-size:12px;color:var(--white)}
.tscroll{overflow-x:auto}
.pill{
  display:inline-flex;align-items:center;gap:5px;padding:2px 7px;border:1px solid currentColor;
  font-family:var(--mono);font-size:9.5px;letter-spacing:.09em;text-transform:uppercase;white-space:nowrap;
}
.pill--pass{color:#5FD08A}
.pill--fail{color:var(--orange)}
.ratio{font-variant-numeric:tabular-nums;font-weight:700}

/* ---------- specimens ---------- */
.spec{display:grid;gap:8px;padding:22px 0;border-bottom:1px solid var(--line-2)}
.spec:last-child{border-bottom:none}
.spec__meta{
  display:flex;flex-wrap:wrap;gap:6px 16px;font-family:var(--mono);font-size:10px;
  letter-spacing:.09em;text-transform:uppercase;color:var(--grey);
}
.spec__meta b{color:var(--orange);font-weight:400}
.spec__demo{overflow-x:auto}

/* ---------- components ---------- */
.btn{
  display:inline-flex;align-items:center;justify-content:center;gap:9px;
  height:44px;padding-inline:22px;border:1px solid transparent;text-transform:uppercase;
  text-decoration:none;white-space:nowrap;transition:background-color .18s,border-color .18s,color .18s;
}
.btn--mobilize{font-family:var(--mona);font-size:14px;font-weight:800;letter-spacing:.04em}
.btn--operate {font-family:var(--mono);font-size:12px;font-weight:700;letter-spacing:.08em}
.btn--lg{height:56px;padding-inline:30px;font-size:16px}
.btn--sm{height:36px;padding-inline:15px;font-size:11px}
.btn--icon{width:44px;padding:0}
.btn--default{background:var(--orange);color:var(--white)}
.btn--default:hover{background:#E04030}
.btn--outline{border-color:rgba(255,255,255,.3);color:var(--white)}
.btn--outline:hover{border-color:var(--orange);color:var(--orange)}
.btn--secondary{background:rgba(255,255,255,.1);color:var(--white)}
.btn--secondary:hover{background:rgba(255,255,255,.18)}
.btn--ghost{color:var(--white)}
.btn--ghost:hover{background:rgba(255,255,255,.1)}
.btn--link{color:var(--orange);text-decoration:underline;text-underline-offset:4px;padding-inline:0;height:auto}
.btn--inverted{background:var(--white);color:var(--black)}
.btn--inverted:hover{background:#E8E6E1}
.btn[disabled]{opacity:.4;pointer-events:none}
.row{display:flex;flex-wrap:wrap;gap:12px;align-items:center}

.tag{
  display:inline-flex;align-items:center;gap:6px;padding:4px 9px;border:1px solid var(--line);
  font-family:var(--mono);font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:var(--white);
}
.tag--accent{border-color:var(--orange);color:var(--orange)}
.tag--solid{background:var(--orange);border-color:var(--orange);color:var(--white)}
.tag__sw{width:9px;height:9px;flex:none}

.field{display:grid;gap:8px;max-width:340px}
.field label{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--grey)}
.inp{
  height:44px;padding:0 14px;background:transparent;border:1px solid rgba(255,255,255,.3);
  color:var(--white);font-family:var(--mono);font-size:14px;width:100%;
}
.inp:focus{outline:none;border-color:var(--orange)}
.inp::placeholder{color:rgba(255,255,255,.3)}

.tabs{display:flex;gap:26px;border-bottom:1px solid var(--line);overflow-x:auto;scrollbar-width:none}
.tabs::-webkit-scrollbar{display:none}
.tabs button{
  flex:none;padding:11px 0;font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;
  color:var(--grey);border-bottom:2px solid transparent;margin-bottom:-1px;transition:color .18s,border-color .18s;
}
.tabs button:hover{color:var(--white)}
.tabs button[aria-selected=true]{color:var(--orange);border-bottom-color:var(--orange)}

/* ---------- organisms ---------- */
.hudp{border:1px solid var(--orange);background:var(--black);box-shadow:0 0 24px rgba(254,84,66,.2)}
.hudp__tick{height:2px;background:var(--orange)}
.hudp__h{display:flex;align-items:center;gap:9px;padding:13px 16px;border-bottom:1px solid var(--line)}
.hudp__sq{width:8px;height:8px;background:var(--orange);flex:none}
.hudp__t{font-family:var(--mono);font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
.hudr{display:flex;align-items:baseline;justify-content:space-between;gap:16px;padding:9px 16px;border-bottom:1px solid var(--line-2)}
.hudr:last-child{border-bottom:none}
.hudr__l{font-family:var(--mono);font-size:10px;letter-spacing:.09em;text-transform:uppercase;color:var(--grey)}
.hudr__v{font-family:var(--mono);font-size:13px;letter-spacing:.05em;text-transform:uppercase;text-align:right}
.hudr__v--a{color:var(--orange);font-weight:700}

.pgc{border:1px solid var(--line);background:var(--ink-2);display:flex;flex-direction:column}
.pgc__media{
  position:relative;min-height:190px;padding:18px;display:flex;flex-direction:column;justify-content:space-between;
  background:var(--black);
}
.pgc__media::before{
  content:'';position:absolute;inset:0;background:var(--topo) center/440px repeat;
  opacity:var(--opacity-topographic);pointer-events:none;
}
.pgc__media>*{position:relative;z-index:1}
.pgc__tags{display:flex;gap:7px;flex-wrap:wrap}
.pgc__coords{font-family:var(--mono);font-size:10px;letter-spacing:.08em;color:var(--grey)}
.pgc__body{padding:18px;display:grid;gap:14px}
.pgc__name{font-family:var(--mona);font-size:26px;font-weight:800;letter-spacing:.01em;text-transform:uppercase;line-height:1}
.pgc__region{font-family:var(--mono);font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--grey);margin-top:5px}
.pgc__rows{border-block:1px solid var(--line-2)}
.pgc__rows .hudr{padding-inline:0}
.pgc__acts{display:flex;gap:10px;flex-wrap:wrap}

.mstat{display:flex;gap:14px;align-items:flex-start}
.mstat__tick{width:4px;align-self:stretch;min-height:52px;background:var(--orange);flex:none}
.mstat__v{font-family:var(--mona);font-size:clamp(36px,6vw,60px);font-weight:900;line-height:.95;letter-spacing:.02em;text-transform:uppercase}
.mstat__l{font-family:var(--mono);font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--grey);margin-top:7px}

.topoband{
  position:relative;padding:52px 28px;border:1px solid var(--line);
  background:var(--black);text-align:center;
}
.topoband::before{
  content:'';position:absolute;inset:0;background:var(--topo) center/520px repeat;
  opacity:var(--opacity-topographic);pointer-events:none;
}
.topoband>*{position:relative;z-index:1}

/* ---------- code ---------- */
.codewrap{position:relative;border:1px solid var(--line);background:#141316}
.codewrap pre{
  margin:0;padding:18px;overflow:auto;max-height:440px;
  font-family:var(--mono);font-size:11.5px;line-height:1.65;color:#D3D1C7;white-space:pre;
}
.codewrap .copybtn{position:absolute;top:10px;right:10px;background:#141316;z-index:2}

/* ---------- do / don't lists ---------- */
.rules{display:grid;gap:11px;list-style:none}
.rules li{display:flex;gap:11px;align-items:flex-start;font-size:13.5px;line-height:1.55}
.rules li::before{
  content:attr(data-m);flex:none;width:19px;height:19px;display:grid;place-items:center;margin-top:1px;
  font-family:var(--mono);font-size:11px;font-weight:700;border:1px solid currentColor;
}
.rules--do li{color:#C9E4CE}.rules--do li::before{color:#5FD08A}
.rules--dont li{color:#F0CFCB}.rules--dont li::before{color:var(--orange)}

.kv{display:grid;gap:0}
.kv__r{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding:11px 0;border-bottom:1px solid var(--line-2)}
.kv__r:last-child{border-bottom:none}
.kv__a{color:#7BD7A0;font-size:13px}
.kv__b{color:var(--grey);font-size:13px;text-decoration:line-through;text-decoration-color:rgba(254,84,66,.6)}

footer{padding-block:44px;border-top:1px solid var(--line);color:var(--grey);font-size:11px;letter-spacing:.07em;text-transform:uppercase}

@media(prefers-reduced-motion:reduce){
  *,*::before,*::after{animation-duration:.001ms!important;transition-duration:.001ms!important;scroll-behavior:auto!important}
}
@media print{.topbar{display:none}body{background:#fff;color:#000}}
`;
