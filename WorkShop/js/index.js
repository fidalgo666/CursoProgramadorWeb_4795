  function validarCampoFormulario(evento){

    // estoy recuperando el elemento HTML desde el cual se disparo el evento
    var elemento = evento.target

    // obtengo el valor del campo del formulario
    var valorDelCampo = elemento.value

    if(valorDelCampo != '' ){

        // se agrega clase is-valid de bootstrap 
        elemento.classList.add('is-valid')
        elemento.classList.remove('is-invalid')
    } else{
        // se agrega clase is-invalid de bootstrap 
        elemento.classList.add('is-invalid')
        elemento.classList.remove('is-valid')
    }
}

function validarCampoEmail(evento){

  // estoy recuperando el elemento HTML desde el cual se disparo el evento
  var elemento = evento.target

  // obtengo el valor del campo del formulario
  var valorDelCampo = elemento.value

  if(valorDelCampo.includes("@") && valorDelCampo.includes(".") && valorDelCampo != ''){

      // se agrega clase is-valid de bootstrap 
      elemento.classList.add('is-valid')
      elemento.classList.remove('is-invalid')
  } else{
      // se agrega clase is-invalid de bootstrap 
      elemento.classList.add('is-invalid')
      elemento.classList.remove('is-valid')
  }
}

function validarCampoNumero(evento){

  // estoy recuperando el elemento HTML desde el cual se disparo el evento
  var elemento = evento.target

  // obtengo el valor del campo del formulario
  var valorDelCampo = elemento.value

  if(valorDelCampo != -1 && valorDelCampo != ''){

      // se agrega clase is-valid de bootstrap 
      elemento.classList.add('is-valid')
      elemento.classList.remove('is-invalid')
  } else{
      // se agrega clase is-invalid de bootstrap 
      elemento.classList.add('is-invalid')
      elemento.classList.remove('is-valid')
  }
}

var campoNombre = document.getElementById('validationCustom01')

campoNombre.onblur = validarCampoFormulario

var campoNombre = document.getElementById('validationCustom02')

campoNombre.onblur = validarCampoFormulario

var campoEmail = document.getElementById('validationCustom04')

campoEmail.onblur = validarCampoEmail

var campoNumero = document.getElementById('validationCustom03')

campoNumero.onblur = validarCampoNumero

object.onclick = function(eventoClick){
  
};


// function botonHabilitado() {
//   if(validationCustom01('is-valid') && validationCustom02('is-valid') && validationCustom03('is-valid') && validationCustom04('is-valid')){
//     document.getElementById('boton').disabled = false
//   }  else {
//     document.getElementById('boton').disabled = true
//   }
// }

