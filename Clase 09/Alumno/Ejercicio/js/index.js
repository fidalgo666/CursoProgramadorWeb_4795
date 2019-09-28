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

    // obtnego el campo del html con id del elemento
    var campoNombre = document.getElementById('firstName')

    // me suscribo al evento blur con el habndler validarCampoNombre
    campoNombre.onblur = validarCampoFormulario

        // obtnego el campo del html con id del elemento
    var campoNombre = document.getElementById('lastName')

    // me suscribo al evento blur con el habndler validarCampoNombre
    campoNombre.onblur = validarCampoFormulario

          // obtnego el campo del html con id del elemento
          var campoEmail = document.getElementById('Email')

          // me suscribo al evento blur con el habndler validarCampoNombre
          campoEmail.onblur = validarCampoEmail