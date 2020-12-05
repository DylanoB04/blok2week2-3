var dir = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
var duck = document.getElementById("duck");
var hit = document.getElementById('hit');
var miss = document.getElementById('miss');
var background = document.getElementById('background');
var titel = document.getElementById("titel");
var start = document.getElementById("start");
var posTop = 150;
var posLeft = 450;
var hitCount = Number(0);
var missCount = Number(0);

//Zorgt voor de bewegingen 

function fly(direction) {
	var number = Math.floor(Math.random() * dir.length);
	direction = dir;
	console.log(dir[number]);
	if(dir[number] == 'N') {
		if(posTop > -200) {
			posTop = posTop - 75;
		}else {
			posTop = 150;
			posLeft = 450;
		}
		duck.style.top = posTop + "px";
	}else if(dir[number] == 'NE') {
		if(posTop > -200 || posLeft > 1500) {
			posTop = posTop - 75;
			posLeft = posLeft + 75;
		}else {
			posTop = 150;
			posLeft = 450;
		}
		duck.style.top = posTop + "px";
		duck.style.left = posLeft + "px";
	}else if(dir[number] == 'E') {
		if(posLeft > 1500) {
			posLeft = posLeft + 75;
		}else {
			posTop = 150;
			posLeft = 450;
		}
		duck.style.left = posLeft + "px";
	}else if(dir[number] == 'SE') {
		if(posTop > 1050 || posLeft > 1500) {
			posTop = posTop + 75;
			posLeft = posLeft + 75;
		}else {
			posTop = 150;
			posLeft = 450;
		}
		duck.style.top = posTop + "px";
		duck.style.left = posLeft + "px";
	}else if(dir[number] == 'S') {
		if(posTop > 1050) {
			posTop = posTop + 75;
		}else {
			posTop = 150;
			posLeft = 450;
		}
		duck.style.top = posTop + "px";
	}else if(dir[number] == 'SW') {
		if(posTop > 1050 || posLeft > -200) {
			posTop = posTop + 75;
			posLeft = posLeft - 75;
		}else {
			posTop = 150;
			posLeft = 450;
		}
		duck.style.top = posTop + "px";
		duck.style.left = posLeft + "px";
	}else if(dir[number] == 'W') {
		if(posLeft > -200) {
			posLeft = posLeft - 75;
		}else {
			posTop = 150;
			posLeft = 450;
		}
		duck.style.left = posLeft + "px";
	}else {
		if(posTop > 1050 || posLeft > -200) {
			posTop = posTop - 75;
			posLeft = posLeft - 75;
		}else {
			posTop = 150;
			posLeft = 450;
		}
		duck.style.top = posTop + "px";
		duck.style.left = posLeft + "px";
	}
}

function moveDuck() {
	setInterval(function() {
		fly();
	},500);
}
moveDuck();

//Hit & Miss 

function duckClick() {
	document.getElementById("duck").src = "images/explosion.gif";
	setTimeout(function() {
		document.getElementById("duck").src = "images/duck.gif";
	}, 800);
		duck.style.top = "150px";
		duck.style.left = "450px";
	hit.innerHTML = "Hit: " +  (hitCount += 1);
	if ((hitCount + missCount) > 19) {
		background.style.display = "none";
		duck.style.display = "none";
		titel.style.textAlign = "center";
		titel.style.marginTop = "0px";
		titel.style.padding = "0";
		titel.style.paddingLeft = "20px";
		titel.style.fontSize = "120px";
		start.style.display = "block";
		start.style.paddingTop = "10%";
		start.style.paddingLeft = "46%";
	}
}

function missClick() {
		duck.style.top = "150px";
		duck.style.left = "450px";
	miss.innerHTML = "Miss: " + (missCount += 1);
	if ((hitCount + missCount) > 19) {
		background.style.display = "none";
		duck.style.display = "none";
		titel.style.textAlign = "center";
		titel.style.marginTop = "0px";
		titel.style.padding = "0";
		titel.style.paddingLeft = "20px";
		titel.style.fontSize = "120px";
		start.style.display = "block";
		start.style.paddingTop = "10%";
		start.style.paddingLeft = "46%";
	}
}