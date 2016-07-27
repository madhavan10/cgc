var main = function() {

    $('.main-info-content').hide();
    $('#schedule-content').show();

    $('.main-info-nav').click(function() {
        $('.main-info-nav').removeClass('active');
        $(this).addClass('active');        
    });

    $('#schedule').click(function() {
        $('.main-info-content').hide();
        $('#schedule-content').show();
    });

    $('#guests').click(function() {
        $('.main-info-content').hide();
        $('#guests-content').show();
    });

    $('#masterclasses').click(function() {
        $('.main-info-content').hide();
        $('#masterclasses-content').show();
    });
    
    $('#competition').click(function() {
        $('.main-info-content').hide();
        $('#competition-content').show();
    });
    
    $('#practical-info').click(function() {
        $('.main-info-content').hide();
        $('#practical-info-content').show();
    });
    
    $('#contact').click(function() {
        $('.main-info-content').hide();
        $('#contact-content').show();
    });
    
    $('#news').click(function() {
        $('.main-info-content').hide();
        $('#news-content').show();
    });
    
    $('#register').click(function() {
        $('.main-info-content').hide();
        $('#register-content').show();
    });
    
    //workshop
    $('#teachers').click(function() {
        $('.main-info-content').hide();
        $('#teachers-content').show();
    });
    
    $('#lessons').click(function() {
        $('.main-info-content').hide();
        $('#lessons-content').show();
    });
    
    $('#other-guests').click(function() {
        $('.main-info-content').hide();
        $('#other-guests-content').show();
    });
    
    $('#workshop-meals').click(function() {
        $('.main-info-content').hide();
        $('#workshop-meals-content').show();
    });
    
    $('#workshop-accommodation').click(function() {
        $('.main-info-content').hide();
        $('#workshop-accommodation-content').show();
    });
    
    $('#practice-facilities').click(function() {
        $('.main-info-content').hide();
        $('#practice-facilities-content').show();
    });
    
    //competition
    $('#rules').click(function() {
        $('.main-info-content').hide();
        $('#rules-content').show();
    });
    
    $('#jury').click(function() {
        $('.main-info-content').hide();
        $('#jury-content').show();
    });
    
    $('#prizes').click(function() {
        $('.main-info-content').hide();
        $('#prizes-content').show();
    });
};


$(document).ready(main);
