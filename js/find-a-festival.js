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
            className = "gc-festival-listing";
        } else if (eventList[i].radio_button === "competition-radio-button") {
            className = "gc-competition-listing";
        } else if (eventList[i].radio_button === "festival-competition-radio-button") {
            className = "gc-festival-listing gc-competition-listing";
        } else {
            className = "gc-workshop-listing";
        }
        $(".gc-find-a-festival").append("<div class=\"" + className + "\"><a href=\"/festivals/" + eventList[i].eventName + "\">" + eventList[i].eventName + "</a></div>");
    }
}
$(document).ready(main);
