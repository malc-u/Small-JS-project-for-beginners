//Variables
const timerDisplay = document.getElementById("timer");
const timerTwoDisplay = document.getElementById("timertwo");
let timer;
let timePassed = 0;
let timerOn = false;

//Function counting time in seconds only
function timeCount() {
    timePassed  += 1;   
    timerDisplay.innerHTML = timePassed + " seconds";    
};

//Function starting second counting
function timeStart() {
    if (!timerOn) {
    timerOn = true;
    timer = setInterval(timeCount, 1000);
    }
};

//Function stopping second counting
function timeStop() {
    clearInterval(timer);
    timerOn = false;

}

//Function resetting second counting
function timeReset() {
    clearInterval(timer);
    timerOn = false;
    timePassed = 0;
    timerDisplay.innerHTML = timePassed + " seconds";    
}

