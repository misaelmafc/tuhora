$(document).ready(function () {
    $('#btn_form_save_user').click(function () {
        let alert = new Alert();
        var formulario = $('#form-save-user').serializeArray();
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/save-user.php',
            data: formulario,
        }).done(function (response) {
            if (response == 1) {
                document.getElementById("form-save-user").reset();
                alert.createAlert('alert-success', 'Registro exitoso', 'Ingrese con su email y contraseña');
            } else {
                document.getElementById("form-save-user").reset();
                alert.createAlert('alert-danger', 'Registro fallido', 'Intente nuevamente o contacte al administrador');
            }
        }).fail(function () {
            document.getElementById("form-save-user").reset();
            alert.createAlert('alert-danger', 'Registro fallido', 'Intente nuevamente o contacte al administrador');
        });
        return false;
    });
});