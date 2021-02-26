$(document).ready(function () {
    let hidden = false;
    $('#btnUpdateUser').click(function (event) {
        if (hidden === false) {
            event.preventDefault();
            hidden = true;
            $(this).text('Guardar');
            $(this).removeAttr('type').attr('type', 'submit');
            $(this).removeClass('col-md-6 col-lg-4');
            $(this).addClass('col-6 col-lg-2');
            $('#user-input6').prop('disabled', false).val('').attr('placeholder', 'ejemplo@tuhora.cl');
            $('#user-input7').prop('disabled', false).val('');
            $('#user-input8').replaceWith(`<select id="user-input8" type="text" class="form-control" name="user-input8" placeholder="Previsión" required>
                <option selected disabled value="">Seleccione</option>
                <option value="Fonasa">Fonasa</option>
                <option value="Isapre">Isapre</option>
                <option value="Sin previsión">Sin previsión</option>
            </select>`);
            $('#user-prevision').append(`<div class="invalid-feedback">
                Debe seleccionar una opción
            </div>
            <div class="valid-feedback">
                Opción seleccionada
            </div>`);
            $('#form_perfil').append(`<button type="button" id="btnCancelUpdateUser" class="col-6 col-lg-2 main-container-form__btn">Cancelar</button>`);
            $('#btnCancelUpdateUser').click(function () {
                history.pushState(null, "", "user.php#/user");
                const path = parseLocation();
                const { component = ComponenteError } = findComponent(path, routes) || {};
                $('#main-user').html(component.render());
            });
        } else {
            $('#form_perfil').submit(function (event) {
                const form = document.getElementById("form_perfil");
                if (form.checkValidity() === true) {
                    event.preventDefault();
                    let alert = new Alert();
                    let inputPhone = $('#user-input7').val();
                    $('#user-input7').val(inputPhone.substring(6, 14));
                    let formulario = $(form).serializeArray();
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        url: 'php/update-patient.php',
                        data: formulario,
                    }).done(function (response) {
                        if (response == 1) {
                            form.reset();
                            alert.createAlert('alert-success', 'Registro exitoso', 'Sus datos se han actualizado correctamente');
                            form.setAttribute('novalidate', true);
                            form.classList.remove('was-validated');
                            history.pushState(null, "", "user.php#/user");
                            const path = parseLocation();
                            const { component = ComponenteError } = findComponent(path, routes) || {};
                            $('#main-user').html(component.render());
                        }else{
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
        }
    });

    $('#user-input7').keypress(function () {
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

    $('#user-input7').on('input', function () {
        $(this).val($(this).val().replace(/[^0-9 +]/g, ''));
    });
});