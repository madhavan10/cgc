var main = function() {
   if(!(window.user === undefined)) {
        $('#gc-login-link').text(window.user.firstName);
        $("[href='festivalRegistration.html']").attr("href", "login.html");
   }
};

$(document).ready(main);
