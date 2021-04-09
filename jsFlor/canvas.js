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

var paleta1 = document.getElementById("paleta1");
forma1 = paleta1.getContext("2d");

//circulo 1
forma1.beginPath();
forma1.arc(120, 50, 40, 0, Math.PI*2, false);
forma1.fillStyle = "#80bd93";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(120, 50, 28, 0, Math.PI*2, false);
forma1.fillStyle = "#ff4203";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(120, 50, 16, 0, Math.PI*2, false);
forma1.fillStyle = "#89da59";
forma1.fill();
forma1.closePath();

//circulo 2
forma1.beginPath();
forma1.arc(270, 50, 40, 0, Math.PI*2, false);
forma1.fillStyle = "#5bc8ac";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(270, 50, 28, 0, Math.PI*2, false);
forma1.fillStyle = "#e6d72a";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(270, 50, 16, 0, Math.PI*2, false);
forma1.fillStyle = "#f18d9e";
forma1.fill();
forma1.closePath();

//circulo 3
forma1.beginPath();
forma1.arc(420, 50, 40, 0, Math.PI*2, false);
forma1.fillStyle = "#fb6542";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(420, 50, 28, 0, Math.PI*2, false);
forma1.fillStyle = "#3f681c";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(420, 50, 16, 0, Math.PI*2, false);
forma1.fillStyle = "#ffbb00";
forma1.fill();
forma1.closePath();

//circulo 4
forma1.beginPath();
forma1.arc(570, 50, 40, 0, Math.PI*2, false);
forma1.fillStyle = "#1995ad";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(570, 50, 28, 0, Math.PI*2, false);
forma1.fillStyle = "#bcbabe";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(570, 50, 16, 0, Math.PI*2, false);
forma1.fillStyle = "#a1d6e2";
forma1.fill();
forma1.closePath();

//circulo 5
forma1.beginPath();
forma1.arc(720, 50, 40, 0, Math.PI*2, false);
forma1.fillStyle = "#5d535e";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(720, 50, 28, 0, Math.PI*2, false);
forma1.fillStyle = "#ec96a4";
forma1.fill();
forma1.closePath();

forma1.beginPath();
forma1.arc(720, 50, 16, 0, Math.PI*2, false);
forma1.fillStyle = "#dfe166";
forma1.fill();
forma1.closePath();



window.addEventListener("load", muralInspiracion);
