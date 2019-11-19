<<<<<<< HEAD
// importo el objeto 'crossroads' de la libreria para crear las rutas
=======
//IMPORTO EL OBJETO CROSSROADS DE LA LIBRERIA PARA CREAR LAS RUTAS
>>>>>>> c45f35c77fe294e425f4c3f24f42adfffa9bfd56
import crossroads from 'crossroads'
import homeControllers from './controllers/homeControllers'
import peopleControllers from './controllers/peopleControllers'
import localStorageControllers from './controllers/localStorageControllers'
import contactControllers from './controllers/contactControllers'
import sabadoControllers from './controllers/sabadoControllers'


import homeController from './controllers/homeController'
import contactController from './controllers/contactController'
import peopleController from './controllers/peopleController'

function router() {
<<<<<<< HEAD
  crossroads.addRoute('', function () {
    $('#root').load('./partials/home.html', homeControllers)
=======

  crossroads.addRoute('/', function () {
    $('#root').load('./partials/home.html', homeController)
  })

  crossroads.addRoute('#/', function () {
    $('#root').load('./partials/home.html', homeController)
>>>>>>> c45f35c77fe294e425f4c3f24f42adfffa9bfd56
  })

  //CUANDO MATCHEE LA RUTA PEOPLE, SE CARGARA EL CONTENIDO DE LA PARTIAL PEOPLE EN EL CONTAINER
  // Y SE EJECUTARÁ EL CONTENIDO DEL PEOPLE CONTROLLER CUANDO SE TERMINE DE CARGAR EL CONTENIDO.
  crossroads.addRoute('#/people', function () {
<<<<<<< HEAD
    $('#root').load('./partials/people.html') //no necesariamente debe existir este codigo aca
  })

    crossroads.addRoute('#/local-storage', function () {
    $('#root').load('./partials/local-storage.html') //no necesariamente debe existir este codigo aca
  })

  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html') //no necesariamente debe existir este codigo aca
  })

  crossroads.addRoute('#/sabado', function () {
    $('#root').load('./partials/sabado.html') //no necesariamente debe existir este codigo aca
=======
    $('#root').load('./partials/people.html', peopleController)
  })

  crossroads.addRoute('#/contact', function () {
    $('#root').load('./partials/contact.html', contactController)
>>>>>>> c45f35c77fe294e425f4c3f24f42adfffa9bfd56
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router // esta linea de 'export default' se utiliza cuando llama a una sola funcion, 
                      //en el caso que el archivo contenga mas de una funcion NO SE USA