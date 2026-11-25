// =====================================================================
//  LISTA DE TAREFAS - TRABALHO DE DESENVOLVIMENTO WEB
//
//  Este arquivo tem 3 partes:
//
//    PARTE 1 - CONFIGURAÇÃO ..... o nome do grupo            (Missão 1)
//    PARTE 2 - MISSÕES .......... vocês montam as funções    (Missões 2 a 5)
//    PARTE 3 - PEÇAS PRONTAS .... NÃO PRECISA MEXER, é só usar
//
//  Funciona como um LEGO: as peças já existem (Parte 3).
//  O trabalho do grupo é encaixar as peças na ordem certa (Parte 2).
//  O manual de cada peça está no arquivo TRABALHO.md.
// =====================================================================


// =====================================================================
//  PARTE 1 - CONFIGURAÇÃO
// =====================================================================

// Endereço da API (o servidor que guarda as tarefas). Não mude.
const API_URL = "https://api-production-7f711ce6.up.railway.app";

// MISSÃO 1: escrevam o nome do grupo entre as aspas.
// A turma inteira usa a mesma API. É o nome do grupo que separa
// as tarefas de vocês das tarefas dos outros grupos.
// Escolham um nome que nenhum outro grupo vai usar.
// Exemplo: const NOME_DO_GRUPO = "Grupo 3 - Ana, João e Bia";
const NOME_DO_GRUPO = "";


// =====================================================================
//  PARTE 2 - MISSÕES
//  Escreva o código dentro de cada função, embaixo dos comentários.
// =====================================================================

// ---------------------------------------------------------------------
// MISSÃO 2: mostrar as tarefas na tela
// Esta função roda sozinha quando a página abre.
// ---------------------------------------------------------------------
async function carregarLista() {
  // Passo 1: busque as tarefas na API e guarde em uma variável.
  //          Escreva a linha abaixo (sem as barras):
  //
  //          const tarefas = await buscarTarefas();

  // Passo 2: desenhe as tarefas na tela.
  //          Escreva a linha abaixo (sem as barras):
  //
  //          desenharTarefas(tarefas);

}

// ---------------------------------------------------------------------
// MISSÃO 3: adicionar uma tarefa nova
// Esta função roda quando alguém clica no botão "Adicionar".
// ---------------------------------------------------------------------
async function adicionarTarefa() {
  // Passo 1: use a peça lerTitulo() e guarde o resultado
  //          em uma variável chamada titulo.

  // Passo 2: use a peça lerPrioridade() e guarde o resultado
  //          em uma variável chamada prioridade.

  // Passo 3: use a peça criarTarefa(titulo, prioridade).
  //          Não esqueça do await na frente!

  // Passo 4: use a peça limparFormulario().

  // Passo 5: chame carregarLista() para a tela atualizar.
  //          Não esqueça do await na frente!

}

// ---------------------------------------------------------------------
// MISSÃO 4: concluir uma tarefa
// Esta função roda quando alguém clica no botão "Concluir".
// O "id" é o número da tarefa que foi clicada.
// ---------------------------------------------------------------------
async function concluirTarefa(id) {
  // Passo 1: use a peça mudarStatus(id, "concluida").
  //          Não esqueça do await na frente!

  // Passo 2: chame carregarLista() para a tela atualizar.

}

// ---------------------------------------------------------------------
// MISSÃO 5: apagar uma tarefa
// Esta função roda quando alguém clica no botão "Apagar".
// O "id" é o número da tarefa que foi clicada.
// ---------------------------------------------------------------------
async function removerTarefa(id) {
  // Passo 1: use a peça apagarTarefa(id).
  //          Não esqueça do await na frente!

  // Passo 2: chame carregarLista() para a tela atualizar.

}


// =====================================================================
//  PARTE 3 - PEÇAS PRONTAS
//  Não precisa mexer daqui para baixo. É só usar na Parte 2.
//  (Mas pode ler à vontade para ver como funciona!)
// =====================================================================

// ---------- Peças que conversam com a API ----------

// Busca na API todas as tarefas do grupo. Devolve uma lista.
async function buscarTarefas() {
  const tarefas = await chamarApi("GET", "/tarefas?responsavel=" + encodeURIComponent(NOME_DO_GRUPO));
  return tarefas || [];
}

// Cria uma tarefa nova na API, já com o nome do grupo como responsável.
async function criarTarefa(titulo, prioridade) {
  if (!titulo) {
    mostrarAviso("Escreva o título da tarefa antes de adicionar.");
    return null;
  }
  return chamarApi("POST", "/tarefas", {
    titulo: titulo,
    prioridade: prioridade,
    responsavel: NOME_DO_GRUPO,
  });
}

// Muda o status de uma tarefa.
// O status pode ser "a_fazer", "em_andamento" ou "concluida".
async function mudarStatus(id, status) {
  return chamarApi("PATCH", "/tarefas/" + id, { status: status });
}

// Apaga uma tarefa da API.
async function apagarTarefa(id) {
  return chamarApi("DELETE", "/tarefas/" + id);
}

// ---------- Peças que mexem na tela ----------

// Devolve o texto que a pessoa digitou no campo de título.
function lerTitulo() {
  return document.querySelector("#campo-titulo").value.trim();
}

// Devolve a prioridade escolhida: "baixa", "media" ou "alta".
function lerPrioridade() {
  return document.querySelector("#campo-prioridade").value;
}

// Apaga o que estava digitado, deixando pronto para a próxima tarefa.
function limparFormulario() {
  document.querySelector("#campo-titulo").value = "";
  document.querySelector("#campo-prioridade").value = "media";
  document.querySelector("#campo-titulo").focus();
}

// Mostra uma mensagem na caixa amarela de avisos.
function mostrarAviso(mensagem) {
  document.querySelector("#aviso").textContent = mensagem;
}

// Mostra um texto no contador (usado no desafio opcional).
function mostrarContador(texto) {
  document.querySelector("#contador").textContent = texto;
}

// Recebe uma lista de tarefas e desenha todas elas na tela.
// Cada tarefa vira um pedaço de HTML assim (as classes são usadas no style.css):
//
//   <li class="tarefa prioridade-alta">
//     <span class="titulo">Estudar HTML</span>
//     <span class="etiqueta">Alta</span>
//     <button class="botao-concluir">Concluir</button>
//     <button class="botao-apagar">Apagar</button>
//   </li>
//
// Quando a tarefa está concluída, o <li> ganha também a classe "concluida".
function desenharTarefas(tarefas) {
  const lista = document.querySelector("#lista-tarefas");
  lista.innerHTML = "";

  if (!tarefas || tarefas.length === 0) {
    const vazio = document.createElement("li");
    vazio.className = "vazio";
    vazio.textContent = "Nenhuma tarefa por aqui. Adicionem a primeira!";
    lista.appendChild(vazio);
    return;
  }

  // As tarefas concluídas vão para o fim da lista.
  const pendentes = tarefas.filter((tarefa) => tarefa.status !== "concluida");
  const concluidas = tarefas.filter((tarefa) => tarefa.status === "concluida");

  for (const tarefa of pendentes.concat(concluidas)) {
    const item = document.createElement("li");
    item.className = "tarefa prioridade-" + tarefa.prioridade;

    const titulo = document.createElement("span");
    titulo.className = "titulo";
    titulo.textContent = tarefa.titulo;
    item.appendChild(titulo);

    const etiqueta = document.createElement("span");
    etiqueta.className = "etiqueta";
    etiqueta.textContent = NOMES_DAS_PRIORIDADES[tarefa.prioridade] || tarefa.prioridade;
    item.appendChild(etiqueta);

    if (tarefa.status === "concluida") {
      item.classList.add("concluida");
    } else {
      const botaoConcluir = document.createElement("button");
      botaoConcluir.className = "botao-concluir";
      botaoConcluir.textContent = "Concluir";
      botaoConcluir.addEventListener("click", () => concluirTarefa(tarefa.id));
      item.appendChild(botaoConcluir);
    }

    const botaoApagar = document.createElement("button");
    botaoApagar.className = "botao-apagar";
    botaoApagar.textContent = "Apagar";
    botaoApagar.addEventListener("click", () => removerTarefa(tarefa.id));
    item.appendChild(botaoApagar);

    lista.appendChild(item);
  }
}

// ---------- Motor (usado pelas peças acima) ----------

const NOMES_DAS_PRIORIDADES = { baixa: "Baixa", media: "Média", alta: "Alta" };

// Faz o pedido para a API e devolve a resposta.
// Se algo der errado, mostra um aviso na tela e devolve null.
async function chamarApi(metodo, caminho, dados) {
  const opcoes = { method: metodo };

  if (dados) {
    opcoes.headers = { "Content-Type": "application/json" };
    opcoes.body = JSON.stringify(dados);
  }

  try {
    const resposta = await fetch(API_URL + caminho, opcoes);

    // 204 quer dizer "deu certo e não tem nada para devolver" (é o caso do apagar).
    if (resposta.status === 204) {
      mostrarAviso("");
      return true;
    }

    const corpo = await resposta.json();

    if (!resposta.ok) {
      const detalhes = corpo.detalhes ? " " + corpo.detalhes.join(" ") : "";
      mostrarAviso("A API respondeu com erro: " + corpo.erro + detalhes);
      return null;
    }

    // Deu certo. Se foi uma alteração (criar, mudar, apagar), limpa o aviso antigo.
    if (metodo !== "GET") {
      mostrarAviso("");
    }
    return corpo;
  } catch (erro) {
    console.error(erro);
    mostrarAviso("Não consegui falar com a API. Confiram a internet e tentem de novo.");
    return null;
  }
}

// ---------- Ligação dos botões e início da página ----------

document.querySelector("#form-tarefa").addEventListener("submit", (evento) => {
  evento.preventDefault(); // impede a página de recarregar ao enviar o formulário
  adicionarTarefa();
});

if (NOME_DO_GRUPO === "") {
  mostrarAviso("Missão 1: abram o arquivo script.js e escrevam o nome do grupo em NOME_DO_GRUPO.");
} else {
  document.querySelector("#dono").textContent = "Lista de: " + NOME_DO_GRUPO;
  carregarLista();
}
