// refazendo o exercicio 8 da one bit code modulo 1 js
/* Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.

*/
const imoveis = []
let option = ""

do{
 option = prompt("imoveis cadastrados: \n " + imoveis.length + " \n 1. Salvar um imovel " + " \n 2. listar imovel " + " \n 3. sair")


switch(option){
  case "1":
    let imovel = {}
    imovel.proprietario = prompt("informe o nome do proprietario: ")
    imovel.quartos = prompt("informe a quantidade de quartos: ")
    imovel.banheiros = prompt("informe a quantidade de banheiros: ")
    imovel.garagem = prompt("Possui Garagem? (Sim/Não) ")
   
    const confirmar = confirm(
       "\n Deseja Salvar Imovel? " +
       "\n Proprietario: " + imovel.proprietario +
       "\n Quartos :" + imovel.quartos +
       "\n Banheiros: " + imovel.banheiros +
       "\n garagem: " + imovel.garagem
    )

    if (confirmar){
      imoveis.push(imovel)
      alert("imovel cadastrado com sucesso")
    } else{
      alert("voltando ao menu")
    }
   
    break
  case "2":
      	for(let i = 0; i < imoveis.length; i++){
            alert(
                    "imoveis listados: " + (i + 1) +
                    "\n nome do proprietario : " + imoveis[i].proprietario +
                    "\n Quartos: " + imoveis[i].quartos +
                    "\n banheiros: " + imoveis[i].banheiros +
                    "\n Possui garagem: " + imoveis[i].garagem
            )
        }
    break

  case "3":
    alert("encerrando")
  break

  default:
    alert("dados invalidos")
  break

}
} while (option !== "3")