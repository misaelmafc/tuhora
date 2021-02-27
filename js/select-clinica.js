$(document).ready(function () {

    const parseLocation = function () {
        return location.hash.slice(1).toLowerCase() || "/";
    }
    const path = parseLocation();
    let clinica;

    switch (path) {
        case '/':
            clinica = 'Clínica Holandesa';
            break;
        case '/clinica-los-montes':
            clinica = 'Clínica Los Montes';
            break;
        case '/hospital-interzonal':
            clinica = 'Hospital Interzonal';
            break;
        case '/clinica-las-margaritas':
            clinica = 'Clínica Las Margaritas';
            break;
        case '/hospital-dra-julieta':
            clinica = 'Hospital Dra. Julieta';
            break;
        case '/hospital-metropolitano':
            clinica = 'Hospital Metropolitano';
            break;
        default:
            clinica = 'Clínica Holandesa';
            break;
    }

    $.ajax({
        type: 'POST',
        url: 'php/select-clinica.php',
        dataType: 'json',
        data: {
            centro_salud: clinica,
        }
    }).done(function (response) {
        $('#div-card').empty();
        response.forEach(e => {
            let i = response.indexOf(e) + 1;
            $('#div-card').append(`
                <div class="col-md-6 main-container-div-form__card">
                    <div class="card">
                        <div class="card-header">
                            <span>${e.fecha_disponible}</span><span> </span><span>${e.horario_disponible}</span>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${e.especialidad}</h5>
                            <p class="card-text">${e.medico}</p>
                            <button id="btn_reserve_${i}" type="button" class="btn btn-sm main-container-div-form__btn">Reservar</button>
                        </div>
                    </div>
                </div>
            `);

            $(`#btn_reserve_${i}`).click(function (event) {

                $('body').append(`
                    <div class="modal fade" id="modal-reservation" data-backdrop="static" data-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Confirmar reserva</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form id="modal-form-reserve">
                                        <div class="form-group">
                                            <label for="centro_salud">Centro de salud</label>
                                            <input id="centro_salud" name="centro_salud" type="text" readonly class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="especialidad">Especialidad</label>
                                            <input id="especialidad" name="especialidad" type="text" readonly class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="fecha_disponible">Fecha disponible</label>
                                            <input id="fecha_disponible" name="fecha_disponible" type="text" readonly class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="medico">Médico</label>
                                            <input id="medico" name="medico" type="text" readonly class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label for="horario_disponible">Horario disponible</label>
                                            <input id="horario_disponible" name="horario_disponible" type="text" readonly class="form-control">
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button id="btn_modal-validation-reservation" type="button" class="btn btn_modal">Reservar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `);

                $('#centro_salud').val(e.centro_salud);
                $('#especialidad').val(e.especialidad);
                $('#fecha_disponible').val(e.fecha_disponible);
                $('#medico').val(e.medico);
                $('#horario_disponible').val(e.horario_disponible);
                $('#modal-reservation').modal('show');

                $('#btn_modal-validation-reservation').click(function () {
                    const form = document.getElementById("modal-form-reserve");
                    let formulario = $(form).serializeArray();
                    let alert = new Alert();
                    $.ajax({
                        type: 'POST',
                        dataType: 'json',
                        url: 'php/save-dc.php',
                        data: formulario,
                    }).done(function () {
                        alert.createAlert('alert-success', 'Registro exitoso', 'Puede descargar su reserva en la sección correspondiente');
                        $('#modal-reservation').modal('hide');
                        reload();
                        event.preventDefault();
                    }).fail(function () {
                        $('#modal-reservation').modal('hide');
                        alert.createAlert('alert-danger', 'Error', 'No ha sido posible guardar la reserva, intente nuevamente');
                    });
                });
            });
        });

        function reload() {
            history.pushState(null, "", "user.php#/");
            const path = parseLocation();
            const { component = ComponenteError } = findComponent(path, routes) || {};
            $('#main-user').html(component.render());
        }
    }).fail(function () {
        $('#div-card').append(`
        <div class="form-column">
            <div class="row">
                <img style="width:60%; margin-left: 15%" src="assets/not-found-reserve.png" alt="">
            </div>
        </div>
        `)
    });

});

