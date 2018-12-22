var slide = 1;

var first_slide_title = "2017-18 Boys' Swim Team Captures State Championship";
var first_slide_text = "The George Mason 2017-2018 Boys’ Swim Team secured an historic 2A VHSL State Championship in February, 2018. The team featured outstanding individual and relay performances by...";

var second_slide_title = "2018 Girls' Soccer Team Wins State Championship";
var second_slide_text = "The George Mason 2018 Girls' Soccer Team won the 2A VHSL state final in June, 2018.";

function click_slide(direction) {
	if (direction == 1) {
		if (slide == 1) {
			slide = 2;
			set_slide(2);
		}
	} else if (direction == 2) {
		if (slide == 2) {
			slide = 1;
			set_slide(1);
		}
	}
}

function set_slide(new_slide) {
	if (new_slide == 1) {
		document.getElementById("first_slide").style.right = "0%";
		document.getElementById("second_slide").style.right = "-100%";

		document.getElementById("caption_text").style.opacity = 0;

		setTimeout(function () {
			document.getElementById("news_title").innerHTML = first_slide_title;
			document.getElementById("news_text").innerHTML = first_slide_text;

			document.getElementById("caption_text").style.opacity = 1;
		}, 500);

	} else if (new_slide == 2) {
		document.getElementById("first_slide").style.right = "100%";
		document.getElementById("second_slide").style.right = "0%";
	
		document.getElementById("caption_text").style.opacity = 0;

		setTimeout(function () {
			document.getElementById("news_title").innerHTML = second_slide_title;
			document.getElementById("news_text").innerHTML = second_slide_text;

			document.getElementById("caption_text").style.opacity = 1;
		}, 500);
	}
}