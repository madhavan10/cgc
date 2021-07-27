var main = function () {
    $("#new-password,#re-enter-new-password").focus(function () {
        $("#passwords-dont-match").hide();
    });
    $("form").on("submit", function (e) {
        var valid = validateForm();
        if (!valid) {
            e.preventDefault();
        }
    });
};

var validateForm = function () {
    var password = document.getElementById("new-password").value;
    var confirmPassword = document.getElementById("re-enter-new-password").value;
    if (password !== confirmPassword) {
        $("#passwords-dont-match").show();
        return false;
    }
    return true;
};

$(document).ready(main);
