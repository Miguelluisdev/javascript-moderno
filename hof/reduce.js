const products = [
  { nome: 'Camiseta', preco: 29.99 },
  { nome: 'Calça', preco: 59.99 },
  { nome: 'Meias', preco: 9.99 }
];

const total = products.reduce((acumulador, produto) => acumulador + produto.preco, 0);

console.log(total); // Resultado: 99.97

const palavras = ['Olá', 'mundo', 'do', 'JavaScript'];

const frase = palavras.reduce((acumulador, palavra) => acumulador + ' ' + palavra);

console.log(frase); // Resultado: "Olá mundo do JavaScript"

const numeros = [5, 10, 3, 8, 2];

const maximo = numeros.reduce((acumulador, numero) => Math.max(acumulador, numero));

console.log(maximo); // Resultado: 10
// crie uma lista de produtos(com nomes, identificador e etc) e com variação de preços, pegue o maior e o menor e faça uma comparaçãp entre eles usando high order function

const produtos = [
  { id: 1, nome: 'Camiseta', preco: [29.99, 24.99, 34.99] },
  { id: 2, nome: 'Calça', preco: [59.99, 49.99, 54.99] },
  { id: 3, nome: 'Meias', preco: [9.99, 7.99, 12.99] },
];

const getMaiorPreco = (produto) => {
  const maxPreco = produto.preco.reduce((max, atual) => {
    return Math.max(max, atual);
  }, -Infinity);
  return { id: produto.id, nome: produto.nome, preco: maxPreco };
};

const getMenorPreco = (produto) => {
  const minPreco = produto.preco.reduce((min, atual) => {
    return Math.min(min, atual);
  }, Infinity);
  return { id: produto.id, nome: produto.nome, preco: minPreco };
};

const produtoMaiorPreco = produtos.reduce((max, produto) => {
  const maxPreco = getMaiorPreco(produto).preco;
  return maxPreco > max.preco ? getMaiorPreco(produto) : max;
}, { preco: -Infinity });

const produtoMenorPreco = produtos.reduce((min, produto) => {
  const minPreco = getMenorPreco(produto).preco;
  return minPreco < min.preco ? getMenorPreco(produto) : min;
}, { preco: Infinity });

console.log('Produto com maior preço:', produtoMaiorPreco);
console.log('Produto com menor preço:', produtoMenorPreco);
