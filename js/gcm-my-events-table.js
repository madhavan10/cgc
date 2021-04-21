var main = function () {
    var myEvents = [];
    var e;
    for (e of window.festivals) {
        eParsed = JSON.parse(e._rawJSON);
        if (eParsed.owner === window.user.email) {
            alert(eParsed.owner);
            //TODO
        }
    }
};

$(document).ready(main);
