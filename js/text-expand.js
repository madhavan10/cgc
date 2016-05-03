var main = function () {

    $('.description').click(function() {
        if($(this).data('open')) {
            $(this).animate({height:'200px'});
            $(this).data('open', 0);
        }

        else {
            $(this).animate({height:'100%'});
            $(this).data('open', 1);
        }
    });

};


$(document).ready(main);
