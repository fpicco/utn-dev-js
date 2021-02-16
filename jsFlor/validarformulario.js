//----------------------------------VALIDACION DE FORMULARIO. Seccion contacto

//Obtencion de los elementos HTML a traves del DOM
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var motivos = document.getElementById("motivos");
var comentarios = document.getElementById("comentarios");

//Funcion con los eventos para validar los campos del formulario al rellenados
function validarForm() {
  nombre.addEventListener("input", validarNombre);
  email.addEventListener("input", validarEmail);
  tel.addEventListener("input", validarTel);
  motivos.addEventListener("input", validarMotivos);
  comentarios.addEventListener("input", validarComentarios);

  validarNombre();
  validarEmail();
  validarTel();
  validarMotivos();
  validarComentarios();
}

//Funciones para validar los distintos campos.
function validarNombre() {
   //Condicional que analiza los datos ingresados
  if (nombre.value == "") {
    nombre.setCustomValidity("Por favor, escribe tu nombre");
  } else if (nombre.value.length < 5) {
    nombre.style.backgroundColor = "#ffc7c7";
    nombre.setCustomValidity("Por favor, escribe tu nombre");
  } else {
    nombre.style.backgroundColor = "#ccffc7";
    nombre.setCustomValidity("");
  }
}

function validarEmail() {
  var regExp = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (email.value == "") {
    email.setCustomValidity("Por favor, escribe tu e-mail");
  } else if (regExp.test(email.value)) {
    email.style.backgroundColor = "#ccffc7";
    email.setCustomValidity("");
  } else {
    email.style.backgroundColor = "#ffc7c7";
    email.setCustomValidity("Por favor, completa correctamente tu e-mail para poder contactarte :) ");
  }
}

function validarTel() {
  if (tel.value == "") {
    tel.setCustomValidity(
      "Por favor, completa tu teléfono para poder contactarte :) "
    );
  }else if (tel.value.length < 7) {
        tel.style.backgroundColor = "#ffc7c7";
        tel.setCustomValidity("Por favor, escribe correctamente tu teléfono");
  } else {
    tel.style.backgroundColor = "#ccffc7";
    tel.setCustomValidity("");
  }
}
function validarMotivos() {
  if (motivos.value == ""){
    motivos.style.backgroundColor = "#fff";
    motivos.setCustomValidity(
      "Por favor, elige la opción que mejor se ajuste a tu búsqueda :)"
      );
  } else {
    motivos.style.backgroundColor = "#ccffc7";
    motivos.setCustomValidity("");
  }
}

function validarComentarios() {
  if (comentarios.value == "") {
    comentarios.setCustomValidity("Por favor, cuentanos sobre tus objetivos :)");
  } else if (comentarios.value.length < 15) {
    comentarios.style.backgroundColor = "#ffc7c7";
    comentarios.setCustomValidity("Explayate un poco más!");
  } else {
    comentarios.style.backgroundColor = "#ccffc7";
    comentarios.setCustomValidity("");
  }
}

//Evento para ejecutar la validación luego de la carga de la página.
window.addEventListener("load", validarForm);
