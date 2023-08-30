function soma(...valores){
   let tam = valores.length
  let res = 0
  for(let i = 0; i < tam; i++){
    res += valores[i] 
  }
  return res  // é uma array então retorna a quantidade de valores do param
}

console.log(soma(10,5,6,8,9,10))


// operar os valores 


// abaixo esta com rest e aninimo mais é um dos exemplos de usar rest com for of

const f = function(...valores){
  let res = 0
  for (v of valores){
    res += v
  }
  return res
}

console.log(f(56,67))