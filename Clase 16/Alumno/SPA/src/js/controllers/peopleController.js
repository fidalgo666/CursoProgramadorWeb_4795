const API_URL = 'https://swapi.co/api/people'

const LOCAL_LIST_NAME = 'ListaPersonajes';

let ultimoPersonajeId = 0;

import { setLocalList, getLocalList } from '../modules/localStorageHelper'
import { get } from 'http';

function peopleController() {

  obtenerPersonajes(API_URL)


  $('#seeMore').on('click', function () {
    var personajesUrl = $(this).attr('data-apiUrl');

    obtenerPersonajes(personajesUrl);
  })

  $('body').on('click', '.btnGuardar', function () {

    console.log('hola')

    var boton = $(this);

    var personajeId = boton.attr('data-personajeid');

    console.log(personajeId)

    var personajeNombre = boton.attr('data-nombre');

    var listaLocal = getLocalList(LOCAL_LIST_NAME);

    console.log(listaLocal)

    if (existePersonaje(listaLocal, personajeNombre) == false) {
      var filaAEliminar = boton.parent().parent();

      filaAEliminar.hide(1000, function () {
        filaAEliminar.remove();
      })

      obtenerPersonaje(personajeId)

    } else {
      alert('EL PERSONAJE YA SE ENCUENTRA EN LA LISTA LOCAL')
    }
  })
}

function obtenerPersonaje(id) {

  var resultado;

  return $.ajax({
    // url: `${url}/${id}`,
    url: (API_URL + "/" + id),
    type: 'GET'
  })
    .done(function (personajeDesdeLaAPI) {
      var listaLocal = getLocalList(LOCAL_LIST_NAME);

      listaLocal.push(personajeDesdeLaAPI);

      setLocalList(LOCAL_LIST_NAME, listaLocal)
    })

}

//ESTA FUNCION ME RETORNA UNA NUEVA FILA PARA LA TABLA DE PERSONAJES HTML
function nuevaFilaPersonaje(personaje, orden) {
  let resultado;

  const inicioFila = "<tr>"

  resultado += inicioFila + "<td>" + personaje.id + "</td>" + "<td>" + personaje.name + "</td>"
    + "<td>" + traducirGenero(personaje.gender) + "</td>" + "<td>" + formatearAltura(personaje.height) + "</td>"
    + "<td>" + formatearPeso(personaje.mass) + "</td>"
    + "<td>" + personaje.eye_color + "</td>" + "<td> <button data-nombre='" + personaje.name + "' data-personajeId=" + personaje.id + " type='button' class='btn btn-primary btnGuardar'>guardar</button></td>"


  const finFinla = "</tr>"

  resultado += finFinla;

  return resultado;
}

function formatearAltura(altura) {
  return `${altura} cm.`;
}

function traducirGenero(genero) {

  var resultado;

  if (genero == "male") {
    resultado = "Masculino"
  } else {
    resultado = "Femenino"
  }

  return resultado;
}

function formatearPeso(peso) {
  return `${peso} Kg.`;
}

function obtenerPersonajes(url) {
  $.ajax({
    url: url,
    type: 'GET'
  })
    .done(function (apiPersonajes) {
      apiPersonajes.results.forEach((personaje, orden) => {
        personaje.id = ultimoPersonajeId + 1;
        renderizarPersonaje(personaje)

        ultimoPersonajeId = personaje.id
      });

      $('#seeMore').attr('data-apiUrl', apiPersonajes.next)
    })
}

function renderizarPersonaje(personaje) {
  console.log('Renderizando personaje ' + personaje.id)
  var contenidoTabla = $('#tableBody');

  var nuevaFila = nuevaFilaPersonaje(personaje);

  console.log('agregando fila de personaje ' + personaje.id)
  contenidoTabla.append(nuevaFila);
}

function removerPersonaje() {

}

function existePersonaje(personajes, nombreAChequear) {

  var existe = false;

  personajes.forEach(personaje => {
    if (personaje.name == nombreAChequear) {
      existe = true;
    }
  });

  return existe;

}

export default peopleController