const listaDeCompras = [ 2 ,3 ,8 ,5 ,6]
let i = listaDeCompras.indexOf(6)

console.log("o valor está na posição " + i)
if(i === -1){
  console.log("não há este valor dentro da lista")
} else{
  console.log(`a array tem ${listaDeCompras.length} elementos e eles são ${listaDeCompras} `)
}


//console.log(listaDeCompras)

//listaDeCompras[0] = "pizza"

//listaDeCompras[1] = "battata"
listaDeCompras.push(1)

listaDeCompras.sort()

//console.log(`a array tem ${listaDeCompras.length} elementos e eles são ${listaDeCompras} `)
