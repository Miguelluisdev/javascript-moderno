// metodo find

 const passengers = [
  { name: "Ademar", birthYear: 1975 },
  { name: "Tiago", birthYear: 1997 },
  { name: "Eduarda", birthYear: 2004 },
  { name: "Jessica", birthYear: 1984 },
  { name: "Enzo", birthYear: 2015 },
  { name: "Natan", birthYear: 2001 },
  { name: "Ana", birthYear: 1995 }
]
const enzo = passengers.find((passenger) => {
 return passenger.name.toLowerCase() === 'enzo'
})
console.log(enzo)