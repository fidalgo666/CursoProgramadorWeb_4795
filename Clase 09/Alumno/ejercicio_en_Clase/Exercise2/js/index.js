var testList = ['CARLOS','GERONIMO','NICOLAS','LUCAS']

function EjercicioNombre(reciboList, ListGuardada){ //recibo dos parametros
    
    // esto valida los tipo de parametros arriba, recibidos
    if(typeof reciboList == 'string' && Array.isArray(ListGuardada)){

        // convierto el arreglo JavaScript a JSON
        var arrayJson = JSON.stringify(ListGuardada)

// persisto en LocalStorage el array como JSON
localStorage.setItem(reciboList, arrayJson);
    }
}

saveList('ListaAGuardar', testList)