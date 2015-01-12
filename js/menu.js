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


function halfColor(hex) {
	
}

var baseString = "#color"
$(baseString+1).click(function(m) {
	var rgb = $(baseString+1).css('background-color');
	console.log(baseString+1);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "0px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+2).click(function(m) {
	var rgb = $(baseString+2).css('background-color');
	console.log(baseString+2);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "10px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+3).click(function(m) {
	var rgb = $(baseString+3).css('background-color');
	console.log(baseString+3);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "20px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+4).click(function(m) {
	var rgb = $(baseString+4).css('background-color');
	console.log(baseString+4);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "30px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+5).click(function(m) {
	var rgb = $(baseString+5).css('background-color');
	console.log(baseString+5);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "40px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+6).click(function(m) {
	var rgb = $(baseString+6).css('background-color');
	console.log(baseString+6);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "50px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+7).click(function(m) {
	var rgb = $(baseString+7).css('background-color');
	console.log(baseString+7);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "60px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+8).click(function(m) {
	var rgb = $(baseString+8).css('background-color');
	console.log(baseString+8);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "70px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+9).click(function(m) {
	var rgb = $(baseString+9).css('background-color');
	console.log(baseString+9);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "80px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+10).click(function(m) {
	var rgb = $(baseString+10).css('background-color');
	console.log(baseString+10);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "90px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+11).click(function(m) {
	var rgb = $(baseString+11).css('background-color');
	console.log(baseString+11);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "100px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+12).click(function(m) {
	var rgb = $(baseString+12).css('background-color');
	console.log(baseString+12);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "110px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+13).click(function(m) {
	var rgb = $(baseString+13).css('background-color');
	console.log(baseString+13);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "120px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+14).click(function(m) {
	var rgb = $(baseString+14).css('background-color');
	console.log(baseString+14);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "130px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+15).click(function(m) {
	var rgb = $(baseString+15).css('background-color');
	console.log(baseString+15);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "140px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+16).click(function(m) {
	var rgb = $(baseString+16).css('background-color');
	console.log(baseString+16);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "150px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+17).click(function(m) {
	var rgb = $(baseString+17).css('background-color');
	console.log(baseString+17);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "160px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+18).click(function(m) {
	var rgb = $(baseString+18).css('background-color');
	console.log(baseString+18);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "170px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+19).click(function(m) {
	var rgb = $(baseString+19).css('background-color');
	console.log(baseString+19);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "180px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+20).click(function(m) {
	var rgb = $(baseString+20).css('background-color');
	console.log(baseString+20);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "190px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+21).click(function(m) {
	var rgb = $(baseString+21).css('background-color');
	console.log(baseString+21);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "200px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+22).click(function(m) {
	var rgb = $(baseString+22).css('background-color');
	console.log(baseString+22);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "210px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+23).click(function(m) {
	var rgb = $(baseString+23).css('background-color');
	console.log(baseString+23);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "220px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

$(baseString+24).click(function(m) {
	var rgb = $(baseString+24).css('background-color');
	console.log(baseString+24);
	console.log(rgb);
	rgb = rgb.substring(4, rgb.length-1).replace(/ /g, '').split(',');
	document.getElementById('selector').style["left"] = "230px";
	deadColor = "#";
	aliveColor= "#";
	for (var j = 0; j < 3; j++) {
		var alive = Math.floor(rgb[j]).toString(16);
		var dead = Math.floor((rgb[j])/2).toString(16);
		if (alive.length == 1) {
			alive = "0"+alive;
		}
		if (dead.length == 1) {
			dead = "0"+dead;
		}
		aliveColor = aliveColor + alive;
		deadColor = deadColor + dead;
	}
	src = aliveColor.substring(1,aliveColor.length).toUpperCase();
});

var infLoopStop=false;
document.head = document.head || document.getElementsByTagName('head')[0];
var src="FF00FE"
function changeFavicon(col) {
	var link = document.createElement('link'),
		oldLink = document.getElementById('dynamic-favicon');
	link.id = 'dynamic-favicon';
	link.rel = 'icon';
	prevhref = oldLink.href[oldLink.href.length-5];
	console.log("change!");
	if (prevhref=="1") {
		link.href = "images/"+col+"/favicon2.ico";
	} else if (prevhref=="2") {
		link.href = "images/"+col+"/favicon3.ico";
	} else if (prevhref=="3") {
		link.href = "images/"+col+"/favicon4.ico";
	} else {
		link.href = "images/"+col+"/favicon1.ico";
	}
	if (oldLink) {
		document.head.removeChild(oldLink);
	}
	document.head.appendChild(link);
	if(!infLoopStop) window.setTimeout(function() {
		changeFavicon(src);
	},1000);
}
changeFavicon(src);
