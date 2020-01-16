$(document).ready(function(){
    $('.slick_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });
    $('.slick_slider_two').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        prevArrow: $('.prev_happy_clients'),
        nextArrow: $('.next_happy_clients'),
});
})
