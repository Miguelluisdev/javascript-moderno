const soma = (...valores) => {
  const somar = val =>{
    let res = 0
    for (v of val){
      res += v
    } // as chaves do for não deixavam a conta não sei pq
    return res // era so por o return fora animal
    
  }
  return somar(valores) // a função soma retorna o retorno da função somar
}

console.log(soma(12,6,11,13,45,))