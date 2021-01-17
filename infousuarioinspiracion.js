//-------------- USO DE DATOS DEL USUARIO para personalizar el titulo de la seccion inspiracion

var nombre = prompt("Hola! Porfavor, ingresa tu nombre:");

//Almacenamiento en variable el titulo de la sección "Inspiracion"
var tituloInspiracion = document.getElementsByClassName('inspiracion__section-div');

// //Modificacion del contenido del HTML incluyendo los datos introducidos por el usuario
tituloInspiracion[0].innerHTML = "<h2 class='inspiracion__section-h2'>" + nombre + ": ¡Inspirate con nosotros!</h2>";

