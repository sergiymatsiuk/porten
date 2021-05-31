$(function () {
    $('.header-burger').click(function (){
        $('.header-menu, .header-burger, .header-fake-exit').toggleClass('show');
        $('body').toggleClass('lock')  
    });
});
$(function () {
    $('.header__menu').click(function () {
        $('.header__burger,.header__menu').removeClass('show');
        $('body').removeClass('lock')
    });
})

new Swiper('.swiper-container', {
    loop: true,
    loopedSlides: 4,
    centeredSlides: true,
    slidesPerView: 'auto',
    initialSlide: 3,
    slideToClickedSlide: true,
    grabCursor: true,
})

