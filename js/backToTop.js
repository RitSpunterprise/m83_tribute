//cuando se le esté haciendo scroll hacia abajo a la ventana
var btn = document.getElementById("button");
var btn2 = document.getElementById("button2");
var checkMenu = document.getElementById('boton_Menu');
var abrirElMenu = document.getElementById('menuAbrir');
var cierreDelMenu = document.getElementById('menuCierre');

function mostrarBoton() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    btn.style.visibility = 'visible';
    btn.style.opacity = '1';

    //boton 2
    btn2.style.visibility = 'visible';
    btn2.style.opacity = '1';

  } else {
    btn.style.visibility = 'hidden';
    btn.style.opacity = '0';

    //boton 2
    btn2.style.visibility = 'hidden';
    btn2.style.opacity = '0';

  }

}

function scrollToTop(evt) {
  evt.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '300')

}

document.addEventListener("click", (e) => {
  //Si el menuCheck y el cierreDelMenu no es el elemento clickado se cierra el menu, o se pasa a False el checkbox para que se cierre
  //porque estaria haciendo click en cualquier lado menos en el lugar en donde se abre o cierra el menu normalmente
  if (!(checkMenu.contains(e.target)) && !(abrirElMenu.contains(e.target)) && !(cierreDelMenu.contains(e.target))) {
    checkMenu.checked = false;
    //console.log("DOCUMENT LISTENER: FALSE");
  }
});

window.onscroll = mostrarBoton;