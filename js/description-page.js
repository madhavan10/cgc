var main = function() {
    
    var info = JSON.parse(festival._rawJSON);
     
    if(info.radio_button === 'festival-radio-button') {
        $('.workshop-nav').hide();
        $('.competition-nav').hide();
        $('.fc-nav').hide();
        $('.festival-nav').show();
    }
    
    if(info.radio_button === 'competition-radio-button') {
        $('.workshop-nav').hide();
        $('.fc-nav').hide();
        $('.festival-nav').hide();
        $('.competition-nav').show();
    }
    
    if(info.radio_button === 'workshop-radio-button') {
        $('.fc-nav').hide();
        $('.festival-nav').hide();
        $('.competition-nav').hide();
        $('.workshop-nav').show();
    }
    
    if(info.radio_button === 'workshop-radio-button') {
        $('.fc-nav').hide();
        $('.festival-nav').hide();
        $('.competition-nav').hide();
        $('.workshop-nav').show();
    }
    
    if(info.radio_button === 'festival-competition-radio-button') {
        $('.festival-nav').hide();
        $('.competition-nav').hide();
        $('.workshop-nav').hide();
        $('.fc-nav').show();
    }
    
    $('#gc-festival-name').text(info.eventName);
    
    $('#town').text(info.eventCity);
    $('#country').text(info.eventCountry);
    
    var monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
    
    //Note: Use of Date constructor with timestring argument is not encouraged
    var startMonth = monthNames[new Date(info.startDate).getMonth()];
    var startDay = new Date(info.startDate).getDate(); 
    var startYear = new Date(info.startDate).getFullYear();
    
    var endMonth = monthNames[new Date(info.endDate).getMonth()];
    var endDay = new Date(info.endDate).getDate(); 
    var endYear = new Date(info.endDate).getFullYear();

    $('#startMonth').text(startMonth);
    $('#startDate').text(startDay);
    $('#startYear').text(startYear);
    $('#endMonth').text(endMonth);
    $('#endDate').text(endDay);
    $('#endYear').text(endYear);
    
    $('#gc-description-text').text(info.eventDescription);

    $('#schedule-content').text(info.schedule);
    $('#guests-content').text(info.guestList);
    $('#masterclasses-teachers-content').text(info.masterclassTeachers); 
    $('#masterclasses-pricing-content').text(info.masterclassPricing); 
    
    /*
    $('#competition-content').text(info.competitionRules
            + info.prizes
            + info.jury);
    */
    
    //competition.html
    $('#rules-content').text(info.competitionRules);
    $('#prizes-content').text(info.prizes);
    $('#jury-content').text(info.jury);

    //workshop.html
    $('#teachers-content').text(info.workshopTeachers);
    $('#lessons-content').text(info.workshopLessons);
    $('#other-guests-content').text(info.workshopOtherGuests);
    $('#workshop-meals-content').text(info.workshopMeals);
    $('#workshop-accommodation-content').text(info.workshopAccommodation);
    $('#practice-facilities-content').text(info.workshopPracticeFacilities);


    $('#pi-eventFees-content').text(info.eventFees);
    $('#pi-venues-content').text(info.venueAddresses);
    $('#pi-accommodation-content').text(info.accommodation);
    $('#pi-travelInfo-content').text(info.travelInfo);
    $('#pi-otherFacilities-content').text(info.otherFacilities);
    $('#contact-content').text(info.contactInformation);
    $('#register-content').text(info.howToRegister);

            
};

$(document).ready(main);
