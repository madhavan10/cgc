var main = function() {
    $("fieldset").hide();
    $("#event-basics").show();
    $("#practical-information-questions").show();
    $("#event-photo").show();
    $(".gc-event-radio").click(function() {
        if($("#festival-radio-button").is(":checked")) {
            $(".gc-event-questions").hide();
            $(".gc-required-question").prop("required", false);
            $("#festival-questions").show();
            $(".f-required").prop("required", true);
            $(".pi-required").prop("required", true);
        }
        
        if($("#competition-radio-button").is(":checked")) {
            $(".gc-event-questions").hide();   
            $(".gc-required-question").prop("required", false);
            $("#competition-questions").show();
            $(".c-required").prop("required", true);
            $(".pi-required").prop("required", true);
        }
        
        if($("#festival-competition-radio-button").is(":checked")) {
            $(".gc-event-questions").hide();   
            $(".gc-required-question").prop("required", false);
            $("#festival-questions").show();
            $(".f-required").prop("required", true);
            $("#competition-questions").show();
            $(".c-required").prop("required", true);
            $(".pi-required").prop("required", true);
        }

        if($("#workshop-radio-button").is(":checked")) {
            $(".gc-event-questions").hide();
            $(".gc-required-question").prop("required", false);
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
        $(".mc-required").prop("required", false);
    });

    // default view, clicking once doesn't work.
    // possibly because not using $('input[name='...']).click(function...) for radio button click handler
    $("#festival-radio-button").click();
    $("#festival-radio-button").click();
};

function submitFestivalRegistrationForm() {

    //first check dates non-empty
    var start_date = $('#datetimepicker1')[0].children[0].value;
    var end_date = $('#datetimepicker2')[0].children[0].value;
    if (start_date === "" || end_date === "") {
        alert("Please fill-in one or more required fields");
        return;
    }

    //check required fields filled-in (except dates)
    var requiredInputs = $(":input[required][id!=gc-dateTP1-input][id!=gc-dateTP2-input]");
    var foundMissingInput = false;
    for (i = 0; i < requiredInputs.length; i++) {
        if (requiredInputs[i].value === "") { //only for <input type = "text"> or <textarea>
            foundMissingInput = true;
        }
    }
    if (foundMissingInput === true) {
        alert("Please fill-in one or more required fields");
        return;
    }
    
    /* only some needed
    var encodingMap = {
        //see https://en.wikipedia.org/wiki/Percent-encoding
        "!":"%21", "#":"%23", "$":"%24", "%":"%25", "&":"%26", "'":"%27",
        "(":"%28", ")":"%29", "*":"%2A", "+":"%2B", ",":"%2C", "/":"%2F",
        ":":"%3A", ";":"%3B", "=":"%3D", "?":"%3F", "@":"%40", "[":"%5B",
        "]":"%5D", "\n":"%0A", " ":"_", "\"":"%22", "\\":"%5C", ".":"%2E",
        "<":"%3C", ">":"%3E", "`":"%60", "{":"%7B", "|":"%7C", "}":"%7D" 
    };
    */
    //generate URISafeName for event
    var encodingMap = {" " : "_", "\"" : "^", "/" : "^O", "#" : "^H", "?" : "^Q", "%" : "^P"};
    var event_name = $("#event-name").val();
    var URI_safe_name = "";
    for(c of event_name) {
        if(c in encodingMap) {
            URI_safe_name += encodingMap[c];
        } else {
            URI_safe_name += c;
        }
    }
    URI_safe_name += start_date.substring(6, 10); //add year

    var masterclass_radio = $('input[name=whether-masterclasses]:checked')[0];
    var toSend = {
        radio_button : $('input[name=eventType]:checked')[0].id,
        eventName : event_name,
        URISafeName: URI_safe_name,
        startDate : $('#datetimepicker1')[0].children[0].value,
        endDate : $('#datetimepicker2')[0].children[0].value,
        /* Simply using eventLocation
        eventCountry : $('#event-country').val(),
        eventCity : $('#event-city').val(),
        */
        eventLocation: place, //from place-autocomplete script
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
      window.location.href = "/festivals/" + URI_safe_name;
  }).fail(function(error) {
      var userResponse;
      if(error.responseText == "You must verify your email address to register an event.") {
          userResponse = confirm(error.responseText + " Go to email verification page now?");
          if(userResponse === true)
              window.location.href = "/verify.html";
      } else if(error.responseText == "You must login to register an event.") {
          userReponse = confirm(error.responseText + " Go to login page now?");
          if(userResponse === true)
              window.location.href = "/login.html";
      } else {
          alert(error.responseText);
      }
  });
  return false;
}

$(document).ready(main);
