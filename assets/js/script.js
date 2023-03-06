var startButton = document.querySelector(".start-button");
var countdownEl = document.querySelector(".large-font timer-count");
var score = document.querySelector(".score");

var quiz = [];
var scoreCounter = 0;
var initials = "";
var timer;
var timerCount;

//Array of questions in the quiz 
var questions = ["",""];
var answerChoices = ["",""];

//initialize the quiz on page load
// The init function is called when the page loads 
function init() {
    getScore();
  }

  function getScore() {
    // Get stored value from client storage, if it exists
    var storedScore = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }

  function startGame() {
    timerCount = 60;
    renderQuiz()
    startTimer()
  }

//start with a button, add an event listener.
startButton.addEventListener("click", startGame) {
   
});


function winGame() {
    wordBlank.textContent = "YOU WON!!!🏆 ";
    scoreCounter++
    setWins()
  }
  
  // The loseGame function is called when timer reaches 0
  function timeUp() {
    wordBlank.textContent = "Time's Up!";
    timerCount == 0;
    startButton.disabled = false;
    setLosses()
  }



//pass what event looking for

//call back function so timer begins
// Starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }


  // Renders Questions on screen
function renderQuiz() {
    // Randomly picks questions from array
    quiz = questions[Math.floor(Math.random() * questions.length)];
    questionAnswers = quiz.split("");
    answerChoices = []
    // Loop to push answers to answerChoices array
    for (var i = 0; i < numBlanks; i++) {
      blanksLetters.push("_");
    }
    // Converts blankLetters array into a string and renders it on the screen
    wordBlank.textContent = blanksLetters.join(" ")
  }
  
  // Updates win count on screen and sets win count to client storage
  function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
  }


//next get users input to get user input

var resetButton = document.querySelector(".reset-button");
//can put console.log to see if things are working

function resetGame() {
    // Resets win and loss counts
    winCounter = 0;
    loseCounter = 0;
    // Renders win and loss counts and sets them into client storage
    setWins()
    setLosses()
  }
  // Attaches event listener to button
  resetButton.addEventListener("click", resetGame);



































/* var startButton = document.querySelector(".start-button");
var countdownEl = document.querySelector(".large-font timer-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");

var words = []

startButton.addEventListener("click", function() {
    var timeLeft = 120;
    var intervalId = setInterval(
        function() {
            timeLeft -= 1;
            countdownEl.textContent = timeLeft;
            if (timeLeft <= 0) {
                clearInterval(intervalId);
            }
        },
        1000
    );
}); */