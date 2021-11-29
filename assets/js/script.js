// Select elelements by class
var counterEl = document.querySelector(".counter");
//  Select elements by id
var homerEl = document.getElementById("homer");

var secondsRemaining = 120;

function setTime() {
// Set timer Interval

var timerInterval = setInterval(function() {
    secondsRemaining--;
    counterEl.textContent = secondsRemaining + " seconds remaining ";

    if(secondsRemaining === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to ask questions
      sendMessage();
    }

  }, 1000);
}
  setTime();
  
// var questionsEl = document.getElementById("questions");

// var inputEl = document.getElementById("input-initials");

// var formEl = document.getElementById("form");

// var highscoresEl = document.getElementById("highscores");

// var highscoreListEl = document.getElementById("highscore-list");

// var highscorePage = document.getElementById("highscore-page");