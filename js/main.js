$(document).ready(function(){
  $("a.nav-link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });

var height = $(window).scrollTop();
var hh = $('header').height();
var th = $('.top-header').height();
if(height > hh - th){
$('.top-header').addClass('header-grad');
$('.top-header').removeClass('hb');
} else{
$('.top-header').removeClass('header-grad');
$('.top-header').addClass('hb');
}
$(window).scroll(function() {
var height = $(window).scrollTop();
var hh = $('header').height();
var th = $('.top-header').height();
if(height > hh - th){
$('.top-header').addClass('header-grad');
$('.top-header').removeClass('hb');
} else{
$('.top-header').removeClass('header-grad');
$('.top-header').addClass('hb');
}
});
$('.works-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 400,
  infinite: false,
  loop: false,
  fade: true,
  cssEase: 'linear',
  nextArrow:'<div class="slick-arrow slick-next"></div>',
  prevArrow:'<div class="slick-arrow slick-prev"></div>',
    responsive: [
    {
      breakpoint: 992,
      settings: {
      fade: false,
      arrows: false,
      }
    }
  ]
 });

 $('.form-control').change(function() {
        let is = $(this).val().trim();
           if (is !== "") {
        $(this).addClass("not-empty");
    }
    else {
        $(this).removeClass("not-empty");
    }
    });
});


if (  $(window).width() > 992 ) {


window.onload = function(){
  trackMouse('.hoverable', '.js-pointer');
}

function trackMouse(hover, pointer) {

  var $hover = document.querySelectorAll(hover);
  var $pointer = document.querySelector(pointer);

  var off = 50;
  var first = !0;

  function mouseX(evt) {
    if (!evt) evt = window.event;
    if (evt.pageX) return evt.pageX;
    else if (evt.clientX) return evt.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    else return 0
  }

  function mouseY(evt) {
    if (!evt) evt = window.event;
    if (evt.pageY) return evt.pageY;
    else if (evt.clientY) return evt.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    else return 0
  }

  function follow(evt) {

    if (first) {
      first = !1;
      $pointer.style.opacity = 1;
    }

    TweenMax.to($pointer, .7, {
      left: (parseInt(mouseX(evt)) - off) + 'px',
      top: (parseInt(mouseY(evt)) - off) + 'px',
      ease: Power3.easeOut
    });
  }
  document.onmousemove = follow;

  (function hoverable(){
    $hover.forEach(function(item){
      item.addEventListener('mouseover', function(){
        $pointer.classList.add('hide');
      });
      item.addEventListener('mouseout', function(){
        $pointer.classList.remove('hide');
      });
    })
  })();

}

};
