document.addEventListener("DOMContentLoaded", function() {
    let form = document.querySelector('#recuperarContraseña');
    let aviso = document.querySelector('#aviso');
    let email = document.querySelector('#email');
    let checkbox = document.querySelector('#checkbox');

    form.addEventListener('submit', function(evento) {
        evento.preventDefault();
        if (email.value == ""){
            aviso.innerHTML = "Por favor escriba su email"
        } else if (!checkbox.checked){
            aviso.innerHTML = "Por favor acepte el campo Quiero recuperar mi contraseña"
        } else {
            aviso.innerHTML = "Recibiras un email con las instrucciones para recuperar tu contraseña."
        }
    });
}); 