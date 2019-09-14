alert('HOLA CURSO')

// esto es un comentario

/**
 A continuación se muestra
  un mensaje en consola de varias lineas
*/

// PRACTICA DE VARIABLES:

var a = 'texto amargo'
alert (a);

// TIPO DE DATOS

// BOOLEANOS
var esSabado = true;
var esDomingo = false;

// NUMEROS

var intNumber = 3;
var floatNumber = 0.87876;
var negativeFloatNumber = -5.4;

// STRING

var firstName = 'Juan Chamorro',
var email = 'juan@gmail.com';
var numbers = '1 2 3 4 5 setenta y ocho';
var text = 'The dark side of the moon';

// UNDEFINED & NULL

var example1; // En este punto la variable tiene el valor indefinido
var example1 = 'esto es una definicion' //Asignacion de valor
var example1 = null; // Acá yo como usuario le asigno el valor nulo

// ARRAY -nos permite tener valores ordenado y acceder a ellos mediante la posición (las posiciones se inician desde el 0)-
// un ARRAY se identifica por el uso de [], el nombre de los array's se definen libremente. Los ARRAY pueden contener todos los tipos de datos

var wachoArray = [1,2,'Pedro',false];
wachoArray[2]; // esta instruccion se usa para acceder a la posicion dentro del array - Esto me devuelve el string 'Pedro'
wachoArray[3]; // esta instruccion se usa para acceder a la posicion dentro del array - Esto me devuelve el boolean false

// OBJECT (este contenedor/caja puede incluir todo los tipos de datos, mediante la asignacion de llaves/propiedades)

var usuarioReal = {
    firstName: 'Juan',
    age: 25,
    address: 'Av Libertador 8620',
    esViejo: false,
    seMurio: null,
  }
  
  usuarioReal.firstName // Accedo a la propiedad firstName del objeto usuarioReal, devuelve 'Juan'
  usuarioReal.age // Accedo a la propiedad age del objeto usuarioReal, devuelve 25
  usuarioReal['address']; // Accedo a la propiedad address del objeto usuarioReal, devuelve 'Av Libertador 8620'

alert(usuarioReal.age)
alert(usuarioReal.seMurio)

// OPERADORES ARITMETICOS

// El operador de asignación = nos permite asignar un valor a una variable, todo lo que esta a la derecha del igual se le asigna a la variable de la izquierda.

var total;
total = 2.5; // Asigno el valor number 2.5 a la variable total
var message = 'Hola mundo!' // Asigno el valor string 'Hola mundo!' a la variable message

// En caso de que lo que se encuentra a la derecha precise realizar algún calculo este se hace primero y luego se asigna el valor a la variable.

var total = 2 + 2; // Calculo la operación y asigno el valor de tipo number 4 a la variable total

var valor1 = 2
var valor2 = 4

alert(valor1+valor2)

var valor3 = 'Juan'
var valor4 = 2 + 9

alert(valor3+valor4)

// CONCATENACION:

'Hola ' + 'mundo' // Esto devuelve el string 'Hola mundo'
'Hola ' + 234 // Esto devuelve el string 'Hola 234'
'Hola ' + true // Esto devuelve el string 'Hola true'

var firstName = 'Juan'
var message = 'Hola ' + firstName // Esto concatena el string 'Hola ' con el string de la variable firstName y se lo asigna a la variable message, guardando el string 'Hola Juan' en la misma

// SUBSTRACCION (resta)

var subtotal  = 8
var total = subtotal - 10 // Esto devuelve el valor de tipo number -2 y se lo asigna a la variable total

5 - '2' // En este caso la resta entre el number 5 y el string convertido a number 2 y devuelve el number 3
2 - 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN (NotANumber)

// DIVISION

var subtotal  = 50
var total = subtotal / 10 // Esto devuelve el valor de tipo number 5 y se lo asigna a la variable total

6 - '2' // En este caso la resta entre el nomber 6 y el string convertido a number 2 y devuelve como resultado el number 4
2 / 0 // Devuelve Infinity
2 / 'Hola' // Como el string 'Hola' no se puede convertir a number esto devuelve NaN (NotANumber)

// INCREMETAR & DECREMENTAR 

var subtotal = 5
subtotal++ // Esto es equivalente a subtotal = subtotal + 1, la variable subtotal queda con el valor de tipo number 6

var total = '2'
total++ // Esto es equivalente a total = total + 1, la variable total queda con el valor de tipo number 3

var text = 'Hola'
text++ // Como el string 'Hola' no se puede convertir a number esto devuelve NaN y se lo asigna a la variable text

// DECREMENTAR

var subtotal = 5
subtotal-- // Esto es equivalente a subtotal = subtotal - 1, la variable subtotal queda con el valor de tipo number 4

var total = '2'
total-- // Esto es equivalente a total = total - 1, la variable total queda con el valor de tipo number 1

var text = 'Hola'
text-- // Como el string 'Hola' no se puede convertir a number esto devuelve NaN y se lo asigna a la variable text

// EJEMPLO PROMPT

var valorIngresado = prompt('Ingrese un nombre:')
alert('el nombre ingresado es: ' + valorIngresado)
