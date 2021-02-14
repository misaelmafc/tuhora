// template literals ``
const ComponentHome = {
    render: function () {
        return `<div id="div-us-reservation-availability" class="container main-container-div">
                    <form id="form_dc" class="main-container-div-form" method="post">
                        <h3 class="main-container-div-form__h3">Disponibilidad clínica</h3>
                        <div class="form-row">
                            <div id="id_centro_salud" class="form-group col-md-6 col-lg-4">
                                <label for="centro_salud">Centro de salud</label>
                                <select type="text" class="form-control" id="centro_salud" name="centro_salud" required>
                                    <option selected disabled>Seleccione</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="especialidad">Especialidad</label>
                                <select type="text" class="form-control" id="especialidad" name="especialidad" required>
                                    <option selected value="">Seleccione</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="fecha_disponible">Fecha disponible</label>
                                <select type="text" class="form-control" id="fecha_disponible" name="fecha_disponible" required>
                                    <option selected value="">Seleccione</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="medico">Médico</label>
                                <select type="text" class="form-control" id="medico" name="medico" required>
                                    <option selected value="">Seleccione</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="horario_disponible">Horario disponible</label>
                                <select type="text" class="form-control" id="horario_disponible" name="horario_disponible" required>
                                    <option selected value="">Seleccione</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check_dc">
                                <label class="form-check-label" for="gridCheck">Acepto los términos y condiciones</label>
                            </div>
                        </div>
                        <button type="submit" id="btn_dc_send" class="col-md-6 col-lg-4 main-container-form__btn">Reservar</button>
                    </form>
                </div>
                <script src="js/disponibilidad_clinica.js"></script>`;
    }
}

const ComponentMyReservations = {
    render: function () {
        return `<div id="div-us-my-reservations" class="container main-container-div">
                    <div class="main-container-div-form">
                        <h3 class="main-container-div-form__h3">Mis reservaciones</h3>
                        <div id="div-reservation" class="container">
                            <div class="row">
                                <div class="col-4">
                                    <h6>Fecha y hora</h6>
                                </div>
                                <div class="col-4">
                                    <h6>Ubicación</h6>
                                </div>
                                <div class="col-4">
                                    <h6 style="text-align: center;" >Descargar comprobante</h6>
                                </div>
                            </div>
                            <hr>
                        </div>
                    </div>
                </div>
                <script src="js/my-reservations.js"></script>`;
    }
};

const ComponentUser = {
    render: function () {
        return `<div id="div-us-user" class="container main-container-div">
                    <form class="main-container-div-form" method="post">
                        <h3 class="main-container-div-form__h3">Mi perfil</h3>
                        <div class="form-row">
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input0">N° Identificación</label>
                                <input readonly type="text" class="form-control" id="user-input0" name="user-input0">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input1">Nombre</label>
                                <input readonly type="text" class="form-control" id="user-input1" name="user-input1">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input2">Apellidos</label>
                                <input readonly type="text" class="form-control" id="user-input2" name="user-input2">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input3">Fecha de nacimiento</label>
                                <input readonly class="form-control" id="user-input3" name="user-input3">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input4">Sexo</label>
                                <input readonly type="text" class="form-control" id="user-input4" name="user-input4">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input5">Nacionalidad</label>
                                <input readonly type="text" class="form-control" id="user-input5" name="user-input5">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input6">Email</label>
                                <input readonly type="email" class="form-control" id="user-input6" name="user-input6">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input7">Teléfono</label>
                                <input readonly type="email" class="form-control" id="user-input7" name="user-input7">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input8">Previsión</label>
                                <input readonly type="text" class="form-control" id="user-input8" name="user-input8">
                            </div>
                        </div>
                        <button type="submit" id="btnTest" class="col-md-6 col-lg-4 main-container-form__btn">Actualizar
                            datos</button>
                    </form>
                </div>
                <script src="js/user.js"></script>`;
    }
};

const ComponentRegister = {
    render: function () {
        return `<div id="div-us-register" class="container main-container-div">
                    <form id="form-register" class="main-container-div-form">
                        <h3 class="main-container-div-form__h3">Registro</h3>
                        <div class="form-row">
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input1">N° Identificación</label>
                                <input id="rg_input1" type="text" class="form-control" name="rg_input1" placeholder="Número de RUN / DNI" required>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input2">Nombre</label>
                                <input id="rg_input2" type="text" class="form-control" name="rg_input2" placeholder="Primer nombre" required>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input3">Apellidos</label>
                                <input id="rg_input3" type="text" class="form-control" name="rg_input3" placeholder="Apellido paterno y materno" required>
                            </div>

                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input4">Fecha de nacimiento</label>
                                <input id="rg_input4" type="date" class="form-control" name="rg_input4" placeholder="Fecha de nacimiento" required>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input5">Sexo</label>
                                <select id="rg_input5" type="text" class="form-control" name="rg_input5" placeholder="Sexo" required>
                                    <option selected disabled value="">Seleccione</option>
                                    <option value="Mujer">Mujer</option>
                                    <option value="Hombre">Hombre</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input6">Nacionalidad</label>
                                <select id="rg_input6" type="text" class="form-control" name="rg_input6" placeholder="Sexo" required>
                                    <option selected disabled value="">Seleccione</option>
                                    <option value="Chile">Chile</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Venezuela">Venezuela</option>
                                </select>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input7">Teléfono</label>
                                <input id="rg_input7" type="number" class="form-control" name="rg_input7" placeholder="+56 9 1234 5678" required>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input8">Previsión</label>
                                <select id="rg_input8" type="text" class="form-control" name="rg_input8" placeholder="Previsión" required>
                                    <option selected disabled value="">Seleccione</option>
                                    <option value="Fonasa">Fonasa</option>
                                    <option value="Isapre">Isapre</option>
                                    <option value="Sin previsión">Sin previsión</option>
                                </select>
                            </div>
                        </div>
                        <button id="btn_form_register" type="button" value="Enviar" class="col-md-6 col-lg-4 main-container-form__btn">Guardar datos</button>
                    </form>
                </div>
                <div class="modal fade" id="accept-terms" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Confirmar</h5>
                            </div>
                            <div class="modal-body">
                                <p>Para continuar navegando debe rellenar sus datos personales</p>
                            </div>
                            <div class="modal-footer">
                                <button id="btn-modal-cancel" type="button" class="btn btn-secondary">Cerrar</button>
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <script src="js/register.js"></script>
                <script src="js/save-patient.js"></script>`;
    }
};

const ComponenteError = {
    render: function () {
        return `<div class="red darken-4 white-text center z-depth-3 ">
                   <h1>Error</h1>
                   <i class="large material-icons">error</i>
                   <h5>El elemento al cual intenta acceder, no existe.</h5>
                   <br>
                </div>`
    }
};

const routes = [
    {
        path: '/',
        component: ComponentHome
    },
    {
        path: '/my-reservations',
        component: ComponentMyReservations

    },
    {
        path: '/user',
        component: ComponentUser
    },
    {
        path: '/register',
        component: ComponentRegister

    },
];