// Select elelements by class
var counterEl = document.querySelector(".counter");
//  Select elements by id
var homerEl = document.getElementById("homer");

var questionsEl = document.getElementById("questions");

var inputEl = document.getElementById("input-initials");

var formEl = document.getElementById("form");

var highscoresEl = document.getElementById("highscores");

var highscoreListEl = document.getElementById("highscore-list");

var highscorePage = document.getElementById("highscore-page");

var secondsRemaining = 60;


var questions = [
  {
    question: "Which country is hosting the 2022 FIFA mens world world cup?",
    answers: ["USA","Canada","Germany","Qatar"],
    correctAswer: "Qatar",
  },

  {
  question: "Which coutries will jointly hosting the 2026 FIFA mens World cup?",
  asnwers: ["USA,Canada,Mexico", "England,France, Sweden", "Ghana,Egypt,Morocco"],
  correctAswer: "USA, Canada, Mexico",
  },

  {
  question: "Which european soccer team has won most UEFA Champon League Titles",
  answers: ["AC Milan", "Liverpool FC", "FC Barcelona", "Real Madrid"],
  correctAswer: "Real Madrid",
  },

  {
  question: "Which national soccer team won the last womens FIFA world cup competion?",
  answers: ["Canada","Japan","Russia","USA"],
  correctAswer: "USA"
  }
]

// TODO:WHEN I answer a question
// TODO:THEN I am presented with another question


// TODO:WHEN I click the start button
document.getElementById("game-start").addEventListener("click", gameStart);


function gameStart () {
    // Set timer Interval
    
    var timerInterval = setInterval(function() {
        secondsRemaining--;
        counterEl.textContent = secondsRemaining + " seconds remaining ";
    
        if(secondsRemaining === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
        }
    
      }, 1000);

      for (let index=0; index<; index++)
}

// 
// 
// TODO:WHEN I answer a question incorrectly
// TODO:THEN time is subtracted from the clock
// TODO:WHEN all questions are answered or the timer reaches 0
// TODO:THEN the game is over
// TODO:WHEN the game is over
// TODO:THEN I can save my initials and my score

