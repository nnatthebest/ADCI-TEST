$(document).ready(function(){
  $('.nav-link').hover(function(){
    var child = $(this).siblings('.nav-block__child');
    var disChild = child.css('display');
    if(disChild == 'flex'){
      return;
    }else{
      $('.nav-block__child').hide();
      child.css('display', 'flex');
    }
  })
  $('.nav-block__child').mouseleave(function(){
    $(this).hide();
  })
  $('.slider-photos').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    dots: true,
    dotsClass: 'slider-dots'
  });
  $('.slider-toogle__arrow').click(function(){
    if($('.slider-toogle__arrow img').hasClass('rotate')){
      $('.slider-toogle__arrow img').removeClass('rotate');
    }else{
      $('.slider-toogle__arrow img').addClass('rotate');
    }
    $('.slider-toogle__hiden').slideToggle('slow');
  })
})