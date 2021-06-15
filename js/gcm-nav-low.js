var main = function () {
    if (window.location.href.endsWith("index.html")) {
        $("#gcm-nav-low-calendar")[0].classList.add("gcm-nav-low-active");
    } else if (window.location.href.endsWith("map.html")) {
        $("#gcm-nav-low-map")[0].classList.add("gcm-nav-low-active");
    } else if (window.location.href.endsWith("findAFestival.html")) {
        $("#gcm-nav-low-list")[0].classList.add("gcm-nav-low-active");
    }
};
$(document).ready(main);
