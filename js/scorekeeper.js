var Display1 = document.getElementById("display1");
var Display2 = document.getElementById("display2");

var Player1 = document.getElementById("p1");
var Player2 = document.getElementById("p2");

var Reset = document.getElementById("reset");
var Input = document.querySelector("input");
var Goal = document.querySelector("p span");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;

Input.addEventListener("change", function(){
	Goal.textContent = Input.value;
})

Player1.addEventListener("click", added1);
Player2.addEventListener("click", added2);

function added1() {
	if (!gameOver){
		p1Score++;
		Display1.innerHTML = p1Score;
		if (Display1.innerHTML == Goal.textContent ) {
			gameOver = true;
			Display1.style.color = "green";
		}
		
	}
}

function added2() {
	if (!gameOver) {
		p2Score++;
		Display2.innerHTML = p2Score;
		if(Display2.innerHTML == Goal.textContent) {
			gameOver = true;
			Display2.style.color = "green";
		}
	}
}

Reset.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	
	Display1.innerHTML = p1Score;
	Display2.innerHTML = p2Score;
	
	Display1.style.color = "black";
	Display2.style.color = "black";
	
	gameOver = false; //restart game~
});















































/*
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
*/