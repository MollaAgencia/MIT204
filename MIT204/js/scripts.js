// Scroll menu
var navbar = $('nav');
$(window).scroll(function() {
  if ($(window).scrollTop() > 80) {
    navbar.addClass('mt-md-2').removeClass('mt-md-5');
  } else {
    navbar.addClass('mt-md-5').removeClass('mt-md-2');
  }
});


// Carousel - Home
$(document).ready(function() {
	$('.fade-slick').slick({
		dots: true,
		infinite: true,
		autoplay: false,
		// autoplaySpeed: 1000,
		// speed: 500,
		fade: true,
		cssEase: 'linear'
	});
});


// Transição suave entre os menus
$(function() {
  // Handler for .ready() called.
  // Deslize suave
  $(".desliza").on("click", function (e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    // console.log($target.offset().top); 
    $("html, body").stop().animate({"scrollTop": ($target.offset().top - ($("nav").hasClass("fixed-top") ? $("nav").height() : 100 ))}, 900, "swing", null);
    console.log($target.offset().top);
  });
});


// Back to top button
var btn = $('#buttonTop');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


// Chamada Ajax
$(document).ready( function(){
    $('#btnEnviar').click( function(){

      var nome     = $("[valida-nome]").val();
      var cpf      = $("[valida-cpf]").val();
      var email    = $("[valida-email]").val();
      var assunto  = $("[valida-assunto]").val();
      var mensagem = $("[valida-mensagem]").val();

      if(nome == '' || cpf == '' || email == '' || assunto == '' || mensagem == ''){
           Swal.fire('Existem campos que não foram preenchidos.');
           return false;
       }

      /* construindo url */
      var urlData = "&nome=" + nome + "&cpf=" + cpf + "&email=" + email + "&assunto=" + assunto + "&mensagem=" + mensagem ;

      /* Ajax */
      $.ajax({
        type: "POST",
        url: "./email.php", /* endereço do script PHP */
        async: true,
        data: urlData, /* informa Url */
        success: function(data) { /* sucesso */
          // $("#formContato")[0].reset();
          $('#sucesso').html('<div class="alert alert-primary text-center mt-2 mt-md-0">Mensagem enviada com sucesso!</div>');
          setTimeout(function(){$('#sucesso').fadeOut("slow");},6000);
        },
        beforeSend: function() { /* antes de enviar */
          $('#loading').removeClass('d-none').html('<div class="alert alert-info text-center mt-2 mt-md-0"><i class="fa fa-spinner fa-spin"></i><span> Enviando...</span></div>');
        },
        complete: function(){ /* completo */
          $('#loading').addClass('d-none');
        }
      });

    });
});


// Definir linguagem de acordo com o navegador
// var userLang = navigator.language || navigator.userLanguage; 
// console.log("The language is: " + userLang);
// if (userLang == 'pt-BR') {
//     var novaURL = "index.html";
//     $(window.document.location).attr('href',novaURL);
// }
// else {
//     var novaURL = "english.html";
//     $(window.document.location).attr('href',novaURL);
// }