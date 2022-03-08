var main = function() {
    
    $(".gcm-submenu")[0].classList.add("gcm-submenu-description-page");

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
    
    //duplicate code?
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
    
    if(info.masterclass === 'undefined' || info.masterclass === 'no-masterclasses-radio') {
        $("#gcm-masterclasses-topic").hide();
        $("#masterclasses").hide();
    }

    if(info.workshopOtherGuests === "") {
        $("#gcm-other-guests-topic").hide();
        $("#other-guests").hide();
    }

    $('#gc-festival-name').text(info.eventName);
    $('#gcm-festival-name').text(info.eventName);
    
    //deprecated
    $('#town').text(info.eventCity);
    $('#gcm-town').text(info.eventCity);
    $('#country').text(info.eventCountry);
    $('#gcm-country').text(info.eventCountry);
    
    //current
    if (info.eventLocation) {
        $('#town').text(info.eventLocation.name);
        $('#gcm-town').text(info.eventLocation.name);
        var country = getCountryFromPlace(info.eventLocation);
        $('#country').text(country);
        $('#gcm-country').text(country);
    }
    
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
    $('#gcm-startMonth').text(startMonth);
    $('#startDate').text(startDay);
    $('#gcm-startDate').text(startDay);
    $('#startYear').text(startYear);
    $('#gcm-startYear').text(startYear);
    $('#endMonth').text(endMonth);
    $('#gcm-endMonth').text(endMonth);
    $('#endDate').text(endDay);
    $('#gcm-endDate').text(endDay);
    $('#endYear').text(endYear);
    $('#gcm-endYear').text(endYear);
    
    $('#gc-description-text').text(info.eventDescription);
    $('#gcm-description-text-content').text(info.eventDescription);

    $('#schedule-content').text(info.schedule);
    $('#gcm-schedule-content').text(info.schedule);
    $('#guests-content').text(info.guestList);
    $('#gcm-guests-content').text(info.guestList);
    $('#masterclasses-teachers-content').text(info.masterclassTeachers); 
    $('#gcm-masterclasses-teachers-content').text(info.masterclassTeachers); 
    $('#masterclasses-pricing-content').text(info.masterclassPricing); 
    $('#gcm-masterclasses-fees-content').text(info.masterclassPricing); 
    
    /*
    $('#competition-content').text(info.competitionRules
            + info.prizes
            + info.jury);
    */
    
    //competition.html
    $('#rules-content').text(info.competitionRules);
    $('#gcm-fc-competition-rules-content').text(info.competitionRules);
    $('#gcm-rules-content').text(info.competitionRules);
    $('#prizes-content').text(info.prizes);
    $('#gcm-fc-competition-prizes-content').text(info.prizes);
    $('#gcm-prizes-content').text(info.prizes);
    $('#jury-content').text(info.jury);
    $('#gcm-fc-competition-jury-content').text(info.jury);
    $('#gcm-jury-content').text(info.jury);

    //workshop.html
    $('#teachers-content').text(info.workshopTeachers);
    $('#gcm-teachers-content').text(info.workshopTeachers);
    $('#lessons-content').text(info.workshopLessons);
    $('#gcm-lessons-content').text(info.workshopLessons);
    $('#other-guests-content').text(info.workshopOtherGuests);
    $('#gcm-other-guests-content').text(info.workshopOtherGuests);
    $('#workshop-meals-content').text(info.workshopMeals);
    $('#gcm-workshop-meals-content').text(info.workshopMeals);
    $('#workshop-accommodation-content').text(info.workshopAccommodation);
    $('#gcm-workshop-accommodation-content').text(info.workshopAccommodation);
    $('#practice-facilities-content').text(info.workshopPracticeFacilities);
    $('#gcm-practice-facilities-content').text(info.workshopPracticeFacilities);


    $('#pi-eventFees-content').text(info.eventFees);
    $('#gcm-pi-event-fees-content').text(info.eventFees);
    $('#pi-venues-content').text(info.venueAddresses === "" ? "No information available" : info.venueAddresses);
    $('#gcm-pi-venue-addresses-content').text(info.venueAddresses === "" ? "No information available" : info.venueAddresses);
    $('#pi-accommodation-content').text(info.accommodation === "" ? "No information available" : info.accommodation);
    $('#gcm-pi-accommodation-content').text(info.accommodation === "" ? "No information available" : info.accommodation);
    $('#pi-travelInfo-content').text(info.travelInfo === "" ? "No information available" : info.travelInfo);
    $('#gcm-pi-travel-info-content').text(info.travelInfo === "" ? "No information available" : info.travelInfo);
    $('#pi-otherFacilities-content').text(info.otherFacilities === "" ? "No information available" : info.otherFacilities);
    $('#gcm-pi-other-facilities-content').text(info.otherFacilities === "" ? "No information available" : info.otherFacilities);
    $('#contact-content').text(info.contactInformation);
    $('#gcm-contact-content').text(info.contactInformation);
    $('#register-content').text(info.howToRegister);
    $('#gcm-register-content').text(info.howToRegister);

            
};

$(document).ready(main);
