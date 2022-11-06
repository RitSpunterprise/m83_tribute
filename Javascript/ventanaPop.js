//Javascript
//obtenemos los audios que queremos utilizar
var sonidoAlerta = new Audio();
sonidoAlerta.src = "/snds/sonidoAlerta.mp3"

var sonidoAlerta2 = new Audio();
sonidoAlerta2.src = "/snds/sonidoAlerta2.mp3";

function formulario() {

    //obtenemos los elementos que queremos mostrar en las ventanas emergentes
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let marketing = document.getElementById("checkMarketing");

    //si alguno de estos no está lleno
    if (nombre == "" || apellidos == "" || email == "" || telefono == "") {
        //le avisamos que debe llenarlo
        swal({
            icon: 'Img/error_64.png',
            title: 'Ningún espacio puede quedar vacío, rellene cada uno de estos por favor!',
            buttons: { cancel: "OK" }

        });

        //ponemos sonido de alerta
        sonidoAlerta.play();

        //de lo contrario
    } else {
        let mensajeFinal = "Gracias " + nombre + " por suscribirse a M83," + " se ha añadido su correo " + email + " y su número de teléfono " + telefono
            + ", exitosamente!";

        //le decimos que gracias
        swal({
            title: mensajeFinal,
            icon: 'Img/Check_Circle_64.png',
            buttons: { cancel: "OK" }
        });

        //suena sonido 
        sonidoAlerta2.play();

        //y si el check está activo, le anadimos eso a la ventana emergente 
        if (marketing.checked) {
            swal({
                icon: 'Img/Check_Circle_64.png',
                title: mensajeFinal,
                text: 'Se le enviará publicidad de M83 a su correo!',
                buttons: { cancel: "OK" }

            });

            //suena sonido
            sonidoAlerta2.play();
        }

    }

}
