/* Para que el scroll se vea suave y fluido en todos los hipervinculos, tanto los del menu principal
como los del footer */

/* seleccionamos los elementos que queremos que cuando se les dé click hagan esa funcion suave de llevarte
hasta la parte que indica */
$(".cabeza nav ul li a").on("click", function (e) {
    //prevenimos que se recargue la pagina
    e.preventDefault();
    //le indicamos el atributo de href, porque ese elemento seleccionado tiene el href de a donde irá si se presiona
    const href = $(this).attr("href");
    //y le decimos que anime el html y body al hacer el scroll
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

$(".piePagina .redireccionPaginas a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

$(".piePagina .redireccionPaginas2 a").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});