var nombre1 = prompt('Ingrese aqui su nombre por favor:')
localStorage.setItem('nombrePersistido', nombre1)
var nombreDelLS = localStorage.getItem('nombrePersistido')
console.log(`Hola ${nombreDelLS}, buenos dias!`)