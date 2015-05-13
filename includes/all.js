function Snake () {
	window.pSnake = document.createElement("snake");
	window.pSnake.id = "snake";
    document.getElementById('field').appendChild(pSnake);

    var size_start = 5;
	this.size = 0;
	var distAdd = 4;

	this.parts = new Array();
	this.addPart = function () {
		var id = this.parts.length;
		this.parts[id] = new Part();
		this.size += 1;
		if (id > 0) {
			if (this.parts[id-1].dir == "direita") {
		    	this.parts[id].x = this.parts[id-1].x-distAdd;
		    	this.parts[id].y = this.parts[id-1].y;
		    } else if (this.parts[id-1].dir == "esquerda") {
		    	this.parts[id].x = this.parts[id-1].x+distAdd;
		    	this.parts[id].y = this.parts[id-1].y;
		    } else if (this.parts[id-1].dir == "cima") {
		    	this.parts[id].x = this.parts[id-1].x;
		    	this.parts[id].y = this.parts[id-1].y-distAdd;
		    } else if (this.parts[id-1].dir == "baixo") {
		    	this.parts[id].x = this.parts[id-1].x;
		    	this.parts[id].y = this.parts[id-1].y+distAdd;
		    }
		}
		var part = document.createElement("part");
	    window.pSnake.appendChild(part);
	    part.id = "part"+id;
	    this.parts[id].id = id;
	    part.style.marginTop = this.parts[id].y+"vmin";
	    part.style.marginLeft = this.parts[id].x+"vmin";
	}
	for (i=0;i<size_start;i++) {
		this.addPart();
	}
	this.move = function() {
		for (i=0;i<this.parts.length;i++) {
			if (this.parts[i].dir == "direita") {
		    	this.parts[i].x += distAdd;
		    } else if (this.parts[i].dir == "esquerda") {
		    	this.parts[i].x -= distAdd;
		    } else if (this.parts[i].dir == "cima") {
		    	this.parts[i].y -= distAdd;
		    } else if (this.parts[i].dir == "baixo") {
		    	this.parts[i].y += distAdd;
		    }
		    var part = document.getElementById('part'+i)
		    part.style.marginTop = this.parts[i].y+"vmin";
	    	part.style.marginLeft = this.parts[i].x+"vmin";
		}
	}
	this.restart = function() {
		this.parts.splice(0, this.parts.length);
		var myNode = document.getElementById("snake");
		while (myNode.firstChild) {
		    myNode.removeChild(myNode.firstChild);
		}
		for (i=0;i<size_start;i++) {
			this.addPart();
		}
	}
	this.changeDir = function(i, dir) {
		this.parts[i].changeDir(dir);
	}
}

function Part () {
	this.id;
	this.dir = "direita";
	this.x = 20;
	this.y = 30;
	this.changeDir = function(dir) {
		this.dir = dir;
	}
}