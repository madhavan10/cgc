var main = function () {
    var myEvents = [];
    var e;
    for (e of window.festivals) {
        var owner = e._ownerEmail;
        if (owner === window.user.email) {
            $("#gcm-my-events-table").append("<tr class=\"gcm-my-events-listing\"><td><a href=\"/festivals/" 
                + e._URISafeName + "\">" + JSON.parse(e._rawJSON).eventName + "</a></td>"
                + "<td><a href=\"/edit/" + e._URISafeName + "\">Edit</td></tr>");
        }
    }
};

$(document).ready(main);
