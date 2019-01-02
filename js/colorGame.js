var Boxes = document.querySelectorAll(".box");
var DisplayColor = document.getElementById("pickedColor");
var GoodLuck = document.getElementById("goodLuck");
var Header = document.getElementById("header");
var colors = generateColor(9);
var PickedColor = randomColor();
var NewGame = document.getElementById("newGame");
var Easy = document.getElementById("easy");
var Middle = document.getElementById("middle");
var Hard = document.getElementById("hard");

Hard.addEventListener("click", function(){
	this.classList.add("effect");
	Easy.classList.remove("effect");
	Middle.classList.remove("effect");
	
	colors = generateColor(9);
	PickedColor = randomColor();
	DisplayColor = PickedColor;
	
	for(var i = 0; i < Boxes.length; i++) {
		Boxes[i].style.backgroundColor = colors[i];
		Boxes[i].style.display = "block";
	}
	
})

Middle.addEventListener("click", function(){
	this.classList.add("effect");
	Hard.classList.remove("effect");
	Easy.classList.remove("effect");
	
	colors = generateColor(6);
	PickedColor = randomColor();
	DisplayColor = PickedColor;
	
	for(var i = 0; i < Boxes.length; i++) {
		if(colors[i]) {
			Boxes[i].style.backgroundColor = colors[i];
		} else {
			Boxes[i].style.display = "none";
		}
	}
})

Easy.addEventListener("click", function(){
	this.classList.add("effect");
	Hard.classList.remove("effect");
	Middle.classList.remove("effect");
	
	colors = generateColor(3);
	PickedColor = randomColor();
	DisplayColor = PickedColor;
	
	for(var i = 0; i < Boxes.length; i++) {
		if(colors[i]) {
			Boxes[i].style.backgroundColor = colors[i];
		} else {
			Boxes[i].style.display = "none";
		}
	}
})


DisplayColor.textContent = PickedColor;

for (var i = 0; i < Boxes.length; i++) {
	//initial each box's color
	Boxes[i].style.backgroundColor = colors[i];

	//add event listener to each one
	Boxes[i].addEventListener("click", function(){
		//alert(this.style.backgroundColor);
		var color = this.style.backgroundColor;

		if(color === PickedColor) {
			//Display correct
			GoodLuck.textContent = "Correct";
			//change the header's bg color to correct color
			Header.style.backgroundColor = color;
			changeColor(color);
		}else {
			//wrong color diappear, change it to body background color;
			this.style.backgroundColor = "#232323";
			//Display try again
			GoodLuck.textContent = "Try Again";
		}
	})
}


for (var i = 0; i < Boxes.length; i++) {
	//initial each box's color
	Boxes[i].style.backgroundColor = colors[i];
	
	//add event listener to each one
	Boxes[i].addEventListener("click", function(){
		//alert(this.style.backgroundColor);
		var color = this.style.backgroundColor;
		
		if(color === PickedColor) {
			//Display correct
			GoodLuck.textContent = "Correct";
			//change the header's bg color to correct color
			Header.style.backgroundColor = color;
			changeColor(color);
		}else {
			//wrong color diappear, change it to body background color;
			this.style.backgroundColor = "#232323";
			//Display try again
			GoodLuck.textContent = "Try Again";
		}
	})
}

//change all box color sam as the correct one
function changeColor(color) {
	for (var i = 0; i < Boxes.length; i++) {
		Boxes[i].style.backgroundColor = color;
	}
}

//pick up a random color
function randomColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColor(num) {
	var arr = [];
	for (var i = 0; i< num; i++) {
    var randomNum1 = Math.floor(Math.random() * 256);
  	var randomNum2 = Math.floor(Math.random() * 256);
  	var randomNum3 = Math.floor(Math.random() * 256);
    
    arr[i] = "rgb"+"(" + randomNum1 + ", " + randomNum2 + ", " + randomNum3 + ")";
	}
  	return arr;
}

//New Game

NewGame.addEventListener("click", function(){
	//initial Good Luck
	GoodLuck.textContent = "Good Luck";
	//initial Header bg color
	Header.style.backgroundColor = "#3591d0";
	//initial random color arr
	colors = generateColor(9);
	//initial picked color
	PickedColor = randomColor();
	//initial display Picked color
	DisplayColor.textContent = PickedColor;
	//initial color of boxes 
	for (var i = 0; i < Boxes.length; i++) {
		Boxes[i].style.backgroundColor = colors[i];
	}
})


