<?php
session_start();
if ($_SESSION['token'] == null) {
    header("Location:index.html");
}
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <title>Tu Hora</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="js/main.js"></script>
    <script src="js/main-user.js"></script>
    <script src="js/save-patient.js"></script>
    <script src="js/rg.js"></script>
</head>

<body>

    <nav class="navbar navbar-expand-lg fixed-top nav-container">
        <div class="container-fluid">
            <a class="navbar-brand" href="user.php">
                <img class="nav-container__logo" src="assets/logo.jpg">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item  p-2">
                        <a class="nav-link body__button-a" id="btn-us-reservation-availability" href="#">Disponibilidad
                            clínica</a>
                    </li>
                    <li class="nav-item  p-2">
                        <a class="nav-link body__button-a" id="btn-us-reservation-doctor" href="#">Búsqueda de
                            profesional</a>
                    </li>
                    <li class="nav-item  p-2">
                        <a class="nav-link body__button-a" id="btn-us-my-reservations" href="#">Mis reservas</a>
                    </li>
                    <li class="nav-item  p-2">
                        <a class="nav-link body__button-a" id="btn-us-user" href="#">
                            <img style="width: 1.75em;" src="assets/user.png" alt="" data-toggle="tooltip" data-placement="bottom" title="Mi perfil">
                        </a>
                    </li>
                    <li class="nav-item  p-2">
                        <a class="nav-link body__button-a" id="" href="php/logout.php">
                            <img style="width: 1.75em;" src="assets/logout.png" alt="" data-toggle="tooltip" data-placement="bottom" title="Cerrar sesión">
                        </a>
                    </li>
<!--                     <li class="nav-item  p-2">
                        <a class="nav-link body__button-a" id="btn-us-register" href="#">Registrarse</a>
                    </li> -->
                </ul>
            </div>
        </div>
    </nav>

    <main class="main-container container-fluid">

        <div class="main-container-row row align-items-center">

            <div id="div-us-reservation-availability" class="container main-container-div">

                <form class="main-container-div-form" method="post">

                    <h3 class="main-container-div-form__h3">Disponibilidad clínica</h3>

                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputNacionality">Centro de salud</label>
                            <select type="text" class="form-control" id="inputNacionality" name="inputNacionality" placeholder="Nacionalidad" required>
                                <option selected value="clinica1">Clínica uno</option>
                                <option value="clinica2">Clínica dos</option>
                                <option value="clinica3">Clínica tres</option>
                                <option value="clinica4">Clínica cuatro</option>
                                <option value="clinica5">Clínica seis</option>
                                <option value="clinica6">Clínica siete</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputNacionality">Especialidad</label>
                            <select type="text" class="form-control" id="inputNacionality" name="inputNacionality" placeholder="Nacionalidad" required>
                                <option selected value="option1">Medicina general</option>
                                <option value="option2">Cardiología</option>
                                <option value="option3">Dermatología</option>
                                <option value="option3">Gastroenterología</option>
                                <option value="option4">Ginegología y Obstetricia.</option>
                                <option value="option5">Pediatría</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputBirthDate">Fecha de reserva</label>
                            <input type="date" class="form-control" id="inputBirthDate" name="inputBirthDate" placeholder="Fecha de nacimiento" required>
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputNacionality">Médico</label>
                            <select type="text" class="form-control" id="inputNacionality" name="inputNacionality" placeholder="Nacionalidad" required>
                                <option selected value="doctor1">Doctora 1</option>
                                <option value="doctor2">Doctor 2</option>
                                <option value="doctor3">Doctora 3</option>
                                <option value="doctor4">Doctor 4</option>
                                <option value="doctor5">Doctora 5</option>
                                <option value="doctor6">Doctor 6</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputNacionality">Horario disponible</label>
                            <select type="text" class="form-control" id="inputNacionality" name="inputNacionality" placeholder="Nacionalidad" required>
                                <option selected value="horario1">Horario 1</option>
                                <option value="horario2">Horario 2</option>
                                <option value="horario3">Horario 3</option>
                                <option value="horario4">Horario 4</option>
                                <option value="horario5">Horario 5</option>
                                <option value="horario5">Horario 6</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">Acepto los términos y condiciones</label>
                        </div>
                    </div>
                    <button type="submit" id="btnTest" class="col-md-6 col-lg-4 main-container-form__btn">Reservar</button>
                </form>
            </div>

            <div id="div-us-reservation-doctor" class="container main-container-div">

                <form class="main-container-div-form" method="post">

                    <h3 class="main-container-div-form__h3">Búsqueda de profesional</h3>

                    <div class="form-row">
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputNacionality">Médico</label>
                            <select type="text" class="form-control" id="inputNacionality" name="inputNacionality" placeholder="Nacionalidad" required>
                                <option selected value="doctor1">Doctora 1</option>
                                <option value="doctor2">Doctor 2</option>
                                <option value="doctor3">Doctora 3</option>
                                <option value="doctor4">Doctor 4</option>
                                <option value="doctor5">Doctora 5</option>
                                <option value="doctor6">Doctor 6</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputNacionality">Especialidad</label>
                            <select type="text" class="form-control" id="inputNacionality" name="inputNacionality" placeholder="Nacionalidad" required>
                                <option selected value="option1">Medicina general</option>
                                <option value="option2">Cardiología</option>
                                <option value="option3">Dermatología</option>
                                <option value="option3">Gastroenterología</option>
                                <option value="option4">Ginegología y Obstetricia.</option>
                                <option value="option5">Pediatría</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputBirthDate">Fecha de reserva</label>
                            <input type="date" class="form-control" id="inputBirthDate" name="inputBirthDate" placeholder="Fecha de nacimiento" required>
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputNacionality">Horario disponible</label>
                            <select type="text" class="form-control" id="inputNacionality" name="inputNacionality" placeholder="Nacionalidad" required>
                                <option selected value="horario1">Horario 1</option>
                                <option value="horario2">Horario 2</option>
                                <option value="horario3">Horario 3</option>
                                <option value="horario4">Horario 4</option>
                                <option value="horario5">Horario 5</option>
                                <option value="horario5">Horario 6</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="inputNacionality">Centro de salud</label>
                            <select type="text" class="form-control" id="inputNacionality" name="inputNacionality" placeholder="Nacionalidad" required>
                                <option selected value="clinica1">Clínica uno</option>
                                <option value="clinica2">Clínica dos</option>
                                <option value="clinica3">Clínica tres</option>
                                <option value="clinica4">Clínica cuatro</option>
                                <option value="clinica5">Clínica seis</option>
                                <option value="clinica6">Clínica siete</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="gridCheck">
                            <label class="form-check-label" for="gridCheck">Acepto los términos y condiciones</label>
                        </div>
                    </div>
                    <button type="submit" id="btnTest" class="col-md-6 col-lg-4 main-container-form__btn">Reservar</button>
                </form>
            </div>

            <div id="div-us-my-reservations" class="container main-container-div">

                <div class="main-container-div-form">

                    <h3 class="main-container-div-form__h3">Mis reservaciones</h3>

                    <div class="container">
                        <div class="row">
                            <div class="col-4">
                                <h6>Fecha y hora</h6>
                            </div>
                            <div class="col-4">
                                <h6>Ubicación</h6>
                            </div>
                            <div class="col-4">
                                <h6>Descargar comprobante</h6>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col-4">
                                <p>04/06/2020 10:45</p>
                            </div>
                            <div class="col-4">
                                <p>Clínica 2</p>
                            </div>
                            <div class="col-4">
                                <p><a href=""><img style="width: 2em;" src="assets/file.png" alt=""></a></p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-4">
                                <p>04/06/2020 10:45</p>
                            </div>
                            <div class="col-4">
                                <p>Clínica 2</p>
                            </div>
                            <div class="col-4">
                                <p><a href=""><img style="width: 2em;" src="assets/file.png" alt=""></a></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div id="div-us-user" class="container main-container-div">

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

            <div id="div-us-register" class="container main-container-div">

                <div id="alertaExito" class="alert alert-success alert-dismissible fade show  main-container-div__alert" role="alert">
                    <span><strong>El registro se ha guardado correctamente.</strong></span><br>
                    <span>Inicia sesión con tu usuario y contraseña
                        guardada o con tu cuenta de Google</span>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div id="alertaError" class="alert alert-danger alert-dismissible fade show  main-container-div__alert" role="alert">
                    <span><strong>¡Ups, ha ocurrido un problema al guardar el registro!</strong></span><br>
                    <span> Intenta guardar nuevamente o
                        probar en otro momento</span>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

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

                        <!--                         <div class="form-group col-md-6 col-lg-4">
                            <label for="rg_input10">Contraseña</label>
                            <input id="rg_input10" type="password" class="form-control" name="rg_input10"
                                placeholder="Mínimo 8 caracteres" required>
                        </div>
                        <div class="form-group col-md-6 col-lg-4">
                            <label for="rg_input11">Confirmar contraseña</label>
                            <input id="rg_input11" type="password" class="form-control" name="rg_input11"
                                placeholder="Repetir contraseña" required>
                        </div> -->
                    </div>
                    
                    <button id="btn_form_register" type="button" value="Enviar" class="col-md-6 col-lg-4 main-container-form__btn">Guardar datos</button>
                </form>
            </div>

        </div>

    </main>

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

    <footer class="footer-container">
        <div class="container footer-container-div">
            <div class="row justify-content-center">
                <div class="container col-md-7 footer-container-div-row">
                    <h5 class="footer-container-div-row__h5">Ubicaciones</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Clínica Uno</h6>
                            <p>Av. Lorem Ipsum 1234</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Clínica Dos</h6>
                            <p>Av. Lorem Ipsum 1234</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Clínica Tres</h6>
                            <p>Av. Lorem Ipsum 1234</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Clínica Cuatro</h6>
                            <p>Av. Lorem Ipsum 1234</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Clínica Cinco</h6>
                            <p>Av. Lorem Ipsum 1234</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Clínica Seis</h6>
                            <p>Av. Lorem Ipsum 1234</p>
                        </div>
                    </div>
                </div>
                <div class="container col-md-4 footer-container-div-row">
                    <h5 class="footer-container-div-row__h5">Redes Sociales</h5>
                    <div class="row">
                        <div class="footer-container-div-row-rs col-2">
                            <a href="">
                                <img class="footer-container-div-row-rs__icon" src="assets/facebook.png" alt="">
                            </a>
                        </div>
                        <div class="footer-container-div-row-rs col-2">
                            <a href="">
                                <img class="footer-container-div-row-rs__icon" src="assets/twitter.png" alt="">
                            </a>
                        </div>
                        <div class="footer-container-div-row-rs col-2">
                            <a href="">
                                <img class="footer-container-div-row-rs__icon" src="assets/instagram.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="row">

                        <div class="footer-container-div-row-rs col-2">
                            <a href="">
                                <img class="footer-container-div-row-rs__icon" src="assets/youtube.png" alt="">
                            </a>
                        </div>
                        <div class="footer-container-div-row-rs col-2">
                            <a href="">
                                <img class="footer-container-div-row-rs__icon" src="assets/linkedin.png" alt="">
                            </a>
                        </div>
                        <div class="footer-container-div-row-rs col-2">
                            <a href="">
                                <img class="footer-container-div-row-rs__icon" src="assets/tiktok.png" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>