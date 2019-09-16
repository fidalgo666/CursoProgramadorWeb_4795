/**  var cars = [
  {
    model:'Suran',
    brand: 'volkswagen',
    year: 2015
  },
  {
    model:`Audi TT`,
    brand:'Audi',
    year: 2017
  },
  {
    model:`Gran turismo`,
    brand:'Maserati',
    year: 2018
  }
]

// todas las funciones "constructoras debe incicarse con MAYUSCULA"
function Car(brand, model, year) {
//aca defino propiedades publicas
    this.brand = brand;
    this.model = model;
    this.year = year;
  
  // Defino Nº de propiedad privada
  var id = Math.random()

  // Defino metodo publico
this.getCarName = function () {
    alert(
      `El modelo es: ${this.brand} La marca es: ${this.model} El año es: ${this.year}`    
      )
  }
}

cars.forEach((car) => {
  var carObject = new Car(car.brand, car.model, car.year)
  carObject.getCarName()
}) 

var palabras = ['Esto', 'es', 'un', 'mensaje','del','profe'];

var stringPalabras = palabras.join(' ')

alert(stringPalabras)

var splitPalabras = stringPalabras.split(' ') 

console.log(splitPalabras) */



// otro ejemplo  METODO SPLICE 

var personas = ['Pedro', 'Maria', 'Florencia']

personas.splice(0,1)

console.log(personas)

// METODO SLICE

var numeros = [3, 6, 9, 12, 15];

var numbersCopy1 = numeros.slice(2,4)

console.log(numbersCopy1)