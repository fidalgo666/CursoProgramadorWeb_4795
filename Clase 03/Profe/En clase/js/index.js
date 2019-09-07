for (var parada = 1; parada <= 10; parada++) {
  console.log('Pasando por la parada: ' + parada)
}

for (var clase = 1; clase <= 19; clase++) {
  console.log('Dando la clase: ' + clase)
}

var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
]

var day

for (var i = 4; i < daysOfTheWeek.length; i++) {
  day = daysOfTheWeek[i]
  console.log(day)
}

var cantidadAutos = 0

while (cantidadAutos <= 100) {
  console.log('Voy contando: ' + cantidadAutos)

  cantidadAutos++

  if (cantidadAutos == 20) {
    break
  }
}

// var diasRecorridos = 0;

// while(diasRecorridos < daysOfTheWeek.length){
//     // console.log('El dia es:' + daysOfTheWeek[diasRecorridos])

//     diasRecorridos++;

//     // if(diasRecorridos == 0){
//     //     break;
//     // }

//     // break
// }

var diasRecorridos2 = 0

while (diasRecorridos2 < daysOfTheWeek.length) {
  if (
    daysOfTheWeek[diasRecorridos2] == 'Viernes' ||
    daysOfTheWeek[diasRecorridos2] == 'Sábado'
  ) {
    diasRecorridos2++
    continue
  }
  console.log('El dia es:' + daysOfTheWeek[diasRecorridos2])

  diasRecorridos2++

  // if(diasRecorridos == 0){
  //     break;
  // }

  // break
}

var continuar = true
var numero = 0

while (continuar == true) {
  if (numero == 30) {
    continuar = false
  }

  numero++
}

var numero = prompt('Ingresar un numero')

while (numero != 0) {
  numero = prompt('Ingresar un numero')
}
