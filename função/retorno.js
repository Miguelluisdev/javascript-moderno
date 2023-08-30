function calcularMEdia(a,b){
  const media = (a + b)/ 2
  return media // permite imprimir o resultado fora da function retornando a função
}

const resultado = calcularMEdia(10, 5) // valor da media armazenado 
console.log(resultado) // valor imprimido

function criarProduto(nome,preço){
    const produto = {
        nome,
        preço,
        estoque: 1
    }
    return produto;

}
// pode chamar o return direto como um valor em qualuqer lugar
//const notebook = criarProduto("notebook", 4200)
console.log(criarProduto("notebook", 4200))

function areaRetangular(base, altura){
  //const area = base * altura
  //return area
  return base * altura // o return direto sem variavel
}

console.log(areaRetangular(6,8))

function aeraQuadrada(lado){
  return areaRetangular(lado,lado) // o return retorna ate mesmo uma função
}

console.log(aeraQuadrada(8))

// caso especifico que pode ter varios return
function maioridade(idade){
  if (idade >= 18){
    return "maior de idade"
  } else{
    return "menor de idade"
  }
}

console.log(maioridade(25))
console.log(maioridade(12))