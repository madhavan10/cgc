var main = function() {
   if(!(window.user === undefined)) {
        $('#gc-login-link').text(window.user.firstName);
   }
};

$(document).ready(main);
