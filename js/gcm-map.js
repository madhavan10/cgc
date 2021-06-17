let map; 
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("gcm-map"), {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 4,
        streetViewControl: false
    });


    for (var i = 0; i < 2 /* window.festivals.length */; i++) {
        var thisEvent = JSON.parse(window.festivals[i]._rawJSON);
        var thisEventPos = thisEvent.eventLocation.geometry.location;
        var thisEventCountry = "";
        for (var component of thisEvent.eventLocation.address_components) {
            if (component.types[0] === "country") {
                thisEventCountry = component.long_name;
            }
        }
        const monthNames = ["January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"];
        var startMonth = monthNames[new Date(thisEvent.startDate).getMonth()];
        var startDay = new Date(thisEvent.startDate).getDate(); 
        var startYear = new Date(thisEvent.startDate).getFullYear();
        var endMonth = monthNames[new Date(thisEvent.endDate).getMonth()];
        var endDay = new Date(thisEvent.endDate).getDate(); 
        var endYear = new Date(thisEvent.endDate).getFullYear();
        
        markers.push(new google.maps.Marker({
            map,
            position: thisEventPos
        }));
        
        markers[i]['infoWindow'] = new google.maps.InfoWindow({
            content: "<div><a href=\"/festivals/" + thisEvent.eventName + "\">" + thisEvent.eventName + "</a></div>" +
            "<div>" + startMonth + " " + startDay + ", " + startYear + " - " + endMonth + " " + endDay + ", " + endYear + "</div>" +
            "<div>" + thisEvent.eventLocation.name + ", " + thisEventCountry + "</div>"
        });

        /* for event type and temporal filters */
        markers[i]['eventType'] = thisEvent.radio_button;
        markers[i]['endDate'] = thisEvent.endDate;
        
        google.maps.event.addListener(markers[i], "click", function (content) {
            for (var aMarker of markers) {
                aMarker['infoWindow'].close();
            }
            this['infoWindow'].open(map, this);
        });
    }
}
