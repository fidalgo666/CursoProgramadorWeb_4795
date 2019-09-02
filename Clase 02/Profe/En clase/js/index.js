//EJEMPLOS DE CONDICIONALES

var numero = -5

if (numero > 0) {
  console.log('El numero es mayor a 0')
} else if (numero == 0) {
  console.log('El numero es 0')
} else {
  console.log('El numero NO ES mayor a 0')
}

if (5 != 6) {
  console.log('ES DISTINTO')
} else {
  console.log('ES IGUAL')
}

var edadIngresada = prompt('Ingrese una edad, por favor:')

var edadParaSerMayor = 18

if (edadIngresada > edadParaSerMayor) {
  console.log('USTED ES MAYOR')
} else {
  console.log('USTEDES ES MENOR')
}

//ESTRICTAMENTE DESIGUAl
var numero = 123

var numeroString = 123

if (numero !== numeroString) {
  console.log('ES IGUAL')
}

//Operador NOT

var esSabado = false

esSabado = !esSabado

//OPERADOR AND
var esDomingo = false

var tengoPlata = false

if (esDomingo && tengoPlata) {
  console.log('ES DOMINGO Y TENGO PLATA COMO ASADO')
} else {
  console.log('NO ES DOMINGO O NO TENGO PLATA, COMO OTRA COSA')
}

//OPERADOR OR
var esDomingo = false

var tengoPlata = false

if (esDomingo || tengoPlata) {
  console.log('ES DOMINGO O TENGO PLATA, COMO ASADO')
} else {
  console.log('NO ES DOMINGO NI TENGO PLATA, COMO OTRA COSA')
}
