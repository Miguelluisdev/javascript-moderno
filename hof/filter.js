
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares); // Resultado: [2, 4, 6, 8, 10]
// Filtrar objetos com base em uma propriedade:
const usuarios = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 35 }
];

const usuariosMaioresDe30 = usuarios.filter(usuario => usuario.idade > 30);

console.log(usuariosMaioresDe30);
// Resultado: [{ nome: 'Maria', idade: 30 }, { nome: 'Pedro', idade: 35 }]

const palavras = ['carro', 'casa', 'banana', 'abacaxi', 'elefante'];

const palavrasComA = palavras.filter(palavra => palavra.includes('a'));

console.log(palavrasComA); // Resultado: ['casa', 'banana', 'abacaxi', 'elefante']
