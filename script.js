// Obtener los elementos del DOM
const modal = document.getElementById("modalFormulario");
const btnAbrir = document.getElementById("abrirFormulario");
const spanCerrar = document.getElementsByClassName("cerrar")[0];

// Validación de contraseñas
const form = document.getElementById('registroForm');
form.addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden. Por favor, intenta de nuevo.");
        event.preventDefault(); // Previene el envío del formulario
    }
});


// Abrir el modal cuando se hace clic en el botón
btnAbrir.onclick = function () {
    modal.style.display = "flex";  // Mostrar el modal con flexbox para centrarlo
}

// Cerrar el modal cuando se hace clic en el botón de cerrar
spanCerrar.onclick = function () {
    modal.style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera del contenido
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
