var main = function() {
   var info = JSON.parse(festival._rawJSON);
    
   $('#gc-festival-name').text(info.eventName);
    
    $('#town').text(info.eventCity);
    $('#country').text(info.eventCountry);
    
    var monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
    
    var startMonth = monthNames[new Date(info.startDate).getMonth()];
    var startDay = new Date(info.startDate).getDate();
    var startYear = (new Date(info.startDate).getYear()) + 1900;
    
    var endMonth = monthNames[new Date(info.endDate).getMonth()];
    var endDay = new Date(info.endDate).getDate(); 
    var endYear = (new Date(info.endDate).getYear()) + 1900;

    $('#startMonth').text(startMonth);
    $('#startDate').text(startDay);
    $('#startYear').text(startYear);
    $('#endMonth').text(endMonth);
    $('#endDate').text(endDay);
    $('#endYear').text(endYear);
    
    $('#gc-description-text').text(info.eventDescription);

    $('#schedule-content').text(info.schedule);
    $('#guests-content').text(info.guestList);
    $('#masterclasses-content').text(info.masterclassTeachers 
            + info.masterclassPricing);
    
    $('#competition-content').text(info.competitionRules
            + info.prizes
            + info.jury);
    
    //competition.html
    $('#rules-content').text(info.competitionRules);
    $('#prizes-content').text(info.prizes);
    $('#jury-content').text(info.jury);

    //workshop.html
    $('#teachers-content').text(info.workshopTeachers);
    $('#lessons-content').text(info.workshopLessons);
    $('#other-guests-content').text(info.workshopOtherGuests);


    $('#practical-info-content').text(info.eventFees
            + info.venueAddresses
            + info.accommodation
            + info.travelInfo
            + info.otherFacilities);
    $('#contact-content').text(info.contactInformation);
    $('#register-content').text(info.howToRegister);

            
};

$(document).ready(main);
