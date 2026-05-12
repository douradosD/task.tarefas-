# Task Tarefas

Um aplicativo de tarefas simples criado com React e Vite.

## Funcionalidades

- Adicionar novas tarefas
- Marcar tarefas como completas
- Marcar tarefas como favoritas
- Deletar tarefas
- Filtrar tarefas por rota:
  - `/` — todas as tarefas
  - `/completas` — apenas tarefas completas
  - `/favoritas` — apenas tarefas favoritas
- Persistência no `localStorage`

## Como usar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra o navegador em `http://localhost:5173`

## Build

```bash
npm run build
```

## Deploy para GitHub Pages

```bash
npm run deploy
```

O projeto foi preparado para deploy em GitHub Pages com base no repositório:

`https://github.com/douradosD/task.tarefas-/`

## Tecnologias usadas

- React
- Vite
- React Router
- Material UI Icons

## Estrutura principal

- `src/Componentes/TarefaForm.jsx` — formulário de criação de tarefas
- `src/Componentes/TarefasList.jsx` — lista de tarefas com filtro
- `src/Componentes/Sidebar.jsx` — navegação por rota
- `src/servicos/tarefas.servico.js` — funções de persistência e atualização
