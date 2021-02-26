$(document).ready(function () {

    const centro_salud = $('#centro_salud');
    const especialidad = $('#especialidad');
    const fecha_disponible = $('#fecha_disponible');
    const medico = $('#medico');
    const horario_disponible = $('#horario_disponible');

    ajaxQuery(centro_salud, 'centro_salud');

    onChangeSelect(centro_salud, especialidad, 'especialidad', [especialidad, fecha_disponible, medico, horario_disponible]);

    onChangeSelect(especialidad, fecha_disponible, 'fecha_disponible', [fecha_disponible, medico, horario_disponible]);

    onChangeSelect(fecha_disponible, medico, 'medico', [medico, horario_disponible]);

    onChangeSelect(medico, horario_disponible, 'horario_disponible', [horario_disponible]);

    function onChangeSelect(selectInitial, selectAffected, status, arrayChange) {
        selectInitial.change(function () {
            arrayChange.forEach(element => {
                element.empty().append(`<option selected value="">Seleccione</option>`);
            });
            ajaxQuery(selectAffected, status);
        });
    }

    function ajaxQuery(idSelect, status) {
        let alert = new Alert();
        let data;
        let centro_salud_ = centro_salud.val();
        let especialidad_ = especialidad.val();
        let fecha_disponible_ = fecha_disponible.val();
        let medico_ = medico.val();

        switch (status) {
            case 'centro_salud':
                data = {
                    status: status
                }
                break;
            case 'especialidad':
                data = {
                    status: status,
                    centro_salud: centro_salud_
                }
                break;
            case 'fecha_disponible':
                data = {
                    status: status,
                    centro_salud: centro_salud_,
                    especialidad: especialidad_
                }
                break;
            case 'medico':
                data = {
                    status: status,
                    centro_salud: centro_salud_,
                    especialidad: especialidad_,
                    fecha_disponible: fecha_disponible_
                }
                break;
            case 'horario_disponible':
                data = {
                    status: status,
                    centro_salud: centro_salud_,
                    especialidad: especialidad_,
                    fecha_disponible: fecha_disponible_,
                    medico: medico_
                }
                break;
        }

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: data,
            url: 'php/disponibilidad_clinica.php',
        }).done(function (response) {
            response.forEach(element => {
                idSelect.append(
                    `<option value="${element[status]}">
                        ${element[status]}
                        </option>`);
            });
        }).fail(function () {
            alert.createAlert('alert-danger', 'Error', 'No ha sido posible acceder a los datos, intente nuevamente');
        });
    }

    $('#form_dc').submit(function (event) {
        const form = document.getElementById("form_dc")
        if (form.checkValidity() === true) {
            event.preventDefault();
            $('#vw_1').val($('#centro_salud').val());
            $('#vw_2').val($('#especialidad').val());
            $('#vw_3').val($('#fecha_disponible').val());
            $('#vw_4').val($('#medico').val());
            $('#vw_5').val($('#horario_disponible').val());
            $('#modal-validation-reservation').modal('show');
            $('#btn_modal-validation-reservation').click(function () {
                let formulario = $(form).serializeArray();
                let alert = new Alert();
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    url: 'php/save-dc.php',
                    data: formulario,
                }).done(function () {
                    form.reset();
                    alert.createAlert('alert-success', 'Registro exitoso', 'Puede descargar su reserva en la sección correspondiente');
                    form.setAttribute('novalidate', true);
                    form.classList.remove('was-validated');
                    pagina = 0;
                    $(div3).hide();
                    $(div1).fadeIn();
                    $('#btn_dc_back').hide();
                    $(buttonSend).text('Siguiente');
                    $('#modal-validation-reservation').modal('hide');
                }).fail(function () {
                    form.reset();
                    alert.createAlert('alert-danger', 'Error', 'No ha sido posible guardar la reserva, intente nuevamente');
                });
            });
        } else {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add('was-validated');
        }
    });

    let pagina = 0;
    const form = document.getElementById("form_dc");
    const div1 = document.getElementById("form_dc_div1");
    const div2 = document.getElementById("form_dc_div2");
    const div3 = document.getElementById("form_dc_div3");
    const select1 = document.getElementById("centro_salud");
    const select2 = document.getElementById("especialidad");
    const select3 = document.getElementById("fecha_disponible");
    const select4 = document.getElementById("medico");
    const buttonSend = document.getElementById("btn_dc_send");

    $('#btn_dc_send').click(function (event) {
        switch (pagina) {
            case 0:
                nextPage(select1, select2, div1, div2);
                break;
            case 1:
                nextPage(select3, select4, div2, div3);
                break;
            case 2:
                $(buttonSend).removeAttr('type').attr('type', 'submit');
                break;
        }

        function nextPage(firstSelect, secondSelect, firstDiv, secondDiv) {
            if (firstSelect.selectedIndex > 0 && secondSelect.selectedIndex > 0) {
                pagina <= 1 ? $(buttonSend).removeAttr('type').attr('type', 'button') : null;
                pagina == 1 ? $(buttonSend).text('Reservar') : null;
                if (pagina == 0) {
                    $('#btn_dc_back').show();
                    $(buttonSend).text('Siguiente');
                }
                pagina++;
                $(firstDiv).hide();
                $(secondDiv).fadeIn('slow');
            } else {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
            }
        }

    });

    $('#btn_dc_back').click(function () {
        switch (pagina) {
            case 1:
                $(div2).hide();
                $(div1).fadeIn('slow');
                $('#btn_dc_back').hide();
                $(buttonSend).text('Siguiente');
                pagina--;
                break;
            case 2:
                $(div3).hide();
                $(div2).fadeIn('slow');
                $(buttonSend).text('Siguiente');
                pagina--;
                break;
        }
    });

});