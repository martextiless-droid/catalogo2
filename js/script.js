// CÓDIGO CORREGIDO PARA ESPERAR A LAS IMÁGENES
$(window).on('load', function() {
    
    // Añade un pequeño retraso de 100 milisegundos
    setTimeout(function() {
        $('#catalog-book').turn({
            width: 800,
            height: 600,
            autoCenter: true,
            display: 'double',
            acceleration: true
        }).bind('turned', function(event, page) {
             console.log('Página volteada a: ' + page);
        });
    }, 100); // 100ms de retraso
});