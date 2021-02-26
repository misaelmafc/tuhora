$(document).ready(function () {

    $('#form-save-user').submit(function (event) {
        const form = document.getElementById("form-save-user");
        if (form.checkValidity() === true) {
            event.preventDefault();
            let alert = new Alert();
            let formulario = $(form).serializeArray();
            $.ajax({
                type: 'POST',
                dataType: 'json',
                url: 'php/save-user.php',
                data: formulario,
            }).done(function (response) {
                if (response == 1) {
                    form.reset();
                    alert.createAlert('alert-success', 'Registro exitoso', 'Ingrese con su email y contraseña');
                    form.setAttribute('novalidate', true);
                    form.classList.remove('was-validated');
                    history.pushState(null, "", "user.php#/login");
                    const path = parseLocation();
                    const { component = ComponenteError } = findComponent(path, routes) || {};
                    $('#main-index').html(component.render());
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

    $('#usr_password').keyup(function () {
        const input1 = document.getElementById("usr_password");
        const input2 = document.getElementById("usr_password2");
        passwordEquals(input1, input2);
    });

    $('#usr_password2').keyup(function () {
        const input1 = document.getElementById("usr_password2");
        const input2 = document.getElementById("usr_password");
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