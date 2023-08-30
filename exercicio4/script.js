/*
## Sistema de Vagas de Emprego

Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis feito
    - Criar um nova vaga feito
    - Visualizar uma vaga feito
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.


*/
const jobs = [];

function listarVagas() {
  const showVagas = jobs.reduce((finalText, vagas, indice) => {
    finalText +=
      " indice das vagas " +
      indice +
      " . " +
      finalText +
      vagas.nome +
      finalText +
      " ( " +
      vagas.candidatos.length +
      " candidatos ) \n";
    return finalText;
  }, "");
  alert(showVagas);
}

function newVagas() {
  const nome = prompt("digite um nome para a vaga");
  const description = prompt("digite uma descrição para a vaga");
  const limitDate = prompt("digite uma data limite ");

  const showConfirm = confirm(
    "\n deseja confirmar vaga? " +
      "\n nome " +
      nome +
      "\n descrição " +
      description +
      "\n data limite " +
      limitDate
  );
  if (showConfirm) {
    const addVagas = { nome, description, limitDate, candidatos: [] };
    jobs.push(addVagas);
    alert("vaga criada");
  } else {
    alert("voltando ao menu");
  }
}

function exibirVagas() {
  const indice = prompt(" informe o indice da vaga ");
  if (indice >= jobs.length || indice < 0) {
    alert("indice invalido, vaga inexistente");
    return;
  }
  const vaga = jobs[indice];
  const mostraCandidato = vaga.candidatos.reduce((textEnd, canditados) => {
    return textEnd + ". - " + canditados;
  }, "");
  alert(
    "\n Vagas " +
      indice +
      "\n Nome " +
      vaga.nome +
      " \n Descrção " +
      vaga.description +
      " \n Data Limite " +
      vaga.limitDate +
      " Quantidade de Candidatos " +
      vaga.candidatos.length +
      "Nome dos Candidatos " +
      mostraCandidato
  );
}

function novoCandidato() {
  const candidato = prompt("digite o nome do candidato ");
  const indice = prompt(" informe o indice da vaga que deseja-se candidatar ");
  const vaga = jobs[indice];

  const confirmar = confirm(
    "\n Deseja confirmar a inscrição? " +
      "\n Nome do candidato " +
      candidato +
      "\n Indice da vaga " +
      vaga.indice +
      "\n descrição " +
      vaga.description +
      "\n data limite " +
      vaga.limitDate
  );
  if (confirmar) {
    vaga.candidatos.push(candidato);
    alert("candidato confirmado");
  } else {
    alert("candidato cancelado... voltando ao menu...");
  }
}

function excluirVaga() {
  const indice = prompt(" digite o indice da vaga que deseja excluir ");
  const vaga = jobs[indice];
  const confirmar = confirm(
    "\n Deseja excluir a vaga? " +
      "\n indice " +
      indice +
      "\n  nome " +
      vaga.nome +
      "\n Descrição " +
      vaga.description +
      "\n Data Limite " +
      vaga.limitDate +
      "\n Candidatos " +
      vaga.candidato
  );
  if (confirmar) {
    vaga.splice(indice, 1);

    alert("vaga excluida...");
  } else {
    alert("vaga não excluida, voltando ao menu..");
  }
}

// // if (showConfirm) {
//   const addVagas = { nome, description, limitDate, candidatos: [] };
//   jobs.push(addVagas);
//   alert("vaga criada");
// } else {
//   alert("voltando ao menu");
// }
// }

const showMenu = () => {
  const option = prompt(
    " Vagas de empregos \n" +
      "1. Listar vagas Disponiveis \n" +
      "2. Criar uma nova vaga \n " +
      "3 visualizar uma nova vaga \n " +
      "4. inscrever um candidato a vaga \n " +
      "5. excluir uma vaga " +
      "\n 6. Sair \n "
  );
  return option;
};

function execult() {
  let opção = ""; // cria para armazenar a function e chamar no switch
  do {
    opção = showMenu();

    switch (opção) {
      case "1":
        listarVagas();
        break;
      case "2":
        newVagas();
        break;
      case "3":
        exibirVagas();
        break;
      case "4":
        novoCandidato();
        break;
      case "5":
        excluirVaga();
        break;

      case "6":
        alert("encerrandio");
        break;
      default:
        alert("dados invalidos");
        break;
    }
  } while (opção !== "6");
}

execult();
