$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });
});


$(document).on("scroll", function() {

  if($(document).scrollTop()>400) {
    $("#navbar").removeClass("event").addClass("scrool");
  } 
  else {
    $("#navbar").removeClass("scrool").addClass("event");
  }
  
});



  $(window).scroll(function() {
    if ($(this).scrollTop() > 2500 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});

  
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".banner").offset().top},"1000");return false})})

