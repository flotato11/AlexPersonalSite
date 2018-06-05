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
  $('.plane').css("left", "-30vw");
  $('.plane').css("transition-delay", "4s");
  $('.plane').css("transition-duration", "25s");
  $('.plane').css("transition-timing-function", "linear");

  $('.education').mouseenter(function(){
    $(this).css("height","30vh");
    $(this).css("transition-duration", ".5s");
  });

  $('.education').mouseleave(function(){
    $(this).css("height","10vh");
    $(this).css("transition-duration", ".5s");
  });

  $('.scrollbarchild').click(function(){
    $('.scrollbarchild').css("background-color","var(--darkblue)")
    $(this).css("background-color","var(--lightgrey)")
    $(this).css("transition-duration", ".5s");
    $(this).css("transition-delay", ".5s");
  });


});

function scrollWork() {
  setTimeout(
    function() {
      $('html, body').css("overflow", "auto");
      $('html, body').css("overflow-x", "hidden");
      $('html, body').css("height", "auto");
    }, 4500);
}

$(document).scroll(function(){

//title
    if($(document).scrollTop()>"400")
      $('.aboutmebig').css("left","-4vw");
      $('.aboutmebig').css("transition-duration", ".25s");
    if($(document).scrollTop()<"650")
      $('.aboutmebig').css("left","-20vw");
      $('.aboutmebig').css("transition-duration", ".25s");

    if($(document).scrollTop()>"400")
      $('.aboutmesmall').css("left","-1vw");
      $('.aboutmesmall').css("transition-duration", ".25s");
      $('.aboutmesmall').css("transition-delay", ".1s");
    if($(document).scrollTop()<"640")
      $('.aboutmesmall').css("left","-20vw");
      $('.aboutmesmall').css("transition-duration", ".25s");

    if($(document).scrollTop()>"400")
      $('.aboutmesmall').css("opacity","1");
      $('.aboutmesmall').css("transition-duration", ".25s");
    if($(document).scrollTop()<"650")
      $('.aboutmesmall').css("opacity","0");
      $('.aboutmesmall').css("transition-duration", ".25s");

    if($(document).scrollTop()>"400")
      $('.aboutmebig').css("opacity",".1");
      $('.aboutmebig').css("transition-duration", ".25s");
    if($(document).scrollTop()<"650")
      $('.aboutmebig').css("opacity","0");
      $('.aboutmebig').css("transition-duration", ".25s");
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
