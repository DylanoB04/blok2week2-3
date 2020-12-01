var direction = ['N, NE, E, SE, S, SW, W, NW'];
var randomItem = direction[Math.floor(Math.random() * direction.length)];
var duck = document.getElementById('duck');
duck.addEventListener("click", function() {
	duck.innerHTML = alert("hello world");
})