var main = function() {
   
    $('#gc-logout').hide();

    if(!(window.user === undefined)) {
        $('#gc-login-link').text(window.user.firstName);
        $('#gc-logout').show();
    }
    else {
        $('#gc-list-your-own-link').attr('href', 'login.html');
    }
};

$(document).ready(main);
