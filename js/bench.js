var suite = new Benchmark.Suite('Foo', {
	'onStart': onStart	
});

function setAlive(x,y) {
	context.fillStyle=aliveColor;
	stateGrid[x][y] = alive;
	context.fillRect(x*5+1, y*5+1, 4, 4);
}

function setDead(x,y) {
	context.fillStyle=deadColor;
	stateGrid[x][y] = dead;
	context.fillRect(x*5+1, y*5+1, 4, 4);
}
function resetCanvas() {
	for (var i = 0; i < wSquares; i++) {
		for (var j = 0; j < hSquares; j++) {
			setDead(i, j);
		}
	}
}

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

function onCycle() {
	resetCanvas();
	onStart();
}
for (var a = 0; a < 1000; a++ ) {
	suite.add('update', update);
}
