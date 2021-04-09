var main = function () {
    $(".gcm-section-toggleable-content").hide();
    
    //inital view - description text is open
    $("#gcm-description-text-header")[0].classList.add("gcm-active");
    $("#gcm-description-text-content").show();

    $("#gcm-description-text-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-description-text-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-description-text-content").show();
        }
    });
};

$(document).ready(main);
