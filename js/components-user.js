// template literals ``
const ComponentHome = {
    render: function () {
        return `<div id="div-us-reservation-availability" class="container main-container-div">
                    <form id="form_dc" class="main-container-div-form needs-validation" novalidate method="post">
                        <div class="form-row row align-items-center justify-content-center">
                            <div class="form-column col-md-6 col-lg-7">
                                <div class="row align-items-center justify-content-center">
                                    <img class="d-none d-md-block" style="width:75%;" src="assets/img-02.png" alt="">
                                </div>
                            </div>
                            <div class="form-column col-md-6 col-lg-5">
                                <h3 class="main-container-div-form__h3">Reservar</h3>
                                <div id="form_dc_div1">
                                    <div id="id_centro_salud" class="form-group">
                                        <label for="centro_salud">Centro de salud</label>
                                        <select type="text" class="form-control" id="centro_salud" name="centro_salud" required>
                                            <option selected value="">Seleccione</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Debe seleccionar una opción
                                        </div>
                                        <div class="valid-feedback">
                                            Opción seleccionada
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="especialidad">Especialidad</label>
                                        <select type="text" class="form-control" id="especialidad" name="especialidad" required>
                                            <option selected value="">Seleccione</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Debe seleccionar una opción
                                        </div>
                                        <div class="valid-feedback">
                                            Opción seleccionada
                                        </div>
                                    </div>
                                </div>
                                <div id="form_dc_div2" style="display:none;">
                                    <div class="form-group">
                                        <label for="fecha_disponible">Fecha disponible</label>
                                        <select type="text" class="form-control" id="fecha_disponible" name="fecha_disponible" required>
                                            <option selected value="">Seleccione</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Debe seleccionar una opción
                                        </div>
                                        <div class="valid-feedback">
                                            Opción seleccionada
                                        </div>                                        
                                    </div>
                                    <div class="form-group">
                                        <label for="medico">Médico</label>
                                        <select type="text" class="form-control" id="medico" name="medico" required>
                                            <option selected value="">Seleccione</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Debe seleccionar una opción
                                        </div>
                                        <div class="valid-feedback">
                                            Opción seleccionada
                                        </div>
                                    </div>
                                </div>
                                <div id="form_dc_div3" style="display:none;">
                                    <div class="form-group">
                                        <label for="horario_disponible">Horario disponible</label>
                                        <select type="text" class="form-control" id="horario_disponible" name="horario_disponible"
                                            required>
                                            <option selected value="">Seleccione</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Debe seleccionar una opción
                                        </div>
                                        <div class="valid-feedback">
                                            Opción seleccionada
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" id="check_dc" required>
                                            <label class="form-check-label" for="gridCheck">Acepto los términos y condiciones</label>
                                            <div class="invalid-feedback">
                                                Debe estar de acuerdo para reservar
                                            </div>
                                            <div class="valid-feedback">
                                                Usted está de acuerdo
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="div-button" class="row">
                                    <button type="button" style="display:none; margin: 0.5em" id="btn_dc_back" class="col-5 main-container-form__btn">Anterior</button>
                                    <button type="button" style="margin: 0.5em" id="btn_dc_send" class="col-5 main-container-form__btn">Siguiente</button>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
                <div class="modal fade" id="modal-validation-reservation" data-backdrop="static" data-keyboard="false" tabindex="-1"
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
                                <form>
                                    <div class="form-group">
                                        <label for="vw_1">Centro de salud</label>
                                        <input id="vw_1" type="text" readonly class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="vw_2">Especialidad</label>
                                        <input id="vw_2" type="text" readonly class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="vw_3">Fecha disponible</label>
                                        <input id="vw_3" type="text" readonly class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="vw_4">Médico</label>
                                        <input id="vw_4" type="text" readonly class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <label for="vw_5">Horario disponible</label>
                                        <input id="vw_5" type="text" readonly class="form-control">
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                <button id="btn_modal-validation-reservation" type="button" class="btn btn-primary">Reservar</button>
                            </div>
                        </div>
                    </div>
                </div>                
                <script src="js/disponibilidad_clinica.js"></script>`;
    }
}

const ComponentMyReservations = {
    render: function () {
        return `<div id="div-us-my-reservations" class="container main-container-div">
                    <div class="main-container-div-form">
                        <h3 class="main-container-div-form__h3">Mis reservas</h3>
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
                    <form id="form_perfil" class="main-container-div-form needs-validation" novalidate method="post">
                        <h3 class="main-container-div-form__h3">Mi perfil</h3>
                        <div class="form-row">
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input0">N° Identificación</label>
                                <input type="text" class="form-control" id="user-input0" name="user-input0">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input1">Nombre</label>
                                <input type="text" class="form-control" id="user-input1" name="user-input1">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input2">Apellidos</label>
                                <input type="text" class="form-control" id="user-input2" name="user-input2">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input3">Fecha de nacimiento</label>
                                <input class="form-control" id="user-input3" name="user-input3">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input4">Sexo</label>
                                <input type="text" class="form-control" id="user-input4" name="user-input4">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input5">Nacionalidad</label>
                                <input type="text" class="form-control" id="user-input5" name="user-input5">
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input6">Email</label>
                                <input type="email" class="form-control" id="user-input6" name="user-input6" required>
                                <div class="invalid-feedback">
                                    Ingrese un email válido
                                </div>
                                <div class="valid-feedback">
                                    Válido
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="user-input7">Teléfono</label>
                                <input id="user-input7" class="form-control" type="text" name="user-input7" maxlength="14" pattern="[0-9 +]{14}" placeholder="+56 9" required>
                                <div class="invalid-feedback">
                                    Ingrese los 8 dígitos de su número móvil
                                </div>
                                <div class="valid-feedback">
                                    Válido
                                </div>                             
                            </div>
                            <div id="user-prevision" class="form-group col-md-6 col-lg-4">
                                <label for="user-input8">Previsión</label>
                                <input type="text" class="form-control" id="user-input8" name="user-input8">
                            </div>
                        </div>
                        <button type="button" id="btnUpdateUser" class="col-md-6 col-lg-4 main-container-form__btn">Actualizar
                            datos</button>
                    </form>
                </div>
                <script src="js/user.js"></script>
                <script src="js/update-user.js"></script>`;
    }
};

const ComponentRegister = {
    render: function () {
        return `<div id="div-us-register" class="container main-container-div">
                    <form id="form-register" class="main-container-div-form needs-validation" novalidate method="post">
                        <h3 class="main-container-div-form__h3">Registro</h3>
                        <div class="form-row">
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input1">N° Identificación</label>
                                <input id="rg_input1" type="text" class="form-control" name="rg_input1" placeholder="Número de RUN / DNI" required>
                                <div class="invalid-feedback">
                                    Campo obligatorio
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input2">Nombre</label>
                                <input id="rg_input2" type="text" class="form-control" name="rg_input2" placeholder="Primer nombre" required>
                                <div class="invalid-feedback">
                                    Campo obligatorio
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input3">Apellidos</label>
                                <input id="rg_input3" type="text" class="form-control" name="rg_input3" placeholder="Apellido paterno y materno" required>
                                <div class="invalid-feedback">
                                    Campo obligatorio
                                </div>
                            </div>

                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input4">Fecha de nacimiento</label>
                                <input id="rg_input4" type="date" class="form-control" name="rg_input4" placeholder="Fecha de nacimiento" required>
                                <div class="invalid-feedback">
                                    Campo obligatorio
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input5">Sexo</label>
                                <select id="rg_input5" type="text" class="form-control" name="rg_input5" placeholder="Sexo" required>
                                    <option selected disabled value="">Seleccione</option>
                                    <option value="Mujer">Mujer</option>
                                    <option value="Hombre">Hombre</option>
                                </select>
                                <div class="invalid-feedback">
                                    Debe seleccionar una opción
                                </div>
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
                                <div class="invalid-feedback">
                                    Debe seleccionar una opción
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input7">Teléfono</label>
                                <input id="rg_input7" class="form-control" type="text" name="rg_input7" maxlength="14" pattern="[0-9 +]{14}" placeholder="+56 9" required>
                                <div class="invalid-feedback">
                                    Debe ingresar los 8 dígitos de su número móvil
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rg_input8">Previsión</label>
                                <select id="rg_input8" type="text" class="form-control" name="rg_input8" placeholder="Previsión" required>
                                    <option selected disabled value="">Seleccione</option>
                                    <option value="Fonasa">Fonasa</option>
                                    <option value="Isapre">Isapre</option>
                                    <option value="Sin previsión">Sin previsión</option>
                                </select>
                                <div class="invalid-feedback">
                                    Debe seleccionar una opción
                                </div>
                            </div>
                        </div>
                        <button id="btn_form_register" type="submit" class="col-md-6 col-lg-4 main-container-form__btn">Guardar datos</button>
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