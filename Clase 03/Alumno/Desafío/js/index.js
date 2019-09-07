var operacion = prompt('Ingresar una operacion: ')  
var numero = parseInt(prompt('Ingresar un numero: '))
var numero2 = parseInt(prompt('Ingresar otro numero: '))

var resultado = 0

switch(operacion) {
    case '+': 
   resultado = numero + numero2
       break;
    case '-':
   resultado = numero - numero2
       break;
    case '*':
   resultado = numero * numero2
       break;
    case '/':
   resultado = numero / numero2
       break;
   default: 
   break;
   }

alert(resultado)
document.getElementById("id").innerHTML = resultado;