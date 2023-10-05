const div_relogio = document.getElementById("div_relogio")
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
}

const intervalo = setInterval(()=>{
  relogio()
},1000)
