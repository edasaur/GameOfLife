//File for game rules

$(window).keypress(function(e) {
	if (e.keyCode == 0 || e.keyCode == 32) {
		console.log('Game Start!');
		update();
	}
});

function upperLeft(x, y) {
	return stateGrid[(((x-1) >= 0) && (x-1)) || (((x-1) < 0) && (wSquares-1))][(((y-1) >= 0) && (y-1)) || (((y-1) < 0) && (hSquares-1))];
}

function upper(x, y) {
	return stateGrid[x][(((y-1) >= 0) && (y-1)) || (((y-1) < 0) && (hSquares-1))];
}

function upperRight(x, y) {
	return stateGrid[(x+1)%wSquares][(((y-1) >= 0) && (y-1)) || (((y-1) < 0) && (hSquares-1))];
}

function middleLeft(x, y) {
	return stateGrid[(((x-1) >= 0) && (x-1)) || (((x-1) < 0) && (wSquares-1))][y];
}

function middleRight(x, y) {
	return stateGrid[(x+1)%wSquares][y];
}

function bottomLeft(x, y) {
	return stateGrid[(((x-1) >= 0) && (x-1)) || (((x-1) < 0) && (wSquares-1))][(y+1)%hSquares];
}

function bottom(x, y) {
	return stateGrid[x][(y+1)%hSquares];
}

function bottomRight(x, y) {
	return stateGrid[(x+1)%wSquares][(y+1)%hSquares];
}

//naive solution. Will update later
function countNeighbors(x, y) {
	return parseInt(upperLeft(x, y)) + upper(x, y) + upperRight(x, y) + middleLeft(x, y) + middleRight(x, y) + bottomLeft(x, y) + bottom(x, y) + bottomRight(x, y);
}

var updated;
function update() {
	updated = new Array();
	for (var i = 0; i < template.length; i++) {
        	updated[i] = template[i].slice();
	}
	for (var i = 0; i < stateGrid.length; i++) {
		for (var j = 0; j < stateGrid[0].length; j++) {
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
}



