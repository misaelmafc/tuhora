<?php

$nombre             = $_POST["nombre"];
$apellido           = $_POST["apellidos"];
$email              = $_POST["email"];     
$numero_ident       = $_POST["numero_identificacion"];
$prevision          = $_POST["prevision"];
$sexo               = $_POST["sexo"];    
$idreserva          = $_POST["dr_id"];
$centro_salud       = $_POST["centro_salud"];
$especialidad       = $_POST["especialidad"];
$fecha_disponible   = $_POST["fecha_disponible"];
$fecha_reserva      = $_POST["fecha_reserva"];
$horario_disponible = $_POST["horario_disponible"];
$medico             = $_POST["medico"];

require('fpdf/fpdf.php');

class PDF extends FPDF
{
    // Pie de página
    function Footer()
    {
        // Posición: a 1,5 cm del final
        $this->SetY(-15);
        // Arial italic 8
        $this->SetFont('Arial', 'I', 8);
        // Número de página
        $this->Cell(0, 10, utf8_decode('Tu Hora - www.tuhora.cl  |  +56 9 1234 5678'), 0, 0, 'C');
    }
}

// Creación del objeto de la clase heredada
$pdf = new PDF('P','mm','A5');
$pdf->AliasNbPages();
$pdf->AddPage();
$pdf->Image('../assets/logo.jpg', 10, 8, 50);

$pdf->SetFont('Arial', 'B', 14);
// Movernos a la derecha
$pdf->Cell(85);
// Título
$pdf->Cell(30, 10, 'Reserva: 202100' . $idreserva, 0, 0, 'C');
// Salto de línea
$pdf->Ln(25);

$pdf->SetFont('Arial', '', 14);

$pdf->Cell(0, 10, utf8_decode('Nombre: '). utf8_decode($nombre.' '.$apellido), 0, 1);
$pdf->Cell(0, 10, utf8_decode('Email: '). utf8_decode($email), 0, 1);
$pdf->Cell(0, 10, utf8_decode('N°Identificación: '). utf8_decode($numero_ident), 0, 1);
$pdf->Cell(0, 10, utf8_decode('Previsión: '). utf8_decode($prevision), 0, 1);
$pdf->Cell(0, 10, utf8_decode('Sexo: '). utf8_decode($sexo), 0, 1);
$pdf->Cell(0, 10, utf8_decode('Centro de salud: '). utf8_decode($centro_salud), 0, 1);
$pdf->Cell(0, 10, utf8_decode('Especialidad: '). utf8_decode($especialidad), 0, 1);
$pdf->Cell(0, 10, utf8_decode('Fecha reservada: '). utf8_decode($fecha_disponible), 0, 1);
$pdf->Cell(0, 10, utf8_decode('Hora reservada: '). utf8_decode($horario_disponible), 0, 1);
$pdf->Cell(0, 10, utf8_decode('Médico: '). utf8_decode($medico), 0, 1);

//D - I
$pdf->Output('I', 'ticket-reserva-'.$idreserva.'.pdf', true);


?>