// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Inicialización de variables
let listaAmigos = [];

/**
 * Agregar un amigo a la lista
 * Validar que el campo no esté vacío
 * Actualizar la lista en pantalla
 */
function agregarAmigo() {
    // Obtener el valor del input
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    // Agregar el nombre a la lista
    listaAmigos.push(nombreAmigo);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar la lista en pantalla
    actualizarListaAmigos();
    
    // Limpiar el resultado anterior si existe
    limpiarResultado();
}

/**
 * Actualizar la lista de amigos en el DOM
 */
function actualizarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';
    
    // Crear un elemento de lista por cada amigo
    listaAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        li.className = 'name-item';
        listaElement.appendChild(li);
    });
}

/**
 * Limpia el resultado anterior
 */
function limpiarResultado() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
}

/**
 * Selecciona un amigo al azar de la lista
 * Muestra el resultado en pantalla
 */
function sortearAmigo() {
    // Verificar que haya amigos en la lista
    if (listaAmigos.length === 0) {
        alert('Agregue al menos un amigo antes de sortear');
        return;
    }
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    // Obtener el amigo seleccionado
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSeleccionado);
}

/**
 * Muestra el resultado del sorteo en el DOM
 * @param {string} amigo - El nombre del amigo seleccionado
 */
function mostrarResultado(amigo) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    
    const li = document.createElement('li');
    li.innerHTML = `<span class="result-title">Amigo seleccionado:</span> <span class="result-name">${amigo}</span>`;
    li.className = 'result-item';
    
    resultadoElement.appendChild(li);
}

// Verificar si el DOM está listo y asignar eventos
document.addEventListener('DOMContentLoaded', function() {
    // Opcional: Agregar evento de teclado para permitir presionar Enter
    document.getElementById('amigo').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
});