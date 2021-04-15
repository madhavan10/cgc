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

        className += " gc-event-listing ";
        $("#gc-festival-list").append("<div class=\"" + className + "\"><a href=\"/festivals/" + eventList[i].eventName + "\">" + eventList[i].eventName + "</a></div>");
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
