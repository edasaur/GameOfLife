//Call this function to perform benchmarking
function run() {
	var total = 0;
	for (var i = 0; i < 100; i++) {
		resetCanvas();
		onStart();
		var start = Date.now() / 1000 | 0;
		for (var a = 0; a < 1000; a++ ) {
			update();
		}
		var end = Date.now() / 1000 | 0;
		total = total + end - start;
		console.log(total);
	}
	total = total / 100;
	console.log("Time it took for 1000 loops is: "+total+"s");
}

//sets specified box to aliveColor
function setAlive(x,y) {
	context.fillStyle=aliveColor;
	stateGrid[x][y] = alive;
	context.fillRect(x*5+1, y*5+1, 4, 4);
}

//sets specified box to deadColor
function setDead(x,y) {
	context.fillStyle=deadColor;
	stateGrid[x][y] = dead;
	context.fillRect(x*5+1, y*5+1, 4, 4);
}

//resets specified box to blanks state
function setEmpty(x,y) {
	context.fillStyle="#ffffff"
	stateGrid[x][y] = dead;
	context.fillRect(x*5+1, y*5+1, 4, 4);
}

//resets entire canvas
function resetCanvas() {
	for (var i = 0; i < wSquares; i++) {
		for (var j = 0; j < hSquares; j++) {
			setEmpty(i, j);
		}
	}
}

//Fills screen with gliders
function onStart() {
	for (var i = 0; i < wSquares-3; i+=4) {
		for (var j = 0; j < hSquares-3; j+=4) {
			setAlive(i, j+1);
			setAlive(i+1, j+2);
			setAlive(i+2, j);
			setAlive(i+2, j+1);
			setAlive(i+2, j+2);
		}
	}
}


