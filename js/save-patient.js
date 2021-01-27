$(document).ready(function () {
    $('#btn_form_register').click(function () {
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
                $('#alertaExito').fadeIn();
                setTimeout(function () { $('#alertaExito').fadeOut(); }, 7500);
            } else {
                $('#alertaError').fadeIn();
                setTimeout(function () { $('#alertaError').fadeOut(); }, 7500);
            }
        }).fail(function () {
            $('#alertaError').fadeIn();
            setTimeout(function () { $('#alertaError').fadeOut(); }, 7500);
        });
        return false;
    });
});