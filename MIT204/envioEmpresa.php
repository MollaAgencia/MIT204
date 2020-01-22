<?php    
    //E-mail com cópia para empresa
    $mail->IsSMTP();
	$mail->CharSet = 'UTF-8';
	//$mail->True;
	$mail->SMTPDebug = 1;
	$mail->SMTPSecure = 'ssl';
	$mail->Host = 'SMTP-DO-CLIENTE'; //smtp.gmail.com(gmail), smtplw.com.br(locaweb), smtp.live.com(hotmail)
	$mail->SMTPSecure = 'tls';
	$mail->Port = 587; 
	$mail->SMTPAuth = true;
	$mail->Username = 'EMAIL-DO-CLIENTE';
	$mail->Password = 'SENHA-DO-EMAIL';
	$mail->From = 'EMAIL-DO-CLIENTE';

	$mail->FromName = 'NOME-DO-SITE';
	$mail->AddAddress('EMAIL-DO-CLIENTE', $nome); // Email e nome de quem receberá //Responder
	//$mail->AddReplyTo($mailCopia, $nome); // Cópia

	$mail->WordWrap = 50;
	$mail->IsHTML = (true);
	$mail->Subject = $assunto;
	$mail->Body = '<br/>' . $mensagem . '<br/>';
	$mail->AltBody = "$mensagem";

	$mail->AddEmbeddedImage('imagens/logo.png', 'NOME-DO-SITE'); //Logo da empresa
	//$mail->AddAttachment($anexo['tmp_name'], $anexo['name']); //Anexo que o cliente envia

	// Envia o e-mail
	if(!$mail->send())
	{	
		echo "Erro no envio da mensagem (Empresa)".$mail->ErrorInfo;
	}
	$mail->ClearAllRecipients();
    $mail->ClearAttachments();
?>