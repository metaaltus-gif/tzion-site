# DESIGN.md — FenixRise (mundo visual do site, v2 · 16/08/2026)

Substitui o mundo anterior (dark genérico com gradientes). Anti-referência: o look antigo e o "dark de IA" (near-black chapado + neon + glow por todo lado).

## Mundo
"Estúdio Apple à meia-luz, aquecido por uma brasa": carvão FÍSICO (com grão de filme e vinheta suave, nunca chapado), tipografia de sistema em pesos leves e escala grande, muito ar, hairlines discretas — e UMA presença viva: a fênix-cometa que desce a lateral da página com o scroll, deixando rastro de brasas.

## Tokens
- `--bg: #131013` (carvão quente) + overlay de grão SVG (feTurbulence, ~4% opacidade, fixed) + vinheta radial sutil
- `--ink: #F4EEE4` texto · `--muted: #A79E92` secundário (tintado do quente, nunca cinza puro) · `--line: rgba(244,238,228,.08)`
- Fogo (assinatura, SÓ palavra-chave/marca/CTA): gradiente 100° `#FF8A00 → #FF3D2E → #FF2E63`
- `--cyan: #35E0FF` (micro-detalhe técnico) · `--gold: #FFC24B` (labels raros)
- Tipo: `system-ui, -apple-system, 'Segoe UI', Roboto` — display até 5.5rem, weight 600/300, tracking -0.02em; corpo 17px/1.6, medida ≤ 70ch
- Radius 14px em cards/chips; sombras com offset+blur reais; sem glow decorativo

## Componentes
- Nav fixa translúcida (backdrop-filter real) com wordmark "FenixRise" + toggle EN/PT
- Hero: display gigante com UMA palavra em fogo, sub curto, CTA único
- Serviços: lista editorial (título + linha), não grid de cards iguais
- Portfólio: grade de "placas" escuras com codinome grande, tag mono pequena, descrição; hover eleva
- Processo: 4 passos em linha horizontal com régua
- Contato: e-mail grande + form mínimo (mailto)

## Motion (autorada, uma orquestração)
- **Fênix-cometa (canvas fixo)**: parte no topo-direito, desce a borda direita conforme scrollProgress com flutuação senoidal; corpo = núcleo brilhante + plumas bezier; emite partículas-brasa que caem e apagam (rastro). `prefers-reduced-motion` → estática, sem rastro. DPR cap 2, rAF pausado fora de viewport.
- Reveals: IntersectionObserver, translateY 14px + opacity, ease-out expo, 1x por seção.

## Regras
- Fogo nunca em massa de texto; nunca mais de um elemento em fogo por viewport (fora a fênix)
- Zero travessão em copy; bilíngue EN/PT via pares de spans `.en`/`.pt` + `html[data-lang]` (placeholders via `data-ph-en/pt`); default auto-detectado por `navigator.language`, persistido em localStorage
- Nada de métricas de cliente inventadas; codinomes protegem clientes
