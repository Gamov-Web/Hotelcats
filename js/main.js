$(document).ready(function() {
   $('.rooms__slider').slick({
        dots: true,
        fade: true,
        autoplay: 3000,
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
});

