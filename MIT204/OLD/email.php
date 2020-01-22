<?php
if ($_POST)
{
	//Carrega as classes do PHPMailer
	include("phpmailer/class.phpmailer.php");
	include("phpmailer/class.smtp.php");

	//envia o e-mail para o visitante do site
	$mailCopia = $_POST['email'];
	$nome = $_POST['nome'];
	$cpf = $_POST['cpf'];
	$assunto = $_POST['assunto'];
	$mensagem = $_POST['mensagem'];

	$assunto = "Olá, recebemos sua mensagem!";
	$mensagem = "Obrigado pela sua mensagem, $nome!<br/>
				Em breve entraremos em contato.</br>";

	include("envioCliente.php");
	
	$nomeSite = 'NOME-DO-SITE';
	$assunto = "Nova mensagem no site NOME-DO-SITE";
	$mensagem = "<h3>Recebemos uma nova mensagem no site</h3>

	<strong>Nome:</strong> $_POST[nome]<br/>
	<strong>CPF:</strong> $_POST[cpf]<br/>
	<strong>E-mail:</strong> $_POST[email]<br/>
	<strong>Assunto:</strong> $_POST[assunto]<br/>
	<strong>Mensagem:</strong> $_POST[mensagem]";
	
	include("envioEmpresa.php");
	}
?>