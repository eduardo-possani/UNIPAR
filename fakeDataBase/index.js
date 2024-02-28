const data = require('./data.json')

// console.log(data);

function filterMenordeIdade(paran){

   const arrayCall =  paran.map((elemento)=> calculeIMC(elemento.height ,elemento.weight))


   const taLeve = arrayCall.filter((peso)=> peso < 18 ).length
   const taOK = arrayCall.filter((peso)=> peso >= 18 && peso <= 25).length
   const taPesado = arrayCall.filter((peso)=> peso > 25).length

   console.log(taLeve," pessoas estão precisando comer")
   console.log(taOK," pessoas estão OK")
   console.log(taPesado," pessoas estão precisando Ir na academia")

}

function calculeIMC(altura, peso){
    return peso/(altura*2)
}


console.log(filterMenordeIdade(data))