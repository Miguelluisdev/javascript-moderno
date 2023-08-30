// função recursiva chama ela mesma
// no caso dessa valida até não ter mais numero par e retorna o numero final
function dividir(num){ 
  console.log(num)
  if (num % 2 === 0){
    dividir(num / 2)
  } else{
    return num
  }
}


//dividir(256)
// func rec precisar ter uma condição falsa caso contratio pode ser infinita
function dobrarI(num){
  console.log(num)
}

//dobrarI(1)
// functiom fatorial
function fatorial(num){
  console.log("numero :" + num)
  if(num === 0){ // caso base
    return 1
  } else if ( num === 1){
    return 1
  }
  else{
    console.log(num + " * ! " + (num - 1))
    return num * fatorial(num - 1)
  }
}
