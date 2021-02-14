<?php

session_start();

$token = $_SESSION['token'];

include("conexion.php");

$sql =
    "SELECT
    *,
    dr.id AS 'dr_id'
    FROM disponibilidad_reservas dr
    INNER JOIN usuarios us
    ON dr.token = us.token
    WHERE dr.token = '$token'
    AND dr.status = 1";

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