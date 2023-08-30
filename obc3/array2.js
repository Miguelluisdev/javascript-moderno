const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]

// adicionar elementos no final da array
// push

let tamanho = arr.push("darius")
console.log(tamanho)

// adicionar elemento no incio da array
// unshift

tamanho = arr.unshift("boromir")
console.log(tamanho)

// remover elementos no final da array
// pop

let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// remover eleemnto no inicio
// shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

// verificar o elemento com true ou falsze
// includes
const inclui = arr.includes("dickens")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array podendo por if e else para validar os item da litsa
const indice = arr.indexOf("Gandalf")
console.log(indice)

// cortar e concatenar
// slice
const  hobbits = arr.slice(0,4)
const outros = arr.slice(-4)
console.log(outros)
console.log(hobbits)
// concatenaer
// concat()
const sociedade = hobbits.concat(outros, "darius", "borormir" )
console.log(sociedade)

// substuir e remiver elementos
// splice()
const subs = sociedade.splice(indice, 2, "Gandalf O Cinzento", "liz")
console.log(sociedade)
console.log(subs)

//iterar os elementos , percorrer o array
// com for
// com esse for abaixo diz qualç é a posiç~çao de cada um
for( let i = 0; i < sociedade.length; i++){
const elementos =  sociedade[i]
console.log(elementos + " se encontra na posição " + i )
}