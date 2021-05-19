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
