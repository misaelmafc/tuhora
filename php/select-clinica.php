<?php

$centro_salud = $_POST["centro_salud"];

include("conexion.php");

$sql =
    "SELECT
    centro_salud,
    especialidad,
    fecha_disponible,
    medico,
    horario_disponible
    FROM disponibilidad_reservas
    WHERE status = 0
    AND centro_salud = '$centro_salud'
    ORDER BY fecha_disponible ASC
    LIMIT 6";

if ($query = mysqli_query($link, $sql)) {

    while ($dat = mysqli_fetch_assoc($query)) {
        $arr[] = $dat;
    }

    echo json_encode($arr);
}else{
    echo json_encode(null);
}

mysqli_close(($link));

?>