// Obtén todas las secciones
var secciones = document.querySelectorAll("section");

// Agrega un evento clic a cada sección
secciones.forEach(function(seccion) {
    seccion.addEventListener("click", function() {
        // Elimina la clase "resaltado" de todas las secciones
        secciones.forEach(function(ele) {
            ele.classList.remove("resaltado");
        });

        // Agrega la clase "resaltado" solo a la sección clicada
        this.classList.add("resaltado");
    });
});
