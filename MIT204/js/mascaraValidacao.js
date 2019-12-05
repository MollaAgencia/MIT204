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

/*
    MASCARA
*/
// Mascara CPF
$("[mask-cpf]").each(function(){
    var $this = $(this);
    $this.on("keyup",function(){
        $this.val(maskCPF($this.val()))
    })
});
function maskCPF(cpf){
    cpf = cpf.replace( /\D/g,""); //Remove tudo o que não é dígito
    cpf = cpf.replace( /^(\d{3})$/,"$1");
    cpf = cpf.replace( /^(\d{3})(\d{3})$/,"$1.$2");
    cpf = cpf.replace( /^(\d{3})(\d{3})(\d{3})$/,"$1.$2.$3");
    cpf = cpf.replace( /^(\d{3})(\d{3})(\d{3})(\d{2})$/,"$1.$2.$3-$4");
    return cpf;
}

/* --- VALIDAÇÃO --- */

$(".alertError").css({
    "font-style": "italic",
    "font-size": "13px",
    "color": "#dc3545"
});

// Validar CPF
$("[valida-cpf]").bind('blur keyup', function(){
    var cpf = this.value;
    cpf = cpf.replace(".", "");
    cpf = cpf.replace(".", "");
    cpf = cpf.replace("-", "");

    if( cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999" ){
        $("#alertCPF").removeClass("d-none").html("<p class='alertError'>CPF inválido.</p>");
        // $("[valida-cpf]").focus();
        return false;
    }
    soma = 0;
    for(i = 0; i < 9; i++){
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }   
    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11){
        resto = 0;
    }
    if(resto != parseInt(cpf.charAt(9))){
        $("#alertCPF").removeClass("d-none").html("<p class='alertError'>CPF inválido.</p>");
        // $("[valida-cpf]").focus();
        return false;
    }
    soma = 0;
    for(i = 0; i < 10; i ++){
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    if(resto == 10 || resto == 11){
        resto = 0;
    }   
    if(resto != parseInt(cpf.charAt(10))){
        $("#alertCPF").removeClass("d-none").html("<p class='alertError'>CPF inválido.</p>");
        // $("[valida-cpf]").focus();
        return false;
    }else{
        $("#alertCPF").addClass("d-none");
        return true;
    }
    return true;
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

function enviar() {
    $("[required]").each(function(){
        if($(this).val() == "" ){
            // alert('Existem campos que não foram preenchidos.');
            Swal.fire('Existem campos que não foram preenchidos.');
            return false;
        }
    });
};