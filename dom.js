
// --------------USO DEL DOM cambio de estilo a los nav de secciones y a los titulos de las plantas. Cambio de imagen principal

//Cambio de estilo de las secciones de navegación seleccionados 
var navSecciones = document.querySelectorAll('.nav__ul a');
for (var i = 0; i < navSecciones.length; ++i) 
    navSecciones[i].style.color = "red";


//Cambio de estilo a los nombres de las plantas
var plantasDescripcion = document.querySelectorAll('.plantas__descripcion');
for (var i = 0; i < plantasDescripcion.length; ++i) 
    plantasDescripcion[i].style.color = "green";
  
//Reemplazo de la imagen principal del index 
var imagenPrincipal = document.getElementById("imagen-principal");
imagenPrincipal.removeAttribute("src");
imagenPrincipal.setAttribute("src", "imagenes/principal2.jpg");

