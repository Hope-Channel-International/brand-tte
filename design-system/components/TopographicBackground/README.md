# Topographic Background

The texture layer. Contour lines in `fire-orange` behind any content.

## The rule

Always at `opacity-topographic`, that is `0.12`. The files in `assets/Patterns` ship at
full ink precisely so the opacity lives on the layer, under your control, and never baked
into the SVG.

On `surface-dark`, at 12%, the contours read as contours of fire — the brand's visual
signature. Above that they turn into noise and eat the legibility of any text on top; that
is exactly what happened when this system was first assembled at full opacity.

## The two files

`pattern-simple.svg` for a section band and a card background. `pattern-tile.svg`, denser
and repeatable, for a large surface and an immersive background.

## Implementation

The texture goes on its own layer — an absolutely positioned pseudo-element with
`inset: 0` and the token's opacity — and the content rises to `z-index: 1`. Applying the
opacity to the whole container would fade the text with it.

`pointer-events: none` on the layer, so the texture never intercepts a click.

## Where it appears

Section bands, the People Group Card placeholder, hero and cover backgrounds. Never behind
a table or a form: there it competes with the data.

## Consumption

The consumer provides the content. The component only lays the texture behind it.
