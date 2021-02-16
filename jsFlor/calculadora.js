//Uso de funciones para calcular el costo de visita a domicilio de los distintos paisajistas. Aplicado en la sección CONTACTO.


//Agrego el evento click al boton para al presionarlo ejecute la funcion sumar.
var boton = document.getElementById("calcularCosto");
boton.addEventListener("click", sumar);

//Obtención de los elementos option de paisajistas
var parilli = document.getElementById("parilli").value;
var rosales = document.getElementById("rosales").value;
var marquatto = document.getElementById("marquatto").value;
var rottili = document.getElementById("rottili").value;
var lostich = document.getElementById("lostich").value;
var pereira = document.getElementById("pereira").value;

//Obtención de los elementos option de ubicaciones
var ciudad = document.getElementById("ciudad").value;
var provincia = document.getElementById("provincia").value;
var fueraProv = document.getElementById("fueraProv").value;

//Función para sumar los precios de cada paisajista y la distancia
function sumar() {
  // Función para convertir la primera letra de la oración en minúscula
  function minusculaPrimerLetra(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  //Defino las variables a utilizar
  var persona = document.getElementById("paisajista").value;
  var distancia = document.getElementById("ubicacion").value;
  var costoTotal = document.getElementById("costoTotal");

  //Inicializo las variables que guardan los valores de precios
  var precioPaisajista = 0;
  var precioDistancia = 0;

  //Condicional para establecer el precio de cada paisajista
  if (persona == parilli) {
    precioPaisajista = 4700;
  } else if (persona == rosales) {
    precioPaisajista = 5900;
  } else if (persona == marquatto) {
    precioPaisajista = 3200;
  } else if (persona == rottili) {
    precioPaisajista = 6700;
  } else if (persona == lostich) {
    precioPaisajista = 4200;
  } else if (persona == pereira) {
    precioPaisajista = 2500;
  } else {
    alert(`Por favor, seleccione un paisajista para poder calcular el costo`);
  }
  //Condicional para establecer el precio según la ubicación
  if (distancia == ciudad) {
    precioDistancia = 1000;
  } else if (distancia == provincia) {
    precioDistancia = 2000;
  } else if (distancia == fueraProv) {
    precioDistancia = 5000;
  } else {
    alert(`Por favor, seleccione su ubicación para poder calcular el costo`);
  }

  //Obtención del texto de el elemento HTML
  persona = document.getElementById(persona).text;
  distancia = document.getElementById(distancia).text;

  //Impresión en pantalla del costo del paisajista a domicilio.
  costoTotal.innerHTML = `El costo de la visita por nuestro paisajista ${persona} a ${minusculaPrimerLetra(
    distancia
  )} es : $ ${precioPaisajista + precioDistancia}`;
}
