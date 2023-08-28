$(function(){

    $('.skill-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    centerMode: true,
    variableWidth: true,
    dots: true,
    });

    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
    
    
});

new WOW().init();

if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){new WOW().init();}

