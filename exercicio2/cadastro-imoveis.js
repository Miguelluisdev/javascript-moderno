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

// notais finais so não consegui mostrar os imoveis no case 2 tove que ver como gpt
let imoveis = []
let option = ""

do{
  option = prompt(" imoveis cadastrados \n " + imoveis.length + " \ndigite \n 1 Cadastrar imovel " + " \n 2 mostrar imovel" + "\n 3 Sair"    )

  switch(option){
    case "1":
      let cadastro = {}
      cadastro.proprietario = prompt("Nome do proprietatio ")
      cadastro.quartos = prompt("quantidade de quartos?")
      cadastro.banheiros = prompt('quantidade de banheiro?')
      cadastro.garagem = prompt("Possui Garagem?")

      const confirma = confirm(
        "Salvar este imóvel?\n" +
        "\nProprietário: " + cadastro.proprietario +
        "\nQuartos: " + cadastro.quartos +
        "\nBanheiros: " + cadastro.banheiros +
        "\nPossui Garagem? " + cadastro.garagem
      )
      if (confirma){
        imoveis.push(cadastro)
        alert("imovel cadastrado com sucesso")
      } else {
        alert("voltando para o menu")
      }

 break    
 

  case "2":
    for (let i = 0; i < imoveis.length; i++){
      alert(
        "Imovel " + (i + 1) +
        "\n proprietario " + imoveis[i].proprietario +
        "\n quartos " + imoveis[i].quartos +
        "\n banheiros " + imoveis[i].banheiros +
        "\n garagem " + imoveis[i].garagem 
      )
    }

break

 case "3":
  alert("encerrando...")
  break
  default:
    alert("dados invalidos")
    break

  }


} while (option !== "3")


/*const confirmar = prompt("deseja confirmar o imovel? sim/não " )
 if (confirmar === "sim"){

  alert("confirmado com sucesso \n" +
        "\n proprietario" + imoveis.propriedade +
        " \n quartos" + imoveis.quartos +
        "\n banehiro " + imoveis.banheiro +
        "\n garagem " + imoveis.garagem
        )

} else {
  alert("imovel não confirmado")
}
*/
