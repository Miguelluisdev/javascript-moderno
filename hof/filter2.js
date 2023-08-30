const idades = [30, 18, 17, 12, 13, 25, 50, 40];
const maior = idades.filter((valor) => {
  if (valor >= 18) {
    return valor;
  }
});
const menor = idades.filter((valor) => {
  if (valor <= 18) {
    return valor;
  }
});
console.log(idades);
console.log(maior);
console.log(menor);
