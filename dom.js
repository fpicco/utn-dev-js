
// --------------USO DEL DOM cambio de estilo a los nav de secciones y a los titulos de las plantas. cambio de imagen principal


var navSecciones = document.querySelectorAll('.nav__ul a');
for (var i = 0; i < navSecciones.length; ++i) 
    navSecciones[i].style.color = "red";

var plantasDescripcion = document.querySelectorAll('.plantas__descripcion');
for (var i = 0; i < plantasDescripcion.length; ++i) 
    plantasDescripcion[i].style.color = "green";
    
var imagenPrincipal = document.getElementById("imagen-principal");
imagenPrincipal.removeAttribute("src");
imagenPrincipal.setAttribute("src", "imagenes/principal2.jpg");


//fdfsdfsdfsdfdf-----------------------PROBANDO CON VIDEO DE DORIAN


//cambio de colores
// var rosa = [...document.getElementById("nav"), document.querySelectorAll(".contenedor-I__imagen"), document.querySelectorAll(".plantas__imagen"), document.querySelectorAll(".plantas__descripcion"), document.querySelectorAll("/contacto__container"), document.querySelectorAll(".vermas__contenedor1-imagenes"), document.querySelectorAll(".vermas__contenedor2-imagenes"), document.getElementById(".vermas__fotos-seleccionado"), document.getElementById(".vermas__fotos-seleccionado")];

// for (i = 0; i < rosa.length; i++) 
//     rosa[i].style.backgroundColor = "red";
// }




