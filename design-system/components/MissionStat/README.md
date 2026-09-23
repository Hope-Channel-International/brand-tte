# Mission Stat

The impossible number. Mona Sans at maximum weight, fronted by a `fire-orange` tick.

## Why the tick

The number needs emphasis, and the brand forbids orange as a dominant surface. The
`border-width-thick` 4px tick solves both: it marks the number without flooding the layout
with orange. It is the same logic that governs every organism — `fire-orange` appears as a
tick, an accent and a single highlighted value, never as a large fill.

## Typography

The value is `display-l` 60px, or `display-xl` 72px in the hero variant. The label is
`hud-small` 12px uppercase in `text-muted`, directly below. The value accepts a node, so a
single word inside it can go in `text-accent` when the phrase calls for it.

## Use

Two to four per section. A lone Mission Stat is a number without context; more than four
becomes a dashboard, and the brand is not a dashboard. In a grid, the ticks align left on
one vertical line.

## Consumption

The consumer provides the value already formatted, with a thousands separator, and the
label. The component does not format numbers.
