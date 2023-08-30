function somar(a,b){
  return a + b
}

let operação = somar // operação = a função somar a operação se torna a função 

console.log(operação(7,8))

operação = function(a, b){ // função anonima
  return a - b
}

console.log(operação(7,8))

// Com as funções anônimas podemos, por exemplo,
// atribuir uma função a uma chave de objeto
const calculadora = {}
calculadora.somar = somar
//calculadora.subtrair = subtrair
calculadora.multiplicar = function (a, b) {
  return a * b
}
console.log(calculadora.multiplicar(3, 7))


// Funções anônimas só podem ser chamadas após a atribuição da variável,
// elas não são jogadas para o topo do arquivo como funções normais
olaMundo()
//oiMundo()

function olaMundo() {
  console.log("Olá, mundo!")
}
/*
const oiMundo = function () {
  console.log("Oi, mundo!")
}
*/
// pode ser usada com rest

const f = function(...valores){
  let res = 0
  for (v of valores){
    res += v
  }
  return res
}

console.log(f(56,67))

// função construtora com anonima
// usando o operador new

const construtora = new Function("v1","v2","v3", "return v1+v2+v3")

console.log(construtora(10,5,16)) 