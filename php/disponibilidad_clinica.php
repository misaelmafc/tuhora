<?php

include("conexion.php");

$status = $_POST["status"];
if (isset($_POST["centro_salud"])) {
    $centro_salud = $_POST["centro_salud"];
}
if (isset($_POST["especialidad"])) {
    $especialidad = $_POST["especialidad"];
}
if (isset($_POST["fecha_disponible"])) {
    $fecha_disponible = $_POST["fecha_disponible"];
}
if (isset($_POST["medico"])) {
    $medico = $_POST["medico"];
}
if (isset($_POST["horario_disponible"])) {
    $horario_disponible = $_POST["horario_disponible"];
}

switch ($status) {
    case 'centro_salud':
        $sql =
            "SELECT 
            centro_salud
            FROM disponibilidad_reservas
            WHERE status = 0
            GROUP BY centro_salud";
        break;
    case 'especialidad':
        $sql =
            "SELECT 
            especialidad
            FROM disponibilidad_reservas
            WHERE 
            centro_salud = '$centro_salud'
            AND status = 0
            GROUP BY especialidad";
        break;
    case 'fecha_disponible':
        $sql =
            "SELECT 
            fecha_disponible
            FROM disponibilidad_reservas
            WHERE 
            centro_salud = '$centro_salud'
            AND especialidad = '$especialidad'
            AND status = 0
            GROUP BY fecha_disponible";
        break;
    case 'medico':
        $sql =
            "SELECT 
            medico
            FROM disponibilidad_reservas
            WHERE
            centro_salud = '$centro_salud'
            AND especialidad = '$especialidad'
            AND fecha_disponible = '$fecha_disponible'
            AND status = 0
            GROUP BY medico";
        break;
    case 'horario_disponible':
        $sql =
            "SELECT
            horario_disponible
            FROM disponibilidad_reservas
            WHERE
            centro_salud = '$centro_salud'
            AND especialidad = '$especialidad'
            AND fecha_disponible = '$fecha_disponible'
            AND medico = '$medico'
            AND status = 0";    
        break;
}

$query = mysqli_query($link, $sql);

while($dat=mysqli_fetch_assoc($query)){
    $arr[]=$dat;
}

echo json_encode($arr);

mysqli_close(($link));

?>
