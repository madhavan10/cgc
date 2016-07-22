var main = function() {
   if(!(user === undefined)) {
        $('#gc-login-link').text(user.firstName);
   }
};

$(document).ready(main);
