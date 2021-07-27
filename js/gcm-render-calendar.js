
var cgcEvents = [];
var cgcFestivals = [];
var cgcCompetitions = [];
var cgcWorkshops = [];
var calendarElt = document.getElementById("calendar");
var calendar = new FullCalendar.Calendar(calendarElt, {
    initialView: "dayGridMonth",
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth, dayGridWeek"
    },
    fixedWeekCount: false
    
});

document.addEventListener('DOMContentLoaded', function() {
    var getNextDate = function (aDateString) {
        var nextDate = new Date(aDateString); 
        nextDate.setDate(nextDate.getDate() + 1);
        var months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        var nd_month_str = months[nextDate.getMonth()];
        var nd_day = nextDate.getDate();
        var nd_day_str;
        if (nd_day < 10) {
            nd_day_str = "0" + nd_day;
        } else {
            nd_day_str = "" + nd_day;
        }
        var nd_year = nextDate.getFullYear();
        return nd_month_str + "/" + nd_day_str + "/" + nd_year; 
    };
    //getting events
    for(var i = 0; i < window.festivals.length; i++) {
        var thisEvent = JSON.parse(window.festivals[i]._rawJSON);
        var thisEventType;
        var thisCalendarEvent = {
            title: thisEvent.eventName,
            start: Date.parse(thisEvent.startDate),
            end: Date.parse(getNextDate(thisEvent.endDate)), //end-date is exclusive
            allDay: true,
            //temporary url
            url: "/festivals/" + thisEvent.eventName,
            backgroundColor: "#031C42",
            borderColor: "#ffffff"
        };
        cgcEvents.push(thisCalendarEvent);
        if (thisEvent.radio_button === "festival-radio-button") {
            cgcFestivals.push(thisCalendarEvent);
            thisCalendarEvent.backgroundColor = "#031C42";
            thisCalendarEvent.borderColor = "#031C42";
        } else if (thisEvent.radio_button === "festival-competition-radio-button") {
            cgcFestivals.push(thisCalendarEvent);
            cgcCompetitions.push(thisCalendarEvent);
            thisCalendarEvent.backgroundColor = "#344479";
            thisCalendarEvent.borderColor = "#344479";
        } else if (thisEvent.radio_button === "competition-radio-button") {
            cgcCompetitions.push(thisCalendarEvent);
            thisCalendarEvent.backgroundColor = "#A82428";
            thisCalendarEvent.borderColor = "#A82428";
        } else if (thisEvent.radio_button === "workshop-radio-button") {
            cgcWorkshops.push(thisCalendarEvent);
            thisCalendarEvent.backgroundColor = "#38807C";
            thisCalendarEvent.borderColor = "#38807C";
        }
    }
    calendar.addEventSource(cgcEvents);
    calendar.render();
    var resizeCondition = window.matchMedia("(max-width: 640px)");
    if (resizeCondition.matches) {
        calendar.setOption("height", 570);
    }
    resizeCondition.addListener(function () {
        calendar.setOption("height", 570);
    });
});
