window.onload = function () {
	footer = document.getElementById("footer");
};

window.onscroll = function () {
	manage_scroll_offset();
};

var navbar = document.getElementById("navbar");
var footer = null;

function manage_scroll_offset() {
	if (window.scrollY > 0) {
		navbar.classList.add("navbar-back");
		footer.classList.add("hide");
	} else {
		navbar.classList.remove("navbar-back");
		footer.classList.remove("hide");
	}
}
