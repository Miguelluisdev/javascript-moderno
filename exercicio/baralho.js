/*
## Pilha de Cartas

Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
shift e unshift
*/


/*

notas finais esse deu tudo certo tambem usei a mesma logica do segundo excercicio
*/
const baralho = []
let choice = ""

do{

let cartas = ""
for (let i = 0; i < baralho.length; i++){
  cartas += "," + baralho[i]
  alert(cartas)
}

choice = prompt("Digite \n" + "\n 1  Adicionar Carta " +  " \n 2  puxar uma carta e " + " \n 3 Sair" )


switch (choice){
  case "1":
  let nome = prompt("qual o nome da carta ? ")
  baralho.unshift(nome)
  alert(cartas)
  break
  case "2":
    const puxada = baralho.shift()
    alert("a carta retirada foi " + puxada )
    alert(cartas)
    break
  case "3":
    alert("encerrando..")
    break
    default:
      alert("dado invalido")
      break
}

} while (choice !== "3")

/*Resolução do professor




const baralho = []
let opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho: " + baralho.length +
    "\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair"
  )

  switch (opcao) {
    case "1":
      const novaCarta = prompt("Qual é a carta?")
      baralho.push(novaCarta)
      break
    case "2":
      const cartaPuxada = baralho.pop()
      if (!cartaPuxada) {
        alert("Não há nenhuma carta no baralho!")
      } else {
        alert("Você puxou um(a) " + cartaPuxada)
      }
      break
    case "3":
      alert("Saindo...")
      break
    default:
      alert("Opção inválida!")
  }

} while (opcao !== "3");







*/