<div align="center">

# Dev Clicker

<p>
	<img src="assets/pc.ico" width="96" height="96" alt="Dev Clicker icon" />
</p>

Um idle/clicker game para devs – gere linhas de código, compre upgrades e evolua sua “empresa”! 💻☕

</div>

## Visão Geral

O Dev Clicker é um jogo single‑player que roda 100% no navegador. Você começa clicando (ou tocando) para gerar linhas de código, desbloqueia estruturas que produzem automaticamente (LpS) e ativa bônus de café com efeitos especiais. O progresso é salvo automaticamente no seu dispositivo.

## Destaques

- Simples de rodar: apenas HTML, CSS e JavaScript puro (sem backend)
- Salvamento automático via localStorage (persistência entre sessões)
- Upgrades, estruturas e bônus (inclui cafés com efeitos instantâneos e temporários)
- UI com tooltips ricas (desktop e mobile) e animações
- Efeitos sonoros e música com controle de reprodução

## Como experimentar rapidamente

Escolha uma das opções abaixo.

1) Servidor Python embutido no sistema (recomendado)

```bash
python -m http.server 8000
```

Depois abra http://localhost:8000 no navegador e acesse o arquivo `index.html` na raiz do projeto.

2) Node.js (http-server)

```bash
npx http-server -p 8000
```

3) VS Code – Live Server (extensão)

- Abra a pasta do projeto e clique em “Go Live” para servir a raiz.

4) Modo direto (menos recomendado)

- Abra o arquivo `index.html` no navegador. Em alguns ambientes, recursos como áudio podem se comportar melhor com um servidor local (opções 1–3).

## Controles e mecânicas

- Clique/toque no teclado para gerar linhas de código (cliques podem entrar em “combo”)
- Compre estruturas para produzir LpS automaticamente
- Os bônus de café aparecem aleatoriamente – clique rápido para ativar!
- Tooltips mostram custos, efeitos e estatísticas de cada item

## Salvamento e reset

Os dados ficam no localStorage do navegador:

- `playerName`: nome da empresa
- `playerPoints`: total de linhas
- `upgrades`: upgrades comprados
- `estruturas`: estruturas compradas
- `stats`: estatísticas de jogo

Para resetar, use o console do navegador (F12):

```js
localStorage.clear();
location.reload();
```

## Estrutura do projeto (essencial)

```
Dev-Clicker/
├─ index.html            # Página principal (raiz do projeto)
├─ style.css             # Estilos do jogo
├─ script.js             # Lógica principal do jogo
└─ assets
```

## Roadmap (ideias)

- Melhorar acessibilidade (teclado e leitores de tela)
- Mais tipos de bônus e eventos aleatórios
- Sistema de achievements/medalhas
- Tela de “New Game+” e balance refinado de custos

## Contribuindo

1. Faça um fork do repositório
2. Crie um branch: `git checkout -b feature/sua-feature`
3. Commit: `git commit -m "feat: descreva sua mudança"`
4. Push: `git push origin feature/sua-feature`
5. Abra um Pull Request 🧑‍💻

## Agradecimentos

Obrigado a quem jogar, reportar bugs ou sugerir melhorias. Cafézinho ajuda a compilar ideias! ☕
