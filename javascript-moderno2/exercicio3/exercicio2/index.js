 async function imc(weight,height){

  if(typeof weight !== "number" || typeof height !== "number"){
    return Promise.reject("this arguments must be a number")
  }
  return weight / (height * height)
}

 async function showImc(weight,height){

  try {
    console.log(`calculando o IMC, seu peso: ${weight} , sua altura: ${height}`)
  
    const result = await imc(weight,height)
 
    console.log(`o reaultado do imc foi ${result.toFixed(1)}`)
    
    if(result < 18.5) console.log("Situação: Magreza")
    else if (result < 25) console.log("Situação: Normal")
    else if (result < 30) console.log("Situação: Sobrepeso")
    else if (result < 40) console.log("Situação: Obesidade")
    else console.log("Situação: Obesidade Grave")
  } catch (error) {
    console.log(error)
  }

  console.log(`calculando o IMC, seu peso: ${weight} , sua altura: ${height}`)

 }

showImc(63 , 1.78)
showImc(88 , 1.90) 
showImc(55, 1.63)
showImc(63 , "darius")