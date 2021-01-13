//-------------- USO DE DATOS DEL USUARIO para personalizar los titulos de las secciones inspiracion y contacto

// var nombre = prompt("Hola! Porfavor, ingresa tu nombre:");

// --------------- ver como hacer para que el prompt no salga en index


//  var tituloInspiracion = document.getElementsByClassName('inspiracion__section-div');
// tituloInspiracion[0].innerHTML = "<h2 class='inspiracion__section-h2'>" + `${nombre}` + ": ¡Inspirate con nosotros!</h2>";


// var tituloContacto = document.getElementsByClassName('contacto__section-div');
// tituloContacto[0].innerHTML = "<h2 class='inspiracion__section-h2'>" + `${nombre}` + ": ¡Inspirate con nosotros!</h2>" 

// --------------USO DEL DOM


var navSecciones = document.querySelectorAll('.nav__ul a');
for (i = 0; i < navSecciones.length; ++i) 
    navSecciones[i].style.color = "red";

var plantasDescripcion = document.querySelectorAll('.plantas__descripcion');
for (i = 0; i < plantasDescripcion.length; ++i) 
    plantasDescripcion[i].style.color = "green";
  

    




// var rosa = [document.getElementById("nav") document.getElementById("vermas__fotos-seleccionado")];

// for (var i=0; i<rosa.length; i++) rosa[i].style.backgroundColor = "red";



// , document.getElementsByClassName("contenedor-I__imagen"), document.getElementsByClassName("plantas__imagen"), document.getElementsByClassName("plantas__descripcion"), document.getElementsByClassName("contacto__container"), document.getElementsByClassName("vermas__contenedor1-imagenes"), document.getElementsByClassName("vermas__contenedor2-imagenes"), document.getElementById("vermas__fotos-seleccionado")]