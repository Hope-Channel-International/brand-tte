# To The Ends of The Earth

TTE mobilizes a global community of prayer partners and investors for the least reached
peoples on the planet. A sub-brand of Hope Channel International, archetype Explorer ×
Hero, theological engine Acts 1:8.

The brand lives in a tension: the statistic feels impossible — 3.6 billion people with no
access to the gospel — and the theology says the outcome is inevitable (Matthew 24:14).
Everything this system produces has to carry that tension. The feeling to produce is
intense, gritty and spiritually weighty: take the viewer out of the safety of their screen
and put them on the front line of the impossible.

## The six rules that never break

1. **Color.** `fire-orange` is maximum emphasis — CTAs, the wordmark accent, the icon's
   wing, HUD labels. Never a dominant background on a long layout. `black` is the default
   immersive background. `white` is for editorial layouts and text on dark.
2. **Typography.** Only Mona Sans and Space Mono. No other typeface, ever. Mona Sans is
   UPPERCASE in all display use.
3. **Radius.** `radius-default` is `0px` on everything. The brand is angular and tactical.
   The one exception is `radius-full`, for circular avatars and radio buttons.
4. **Tokens, never raw hex.** Every color and type decision references a token.
5. **Two distinct palettes.** Identity (logo, type, UI): white is pure `#FFFFFF`.
   Imagery (photography): white is Warm White `#F4F3F1`. No TTE photograph contains pure
   white — the light is always earned, dirty, real.
6. **Hope Channel lockup** present on all official material, as a co-brand or as the
   "Powered by Hope Channel" endorsement.

## Content fundamentals

### The voice
Urgent, anchored in Scripture, gritty, dignifying, mobilizing, Spirit-centered,
courageous. If TTE were a person: a seasoned field operative, dust on their boots and fire
in their prayers, who quotes Scripture the way a soldier quotes coordinates — precisely,
from memory, because lives depend on it.

The **Voice** section carries the full we-are / we-are-not table, the required terminology
and the eleven editorial rules.

### The five message pillars
1. **The prophetic certainty** — Matthew 24:14 is a royal decree. The gospel will reach
   every people group.
2. **The impossible tension** — the statistic against the prophecy.
3. **Prayer as delegated authority** — intercession gives God legitimate ground to act.
4. **The Holy Spirit as power source** — the center of gravity of all content.
5. **Beautiful feet on digital roads** — a government can expel a missionary; it cannot
   stop a video.

### Editorial rules that always apply
Never use emdashes. Never use negative sentence structures ("we're not X, we're Y") —
frame positively. Every sentence earns its place. Strengthen theology with chapter and
verse. Close with a micro-commitment: Pray, Give, Learn.

## Visual foundations

### Color
The primary palette is three colors and a neutral. The four biome accents are secondary
and are marked **pending final approval** upstream: they appear as a swatch inside a tag,
never as a fill and never as a rival to `fire-orange`.

Contrast, measured from the real values:

| Pair | Ratio | Normal text | Large text / non-text |
|---|---|---|---|
| `ink` on `surface` (both themes) | 14.85:1 | passes | passes |
| `fire-orange` on `black` | 4.64:1 | passes | passes |
| `white` on `fire-orange` | 3.20:1 | **fails** | passes |
| `black` on `fire-orange` | 4.64:1 | passes | passes |
| `grey` on `black` | 4.90:1 | passes | passes |
| `grey` on `white` | 3.03:1 | **fails** | passes |

The brand's primary CTA is a `fire-orange` fill with a `white` label — 3.20:1. The Button
spec records this as an open follow-up and names the way out: a dark label on orange
measures 4.64:1. **The failing pair was kept because it is the approved brand decision**;
each token's note says where that color is safe.

### Typography
Mona Sans mobilizes, Space Mono operates. Mona Sans is the voice — display, headings, the
emotional moments. Space Mono is the instrument — HUD, data, coordinates, controls. That
split runs all the way down to the button, on the `intent` axis.

The only documented exception to Mona Sans uppercase is `mona-body` and `mona-body-sm`, in
sentence case, for longer reading.

Line height below 100% in display is intentional: it makes a compact editorial block.
Wide tracking in Space Mono is intentional: it reinforces the data-readout feel.

### Space, form and elevation
A 4px base scale, from `space-0` to `space-32`. Page margin: `space-4` on mobile,
`space-8` on tablet, `space-16` on desktop; `space-24` between sections.

One height scale governs every interactive control — `sizing-control-sm` 36px,
`sizing-control-default` 44px, `sizing-control-lg` 56px — so that "default" means the same
thing in Button, Input and Select.

A border is the default; a shadow is the exception, used only when an element floats above
another plane. `elevation-hud` is the orange glow that signs the HUD panel.

### Iconography
The brand's symbol is a bird in flight: a dove (the Holy Spirit) fused with a flame
(Pentecost). Body in `black`, defining wing in `fire-orange`, oriented forward and upward.
Four variants in the **Logos** asset group, under the `mark-` prefix.

Interface icons are **Lucide**, with their rounded terminals preserved — the system's
documented radius exception. An icon on light uses `icon-dark`; on dark, `icon-light`; an
action icon uses `icon-primary`.

Logo clearspace equals the height of the "T" in the wordmark. White logo on dark or
photography; black logo on light. Never distort, rotate, recolor outside the approved
variants, or separate the icon from the wordmark in a combined lockup.

## Imagery

Editorial expedition photography: the soul of National Geographic, the attitude of
Arc'teryx, the urgency of a dispatch from the field. Four narrative layers — The Scale,
The Stillness, The POV, The HUD. The **Imagery** section carries the full specification,
the color grading and the always / never lists.

Every visual asset passes four gates before it exists: Movement Test, Pulse Test,
Mobilization Trigger and Scroll-Stopper.

## How to use this system

Start with the tokens. No component defines a color, size, space or shape outside them.
The components below show how each primitive behaves, and the five organisms that exist
only in this brand: HUD Panel, People Group Card, Mission Stat, Biome Badge and
Topographic Background.

Source of truth: `tte-brand-system`, and Figma at
`figma.com/design/QJpddccb8biAnsDiSKjcNf/To-The-Ends-of-The-Earth`.
