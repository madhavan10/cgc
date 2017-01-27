var main = function() {
    
    var arrayOfNames = [];
    for(var i = 0; i < window.festivals.length; ++i) {
       var thisEvent = JSON.parse(window.festivals[i]._rawJSON);
       arrayOfNames.push(thisEvent.eventName);
    }
    for(var i = 0; i < arrayOfNames.length; ++i) {
        $(".gc-find-a-festival").append("<div><a href=\"/festivals/" + arrayOfNames[i] + "\">" + arrayOfNames[i] + "</a></div>");
    }
}
$(document).ready(main);
