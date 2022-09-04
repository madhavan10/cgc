const photoUploadInputId = "event-photo-upload";
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
    
    $("#festival-radio-button").click();

    $("#event-city").change(function() {
        place = null; // place var is from place-autocomplete.js
    });
    
    // ES 2015 syntax used
    $(`#${photoUploadInputId}`).change(handleImageDisplay);

    if (window.festival) {
        loadVarsEditFestival();
    }
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
    
    //check that event city is a valid location according to Google Maps
    if (!place || !place.geometry) {
        var eventCityVal = document.getElementById("event-city").value;
        alert("Event city (" + eventCityVal + ") is not a valid place.");
        document.getElementById("event-city").value = "";
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
    if(window.festival) {
        //edit festival
        URI_safe_name = JSON.parse(window.festival._rawJSON).URISafeName;
    } else {
        //register festival
        for(c of event_name) {
            if(c in encodingMap) {
                URI_safe_name += encodingMap[c];
            } else {
                URI_safe_name += c;
            }
        }
        URI_safe_name += start_date.substring(6, 10); //add year
    }

    var masterclass_radio = $('input[name=whether-masterclasses]:checked')[0];
    var toSend = {
        radio_button : $('input[name=eventType]:checked')[0].id,
        eventName : event_name,
        URISafeName: URI_safe_name,
        startDate : $('#datetimepicker1')[0].children[0].value,
        endDate : $('#datetimepicker2')[0].children[0].value,
        eventCity : $('#event-city').val(),
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
    
    var formSubmitURL;
    if (window.festival)
        formSubmitURL = "/editFestival";
    else
        formSubmitURL = "registerFestival";
    
    //create a form data object to send
    let formData = new FormData();
    formData.append("regular_data", JSON.stringify(toSend));
    if (handleImageDisplay() === true) {
        formData.append("event_photo", document.getElementById(photoUploadInputId).files[0]);
    } else {
        // debug
        alert("Submitting the form without event photo");
    }

    $.ajax({
        method: "POST",
        url: formSubmitURL,
        contentType: "multipart/form-data",
        data: formData,
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
            userResponse = confirm(error.responseText + " Go to login page now?");
            if(userResponse === true)
                window.location.href = "/login.html";
        } else {
            alert(error.responseText);
        }
    });
    return false;
}

var loadVarsEditFestival = function () {
    var info = JSON.parse(window.festival._rawJSON);
    $("#" + info.radio_button).click();

    $("#event-name").prop("value", info.eventName);
    $("#datetimepicker1")[0].children[0].value = info.startDate;
    $("#datetimepicker2")[0].children[0].value = info.endDate;
    $("#event-city").prop("value", info.eventCity);
    // place var is from place-autocomplete.js
    place = info.eventLocation;
    $("#event-description").prop("value", info.eventDescription);
    $("#schedule").prop("value", info.schedule);

    $("#event-fees").prop("value", info.eventFees);
    $("#how-to-register").prop("value", info.howToRegister);
    $("#contact-information").prop("value", info.contactInformation);
    $("#venue-addresses").prop("value", info.venueAddresses);
    $("#accommodation").prop("value", info.accommodation);
    $("#travel-info").prop("value", info.travelInfo);
    $("#other-facilities").prop("value", info.otherFacilities);

    $("#guest-list").prop("value", info.guestList);
    if (info.masterclass === "yes-masterclasses-radio")
        $("#yes-masterclasses-radio").prop("checked", true);
    else if (info.masterclass === "no-masterclasses-radio")
        $("#no-masterclasses-radio").prop("checked", true);

    $("#masterclass-teachers").prop("value", info.masterclassTeachers);
    $("#masterclass-pricing").prop("value", info.masterclassPricing);

    $("#competition-rules").prop("value", info.competitionRules);
    $("#prizes").prop("value", info.prizes);
    $("#jury").prop("value", info.jury);
    
    $("#workshop-teachers").prop("value", info.workshopTeachers);
    $("#workshop-accommodation").prop("value", info.workshopAccommodation);
    $("#workshop-meals").prop("value", info.workshopMeals);
    $("#workshop-practice-facilities").prop("value", info.workshopPracticeFacilities);
    $("#workshop-lessons").prop("value", info.workshopLessons);
    $("#workshop-other-guests").prop("value", info.workshopOtherGuests); 
};

var handleImageDisplay = function () {
    let valid = false;
    const input = document.getElementById(photoUploadInputId);
    const preview = document.getElementById("event-photo-preview");
    while(preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }
    const div = document.createElement("div");
    if (input.files.length === 1) {
        const imageFile = input.files[0];
        if (!["image/png", "image/jpeg"].includes(imageFile.type)) {
            div.textContent = "Incompatible file type. Valid types are PNG and JPEG.";
        } else {
            const image = document.createElement("img");
            image.src = URL.createObjectURL(imageFile);
            image.style.maxHeight = "100%";
            image.style.maxWidth = "100%";
            div.textContent = imageFile.name;
            preview.appendChild(image);
            valid = true;
        }
        preview.appendChild(div);
    } 
    return valid;
}



$(document).ready(main);
