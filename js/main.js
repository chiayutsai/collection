
  /**
   * Draws the outline of the svg circle to the percent set in data attr
   */
  function drawCharts() {
    
    var circles = document.querySelectorAll('.percent-circle');

    circles.forEach(function(el) {
      //pull the percentage and turn it into a fraction
      var percent = el.dataset.percent / 100;
      //work out the circumference from the width
      var diameter = el.offsetWidth;
      var circumference = Math.ceil(diameter * Math.PI);
      //now we have the circumference, we know how long the ouline should be
      var stroke = Math.ceil(circumference * percent);
      //also workout how long the line doesn't exist for
      var diff = circumference - stroke;

      //now add the strok dash array for the first two values
      //TODO : could this all be done with css?
      el.querySelector('.percent-circle-inner').style.strokeDasharray = stroke +'px '+ diff +'px';
    });
  }
  



function myFunction(page){
  if(page==1){
   $('.ps').css('display','block');
   $('.ai').css('display','none');
   $('.logo_work').css('display','none');
   $('.web_work').css('display','none');
   $('.ps_btn').addClass('active');
    $('.ps_btn').siblings().removeClass('active');
  }
  else if(page==2){
    $('.ps').css('display','none');
   $('.ai').css('display','block');
   $('.logo_work').css('display','none');
   $('.web_work').css('display','none');
   $('.ai_btn').addClass('active');
    $('.ai_btn').siblings().removeClass('active');
  }
  else if(page==3){
    $('.ps').css('display','none');
   $('.ai').css('display','none');
   $('.logo_work').css('display','block');
   $('.web_work').css('display','none');
   $('.logo_btn').addClass('active');
    $('.logo_btn').siblings().removeClass('active');
  }
  else if(page==4){
    $('.ps').css('display','none');
   $('.ai').css('display','none');
   $('.logo_work').css('display','none');
   $('.web_work').css('display','block');
   $('.web_btn').addClass('active');
    $('.web_btn').siblings().removeClass('active');
  }
}


$('#index').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop:0
    }, 500);
});
$('#service').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: ($('.service').offset().top-120)
    }, 500);
});
$('#works').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: ($('.works').offset().top-120)
    }, 500);
});
$('#skills').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: ($('.skills').offset().top-120)
    }, 500);
});
$('#experience').on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: ($('.container').offset().top-120)
    }, 500);
});

$(document).ready(function () {
var h = $(window).height();

var s = $('.skills').offset().top;
$(window).scroll(function () {
    scroll = $(this).scrollTop();

     if (h + scroll-200> s) {
       drawCharts();

     }
});
});