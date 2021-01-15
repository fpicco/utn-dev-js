
//----------------------------------USO DE VECTORES Y VARIABLES

//SACAR EL PROMPT!!!!!

//Solicitud ingreso de información del usuario, almacenado en una VARIABLE
var plantaFavUser1 = prompt("Por favor, indique una planta");
// var plantaFavUser2 = prompt("Por favor, indique otra planta");

//Creación del VECTOR y agregado de la información brindada por el usuario al mismo: 
var proxPlantas = [" Jazmín del Cabo", " Peonia", " Spathiphyllum"];
proxPlantas.push(plantaFavUser1);
// proxPlantas.push(plantaFavUser2);


//Selección de contenedor:
var contenedor = document.getElementById("inspiracion__section");

//Creación del nuevo div:
var div = document.createElement("div");


// Creación de lista ordenada + titulo y subtitulo
var tituloLista = document.createElement("h2");
tituloLista.innerHTML = "Las proximas plantas incorporadas a nuestra web serán: ";
var subtituloLista = document.createElement("h3");
subtituloLista.innerHTML = "(Orden segun solicitudes previas de otros usuarios)";


var list = document.createElement("ol");
for(var i=0;i < proxPlantas.length; i++){
    var li = document.createElement("li");
    li.innerHTML = proxPlantas;
    //NECESITO QUE ME RECORRA EL ARRAY
    list.appendChild(li);
}


//Agregado del titulo y la lista al div creado
div.appendChild(tituloLista);
div.appendChild(subtituloLista);
div.appendChild(list);

//Adición todo al div seleccionado como contenedor
contenedor.appendChild(div);

//Agregado de clases e id a los elementos
div.classList.add("inspiracion__section-div");
div.setAttribute("id", "div-js");
tituloLista.classList.add("inspiracion__section-h2");
subtituloLista.classList.add("inspiracion__section-h2");


//Modificación del estilo de los elementos
div.style.height = "auto";
div.style.textTransform = "none";
div.style.padding = "10px";
tituloLista.style.fontSize = "25px";
tituloLista.style.color = "#ffffff";
tituloLista.style.margin = "-10px 10px 10px 20px";
subtituloLista.style.fontSize = "20px";
subtituloLista.style.marginTop = "-20px";
subtituloLista.style.marginBottom = "10px";
list.style.marginTop = "-10px";
list.style.color = "#ffffff";
// list.style.listStyle = "none"

