// var studentsList = getLocalList('studentsList')

function EjercicioStudent(reciboEstudiante){ //recibo el parametro
    
    // esto valida los tipo de parametros arriba, recibidos
    if(typeof reciboEstudiante == 'string'){
        // busco el elemento en el LocalStorage la key recibida
        var textoEnLocalStorage = localStorage.getItem(reciboEstudiante)    
        // al elemento parseo
        if(textoEnLocalStorage != null){
            // convirtiendo de JSON almacenado en el LocalStorage a un objeto JavaScript
            var textoparseado = JSON.parse(textoEnLocalStorage)
            //devuelvo la lista
            return textoparseado
        }
    }
//retorno un array vacio xq el parametro recibido no es un STRING o no se encontro
return []
}

EjercicioStudent('ListaAGuardar')