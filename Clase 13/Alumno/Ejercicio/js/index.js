
var contador = 0;
$(document).keydown(function(event){
  if (event.which == 13) {
    contador = 0;
  }
  
  if (event.which == 38) {
    contador++;
  }

  if (event.which == 40) {
    contador--;
  }
  
  $('#counter').html(contador)
});