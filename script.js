// =========================
// CAMBIO DE SECCIONES
// =========================
function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(sec => {
        sec.style.display = 'none';
        sec.style.opacity = 0;
        sec.style.transform = 'translateY(5px)';
    });

    const activa = document.getElementById(id);
    activa.style.display = 'block';

    setTimeout(() => {
        activa.style.opacity = 1;
        activa.style.transform = 'translateY(0)';
    }, 50);
}

// =========================
// MODO CLARO / OSCURO
// =========================
const toggleBtn = document.getElementById("toggle-mode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});

// =========================
// ESTRELLA FUGAZ ALEATORIA
// =========================
function lanzarEstrellaFugaz() {
    const header = document.querySelector("header");

    // Crear estrella
    const estrella = document.createElement("div");
    estrella.classList.add("estrella-fugaz");

    // Posición aleatoria en la parte superior del header
    const startX = Math.random() * window.innerWidth * 0.6;
    const startY = Math.random() * 40;

    estrella.style.left = startX + "px";
    estrella.style.top = startY + "px";

    header.appendChild(estrella);

    // Eliminar cuando termine la animación
    estrella.addEventListener("animationend", () => {
        estrella.remove();
    });
}

// Lanzar una cada 4–7 segundos SOLO en modo oscuro
setInterval(() => {
    if (document.body.classList.contains("dark")) {
        lanzarEstrellaFugaz();
    }
}, 4000 + Math.random() * 3000);
