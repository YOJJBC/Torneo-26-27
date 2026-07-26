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

// MODO OSCURO / CLARO (icono controlado SOLO por CSS)
document.addEventListener('DOMContentLoaded', () => {

    // Modo por defecto → oscuro
    document.body.classList.add('dark');

    const btn = document.getElementById('toggle-mode');

    btn.addEventListener('click', () => {

        if (document.body.classList.contains('dark')) {

            // Pasar a modo claro
            document.body.classList.remove('dark');
            document.body.classList.add('light');

        } else {

            // Pasar a modo oscuro
            document.body.classList.remove('light');
            document.body.classList.add('dark');

        }
    });
});
