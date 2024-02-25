const nuevaTarea = document.getElementById("nueva-tarea");
const agregarTarea = document.getElementById("agregar-tarea");
const listaTareas = document.getElementById("lista-tareas");

listaTareas.innerHTML = "";

// Función para agregar una nueva tarea
function agregarNuevaTarea() {
    const nombreTarea = nuevaTarea.value;
    if (nombreTarea === "") {
        return;
    }

    // Crear un nuevo elemento "li"
    const li = document.createElement("li");
    li.classList.add("tarea");

    // Crear una casilla de verificación
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = `tarea-${listaTareas.children.length + 1}`;

    // Crear una etiqueta para el nombre de la tarea
    const label = document.createElement("label");
    label.setAttribute("for", checkbox.id);
    label.textContent = nombreTarea;

    // Crear un botón para eliminar la tarea
    const eliminar = document.createElement("button");
    eliminar.classList.add("eliminar");
    eliminar.textContent = "Eliminar";

    // Agregar la casilla, la etiqueta y el botón al elemento "li"
    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(eliminar);

    // Agregar el elemento "li" a la lista de tareas
    listaTareas.insertBefore(li, listaTareas.firstChild);

    // Limpiar el campo de entrada
    nuevaTarea.value = "";

    // Agregar un evento para marcar la tarea como completada
    checkbox.addEventListener("change", function () {
        if (this.checked) {
            li.classList.add("completada");
            listaTareas.appendChild(li);
        } else {
            li.classList.remove("completada");
        }
    });

    // Agregar un evento para eliminar la tarea
    eliminar.addEventListener("click", function () {
        li.parentNode.removeChild(li);
    });
}

// Agregar un evento al botón "Agregar"
agregarTarea.addEventListener("click", agregarNuevaTarea);

// Agregar un evento para detectar cuando se presiona la tecla Enter en el campo de entrada
nuevaTarea.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        agregarNuevaTarea();
    }
});




