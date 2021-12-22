// Select elelements by class
var counterEl = document.querySelector(".counter");
//  Select elements by id
var homerEl = document.getElementById("homer");

var questionsEl = document.getElementById("questions");

var questionTitle = document.getElementById("questionTitle");

var inputEl = document.getElementById("userInitials");

var formEl = document.getElementById("form");

var choicesEl =document.getElementById("choices");


var highscoreListEl = document.getElementById("highscore-list");

var highscorePage = document.getElementById("highscore-page");

var secondsRemaining = 60;

var questionIndex = 0;

var timerInterval;


var quizQuestions = [
  {
    question: "Which country is hosting the 2022 FIFA mens world world cup?",
    answers: ["USA","Canada","Germany","Qatar"],
    correctAnswer: "Qatar",
  },

  {
  question: "Which coutries will jointly host the 2026 FIFA mens World cup?",
  asnwers: ["USA,Canada,Mexico", "England,France, Sweden", "Ghana,Egypt,Morocco"],
  correctAnswer: "USA, Canada, Mexico",
  },

  {
  question: "Which european soccer team has won the most UEFA Champions League Titles",
  answers: ["AC Milan", "Liverpool FC", "FC Barcelona", "Real Madrid"],
  correctAnswer: "Real Madrid",
  },

  {
  question: "Which national soccer team won the last womens FIFA world cup competion?",
  answers: ["Canada","Japan","Russia","USA"],
  correctAnswer: "USA"
  }
]

// TODO:WHEN I answer a question
// TODO:THEN I am presented with another question


function gameStart () {
//hide homer container and show questions container
homerEl.setAttribute('class', 'hidden');
questionsEl.removeAttribute('class',)

    // Set timer Interval
    
    timerInterval = setInterval(function() {
        secondsRemaining--;
        counterEl.textContent = secondsRemaining + " seconds remaining ";
    
        if(secondsRemaining === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
        }
    
      }, 1000);

      counterEl.textContent = secondsRemaining + " seconds remaining ";

      displayCurrentQuestion();
  
}

function displayCurrentQuestion() {

  var currentQuestion = quizQuestions[questionIndex];

  questionTitle.textContent = currentQuestion.question;

//dynamically create buttons base on the answer choices

currentQuestion.answers.forEach(function(choice){
  var btn =  document.createElement('button');

  btn.setAttribute('value', choice);

  btn. textContent = choice
  
  btn.onclick = checkAnswers

  choicesEl.append(btn)
})

}

// Make quiz appear!!!


//check if the answer is correct. if wrong deduct time from seconds remaining
function checkAnswers(event) {
  var userAnswer = event.target.value;
  currentQuestion = quizQuestions[questionIndex];
  correctAnswer = currentQuestion["correctAnswer"];

  //createn if statment that checks if there are more questions if more questions exist ask the displayCurrentQeustion function again

//else the game is over

  if(userAnswer===correctAnswer){
    if(questionIndex===quizQuestions.length-1){
     endGame();

    }else{
      questionIndex++;
      displayCurrentQuestion();
    }

    }else {
      secondsRemaining = secondsRemaining - 5;
      document.getElementById("counter").innerHTML= secondsRemaining;
    }
  }
// console.log(this.value)



//make sure the questionIndex is increased by 1



//create a gameover function that hides the question element and displays the game over container. make sure it displays the final score 

//create a function that grabs the value of the initals and the score and save them to local storage

// TODO:WHEN I click the start button
document.getElementById("game-start").addEventListener("click", gameStart);

// 
// 
// TODO:WHEN I answer a question incorrectly
// TODO:THEN time is subtracted from the clock
// TODO:WHEN all questions are answered or the timer reaches 0
// TODO:THEN the game is over
// TODO:WHEN the game is over
// TODO:THEN I can save my initials and my score

