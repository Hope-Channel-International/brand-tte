# Mission Stat

O número impossível. Mona Sans no peso máximo, precedido por um tick em `fire-orange`.

## Por que o tick

O número precisa de ênfase, e a marca proíbe laranja como superfície dominante. O tick
de `border-width-thick` 4px resolve os dois: marca o número sem inundar o layout de
laranja. É a mesma lógica que rege todos os organismos — `fire-orange` aparece como
tick, acento e valor destacado, nunca como preenchimento grande.

## Tipografia

Valor em `display-l` 60px, ou `display-xl` 72px na variante de hero. Label em
`hud-small` 12px caixa alta em `text-muted`, logo abaixo. O valor aceita nó, então uma
palavra dentro dele pode ir em `text-accent` quando a frase pede.

## Uso

Dois a quatro por seção. Um Mission Stat sozinho vira um número sem contexto; mais de
quatro vira dashboard, e a marca não é dashboard. Em grade, os ticks alinham à esquerda
numa mesma linha vertical.

## Consumo

O consumidor fornece o valor já formatado, com separador de milhar, e o label.
O componente não formata número.
