function iniciar() {
  soltar = document.getElementById("archivos");
  soltar.addEventListener("dragenter", function (e) {
    e.preventDefault();
  });
  soltar.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  soltar.addEventListener("drop", soltado, false);
}

function soltado(e) {
  e.preventDefault();
  var archivos = e.dataTransfer.files;
  var lista = "";
  for (var i = 0; i < archivos.length; i++) {
    lista += i + 1 + ": " + archivos[i].name + "<br>";
  }
  if (archivos.length == 1) {
    soltar.innerHTML =
      "¡Gracias por confiar en nosotros!" +
      "<br>" +
      "La foto adjuntada es: " +
      "<br>" +
      "<br>" +
      lista;
  } else {
    soltar.innerHTML =
      "¡Gracias por confiar en nosotros!" +
      "<br>" +
      "Las fotos adjuntadas son: " +
      "<br>" +
      "<br>" +
      lista;
  }
  soltar.style.border = "2px dotted #bf7aff";
  soltar.style.backgroundColor = "white";
  soltar.style.color = "#bf7aff";
}
window.addEventListener("load", iniciar, false);
