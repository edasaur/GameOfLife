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
context.lineWidth = 0.5;
context.strokeStyle = "#696969";
context.stroke();

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var paint;

function addClick(x, y, dragging) {
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}

function redraw() {
	//context.clearRect(0, 0, context.canvas.width, context.canvas.height);
	context.strokeStyle = "green";
	context.lineJoin = "round";
	context.lineWidth = 5;
	
	for (var i = 0; i < clickX.length; i++) {
		context.beginPath();
		if(clickDrag[i] && i) {
			context.moveTo(clickX[i-1], clickY[i-1]);
		} else {
			context.moveTo(clickX[i]-1, clickY[i]);
		}
	context.lineTo(clickX[i], clickY[i]);
	context.closePath();
	context.stroke();
	}
}

$('#map').mousedown(function(m){
	fill = true;
	addClick(m.pageX, m.pageY);
	redraw();
});

$('#map').mousemove(function(m){
	if (paint) {
		addClick(e.pageX, e.pageY, true);
		redraw();
	}
});

$('#map').mouseup(function(e) {
	paint = false;
});

$('#map').mouseleave(function(e) {
	paint = false;
});


