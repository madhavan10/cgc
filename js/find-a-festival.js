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
    for(var i = 0; i < eventList.length; ++i) {
        var className;
        if(eventList[i].radio_button === "festival-radio-button") {
            className = "gc-festival-listing gc-event-listing";
        } else if (eventList[i].radio_button === "competition-radio-button") {
            className = "gc-competition-listing gc-event-listing";
        } else if (eventList[i].radio_button === "festival-competition-radio-button") {
            className = "gc-festival-listing gc-competition-listing gc-event-listing";
        } else {
            className = "gc-workshop-listing gc-event-listing";
        }
        $("#gc-festival-list").append("<div class=\"" + className + "\"><a href=\"/festivals/" + eventList[i].eventName + "\">" + eventList[i].eventName + "</a></div>");
    }
};

var selectEventType = function(value) {
    if (value==="festival") {
        $(".gc-event-listing").hide();
        $(".gc-festival-listing").show();
    } else if (value==="competition") {
        $(".gc-event-listing").hide();
        $(".gc-competition-listing").show();
    } else if (value==="workshop") {
        $(".gc-event-listing").hide();
        $(".gc-workshop-listing").show();
    } else if (value==="All") {
        $(".gc-event-listing").show();
    } else {
        alert(value);
    }
};

$(document).ready(main);
