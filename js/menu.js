var checkbox1 = document.getElementById('checked1');
var checkbox2 = document.getElementById('checked2');
var checkbox3 = document.getElementById('checked3');
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var color3 = document.getElementById('color3');
var color4 = document.getElementById('color4');
var color5 = document.getElementById('color5');
var color6 = document.getElementById('color6');
var color7 = document.getElementById('color7');
var color8 = document.getElementById('color8');
var color9 = document.getElementById('color9');
var color10 = document.getElementById('color10');
var color11 = document.getElementById('color11');
var color12 = document.getElementById('color12');
var color13 = document.getElementById('color13');
var color14 = document.getElementById('color14');
var color15 = document.getElementById('color15');
var color16 = document.getElementById('color16');
var color17 = document.getElementById('color17');
var color18 = document.getElementById('color18');
var color19 = document.getElementById('color19');
var color20 = document.getElementById('color20');
var color21 = document.getElementById('color21');
var color22 = document.getElementById('color22');
var color23 = document.getElementById('color23');
var color24 = document.getElementById('color24');

//temp hacky method
checkbox1.setAttribute('checked', 'true');
checkbox2.setAttribute('checked', 'false');
checkbox3.setAttribute('checked', 'false');

var down = [false];
$('#checkbox1').mousedown(function(m) {
	checkbox1.setAttribute("style","width:20px; height:20px;");
	checkbox1.style.visibility="visible";
	checkbox1.setAttribute('checked', 'true');
	checkbox2.setAttribute('checked', 'false');
	checkbox2.style.visibility="hidden";
	checkbox3.setAttribute('checked', 'false');
	checkbox3.style.visibility="hidden";
	down = [true, 1];
	
});

$('#checkbox1').mouseup(function(m) {
	if (down[0] && down[1] == 1) {
		checkbox1.setAttribute("style","width:16px; height:16px;");
		checkbox1.style.visibility="visible";
	}
	down = [false];
});

$('#checkbox1').mouseleave(function(m) {
	if (down[0] && down[1] == 1) {
		checkbox1.setAttribute("style","width:16px; height:16px;");
		checkbox1.style.visibility="visible";
	}
});

$('#checkbox1').mouseenter(function(m) {
	if (down[0] && down[1] == 1) {
		checkbox1.setAttribute('style', 'width:20px; height:20px;');
	}
});

$('#checkbox2').mousedown(function(m) {
	checkbox2.setAttribute("style","width:20px; height:20px;");
	checkbox2.style.visibility="visible";
	checkbox2.setAttribute('checked', 'true');
	checkbox1.setAttribute('checked', 'false');
	checkbox1.style.visibility="hidden";
	checkbox3.setAttribute('checked', 'false');
	checkbox3.style.visibility="hidden";
	down = [true, 2];
});

$('#checkbox2').mouseup(function(m) {
	if (down[0] && down[1] == 2) {
		checkbox2.setAttribute("style","width:16px; height:16px;");
		checkbox2.style.visibility="visible";
	}
	down = [false];
});

$('#checkbox2').mouseleave(function(m) {
	if (down[0] && down[1] == 2) {
		checkbox2.setAttribute("style","width:16px; height:16px;");
		checkbox2.style.visibility="visible";
	}
});

$('#checkbox2').mouseenter(function(m) {
	if (down[0] && down[1] == 2) {
		checkbox2.setAttribute('style', 'width:20px; height:20px;');
		checkbox2.style.visibility="visible";
	}
});

$('#checkbox3').mousedown(function(m) {
	checkbox3.setAttribute("style","width:20px; height:20px;");
	checkbox3.style.visibility="visible";
	checkbox3.setAttribute('checked', 'true');
	checkbox1.setAttribute('checked', 'false');
	checkbox1.style.visibility="hidden";
	checkbox2.setAttribute('checked', 'false');
	checkbox2.style.visibility="hidden";
	down = [true, 3];
});

$('#checkbox3').mouseup(function(m) {
	if (down[0] && down[1] == 3) {
		checkbox3.setAttribute("style","width:16px; height:16px;");
		checkbox3.style.visibility="visible";
	}
	down = [false];
});

$('#checkbox3').mouseleave(function(m) {
	if (down[0] && down[1] == 3) {
		checkbox3.setAttribute("style","width:16px; height:16px;");
		checkbox3.style.visibility="visible";
	}
});

$('#checkbox3').mouseenter(function(m) {
	if (down[0] & down[1] == 3) {
		checkbox3.setAttribute('style', 'width:20px; height:20px;');
		checkbox3.style.visibility="visible";
	}
});

var rgb = $(color1).css('background-color');
rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');

function halfColor(hex) {
	
}


