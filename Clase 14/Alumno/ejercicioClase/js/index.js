var request = $.ajax({
    url: "https://swapi.co/api/people/" + prompt("ingrese el numero de su personaje: "),
    method: "GET"
  })

 request.done(function( data ) {
    $("#name").val(data.name); // cuando se trata de ingresar texto a un "input" se usa .val (cuando se quiere ingresar a un div u otro va, ".html")
  });
  
 request.done(function( data ) {
    $("#gender").val(data.gender); // cuando se trata de ingresar texto a un "input" se usa .val (cuando se quiere ingresar a un div u otro va, ".html")
  });

  


// ESTO PARA RESPONDER DESDE LA API UN "ERROR"
//   request.fail(function( error ) {
//     console.log( 'Error: ' , error )
//   })