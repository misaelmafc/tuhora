<?php

$email      = $_POST["rcp_email"];
$pregunta   = md5($_POST["rcp_pregunta"]);
$respuesta  = md5($_POST["rcp_respuesta"]);
$password   = sha1($_POST["rcp_password"]);

include("conexion.php");

$sql =
    "SELECT token 
    FROM usuarios
    WHERE email = '$email'
    AND pregunta = '$pregunta'
    AND respuesta = '$respuesta'";

$query = mysqli_query($link, $sql);

$row = mysqli_fetch_array($query)['token'];

if(strlen($row) > 0){

    $sql2 =
    "UPDATE usuarios
    SET
    passwrd     = '$password'
    WHERE token = '$row'";

    echo mysqli_query($link, $sql2);
}

mysqli_close($link);
