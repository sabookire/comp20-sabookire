function init() {
	var img = new Image();
	img.src = 'pacman10-hp-sprite.png';
	canvas = document.getElementById('game_canvas');
	ctx = canvas.getContext('2d');
 	img.addEventListener("load", function() {
		ctx.drawImage(img, 320, 0, 464, 136, 0, 0, 464, 136);
		ctx.drawImage(img, 80, 23, 18, 18, 34, 32, 18, 18);
	}, false);
}