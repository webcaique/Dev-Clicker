# Dev Clicker - Versão Web Pura

Uma versão 100% web do Dev Clicker, sem dependência de Django ou qualquer servidor backend.

## Características

✅ **Aplicação Web Pura** - Apenas HTML, CSS e JavaScript
✅ **Armazenamento Local** - Todos os dados salvos no localStorage do navegador
✅ **Sem Backend** - Roda completamente no navegador do cliente
✅ **Interface Mantida** - Toda a interface visual permanece igual
✅ **Persistent Saves** - Seu progresso é salvo automaticamente

## Como Executar

### Opção 1: Usar o Servidor Python Incluído

```bash
python server.py
```

Depois acesse `http://localhost:8000` no seu navegador.

### Opção 2: Usar qualquer outro servidor HTTP

Se você tiver `Node.js`:
```bash
npx http-server
```

Se você tiver `PHP`:
```bash
php -S localhost:8000
```

### Opção 3: Servir Diretamente no Navegador

Abra o arquivo `templates/index.html` diretamente no seu navegador.

## Estrutura do Projeto

```
Dev-Clicker/
├── templates/
│   └── index.html           # Arquivo HTML principal (sem dependências Django)
├── static/
│   ├── style.css            # Estilos
│   ├── js/
│   │   └── script.js        # Lógica do jogo (refatorada)
│   └── assets/
│       ├── icons/           # Ícones dos itens
│       ├── sounds/          # Efeitos sonoros
│       └── music/           # Músicas de fundo
├── server.py                # Servidor Python para executar localmente
└── README.md                # Este arquivo
```

## Dados Salvos

Todos os dados da sua partida são salvos no **localStorage** do navegador:

- `playerName` - Nome da sua empresa
- `playerPoints` - Pontos/Linhas de código
- `upgrades` - Lista de upgrades comprados
- `estruturas` - Lista de estruturas compradas
- `stats` - Estatísticas gerais

## Removido da Versão Original

- ❌ Integração com Django (WebSocket, CSRF Token)
- ❌ Banco de dados
- ❌ Leaderboard global
- ❌ Autenticação de usuário
- ❌ Template tags Django

## Adicionado Nesta Versão

- ✅ Armazenamento completamente local (localStorage)
- ✅ Modal de entrada de nome simplificado
- ✅ Servidor Python básico para facilitar a execução
- ✅ Compatibilidade com qualquer servidor HTTP estático

## Como Funciona

1. **Carregamento**: Ao abrir a página, o jogo carrega seus dados salvos do localStorage
2. **Modal**: Se for a primeira vez, você será solicitado a digitar o nome da sua empresa
3. **Jogo**: Clique no teclado para gerar linhas de código e compre upgrades/estruturas
4. **Salvamento**: Seus dados são salvos automaticamente a cada 5 segundos

## Resetar Progresso

Para resetar seu progresso completamente, abra o console do navegador (F12) e execute:

```javascript
reset()
```

Ou limpe manualmente o localStorage:

```javascript
localStorage.clear()
location.reload()
```

## Requisitos

- Um navegador moderno com suporte a:
  - HTML5
  - CSS3
  - ES6+ JavaScript
  - localStorage

## Licença

MIT

## Créditos

Refatoração para web pura mantendo a interface e lógica visual original.
