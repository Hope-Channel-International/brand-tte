# People Group Card

O povo não alcançado como dossiê de campo. É o componente que carrega a ética da marca
dentro da interface.

## Anatomia

**Área de mídia** — a fotografia, com as tags de status e bioma no topo e as coordenadas
no rodapé. **Nome** em Mona Sans `h3`, com a região logo abaixo em `hud-small`.
**Faixa de dados** — as linhas de HUD com população e gospel access. **Par de ações** —
um `mobilize` e um `operate` lado a lado: "Pray now" e "View data".

Todo o conteúdo alinha num único inset de `space-5` 20px: overlay da mídia, corpo e
linhas. As linhas de HUD precisam ter o padding horizontal zerado aqui, senão dobram
com o do corpo.

## Dignidade em vez de pena

Sem fotografia, o fundo cai na **textura topográfica** da marca em
`opacity-topographic`. **Nunca um retângulo cinza, nunca um ícone de imagem quebrada.**
Um povo antigo não é um placeholder vazio. A textura é a posição da marca, e vale
enquanto a fotografia real não chega — quando chega, entra no mesmo lugar sem mudar o
resto do componente.

## O par de ações não é decorativo

Ele demonstra o eixo `intent` de Button funcionando em contexto: "Pray now" é a voz,
em Mona Sans; "View data" é o instrumento, em Space Mono. Trocar as fontes aqui
inverte o significado dos dois botões.

## Ênfase

Um valor em `text-accent` por card — normalmente o gospel access. Mesma disciplina do
HUD Panel.

## Consumo

O consumidor fornece nome, região, população, acesso, bioma, status, coordenadas e,
quando existir, a imagem. Números já formatados.
