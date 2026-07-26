// Mostrar secciones
function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(sec => {
        sec.style.display = "none";
        sec.style.opacity = 0;
    });

    const s = document.getElementById(id);
    s.style.display = "block";
    setTimeout(() => s.style.opacity = 1, 50);
}

// Modo claro / oscuro
const toggle = document.getElementById("toggle-mode");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
});

/////////////////////////////////////////////////////////////

// CAMBIO DE SECCIONES CON ANIMACIÓN
function mostrarSeccion(id) {
    document.querySelectorAll('.seccion').forEach(sec => {
        sec.style.display = 'none';
        sec.style.opacity = 0;
        sec.style.transform = 'translateY(5px)';
    });

    const target = document.getElementById(id);
    target.style.display = 'block';

    setTimeout(() => {
        target.style.opacity = 1;
        target.style.transform = 'translateY(0)';
    }, 10);
}

// MODO OSCURO / CLARO CON ICONO DINÁMICO
document.addEventListener('DOMContentLoaded', () => {

    // Modo por defecto → oscuro
    document.body.classList.add('dark');

    const btn = document.getElementById('toggle-mode');

    // Icono inicial (modo oscuro → mostrar sol)
    btn.textContent = "☀️";

    btn.addEventListener('click', () => {

        // SOLO CAMBIA EL MODO, NO CAMBIA DE SECCIÓN
        if (document.body.classList.contains('dark')) {

            // Pasar a modo claro
            document.body.classList.remove('dark');
            document.body.classList.add('light');

            // Mostrar luna (porque ahora estás en claro)
            btn.textContent = "🌙";

        } else {

            // Pasar a modo oscuro
            document.body.classList.remove('light');
            document.body.classList.add('dark');

            // Mostrar sol (porque ahora estás en oscuro)
            btn.textContent = "☀️";
        }
    });
});
