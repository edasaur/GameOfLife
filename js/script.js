//Setting up grid
var canvas = document.getElementById("map");
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

canvas.width = w;
canvas.height = h;

var context = canvas.getContext("2d");

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



//Allowing user to click on individual cells
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();

	//Naive method for now. Change to color-picking method later
var aliveX = new Array();
var aliveY = new Array();
var fill;

function addClick(x, y, dragging) {
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}
function fillColor() {
	var leftCornerX, leftCornerY;
	for (var i = 0; i < clickX.length; i++) {
		leftCornerX = clickX[i] - ((clickX[i]) % 5)+1;
		leftCornerY = clickY[i] - ((clickY[i]-1) % 5); //determines where to fill square
		if (aliveX.length == 0) {
			context.fillStyle = "#008000";
			context.fillRect(leftCornerX, leftCornerY, 4, 4);
		} else {
			for (var j = 0; j < aliveX.length; j++) {
				
				if (i > 0) {
					var prevLeftCornerX = clickX[i-1] - ((clickX[i-1]) % 5)+1;
		                	var prevLeftCornerY = clickY[i-1] - ((clickY[i-1]-1) % 5);
				}
				noRepeat = i && prevLeftCornerX != leftCornerX && prevLeftCornerY != leftCornerY
				if (leftCornerX == aliveX[j] && leftCornerY == aliveY[j] && noRepeat) {
					context.fillStyle = "#00FF00";
					context.fillRect(leftCornerX, leftCornerY, 4, 4);
					j = aliveX.length;
				} 
				if (j == (aliveX.length - 1)) {
					context.fillStyle = "#008000";
					context.fillRect(leftCornerX, leftCornerY, 4, 4);
				}
			}
		}
		if (context.fillStyle == "#008000") {
			console.log("pushed to alive");
			aliveX.push(leftCornerX);
			aliveY.push(leftCornerY);
		}
	}
	clickX = new Array();
	clickY = new Array();
}

$('#map').mousedown(function(m){
	fill = true;
	addClick(m.pageX, m.pageY);
	fillColor();
});

$('#map').mousemove(function(m){
	if (fill) {
		addClick(m.pageX, m.pageY, true);
		fillColor();
	}
});

$('#map').mouseup(function(m) {
	fill = false;
});

$('#map').mouseleave(function(m) {
	fill = false;
});

//Menu options should be here

//Game functionality should be here



