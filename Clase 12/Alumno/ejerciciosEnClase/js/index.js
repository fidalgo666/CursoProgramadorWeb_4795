$(function(){

    $(document).on('keydown', function (evento){
        if(evento.which == 13){
            alert('HAS APRETADO LA TECLA ENTER WEON!')
        }
    })
    $('#main-List').append(' <li>Item 3</li>') //metodo .append (agrega elementos)
})

