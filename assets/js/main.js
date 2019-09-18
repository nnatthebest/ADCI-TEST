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
  $('.slider-photos').slick();
})