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
		fade: true,
		cssEase: 'linear'
	});
});

// Animações - desativa mobile
AOS.init({
  disable: 'mobile',
  delay: 0,
  duration: 1200,
  once: true,
});


// Transição suave entre os menus
// $(function() {
// });
  // Handler for .ready() called.
  // Deslize suave
$(".desliza").on("click", function (e) {
  e.preventDefault();
  var target = this.hash;
  var $target = $(target);
  $("html, body").animate({"scrollTop": ($target.offset().top) - ($("nav").hasClass("fixed-top")) -20 }, 900, "swing", null);
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


// Chamada Ajax para o envio de email
$(document).ready( function(){
    $('#btnEnviar').click( function(){

      var nome     = $("[valida-nome]").val();
      var email    = $("[valida-email]").val();
      var destino  = $("[valida-assunto]").val();
      var mensagem = $("[valida-mensagem]").val();

      if(nome == '' || email == '' || destino == '' || mensagem == ''){
          Swal.fire('Existem campos que não foram preenchidos.');
          return false;
      }

      usuario = document.getElementById('txtEmail').value.substring(0, document.getElementById('txtEmail').value.indexOf("@"));
      dominio = document.getElementById('txtEmail').value.substring(document.getElementById('txtEmail').value.indexOf("@")+ 1, document.getElementById('txtEmail').value.length);
      if ((usuario.length >=1) &&
          (dominio.length >=3) && 
          (usuario.search("@")==-1) && 
          (dominio.search("@")==-1) &&
          (usuario.search(" ")==-1) && 
          (dominio.search(" ")==-1) &&
          (dominio.search(".")!=-1) &&      
          (dominio.indexOf(".") >=1)&& 
          (dominio.lastIndexOf(".") < dominio.length - 1)) {
          // $("#alertEmail").addClass("d-none");
          // return true;
      }else{
          Swal.fire('E-mail invalido.');
          $("[valida-email]").focus();
          return false;
      }

      /* construindo url */
      var urlData = "&nome=" + nome + "&email=" + email + "&destino=" + destino + "&mensagem=" + mensagem ;

      /* Ajax */
      $.ajax({
        type: "POST",
        url: "./email.php", /* endereço do script PHP */
        async: true,
        data: urlData, /* informa Url */
        beforeSend: function() { /* antes de enviar */
          $('#loading').removeClass('d-none').html('<div class="alert alert-info text-center mt-2 mt-md-0"><i class="fa fa-spinner fa-spin"></i><span> Enviando...</span></div>');
        },
        success: function(data) { /* sucesso */
          // $("#formContato")[0].reset();
          $('#sucesso').html('<div class="alert alert-primary text-center mt-2 mt-md-0">Mensagem enviada com sucesso!</div>');
          setTimeout(function(){$('#sucesso').fadeOut("slow");},5000);
        },
        complete: function(){ /* completo */
          $('#loading').addClass('d-none');
        }
      });

    });
});