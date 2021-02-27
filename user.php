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
    <script src="js/Rg.js"></script>
    <script src="js/router-user.js"></script>
    <script src="js/components-user.js"></script>
    <script src="js/main.js"></script>
    <script src="js/Alert.js"></script>
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
                        <a class="nav-link body__button-a" href="#/">
                            <img style="width: 1.5em;" src="assets/home.png" alt="">
                            <span>Home</span>
                        </a>
                    </li>
                    <li class="nav-item  p-2">
                        <a class="nav-link body__button-a" id="btn-us-reservation-availability" href="#/reserve">
                            <img style="width: 1.5em;" src="assets/agenda.png" alt="">
                            <span>Reservar</span>
                        </a>
                    </li>
                    <li class="nav-item  p-2">
                        <a class="nav-link body__button-a" id="btn-us-my-reservations" href="#/my-reservations">
                            <img style="width: 1.75em;" src="assets/booking.png" alt="">
                            <span>Mis reservas</span>
                        </a>
                    </li>
                    <li class="nav-item  p-2">
                        <a class="nav-link body__button-a" id="btn-us-user" href="#/user">
                            <img style="width: 1.5em;" src="assets/user.png" alt="">
                            <span>Mi perfil</span>
                        </a>
                    </li>
                    <li class="nav-item  p-2" data-toggle="tooltip" data-placement="bottom" title="Cerrar sesión">
                        <a class="nav-link body__button-a" id="" href="php/logout.php">
                            <img style="width: 1.5em;" src="assets/logout.png" alt="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main class="main-container container-fluid">

        <div id="main-user" class="main-container-row row align-items-center">

        </div>

    </main>

    <footer class="footer-container">
        <div class="container footer-container-div">
            <div class="row justify-content-center">
                <div class="container col-md-7 footer-container-div-row">
                    <h5 class="footer-container-div-row__h5">Ubicaciones</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <h6>Clínica Holandesa</h6>
                            <p>Av. Kennedy 4865</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Clínica Las Margaritas</h6>
                            <p>Av. Las Margaritas 18547</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Clínica Los Montes</h6>
                            <p>Av. Diagonal Sur 3266</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Hospital Dra. Julieta</h6>
                            <p>Av. Doctora Julieta 283</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Hospital Interzonal</h6>
                            <p>Av. Juan Justo 6701</p>
                        </div>
                        <div class="col-md-6">
                            <h6>Hospital Metropolitano</h6>
                            <p>Av. Alemania 50</p>
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
</body>

</html>