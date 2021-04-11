var main = function () {
    $(".gcm-section-toggleable-content").hide();
    $(".gcm-subtopic-list").hide();
    $(".gcm-subtopic-content").hide();
    
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

    $("#gcm-schedule-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-schedule-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-schedule-content").show();
        }
    });

    $("#gcm-guests-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-guests-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-guests-content").show();
        }
    });

    $("#gcm-masterclasses-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-masterclasses-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-masterclasses-content").show();
        }
    });

    $("#gcm-masterclasses-teachers-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-masterclasses-teachers-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-masterclasses-teachers-content").show();
        }
    });

    $("#gcm-masterclasses-fees-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-masterclasses-fees-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-masterclasses-fees-content").show();
        }
    });

    $("#gcm-competition-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-competition-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-competition-content").show();
        }
    });

    $("#gcm-fc-competition-rules-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-fc-competition-rules-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-fc-competition-rules-content").show();
        }
    });

    $("#gcm-fc-competition-prizes-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-fc-competition-prizes-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-fc-competition-prizes-content").show();
        }
    });

    $("#gcm-fc-competition-jury-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-fc-competition-jury-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-fc-competition-jury-content").show();
        }
    });

    $("#gcm-rules-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-rules-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-rules-content").show();
        }
    });

    $("#gcm-prizes-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-prizes-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-prizes-content").show();
        }
    });

    $("#gcm-jury-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-jury-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-jury-content").show();
        }
    });

    $("#gcm-teachers-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-teachers-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-teachers-content").show();
        }
    });

    $("#gcm-lessons-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-lessons-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-lessons-content").show();
        }
    });

    $("#gcm-other-guests-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-other-guests-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-other-guests-content").show();
        }
    });

    $("#gcm-workshop-meals-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-workshop-meals-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-workshop-meals-content").show();
        }
    });

    $("#gcm-workshop-accommodation-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-workshop-accommodation-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-workshop-accommodation-content").show();
        }
    });

    $("#gcm-practice-facilities-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-practice-facilities-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-practice-facilities-content").show();
        }
    });

    $("#gcm-practical-info-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-practical-info-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-practical-info-content").show();
        }
    });

    $("#gcm-pi-event-fees-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-pi-event-fees-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-pi-event-fees-content").show();
        }
    });

    $("#gcm-pi-venue-addresses-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-pi-venue-addresses-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-pi-venue-addresses-content").show();
        }
    });

    $("#gcm-pi-accommodation-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-pi-accommodation-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-pi-accommodation-content").show();
        }
    });

    $("#gcm-pi-travel-info-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-pi-travel-info-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-pi-travel-info-content").show();
        }
    });

    $("#gcm-pi-other-facilities-subtopic-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-pi-other-facilities-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-pi-other-facilities-content").show();
        }
    });

    $("#gcm-contact-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-contact-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-contact-content").show();
        }
    });

    $("#gcm-news-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-news-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-news-content").show();
        }
    });

    $("#gcm-register-header").click(function () {
        if (this.classList.contains("gcm-active")) {
            this.classList.remove("gcm-active");
            $("#gcm-register-content").hide();
        } else {
            this.classList.add("gcm-active");
            $("#gcm-register-content").show();
        }
    });
};

$(document).ready(main);
