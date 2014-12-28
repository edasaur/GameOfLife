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
