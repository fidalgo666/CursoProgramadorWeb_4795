var students = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987,
      email: 'juan@gmail.com'
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989,
      email: 'ana@gmail.com'
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956,
      email: 'pedro@gmail.com'
    }
  ]
  
  // todas las funciones "constructoras debe incicarse con MAYUSCULA"
  function Student(firstName, lastName, dni, email) {
  //aca defino propiedades publicas
      this.firstName = firstName;
      this.lastName = lastName;
      this.dni = dni;
      this.email = email;
          
    // Defino Nº de propiedad privada
    var id = Math.random()
  
    // Defino metodo publico
    this.getId = function () {
        return id         
      }

    this.getFullName = function () {
    if  (this.firstName != undefined && this.lastName != undefined)
    {
        alert('El nombre es: '+ this.firstName + ' y el apellido es: ' + this.lastName)
    }
  }  
}
  
  students.forEach((student) => {
    var studentObject = new Student(student.firstName, student.lastName, student.dni, student.email)
    studentObject.getFullName()
  })