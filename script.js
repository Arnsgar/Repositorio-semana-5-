// Obtener los elementos del DOM
const modal = document.getElementById("modalFormulario");
const btnAbrir = document.getElementById("abrirFormulario");
const spanCerrar = document.getElementsByClassName("cerrar")[0];

//mostrar semestres
function mostrarInfo(numero) {
    const informacionDiv = document.getElementById('informacion_texto');
    let mensaje;

    switch (numero) {
        case 1:
            mensaje = " 8107248	Fundamentos-de-Programación	<strong>3</strong><br>8107249	Cátedra-Upetecista	<strong>1</strong><br>8107250	Álgebra-Lineal	<strong>3</strong> <br>8107251	Probabilidad-y-Estadística	<strong>3</strong><br>8107252	Métodos-de-Estudio-y-Competencias-Comunicativas	<strong>3</strong><br>8107253	Informática	<strong>2</strong>";
            break;
        case 2:
            mensaje = "8107254	Programación-I <strong>4</strong><br> 8107255	Competencias-Investigativas	<strong>2</strong><br>8107256	Cálculo 	<strong>3</strong><br>8107257	Física 	<strong>4</strong><br>8107258	Ética 	<strong>2</strong>";
            break;
        case 3:
            mensaje = "8107259	Programación-II	<strong>4</strong><br> 8107260	Teoría-General-de-Sistemas	<strong>3</strong><br>8107261	Electrónica-Básica	<strong>3</strong><br> 8107262	Humanidades 	<strong>3</strong><br> 8107263	Idioma-Extranjero-I	<strong>2</strong><br>";
            break;
        case 4:
            mensaje = "8107264	Programación-III	<strong>4</strong><br> 8107265	Análisis-y-Diseño-de-Sistemas	<strong>4</strong><br> 8107266	Sistemas-Operativos	<strong>3</strong><br> 8107267	Arquitectura-de-Computadores	<strong>3</strong><br> 8107268	Idioma-Extranjero-II	<strong>2</strong><br>";
            break;
        case 5:
            mensaje = "8107269	Programación-Avanzada	<strong>4</strong><br> 8107270	Bases-de-Datos	<strong>4</strong><br> 8107271	Administración-de-Sistemas	<strong>3</strong><br> 8107272	Redes-de-Computadores	<strong>3</strong><br> 8107273	Constitución-Política	<strong>2</strong><br>";
            break;
        case 6:
            mensaje = "8107274	Electiva-Programación	<strong>4</strong><br> 8107275	Ingeniería-de-Software	<strong>4</strong><br> 8107276	Fundamentos-de-Economía	<strong>3</strong><br> 8107278	Electiva	<strong>4</strong><br>";
            break;
        default:
            mensaje = "Número no válido¿?.";
    }

    informacionDiv.innerHTML = mensaje; // Muestra el mensaje en el div
}

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
