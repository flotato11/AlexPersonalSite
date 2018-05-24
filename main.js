
$(document).ready(function(){
  $('body').scrollTop(0);
  $('#end').css("opacity", "1");
  $('#end').css("transition-delay", "8.9s");
  $('.scrollbar').css("opacity", "1");
  $('.scrollbar').css("transition-delay", "4s");
  $('.scrollbar').css("transition-duration", "1s");
  $('.scrolldown').css("opacity", "1");
  $('.scrolldown').css("transition-delay", "4s");
  $('.scrolldown').css("transition-duration", "1s");
  $('.wave').css("opacity", "1");
  $('.wave').css("transition-delay", "4s");
  $('.wave').css("transition-duration", "4s");
  $('.ocean').css("opacity", "1");
  $('.ocean').css("transition-delay", "4s");
  $('.ocean').css("transition-duration", "4s");
});

function scrollWork() {
  setTimeout(
    function() {
      $('html, body').css("overflow", "auto");
      $('html, body').css("height", "auto");
    }, 4500);
}

$(document).scroll(function(){

//title
    if($(document).scrollTop()>"400")
      $('.aboutmesmall').css("opacity","1");
      $('.aboutmesmall').css("transition-duration", ".5s");
    if($(document).scrollTop()<"650")
      $('.aboutmesmall').css("opacity","0");
      $('.aboutmesmall').css("transition-duration", ".5s");

    if($(document).scrollTop()>"400")
      $('.aboutmebig').css("opacity",".1");
      $('.aboutmebig').css("transition-duration", ".5s");
    if($(document).scrollTop()<"650")
      $('.aboutmebig').css("opacity","0");
      $('.aboutmebig').css("transition-duration", ".5s");

    if($(document).scrollTop()>"400")
      $('.aboutmebig').css("opacity",".1");
      $('.aboutmebig').css("transition-duration", ".5s");
    if($(document).scrollTop()<"650")
      $('.aboutmebig').css("opacity","0");
      $('.aboutmebig').css("transition-duration", ".5s");
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

window.onload = scrollWork;
