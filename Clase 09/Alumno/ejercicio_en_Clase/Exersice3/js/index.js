var texto = prompt('ingrese una plabra: ')

var paragraphsNodes = document.getElementById('prueba')
paragraphsNodes.innerHTML = `Hola ${texto}, buenos dias!`

var paragraphsNodes = document.getElementsByClassName('parrafo')

paragraphsNodes[0].innerHTML = 'Soy el párrafo numero uno'
paragraphsNodes[1].innerHTML = 'Soy el párrafo numero dos'
paragraphsNodes[2].innerHTML = 'Soy el párrafo numero tres'
paragraphsNodes[3].innerHTML = 'Soy el párrafo numero cuatro'

for(var posicion = 0; posicion < paragraphsNodes.length; posicion++){
  paragraphsNodes[posicion].innerHTML = `Soy el párrafo numero: ${posicion + 1}`
}

paragraphsNodes = Array.from(paragraphsNodes) //convierte una lista de nodos en un array de JavaScript
paragraphsNodes.forEach(paragraphNodes, posicion => {
paragraphsNodes.innerHTML = `Soy el párrafo numero: ${posicion + 1}`
});

var mainList = document.getElementsById('mainList')

var listItemNode

for(var i = 0; i < 10; i++){
  listItemNode = document.createElement('li')

  listItemNode.innerHTML = list[i]

  mainList.appendChild(listItemNode)
}