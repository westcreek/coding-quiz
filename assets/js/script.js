
var targetTime = new Date().getTime() + 120000;

var countdownElememnt = document.getElementById('countdown');

function countdown() {
    const now = new Date().getTime();
        var remainingTime = targetTime - now;

        if (remainingTime <= 0) {
          clearInterval(intervalId);
          textContent = 'Time is Up!';
          return;
        }

}

countdown();