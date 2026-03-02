<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../src/Exception.php';
require '../src/PHPMailer.php';
require '../src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'occidenteocci@gmail.com'; // tu Gmail
    $mail->Password   = 'ncra komh eupi hwql'; // pega la contraseña de aplicación
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom($_POST['email'], $_POST['name']);
    $mail->addAddress('occidenteocci@gmail.com'); // mismo correo o el que reciba

    $mail->Subject = $_POST['subject'];
    $mail->Body    = $_POST['message'];

    $mail->send();
    echo 'OK';
} catch (Exception $e) {
    echo "Error: {$mail->ErrorInfo}";
}