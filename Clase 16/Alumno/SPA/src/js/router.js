//IMPORTO EL OBJETO CROSSROADS DE LA LIBRERIA PARA CREAR LAS RUTAS
import crossroads from 'crossroads'

import homeController from './controllers/homeController'
import contactController from './controllers/contactController'
import peopleController from './controllers/peopleController'

function router() {

  crossroads.addRoute('/', function () {
    $('#root').load('./partials/home.html', homeController)
  })

  crossroads.addRoute('#/', function () {
    $('#root').load('./partials/home.html', homeController)
  })

  //CUANDO MATCHEE LA RUTA PEOPLE, SE CARGARA EL CONTENIDO DE LA PARTIAL PEOPLE EN EL CONTAINER
  // Y SE EJECUTARÁ EL CONTENIDO DEL PEOPLE CONTROLLER CUANDO SE TERMINE DE CARGAR EL CONTENIDO.
  crossroads.addRoute('#/people', function () {
    $('#root').load('./partials/people.html', peopleController)
  })

  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactController)
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router