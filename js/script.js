// Espera a que el documento esté completamente cargado
$(document).ready(function() {
    // Inicializa el plugin Turn.js en el contenedor #catalog-book
    $('#catalog-book').turn({
        width: 800, // Debe coincidir con el CSS
        height: 600, // Debe coincidir con el CSS
        autoCenter: true,
        display: 'double', // Muestra dos páginas a la vez
        acceleration: true // Usa aceleración por hardware (mejora rendimiento)
    });
});