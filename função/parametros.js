function dobro(x){
  console.log("o dobro de " + x + " é  " + (x * 2) )
} 

//dobro(8) // dentro do parentesis indica a entrada a pos chamar a função
// passa o valor para o parametro de cima e o x passa a valer 5 como se fosse uma variavel
//dobro(9)
//dobro(15)



function  dizerOla(nome  = "Mundo"){
  console.log("olá " + nome + "!")
}

//dizerOla("darius")
//dizerOla() // como resolver o undefined da função colocando um valor padrão no parametro

function soma(a,b,c,d,e,f){
  console.log("a soma é " + (a + b + c + d + e + f) )
}
//soma(15,7,8,45,7,9  )

function criarUsuario(nome, email, senha, tipo = "admin"){
  const usuario = {
    nome, // mesmo que nome: nome
    email,
    senha,
    tipo,
  }
  console.log(usuario)
}
// a ordem da função importa
criarUsuario("darius", "darisu@gmail.com", "8888")

// function com muitos paramentros, para resolver cria um objeto como parametro
function muitosParametros(nome, senha, email, aniversario, tipo){
  //...
}
muitosParametros("nime", "dick", "analefa", "2fsd")

function objetoComoParametro(usuario){
  usuario.nome
  usuario.email

}

const dadosUsuario = {
  nome: "" ,
  email: "" ,
  senha: "",
  endereço: "",
  aniversario: ""
}

// chama o objeto como parametro da função para ficar mais organizado

objetoComoParametro(dadosUsuario)