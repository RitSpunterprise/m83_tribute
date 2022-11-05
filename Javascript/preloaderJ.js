//cuando cargue todo, el contenedor de el preloader ya no se verá
var contenedor = document.getElementById("cont_preloader");

function carga(){
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';
    
}

window.onload = carga;