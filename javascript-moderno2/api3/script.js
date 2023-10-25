const p_temp = document.getElementById("p_temp")

const p_nivel = document.getElementById("p_nivel")

const p_presss= document.getElementById("p_press")

const btn_fetch = document.getElementById("btn_texto")

const obterDados = () => {
  
  const endpoint ="http://apiteste.miguelluis4.repl.co"
  
  let res = fetch(endpoint)
  
  .then(res => res.json())
  .then(dados => {
    console.log(dados)
  
    p_temp.textContent = "remperatua:" + dados.temp
  
    
    p_nivel.textContent = "nivel:" + dados.nivel
  
    
    p_presss.textContent = "pressao:" + dados.pressao
  })

}

// let interval = setInterval(obterDados,2000)

let dados = {
  nome: "darius", 
  canal: "dariusmito1",
  curso: "deus"

}

let cabecalho = {
  method: "POST",
  body: JSON.stringify(dados)
}

const gravarDados = () => {
  const endpoint = "https://apiteste.miguelluis4.repl.co"

  fetch(endpoint, cabecalho)
  .then(res => res.json())
  .then(ret => {
    console.log(ret)
  })
}

btn_fetch.addEventListener("click" , () => {
  gravarDados()
})