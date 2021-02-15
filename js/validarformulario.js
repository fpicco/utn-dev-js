//Almacenamiento en variables de los elementos 
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var motivos = document.getElementById("motivos");
var comentarios = document.getElementById("comentarios");
var eligeOpc = document.getElementById("eligeopc")

//Función para validar el formulario
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

//Funciones para validar cada uno de los distintos campos
function validarNombre() {
    //Condicional que analiza los datos ingresados
  if (nombre.value == "") {
    nombre.setCustomValidity("Por favor, escribe tu nombre");
  } else if (nombre.value.length < 5) {
      //Color y mensaje en caso de que el campo no este correcto
    nombre.style.backgroundColor = "#ffc7c7";
    nombre.setCustomValidity("Por favor, escribe tu nombre");
  } else {
      ////Color y mensaje en caso de que el campo este correcto
    nombre.style.backgroundColor = "#ccffc7";
    nombre.setCustomValidity("");
  }
}

function validarEmail() {
  var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/;
  if (email.value == "") {
    email.setCustomValidity("Por favor, escribe tu e-mail");
  } else if (regExp.test(email.value)) {
    email.style.backgroundColor = "#ffc7c7";
    email.setCustomValidity();
    ("Por favor, completa correctamente tu e-mail para poder contactarte :) ");
  } else {
    email.style.backgroundColor = "#ccffc7";
    email.setCustomValidity("");
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
  if (motivos.value == eligeOpc){
    motivos.setCustomValidity(
        "Por favor, elige la opción que mejor se ajuste a tu búsqueda :)"
      );
  } 
  else if (motivos.value == "s"){
    motivos.style.backgroundColor = "#ffc7c7";
    motivos.setCustomValidity(
      "Por favor, ayudanos a estar listos para asesorarte :)"
    );
  } else {
    motivos.style.backgroundColor = "#ccffc7";
    motivos.setCustomValidity("");
  }
}

function validarComentarios() {
  if (comentarios.value == "") {
    comentarios.setCustomValidity("Por favor, cuentanos sobre tus objetivos :)");
  } else if (comentarios.value.length < 20) {
    comentarios.style.backgroundColor = "#ffc7c7";
    comentarios.setCustomValidity("Explayate un poco más!");
  } else {
    comentarios.style.backgroundColor = "#ccffc7";
    comentarios.setCustomValidity("");
  }
}

//Evento que espera la carga completa del sitio para ejecutar la validación del formulario
window.addEventListener("load", validarForm);
