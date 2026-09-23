# To The Ends of The Earth

TTE mobiliza uma comunidade global de intercessores e investidores pelos povos
menos alcançados do planeta. Sub-marca da Hope Channel International, arquétipo
Explorer × Hero, motor teológico em Atos 1:8.

A marca vive numa tensão: a estatística parece impossível — 3,6 bilhões de pessoas
sem acesso ao evangelho — e a teologia diz que o desfecho é inevitável (Mateus 24:14).
Tudo o que este sistema produz precisa carregar essa tensão. A sensação a provocar é
intensa, crua e espiritualmente pesada: tirar a pessoa da segurança da tela e colocá-la
na linha de frente do impossível.

## As seis regras que nunca se quebram

1. **Cor.** `fire-orange` é ênfase máxima — CTA, acento do wordmark, asa do ícone,
   label de HUD. Nunca fundo dominante num layout longo. `black` é o fundo imersivo
   padrão. `white` é para layout editorial e texto sobre escuro.
2. **Tipografia.** Só Mona Sans e Space Mono. Nenhuma outra, jamais. Mona Sans é
   CAIXA ALTA em todo uso display.
3. **Raio.** `radius-default` é `0px` em tudo. A marca é angular e tática. A única
   exceção é `radius-full`, para avatar circular e radio button.
4. **Tokens, nunca hex solto.** Toda decisão de cor e tipo referencia um token.
5. **Duas paletas distintas.** Identidade (logo, tipo, UI): branco é `#FFFFFF` puro.
   Imagem (fotografia): branco é Warm White `#F4F3F1`. Nenhuma foto TTE contém
   branco puro — a luz é sempre conquistada, suja, real.
6. **Lockup Hope Channel** presente em todo material oficial, como co-marca ou como
   endosso "Powered by Hope Channel".

## Fundamentos de conteúdo

### A voz
Urgente, ancorada na Escritura, crua, dignificante, mobilizadora, centrada no
Espírito, corajosa. Se TTE fosse uma pessoa: um operador de campo veterano, poeira
nas botas e fogo nas orações, que cita a Escritura como um soldado cita coordenadas —
com precisão, de memória, porque vidas dependem disso.

A seção **Voz** traz a tabela completa de "somos / não somos", a terminologia
obrigatória e as onze regras editoriais.

### Os cinco pilares de mensagem
1. **A certeza profética** — Mateus 24:14 é decreto real. O evangelho alcançará todo povo.
2. **A tensão impossível** — a estatística contra a profecia.
3. **Oração como autoridade delegada** — a intercessão dá a Deus terreno legítimo para agir.
4. **O Espírito Santo como fonte de poder** — o centro de gravidade de todo conteúdo.
5. **Pés belos em estradas digitais** — um governo expulsa um missionário; não detém um vídeo.

### Regras editoriais que valem sempre
Nunca use travessão. Nunca use estrutura negativa ("não somos X, somos Y") — enquadre
no positivo. Toda frase ganha o próprio espaço. Reforce a teologia com capítulo e
versículo. Termine com micro-compromisso: Pray, Give, Learn.

## Fundamentos visuais

### Cor
A paleta primária tem três cores e um neutro. Os quatro acentos de bioma são
secundários e estão **pendentes de aprovação final** na origem: aparecem como swatch
dentro de uma tag, nunca como preenchimento nem como rival do `fire-orange`.

Contraste, medido dos valores reais:

| Par | Razão | Texto normal | Texto grande / não-texto |
|---|---|---|---|
| `ink` sobre `surface` (os dois temas) | 14,85:1 | passa | passa |
| `fire-orange` sobre `black` | 4,64:1 | passa | passa |
| `white` sobre `fire-orange` | 3,20:1 | **reprova** | passa |
| `black` sobre `fire-orange` | 4,64:1 | passa | passa |
| `grey` sobre `black` | 4,90:1 | passa | passa |
| `grey` sobre `white` | 3,03:1 | **reprova** | passa |

O CTA primário da marca é preenchimento `fire-orange` com label `white` — 3,20:1.
A spec de Button registra isso como follow-up em aberto e aponta a saída: label
escuro sobre laranja dá 4,64:1. **O par que reprova foi mantido porque é a decisão
de marca aprovada**; a nota de cada token diz onde cada cor é segura.

### Tipografia
Mona Sans mobiliza, Space Mono opera. Mona Sans é a voz — display, headings,
os momentos emocionais. Space Mono é o instrumento — HUD, dados, coordenadas,
controles. Essa divisão desce até o botão, no eixo `intent`.

A única exceção documentada à caixa alta do Mona Sans são os estilos `mona-body` e
`mona-body-sm`, em sentence case, para leitura longa.

Entrelinha abaixo de 100% no display é intencional: cria um bloco editorial compacto.
Tracking largo no Space Mono é intencional: reforça a leitura de painel de dados.

### Espaço, forma e elevação
Escala base 4px, de `space-0` a `space-32`. Margem de página: `space-4` no mobile,
`space-8` no tablet, `space-16` no desktop; `space-24` entre seções.

Uma única escala de altura governa todo controle interativo — `sizing-control-sm` 36px,
`sizing-control-default` 44px, `sizing-control-lg` 56px — para que "default" signifique
a mesma coisa em Button, Input e Select.

Borda é o padrão; sombra é exceção, só quando o elemento flutua sobre outro plano.
`elevation-hud` é o brilho laranja que assina o painel de HUD.

### Iconografia
O símbolo da marca é um pássaro em voo: pomba (Espírito Santo) fundida com chama
(Pentecostes). Corpo em `black`, asa definidora em `fire-orange`, orientada para a
frente e para cima. Quatro variantes no grupo de assets **Logos**, sob o prefixo `mark-`.

Ícones de interface são **Lucide**, com os terminais arredondados preservados — é a
exceção de raio documentada do sistema. Ícone sobre claro usa `icon-dark`; sobre
escuro, `icon-light`; ícone de ação usa `icon-primary`.

Clearspace do logo = altura do "T" do wordmark. Logo branco sobre escuro ou
fotografia; logo preto sobre claro. Nunca distorcer, rotacionar, recolorir fora das
variantes aprovadas, nem separar o ícone do wordmark num lockup combinado.

## Imagem

Fotografia editorial de expedição: a alma da National Geographic, a atitude da
Arc'teryx, a urgência de um despacho do campo. Quatro camadas narrativas — The Scale,
The Stillness, The POV, The HUD. A seção **Imagem** traz a especificação completa,
a gradação de cor e as listas de sempre/nunca.

Toda peça visual passa por quatro portões antes de existir: Movement Test, Pulse Test,
Mobilization Trigger e Scroll-Stopper.

## Como usar este sistema

Comece pelos tokens. Nenhum componente define cor, tamanho, espaço ou forma fora
deles. Os componentes abaixo mostram o comportamento de cada primitiva e dos cinco
organismos que só existem nesta marca: HUD Panel, People Group Card, Mission Stat,
Biome Badge e Topographic Background.

Fonte da verdade: `tte-brand-system`, e o Figma em
`figma.com/design/QJpddccb8biAnsDiSKjcNf/To-The-Ends-of-The-Earth`.
