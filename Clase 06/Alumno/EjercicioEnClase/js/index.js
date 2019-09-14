var cars = [
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