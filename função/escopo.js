let pokemon = "charmander" // escopo externo pode ser usado no interno

function evoluir(){
  pokemon = "charmeleon"
}
// o primeiro console tem o valor do escopo externo 
console.log(pokemon)
evoluir() // chama a funçao para mudar o valor e imprimir charmeleon
console.log(pokemon)

function criarAnimal(){
  let animal = "gato" // as var internas não podem ser usadas externamente nesse caso só usar return
}