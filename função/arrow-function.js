// const soma = function(v1,v2){return v1+v2}

// com arrow function

const soma = (v1,v2) => {return v1 + v2}

console.log(soma(4,5))

// ()parametro

// =>  procedimenti

// {} operação
// quando tem um parametro não há necessidade de colocar os ()

const nome = n =>{return n}
console.log(nome("darius"))

// sem return
const add = n => n +10
console.log(add(2))

const funçãoAnonima = (base,altura) => {
    return base * altura
}
console.log(funçãoAnonima(5,6))