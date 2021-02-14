// template literals ``
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

                        <form id="formLogin" class="col-12 main-container-div-initial-form-login" action="user.html">

                            <div class="form-row align-items-center justify-content-center">

                                <div class="form-group col-md-12 col-lg-7">
                                    <label for="us_email">Email</label>
                                    <input type="email" class="form-control" id="us_email"
                                        name="us_email" placeholder="Email registrado">
                                </div>

                                <div class="w-100 d-none d-lg-block"></div>
                                <div class="form-floating col-sm-12 col-lg-7">
                                    <label for="us_password">Contraseña</label>
                                    <input type="password" class="form-control" id="us_password"
                                        name="us_password" placeholder="Contraseña guardada">
                                </div>
                                <div class="w-100 d-none d-lg-block"></div>

                                <button id="btn-us-login" type="button"
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
        return `<div style="display: block" class="col-sm-6 col-xl-4 container main-container-div">
                    <div class="row align-items-center justify-content-center main-container-div-initial">

                        <div class="col-12 main-container-div-initial-title row justify-content-center">
                            <h5 class="main-container-div-initial-title__a">Registrarse</h5>
                        </div>

                        <form id="form-save-user" class="col-12 main-container-div-initial-form-login">

                            <div class="form-row align-items-center justify-content-center">

                                <div class="form-group col-md-12 col-lg-7">
                                    <label for="usr_email">Email</label>
                                    <input id="usr_email" type="email" class="form-control" name="usr_email"
                                        placeholder="Email personal">
                                </div>


                                <div class="form-group col-sm-12 col-lg-7">
                                    <label for="usr_password">Contraseña</label>
                                    <input id="usr_password" type="password" class="form-control" name="usr_password"
                                        placeholder="Ingrese su contraseña">
                                </div>


                                <div class="form-group col-sm-12 col-lg-7">
                                    <label for="usr_password2">Confirmar contraseña</label>
                                    <input id="usr_password2" type="password" class="form-control" name="usr_password2"
                                        placeholder="Confirme su contraseña">
                                </div>

                                <div class="form-group col-sm-12 col-lg-7">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="check-one">
                                        <label class="form-check-label" for="check-one">Acepto los <a href="">términos y
                                                condiciones</a></label>
                                    </div>
                                </div>

                                <div class="w-100 d-none d-lg-block"></div>

                                <button id="btn_form_save_user" type="button" class="col-md-5 main-container-form__btn">
                                    Registrarse</button>
                            </div>

                        </form>
                    </div>
                </div>
                <script src="js/save-user.js"></script>`;
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
];