import { label, input , br } from "./functions.js"

console.log(label({for: "fullName", textContent : "Nome Completo"}))

console.log(input({ id:"fullName", name: "fullName", placeholder: "digite seu nome completo"}))

console.log(br())