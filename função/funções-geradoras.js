//* para indicarf que é uma f geradora
// yield  retornador
// iterador
/*
function* cores(){
    yield 'vermelho'
    yield 'verde'
    yield ' azul'
} 

// chamada da função

let itc = cores()
//imprime vermelho
console.log(itc.next().value) // indica que é gerador
// imprime verde
console.log(itc.next().value)
// imprime azul
console.log(itc.next().value)
*/

function* perguntas(){
  const nome = yield 'qual seu nome'
  const esporte = yield 'qual seu esporte favorito'
  const idade = yield 'qual sua idade'
  return "seu nome é " + nome + "seu esporte é" + esporte + "sua idade é " + idade
}

const itp = perguntas()
console.log(itp.next().value) // o primeiro retorno é vazio
console.log(itp.next('darius').value)
console.log(itp.next('futebol').value)
console.log(itp.next('888').value)

// loop infinito com * gerador

function* contador(){
  let i = 0
  while(true){
    yield i++
  }
}

const itc = contador()
console.log(itc.next().value)
console.log(itc.next().value)
