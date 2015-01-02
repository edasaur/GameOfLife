//File for game rules

$(window).keypress(function(e) {
	if (e.keyCode == 0 || e.keyCode == 32) {
		console.log('Game Start!');
		update();
	}
});


//naive solution. Will update later
function countNeighbors(x, y) {
	var count = 0;
	if (y == 0 && x > 0 && x < stateGrid.length-1) {
		return (stateGrid[x-1][y] == alive) + (stateGrid[x-1][y+1] == alive) + (stateGrid[x][y+1] == alive) + (stateGrid[x+1][y+1] == alive) + (stateGrid[x+1][y] == alive); 
	} else if (y == stateGrid[0].length-1 && x > 0 && x < stateGrid.length-1) {
		return (stateGrid[x-1][y] == alive) + (stateGrid[x-1][y-1] == alive) + (stateGrid[x][y-1] == alive) + (stateGrid[x+1][y-1] == alive) + (stateGrid[x+1][y] == alive); 
	} else if (x == 0 && y > 0 && y < stateGrid[0].length-1) {
		return (stateGrid[x][y-1] == alive) + (stateGrid[x+1][y-1] == alive) + (stateGrid[x+1][y] == alive) + (stateGrid[x+1][y+1] == alive) + (stateGrid[x][y+1] == alive); 
	} else if (x == stateGrid.length-1 && y > 0 && y < stateGrid[0].length-1) {
		return (stateGrid[x][y-1] == alive) + (stateGrid[x-1][y-1] == alive) + (stateGrid[x-1][y] == alive) + (stateGrid[x-1][y+1] == alive) + (stateGrid[x][y+1] == alive); 
	} else if (x == 0 && y == 0) {
		return (stateGrid[1][0] == alive) + (stateGrid[1][1] == alive) + (stateGrid[0][1] == alive);
	} else if (x == 0 && y == stateGrid[0].length-1) {
		return (stateGrid[0][stateGrid[0].length-2] == alive) + (stateGrid[1][stateGrid[0].length-2] == alive) + (stateGrid[1][stateGrid[0].length - 1] == alive);
	} else if (x == stateGrid.length-1 && y == 0) {
		return (stateGrid[stateGrid.length-1][1] == alive) + (stateGrid[stateGrid.length-2][0] == alive) +(stateGrid[stateGrid.length-2][1] == alive)
	} else if (x == stateGrid.length-1 && y == stateGrid[0].length-1) {
		return (stateGrid[stateGrid.length-1][stateGrid[0].length-2] == alive) + (stateGrid[stateGrid.length-2][stateGrid[0].length-2] == alive) + (stateGrid[stateGrid.length-2][stateGrid[0].length-1] == alive);
	} else {
		return (stateGrid[x-1][y-1]==alive) + (stateGrid[x-1][y] == alive) + (stateGrid[x-1][y+1] == alive) + (stateGrid[x][y-1] == alive) + (stateGrid[x][y+1] == alive) + (stateGrid[x+1][y-1] == alive) + (stateGrid[x+1][y] == alive) + (stateGrid[x+1][y+1] == alive);
	}
}


function update() {
	var updated = new Array();
	for (var i = 0; i < template.length; i++) {
        	updated[i] = template[i].slice();
	}
	for (var i = 0; i < stateGrid.length; i++) {
		for (var j = 0; j < stateGrid[0].length; j++) {
			var neighborCount = countNeighbors(i, j);
			if (stateGrid[i][j] == alive) {
				if (neighborCount < 2 || neighborCount > 3) {
					updated[i][j] = dead;
					context.fillStyle = "#00FF00"
					context.fillRect(i*5+1, j*5+1, 4, 4);
					
				} 
			} else {
				if (neighborCount == 3) {
					updated[i][j] = alive;
					context.fillStyle = "#008000"
					context.fillRect(i*5+1, j*5+1, 4, 4);
				}
			}
		}
	}
	for (var i = 0; i < template.length; i++) {
        	stateGrid[i] = updated[i].slice();
	}
}



