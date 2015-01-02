//Setting up grid
var canvas = document.getElementById("map");
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

canvas.width = w;
canvas.height = h;

var context = canvas.getContext("2d");
context.fillStyle="#FFFFFF";
context.fillRect(0,0,w,h);
for (var x = 0.5; x < canvas.width; x += 5) {
	context.moveTo(x,0);
	context.lineTo(x,canvas.height);
}

for (var y = 0.5; y < canvas.height; y+=5) {
	context.moveTo(0,y);
	context.lineTo(canvas.width, y)
}
context.lineWidth = 1;
context.strokeStyle = "#696969";
context.stroke();

// Should add text to grid to indicate that spacebar toggles menu visibility
$(window).keypress(function(e) {
	if (e.keyCode == 0 || e.keyCode == 32) {
		console.log('Menu item should pop up');
	}
});


//Allowing user to click on individual cells
var prevPixelX, prevPixelY;
	//Naive method for now. Change to color-picking method later
var dragging;


var template = new Array();
var wSquares = ((w - ((w-1)%5)-1)/5)+1; //calculates number of squares in x
var hSquares = ((h - ((h-1)%5)-1)/5)+1; //calculates number of squares in y
for (var wcount=0; wcount < wSquares; wcount++) {
	var temp = new Array();
	for (var hcount=0; hcount < hSquares; hcount++) {
		temp.push(0);
	}
	template.push(temp);
}

var stateGrid = new Array();

for (var i = 0; i < template.length; i++) {
	stateGrid[i] = template[i].slice();
}

function isSameColor(hex, data) {
	for (var i = 0; i <= 2; i++) {
		if (parseInt(hex[i*2]+hex[i*2+1], 16) != data[i]) {
			return false;
		}
	}
	return true;
}
var empty = 0;
var alive = 1;
var dead = 2;

function fillColor(pixelX, pixelY, dragging) {
	fillPixelX = pixelX - ((pixelX-1)%5);
	fillPixelY = pixelY - ((pixelY-1)%5);
	console.log(fillPixelX, fillPixelY);
	var pixel = context.getImageData(fillPixelX, fillPixelY, 1, 1).data;
	if (isSameColor('FFFFFF', pixel)) {
		context.fillStyle='#008000';
	}else if (isSameColor('008000',pixel)) {
		context.fillStyle='#00FF00';
	}else {
		context.fillStyle='#008000';
	}
	if (!dragging || !(prevPixelX==fillPixelX && prevPixelY==fillPixelY)) {
		if (context.fillStyle=="#008000") {
			console.log("poke");
			console.log((fillPixelX-1)/5, (fillPixelY-1)/5);		
			stateGrid[(fillPixelX-1)/5][(fillPixelY-1)/5] = alive;
		} else {
			stateGrid[(fillPixelX-1)/5][(fillPixelY-1)/5] = dead;
		}
		context.fillRect(fillPixelX, fillPixelY, 4, 4);
	}
	prevPixelX = fillPixelX;
	prevPixelY = fillPixelY;
}

$('#map').mousedown(function(m){
	dragging = true;
	fillColor(m.pageX, m.pageY, false);
});

$('#map').mousemove(function(m){
	if (dragging) {
		fillColor(m.pageX, m.pageY, true);
	}
});

$('#map').mouseup(function(m) {
	dragging = false;
});

$('#map').mouseleave(function(m) {
	dragging = false;
});

//Menu options should be here

//Game functionality should be here



