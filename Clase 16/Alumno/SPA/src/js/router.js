// importo el objeto 'crossroads' de la libreria para crear las rutas
import crossroads from 'crossroads'
import homeControllers from './controllers/homeControllers'
import peopleControllers from './controllers/peopleControllers'
import localStorageControllers from './controllers/localStorageControllers'
import contactControllers from './controllers/contactControllers'
import sabadoControllers from './controllers/sabadoControllers'


function router() {
  crossroads.addRoute('', function () {
    $('#root').load('./partials/home.html', homeControllers)
  })

  crossroads.addRoute('#/people', function () {
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
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function () {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router // esta linea de 'export default' se utiliza cuando llama a una sola funcion, 
                      //en el caso que el archivo contenga mas de una funcion NO SE USA