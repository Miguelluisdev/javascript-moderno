/*
## Fila de Espera

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/ 


/*
notas finais travei na hora de mostrar a lista e criar lets para o shift e push, no caso consegui mostrar a lista so cometi um erro de não por nada na array, o que faltou foi por a numeração da lista
*/
const listaPacientes = ["darius", "ronald" , "luan" , "doric "]
let option = ""

do{


  let pacientes = ""
  for (let i = 0; i < listaPacientes.length; i++) {
    pacientes += (i + 1) + "º - " + listaPacientes[i] + "\n"
  
  }
  
  option = prompt(" Digite \n " + "1. Novo paciente \n"  + "2. Consultar paciente \n " + "3. Sair" );

  if(option === "1"){
   let nome = prompt("digite o nome do paciente");

    listaPacientes.push(nome);

    alert(nome + " paciente adicionado a fila ") ;   
    alert(pacientes)

  } else if (option === "2"){

  let paciente = listaPacientes.shift();

  alert("paciente consultado " + paciente);
  alert(pacientes)

  } 

} while(option !== "3")
/*exercicio do professor








let fila = []
let opcao = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcao = prompt(
    "Pacientes:\n" + pacientes +
    "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!")
      } else {
        alert(pacienteConsultado + " foi removido da fila.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");
*/