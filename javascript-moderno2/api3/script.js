const endpoint ="http://apiteste.miguelluis4.repl.co"

let res = fetch(endpoint)

.then(res => res.json())
.then(dados => {
  console.log(dados)
})