
// --------------USO DEL DOM cambio de estilo a los nav de secciones y a los titulos de las plantas. cambio de imagen principal


var navSecciones = document.querySelectorAll('.nav__ul a');
for (i = 0; i < navSecciones.length; ++i) 
    navSecciones[i].style.color = "red";

var plantasDescripcion = document.querySelectorAll('.plantas__descripcion');
for (i = 0; i < plantasDescripcion.length; ++i) 
    plantasDescripcion[i].style.color = "green";
    
// var imagenVieja = document.getElementById('img-principal');
// imagenVieja.remove();
