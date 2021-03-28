var main = function() {
    $("fieldset").hide();
    $("#event-basics").show();
    $("#practical-information-questions").show();
    $(".gc-event-radio").click(function() {
        if($("#festival-radio-button").is(":checked")) {
            $(".gc-event-questions").hide();
            $(".gc-required-question").removeProp("required");
            $("#festival-questions").show();
            $(".f-required").prop("required", true);
            $(".pi-required").prop("required", true);
        }
        
        if($("#competition-radio-button").is(":checked")) {
            $(".gc-event-questions").hide();   
            $(".gc-required-question").removeProp("required");
            $("#competition-questions").show();
            $(".c-required").prop("required", true);
            $(".pi-required").prop("required", true);
        }
        
        if($("#festival-competition-radio-button").is(":checked")) {
            $(".gc-event-questions").hide();   
            $(".gc-required-question").removeProp("required");
            $("#festival-questions").show();
            $(".f-required").prop("required", true);
            $("#competition-questions").show();
            $(".c-required").prop("required", true);
            $(".pi-required").prop("required", true);
        }

        if($("#workshop-radio-button").is(":checked")) {
            $(".gc-event-questions").hide();
            $(".gc-required-question").removeProp("required");
            $(".workshop-redundant").hide(); //the redundant question isn't req so no action needed
            $("#workshop-questions").show();
            $(".w-required").prop("required", true);
            $(".pi-required").prop("required", true);
        }
    });

    $("#yes-masterclasses-radio").click(function() {
        $("#festival-masterclass-questions").show();
        $(".mc-required").prop("required", true);
    });
    $("#no-masterclasses-radio").click(function() {
        $("#festival-masterclass-questions").hide();
        $(".mc-required").removeProp("required");
    });

    // default view, clicking once doesn't work.
    // possibly because not using $('input[name='...']).click(function...) for radio button click handler
    $("#festival-radio-button").click();
    $("#festival-radio-button").click();
};

function submitFestivalRegistrationForm() {
    var masterclass_radio = $('input[name=whether-masterclasses]:checked')[0];
    var toSend = {
        radio_button : $('input[name=eventType]:checked')[0].id,
        eventName : $('#event-name').val(),
        startDate : $('#datetimepicker1')[0].children[0].value,
        endDate : $('#datetimepicker2')[0].children[0].value,
        eventCountry : $('#event-country').val(),
        eventCity : $('#event-city').val(),
        eventDescription : $('#event-description').val(),
        schedule : $('#schedule').val(),

        // practical information
        eventFees : $('#event-fees').val(),
        howToRegister : $('#how-to-register').val(),
        contactInformation : $('#contact-information').val(),
        venueAddresses : $('#venue-addresses').val(),
        accommodation : $('#accommodation').val(),
        travelInfo : $('#travel-info').val(),
        otherFacilities : $('#other-facilities').val(),

        // festival questions
        guestList : $('#guest-list').val(),
        masterclass : masterclass_radio == undefined ? 'undefined' : masterclass_radio.id,

        // masterclass
        masterclassTeachers : $('#masterclass-teachers').val(),
        masterclassPricing : $('#masterclass-pricing').val(),

        // competition questions
        competitionRules : $('#competition-rules').val(),
        prizes : $('#prizes').val(),
        jury : $('#jury').val(),

        // workshop questions
        workshopTeachers : $('#workshop-teachers').val(),
        workshopAccommodation : $('#workshop-accommodation').val(),
        workshopMeals : $('#workshop-meals').val(),
        workshopPracticeFacilities : $('#workshop-practice-facilities').val(),
        workshopLessons : $('#workshop-lessons').val(),
        workshopOtherGuests : $('#workshop-other-guests').val(),
  };

  $.ajax({
      method: "POST",
      url: "registerFestival",
      data: JSON.stringify(toSend),
      processData: false,
  }).done(function(msg) {
      // TODO redirect to created description page
      alert('posted, returned: ' + msg);
  });
  return false;
}

$(document).ready(main);
