//SUSCRIPCION A EVENTOS COMO ATRIBUTOS

function manejarEventoClick (informacionEvento) {
  var elementoClickeado = informacionEvento.target

  alert('El usuario hizo click en el boton con el id ' + elementoClickeado)
}

function manejarEventoBlur () {
  alert('El usuario dejo de hacer foco el campo de texto')
}

//obtengo el boton de html
var boton = document.getElementById('botonPruebaSemantica')

boton.onclick = manejarEventoClick

//obtengo el input desde el HTML
var campoPrueba = document.getElementById('campoPrueba')

<<<<<<< HEAD
<<<<<<< HEAD
console.log(
  'Este es el nombre de la persona desde el objeto JAVSCRIPT :' +
    personaJavascript.nombre
)
=======
console.log('Es el contenido del div mensaje prueba ' + mensajePrueba.innerHTML)
>>>>>>> 2e6dfaf6257999a0eb07c04623e9586852401748
=======
//me subscribo al evento blur del campo.
campoPrueba.onblur = manejarEventoBlur
>>>>>>> bd0b6ac5b1b2bfb7e172a343ce1ee58d2df997e7
