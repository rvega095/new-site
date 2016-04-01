<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="refresh" content="0; url=/gracias.html"> 
<?php 

	$nombre = strip_tags($_POST['nombre']);
	$phone = strip_tags($_POST['telefono']);
	$email = strip_tags($_POST['email']);
	$comentario = strip_tags($_POST['comentario']);
	$fecha = time();
	$fechaFormateada = date("j/n/Y", $fecha);
	
	$header.="From:".$_POST['email']."\n";
	//$header.="MIME-Version: 1.0 \n";
	//$header.="Content-type: text/html; charset=UTF-8\r\n";
	
	$correoDestino = "dchicos1@hotmail.com";

    //Formateo el asunto del correo
    $asunto = "Nuevo contacto [ '". $nombre ."' ] desde tu WebSite 'D'Chicos.com'";
     
    //Formateo el cuerpo del correo
    $cuerpo = "Enviado por:  " . $nombre . "\n\n";
	$cuerpo .= "   | Fecha: " . $fechaFormateada . "\n";
	$cuerpo .= "   | Telefono:  " . $phone . "\n";
    $cuerpo .= "   | E-mail:  " . $email . "\n\n";
    $cuerpo .= "   | Comentario:  " . $comentario;
	
	// Envío el mensaje
    mail($correoDestino, $asunto, $cuerpo, $header);

?>

</head>

<body>
</body>
</html>
