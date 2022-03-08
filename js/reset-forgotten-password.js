var main = function () {
    var pathname = window.location.pathname;
    var tokenString = window.location.search;
    var expectedStartStr = "?token=";
    if (pathname === "/resetpassword" && tokenString.startsWith(expectedStartStr)) {
        tokenString = tokenString.substring(expectedStartStr.length);
    } else {
        tokenString = "";
        alert("Invalid token");
    }
    document.getElementById("reset-password-token").value = tokenString;
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
