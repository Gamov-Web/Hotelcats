$(document).ready(function() {
   $('.rooms__slider').slick({
        dots: true,
        fade: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });

    $('.reviews__slider').slick({
        dots: true,
        infinite: false,
        variableWidth: true,
        prevArrow: $('.slick-prev-new'),
        nextArrow: $('.slick-next-new')
    });

    $('.burger-btn').on('click', function(){
        $('.menu').addClass('active');
    });

    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    });
});

