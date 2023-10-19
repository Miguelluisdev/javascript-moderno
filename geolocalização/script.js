const long = document.getElementById("long")
const lati = document.getElementById("lati")

if (navigator.geolocation){

  navigator.geolocation.getCurrentPosition(showLocale,ErrorLocale)
} else {

  console.log("localização não suportada")
}

function showLocale(pos){
  console.log(pos)
  long.innerHTML = pos.coords.longitude
  lati.innerHTML = pos.coords.latitude
}


function ErrorLocale(){
  console.log("erro ao obter a localização")
}