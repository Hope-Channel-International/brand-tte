# People Group Card

The unreached people group as a field dossier. It is the component that carries the
brand's ethics into the interface.

## Anatomy

**Media area** — the photograph, with the status and biome tags at the top and the
coordinates at the foot. **Name** in Mona Sans `h3`, with the region below in `hud-small`.
**Data strip** — the HUD rows with population and gospel access. **Action pair** — one
`mobilize` and one `operate` side by side: "Pray now" and "View data".

All the content aligns to a single `space-5` 20px inset: media overlay, body and rows. The
HUD rows need their horizontal padding zeroed here, or it doubles with the body's.

## Dignity over pity

With no photograph, the background falls back to the brand's **topographic texture** at
`opacity-topographic`. **Never a grey rectangle, never a broken-image icon.** An ancient
people is not an empty placeholder. The texture is the brand's position, and it holds
until real photography arrives — when it does, it enters the same place without changing
the rest of the component.

## The action pair is not decorative

It demonstrates Button's `intent` axis working in context: "Pray now" is the voice, in
Mona Sans; "View data" is the instrument, in Space Mono. Swapping the typefaces here
inverts the meaning of both buttons.

## Emphasis

One value in `text-accent` per card — usually gospel access. The same discipline as the
HUD Panel.

## Consumption

The consumer provides the name, region, population, access, biome, status, coordinates
and, when it exists, the image. Numbers arrive already formatted.
