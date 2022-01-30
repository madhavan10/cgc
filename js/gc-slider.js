var main = function() {

    $('.gc-slide').hide();
    $('.gc-slide').first().addClass('gc-active-slide');
    $('.gc-active-slide').show();

    var slide = function() {
        var nextSlide = $('.gc-active-slide').next();
        if(nextSlide.length === 0)
            nextSlide = $('.gc-slide').first();
        $('.gc-active-slide').fadeOut(1100).removeClass('gc-active-slide');
        nextSlide.fadeIn(1100).addClass('gc-active-slide');
    };

    setInterval(slide, 6000);
    
    //TODO
    $('#gc-left-slide-arrow').click(function() {
        var prevSlide = $('.gc-active-slide').prev();
        if(prevSlide.length === 0) {
            prevSlide = $('.gc-slide').last();
        }
        $('.gc-active-slide').hide().removeClass('gc-active-slide');
        prevSlide.show().addClass('gc-active-slide');
    });
    //TODO
    $('#gc-right-slide-arrow').click(function() {
        var nextSlide = $('.gc-active-slide').next();
        if(nextSlide.length === 0) {
            nextSlide = $('.gc-slide').first();
        }
        $('.gc-active-slide').hide().removeClass('gc-active-slide');
        nextSlide.show().addClass('gc-active-slide');
    });
};

$(document).ready(main);


