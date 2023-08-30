// O operador spread, representado por três pontos consecutivos (...), é uma característica poderosa do JavaScript que permite espalhar os elementos de uma estrutura (como um array ou um objeto) para criar cópias ou combinações de maneira mais conveniente. Ele é usado tanto para arrays quanto para objetos, mas seu comportamento varia um pouco dependendo do contexto.

// criar copia
const originalArray = [1, 2, 3];
const copiaArray = [...originalArray];
console.log(copiaArray); // [1, 2, 3]
// combinar arrys
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinado = [...array1, ...array2];
console.log(combinado); // [1, 2, 3, 4, 5, 6]
// adicionar elemento a um array existente
const array = [1, 2, 3];
const novoElemento = 4;
const arrayAtualizado = [...array, novoElemento];
console.log(arrayAtualizado); // [1, 2, 3, 4]

//  em objetos
// copiar um objeto
const objetoOriginal = { a: 1, b: 2 };
const copiaObjeto = { ...objetoOriginal };
console.log(copiaObjeto); // { a: 1, b: 2 }
//  mesclar
const objeto1 = { a: 1, b: 2 };
const objeto2 = { b: 3, c: 4 };
const objetoCombinado = { ...objeto1, ...objeto2 };
console.log(objetoCombinado); // { a: 1, b: 3, c: 4 }
// Adicionar ou substituir propriedades em um objeto existente:
const objeto = { a: 1, b: 2 };
const novaPropriedade = { c: 3 };
const objetoAtualizado = { ...objeto, ...novaPropriedade };
console.log(objetoAtualizado); // { a: 1, b: 2, c: 3 }
// Usos Avançados:
// O operador spread também é usado em muitos outros contextos, como em parâmetros de função para aceitar um número variável de argumentos, para clonar profundamente objetos aninhados, entre outros.
// Usando o spread para aceitar um número variável de argumentos em uma função
function soma(...valores) {
  return valores.reduce((total, valor) => total + valor, 0);
}

console.log(soma(1, 2, 3, 4, 5)); // 15
