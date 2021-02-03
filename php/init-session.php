<?php

    session_start();
    $token = $_SESSION['token'];
    
    include("conexion.php");

    $sql = 
        "SELECT status 
        FROM usuarios
        WHERE token = '$token'";

    $query = mysqli_query($link, $sql);
    
    $row = mysqli_fetch_array($query)['status'];

    print json_encode(intval($row));

    mysqli_close($link);

?>