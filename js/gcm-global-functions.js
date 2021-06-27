var getCountryFromPlace = function (place) {
    if (place.address_components) {
        for (var component of place.address_components) {
            if (component.types[0] === "country") {
                return component.long_name;
            }
        }
    }
    return null;
}
