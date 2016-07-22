var main = function() {
   if(!(window.user === undefined)) {
        $('#gc-login-link').text(window.user.firstName);
        $('#gc.login-link').attr('href', "login.html");
   }
};

$(document).ready(main);
