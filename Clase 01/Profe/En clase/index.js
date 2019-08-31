//PRACTICA DE VARIABLES

var mensajeAMostrar = 'test'

// alert(mensajeAMostrar)

//TIPOS DE DATOS

var esSabado = true

var esDomingo = false

var mensaje = 'esto es un mensaje'

var mensaje2 = 'esto es otro mensaje'

//Practica undefined

var practicaUndefined = 'No es undenifed'

// alert(practicaUndefined)

//PRACTICA NULL

var pruebaNull = 'Tiene un valor'

// alert(pruebaNull)

pruebaNull = null

// alert(pruebaNull)

pruebaNull = 'De nuevo tiene un valor'

// alert(pruebaNull)

//PRACTICA ARRAYS

var innerPrueba = [ 1 ]

var arreglo = [ 'Juan', 'Luis', 'Marcelo', 2, 5, innerPrueba ]

var nombreObtenido = arreglo[2]

// alert(nombreObtenido)

//Practica OBJETOS

var edadPersona = 67

var persona = {
  nombre: 'Pedro',
  hijos: [ 'Hijo 1', 'Hijo 2', 'Hijo 3' ],
  esViejo: true,
  edad: edadPersona,
  seMurio: false,
  esposa: {
    nombre: 'ROsa'
  }
}

var nombreEsposa = persona.esposa.nombre

var nombreTercerHijo = persona.hijos[2]

var nombrePersona = persona.nombre

// alert(persona.nombre)

//ARRAYS VS OBJECTOS

var persona = [ 'Julio', true, 67 ]

persona[0]

var personaObj = {
  nombre: 'Julio',
  edad: 67,
  esViejo: true
}

//ARRAY DE ALUMNOS

var alumno = {
  nombre: 'Damian',
  edad: 26,
  esViejo: false
}

var alumno2 = {
  nombre: 'Hernan',
  edad: 38,
  esViejo: false
}

var listAlumnos = [ alumno, alumno2 ]

var edadSegundoAlumno = listAlumnos[1].edad

//PRACTICA OPERADORES ARITMETICOS

var valor1 = 'Hola'

var valor2 = 2 + 2

var final = 'Hola ' + valor2
// alert(final)

//PRACTICA INCREMENTALES y DECREMENTALES

var numero = 1

numero = numero + 1
//==
numero++

//DECREMENTAL

numero = numero - 1
//==
numero--

//EJEMPLO PROMPT

// var valorIngresado = prompt('Ingrese un nombre:')

// alert('El nombre ingresado es: ' + valorIngresado)

//EJEMPLO ParseInt

var numeroCadena = 'Hola'

var numeroEntero = parseInt(numeroCadena)

console.log(numeroEntero)
