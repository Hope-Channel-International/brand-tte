# Button

A TTE button carries the brand on two independent axes: `intent` decides the typeface by
the button's role, `variant` decides the visual treatment, `size` decides the height.

## `intent` — the TTE-specific axis

The principle that governs everything: **Mona Sans mobilizes, Space Mono operates.** It
extends the brand's existing type logic down to the button — Mona Sans is the voice,
Space Mono is the HUD.

| `intent` | Typeface | Meaning | Use for |
|---|---|---|---|
| `mobilize` *(default)* | Mona Sans ExtraBold, 4% tracking | **The voice.** The brand speaking, calling someone to act. | Pray, Give, Join, Partner. Hero CTAs, campaign buttons, the loud emotional moments. |
| `operate` | Space Mono Bold, 8% tracking | **The instrument.** A control you operate once you are inside. | Filter, Export, View data, Next. Buttons inside HUD panels, tables and toolbars. |

`mobilize` is the default, so any unmarked button lands on the brand voice — the safe
choice. `operate` is chosen deliberately. **Never cross the wires:** a "Pray now" in Space
Mono, or a table "Filter" in Mona Sans, breaks the system.

The prop is named `intent`, not `role`, because `role` is a native ARIA attribute on
`<button>` and must stay free for accessibility.

## `variant`

| `variant` | Treatment | Note |
|---|---|---|
| `default` | `fire-orange` fill, `white` label | **Maximum emphasis, CTAs only.** Never a passive surface. |
| `outline` | Transparent, 30% foreground border, turns `fire-orange` on hover | The workhorse on dark surfaces. |
| `secondary` | Low-opacity fill | Quiet, supporting actions. |
| `ghost` | No chrome until hover | Toolbars and dense UI. |
| `link` | `fire-orange` underline | Inline, text-like. |
| `inverted` | Solid `white` fill, dark label | For placement over photography. |

## `size`

`lg` 56px (`sizing-control-lg`), `default` 44px (`sizing-control-default`), `sm` 36px
(`sizing-control-sm`), plus `icon` 44×44 and `icon-sm` 36×36. Size is independent of
intent, but the natural pairing is: the voice tends large, the instrument tends small.

## Invariants

`radius-default` 0 on every button. UPPERCASE always, in both typefaces. `fire-orange`
only on `variant="default"` — it is maximum emphasis, never a resting surface.

## Accessibility

A 44×44 target at the default size and for `icon`. An icon-only button requires an
`aria-label`. The focus ring uses `border-accent`, 2px with a 2px offset.

**Contrast:** `white` on `fire-orange` measures **3.20:1** — it passes as large or bold
text and fails as normal text (4.5:1). This is the approved brand decision for the primary
CTA and is recorded as an open follow-up upstream. The documented way out, if WCAG AA for
normal text becomes a hard requirement, is a dark label: `black` on `fire-orange` measures
4.64:1. The other variants pass comfortably.

## Consumption

The consumer provides the label content and, where present, the icon (Lucide). The
component sets no outer margin — the container does the positioning.
