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
var highScores = JSON.parse(localStorage.getItem("highScores"));
var quizBox = document.getElementById("quiz");
var secondsRemaining = 60;
var questionIndex = 0;
var timerInterval;
var correctAnswer;
var index = 0;


var quizQuestions = [
  {
    question: "Which country is hosting the 2022 FIFA mens world world cup?",
    answers: {
              1:"USA",
              2:"Canada",
              3:"Germany",
              4:"Qatar"
  },
    correctAnswer:"4",
  },
{
  question: "Which coutries will jointly host the 2026 FIFA mens World cup?",
  asnwers: {
           1:"USA,Canada,Mexico",
           2:"England,France, Sweden", 
           3:"Ghana,Egypt,Morocco"
  },
  correctAnswer: "3",
  },

  {
  question: "Which European soccer team has won the most UEFA Champions League Titles",
  answers:{
           1:"AC Milan", 
           2:"Liverpool FC", 
           3:"FC Barcelona", 
           4:"Real Madrid"
  },
  correctAnswer: "4",
  },

  {
  question: "Which national soccer team won the last womens FIFA world cup competion?",
  answers:{
           1:"Canada",
           2:"Japan",
           3:"Russia",
           4:"USA"
  },
  correctAnswer: "4",
  },
]

// TODO:WHEN I answer a question
// TODO:THEN I am presented with another question

// Make quiz appear!!!
function makeQuiz() {
  quizBox.style.display = "block";
  var currentQuestion = quizQuestions[questionIndex];
  correctAnswer = currentQuestion.correctAnswer;
  displayCurrentQuestion();
}

//Displays current question and answer options
function displayCurrentQuestion() {
  quizBox.innerHTML = "";
  var currentQuestion = quizQuestions[questionIndex];
  //Finds correct answer for question
  correctAnswer = currentQuestion["correctAnswer"];
  var questionEl = document.createElement("questions");
  questionEl.textContent = currentQuestion.question;
  quizBox.appendChild(questionEl);
  var answerKeys = Object.keys(currentQuestion["answers"]);

  for (var i=0; i < answerKeys.length; i++) {        
      var currentKey = answerKeys[index];
      var buttonText = currentQuestion["answers"][currentKey];
      var answer = document.createElement("button");
      answer.classList.add("options-button");
      answer.value = currentKey;
      answer.innerHTML = buttonText;
      quizBox.appendChild(answer);
      answer.addEventListener("click", chooseAnswer);
  }
}

//check if the answer is correct. if wrong deduct time from seconds remaining
function checkAnswers(event) {
  var userAnswer = event.target.value;
  currentQuestion = quizQuestions[questionIndex];
  correctAnswer = currentQuestion["correctAnswer"];

  if(userAnswer===correctAnswer){
    
    if(questionIndex===quizQuestions.length - 1){
     endGame();

    }else{
      questionIndex++;
      displayCurrentQuestion();

        //if the user answers incorrectly, five seconds are deducted from the timer and score
    }
    }else {
    count = count - 5;
    document.querySelector("counter").innerHTML = count;
  }

}


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

      // counterEl.textContent = secondsRemaining + " seconds remaining ";

      displayCurrentQuestion();
  
}













//else the game is over
// console.log(this.value)

//createn if statment that checks if there are more questions if more questions exist ask the displayCurrentQeustion function again



//make sure the questionIndex is increased by 1



//create a gameover function that hides the question element and displays the game over container. make sure it displays the final score 

//create a function that grabs the value of the initals and the score and save them to local storage

// TODO:WHEN I click the start button
document.getElementById("game-start").addEventListener("click", gameStart);

// 
// 
// 
// TODO:WHEN all questions are answered or the timer reaches 0
// TODO:THEN the game is over
// TODO:WHEN the game is over
// TODO:THEN I can save my initials and my score



