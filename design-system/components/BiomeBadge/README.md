# Biome Badge

The biome as a HUD tag, with the color contained.

## The rule this component exists to enforce

The four biome colors are a **secondary accent**. They appear as a 9px swatch inside the
tag — never as the tag's fill, never as its border, never as a rival to `fire-orange`. A
Biome Badge filled with forest green breaks the brand's entire color hierarchy.

They are also marked **pending final approval** in the source tokens. Containing them in a
swatch is also what makes a future change of value cheap.

## The four biomes

| Token | Biome |
|---|---|
| `biome-desert` | Desert / Arid |
| `biome-arctic` | Arctic / Frozen |
| `biome-city` | Urban / City |
| `biome-forest` | Tropical / Forest |

## Color is never the only channel

The biome's name always appears in full beside the swatch. Anyone who cannot tell
`biome-desert` from `biome-forest` reads "Desert" and "Forest" and is fine. The swatch is
reinforcement, not information.

## Consumption

The consumer provides the biome name. The component maps the name to a token; a biome
outside the four falls back to neutral, with no swatch.
