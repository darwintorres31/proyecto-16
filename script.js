// Guardamos los elementos del HTML que vamos a usar
const desplegable = document.getElementById('desplegable');
const boton = document.getElementById('boton');
const textoBoton = document.getElementById('textoBoton');
const opciones = document.querySelectorAll('#lista li');

// Abrir o cerrar el desplegable al hacer clic en el botón
boton.addEventListener('click', () => {
    // toggle agrega la clase "abierto" si no está y la quita si ya está
    desplegable.classList.toggle('abierto');
});

// Recorremos cada opción de la lista
opciones.forEach((opcion) => {
    opcion.addEventListener('click', () => {
        // Quitamos el resaltado a todas las opciones
        opciones.forEach((o) => o.classList.remove('seleccionado'));

        // Resaltamos solo la que se eligió
        opcion.classList.add('seleccionado');

        // Mostramos el texto elegido en el botón
        textoBoton.textContent = opcion.textContent;

        // Cerramos el desplegable
        desplegable.classList.remove('abierto');
    });
});

// Si se hace clic fuera del desplegable, se cierra
document.addEventListener('click', (evento) => {
    if (!desplegable.contains(evento.target)) {
        desplegable.classList.remove('abierto');
    }
});