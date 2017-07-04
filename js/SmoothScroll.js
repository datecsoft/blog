$(document).ready(function() {
    $('.menu-item').click(function(e){
        
        var linkhref = $(this).find("a").attr("href");
        

        $('html, body').stop().animate({
        	scrollTop:$(linkhref).offset().top
        	        }, 1500, 'easeInOutExpo');

        e.preventDefault();

    });

$('#gotop').click(function(e){
	var linkhref = $(this).attr("href");
  $('html,body').stop().animate({
        	scrollTop:$(linkhref).offset().top
        	        }, 1500, 'easeInOutExpo');

        e.preventDefault();
});

jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop()>0)
     {
      jQuery('#gotop').fadeIn();  
     }

    else
     {
      jQuery('#gotop').fadeOut();
     }
 });

});