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
  $('.mobile-menu__nav .nav-link').click(function(){
    $(this).siblings('.nav-block__child').slideToggle();
  })
  $('.mobile-menu__close').click(function(){
    $('.mobile-bg').hide();
  })
  $('#menuToggle').click(function(){
    $('.mobile-bg').show();
  })
  if($(document).width() < '400'){
    $('.mobile-menu__close img').attr('src', '/assets/images/cansel(black).png')
  }else{
    $('.mobile-menu__close img').attr('src', '/assets/images/cancel.png')
  }
  $(window).resize(function(){
    if($(document).width() < '400'){
      $('.mobile-menu__close img').attr('src', '/assets/images/cansel(black).png')
    }else{
      $('.mobile-menu__close img').attr('src', '/assets/images/cancel.png')
    }
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
  $('.popup__close').click(function(){
    $('.popup').hide();
  })
  $('.header-block__menu__auth .small-link').click(function(){
    $('.popup').css('display', 'flex');
  })
})