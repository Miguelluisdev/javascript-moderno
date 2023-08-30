/*const obj = {
  type: "BWM",
  model: "2009",
  color: "black"
};
// acesaro objeto
console.log(obj)
console.log(obj.type)
console.log(obj["model"])
console.log(obj.color)

//  metodos de objeto
*/

// objetos 2
let nome = "prop"
console.log(nome)
let objeto = {} 

objeto.prop = "ola mundo" // forma de adicionar elemento no objeto
console.log(objeto)
// tambem para mostyrar o objeto.prop
objeto[nome]
console.log(objeto)

objeto.prop === objeto[nome]
// pode por expressões ["pro" + "p" ]

const pessoa = {}

pessoa.nome = "darius"

pessoa.idade = 1000

pessoa.tamanho = "1.90m"

pessoa.rapeize = ["liz", "hanna", 'samuca']

pessoa.endereço = {

  rua: "landing",
  numero: 23 ,
  vbairro: "darius"

}


console.log(pessoa)