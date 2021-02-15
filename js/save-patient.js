$(document).ready(function () {

    $('#form-register').submit(function (event) {
        const form = document.getElementById("form-register")
        event.preventDefault();
        let alert = new Alert();
        let formulario = $(form).serializeArray();
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/save-patient.php',
            data: formulario,
        }).done(function (response) {
            if (response == 1) {
                form.reset();
                sessionStorage.clear();
                alert.createAlert('alert-success', 'Registro exitoso', 'Puede reservar con su sesión iniciada');
            } else {
                alert.createAlert('alert-danger', 'Registro fallido', 'Intente nuevamente o contacte al administrador');
            }
        }).fail(function () {
            alert.createAlert('alert-danger', 'Registro fallido', 'Intente nuevamente o contacte al administrador');
        });
    });

});

