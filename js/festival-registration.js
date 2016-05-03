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

    
};

$(document).ready(main);
