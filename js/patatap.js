var circles = [];
var triangles = [];
var stars = [];

function onFrame(event) {
	for (var i = 0; i < circles.length; i++) {
		circles[i].fillColor.hue +=1;
		circles[i].scale(0.9);
	}
	
	for (var j = 0; j < triangles.length; j++) {
		triangles[j].fillColor.hue +=1;
		triangles[j].scale(0.9);
	}
	
	for (var x = 0; x < stars.length; x++) {
		//stars[x].fillColor.hue +=1;
		stars[x].scale(0.9);
	}
}


function onKeyDown(event) {
	var maxPoint = new Point(view.size.width, view.size.height);
	var randomPoint = Point.random();//0~1
	var point = maxPoint * randomPoint;//0~maxPoint
	
	if (keyCircles[event.key]) {
		var newCircle = new Path.Circle(point,300);
		
		newCircle.fillColor = keyCircles[event.key].color;
		keyCircles[event.key].sound.play();
		//put all random point into a array
		circles.push(newCircle);

	} else if (keyTriangles[event.key]) {
		var triangle = new Path.RegularPolygon(point, 3, 400);
		
		triangle.fillColor = keyTriangles[event.key].color;
		keyTriangles[event.key].sound.play();
		//put all random point into a array
		triangles.push(triangle);
		
	} else if (keyStars[event.key]) {
		//var center = point;
		//var angle = 5;
		//var radius1 = 20;
		//var radius2 = 40;
		//var newStar = new Path.Star(point,5, 10, 20);
		
		var newStar = new Path.Star({
			center: point,
			points: 5,
			radius1: 100,
			radius2: 200,
			fillColor: randomColor()
		});
		
		//newStar.fillColor = keyStars.color;
		keyStars[event.key].sound.play();
		stars.push(newStar);
	}
}

function randomColor() {
    var randomNum1 = Math.floor(Math.random() * 256);
  	var randomNum2 = Math.floor(Math.random() * 256);
  	var randomNum3 = Math.floor(Math.random() * 256);
    
    return "rgb"+"(" + randomNum1 + ", " + randomNum2 + ", " + randomNum3 + ")";
}

var keyStars = {
	g: {
		color: "rgb(63, 10, 4)",
		sound: new Howl({
		src: ['sounds/flash-1.mp3']})
	},
	h: {
		color: "rgb(99, 244, 191)",
		sound: new Howl({
		src: ['sounds/flash-2.mp3']})
	},
	i: {
		color: "rgb(39, 191, 210)",
		sound: new Howl({
		src: ['sounds/flash-3.mp3']})
	},
	j: {
		color: "rgb(123, 127, 86)",
		sound: new Howl({
		src: ['sounds/pinwheel.mp3']})
	},
	k: {
		color: "rgb(22, 82, 33)",
		sound: new Howl({
		src: ['sounds/piston-1.mp3']})
	},
	l: {
		color: "rgb(24, 179, 134)",
		sound: new Howl({
		src: ['sounds/piston-2.mp3']})
	}
}


var keyTriangles = {
	a: {
		color: "rgb(126, 209, 223)",
		sound: new Howl({
		src: ['sounds/moon.mp3']})
	},
	b: {
		color: "rgb(145, 184, 242)",
		sound: new Howl({
		src: ['sounds/corona.mp3']})
	},
	c: {
		color: "rgb(51, 25, 219)",
		sound: new Howl({
		src: ['sounds/clay.mp3']})
	},
	d: {
		color: "rgb(134, 155, 120)",
		sound: new Howl({
		src: ['sounds/confetti.mp3']})
	},
	e: {
		color: "rgb(150, 229, 87)",
		sound: new Howl({
		src: ['sounds/bubbles.mp3']})
	},
	f: {
		color: "rgb(204, 207, 190)",
		sound: new Howl({
		src: ['sounds/dotted-spiral.mp3']})
	}
}

var keyCircles = {

	m: {
		color: "rgb(145, 184, 242)",
		sound: new Howl({
		src: ['sounds/piston-3.mp3']})
	},
	n: {
		color: "rgb(51, 25, 29)",
		sound: new Howl({
		src: ['sounds/splits.mp3']})
	},
	o: {
		color: "rgb(134, 15, 120)",
		sound: new Howl({
		src: ['sounds/squiggle.mp3']})
	},
	p: {
		color: "rgb(50, 229, 87)",
		sound: new Howl({
		src: ['sounds/strike.mp3']})
	},
	q: {
		color: "rgb(204, 27, 190)",
		sound: new Howl({
		src: ['sounds/suspension.mp3']})
	},
	r: {
		color: "rgb(83, 222, 11)",
		sound: new Howl({
		src: ['sounds/ufo.mp3']})
	},
	s: {
		color: "rgb(99, 244, 191)",
		sound: new Howl({
		src: ['sounds/veil.mp3']})
	},
	t: {
		color: "rgb(39, 191, 210)",
		sound: new Howl({
		src: ['sounds/wipe.mp3']})
	},
	u: {
		color: "rgb(47, 144, 228)",
		sound: new Howl({
		src: ['sounds/timer.mp3']})
	},
	v: {
		color: "rgb(58, 17, 86)",
		sound: new Howl({
		src: ['sounds/zig-zag.mp3']})
	},
	w: {
		color: "rgb(252, 112, 12)",
		sound: new Howl({
		src: ['sounds/prism-1.mp3']})
	},
	x: {
		color: "rgb(199, 244, 191)",
		sound: new Howl({
		src: ['sounds/prism-2.mp3']})
	},
	y: {
		color: "rgb(39, 90, 210)",
		sound: new Howl({
		src: ['sounds/prism-3.mp3']})
	},
	z: {
		color: "rgb(2, 44, 28)",
		sound: new Howl({
		src: ['sounds/timer.mp3']})
	},
	space: {
		color: "rgb(98, 12, 186)",
		sound: new Howl({
		src: ['sounds/zig-zag.mp3']})
	},
	shift: {
		color: "rgb(47, 44, 228)",
		sound: new Howl({
		src: ['sounds/glimmer.mp3']})
	},
	tab: {
		color: "rgb(222, 82, 52)",
		sound: new Howl({
		src: ['sounds/ufo.mp3']})
	}
}

/*
	for (var x = 0; x < 1500; x+=100) {
		for(var y = 0; y < 1500; y+=100) {
			var myCircle = new Path.Circle(new Point(x+20, y+20), 10);
			myCircle.fillColor = 'purple';
			// new Path.Circle(new Point(x+20, y+20), 10).fillColor = 'purple';
		}
	}
*/