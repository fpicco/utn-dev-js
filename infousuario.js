//-------------- USO DE DATOS DEL USUARIO para personalizar los titulos de las secciones inspiracion y contacto

var nombre = prompt("Hola! Porfavor, ingresa tu nombre:");



 var tituloInspiracion = document.getElementsByClassName('inspiracion__section-div');
tituloInspiracion[0].innerHTML = "<h2 class='inspiracion__section-h2'>" + `${nombre}` + ": ¡Inspirate con nosotros!</h2>";


var tituloContacto = document.getElementsByClassName('contacto__section-div');
tituloContacto[0].innerHTML = "<h2 class='inspiracion__section-h2'>" + `${nombre}` + ": ¡Inspirate con nosotros!</h2>" 
