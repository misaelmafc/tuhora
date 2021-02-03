<?php

    session_start();

    $token = $_SESSION['token'];

    include("conexion.php");

    $sql = 
        "SELECT 
            numero_identificacion, 
            nombre,
            apellidos,
            fecha_nacimiento,
            sexo,
            nacionalidad,
            email,
            telefono,
            prevision
        FROM usuarios
        WHERE token = '$token'";

    $query = mysqli_query($link, $sql);

    print json_encode(mysqli_fetch_array($query));

    mysqli_close(($link));

?>