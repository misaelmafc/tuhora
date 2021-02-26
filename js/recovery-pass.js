$(document).ready(function () {

    $('#form-recovery-pass').submit(function (event) {
        const form = document.getElementById("form-recovery-pass");
        if (form.checkValidity() === true) {
            event.preventDefault();
            let alert = new Alert();
            let formulario = $(form).serializeArray();
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'php/recovery-pass.php',
                data: formulario,
            }).done(function (response) {
                if (response == 1) {
                    form.reset();
                    alert.createAlert('alert-success', 'Actualización exitosa', 'Ingrese con su email y nueva contraseña');
                    form.setAttribute('novalidate', true);
                    form.classList.remove('was-validated');
                    history.pushState(null, "", "user.php#/login");
                    const path = parseLocation();
                    const { component = ComponenteError } = findComponent(path, routes) || {};
                    $('#main-index').html(component.render());
                } else {
                    form.reset();
                    alert.createAlert('alert-danger', 'Actualización fallida', 'Intente nuevamente o contacte al administrador');
                }
            }).fail(function () {
                form.reset();
                alert.createAlert('alert-danger', 'Actualización fallida', 'Intente nuevamente o contacte al administrador');
            });
        } else {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
        }
    });

    $('#rcp_password').keyup(function () {
        const input1 = document.getElementById("rcp_password");
        const input2 = document.getElementById("rcp_password2");
        passwordEquals(input1, input2);
    });

    $('#rcp_password2').keyup(function () {
        const input1 = document.getElementById("rcp_password2");
        const input2 = document.getElementById("rcp_password");
        passwordEquals(input1, input2);
    });

    function passwordEquals(input1, input2) {
        let pass1 = $(input1).val();
        let pass2 = $(input2).val();
        if (pass1 == pass2) {
            input1.setCustomValidity('');
            input2.setCustomValidity('');
        } else {
            input1.setCustomValidity(false);
            input2.setCustomValidity(false);
        }
    }

});