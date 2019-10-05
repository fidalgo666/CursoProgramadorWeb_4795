// EJERCICIO 1

var ListaExterior = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 31678987,
      edad: 29
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 48678989,
      edad: 12
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 40678956,
      edad: 19
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 49678983,
      edad: 09
    },
    {
        firstName: 'Juan',
        lastName: 'Tármol',
        dni: 40678956,
        edad: 19
      },
      {
        firstName: 'Maria',
        lastName: 'Ñármol',
        dni: 40678956,
        edad: 19
      },
  ]

  function searchCantidadAdultos (arreglo) {
   
    var ContadorEdad = 0
    for (var i = 0; i < arreglo.length; i++) {
    var datoEncontrado = arreglo[i]  
    if(datoEncontrado.edad >= 18) {
        ContadorEdad++
    }
   }
   return ContadorEdad
}

var ContadorEdad = searchCantidadAdultos(ListaExterior)
alert('La cantidad de personas mayores a 18 años es: ' + ContadorEdad)
