$(document).ready(function () {
    $('#btn-us-login').click(function () {
        let alert = new Alert();
        var formulario = $('#formLogin').serializeArray();
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/login.php',
            data: formulario,
        }).done(function () {
            document.getElementById("formLogin").reset();
            window.location.replace('user.php');
        }).fail(function () {
            document.getElementById("formLogin").reset();
            alert.createAlert('alert-danger', 'Acceso denegado', 'Email y contraseña no coinciden');
        });
    });
});