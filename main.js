$(document).ready(function(){
  console.log(10);
  $(this).scrollTop(0);
  $('#end').css("opacity", "1");
  $('#end').css("transition-delay", "9s");
  $('.scrollbar').css("opacity", "1");
  $('.scrollbar').css("transition-delay", "4s");
  $('.scrollbar').css("transition-duration", "1s");
  $('.scrolldown').css("opacity", "1");
  $('.scrolldown').css("transition-delay", "4s");
  $('.scrolldown').css("transition-duration", "1s");
});

function scrollWork() {
  setTimeout(
    function() {
      $('html, body').css("overflow", "auto");
      $('html, body').css("height", "auto");
    }, 4500);
}

$(document).ready(function(){
  
});

$(document).scroll(function(){

//title
    if($(document).scrollTop()>"400")
      $('.aboutme').css("opacity","1");
      $('.aboutme').css("transition-duration", ".5s");
    if($(document).scrollTop()<"650")
      $('.aboutme').css("opacity","0");
      $('.aboutme').css("transition-duration", ".5s");

//background
    if($(document).scrollTop()>"700")
      $('html,body').css("background-color","var(--color3)");
      $('html,body').css("transition-duration", ".5s");
    if($(document).scrollTop()<"700")
      $('html,body').css("background-color","var(--color1)");
      $('html,body').css("transition-duration", ".5s");

//boxes education
    if($(document).scrollTop()>"650")
      $('.education').css("opacity","1");
      $('.education').css("transition-duration", ".5s");
    if($(document).scrollTop()<"650")
      $('.education').css("opacity","0");
      $('.education').css("transition-duration", ".5s");
    if($(document).scrollTop()>"650")
      $('.education').css("top","50px");
      $('.education').css("transition-duration", ".5s");
    if($(document).scrollTop()<"650")
      $('.education').css("top","100px");
      $('.education').css("transition-duration", ".5s");

//boxes work
    if($(document).scrollTop()>"650")
      $('.work').css("opacity","1");
      $('.work').css("transition-duration", ".5s");
    if($(document).scrollTop()<"650")
      $('.work').css("opacity","0");
      $('.work').css("transition-duration", ".5s");
    if($(document).scrollTop()>"650")
      $('.work').css("top","50px");
      $('.work').css("transition-duration", ".5s");
      $('.work').css("transition-delay", ".1s");
    if($(document).scrollTop()<"650")
      $('.work').css("top","100px");
      $('.work').css("transition-delay", ".1s");

//boxes wins
    if($(document).scrollTop()>"650")
      $('.wins').css("opacity","1");
      $('.wins').css("transition-duration", ".5s");
    if($(document).scrollTop()<"650")
      $('.wins').css("opacity","0");
      $('.wins').css("transition-duration", ".5s");
    if($(document).scrollTop()>"650")
      $('.wins').css("top","50px");
      $('.wins').css("transition-duration", ".5s");
      $('.wins').css("transition-delay", ".2s");
    if($(document).scrollTop()<"650")
      $('.wins').css("top","100px");
      $('.wins').css("transition-delay", ".2s");
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
