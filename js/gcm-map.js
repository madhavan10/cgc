let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("gcm-map"), {
    center: { lat: 48.8566, lng: 2.3522 },
    zoom: 4,
  });
}
