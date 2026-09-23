# Button

Um botão TTE carrega a marca em dois eixos independentes: `intent` decide a fonte pelo
papel do botão, `variant` decide o tratamento visual, `size` decide a altura.

## `intent` — o eixo que é da TTE

O princípio que governa tudo: **Mona Sans mobiliza, Space Mono opera.** Ele estende
até o botão a lógica de tipo que a marca já usa — Mona Sans é a voz, Space Mono é o HUD.

| `intent` | Fonte | Significado | Use em |
|---|---|---|---|
| `mobilize` *(default)* | Mona Sans ExtraBold, tracking 4% | **A voz.** A marca falando, chamando alguém a agir. | Pray, Give, Join, Partner. CTA de hero, botão de campanha, os momentos emocionais. |
| `operate` | Space Mono Bold, tracking 8% | **O instrumento.** Um controle que se opera depois de entrar. | Filter, Export, View data, Next. Botão dentro de HUD, tabela e toolbar. |

`mobilize` é o default, então qualquer botão não marcado cai na voz da marca — a
escolha segura. `operate` se escolhe de propósito. **Nunca cruze os fios:** um
"Pray now" em Space Mono, ou um "Filter" de tabela em Mona Sans, quebra o sistema.

O prop se chama `intent`, não `role`, porque `role` é atributo ARIA nativo de
`<button>` e precisa ficar livre para acessibilidade.

## `variant`

| `variant` | Tratamento | Nota |
|---|---|---|
| `default` | Preenchimento `fire-orange`, label `white` | **Ênfase máxima, só CTA.** Nunca superfície passiva. |
| `outline` | Transparente, borda 30% do foreground, vira `fire-orange` no hover | O cavalo de batalha sobre superfície escura. |
| `secondary` | Preenchimento de baixa opacidade | Ação de apoio, discreta. |
| `ghost` | Sem cromo até o hover | Toolbar e UI densa. |
| `link` | Sublinhado em `fire-orange` | Inline, com cara de texto. |
| `inverted` | Preenchimento `white` sólido, label escuro | Sobre fotografia. |

## `size`

`lg` 56px (`sizing-control-lg`), `default` 44px (`sizing-control-default`),
`sm` 36px (`sizing-control-sm`), mais `icon` 44×44 e `icon-sm` 36×36. O tamanho é
independente do intent, mas o par natural é: a voz tende ao grande, o instrumento ao pequeno.

## Invariantes

`radius-default` 0 em todo botão. CAIXA ALTA sempre, nas duas fontes. `fire-orange`
só em `variant="default"` — é ênfase máxima, nunca superfície de descanso.

## Acessibilidade

Alvo de 44×44 no tamanho default e no `icon`. Botão só de ícone exige `aria-label`.
O anel de foco usa `border-accent`, 2px com offset de 2px.

**Contraste:** `white` sobre `fire-orange` dá **3,20:1** — passa como texto grande
ou negrito, reprova como texto normal (4,5:1). É a decisão de marca aprovada para o
CTA primário e está registrada como follow-up em aberto na origem. A saída documentada,
se WCAG AA para texto normal virar requisito duro, é label escuro: `black` sobre
`fire-orange` dá 4,64:1. Os demais variants passam com folga.

## Consumo

O consumidor fornece o conteúdo do label e, quando houver, o ícone (Lucide). O
componente não define margem externa — quem posiciona é o container.
