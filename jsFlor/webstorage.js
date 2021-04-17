function guardar() {
  var boton = document.getElementById("tareaCliente__guardar");
  //   boton.addEventListener("click", nuevaTarea);
  mostrarTarea();
}

function nuevaTarea() {
  var tareaCliente__id = document.getElementById("tareaCliente__id").value;
  var tareCliente__desc = document.getElementById("tareaCliente__desc").value;
  var tareaCliente__urg = document.getElementById("tareaCliente__urg").value;
  var tareaCliente__fecha = document.getElementById("tareaCliente__fecha")
    .value;

  var valoresTareasCliente = [
    tareCliente__desc,
    tareaCliente__urg,
    tareaCliente__fecha,
  ];

  localStorage.setItem(tareaCliente__id, valoresTareasCliente);
  mostrarTarea();
}

function mostrarTarea() {
  var tareasPendientes = document.getElementById("tareasPendientes");
  var notasCliente = document.getElementById("notasCliente");
  for (var i = 0; i < localStorage.length; i++) {
    var id = localStorage.key(i);
    var valor = localStorage.getItem(id);
    // var eliminarUna = localStorage.removeItem(id);
    tareasPendientes.innerHTML +=
      '<p id="nuevaTareaPendiente">' +
      id +
      " --- " +
      valor +
      "<a href='#tareasPendientes' id='eliminarUna' onclick=\"eliminarUna('" +
      id +
      "')\">X</a></>";
  }

  notasCliente.innerHTML +=
    '<p><a href="#" id="eliminarTodas" onclick="eliminarTareas()">Eliminar todas las tareas</a></p>';
}

function eliminarUna(id) {
  if (confirm("Est� Seguro?")) {
    localStorage.removeItem(id);
    mostrarTarea();
  }
}

function eliminarTareas() {
  localStorage.clear();
  location.reload();
  confirm("¿Esta seguro que quiere eliminar todas las tareas?");
}
window.addEventListener("load", guardar);
