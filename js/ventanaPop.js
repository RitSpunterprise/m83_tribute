//Javascript
//obtenemos los audios que queremos utilizar
var sonidoAlerta = new Audio();
sonidoAlerta.src = "https://github.com/RitSpunterprise/m83_tribute/blob/main/snds/sonidoAlerta.mp3?raw=true"

var sonidoAlerta2 = new Audio();
sonidoAlerta2.src = "https://github.com/RitSpunterprise/m83_tribute/blob/main/snds/sonidoAlerta2.mp3?raw=true";

function formulario() {

    //obtenemos los elementos que queremos mostrar en las ventanas emergentes
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let email = document.getElementById("email");
    let telefono = document.getElementById("telefono");
    let marketing = document.getElementById("checkMarketing");

    //si alguno de estos no está lleno
    if (nombre.value == "" || apellidos.value == "" || email.value == "" || telefono.value == "") {
        //le avisamos que debe llenarlo
        swal({
            icon: 'assets/img/error_64.png',
            title: 'Ningún espacio puede quedar vacío, rellene cada uno de estos por favor!',
            buttons: { cancel: "OK" }

        });

        //ponemos sonido de alerta
        sonidoAlerta.play();

        //de lo contrario
    } else {
        let mensajeFinal = "Gracias " + nombre.value + " por suscribirse a M83," + " se ha añadido su correo " + email.value + " y su número de teléfono " + telefono.value
            + ", exitosamente!";

        //le decimos que gracias
        swal({
            title: mensajeFinal,
            icon: 'assets/img/Check_Circle_64.png',
            buttons: { cancel: "OK" }
        });

        //y si el check está activo, le anadimos eso a la ventana emergente 
        if (marketing.checked) {
            swal({
                icon: 'assets/img/Check_Circle_64.png',
                title: mensajeFinal,
                text: 'Se le enviará publicidad de M83 a su correo!',
                buttons: { cancel: "OK" }

            });
        }

        //suena sonido
        sonidoAlerta2.play();

        //Limpiar el formulario
        nombre.value = "";
        apellidos.value = "";
        email.value = "";
        telefono.value = "";
        marketing.checked = false;

    }
}
