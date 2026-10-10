// Desplazamiento suave hacia las secciones de la misma página
$(document).ready(function () {
    $(".navbar a, footer a[href='#top']").on('click', function (event) {
        var hash = this.hash;
        // Solo se aplica a enlaces con ancla que apuntan a esta misma página
        if (hash !== "" && this.pathname === window.location.pathname && $(hash).length) {
            // Se evita el comportamiento por defecto del enlace
            event.preventDefault();
            // Se mueve el sitio hacia la sección destino en 900 milisegundos
            // (se restan 50px por la barra de navegación fija)
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 50
            }, 900, function () {
                // Se añade el ancla a la dirección
                window.location.hash = hash;
            });
        }
    });
});
