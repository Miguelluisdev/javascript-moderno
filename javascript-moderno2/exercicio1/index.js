function imc(weight,height){
  return new Promise((resolve,reject)=>{
      if(typeof weight !== "number" || typeof height !== "number"){
        reject("this arguments must be a number")
      } else {
        resolve(weight / (height * height))
      }
  })
}

function showImc(weight,height){
  imc(weight,height)
  .then((result) => {
    console.log(`o reaultado do imc foi ${result.toFixed(1)}`)
    
    if(result < 18.5) console.log("Situação: Magreza")
    else if (result < 25) console.log("Situação: Normal")
    else if (result < 30) console.log("Situação: Sobrepeso")
    else if (result < 40) console.log("Situação: Obesidade")
    else console.log("Situação: Obesidade Grave")
  })
  .catch((err) => {
      console.log(err)
  })

  console.log(`calculando o IMC, seu peso: ${weight} , sua altura: ${height}`)
}

showImc(63 , 1.78)
showImc(88 , 1.90) 
showImc(55, 1.63)
showImc(63 , "darius")