<?php

session_start();

$centro_salud       = $_POST["centro_salud"];
$especialidad       = $_POST["especialidad"];
$fecha_disponible   = $_POST["fecha_disponible"];
$medico             = $_POST["medico"];
$horario_disponible = $_POST["horario_disponible"];
$token              = $_SESSION['token'];
$date_save          = date("Y-m-d H:i:s");

include("conexion.php");

$sql =
    "UPDATE disponibilidad_reservas
    SET
    status = '1',
    token = '$token',
    fecha_reserva = '$date_save'
    WHERE
    centro_salud = '$centro_salud'
    AND especialidad = '$especialidad'
    AND fecha_disponible = '$fecha_disponible'
    AND medico = '$medico'
    AND horario_disponible = '$horario_disponible'";

echo mysqli_query($link, $sql);

mysqli_close($link);
