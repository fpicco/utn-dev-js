//Agrego el evento onclick al boton
// var boton = document.getElementById("calcularCosto");
// boton.addEventListener("click", sumar());

//Obtencion de los elementos option de paisajistas
var parilli = document.getElementById("parilli");
var rosales = document.getElementById("rosales");
var marquatto = document.getElementById("marquatto");
var rottili = document.getElementById("rottili");
var lostich = document.getElementById("lostich");
var pereira = document.getElementById("pereira");

//Obtencion de los elementos option de ubicaciones
var ciudad = document.getElementById("ciudad");
var provincia = document.getElementById("provincia");
var fueraProv = document.getElementById("fueraProv");

//Funcion para sumar los precios

function sumar() {
  var persona = document.getElementById("paisajista").value;
  var distancia = document.getElementById("ubicacion").value;
  var costoTotal = document.getElementById("costoTotal");

  var precioPaisajista = 0;
  var precioDistancia = 0;

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
  
  if (distancia == ciudad) {
    precioDistancia = 1000;
  } else if (distancia == provincia) {
    precioDistancia = 2000;
  } else if (distancia == fueraProv) {
    precioDistancia = 5000;
  } else {
    alert(`Por favor, seleccione una distancia para poder calcular el costo`);
  }

  costoTotal.innerHTML = `El costo de su visita a domicilio por nuestro paisajista ${persona.toUpperCase()} a ${distancia.toUpperCase()} es : $ ${
    precioPaisajista+precioDistancia
  }`;
}