var startButton = document.querySelector(".start-button");
var countdownEl = document.querySelector(".large-font timer-count");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");

var words = []

//start with a button, add an event listener.
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
});



//pass what event looking for
//call back function so timer begins

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