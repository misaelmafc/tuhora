$(document).ready(function () {

    $('#formLogin').submit(function (event) {
        const form = document.getElementById("formLogin");
        if (form.checkValidity() === true) {
            event.preventDefault();
            let alert = new Alert();
            let formulario = $(form).serializeArray();
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'php/login.php',
                data: formulario,
            }).done(function () {
                form.reset();
                form.setAttribute('novalidate', true);
                form.classList.remove('was-validated');
                window.location.replace('user.php');
            }).fail(function () {
                form.reset();
                alert.createAlert('alert-danger', 'Acceso denegado', 'Email y contraseña no coinciden');
            });
        }else{
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
        }
    });
});