# Central Vazamentos

Site institucional para a **Central Vazamentos**, empresa especializada em caça-vazamento. A página apresenta os serviços, explica os riscos de adiar o conserto e leva o visitante ao contato direto por WhatsApp ou telefone.

<img width="1920" height="919" alt="image" src="https://github.com/user-attachments/assets/c0d4b549-706c-4664-96f8-04ed579a2787" />


**Demo:** https://alisson-lacerda.github.io/projeto-central-vazamentos/

## Funcionalidades

- Layout responsivo para desktop e celular
- Troca automática da imagem do hero conforme a largura da tela (JavaScript)
- Botões de contato direto: WhatsApp com mensagem pronta e ligação
- Navbar fixa no topo com efeito de sublinhado animado nos links
- Seções de serviços, motivos para não adiar o conserto, sinais de vazamento e locais atendidos
- Imagens em formato WebP para carregamento mais rápido
- Meta tags Open Graph para pré-visualização ao compartilhar o link

## Tecnologias

- **HTML5**: estrutura semântica (`section`, `main`, `article`, `footer`)
- **CSS3**: Flexbox, Grid, variáveis CSS, `clamp()` para tipografia fluida e media queries
- **JavaScript**: manipulação do DOM e evento `resize`
- **Google Fonts**: Poppins (títulos) e Inter (texto)

## Estrutura do projeto

```
projeto-central-vazamentos/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── imagens/
    └── ...
```

## Como rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/Alisson-Lacerda/projeto-central-vazamentos.git
   ```
2. Entre na pasta do projeto:
   ```bash
   cd projeto-central-vazamentos
   ```
3. Abra o `index.html` no navegador (ou use a extensão Live Server no VS Code).

## Paleta de cores

| Cor | Hex | Uso |
|---|---|---|
| Azul profundo | `#0B3C5D` | Navbar, hero e rodapé |
| Azul médio | `#1D70A2` | Títulos e degradê |
| Ciano | `#2EC4E6` | Detalhes e botão "Ligar" |
| Verde | `#128C4A` | Botão do WhatsApp |
| Laranja | `#E4572E` | Alertas |

## Aprendizados

- Posicionamento de imagem com `position: absolute` e `static` conforme o tamanho da tela
- Diferença entre `<picture>` e troca de `src` via JavaScript
- Organização de CSS com variáveis e media queries
- Fluxo básico de Git: `commit`, `pull` e `push`

## Autor

**Seu Nome**

[GitHub](https://github.com/Alisson-Lacerda) · [LinkedIn](https://linkedin.com/in/seu-perfil)
