var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var motivos = document.getElementById("motivos");
var comentarios = document.getElementById("comentarios");

var elementosForm = [nombre, email, tel, motivos, comentarios];

function validarForm() {
  for (var i = 0; i < 2; i++) {
    elementosForm[i].addEventListener("input", validarElemento([i]));
  }
  motivos.addEventListener("select", validarElemento(motivos));
  comentarios.addEventListener("textarea", validarElemento(comentarios));

  for (var o = 0; o < elementosForm.length; o++) {
    validarElemento([o]);
  }
}

function validarElemento(x) {
  if (x.value == "") {
    x.style.border = "6px solid red";
    x.setCustomValidity("Por favor, escribe tu nombre");
  } else {
    x.style.border = "6px solid green";
    x.setCustomValidity("");
  }
}

window.addEventListener("load", validarForm);
