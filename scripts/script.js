function jogar(){
    // PARTE 1: Lista de perguntas e respostas
    perguntas = [
        {
          pergunta: "Qual é o primeiro pokémon do Ash ?",
          respostas: [
            { opcao: "Pikachu", correto: true },
            { opcao: "Charmander", correto: false },
            { opcao: "Bubassauro", correto: false },
            { opcao: "Squirtle", correto: false }
          ]
        },
        {
          pergunta: "Qual é o nome da região onde a primeira temporada de Pokémon se passa?",
          respostas: [
            { opcao: "Johto", correto: false },
            { opcao: "Hoenn", correto: false },
            { opcao: "Kanto", correto: true },
            { opcao: "Sinnoh", correto: false }
          ]
        },
        {
          pergunta: "Qual é o nome do principal rival de Ash na primeira temporada?",
          respostas: [
            { opcao: "Gary", correto: true },
            { opcao: "Brock", correto: false },
            { opcao: "Misty", correto: false },
            { opcao: "Tracey", correto: false }
          ]
        },
        {
          pergunta: "Qual desses pokémons é conhecido como o 'Pokémon Elétrico'?",
          respostas: [
            { opcao: "Pikachu", correto: true },
            { opcao: "Bulbasaur", correto: false },
            { opcao: "Squirtle", correto: false },
            { opcao: "Charmander", correto: false }
          ]
        },
        {
          pergunta: "Qual é o nome da organização criminosa que Ash frequentemente enfrenta?",
          respostas: [
            { opcao: "Equipe Rocket", correto: true },
            { opcao: "Equipe Aqua", correto: false },
            { opcao: "Equipe Magma", correto: false },
            { opcao: "Equipe Galática", correto: false }
          ]
        },
        {
          pergunta: "Qual desses itens permite que um pokémon evolua?",
          respostas: [
            { opcao: "Pokébola", correto: false },
            { opcao: "Poção", correto: false },
            { opcao: "Pedra da Lua", correto: true },
            { opcao: "Antídoto", correto: false }
          ]
        },
        {
          pergunta: "Qual desses pokémons iniciais é do tipo planta?",
          respostas: [
            { opcao: "Charmander", correto: false },
            { opcao: "Squirtle", correto: false },
            { opcao: "Bulbasaur", correto: true },
            { opcao: "Pikachu", correto: false }
          ]
        },
        {
          pergunta: "Qual desses personagens acompanha Ash em grande parte de suas jornadas?",
          respostas: [
            { opcao: "Professor Carvalho", correto: false },
            { opcao: "Giovanni", correto: false },
            { opcao: "Misty", correto: true },
            { opcao: "Delia Ketchum", correto: false }
          ]
        },
        {
          pergunta: "Qual é o nome da cidade natal de Ash?",
          respostas: [
            { opcao: "Cerulean", correto: false },
            { opcao: "Pewter", correto: false },
            { opcao: "Pallet", correto: true },
            { opcao: "Viridian", correto: false }
          ]
        },
        {
          pergunta: "Qual desses pokémons é conhecido por suas habilidades psíquicas?",
          respostas: [
            { opcao: "Abra", correto: true },
            { opcao: "Pidgey", correto: false },
            { opcao: "Ekans", correto: false },
            { opcao: "Sandshrew", correto: false }
          ]
        }
      ];
  
  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }

  // PARTE 6: Função para reiniciar o jogo
  function reiniciarJogo() {
    indiceAtual = 0; // Reseta o índice da pergunta para a primeira
    acertos = 0;     // Reseta o contador de acertos
  
    conteudoFinal.style.display = "none"; // Esconde a tela final
    conteudo.style.display = "flex";    // Mostra a seção de perguntas
  
    carregarPergunta(); // Carrega a primeira pergunta novamente
  }

  // Obtém referência ao botão de reiniciar
  const botaoReiniciar = document.getElementById("btn_reiniciar");

  // Adiciona um event listener para o clique no botão de reiniciar
  botaoReiniciar.addEventListener("click", reiniciarJogo);
  
  // PARTE 7: Iniciando o jogo pela primeira vez
  carregarPergunta();
}