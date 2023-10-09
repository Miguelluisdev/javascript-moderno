const div_relogio = document.getElementById("div_relogio")
const div_data = document.getElementById("div_data")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

const som_alarme = new Audio("alarme.mp3")
som_alarme.loop = -1

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click" , () => {
  ts_atual = Date.now()
  ts_alarme = ts_atual + (tmp_alarme.value * 1000)
  alarme_ativado = true
  const dt_alarme = new Date(ts_alarme)
  hora_alarme.textContent = "Hora do alarme:" + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})

btn_parar.addEventListener("click" , () => {
  alarme_ativado = false
  alarme_tocando = false
  hora_alarme.textContent = "hora do alarme:"
  tmp_alarme.value = 0
  timer.classList.remove("alarme")
  som_alarme.pause()
  som_alarme.currentTime = 0
})
const data = new Date()

const relogio = () => {

  const data = new Date()

  let hora = data.getHours()
  hora = hora < 10 ? "0" + hora : hora
  console.log(hora)
  let minuto = data.getMinutes()
  minuto = minuto < 10 ? "0" + minuto : minuto
  let segundos = data.getSeconds()
  segundos = segundos < 10 ? "0" + segundos : segundos
  const hora_format = hora + ":" + minuto + ":" + segundos
  div_relogio.textContent = hora_format

  if (alarme_ativado && !alarme_tocando){
    if(data.getTime() >= ts_alarme){
      alarme_tocando = true
      som_alarme.play()
      timer.classList.add("alarme")
    }
  }
}

const intervalo = setInterval(()=>{
  relogio()
},1000)
