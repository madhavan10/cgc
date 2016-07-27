var main = function() {
   var info = JSON.parse(festival._rawJSON);
    
   $('#gc-festival-name').text(info.eventName);
    
    $('#town').text(info.eventCity);
    $('#country').text(info.eventCountry);
    
    var monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
    
    var startMonth = monthNames[new Date(info.startDate).getMonth()];
    var startDate = new Date(info.startDate).getDay();
    var startYear = new Date(info.startDate).getYear();
    
    var endMonth = monthNames[new Date(info.endDate).getMonth()];
    var endDate = new Date(info.endDate).getDay(); 
    var endYear = new Date(info.endDate).getYear();

    $('#startMonth').text(startMonth);
    $('#startDate').text(startDate);
    $('#startYear').text(startYear);
    $('#endMonth').text(endMonth);
    $('#endDate').text(endDate);
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
