# Refeitório

Site desktop de cardápio desenvolvido com React, Vite, Tailwind CSS v4 e React Router.

## Tecnologias

- React
- Vite
- Tailwind CSS v4
- React Router

## Como executar

Tenha o Node.js instalado.

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado pelo Vite, normalmente `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura

- `src/pages/Home.jsx` — página inicial
- `src/pages/Menu.jsx` — página do cardápio
- `src/data/menu.js` — refeições e itens do cardápio
- `src/index.css` — estilos globais
- `vite.config.js` — configuração atual do Tailwind como plugin do Vite
- `public/images/` — imagens dos pratos

## Tailwind

Este projeto usa a integração oficial do Tailwind CSS v4 com Vite. Não existe `postcss.config.js` nem `tailwind.config.js` porque eles não são necessários para esta configuração.
