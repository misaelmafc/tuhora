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

    $('#form_dc').bind('submit', function () {
        let alert = new Alert();
        let form = $('#form_dc').serializeArray();
        console.log(form);
        $.ajax({
            type: 'POST',
            dataType: 'json',
            url: 'php/save-dc.php',
            data: form,
        }).done(function () {
            document.getElementById("form_dc").reset();            
            alert.createAlert('alert-success', 'Registro exitoso', 'Puede descargar su reserva en la secci贸n correspondiente');
        }).fail(function () {
            document.getElementById("form_dc").reset();            
            alert.createAlert('alert-danger', 'Error', 'No ha sido posible guardar la reserva, intente nuevamente');
        });
    });

});