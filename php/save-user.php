<?php

$numero_identificacion = $_POST["rg_input1"];
$nombre                = $_POST["rg_input2"];
$apellidos             = $_POST["rg_input3"];
$fecha_nacimiento      = $_POST["rg_input4"];
$sexo                  = $_POST["rg_input5"];
$nacionalidad          = $_POST["rg_input6"];
$email                 = $_POST["rg_input7"];
$telefono              = $_POST["rg_input8"];
$prevision             = $_POST["rg_input9"];
//$contrasena            = sha1($_POST["rg_input10"]);  
$date_save             = date("Y-m-d H:i:s");
//$token                 = md5($_POST["rg_input1"]+date("Y-m-d H:i:s"));

include("conexion.php");

$sql =
    "INSERT INTO pacientes 
    (numero_identificacion, nombre, apellidos, fecha_nacimiento, sexo, nacionalidad, email, telefono, prevision, date_save)
    VALUES 
    ('$numero_identificacion', '$nombre', '$apellidos', '$fecha_nacimiento', '$sexo', '$nacionalidad', '$email', '$telefono', '$prevision', '$date_save')";

echo mysqli_query($link, $sql);

mysqli_close($link);
