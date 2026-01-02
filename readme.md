<div align="center">

# Dev Clicker

<p>
	<img src="assets/pc.ico" width="96" height="96" alt="Dev Clicker icon" />
</p>

Um idle/clicker game para devs – gere linhas de código, compre upgrades e evolua sua “empresa”! 💻☕

</div>

## Visão Geral

O Dev Clicker é um jogo single‑player que roda 100% no navegador, inspirado no tão querido e aclamado Cookie Clicker. Você começa clicando (ou tocando) para gerar linhas de código, desbloqueia estruturas que produzem automaticamente (LpS) e ativa bônus de café com efeitos especiais. O progresso é salvo automaticamente no seu dispositivo.

## Destaques

- Simples de rodar: apenas HTML, CSS e JavaScript puro (sem backend)
- Salvamento automático via localStorage (persistência entre sessões)
- Upgrades, estruturas e bônus (inclui cafés com efeitos instantâneos e temporários)
- UI com tooltips ricas (desktop e mobile) e animações
- Efeitos sonoros e música com controle de reprodução
- Backend externo para lidar com o leaderboard



## Hierarquia de arquivos e pastas no backend (essencial)

```
Dev-Clicker/
├─ api.js           # Roteamento das requisições
├─ connectbd.js     # Conexão com o banco de dados
├─ query.js			# Querys para modificar o banco de dados
└─ package.json
```

## Funcionamento do backend
### api.js
Reponsável pelos roteamentos, em que há:
- /get-all-players/ => responsável por recuperar todos as linhas salva no banco de dados;
- /init-player/ => responsável por inicializar o jogador no banco de dados, criando um id aleatório para ele;
- /patch-points/ => atualiza os pontos no banco;
- /player/:id => coleta um player específico;
- /player-delete/ => usado para testes, deletando o player do banco de dados.

### query.js
Armazena funções responsáveis por modificações no banco de dados.
- testConnection() => teste de conexão;
- createPlayer => insere um novo player no banco de dados;
- getAll => recupera todos os jogadores no banco de dados;
- patchPoints => responsável por atualizar os pontos;
- getPlayer => recupera um player específico pelo id;
- deletePlayer => uma função que deleta o player do banco.

### connectbd.js
Reponsável unicamente por conectar ao banco de dados, podendo ser um local (comentado), ou um externo.

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

## Contribuintes
- [Caique Costa](https://github.com/ccostafrias) - Front-end;
- [Caique Sidrão](https://github.com/webcaique) - Back-end.

## Agradecimentos

Obrigado a quem jogar, reportar bugs ou sugerir melhorias. Cafézinho ajuda a compilar ideias! ☕
