const numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {
  console.log(numero * 2);
});

const nomes = ['João', 'Maria', 'Pedro'];

nomes.forEach((nome, index, array) => {
  array[index] = nome.toUpperCase();
});

console.log(nomes);
// Resultado: ['JOÃO', 'MARIA', 'PEDRO']
