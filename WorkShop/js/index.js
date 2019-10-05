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
campoNumero.onblur = validarCampoNumeroHandler

function validarCampoNumeroHandler (evento){
    var elemento = evento.target
    var valorDelCampo = elemento.value
    if(valorDelCampo !='' && valorDelCampo >0){
        elemento.classList.add('is-valid')
        elemento.classList.remove('is-invalid')
    } else{
        elemento.classList.add('is-invalid')
        elemento.classList.remove('is-valid')
    }
}


var campoAgregoAlumnoBTN = document.getElementById('boton')
campoAgregoAlumnoBTN.onclick = showMessage

function showMessage(event){
    var inputNode =  event.target
    
}
