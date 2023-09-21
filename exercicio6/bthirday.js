const dayjs = require("dayjs");

function birthday(date){
   const birthday = dayjs(date)
   const today = dayjs()
  const dayNextBith = birthday.diff(today, "day")
  //   metodo diff 
  const ageInYears = today.diff(birthday, "year")
  const nextBith = birthday.add(ageInYears + 1, "year")
  console.log(`idade ${ageInYears}, seu proximo aniversario será ${nextBith.format('DD/MM/YYYY')}`)
  console.log(`dias até completar 28 ${ageInYears + 1} anos: ${dayNextBith}`)
}

birthday("1998-08-02")