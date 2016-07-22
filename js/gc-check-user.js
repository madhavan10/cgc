var main = function() {
   if(!(window.user === undefined)) {
        $('#gc-login-link').text(window.user.firstName);
        $('#gc-list-your-own-link').attr('href', "login.html");
   }
};

$(document).ready(main);
