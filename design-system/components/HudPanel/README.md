# HUD Panel

A assinatura do sistema. O leitura tática de "mission intel" que transforma estatística
em algo que se opera.

## Anatomia, em ordem de leitura

1. **Tick ao vivo** — barra de 2px em `surface-accent` no topo. É o sinal de que o
   painel está vivo.
2. **Cabeçalho** — um quadrado sólido de 8px em `fire-orange`, o título em `hud-xl`
   caixa alta, e um badge de status opcional alinhado à direita.
3. **Linhas `LABEL : VALUE`** — label em `hud-small` `text-muted`, valor em
   `hud-default` `hud-text`, separadas por hairline `border-width-thin`.

O painel usa `hud-background`, borda `border-accent` e `elevation-hud` — o brilho
laranja é o que o distingue de um card comum.

## `accent` na linha que importa

Uma linha marcada como `accent` renderiza o valor em `fire-orange`. Use em **um** valor
por painel: normalmente o gospel access, o número que carrega a tensão da marca. Dois
valores em laranja e nenhum se destaca.

## Valor composto

O valor aceita qualquer nó, então um **Biome Badge** entra direto numa linha. Quando
isso acontece, o badge alinha à direita como qualquer outro valor.

## Gotcha de padding

A linha carrega o próprio padding horizontal de `space-4`, para funcionar sozinha dentro
do painel. Dentro de um container já com padding — o corpo do People Group Card, por
exemplo — zere esse padding nas linhas, senão o label desalinha do conteúdo em volta.
Todo o conteúdo do card alinha num único inset de `space-5` 20px.

## Consumo

O consumidor fornece título, status e os pares label/valor. O painel não impõe número
de linhas; entre quatro e seis é onde ele lê melhor.
