# Site da Dra. Mariana Lopes — Psicóloga Clínica

## Etapa 01: Desenvolvimento do Menu (Header)

Este projeto contém a implementação fiel do cabeçalho (*header*) do site da psicóloga clínica Dra. Mariana Lopes, desenvolvido com foco em fidelidade visual, acessibilidade (WAI-ARIA e WCAG AAA), responsividade e SEO técnico.

---

## 📁 Estrutura de Arquivos

```text
site-psicologa/
├── index.html                   # Estrutura semântica HTML5 com cabeçalho, navegação e fallback
├── css/
│   ├── variables.css            # Tokens de design (cores, tipografia, dimensões, sombras)
│   ├── reset.css                # CSS Reset moderno e normalização cross-browser
│   └── header.css               # Estilização do cabeçalho, navegação desktop, tablet e mobile
├── js/
│   ├── config.js                # Arquivo de configuração (telefone do WhatsApp, mensagens)
│   └── header.js                # Controlador do menu mobile, foco acessível e eventos
├── assets/
│   └── icons/
│       ├── botanical-symbol.svg # Símbolo botânico minimalista em vetor SVG
│       └── whatsapp.svg         # Ícone oficial vetorial do WhatsApp
└── README.md                    # Documentação do projeto e instruções de execução
```

---

## 🚀 Como Executar e Visualizar

Por ser desenvolvido em HTML5, CSS3 e JavaScript puro, não são necessárias ferramentas pesadas de build.

### Opção 1: Servidor HTTP Local com Python (Recomendado)
No terminal, dentro da pasta do projeto (`site-psicologa`), execute:
```bash
python3 -m http.server 8000
```
Em seguida, abra o navegador e acesse:
[http://localhost:8000](http://localhost:8000)

### Opção 2: Servidor Node.js
Se preferir usar o Node:
```bash
npx serve .
```

### Opção 3: Abertura direta do arquivo
Você também pode abrir o arquivo `index.html` diretamente em qualquer navegador moderno (Chrome, Firefox, Safari, Edge).

---

## 🎨 Tokens de Design e Cores (Mockup)

| Token CSS | Valor | Aplicação | Contraste WCAG |
|---|---|---|---|
| `--color-background` | `#FAF8F2` | Fundo principal (branco quente/creme) | — |
| `--color-navy` | `#091A38` | Nome da psicóloga e links de navegação | **16.26:1** (WCAG AAA) |
| `--color-terracotta` | `#8D2C18` | Símbolo botânico e texto "PSICÓLOGA" | **7.89:1** (WCAG AAA) |
| `--color-green` | `#123E32` | Fundo do botão de contato WhatsApp | **11.93:1** (WCAG AAA) |
| `--color-border` | `#E7E2D9` | Linha divisória inferior sutil | — |
| `--color-white` | `#FFFFFF` | Texto e ícone do botão WhatsApp | — |

---

## 📱 Responsividade e Acessibilidade

1. **Desktop (> 820px)**:
   - Logotipo posicionado à esquerda com alinhamento vertical perfeito.
   - Navegação horizontal centralizada com 6 âncoras semânticas (`#inicio`, `#servicos`, `#reflexoes`, `#sobre`, `#faq`, `#contato`).
   - Botão de contato via WhatsApp no formato cápsula com ícone oficial à direita.
   - Margens laterais fixadas em ~8.7% conforme referência do mockup.

2. **Tablet e Telas Médias (821px a 1024px)**:
   - Redução progressiva de paddings e gaps para evitar quebras ou sobreposição.

3. **Mobile (<= 820px, 390px, 360px)**:
   - Botão hambúrguer acessível à direita com estados `aria-expanded` e `aria-controls`.
   - Drawer lateral fluido com transições suaves e sem travamentos.
   - Alvos de toque acessíveis (mínimo de 44px de altura).
   - Suporte a notch e safe areas (`env(safe-area-inset-*)`).
   - Fechamento com tecla <kbd>Escape</kbd>, clique no link ou toque no backdrop.
   - *Trap de foco* para leitores de tela e usuários de teclado.
   - *Fallback semântico* com `<noscript>` para funcionamento sem JavaScript.

---

## ⚠️ Configurações Pendentes

- **Número oficial do WhatsApp**: No arquivo `js/config.js`, edite a constante `whatsappNumber`:
  ```javascript
  whatsappNumber: "55DDDNÚMERO", // Exemplo: "5511999999999"
  ```
  O link do botão será gerado dinamicamente para `https://wa.me/55DDDNÚMERO?text=...`.

