/*

    Script de VALIDAÇÃO e MÁSCARA de formulário
    para CPF, CNPJ, RG, E-mail, Arquivo, Data de nascimento,
    Data de período, Telefone, Celular, Seleção, Radio, CEP,
    Endereço, Número, Bairro, Cidade, UF, Observação/Mensagem,
    Senha e Check.

    Publicado em 20/09/2019

    Por Anderson Romão
    Github: https://github.com/andblade

*/


/* --- VALIDAÇÃO --- */

$(".alertError").css({
    "font-style": "italic",
    "font-size": "13px",
    "color": "#dc3545"
});

// Validar Nome
$("[valida-nome]").bind('blur keyup', function(){
    var nome = this.value;
    if (nome.length <= 3) {
        $("#alertNOME").removeClass("d-none").html("<p class='alertError'>Nome incompleto.</p>");
        // $("[valida-nome]").focus();
        return false;
    }else{
        $("#alertNOME").addClass("d-none");
        return true;
    }
});

// Validar E-mail
$("[valida-email]").bind('blur keyup', function(){
    usuario = this.value.substring(0, this.value.indexOf("@"));
    dominio = this.value.substring(this.value.indexOf("@")+ 1, this.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) && 
        (usuario.search("@")==-1) && 
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) && 
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&      
        (dominio.indexOf(".") >=1)&& 
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        $("#alertEmail").addClass("d-none");
        return true;
    }else{
        $("#alertEmail").removeClass("d-none").html("<p class='alertError'>E-mail inválido.</p>");
        // $("[valida-email]").focus();
        return false;
    }
});

// Validar assunto
$("[valida-assunto]").bind('blur keyup', function(){
    var assunto = this.value;
    if (assunto.length <= 3) {
        $("#alertAssunto").removeClass("d-none").html("<p class='alertError'>Preencha o assunto.</p>");
        // $("[valida-mensagem]").focus();
        return false;
    }else{
        $("#alertAssunto").addClass("d-none");
        return true;
    }
});

// Validar mensagem / observação
$("[valida-mensagem]").bind('blur keyup', function(){
    var mensagem = this.value;
    if (mensagem.length <= 3) {
        $("#alertMensagem").removeClass("d-none").html("<p class='alertError'>Deixe sua mensagem.</p>");
        // $("[valida-mensagem]").focus();
        return false;
    }else{
        $("#alertMensagem").addClass("d-none");
        return true;
    }
});