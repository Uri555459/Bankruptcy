$(document).ready(function () {

    $('.header-slider').slick({
        dots: true,
        prevArrow: $('.header__slider-prev'),
        nextArrow: $('.header__slider-nex')
    });

    $('.time-slider').slick({
        dots: false,
        prevArrow: $('.time__slider-prev'),
        nextArrow: $('.time__slider-nex')
    });


    $('.profesional-slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.profesional__slider-prev'),
        nextArrow: $('.profesional__slider-nex')
    });


});