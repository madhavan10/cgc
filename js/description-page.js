var main = function() {
   var info = JSON.parse(festival._rawJSON);
    
   $('#gc-festival-name').text(info.eventName);
    
    $('#town').text(info.eventCity);
    $('#country').text(info.eventCountry);
    
    var month = new Date(info.startDate).getMonth();
    var date = new Date(info.startDate).getDay();
    var year = new Date(info.startDate).getYear();
    $('#month').text(month);
    $('#date').text(date);
    $('#year').text(year);
    
    $('#gc-description-text').text(info.eventDescription);

    $('#schedule-content').text(info.schedule);
    $('#guests-content').text(info.guestList);
    $('#masterclasses-content').text(info.masterclassTeachers + "\n\n" 
            + info.masterclassPricing);
    
    $('#competition-content').text(info.competitionRules + "\n\n" 
            + info.prizes + "\n\n" 
            + info.jury);
    
    //competition.html
    $('#rules-content').text(info.competitionRules);
    $('#prizes-content').text(info.prizes);
    $('#jury-content').text(info.jury);

    //workshop.html
    $('#teachers-content').text(info.workshopTeachers);
    $('#lessons-content').text(info.workshopLessons);
    $('#other-guests-content').text(info.workshopOtherGuests);


    $('#practical-info-content').text(info.eventFees + "\n\n"
            + info.venueAddresses + "\n\n"
            + info.accomodation + "\n\n"
            + info.travelInfo + "\n\n"
            + info.otherFacilities);
    $('#contact-content').text(info.contactInformation);
    $('#register-content').text(info.howToRegister);

            
};

$(document).ready(main);
