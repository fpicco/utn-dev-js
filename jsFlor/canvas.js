function muralInspiracion() {
  var mural1 = document.getElementById("mural1");
  patron1 = mural1.getContext("2d");

  var fondo1 = new Image();
  fondo1.src = "imagenes/murales/pattern1.jpg";
  fondo1.addEventListener("load", aplicarImagen1);

  var fondo2 = new Image();
  fondo2.src = "imagenes/murales/pattern2.jpg";
  fondo2.addEventListener("load", aplicarImagen2);

  var fondo3 = new Image();
  fondo3.src = "imagenes/murales/pattern3.jpeg";
  fondo3.addEventListener("load", aplicarImagen3);
}
function aplicarImagen1(e) {
  fondo1 = e.target;
  var textura = patron1.createPattern(fondo1, "repeat");
  patron1.strokeStyle = "#bf7aff";
  patron1.lineWidth = 10;
  patron1.fillStyle = textura;
  patron1.strokeRect(0, 0, 278, 387);
  patron1.fillRect(0, 0, 276, 387);
}
function aplicarImagen2(e) {
  fondo2 = e.target;
  var textura = patron1.createPattern(fondo2, "repeat");
  patron1.strokeStyle = "#bf7aff";
  patron1.lineWidth = 10;
  patron1.fillStyle = textura;
  patron1.strokeRect(284, 0, 271, 395);
  patron1.fillRect(287, 0, 271, 395);
}
function aplicarImagen3(e) {
  fondo3 = e.target;
  var textura = patron1.createPattern(fondo3, "repeat");
  patron1.strokeStyle = "#bf7aff";
  patron1.lineWidth = 10;
  patron1.fillStyle = textura;
  patron1.strokeRect(553, 0, 278, 887);
  patron1.fillRect(558, 0, 278, 887);
}

window.addEventListener("load", muralInspiracion);
