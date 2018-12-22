
function resize() {
	var w = 0.9 * window.innerWidth;
	var h = 0.7 * 0.65 * window.innerHeight;

	if (w > h) {
		document.getElementsByClassName("title_images")[0].style.width = "100%";
		document.getElementsByClassName("title_images")[0].style.height = "auto";
	
		document.getElementsByClassName("title_images")[1].style.width = "100%";
		document.getElementsByClassName("title_images")[1].style.height = "auto";
	} else if (w < h) {
		document.getElementsByClassName("title_images")[0].style.width = "auto";
		document.getElementsByClassName("title_images")[0].style.height = "100%";
	
		document.getElementsByClassName("title_images")[1].style.width = "auto";
		document.getElementsByClassName("title_images")[1].style.height = "100%";
	}
}