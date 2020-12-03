var dir = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
var duck = document.getElementById("duck");
var posTop = "150px";
var posLeft = "550";
var posRight = "0";
var posBottom = "0";

function duckClick() {
	document.getElementById("duck").src = "images/explosion.gif";
	setTimeout(function() {
		document.getElementById("duck").src = "images/duck.gif";
	}, 800);	
}

function fly(direction) {
	var number = Math.floor(Math.random() * dir.length);
	direction = dir;
	console.log(dir[number]);
	if(dir[number] == 'N') {
		duck.style.marginTop = posTop + "75px";
	}
}

function moveDuck() {
	setInterval(function() {
		fly();
	},500);
}
moveDuck();