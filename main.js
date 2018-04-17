$(document).ready(function(){
  $(this).scrollTop(0);
  $('#end').css("opacity", "1");
  $('#end').css("transition-delay", "9s");
  $('.scrollbar').css("opacity", "1");
  $('.scrollbar').css("transition-delay", "4s");
  $('.scrollbar').css("transition-duration", "1s");

});

function scrollWork() {
  setTimeout(
    function() {
      $('html, body').css("overflow", "auto");
      $('html, body').css("height", "auto");
    }, 4500);
}

window.onload = scrollWork;
