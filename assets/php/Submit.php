<?php 

	$user = strip_tags($_POST['user']);
	$pwd = strip_tags($_POST['password']);
	$radio = strip_tags($_POST['radio']);
	
	
	if($user == 'katia' & $pwd == 'katia'){
		if($radio == 'archivos'){
			header( 'Location: http://localhost/dchicos.com/upload/index.html' );
		}
		else{ 
			header( 'Location: http://www.dchicos.com/' );
		}
	}
	
	else{	
		if($user == 'admin' & $pwd == 'admin010'){
			if($radio == 'archivos'){
				header( 'Location: http://localhost/dchicos.com/upload/index.html?mp=teljdicdwjhlpm' );
			}
			else{ header( 'Location: http://www.dchicos.com/publicidad.html' );}
		}		
		else{
			header( 'Location: http://www.dchicos.com/' );
		}
	}
?>