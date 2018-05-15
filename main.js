$(document).ready(function(){
  $(this).scrollTop(0);
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
  $('.ign').css("opacity", "0");
  $('.solo').css("opacity", "0");
  $('.duo').css("opacity", "0");
  $('.squad').css("opacity", "0");
  $('.winnumber').css("opacity", "0");
});

function scrollWork() {
  setTimeout(
    function() {
      $('html, body').css("overflow", "auto");
      $('html, body').css("height", "auto");
    }, 4500);
}

$(document).ready(function(){
  $('.boxes').mouseenter(function(){
    if($(this).hasClass("clicked")){

    }
    else {
      $('p',this).css("transform","rotate(-49deg)");
      $('p',this).css("transition-duration", ".25s");
      $('.line',this).css("top","-237px");
      $('.line',this).css("left","61px");
      $('.line',this).css("transition-duration", ".75s");
      $('.gradientcover',this).css("opacity","0");
      $('.gradientcover',this).css("transition-duration", ".1s");

      if ($(this).hasClass("education")) {
        $('.education p').css("left","-35px");
        $('.education p').css("top","45px");
        $('.education p').css("transition-duration", ".25s");
      }

      if ($(this).hasClass("work")) {
        $('.work p').css("left","-15px");
        $('.work p').css("top","25px");
        $('.work p').css("transition-duration", ".25s");
      }

      if ($(this).hasClass("wins")) {
        $('.wins p').css("left","-15px");
        $('.wins p').css("top","25px");
        $('.wins p').css("transition-duration", ".25s");
      }
    }
  });

  $('.boxes').mouseleave(function(){
    if($(this).hasClass("clicked")){

    }
    else {
      $('p',this).css("opacity","1");
      $('p',this).css("transform","rotate(0deg)");
      $('p',this).css("transition-duration", ".35s");
      $('.line',this).css("top","237px");
      $('.line',this).css("left","-351px");
      $('.line',this).css("transition-duration", ".55s");
      $('.gradientcover',this).css("opacity","1");
      $('.gradientcover',this).css("transition-duration", ".2s");
      $('.exitbutton',this).css("opacity","0");

      if ($(this).hasClass("education")) {
        $('.education p').css("left","-25px");
        $('.education p').css("top","35px");
        $('.education p').css("transition-duration", ".25s");
      }

      if ($(this).hasClass("work")) {
        $('.work p').css("left","0px");
        $('.work p').css("top","35px");
        $('.work p').css("transition-duration", ".25s");
      }

      if ($(this).hasClass("wins")) {
        $('.wins p').css("left","0px");
        $('.wins p').css("top","35px");
        $('.wins p').css("transition-duration", ".25s");
      }
    }
  });
});

$(document).ready(function(){

  $('.boxes').click(function(){

    $('p',this).css("top","-100px");
    $('p',this).css("left","0px");
    $('p',this).css("transform","rotate(0deg)");
    $('p',this).css("transition-duration", ".4s");
    $('.line',this).css("top","237px");
    $('.line',this).css("left","-351px");
    $('.line',this).css("transition-duration", ".35s");
    $('.exitbutton',this).css("opacity","1");
    $('.exitbutton',this).css("transition-duration", ".35s");
    $('.exitbutton',this).css("transition-delay", ".35s");
    $('.content',this).css("visibility","visible");
    $('.content',this).css("transition-duration", ".75s");
    $('.ign').css("opacity","1");
    $('.ign').css("transition-duration", ".75s");
    $('.ign').css("transition-delay", ".25s");
    $('.solo').css("opacity","1");
    $('.solo').css("transition-duration", ".75s");
    $('.solo').css("transition-delay", ".5s");
    $('.duo').css("opacity","1");
    $('.duo').css("transition-duration", ".75s");
    $('.duo').css("transition-delay", ".75s");
    $('.squad').css("opacity","1");
    $('.squad').css("transition-duration", ".75s");
    $('.squad').css("transition-delay", "1s");
    $('.winnumber').css("opacity","1");
    $('.winnumber').css("transition-duration", ".75s");
    $('.winnumber').css("transition-delay", "1.25s");

    $(this).addClass("clicked");

    if ($(this).hasClass("education")) {
      $('.education p').css("left","-25px");
      $('.education p').css("transition-duration", ".4s");
    }

    $('.exitbutton',this).click(function(){
      $(this).parent().removeClass("clicked");

      $('p',this).css("opacity","1");
      $('p',this).css("transform","rotate(0deg)");
      $('p',this).css("transition-duration", ".35s");
      $('.line',this).css("top","237px");
      $('.line',this).css("left","-351px");
      $('.line',this).css("transition-duration", ".55s");
      $('.gradientcover',this).css("opacity","1");
      $('.gradientcover',this).css("transition-duration", ".2s");
      $('.exitbutton',this).css("opacity","0");

      if ($(this).hasClass("education")) {
        $('.education p').css("left","-25px");
        $('.education p').css("top","35px");
        $('.education p').css("transition-duration", ".25s");
      }

      if ($(this).hasClass("work")) {
        $('.work p').css("left","0px");
        $('.work p').css("top","35px");
        $('.work p').css("transition-duration", ".25s");
      }

      if ($(this).hasClass("wins")) {
        $('.wins p').css("left","0px");
        $('.wins p').css("top","35px");
        $('.wins p').css("transition-duration", ".25s");
      }

      console.log("exitclicked");
    });

  });
});

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

//background
    /*if($(document).scrollTop()>"700")
      $('html,body').css("background-color","var(--color3)");
      $('html,body').css("transition-duration", ".5s");
    if($(document).scrollTop()<"700")
      $('html,body').css("background-color","var(--color1)");
      $('html,body').css("transition-duration", ".5s");
      */
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
