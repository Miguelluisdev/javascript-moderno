// Encadeamento opcional
const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  }
}

// console.log(user.friends[0].phone.ddd)
console.log(user.friends[0].phone?.ddd)
console.log(user?.brothers?.length)

console.log(user.brothers?.[5].name)

const pessoa = {
  nome: 'João',
  endereco: {
    rua: 'Rua das Flores',
    cidade: 'São Paulo'
  }
};

// Acessando propriedades sem encadeamento opcional (versão antiga)
const cidade = pessoa && pessoa.endereco && pessoa.endereco.cidade;
console.log(cidade); // 'São Paulo'

// Usando encadeamento opcional
const cidadeSegura = pessoa?.endereco?.cidade;
console.log(cidadeSegura); // 'São Paulo'
