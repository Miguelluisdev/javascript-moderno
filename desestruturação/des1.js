// Desestruturação de Objetos:
const pessoa = {
  nome: 'João',
  idade: 30,
  cidade: 'São Paulo'
};

// Desestruturando o objeto pessoa
const { nome, idade, cidade } = pessoa;

console.log(nome);    // 'João'
console.log(idade);   // 30
console.log(cidade);  // 'São Paulo'


const frutas = ['maçã', 'banana', 'laranja'];

// Desestruturando o array de frutas
const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1); // 'maçã'
console.log(fruta2); // 'banana'
console.log(fruta3); // 'laranja'

const numeros = [1, 2, 3, 4, 5];

// Desestruturando o array de números, ignorando o terceiro elemento
const [primeiro, segundo, , quarto, quinto] = numeros;

console.log(primeiro); // 1
console.log(segundo);  // 2
console.log(quarto);   // 4
console.log(quinto);   // 5
console.log(numeros);

const person = {
  name: "Luke",
  job: "Farmer",
  parents: ["Anakin", "Padme"]
}

const name = person.name

const { job, parents } = person

console.log(name, job, parents)

const [father, mother] = parents

console.log(father, mother)

function createUser({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999)
  return {
    id,
    name,
    job,
    parents
  }
}

const luke = createUser(person)

console.log(luke)