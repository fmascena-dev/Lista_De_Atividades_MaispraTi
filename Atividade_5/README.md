# 🎬 Movie Explorer - Atividade 5

Uma aplicação React + TypeScript para buscar filmes, visualizar detalhes e gerenciar uma lista de favoritos usando a API do TMDB.

![Preview da Aplicação](https://via.placeholder.com/800x400/1F2937/F3F4F6?text=Movie+Explorer+Preview)

## ✨ Funcionalidades

### 🔍 Página de Busca
- Campo de texto para buscar filmes por título
- Exibição de filmes populares por padrão
- Lista de resultados com pôster, título, ano e avaliação
- Botão para visualizar detalhes de cada filme
- Sistema de paginação para navegar pelos resultados

### 📱 Página de Detalhes
- Informações completas do filme (diretor, elenco, sinopse, avaliação)
- Imagem de fundo (backdrop) e pôster
- Lista do elenco principal com fotos
- Gêneros do filme
- Duração e ano de lançamento
- Botão para adicionar/remover dos favoritos

### ❤️ Lista de Favoritos
- Visualização de todos os filmes favoritos
- Persistência em localStorage
- Contador de favoritos no header
- Opção para limpar todos os favoritos
- Interface responsiva

### 🔧 Recursos Técnicos
- **Tratamento de Erros**: Mensagens claras de erro com opção de retry
- **Loading States**: Indicadores de carregamento durante as requisições
- **Responsividade**: Design adaptativo para mobile e desktop
- **TypeScript**: Tipagem completa para melhor DX

## 🚀 Como executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone <url-do-repositorio>

# Navegue até a pasta do projeto
cd Atividade_5

# Instale as dependências
npm install

# Configure a API Key do TMDB
cp .env.example .env
# Edite o arquivo .env e adicione sua API key do TMDB
```

### Executando em desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:5174`

### Build para produção
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## 🔑 Configuração da API

1. Cadastre-se em [The Movie Database (TMDB)](https://www.themoviedb.org/)
2. Acesse as configurações de API em sua conta
3. Copie sua API Key
4. Cole no arquivo `.env`:

```env
VITE_TMDB_API_KEY=sua_api_key_aqui
```

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── ErrorMessage.tsx
│   ├── Header.tsx
│   ├── LoadingSpinner.tsx
│   ├── MovieCard.tsx
│   └── Pagination.tsx
├── hooks/               # Hooks personalizados
│   └── useFavorites.ts
├── pages/               # Páginas da aplicação
│   ├── FavoritesPage.tsx
│   ├── MovieDetailsPage.tsx
│   └── SearchPage.tsx
├── services/            # Serviços de API
│   └── tmdb.ts
├── types/               # Definições de tipos
│   └── movie.ts
├── App.tsx              # Componente principal
├── globals.css          # Estilos globais
└── main.tsx            # Ponto de entrada
```

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento
- **Axios** - Cliente HTTP
- **Tailwind CSS** - Framework de estilos
- **TMDB API** - Base de dados de filmes

## 🎯 Funcionalidades Implementadas

✅ Página de busca com campo de texto  
✅ Exibição de resultados com pôster, título, ano e botão de detalhes  
✅ Sistema de paginação  
✅ Página de detalhes completa com informações do filme  
✅ Lista de favoritos persistente no localStorage  
✅ Tratamento de erros e loading states  
✅ Design responsivo  

## 📱 Screenshots

### Página de Busca
Interface limpa para buscar filmes com resultados em grid responsivo.

### Página de Detalhes
Informações completas com backdrop, elenco e sinopse.

### Lista de Favoritos
Gestão fácil dos filmes favoritos com contador no header.

## 🤝 Contribuição

Este projeto foi desenvolvido como parte da Atividade 5 do curso. Sugestões de melhorias são bem-vindas!

## 📄 Licença

Este projeto é para fins educacionais.
