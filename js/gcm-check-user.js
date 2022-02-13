var main = function() {
   
    if(!(window.user === undefined)) {
        $('.gcm-login-link').text(window.user.firstName);
        $('.gcm-login-link').attr('href', '/myEvents.html');
        $('.gcm-logout').show();

        if(window.user.accountType['tag'] === 'Native'
            && window.user.accountType['contents'] !== true) {
            $('.gcm-list-your-own-link').attr('href', '/verify.html');
        }
    }
    else {
        $('.gcm-list-your-own-link').attr('href', '/login.html');
    }
};

$(document).ready(main);
