var main = function() {
   
    $('#gcm-logout').hide();

    if(!(window.user === undefined)) {
        $('#gcm-login-link').text(window.user.firstName);
        $('#gcm-login-link').attr('href', '/myEvents.html');
        $('#gcm-logout').show();
    }
    else {
        $('#gcm-list-your-own-link').attr('href', '/login.html');
    }
};

$(document).ready(main);
