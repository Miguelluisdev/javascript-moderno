const numero = document.getElementById("numero")


let promise = new Promise((resolve, reject)=>{

  let resultado = true
  let tempo = 3000

  setTimeout(()=> {
    if(resultado){
      resolve("tudo certo")
    } else{
      reject("tudo errado")
    }
  }, tempo)
  
})

promise.then((retorno)=>{
  numero.textContent = retorno
  numero.classList.add("ok")
  numero.classList.remove("erro")
})

promise.catch((retorno)=>{
  numero.textContent = retorno
  numero.classList.add("erro")
  numero.classList.remove("ok")
})


if (resultado){
  numero.innerHTML =" deu certo"
  numero.classList.add("erro")
  numero.classList.add("ok")
} else {
  numero.innerHTML = "deu erro"
  numero.classList.add("erro")
  numero.classList.remove("ok")
}

numero.textContent = "processando"