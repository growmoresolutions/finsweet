// Testimonial Slider

$('.testimonial-slider').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    nav:true,
    dots:false
})

// Accordian

$(document).ready(function(){
  $('.accordion-list > li > .accordion-answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".accordion-answer").slideUp();
    } else {
      $(".accordion-list > li.active .accordion-answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".accordion-answer").slideDown();
    }
    return false;
  });
  
});

// menu icon

$('#vs-mo-menu-icon').click(function(){
    $(this).toggleClass('open');
});