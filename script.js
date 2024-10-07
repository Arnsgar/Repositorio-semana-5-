
// Obtener los elementos del DOM
const modal = document.getElementById("modalFormulario");
const btnAbrir = document.getElementById("abrirFormulario");
const spanCerrar = document.getElementsByClassName("cerrar")[0];

//Funcion De Grupos de Investigacion
function abrirGrupo(pestaña) {
    const contenido = pestaña.querySelector('.contenidoGI');//selecciona el primer contenido o sea de esta pestaña
    const todosContenidos = document.querySelectorAll('.contenidoGI');//selecciona todos los contenidos

    // Cerrar otros contenidos
    todosContenidos.forEach((c) => {
        if (c !== contenido) {
            c.classList.remove('mostrar');
        }
    });

    // Alternar la visibilidad del contenido de la pestaña seleccionada
    contenido.classList.toggle('mostrar');
}

//Texto Perfil Ocupacional
const textoPerfil = document.getElementById("texto_perfil");
textoPerfil.textContent='El (la) Tecnólogo(a) en Programación de Sistemas Informáticos de la Universidad de Pedagógica y Tecnológica de Colombia, desarrolla soluciones de software que requiere la empresa y la industria a nivel local, nacional e internacional; aplica metodologías, técnicas, tecnologías y estándares internacionales en el ciclo de desarrollo de software, soporte y mantenimiento de infraestructura tecnológica a través de la investigación y la innovación; realiza procesos de soporte y mantenimiento de infraestructura y componentes informáticos de una organización. Trabaja en equipo y se comunica de manera asertiva para relacionarse con el cliente y el entorno laboral para el desarrollo de sus actividades profesionales; emprende sus propias ideas de negocio, para crear empresas de base tecnológica de baja y media complejidad.';
//Funcion para cambiar el texto Mision y Vision en Pantallas Pequeñas
function ajustarTexto() {
    const textoMision = document.getElementById('detras');
    const textoVision = document.getElementById('detras2');
    
    if (window.innerWidth <= 1000) {
        textoMision.textContent = 'mision resumido.';
        textoVision.textContent='vision resumida';
        
    } else {
        textoMision.textContent = 'El programa de Tecnología en Programación de Sistemas Informático tiene como misión: formar tecnólogos con valores éticos y morales, que desarrollar habilidades y destrezas fundamentadas en el conocimiento específico de los sistemasinformáticos y las TIC, para que contribuyan al desarrollo y la competitividad de las empresas y del país. Apoyando procesos de diseño, modernización e implantación de soluciones de software y tecnología en la empresa.'; 
        textoVision.textContent='Ser el programa de Tecnología en Programación de Sistemas Informáticos de mayor calidad en el país, y de la misma manera tener la mayor cobertura posible a  nivel nacional, de manera que los Tecnólogos egresados de este programa tengan acceso laboral inmediato y la capacidad de formar su propia empresa, para que contribuyan al desarrollo de su región y del país.; lograr a mediano plazo la formación de Tecnólogos en Programación de Sistemas Informáticos que atiendan las necesidades que el medio empresarial exige, utilizando las TIC, modelos educativos adecuados y un grupo de docentes comprometido con el mejoramiento continuo del programa, bajo un marco de interdisciplinaridad y mayor cobertura nacional.';
    }
} 

// Llama a la función al cargar la página
ajustarTexto();

// Llama a la función al redimensionar la ventana
window.addEventListener('resize', ajustarTexto);


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
