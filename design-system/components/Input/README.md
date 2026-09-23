# Input

O campo de texto. Altura `sizing-control-default` 44px, a mesma de Button e Select —
é isso que faz "default" significar a mesma coisa em todo o sistema.

## Forma

`radius-default` 0. Borda `border-width-thin` em `border-default` a 30% de opacidade,
que vira `border-accent` no foco. Fundo transparente, para o campo herdar a superfície
onde está — dentro de um painel de HUD ele desaparece no preto sem precisar de variante.

## Tipografia

Valor em `body-regular` 16px. **Nunca abaixo de 16px**: o Safari do iOS dá zoom ao focar
um campo com fonte menor, e isso desloca o layout inteiro. O label é `hud-small` 12px
caixa alta em `text-muted`.

## Espaçamento

`space-2` 8px entre label e campo — colado, para lerem como uma peça. `space-6` 24px
até o próximo label, para os campos não se fundirem.

## Estados

Foco usa `border-accent` mais anel de 2px com offset de 2px. Desabilitado usa
`opacity-disabled`. Inválido combina três canais: borda em `fire-orange`, ícone de
alerta e mensagem em texto — **cor nunca é o único canal**.

## Consumo

O consumidor fornece label, placeholder, valor e a mensagem de erro. Todo campo
precisa de um `<label>` com `for` apontando para o `id` do input; placeholder não
substitui label.
