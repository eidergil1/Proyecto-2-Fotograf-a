<?php
ini_set('display_errors', 1);

/* recoger datos y comprobar */
$destino = "mirianamaya@gmail.com";/* correo del admin */
$nombre = $_POST["nombre"];/* datos del usuario */
$correo = $_POST["correo"];
$telefono = $_POST["telefono"];
$mensaje = $_POST["mensaje"];

/* datos que cogemos de su CLIENTE */
/* ip */
$ip = $_SERVER['REMOTE_ADDR'];

/* datos que cogemos deL SISTEMA */
/* fecha */
$datetime = date("Y-m-d H:i:s");

/* mensaje concatenado para enviar por correo*/
$contenido = "fecha de envío: ".$datetime."\nIP: ".$ip."\nNombre: ".$nombre."\nCorreo: ".$correo."\nTelefono: ".$telefono."\nMensaje: ".$mensaje;

$cabecera = 'From mirianamaya@gmail.com'."\r\n".
'Reply-To: eidergil@outlook.com'."\r\n".
'X-Mailer: PHP/'.phpversion();

/* 9-enviar correos de confirmacion*/
mail($destino,"Consulta de la web", $contenido,$cabecera); /* correo que recibo yo */

mail($correo,"Hemos recibiido tu consulta",$contenido,$cabecera); /* correo que recibe el cliente */

/* 10-redirigir a gracias*/
header("location:../index.html?enviado=correo enviado!");
?>

