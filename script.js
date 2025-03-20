// Array con investigaciones de ejemplo
const investigaciones = [
    { titulo: "El impacto de la IA en la educación", fecha: "Marzo 2025" },
    { titulo: "Blockchain y su aplicación en la industria", fecha: "Febrero 2025" },
    { titulo: "Energías renovables y eficiencia energética", fecha: "Enero 2025" }
];

// Función para cargar las investigaciones
function cargarInvestigaciones() {
    const contenedor = document.getElementById("lista-investigaciones");
    
    investigaciones.forEach(inv => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${inv.titulo}</h3><p>${inv.fecha}</p>`;
        contenedor.appendChild(div);
    });
}

// Ejecutar la función cuando la página cargue
document.addEventListener("DOMContentLoaded", cargarInvestigaciones);
