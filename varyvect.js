// var inspiracionSection = document.getElementById("inspiracion__section");
// console.dir(inspiracionSection)

// var div = document.createElement("div");
// var contenido = document.createTextNode("Probando nuevo div");
// div.appendChild(contenido);
// document.body.appendChild(div)

// nuevoDiv.innerHTML = "HOLAA"


//----------------------------------

//Solicitud ingreso de información del usuario
var plantaFavUser = prompt("Por favor, indique que");

//Creación del vector y agregado de la info brindada por el usuario al vector
var proxPlantas = [" Jazmín del Cabo", " Peonia", " Spathiphyllum"];
proxPlantas.push(plantaFavUser);


//Selección de contenedor:
var contenedor = document.getElementById("inspiracion__section");

//Creación del nuevo div:
var div = document.createElement("div");

//Creación del titulo (elemento + contendido) del div:
var h1 = document.createElement("h1");
var h1Text = document.createTextNode("Las próximas plantas a incluir en nuestra web son: ");
h1.appendChild(h1Text);









//Creación del parrafo (elemento + contenido que incluye el ingresado por el usuario) del div:
var p = document.createElement("p");
var pText = document.createTextNode(" ");
pText.innerHTML = "</li><li>" + "\n" + proxPlantas[1] + "</li><li>"  + "\n"+ proxPlantas[2] + "</li><li>"  + "\n"+ " " + " y la elegida por Usted: " + proxPlantas[3] + "</li></ul>"


//"<ul><li>" + proxPlantas[0] + "</li><li>" + "\n" + proxPlantas[1] + "</li><li>"  + "\n"+ proxPlantas[2] + "</li><li>"  + "\n"+ " " + " y la elegida por Usted: " + proxPlantas[3] + "</li></ul>"


// var pText = document.createTextNode("<ul><li>" + proxPlantas[0] + "</li><li>" + "\n" + proxPlantas[1] + "</li><li>"  + "\n"+ proxPlantas[2] + "</li><li>"  + "\n"+ " " + " y la elegida por Usted: " + proxPlantas[3] + "</li></ul>");



p.appendChild(pText);













//Agregado del titulo y el parrafo al div creado
div.appendChild(h1);
div.appendChild(p);

//Adición todo al div seleccionado como contenedor
contenedor.appendChild(div);

//Agregado de clases e id a los elementos
div.classList.add("inspiracion__section-div");
div.setAttribute("id", "div-js")
h1.classList.add("inspiracion__section-h2");


//Modificación del estilo de los elementos
div.style.height = "auto";
div.style.textTransform = "none";
p.style.fontSize = "20px";
p.style.color = "#ffffff";
p.style.margin = "-10px 10px 10px 20px"




console.dir(div)