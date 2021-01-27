<?php

$email      = $_POST["usr_email"];
$password   = sha1($_POST["usr_password"]);
$token      = md5($_POST["usr_password"].date("Y-m-d H:i:s"));

include("conexion.php");

$sql =
    "INSERT INTO usuarios 
    (email, passwrd, token)
    VALUES 
    ('$email', '$password', '$token')";

print mysqli_query($link, $sql);



mysqli_close($link);
