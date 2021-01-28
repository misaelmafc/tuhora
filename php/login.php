<?php

    $email = $_POST["us_email"];
    $password = sha1($_POST["us_password"]);

    include("conexion.php");

    $sql = 
        "SELECT token 
        FROM usuarios
        WHERE email = '$email'
        AND passwrd = '$password'";

    $query = mysqli_query($link, $sql);
    
    $row = mysqli_fetch_array($query)['token'];

    session_start();

    $_SESSION['token'] = $row;
    $_SESSION['horaInicio'] = time();

    print json_encode($row);

    mysqli_close($link);

?>