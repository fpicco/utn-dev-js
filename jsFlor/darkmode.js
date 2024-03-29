// --------------USO DE INFORMACION DEL USUARIO, DOM y CONDICIONAL para crear el darkmode


//Confirmación del usuario para darkmode y almacenamiento en variable
var darkMode = confirm("NUEVA VERSION DARKMODE \nPresione aceptar para ver nuestra web en darkmode o cancelar para ver la versión clásica.");

//Uso de un condicional para establecer el modo oscuro
if (darkMode){

//obtencion de elementos a través del DOM y cambio del color de fondo
var body = document.getElementsByTagName("body");
body[0].style.backgroundColor = "#000000";


var nav = document.getElementById("nav");
nav.style.backgroundColor = "#6b0034";


var frase = document.getElementById("frase");
frase.style.backgroundColor = "#039";


var section = document.getElementsByTagName("section");
section[0].style.backgroundColor = "#000000";


var contenedorITitulo = document.getElementsByClassName("contenedor-I__titulo");
contenedorITitulo[0].style.backgroundColor = "#4f0099";

var contenedorPie = document.getElementsByClassName("contenedor-I__pie");
contenedorPie[0].style.backgroundColor = "#4f0099"

var contenedorDesc = document.getElementsByClassName("contenedor-I__desc");
contenedorDesc[0].style.backgroundColor = "#039";


var contenedorDTitulo = document.getElementsByClassName("contenedor-D__titulo");
contenedorDTitulo[0].style.backgroundColor = "#4f0099";

//Uso de for para recorrer el vector y realizar los cambios a todos sus elementos
var contenedorDPlantas = document.getElementsByClassName("contenedor-D__plantas");
for (var i = 0; i < contenedorDPlantas.length; ++i) 
    contenedorDPlantas[i].style.backgroundColor = "#4f0099";

var plantasDescripcion = document.getElementsByClassName("plantas__descripcion");
for (var i = 0; i < plantasDescripcion.length; ++i) 
    plantasDescripcion[i].style.backgroundColor = "#6b0034";

var contenedorMas = document.getElementsByClassName("contenedor-D__mas");
contenedorMas[0].style.backgroundColor = "#4f0099";  

var footer = document.getElementsByTagName("footer");
footer[0].style.backgroundColor = "#039";

var navResponsive = document.getElementsByClassName("nav__li");
for (var i = 0; i < navResponsive.length; ++i) 
    navResponsive[i].style.backgroundColor = "#6b0034";

    
}