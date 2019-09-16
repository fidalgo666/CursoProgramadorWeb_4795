var parametro1 = prompt('Ingrese su nombre')
var parametro2 = prompt('Ingrese su nombre')

function includesText(parametro1, parametro2){

    var resultado = false;

    if (typeof parametro1 === 'string' && typeof parametro2 === 'string')  {
        parametro1 = parametro1.toLowerCase()
        parametro2 = parametro2.toLowerCase()
        
        if (parametro2.indexOf(parametro1) > -1){
            resultado = true
        }           

    }
        return resultado
}

// includesText('la', 'Patricia')

// includesText('PATRICIA', 'Pa') 

// includesText(2, 'Pa')

alert(includesText(parametro1, parametro2))