//cuando se le esté haciendo scroll hacia abajo a la ventana
var btn = document.getElementById("button");
var btn2 = document.getElementById("button2");

function mostrarBoton() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
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

window.onscroll = mostrarBoton;