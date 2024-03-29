
//----------------------------------PEDIDO DE INFORMACION AL USUARIO, USO DE DOM,  VECTORES Y VARIABLES

//Solicitud ingreso de información del usuario, almacenado en una VARIABLE

var plantaFavUser1 = prompt("Ayudanos a inspirarnos para sumar plantas a nuestra web! \nPor favor, sugerinos una planta");

//Creación del VECTOR y agregado de la información brindada por el usuario al mismo: 
var proxPlantas = [" Jazmín del Cabo", " Peonia", " Spathiphyllum"];
proxPlantas.push(plantaFavUser1);


//Selección de contenedor:
var contenedor = document.getElementById("inspiracion__section");

//Creación del nuevo div:
var div = document.createElement("div");


// Creación de titulo y subtitulo de la lista 
var tituloLista = document.createElement("h2");
tituloLista.innerHTML = "Próximas plantas a incorporar a la web: ";
var subtituloLista = document.createElement("h3");
subtituloLista.innerHTML = "(Orden según solicitudes previas de otros usuarios)";

//Uso del bucle for para crear la lista y recorrer el vector para mostrar en pantalla sus elementos.
var list = document.createElement("ol");
for(var i=0;i < proxPlantas.length; i++){
    var li = document.createElement("li");
    li.innerHTML = proxPlantas[i];
    list.appendChild(li);
}

//Agregado del titulo, subtitulo y la lista al div creado
div.appendChild(tituloLista);
div.appendChild(subtituloLista);
div.appendChild(list);

//Adición de todo al div seleccionado como contenedor
contenedor.appendChild(div);

//Agregado de clases e id a los elementos
div.classList.add("inspiracion__section-div");
div.setAttribute("id", "div-js");
tituloLista.classList.add("inspiracion__section-h2");
tituloLista.setAttribute("id", "h2-js");
subtituloLista.classList.add("inspiracion__section-h2");
subtituloLista.setAttribute("id", "sub-js");

//Modificación del estilo de los elementos
div.style.height = "auto";
div.style.textTransform = "none";
div.style.padding = "10px";
div.style.marginTop = "-260px";
// div.style.marginTop = "-1610px";
tituloLista.style.fontSize = "23px";
tituloLista.style.color = "#ffffff";
tituloLista.style.margin = "-10px 10px 10px 20px";
subtituloLista.style.fontSize = "15px";
subtituloLista.style.marginTop = "-20px";
subtituloLista.style.marginBottom = "10px";
list.style.marginTop = "-10px";
list.style.color = "#ffffff";

