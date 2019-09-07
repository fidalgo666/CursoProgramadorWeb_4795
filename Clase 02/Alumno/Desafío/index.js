var gender = prompt('Ingrese su genero, masculino, femenino u otro')
var age = prompt('Ingrese su edad')

var message = 'Hola, '

switch (gender) {
    case: 'masculino':
    message = message + 'Sr. '
    break
    case 'femenino':
        message = message + 'Sra. '
        break
        case 'otro':
            message = message + 'Sx. '
            break
            default:
                message = message + 'Genero invalido'
                break
}

if (age >= 18) {
    message = message +'usted es mayor de edad, puede ingresar'
} else {
    message = message +'usted es menor de edad, puede ingresar'
}

console.log(message)