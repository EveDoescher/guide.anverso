# Plano de Responsividade: Navegação e Prévia do Documento (Mobile Avançado)

## 1. Contexto e Desafio
O objetivo é garantir suporte perfeito para telas pequenas, como o Galaxy Z Fold (344px de largura). Dois componentes do projeto exigem atenção especial de responsividade, pois são elementos de interface complexos onde uma simples reorganização de colunas ou botões não é suficiente:
- **Navegação (`AppNavigationRail`)**
- **Prévia do documento (`DocumentPreview`)**

---

## 2. Análise e Plano: Navegação (`AppNavigationRail` e seu contêiner)

### O erro da abordagem atual:
- **Separação em Blocos Estranhos:** Atualmente, a página de demonstração divide a `Navegação` e a `Área de Conteúdo` em dois blocos empilhados via `flex-col` no mobile. O resultado é que a barra lateral fica inteiramente exposta como um bloco maciço no meio da tela, empurrando o conteúdo principal (onde o usuário realmente trabalha) para baixo. Isso não é um padrão válido de navegação mobile e gera uma UX pobre e confusa.

### Plano Crítico de Ação (Mobile-First & Menus Retráteis):
1. **Transição para Menu Retrátil (Drawer/Hamburger) no Mobile:**
   - Em larguras pequenas (ex: 344px) até tablets menores, a `AppNavigationRail` não deve ficar visível o tempo todo ocupando espaço vital.
   - Implementaremos um padrão de **Menu Retrátil**: um botão de hambúrguer (ou aba de navegação) no cabeçalho do conteúdo que, quando tocado, revela a navegação lateral como um *Drawer* ou um menu colapsável (*Accordion/Slide-down*).
   - Isso garante que o usuário tenha o conteúdo em tela cheia logo de cara, acessando a navegação apenas quando solicitado.
2. **Uso de Container Queries (`@container`):**
   - Em vez de usar *media queries* fixas baseadas na tela (que podem quebrar no guia de design), usaremos **Container Queries** (`@container` e `cqi`). 
   - A barra lateral saberá seu próprio contexto: se o espaço for estreito, ela se encolhe para um formato "ícone-apenas" ou some (virando o menu retrátil); se for largo, ela expande para `w-[238px]`.
3. **Fluidez em Transições:**
   - A passagem do menu mobile retrátil para o *sidebar* fixo em desktop será acompanhada de animações fluidas, respeitando a quebra de conteúdo e não apenas tamanhos fixos de tela.

---

## 3. Análise e Plano: Prévia do Documento (`DocumentPreview`)

### Como funciona atualmente:
- Há uma barra superior com ferramentas de paginação e zoom usando `justify-between`.
- A folha A4 virtual (`<article>`) possui dimensões exatas fixadas: `w-[353px]` e `h-[500px]`.
- O tamanho visual da folha é controlado pela propriedade CSS `transform: scale(zoom / 100)`.

### O erro da abordagem atual no mobile (344px):
- **Estouro Físico de Tela:** A folha fixa de `353px` é maior que a tela do Z Fold (344px).
- **Controles de Ferramentas Espremidos:** O contêiner dos botões de controle (`[<] 1/4 [>]` e `[-] 100% [+]`) divide o mesmo eixo em larguras curtas. A disposição atual força esses botões a colidirem, ficarem mal posicionados ou até invisíveis fora do *viewport*.

### Plano Crítico de Ação:
1. **Escala Adaptativa via ResizeObserver e Container Queries:**
   - Aplicar escala responsiva verdadeira, onde a escala da folha é atrelada à largura real de seu wrapper (`Escala = ContainerWidth / 353 * Zoom`). O documento nunca estourará as bordas físicas do telefone.
2. **Refatoração Inteligente dos Botões de Controle (Menu Retrátil de Ferramentas):**
   - Não basta apenas adicionar um `flex-wrap` aos botões de controle da prévia. A barra de ferramentas exige uma hierarquia no mobile.
   - **Opção A (Menu Secundário):** A paginação (mais importante) permanece explícita no topo. O controle de zoom e outras ações (como exportar) viram um botão único "Opções" que abre um *bottom sheet* ou *dropdown* retrátil com os controles secundários.
   - **Opção B (Reorganização Fluida):** Utilizar `flex-wrap justify-between` de forma que os controles de zoom caiam para uma linha abaixo de maneira elegante, usando larguras fluídas (`w-full`), permitindo botões com tamanho de toque acessível (mínimo de 44x44px, conforme boas práticas de *responsive-design*).
3. **Botões "Touch-Friendly":**
   - Garantir que todos os *IconButtons* na barra de ferramentas da prévia tenham uma área de toque de no mínimo 44x44px. Atualmente, os botões densos podem ser difíceis de operar num Galaxy Z Fold sem cometer toques acidentais se estiverem muito próximos.
