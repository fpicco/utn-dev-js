//Creacion de Arrays con URL imagenes
var imagenesHortensia = [
  "imagenes/vermas_hortensia.jpg",
  "imagenes/vermas_hortensia1.jpg",
  "imagenes/f_hortensia.jpg"
];
var imagenesAgapanthus = [
  "imagenes/vermas_agapanthus.jpg",
  "imagenes/vermas_agapanthus1.jpg",
  "imagenes/f_agapanthus.jpg"
];
var imagenesAzalea = [
  "imagenes/vermas_azalea.jpg",
  "imagenes/vermas_azalea1.jpg",
  "imagenes/f_azalea.jpg"
];
var imagenesHelecho = [
  "imagenes/vermas_helecho.jpg",
  "imagenes/vermas_helecho1.jpg",
  "imagenes/f_helecho.jpg"
];
var imagenesJazminDeLeche = [
  "imagenes/vermas_jazmin_de_leche.jpg",
  "imagenes/vermas_jazmin_de_leche1.jpg",
  "imagenes/f_jazmin_de_leche.jpg"
];
var imagenesJazminAzul = [
  "imagenes/vermas_jazmin_azul.jpg",
  "imagenes/vermas_jazmin_azul1.jpg",
  "imagenes/f_jazmin_azul.jpg"
];
var imagenesPetunia = [
  "imagenes/vermas_petunia.jpg",
  "imagenes/vermas_petunia1.jpg",
  "imagenes/f_petunia.jpg"
];
var imagenesStrelitzia = [
  "imagenes/vermas_strelitzia.jpg",
  "imagenes/vermas_strelitzia1.jpg",
  "imagenes/f_strelitzia.jpg"
];

//Creacion de Array con las variables que contienen las URL de las imagenes
var imagenesPlantas = [
  imagenesHortensia,
  imagenesAgapanthus,
  imagenesAzalea,
  imagenesHelecho,
  imagenesJazminDeLeche,
  imagenesJazminAzul,
  imagenesPetunia,
  imagenesStrelitzia,
];

//Obtención a través del DOM de los elementos para cambiar las imagenes
var hortensia = document.getElementById("imagen_hortensia");
var agapanthus = document.getElementById("imagen_agapanthus");
var azalea = document.getElementById("imagen_azalea");
var helecho = document.getElementById("imagen_helecho");
var jazminDeLeche = document.getElementById("imagen_jazmin_de_leche");
var jazminAzul = document.getElementById("imagen_jazmin_azul");
var petunia = document.getElementById("imagen_petunia");
var strelitzia = document.getElementById("imagen_strelitzia");

//Creacion de Arrays con los elementos 
var elementosPlantas = [
  hortensia,
  agapanthus,
  azalea,
  helecho,
  jazminDeLeche,
  jazminAzul,
  petunia,
  strelitzia,
];

//Defino funcion para cambiar el src de las imagenes
var indice = 0;
function cambiarImagen(elemento, imagenes) {
  indice++;
  if (indice > 2) {
    indice = 0;
  }
  elemento.src = imagenes[indice];
}

//Defino funcion para generar numero aleatorio
function tiempoAleatorio(min, max) {
  return Math.random() * (max - min) + min;
}
//Uso for para recorrer el array de imagenes y elementos para indicarle el intevalo de cambio de imagen
for (var i = 0; i < elementosPlantas.length; i++) {
  setInterval(
    cambiarImagen,
    tiempoAleatorio(3000, 5000),
    elementosPlantas[i],
    imagenesPlantas[i]
  );
}
