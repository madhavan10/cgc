var calendarSelectEventType = function (value) {
    calendar.removeAllEventSources();
    if (value === "all")
        calendar.addEventSource(cgcEvents);
    else if (value === "festival")
        calendar.addEventSource(cgcFestivals);
    else if (value === "competition")
        calendar.addEventSource(cgcCompetitions);
    else if (value === "workshop")
        calendar.addEventSource(cgcWorkshops);
};

var main = function() {
    $('#gcm-event-filter-all-option').click(function () {
        calendar.removeAllEventSources();
        calendar.addEventSource(cgcEvents);
    });

    $('#gcm-event-filter-festival-option').click(function () {
        calendar.removeAllEventSources();
        calendar.addEventSource(cgcFestivals);
    });

    $('#gcm-event-filter-competition-option').click(function () {
        calendar.removeAllEventSources();
        calendar.addEventSource(cgcCompetitions);
    });

    $('#gcm-event-filter-workshop-option').click(function () {
        calendar.removeAllEventSources();
        calendar.addEventSource(cgcWorkshops);
    });
};
$(document).ready(main);
