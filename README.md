# TTE Brand Kit

Kit de marca da **To The Ends of The Earth**, derivado do repositório oficial
[lmtts/tte-brand-system](https://github.com/lmtts/tte-brand-system) e da pasta de
ativos do Drive. Nada aqui foi aproximado: cores, tipografia, logos e specs vêm
dos arquivos de origem.

## O que tem aqui

| Caminho | O que é |
|---|---|
| `tte-brand-kit.html` | **O arquivo único.** Marca inteira numa página autocontida: 28 SVGs inline, fontes reais embutidas, tokens copiáveis nos 4 formatos, componentes, organismos, voz e imagem. Abre offline, sem rede. |
| `design-system/` | A árvore publicada no Claude Design, regenerável. Tokens, brand book, 9 componentes com preview, fontes. |
| `tokens/` | Os 4 formatos oficiais (`css`, `json`, `scss`, `tailwind.js`) + `tokens.compiled.css` gerado de `tokens.json`. |
| `assets/logos/` | 26 SVGs otimizados: mark, wordmark, lockup, co-marca Hope Channel. |
| `assets/patterns/` | Textura topográfica, simples e tile. |
| `assets/fonts/` | Mona Sans variável e Space Mono regular/bold. |
| `build/` | Gerador do arquivo único. |
| `scripts/check-contrast.mjs` | Validador WCAG dos pares de cor. |

## Regerar o arquivo único

```bash
node build/build-kit.mjs
```

Lê `assets/` e `tokens/`, embute tudo e escreve `tte-brand-kit.html`.

## Onde está publicado

Claude Design, como design system navegável:
<https://claude.ai/artifact/VxjLRFWebzhRw6SboqhYxQ> — privado até ser compartilhado
pelo menu Share da própria página.

## O ponto de contraste que ficou em aberto

`white` sobre `fire-orange` dá **3,20:1**: passa como texto grande ou negrito, reprova
como texto normal. É exatamente o CTA primário da marca, e é uma decisão aprovada —
a spec de Button na origem já registra o follow-up e aponta a saída (label escuro dá
4,64:1). O par foi **mantido como está**; o kit documenta onde cada cor é segura em
vez de corrigir a marca por conta própria.

`grey #949494` sobre branco dá 3,03:1 — use o cinza só sobre escuro.
