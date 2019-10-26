$(function(){
// SUBSCRIBIMOS AL EVENTO CLICK DE LOS ELEMENTOS CON CLASE SQUARE
var ultimaClase = 'circle'

$('.square').on('click', function(){
    
    // OBTENGO EL ELEMENTO EN DONDE ESTA SUCEDIENDO EL EVENTO
    var elemento = $(this);

    if(!(elemento.hasClass('circle') || elemento.hasClass('cross'))){
        if(ultimaClase == 'cross'){
            elemento.addClass('circle');
            ultimaClase = 'circle';
        }
        else{
            elemento.addClass('cross');
            ultimaClase = 'cross'
        }
    }
})

})