var startButton = document.getElementById("start-button");
var countdownEl = document.getElementById("countdown");//add timer to a span 


startButton.addEventListener("click", function() {
    var timeLeft = 120;
    intervalId = setInterval(
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


