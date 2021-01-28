$(document).ready(function () {
    $('#btn-us-login').click(function () {
        var formulario = $('#formLogin').serializeArray();
        //console.log(formulario);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/login.php',
            data: formulario,
        }).done(function () {
            document.getElementById("formLogin").reset();
            window.location.replace('user.php');
        }).fail(function () {
            alert('Acceso denegado');
        });
    });
});