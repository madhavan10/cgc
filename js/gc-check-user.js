var main = function() {
   if(!(user === undefined)) {
        $('#login').text(user.firstName);
   }
};

$(document).ready(main);
