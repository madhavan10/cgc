function toggleNav() {
  var element = document.getElementById("gcm-sidenav")
  var shown = element.getAttribute("data-isshown");
  if (shown == "true") {
    element.setAttribute("data-isshown", "false");
    element.style.width = "0";

  } else {
    element.setAttribute("data-isshown", "true");
    element.style.width = "180px";
  }
}

$(document).ready(main);
