var main = function() {
    
    var eventList = [];
    for(var i = 0; i < window.festivals.length; ++i) {
       var thisEvent = JSON.parse(window.festivals[i]._rawJSON);
       eventList.push(thisEvent);
    }

    //sort alphabetically
    eventList.sort(function (e1, e2) {
        return (e1.eventName).localeCompare(e2.eventName);
    });
        
    //sort by start date
    eventList.sort(function (e1, e2) {
        e1StartDate = new Date(e1.startDate);
        e2StartDate = new Date(e2.startDate);
        if (e1StartDate < e2StartDate) {
            return -1;
        } else if (e2StartDate < e1StartDate) {
            return 1;
        } else {
            return 0;
        }
    });

    var now = new Date();
    for(var i = 0; i < eventList.length; ++i) {
        var className = "";
        
        //event temporality
        //Note: event dates exclude Time Zone
        //Note: Use of Date constructor with timestring argument is not encouraged
        if (new Date(eventList[i].endDate) >= now) {
            className += " gcm-upcoming-listing ";
        }

        //event type
        if(eventList[i].radio_button === "festival-radio-button") {
            className += " gc-festival-listing ";
        } else if (eventList[i].radio_button === "competition-radio-button") {
            className += " gc-competition-listing ";
        } else if (eventList[i].radio_button === "festival-competition-radio-button") {
            className += " gc-festival-listing gc-competition-listing ";
        } else {
            className += " gc-workshop-listing ";
        }
        
        var startDateStr = new Date(eventList[i].startDate).toDateString().substring(4); //substr removes day of week
        var endDateStr = new Date(eventList[i].endDate).toDateString().substring(4);

        className += " gc-event-listing ";
        $("#gcm-FAF-tbody").append("<tr class=\"" + className + "\"><td><a href=\"/festivals/" + eventList[i].eventName + "\">" + eventList[i].eventName + "</a></td><td>" + startDateStr + "</td><td>" + endDateStr + "</td></tr>");
    }
    
    $(".gc-event-listing").hide();
    var e;
    for (e of $(".gcm-upcoming-listing")) {
        e.classList.add("gcm-eventDate-active");
    }
    for (e of $(".gc-event-listing")) {
        e.classList.add("gcm-eventType-active");
    }
    $(".gcm-eventType-active.gcm-eventDate-active").show();
    
    //Event Type filter
    $("#gcm-event-type-all-option").click(function () {
        for (var e of $(".gc-event-listing")) {
            e.classList.add("gcm-eventType-active");
        }
        $(".gcm-eventType-active.gcm-eventDate-active").show();
    });

    $('#gcm-event-type-festival-option').click(function () {
        $(".gc-event-listing").hide();
        for (var e of $(".gc-event-listing")) {
            e.classList.remove("gcm-eventType-active");
        }
        for (var e of $(".gc-festival-listing")) {
            e.classList.add("gcm-eventType-active");
        }
        $(".gcm-eventType-active.gcm-eventDate-active").show();
    });

    $('#gcm-event-type-competition-option').click(function () {
        $(".gc-event-listing").hide();
        for (var e of $(".gc-event-listing")) {
            e.classList.remove("gcm-eventType-active");
        }
        for (var e of $(".gc-competition-listing")) {
            e.classList.add("gcm-eventType-active");
        }
        $(".gcm-eventType-active.gcm-eventDate-active").show();
    });
    
    $('#gcm-event-type-workshop-option').click(function () {
        $(".gc-event-listing").hide();
        for (var e of $(".gc-event-listing")) {
            e.classList.remove("gcm-eventType-active");
        }
        for (var e of $(".gc-workshop-listing")) {
            e.classList.add("gcm-eventType-active");
        }
        $(".gcm-eventType-active.gcm-eventDate-active").show();
    });

    //All or New Events Filter
    $("#gcm-all-events-temporal-option").click(function () {
        for (var e of $(".gc-event-listing")) {
            e.classList.add("gcm-eventDate-active")
        };
        $(".gcm-eventType-active.gcm-eventDate-active").show();
    });

    $("#gcm-upcoming-events-option").click(function () {
        $(".gc-event-listing").hide();
        for (var e of $(".gc-event-listing")) {
            e.classList.remove("gcm-eventDate-active");
        }
        for (var e of $(".gcm-upcoming-listing")) {
            e.classList.add("gcm-eventDate-active")
        };
        $(".gcm-eventType-active.gcm-eventDate-active").show();
    });


};

var selectEventType = function(value) {
    $(".gc-event-listing").hide();
    var e;
    for (e of $(".gc-event-listing")) {
        e.classList.remove("gcm-eventType-active");
    }
    if (value==="festival") {
        for (e of $(".gc-festival-listing")) {
            e.classList.add("gcm-eventType-active");
        }
    } else if (value==="competition") {
        for (e of $(".gc-competition-listing")) {
            e.classList.add("gcm-eventType-active");
        }
    } else if (value==="workshop") {
        for (e of $(".gc-workshop-listing")) {
            e.classList.add("gcm-eventType-active");
        }
    } else if (value==="All") {
        for (e of $(".gc-event-listing")) {
            e.classList.add("gcm-eventType-active");
        }
    } else {
        alert(value);
    }
    $(".gcm-eventType-active.gcm-eventDate-active").show();
};



var selectEventsAllOrNew = function (value) {
    $(".gc-event-listing").hide();
    var e;
    for (e of $(".gc-event-listing")) {
        e.classList.remove("gcm-eventDate-active");
    }
    if (value === "upcoming") {
        for (e of $(".gcm-upcoming-listing")) {
            e.classList.add("gcm-eventDate-active");
        }
    } else if (value === "all") {
        for (e of $(".gc-event-listing")) {
            e.classList.add("gcm-eventDate-active");
        }
    } else {
        alert(value);
    }
    $(".gcm-eventDate-active.gcm-eventType-active").show();
};

$(document).ready(main);
