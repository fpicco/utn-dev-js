//-------------- USO DE DATOS DEL USUARIO para personalizar el título de la seccion contacto

var nombre = prompt("Hola! Porfavor, ingresa tu nombre:");

//Almacenamiento en variable el titulo de la sección "Contacto"
var tituloContacto = document.getElementsByClassName('contacto__section-div');

//Modificacion del contenido del HTML incluyendo los datos introducidos por el usuario
tituloContacto[0].innerHTML = "<h2 class='contacto__section-h2'>" + nombre + ": Contactate con nosotros!</h2>" 

