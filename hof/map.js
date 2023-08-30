const cursos = ['html', 'javascript', 'php', 'css', 'react']
// todos eles tem elemente, index e array
const c = cursos.map((element, index) =>  element + index)
console.log(c)

const usuarios = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 35 }
];

const nomes = usuarios.map(usuario => usuario.nome);

console.log(nomes); // Resultado: ["João", "Maria", "Pedro"]

const numeros = [1, 2, 3, 4, 5];

const quadrados = numeros.map(numero => numero ** 2);

console.log(quadrados); // Resultado: [1, 4, 9, 16, 25]

const timestamps = [1621012400000, 1621098800000, 1621185200000];

const datasFormatadas = timestamps.map(timestamp => {
  const data = new Date(timestamp);
  return data.toLocaleDateString('pt-BR');
});

console.log(datasFormatadas); // Resultado: ["14/05/2021", "15/05/2021", "16/05/2021"]
