# Biome Badge

O bioma como tag de HUD, com a cor contida.

## A regra que este componente existe para impor

As quatro cores de bioma são **acento secundário**. Elas aparecem como um swatch de 9px
dentro da tag — nunca como preenchimento da tag, nunca como borda, nunca como rival do
`fire-orange`. Um Biome Badge preenchido de verde floresta quebra a hierarquia de cor
da marca inteira.

Além disso, as quatro estão marcadas como **pendentes de aprovação final** na origem
dos tokens. Contê-las num swatch é também o que torna uma futura mudança de valor barata.

## Os quatro biomas

| Token | Bioma |
|---|---|
| `biome-desert` | Desert / Árido |
| `biome-arctic` | Arctic / Congelado |
| `biome-city` | Urban / City |
| `biome-forest` | Tropical / Forest |

## Cor nunca é o único canal

O nome do bioma aparece por extenso ao lado do swatch, sempre. Quem não distingue
`biome-desert` de `biome-forest` lê "Desert" e "Forest" e resolve. O swatch é reforço,
não informação.

## Consumo

O consumidor fornece o nome do bioma. O componente mapeia nome para token; um bioma
fora dos quatro cai em neutro, sem swatch.
