let autocomplete;
let place;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(document.getElementById("event-city"),
        {
            types: ['(cities)'],
            language: 'en',
            fields: ['place_id', 'geometry', 'name', 'address_component']
        });
    autocomplete.addListener("place_changed", onPlaceChanged);
}

function onPlaceChanged() {
    place = autocomplete.getPlace();
    if(!place.geometry) {
        document.getElementById("event-city").value = "";
        alert("Not a valid place");
    }
}
