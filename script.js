import { barcelona, roma, paris, londres } from "./ciudades.js";

// obetener datos

let enlaces = document.querySelectorAll("a");
let tituloElement = document.getElementById("titulo");
let subtituloElement = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {

    let contenido = obtenerContenido(this.textContent);

    tituloElement.innerHTML = contenido.titulo;
    subtituloElement.innerHTML = contenido.subtitulo;
    parrafoElemento.innerHTML = contenido.parrafo;
  });
});

function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    Paris: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
