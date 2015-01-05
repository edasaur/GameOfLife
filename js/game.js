//File for game rules
                                                                                                                   
var counter = document.getElementById("genCount");
$(window).keypress(function(e) {
	if (e.keyCode == 0 || e.keyCode == 32) {
		console.log('Game Start!');
		update();
	}
});

function upperLeft(x, y) {
	return stateGrid[x > 0 ? x-1 : wSquares - 1][y > 0 ? y-1 : hSquares - 1];
}

function upperMiddle(x, y) {
	return stateGrid[x][y > 0 ? y-1 : hSquares - 1];
}

function upperRight(x, y) {
	return stateGrid[(x+1)%wSquares][y > 0 ? y-1 : hSquares - 1];
}

function middleLeft(x, y) {
	return stateGrid[x > 0 ? x-1 : wSquares - 1][y];
}

function middleRight(x, y) {
	return stateGrid[(x+1)%wSquares][y];
}

function bottomLeft(x, y) {
	return stateGrid[x > 0 ? x-1 : wSquares - 1][(y+1)%hSquares];
}

function bottomMiddle(x, y) {
	return stateGrid[x][(y+1)%hSquares];
}

function bottomRight(x, y) {
	return stateGrid[(x+1)%wSquares][(y+1)%hSquares];
}

//naive solution. Will update later
function countNeighbors(x, y) {
	var upper = upperLeft(x, y) + upperMiddle(x, y) + upperRight(x, y);
	var middle = middleLeft(x, y) + middleRight(x, y);
	var bottom = bottomLeft(x, y) + bottomMiddle(x, y) + bottomRight(x, y);
	return upper+middle+bottom;
}

var updated;
function update() {
	updated = new Array();
	for (var i = 0; i < template.length; i++) {
        	updated[i] = template[i].slice();
	}
	for (var i = 0; i < wSquares; i++) {
		for (var j = 0; j < hSquares; j++) {
			var neighborCount = countNeighbors(i, j);
			if (stateGrid[i][j] == alive) {
				if (neighborCount < 2 || neighborCount > 3) {
					updated[i][j] = dead;
					context.fillStyle = deadColor
					context.fillRect(i*5+1, j*5+1, 4, 4);
					
				} else {
					updated[i][j] = alive;
				}
			} else {
				if (neighborCount == 3) {
					updated[i][j] = alive;
					context.fillStyle = aliveColor;
					context.fillRect(i*5+1, j*5+1, 4, 4);
				} else {
					updated[i][j] = dead;
				}
			}
		}
	}
	for (var i = 0; i < template.length; i++) {
        	stateGrid[i] = updated[i].slice();
	}
	counter.innerHTML = parseInt(counter.innerHTML)+1;
}

