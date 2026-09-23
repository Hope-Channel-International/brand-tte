# Badge

A tag de HUD. Um rótulo curto de status, sempre em Space Mono caixa alta, sempre com
`radius-default` 0.

## Tons

`neutral` usa `border-default` em baixa opacidade sobre `surface` — o default, para
status sem carga. `accent` usa `border-accent` e `text-accent` — para o status que
importa. `solid` preenche com `surface-accent` e usa label claro, reservado para
"ao vivo" e contagens que precisam saltar.

## Regras

O badge abraça o próprio conteúdo. Se ele ocupa a linha inteira, virou alerta ou
banner, e não é mais badge.

Cor nunca é o único canal. Quando o badge comunica um estado, o texto já diz qual é —
`UNREACHED`, `RESTRICTED`, `LIVE`. Quando entra um swatch de bioma, ele é a segunda
informação, não a única: veja **Biome Badge**.

## Tipografia

`mono-label` 12px Bold com tracking 3%, ou `hud-micro` 10px quando o badge vive dentro
de outro componente denso. Nunca Mona Sans: um badge é dado, não voz.

## Consumo

O consumidor fornece o texto. Mantenha-o em uma ou duas palavras; um badge não é frase.
