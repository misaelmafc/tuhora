$(document).ready(function () {

    $('#form-register').submit(function (event) {
        const form = document.getElementById("form-register");
        if (form.checkValidity() === true) {
            event.preventDefault();
            let alert = new Alert();
            let inputPhone = $('#rg_input7').val();
            $('#rg_input7').val(inputPhone.substring(6, 14));
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
                    form.setAttribute('novalidate', true);
                    form.classList.remove('was-validated');
                    history.pushState(null, "", "user.php#/");
                    const path = parseLocation();
                    const { component = ComponenteError } = findComponent(path, routes) || {};
                    $('#main-user').html(component.render());
                } else {
                    alert.createAlert('alert-danger', 'Registro fallido', 'Intente nuevamente o contacte al administrador');
                }
            }).fail(function () {
                alert.createAlert('alert-danger', 'Registro fallido', 'Intente nuevamente o contacte al administrador');
            });
        } else {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
        }
    });

    $('#rg_input7').keypress(function () {
        let valor = $(this).val();
        if (valor.length <= 6) {
            if (valor.length == 0) {
                $(this).val(`+56 9 ${valor}`);
            } else {
                let lastValue = valor.substring(valor.length);
                $(this).val(`+56 9 ${lastValue}`);
            }
        }
    });

    $('#rg_input7').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9 +]/g, ''));
    });



});

