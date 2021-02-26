
const ComponentHome = {
    render: function () {
        return `<div style="display: block" id="div-main" class="container main-container-div">
                    <div class="row main-container-div-home">
                        <div class="col-md-6">
                            <img class="img-fluid" src="assets/img-01.png" alt="">
                        </div>
                        <div class="col-md-5 align-self-center">
                            <h3><span class="main-container-div-home__title">Especialistas altamente qualificados</span></h3>
                            <br>
                            <h5><span>Seguridad y tranquilidad para su familia</span></h5>
                        </div>
                    </div>
                </div>`;
    }
}

const ComponentLogin = {
    render: function () {
        return `<div style="display: block" class="col-sm-6 col-xl-4 container main-container-div">
                    <div class="row align-items-center justify-content-center main-container-div-initial">

                        <div class="col-12 main-container-div-initial-title row justify-content-center">
                            <h5 class="main-container-div-initial-title__a">Iniciar sesión</h5>
                        </div>

                        <form id="formLogin" class="col-12 main-container-div-initial-form-login needs-validation" novalidate action="user.html">

                            <div class="form-row align-items-center justify-content-center">

                                <div class="form-group col-md-12 col-lg-7">
                                    <label for="us_email">Email</label>
                                    <input type="email" class="form-control" id="us_email"
                                        name="us_email" placeholder="Email registrado" required>
                                    <div class="invalid-feedback">
                                        Campo obligatorio
                                    </div>
                                </div>

                                <div class="w-100 d-none d-lg-block"></div>
                                <div class="form-floating col-sm-12 col-lg-7">
                                    <label for="us_password">Contraseña</label>
                                    <input type="password" class="form-control" id="us_password"
                                        name="us_password" placeholder="Contraseña guardada" required>
                                    <div class="invalid-feedback">
                                        Campo obligatorio
                                    </div>
                                </div>

                                <div class="w-100 d-none d-lg-block"></div>
                                <a class="main-container-div-initial-form-login__a" href="#/recovery-pass">¿Olvidó su contraseña?</a>

                                <div class="w-100 d-none d-lg-block"></div>
                                <button id="btn-us-login" type="submit"
                                    class="col-md-5 main-container-form__btn">Iniciar
                                    sesión</button>
                            </div>

                        </form>

                    </div>
                </div>
                <script src="js/login.js"></script>`;
    }
};

const ComponentSignUp = {
    render: function () {
        return `<div class="container main-container-div">
                    <form id="form-save-user" class="main-container-div-form needs-validation" novalidate method="post">
                        <h3 class="main-container-div-form__h3">Registrarse</h3>
                        <div class="form-row">
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="usr_email">Email</label>
                                <input id="usr_email" type="email" class="form-control" name="usr_email" placeholder="Email personal" required>
                                <div class="invalid-feedback">
                                    Campo requerido
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="usr_password">Contraseña</label>
                                <input id="usr_password" type="password" class="form-control" name="usr_password"
                                    placeholder="Ingrese su contraseña" required>
                                <div class="invalid-feedback">
                                    Las contraseñas deben coincidir
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="usr_password2">Confirmar contraseña</label>
                                <input id="usr_password2" type="password" class="form-control" name="usr_password2"
                                    placeholder="Confirme su contraseña" required>
                                <div class="invalid-feedback">
                                    Las contraseñas deben coincidir
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="usr_pregunta">Pregunta recuperación contraseña</label>
                                <select id="usr_pregunta" type="text" class="form-control" name="usr_pregunta" required>
                                    <option selected disabled value="">Seleccione</option>
                                    <option value="Color favorito">Color favorito</option>
                                    <option value="Primer colegio">Primer colegio</option>
                                    <option value="Calle de la infancia">Calle de la infancia</option>
                                    <option value="Primera mascota">Primera mascota</option>
                                    <option value="Pelicula Favorita">Pelicula Favorita</option>
                                    <option value="Equipo de fútbol">Equipo de fútbol</option>
                                    <option value="Libro predilecto">Libro predilecto</option>
                                </select>
                                <div class="invalid-feedback">
                                    Debe seleccionar una opción
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="usr_respuesta">Respuesta</label>
                                <input id="usr_respuesta" type="text" class="form-control" name="usr_respuesta"
                                    placeholder="Respuesta de recuperación" required>
                                <div class="invalid-feedback">
                                    Campo requerido
                                </div>
                             </div>
                        </div>
                        <div class="form-group">
                                <div class=" form-check">
                                    <input class="form-check-input" type="checkbox" id="check-one" required>
                                    <label class="form-check-label" for="check-one">Acepto los <a href="">términos y
                                            condiciones</a></label>
                                </div>
                            </div>
                        <button id="btn_form_save_user" type="submit" class="col-md-6 col-lg-4 main-container-form__btn">
                            Registrarse</button>
                    </form>
                </div>
                <script src="js/save-user.js"></script>`;
    }
};

const ComponentRecoveryPass = {
    render: function () {
        return `<div class="container main-container-div">
                    <form id="form-recovery-pass" class="main-container-div-form needs-validation" novalidate method="post">
                        <h3 class="main-container-div-form__h3">Recuperar contraseña</h3>
                        <div class="form-row">
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rcp_email">Email</label>
                                <input id="rcp_email" type="email" class="form-control" name="rcp_email" placeholder="Email registrado" required>
                                <div class="invalid-feedback">
                                    Campo requerido
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rcp_pregunta">Pregunta recuperación contraseña</label>
                                <select id="rcp_pregunta" type="text" class="form-control" name="rcp_pregunta" required>
                                    <option selected disabled value="">Seleccione</option>
                                    <option value="Color favorito">Color favorito</option>
                                    <option value="Primer colegio">Primer colegio</option>
                                    <option value="Calle de la infancia">Calle de la infancia</option>
                                    <option value="Primera mascota">Primera mascota</option>
                                    <option value="Pelicula Favorita">Pelicula Favorita</option>
                                    <option value="Equipo de fútbol">Equipo de fútbol</option>
                                    <option value="Libro predilecto">Libro predilecto</option>
                                </select>
                                <div class="invalid-feedback">
                                    Debe seleccionar una opción
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rcp_respuesta">Respuesta</label>
                                <input id="rcp_respuesta" type="text" class="form-control" name="rcp_respuesta"
                                    placeholder="Respuesta guardada" required>
                                <div class="invalid-feedback">
                                    Campo requerido
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rcp_password">Nueva contraseña</label>
                                <input id="rcp_password" type="password" class="form-control" name="rcp_password"
                                    placeholder="Ingrese su nueva contraseña" required>
                                <div class="invalid-feedback">
                                    Las contraseñas deben coincidir
                                </div>
                            </div>
                            <div class="form-group col-md-6 col-lg-4">
                                <label for="rcp_password2">Confirmar nueva contraseña</label>
                                <input id="rcp_password2" type="password" class="form-control" name="rcp_password2"
                                    placeholder="Confirme su nueva contraseña" required>
                                <div class="invalid-feedback">
                                    Las contraseñas deben coincidir
                                </div>
                            </div>
                        </div>
                        <button id="btn_form_recovery_pass" type="submit" class="col-md-6 col-lg-4 main-container-form__btn">Recuperar contraseña</button>
                    </form>
                </div>
                <script src="js/recovery-pass.js"></script>`;
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
        path: '/login',
        component: ComponentLogin

    },
    {
        path: '/sign-up',
        component: ComponentSignUp

    },
    {
        path: '/recovery-pass',
        component: ComponentRecoveryPass

    },
];