# Topographic Background

A camada de textura. Curvas de nível em `fire-orange` atrás de qualquer conteúdo.

## A regra

Sempre em `opacity-topographic`, ou seja `0.12`. Os arquivos em `assets/Patterns`
são entregues em tinta cheia justamente para que a opacidade fique na camada, sob seu
controle, e nunca embutida no SVG.

Sobre `surface-dark`, a 12%, as curvas leem como contornos de fogo — a assinatura
visual da marca. Acima disso viram ruído e comem a legibilidade do texto por cima;
foi exatamente o que aconteceu quando este sistema foi montado em opacidade cheia.

## Os dois arquivos

`pattern-simple.svg` para banda de seção e fundo de card. `pattern-tile.svg`, mais densa
e repetível, para superfície grande e fundo imersivo.

## Implementação

A textura vai numa camada própria — um pseudo-elemento absoluto com `inset: 0` e a
opacidade do token — e o conteúdo sobe para `z-index: 1`. Aplicar a opacidade no
container inteiro apagaria o texto junto.

`pointer-events: none` na camada, para a textura nunca interceptar clique.

## Onde aparece

Banda de seção, fundo do placeholder do People Group Card, fundo de hero e de cover.
Nunca atrás de tabela ou de formulário: ali ela compete com o dado.

## Consumo

O consumidor fornece o conteúdo. O componente só lança a textura atrás dele.
