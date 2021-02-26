<?php

$email      = $_POST["usr_email"];
$password   = sha1($_POST["usr_password"]);
$token      = md5($_POST["usr_password"].date("Y-m-d H:i:s"));
$pregunta   = md5($_POST["usr_pregunta"]);
$respuesta  = md5($_POST["usr_respuesta"]);
$status     = 0;

include("conexion.php");

$sql =
    "INSERT INTO usuarios 
    (email, passwrd, token, status, pregunta, respuesta)
    VALUES 
    ('$email', '$password', '$token', '$status', '$pregunta', '$respuesta')";

print mysqli_query($link, $sql);

mysqli_close($link);
