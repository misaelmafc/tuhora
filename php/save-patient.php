<?php

session_start();

$numero_identificacion = $_POST["rg_input1"];
$nombre                = $_POST["rg_input2"];
$apellidos             = $_POST["rg_input3"];
$fecha_nacimiento      = $_POST["rg_input4"];
$sexo                  = $_POST["rg_input5"];
$nacionalidad          = $_POST["rg_input6"];
$telefono              = $_POST["rg_input7"];
$prevision             = $_POST["rg_input8"];
$date_save             = date("Y-m-d H:i:s");
$token = $_SESSION['token'];

include("conexion.php");

$sql =
    "UPDATE usuarios
    SET
    status = '1',
    numero_identificacion = '$numero_identificacion',
    nombre = '$nombre',
    apellidos = '$apellidos',
    fecha_nacimiento = '$fecha_nacimiento',
    sexo = '$sexo',
    nacionalidad = '$nacionalidad',
    telefono = '$telefono',
    prevision = '$prevision',
    date_save = '$date_save'
    WHERE token = '$token'";

echo mysqli_query($link, $sql);

mysqli_close($link);
