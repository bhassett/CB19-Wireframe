$(document).on('hover', '.megamenu .dropdown-menu', function(e) {
    e.stopPropagation()
});

var newh1 = document.createElement("h1");
var newp = document.createElement("p");

newh1.innerHTML = "Top & Best";
newp.innerHTML = "The very best of what you're looking for"

document.getElementById('container') .appendChild(newh1);
document.getElementById('container') .appendChild(newp);
