# Badge

The HUD tag. A short status label, always Space Mono uppercase, always
`radius-default` 0.

## Tones

`neutral` uses `border-default` at low opacity over `surface` — the default, for a status
without weight. `accent` uses `border-accent` and `text-accent` — for the status that
matters. `solid` fills with `surface-accent` and takes a light label, reserved for "live"
and counts that need to jump.

## Rules

A badge hugs its own content. If it fills the whole line, it has become an alert or a
banner, and it is no longer a badge.

Color is never the only channel. When a badge communicates a state, the text already says
which one — `UNREACHED`, `RESTRICTED`, `LIVE`. When a biome swatch enters, it is the
second piece of information, never the only one: see **Biome Badge**.

## Typography

`mono-label` 12px Bold with 3% tracking, or `hud-micro` 10px when the badge lives inside
another dense component. Never Mona Sans: a badge is data, not voice.

## Consumption

The consumer provides the text. Keep it to one or two words; a badge is not a sentence.
