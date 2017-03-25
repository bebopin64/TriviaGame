var intervalId;
var counter = 0;
var score = 0;
var questionIndex = 0;
var index = 0;
var playAgain = true;
var trivia = [
	{q: "<h1>What is Will's middle name? </h1>",
	a1: "<h2 class='wrong' style='cursor: pointer;'>1. Emory</h2>",
	a2: "<h2 class='right' style='cursor: pointer;'>2. Bruce</h2>",
	a3: "<h2 class='wrong' style='cursor: pointer;'>3. Jonathon</h2>",
	r: "Correct!  His full name is William Bruce Garlick",
	w: "No, you idiot, it's Bruce."},

	{q: "<h1>What is will's favorite NBA team?</h1>",
	a1: "<h2 class='right' style='cursor: pointer;'>1. The Spurs</h2>",
	a2: "<h2 class='wrong' style='cursor: pointer;'>2. The Mavericks</h2>",
	a3: "<h2 class='wrong' style='cursor: pointer;'>3. The Heat</h2>",
	r: "Yup, he likes The Spurs because they're obviously the best.",
	w: "They suck.  The answer is obviously The Spurs."},

	{q: "<h1>What was the make of Will's first car?</h1>",
	a1: "<h2 class='wrong' style='cursor: pointer;'>1. Volkswagen</h2>",
	a2: "<h2 class='right' style='cursor: pointer;'>2. Mitsubishi</h2>",
	a3: "<h2 class='wrong' style='cursor: pointer;'>3. BMW</h2>",
	r: "Huzzah, you got it right!",
	w: "Uh no.  Will's parents were way to cheap to buy him a German car. Do you even know anything?"},

	{q: "<h1>What's Will's favorite color?</h1>",
	a1: "<h2 class='wrong' style='cursor: pointer;'>1. Red</h2>",
	a2: "<h2 class='wrong' style='cursor: pointer;'>2. Green</h2>",
	a3: "<h2 class='wrong' style='cursor: pointer;'>3. Purple</h2>",
	r: "nobody can get this right",
	w: "He doesn't have a favorite color you dumb idiot."},

	{q: "<h1>Where would Will rather vacation?</h1>",
	a1: "<h2 class='wrong' style='cursor: pointer;'>1. Monaco, because he's a classy fuck.</h2>",
	a2: "<h2 class='wrong' style='cursor: pointer;'>2. Cancun, because he loves partying and skin cancer.</h2>",
	a3: "<h2 class='right' style='cursor: pointer;'>3. Rocky Mountains, because he shreds some mean gnar-gnar.</h2>",
	r: "Lucky guess...",
	w: "While he is classy and does love to party, Will prefers to take his rare vacations getting a little snowboarding in."},

	{q: "<h1>If you're playing this dumb game, does that also make you dumb?</h1>",
	a1: "<h2 class='right' style='cursor: pointer;'>1. Yes</h2>",
	a2: "<h2 class='right' style='cursor: pointer;'>2. Yes</h2>",
	a3: "<h2 class='right' style='cursor: pointer;'>3. Yes</h2>",
	r: "Thanks for playing, dummy!",
	w: "Thanks for playing, dummy!"}
];

var timer = {
  time: 30,

  reset: function() {
    timer.time = 30;
    $("#timeRemaining").html("30");
  },

  start: function() {
    intervalId = setInterval(timer.count, 1000);
  },

  stop: function() {
    clearInterval(intervalId);
  },

  count: function() {
    timer.time--;
    $("#timeRemaining").html(+timer.time);
    if (timer.time === -1) {
    	alert("You ran out of time. How the fuck do you run out of time? You had 30 whole seconds!")
		index++;
		counter++;
		newQuestion();
    }
  }
};

function reset() {
	playAgain = confirm("Do you want to play again?");
	if (playAgain === false) {
		setTimeout(function() {timer.stop();}, 50);
		document.write("<h1 style='text-align: center; margin-top:250px;'>You're dead to me</h1>");
	}
	counter = 0;
	score = 0;
	questionIndex = 0;
	index = 0;
	$("#questionId").append(trivia[0].q);
	$("#answerId").append(trivia[0].a1);
	$("#answerId").append(trivia[0].a2);
	$("#answerId").append(trivia[0].a3);
	timer.reset();
	timer.start();
}

function questionRight() {
	timer.reset();
	score++;
	$("#questionId").empty();
	$("#answerId").empty();
	$("#questionId").append("<h1>"+trivia[index].r+"</h1>");
	index++;
	counter++;
	setTimeout(function() {newQuestion();}, 2500);
}

function questionWrong() {
	timer.reset();
	$("#questionId").empty();
	$("#answerId").empty();
	$("#questionId").append("<h1>"+trivia[index].w+"</h1>");
	index++;
	counter++;
	setTimeout(function() {newQuestion();}, 2500);
}

function newQuestion() {
	if(index === 6) {
		timer.stop();
		setTimeout(function() {$("#questionId").html("<h1>You got " + score + " right.</h1>");}, 10);
		setTimeout(function() {reset();}, 5000);
	}
	timer.reset();
	$("#questionId").empty();
	$("#answerId").empty();
	$("#questionId").append(trivia[index].q);
	$("#answerId").append(trivia[index].a1);
	$("#answerId").append(trivia[index].a2);
	$("#answerId").append(trivia[index].a3);
}

window.onload = function() {
	$(document).on("click", ".right", questionRight);
	$(document).on("click", ".wrong", questionWrong);
};

$("#questionId").append(trivia[0].q);
$("#answerId").append(trivia[0].a1);
$("#answerId").append(trivia[0].a2);
$("#answerId").append(trivia[0].a3);
// timer.start();