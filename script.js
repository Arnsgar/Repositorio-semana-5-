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
