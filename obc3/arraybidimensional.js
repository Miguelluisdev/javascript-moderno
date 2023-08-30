/*let arrBi = [ ['eork', 3] ,["weat", 5] , ["smoke", 8] , ["Play", 12]  ]
cons,ole.table(arrBi)

console.log("externo e interno " + arrBi[0][3])
*/
/*
let arr = [
[  "1nivel",
  '2 nivel',
  "3nivel"      

]
,
[    "1nivel" ,
    '2 nivel',
    "3nivel"      

]
,
[   "1nivel",
    '2 nivel',
    "3nivel"      

]
,
]

console.log(arr)*/

// Arrays podem receber qualquer tipo da dado, inclusive outros arrays
const arr = [
  "1º Nível",
  ["2º nível", 42, true],
  [
    ["3º nível, 1º item", "Olá, mundo!"],
    ["3º nível, 2º item", "Oi, mundo!"],
  ],
  []
]
console.log(arr)
console.log(arr[0])
console.log(arr[1][0])
console.log(arr[1][1])
console.log(arr[2][0])
console.log(arr[2][1])
console.log(arr[2][0][0])
console.log(arr[2][1][0])

// Podemos ver claramente a estrutura de uma matriz em uma tabela
const matriz = [
  ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
  ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
  ["l3, c1", "l3, c2", "l3, c3", "l3, c4"],
]
console.table(matriz)
matriz[1].push("l2 c5")
matriz[0].unshift("l1 c0")
console.table(matriz)
// Podemos usar vários níveis de laços FOR para iterar facilmente pela matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    const elemento = matriz[i][j]
    console.log("Posição: (" + i + ", " + j + ") Valor: " + elemento)
  }
}
// console.table é muito util para loxalizar elementpos ver aonde eles estão dentro da array bidimensional