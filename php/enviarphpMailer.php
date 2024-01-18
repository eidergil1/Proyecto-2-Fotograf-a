<?php

//2 - COMPROBAMOS QUE VENGAMOS POR %_POST 
//Hacemos una condición para ver si existe $_POST
if(isset($_POST)){

    //3 - RECOGEMOS EN VARIABLES LOS VALORES DE LOS IMPUT DEL FORM
    $destino = "eidergil@outlook.com";//correo del admin
    $nombre = $_POST["nombre"];//datos del usuario
    $correo = $_POST["correo"];
    $telefono = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];

   //comprobaciones

    //datos que cogemos de su CLIENTE
    //ip
    $ip = $_SERVER['REMOTE_ADDR'];

    //datos que cogemos deL SISTEMA
    //fecha
    $datetime = date("Y-m-d H:i:s");

    //mensaje concatenado para enviar por correo
    $contenido = "fecha de envío: ".$datetime."\n\rIP: ".$ip."\n\rNombre: ".$nombre."\n\rCorreo: ".$correo."\n\rTelefono: ".$telefono."\n\rMensaje: ".$mensaje;

    $cabecera = 'From info@webda.eus'."\r\n".
    //'Reply-To: info@webda.eus'."\r\n".
    'X-Mailer: PHP/'.phpversion();

    $correoEmisor = "info@webda.eus";
    $nombreEmisor = "Webda - Eider";
    $destinatario = $correo;
    $nombreDestinatario = $nombre;
    $asunto = "Consulta realizada en la web";
    $cuerpo = $contenido;
    
    include "./includes/_configphpMailer.php";


    //10-redirigir a gracias
    header("location:../index.html?enviado=correo enviado!");

}
?>

