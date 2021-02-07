$(document).ready(function () {
    $('#btn_form_register').click(function () {
        let alert = new Alert();
        var formulario = $('#form-register').serializeArray();
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/save-patient.php',
            data: formulario,
        }).done(function (response) {
            if (response == 1) {
                document.getElementById("form-register").reset();
                sessionStorage.clear();
                validation = true;
                alert.createAlert('alert-success', 'Registro exitoso', 'Puede reservar con su sesión iniciada');
            } else {
                alert.createAlert('alert-danger', 'Registro fallido', 'Intente nuevamente o contacte al administrador');
            }
        }).fail(function () {
            alert.createAlert('alert-danger', 'Registro fallido', 'Intente nuevamente o contacte al administrador');
        });
        return false;
    });
});

