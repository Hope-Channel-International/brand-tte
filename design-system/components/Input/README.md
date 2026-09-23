# Input

The text field. Height `sizing-control-default` 44px, the same as Button and Select — that
is what makes "default" mean the same thing across the system.

## Form

`radius-default` 0. A `border-width-thin` border in `border-default` at 30% opacity, which
turns `border-accent` on focus. A transparent background, so the field inherits whatever
surface it sits on — inside a HUD panel it disappears into the black without needing a
variant.

## Typography

The value is `body-regular` 16px. **Never below 16px**: iOS Safari zooms when a field with
a smaller font takes focus, and that shifts the whole layout. The label is `hud-small` 12px
uppercase in `text-muted`.

## Spacing

`space-2` 8px between label and field — tight, so they read as one piece. `space-6` 24px
to the next label, so fields do not merge.

## States

Focus uses `border-accent` plus a 2px ring at a 2px offset. Disabled uses
`opacity-disabled`. Invalid combines three channels: a `fire-orange` border, an alert icon
and a message in text — **color is never the only channel**.

## Consumption

The consumer provides the label, placeholder, value and error message. Every field needs a
`<label>` whose `for` points at the input's `id`; a placeholder does not replace a label.
