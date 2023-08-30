const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
//  o orimeiro metodo sera o Map
// comportamento do map sem usar ele
/*
const nomes = []

for (let i = 0; i < personagens.length; i++){
  nomes.push(personagens[i].nome)
}
*/
// usando map agora
const nomes = personagens.map(function(personagem){
  return personagem.nome
})
console.log(nomes)

// metodo filter
// sem usar filter fazendo a mesma coisa
/*
const orcs = []
for (let i = 0; i < personagens.length; i++) {
 if(personagens[i].raca === "Orc"){
  orcs.push(personagens[i])
 }
}
*/
const orcs = personagens.filter(function(personagem){
  return personagem.raca === "Orc"
})
console.log(orcs)

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
  return valorAcumulado + personagem.nivel
}, 0) // esse 0 é o valor do reduce
console.log(nivelTotal)

// mais exemplo de reduce

const race = personagens.reduce(function(valorAcumulado, personagem){
  if(valorAcumulado[personagem.raca]){
    valorAcumulado[personagem.raca].push(personagem)
  } else{
    valorAcumulado[personagem.raca] = [personagem]
  }
  return valorAcumulado
}, {})
console.log(race)

// metodo sort() o sort altera o valor principal
const  personagensOrdenados = personagens.slice().sort(function(a,b){
 // ordem crescente return a.nivel - b.nivel
 return b.nivel - a.nivel
})

console.log(personagens)
console.log(personagensOrdenados)