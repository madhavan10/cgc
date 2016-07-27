var main = function() {
   var info = JSON.parse(festival._rawJSON);
    
   $('#gc-festival-name').text(info.eventName);
    
    $('#town').text(info.eventCity);
    $('#country').text(info.eventCountry);
    
    var month = new Date(info.startDate).getMonth();
    var startDate = new Date(info.startDate).getDay();
    var endDate = new Date(info.endDate).getDay(); 
    var year = new Date(info.startDate).getYear();
    $('#month').text(month);
    $('#date').text(starDate + "-" + endDate);
    $('#year').text(year);
    
    $('#gc-description-text').text(info.eventDescription);

    $('#schedule-content').text(info.schedule);
    $('#guests-content').text(info.guestList);
    $('#masterclasses-content').text(info.masterclassTeachers + "<br><br>" 
            + info.masterclassPricing);
    
    $('#competition-content').text(info.competitionRules + "<br><br>" 
            + info.prizes + "<br><br>" 
            + info.jury);
    
    //competition.html
    $('#rules-content').text(info.competitionRules);
    $('#prizes-content').text(info.prizes);
    $('#jury-content').text(info.jury);

    //workshop.html
    $('#teachers-content').text(info.workshopTeachers);
    $('#lessons-content').text(info.workshopLessons);
    $('#other-guests-content').text(info.workshopOtherGuests);


    $('#practical-info-content').text(info.eventFees + "<br><br>"
            + info.venueAddresses + "<br><br>"
            + info.accomodation + "<br><br>"
            + info.travelInfo + "<br><br>"
            + info.otherFacilities);
    $('#contact-content').text(info.contactInformation);
    $('#register-content').text(info.howToRegister);

            
};

$(document).ready(main);
