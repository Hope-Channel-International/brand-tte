# HUD Panel

The system's signature. The tactical mission-intel readout that turns a statistic into
something you operate.

## Anatomy, in reading order

1. **Live tick** — a 2px bar in `surface-accent` on top. The signal that the panel is live.
2. **Header** — an 8px solid square in `fire-orange`, the title in `hud-xl` uppercase, and
   an optional status badge aligned right.
3. **`LABEL : VALUE` rows** — the label in `hud-small` `text-muted`, the value in
   `hud-default` `hud-text`, separated by a `border-width-thin` hairline.

The panel uses `hud-background`, a `border-accent` border and `elevation-hud` — the orange
glow is what sets it apart from an ordinary card.

## `accent` on the row that matters

A row marked `accent` renders its value in `fire-orange`. Use it on **one** value per
panel: usually gospel access, the number that carries the brand's tension. Two orange
values and neither stands out.

## Composed values

The value accepts any node, so a **Biome Badge** drops straight into a row. When it does,
the badge aligns right like any other value.

## Padding gotcha

A row carries its own `space-4` horizontal padding so it works on its own inside the
panel. Inside a container that is already padded — the People Group Card body, for
example — zero that padding on the rows, or the label falls out of line with the content
around it. All the card's content aligns to a single `space-5` 20px inset.

## Consumption

The consumer provides the title, the status and the label/value pairs. The panel imposes
no row count; four to six is where it reads best.
