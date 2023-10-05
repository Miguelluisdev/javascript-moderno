const numero = document.getElementById("numero")
const btn_promesa = document.getElementById("btn_promesa")


btn_promesa.addEventListener("click", (evt) => {
  numero.textContent = "processando"

 promesa()
    .then((retorno)=>{
      numero.textContent = retorno
      numero.classList.add("ok")
      numero.classList.remove("erro")
    })

    .catch((retorno)=>{
      numero.textContent = retorno
      numero.classList.add("erro")
      numero.classList.remove("ok")
    })

})


const promesa = () => {
  let  p = new Promise((resolve, reject)=>{

    let resultado = false
    let tempo = 3000
  
    setTimeout(()=> {
      if(resultado){
        resolve("tudo certo")
        numero.classList.add("erro")
        numero.classList.add("ok")
      } else{
        reject("tudo errado")
        numero.classList.add("erro")
        numero.classList.remove("ok")
      }
    }, tempo)
  })
  

  
return p
}

numero.textContent = "esperando"