/*
const mercado = [101 , "batata" , 12 , 102 , "macarrão" , 9 , 103 , "carne", 35]

function desconto(valor){
  newvalor = valor -  (valor * 0,2)
  console.log('-', newvalor.toFixed(2) )
}

for (let i = 0; i < mercado.length; i+=3){
  console.log(mercado[i], "-", mercado[i + 1])
  desconto(mercado[i + 2])
}
// com hof
*/
const mercado = [101, "batata", 12, 102, "macarrão", 9, 103, "carne", 35];

const desconto = (valor) => {
  const newValor = valor - valor * 0.2;
  console.log('-', newValor.toFixed(2));
};

const applyDiscount = (item, index, array) => {
  if (index % 3 === 2) {
    console.log(array[index - 2], "-", array[index - 1]);
    desconto(item);
  }
};

mercado.forEach(applyDiscount);
