// Média Aritmética Simples
const media = (...valores) => {
  const soma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
  return soma / valores.length;
};

// Média Aritmética Ponderada
const mediaPonderada = (...valoresComPesos) => {
  const somaProdutos = valoresComPesos.reduce((acumulador, { n, p }) => acumulador + n * p, 0);
  const somaPesos = valoresComPesos.reduce((acumulador, { p }) => acumulador + p, 0);
  return somaProdutos / somaPesos;
};

// Mediana
const mediana = (...valores) => {
  const sorted = valores.sort((a, b) => a - b);
  const meio = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[meio - 1] + sorted[meio]) / 2;
  } else {
    return sorted[meio];
  }
};

// Moda
const moda = (...valores) => {
  const contagem = {};
  let modaValor = valores[0];
  let modaFrequencia = 1;

  valores.forEach((valor) => {
    if (contagem[valor]) {
      contagem[valor]++;
    } else {
      contagem[valor] = 1;
    }

    if (contagem[valor] > modaFrequencia) {
      modaValor = valor;
      modaFrequencia = contagem[valor];
    }
  });

  return modaValor;
};

console.log(media(2, 6, 3, 7, 4)); // Média Aritmética Simples: 4.4
console.log(mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 })); // Média Aritmética Ponderada: 7.75
console.log(mediana(2, 4, 5, 7, 42, 99)); // Mediana: 6
console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)); // Moda: 4
