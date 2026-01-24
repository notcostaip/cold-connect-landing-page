# ColdConnect - Landing Page

A landing page oficial para **ColdConnect**, a única automação de WhatsApp 100% ilimitada do mercado baseada em navegador.

## Quick Start

1. **Instalar dependências**
   ```bash
   npm install
   ```

2. **Rodar servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

3. **Build para produção**
   ```bash
   npm run build
   ```

## Funcionalidades

- **Design Moderno**: Interface responsiva com efeitos de glassmorphism, gradientes e animações suaves (Framer Motion).
- **Seção de Planos**: Cards de preços interativos com links diretos para checkout (Starter, Pro, Business).
- **Comparativo**: Tabela comparativa destacando os diferenciais da ColdConnect versus concorrentes.
- **FAQ**: Seção de perguntas frequentes expansível.
- **Efeitos Visuais**: Fundo dinâmico com efeitos de neblina e neve personalizados.
- **SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação.

## Tecnologias

- **Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animações**: [Framer Motion](https://www.framer.com/motion/)
- **Ícones**: [Lucide React](https://lucide.dev/)

## Estrutura do Projeto

```
/
├── public/              # Arquivos estáticos (favicon, etc)
├── src/
│   ├── components/      # Componentes reutilizáveis (Header, Pricing, Hero...)
│   ├── pages/           # Páginas da aplicação
│   ├── index.css        # Estilos globais e configuração Tailwind
│   ├── main.tsx         # Ponto de entrada
│   └── App.tsx          # Componente raiz
├── package.json         # Dependências e scripts
└── vite.config.ts       # Configuração do Vite
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor local.
- `npm run build`: Compila o projeto para produção.
- `npm run preview`: Visualiza o build de produção localmente.
- `npm run lint`: Executa a verificação de código (ESLint).

## Licença

Todos os direitos reservados a ColdConnect.
