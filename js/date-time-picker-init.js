$(function () {
    $('#gc-dateTP1-input').datetimepicker({
        format: 'MM/DD/YYYY',
        icons: {
            previous: 'fas fa-chevron-left',
            next: 'fas fa-chevron-right'
        }
    });
    $('#gc-dateTP2-input').datetimepicker({
        format: 'MM/DD/YYYY', 
        useCurrent: false,
        icons: {
            previous: 'fas fa-chevron-left',
            next: 'fas fa-chevron-right'
        }
    });
    
    $("#gc-dateTP1-input").on("dp.change", function (e) {
        $('#gc-dateTP2-input').data("DateTimePicker").minDate(e.date);
    });
    $("#gc-dateTP2-input").on("dp.change", function (e) {
        $('#gc-dateTP1-input').data("DateTimePicker").maxDate(e.date);
    });
});
