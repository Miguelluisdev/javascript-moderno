// high order function
function calcular(a, b, operaçao) {
  // cria a function sem parentesis
  console.log("realizando uma operação");
  const resultado = operaçao(a, b); // somar(3,5)
  return resultado;
}

function somar(x, y) {
  console.log("realizando uma soma");
  return x + y;
}

console.log(calcular(3, 5, somar));
// o operação de cima se transforma no somar com os parametros 3 e 5
console.log(
  calcular(8, 4, function (x, y) {
    console.log("realizando uma subtração");
    return x - y;
  })
);

// exemplo reeal do dia a dia do hof, mecanismo que trabalha com cada um dos elementos de um array, que pode ser simplificado com forEach

function exibirElemento(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
}

const lista = ["maça", "banana", " limão", "laranja"];

for (let i = 0; i < lista.length; i++) {
  exibirElemento(lista[i], i, lista); // isso pode ser substituido por um metdodo de array
}

lista.forEach(exibirElemento); // faz a mesma coisa do for para cada elemento do array

// o forEach tambem pode ter uma function anonima como callback

lista.forEach(function (elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array,
  });
});

// metodo sort()
