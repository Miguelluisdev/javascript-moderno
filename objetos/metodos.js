// uma funçaõ dentro de um objeto
// não precisa do function mas precisa do () e {}

let pessoa = {
  nome: "darius",
  idade: 1000,
  raça: "deus",
  dizerOla(){
      console.log("Ai capcom, seu nome é " + this.nome )
  }
}

// this. é a propriedade que referencia o objeto dentro do objeto

console.log(pessoa)

pessoa.dizerOla() // chama a função

console.log(this)