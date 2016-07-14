var main = function() {
    $("fieldset").hide();
    $("#event-basics").show();
    $(".gc-event-radio").click(function() {
        if($("#festival-radio-button").is(":checked")) {
            $(".gc-event-questions").hide()    
            $("#festival-questions").show();
        }
        
        if($("#competition-radio-button").is(":checked")) {
            $(".gc-event-questions").hide()    
            $("#competition-questions").show();
        }
        
        if($("#festival-competition-radio-button").is(":checked")) {
            $(".gc-event-questions").hide()    
            $("#festival-questions").show();
            $("#competition-questions").show();
        }

        if($("#workshop-radio-button").is(":checked")) {
            $(".gc-event-questions").hide()    
            $("#workshop-questions").show();
        }
    });

    $("#yes-masterclasses-radio").click(function() {
        $("#festival-masterclass-questions").show();
    });
    $("#no-masterclasses-radio").click(function() {
        $("#festival-masterclass-questions").hide();
    });

    // default view
    $("#festival-radio-button").click();
};

function submitForm() {
  var radio_button = $('input[name=eventType]:checked')[0].id;
  var eventName = $('#event-name').val();
  var startDate = $('#datetimepicker1')[0].children[0].value;
  var endDate = $('#datetimepicker2')[0].children[0].value;
  var eventCountry = $('#event-country').val();
  var eventCity = $('#event-city').val();
  var eventDescription = $('#event-description').val();
  var schedule = $('#schedule').val();

  // festival questions
  var guestList = $('#guest-list').val();
  var master_class = $('input[name=whether-masterclasses]:checked')[0].id

  // festival-masterclass
  var master_class_teachers = $('#masterclass-teachers').val();
  var master_class_pricing = $('#masterclass-pricing').val();
  
}

$(document).ready(main);
