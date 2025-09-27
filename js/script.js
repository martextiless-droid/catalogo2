// CÓDIGO CORREGIDO PARA ESPERAR A LAS IMÁGENES
$(window).on('load', function() {
    
    $('#catalog-book').turn({
        width: 800,
        height: 600,
        autoCenter: true,
        display: 'double',
        acceleration: true
    }).bind('turned', function(event, page) {
        // Esta línea confirma que la librería está activa
        console.log('Página volteada a: ' + page);
    });
});