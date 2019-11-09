function contactControllers(){
    
}

export default contactControllers


// function validarCampoFormulario (evento) {
//     //Estoy recuperando el elemento HTML desde el cual se disparó el evento.
//     var elemento = evento.target
  
//     //obtengo el valor del campo del formulario.
//     var valorDelCampo = elemento.value
  
//     if (valorDelCampo != '') {
//       //Agregar la clase is-valid de bootstrap o su equivalente para demostrar que el campo es valido.
//       elemento.classList.add('is-valid')
//       elemento.classList.remove('is-invalid')
//     } else {
//       //Agregar la clase is-invalid de bootstrap o su equivalente para demostrar que el campo es invalido.
//       elemento.classList.add('is-invalid')
//       elemento.classList.remove('is-valid')
//     }
//   }

$(document).ready(function() {
    $("#contactButton").click(function() {
        if (!validateText("firstName")) {
            return false;
        }
        if (!validateText("Email")) {
            return false;
        }
        if (!validateText("comments")) {
            return false;
        }
    }
);
});