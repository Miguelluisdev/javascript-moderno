/*

# 45 - Exercício 9

### Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

*/

function areatriangulo() {
  // chama nos cases com um alerta mostrando
  const base = parseFloat(prompt(" digite a base do triangulo "));
  const altura = parseFloat(prompt(" digite a altura do triangulo "));
  return (base * altura) / 2;
}

function areaRetangulo() {
  const base = parseFloat(prompt(" digite a base do retangulo "));
  const altura = parseFloat(prompt(" digite a altura do retangulo "));
  return base * altura;
}

function areaQuadrado() {
  const lado = parseFloat(prompt("digite o lado do quadrado"));
  return lado * lado;
  //return Math.pow(lado) no caso não funciona com pow()
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt(" digite a base maior do trapezio "));
  const baseMenor = parseFloat(prompt(" digite a base menor do trapezio "));
  const altura = parseFloat(prompt(" digite a altura do trapezio "));

  return ((baseMaior + baseMenor) * altura) / 2;
}

function areaCirculo() {
  // const pi = 3.14
  const raio = parseFloat(prompt("digite o raio do circulo"));

  return 3.14 * raio * raio;
  //return pi * Math.pow(raio) no caso não funciona com pow()
}

function option() {
  // chama a função no switch
  return prompt(
    "Calculadora geometrica \n" +
      "1. area do triangulo \n " +
      "2. area do retangulo \n " +
      "3. area do quadrado \n " +
      "4. area do trapezio \n " +
      "5. area do circulo \n " +
      "6. Sair"
  );
}

function execult() {
  let opção = ""; // cria para armazenar a function e chamar no switch
  do {
    opção = option();
    let resultado; // cria para armazenar o resultado

    switch (opção) {
      case "1":
        resultado = areatriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("encerrandio");
        break;
      default:
        alert("dados invalidos");
        break;
    }

    if (resultado) {
      // mostra o resultado depois da conta
      alert("resultado " + resultado);
    }
  } while (opção !== "6");
}

execult();
