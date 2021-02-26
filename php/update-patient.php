<?php

session_start();

$email      = $_POST["user-input6"];
$telefono   = $_POST["user-input7"];
$prevision  = $_POST["user-input8"];
$token      = $_SESSION['token'];

include("conexion.php");

$sql =
    "UPDATE usuarios
    SET
    email       = '$email',
    telefono    = '$telefono',
    prevision   = '$prevision'
    WHERE token = '$token'";

echo mysqli_query($link, $sql);

mysqli_close($link);

?>