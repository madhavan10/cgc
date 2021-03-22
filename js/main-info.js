var main = function() {

    $('.main-info-topic').hide();
    $('#gc-schedule-topic').show();

    $('.main-info-nav').click(function() {
        $('.main-info-nav').removeClass('active');
        $(this).addClass('active');        
    });

    $('#schedule').click(function() {
        $('.main-info-topic').hide();
        $('#gc-schedule-topic').show();
    });

    $('#guests').click(function() {
        $('.main-info-topic').hide();
        $('#gc-guests-topic').show();
    });

    $('#masterclasses').click(function() {
        $('.main-info-topic').hide();
        $('#gc-masterclasses-topic').show();
    });
    
    $('#competition').click(function() {
        $('.main-info-topic').hide();
        $('#gc-rules-topic').show();
        $('#gc-jury-topic').show();
        $('#gc-prizes-topic').show();
    });
    
    $('#practical-info').click(function() {
        $('.main-info-topic').hide();
        $('#gc-practical-information-topic').show();
    });
    
    $('#contact').click(function() {
        $('.main-info-topic').hide();
        $('#gc-contact-topic').show();
    });
    
    $('#news').click(function() {
        $('.main-info-topic').hide();
        $('#gc-news-topic').show();
    });
    
    $('#register').click(function() {
        $('.main-info-topic').hide();
        $('#gc-register-topic').show();
    });
    
    //workshop
    $('#teachers').click(function() {
        $('.main-info-topic').hide();
        $('#gc-teachers-topic').show();
    });
    
    $('#lessons').click(function() {
        $('.main-info-topic').hide();
        $('#gc-lessons-topic').show();
    });
    
    $('#other-guests').click(function() {
        $('.main-info-topic').hide();
        $('#gc-other-guests-topic').show();
    });
    
    $('#workshop-meals').click(function() {
        $('.main-info-topic').hide();
        $('#gc-workshop-meals-topic').show();
    });
    
    $('#workshop-accommodation').click(function() {
        $('.main-info-topic').hide();
        $('#gc-workshop-accommodation-topic').show();
    });
    
    $('#practice-facilities').click(function() {
        $('.main-info-topic').hide();
        $('#gc-practice-facilities-topic').show();
    });
    
    //competition
    $('#rules').click(function() {
        $('.main-info-topic').hide();
        $('#gc-rules-topic').show();
    });
    
    $('#jury').click(function() {
        $('.main-info-topic').hide();
        $('#gc-jury-topic').show();
    });
    
    $('#prizes').click(function() {
        $('.main-info-topic').hide();
        $('#gc-prizes-topic').show();
    });
};


$(document).ready(main);
