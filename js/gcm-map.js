let map; 
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById("gcm-map"), {
        center: { lat: 48.8566, lng: 2.3522 },
        zoom: 4,
        maxZoom: + 12,
        streetViewControl: false,
        styles: [
                  {
                    "elementType": "labels.text",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.country",
                    "stylers": [
                      {
                        "lightness": 30
                      },
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.locality",
                    "stylers": [
                      {
                        "lightness": 30
                      },
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.neighborhood",
                    "stylers": [
                      {
                        "lightness": 30
                      },
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "administrative.province",
                    "stylers": [
                      {
                        "lightness": 30
                      },
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      },
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [
                      {
                        "color": "#f5f5f2"
                      },
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.attraction",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.business",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.government",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.medical",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "stylers": [
                      {
                        "gamma": 1.51
                      }
                    ]
                  },
                  {
                    "featureType": "poi.park",
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.place_of_worship",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.school",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.sports_complex",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "poi.sports_complex",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#c7c7c7"
                      },
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road",
                    "elementType": "labels",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "color": "#ffffff"
                      },
                      {
                        "visibility": "simplified"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "on"
                      }
                    ]
                  },
                  {
                    "featureType": "transit",
                    "stylers": [
                      {
                        "visibility": "off"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "stylers": [
                      {
                        "color": "#518be1"
                      }
                    ]
                  }
                ]
    });


    for (var i = 0; i < window.festivals.length; i++) {
        var thisEvent = JSON.parse(window.festivals[i]._rawJSON);
        var thisEventPos; 
        if (
            thisEvent.eventLocation && thisEvent.eventLocation.geometry &&
            thisEvent.eventLocation.geometry.location
        ) {
            thisEventPos = thisEvent.eventLocation.geometry.location;
        } else {
            continue;
        }
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
        
        var imageUrl;
        if (thisEvent.radio_button === "festival-radio-button")
            imageUrl = "/css/images/guitar-festival.png";
        else if (thisEvent.radio_button === "competition-radio-button")
            imageUrl = "/css/images/guitar-competition.png";
        else if (thisEvent.radio_button === "festival-competition-radio-button")
            imageUrl = "/css/images/guitar-festivalcompetition.png";
        else imageUrl = "/css/images/guitar-workshop.png";
        
        markers.push(new google.maps.Marker({
            map,
            position: thisEventPos,
            icon: {url: imageUrl, scaledSize: new google.maps.Size(18, 40)},
            title: thisEvent.eventName
        }));
        
        markers[i]['infoWindow'] = new google.maps.InfoWindow({
            content: "<div><a href=\"/festivals/" + thisEvent.URISafeName + "\">" + thisEvent.eventName + "</a></div>" +
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
    
    addMapClickListeners();
    selectMapEventsAllOrNew("Upcoming Events");
}

var selectMapEventsAllOrNew = function (value) {
    
    $("#gcm-map-eventTemporality-input").attr("value", value);
    $("#map-eventTemporality-menu-label").text(value);
    document.getElementById("gcm-map-eventDate-dropdown").value = value;

    if (value === "Upcoming Events") {
        var now = new Date();
        now.setHours(0, 0, 0, 0);
        for (var marker of markers) {
            if (new Date(marker['endDate']) < now) {
                marker['infoWindow'].close();
                marker.setMap(null);
            }
        }
    } else if (value === "All Events") {
        for (var marker of markers) {
            marker.setMap(map);
        }
        selectMapEventType($("#gcm-map-eventType-input")[0].value);
    }
};
 

var selectMapEventType = function (value) {
    
    $("#gcm-map-eventType-input").attr("value", value);
    var selectElt = document.getElementById("gcm-map-eventType-dropdown");
    if (["Festival", "Competition", "Workshop/Academy", "All"].includes(value)) {
        selectElt.value = value;
        $("#map-eventType-menu-label").text(value);
    }

    for (var marker of markers) {
        marker.setMap(map);
    }
    
    if ($("#gcm-map-eventTemporality-input")[0].value === "Upcoming Events") {
        selectMapEventsAllOrNew("Upcoming Events");
    }

    if (value === "Festival") {
        for (var marker of markers) {
            if (marker['eventType'] !== "festival-radio-button" && 
                marker['eventType'] !== "festival-competition-radio-button") {
                marker['infoWindow'].close();
                marker.setMap(null);
            }
        }
    } else if (value === "Competition") {
        for (var marker of markers) {
            if (marker['eventType'] !== "competition-radio-button" &&
                marker['eventType'] !== "festival-competition-radio-button") {
                marker['infoWindow'].close();
                marker.setMap(null);
            }
        }
    } else if (value === "Workshop/Academy") {
        for (var marker of markers) {
            if (marker['eventType'] !== "workshop-radio-button") {
                marker['infoWindow'].close();
                marker.setMap(null);
            }
        }
    }
};

var addMapClickListeners = function () {
    $(".gcm-map-eventType-option").click(function () {
        var value = $(this).attr("value");
        $("#gcm-map-eventType-dropdown").attr("value", value); 
        selectMapEventType(value);
    });

    $(".gcm-map-eventTemporality-option").click(function () {
        var value = $(this).attr("value");
        $("#gcm-map-eventDate-dropdown").attr("value", value); 
        selectMapEventsAllOrNew(value);
    });
};
