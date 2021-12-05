var main = function () {
    $(".gcm-has-submenu").click(function () {
        if (this.classList.contains("gcm-submenu-active")) {
            //this submenu is already open, close it
            this.classList.remove("gcm-submenu-active");
        } else if ($(".gcm-submenu-active").length == 1) {
            //another submenu is open, close it and open this one
            $(".gcm-submenu-active")[0].classList.remove("gcm-submenu-active");
            this.classList.add("gcm-submenu-active");
        } else {
            //open this submenu
            this.classList.add("gcm-submenu-active");
        }
    });
    $(document).click(closeSubmenu);
};

var closeSubmenu = function(e) {
    var menu = $("#faf-menu")[0];
    var isClickInside = menu.contains(e.target);
    if (!isClickInside && $(".gcm-submenu-active").length == 1) {
        $(".gcm-submenu-active")[0].classList.remove("gcm-submenu-active");
    }
};

$(document).ready(main);

