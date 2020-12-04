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

//function converting time passed in seconds to HH:MM:SS format
function convertingSeconds(sec){
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    seconds = Math.round(seconds * 100) / 100
          
    let result = (hours < 10 ? "0" + hours : hours);
    result += ":" + (minutes < 10 ? "0" + minutes : minutes);
    result += ":" + (seconds < 10 ? "0" + seconds : seconds);
    return result;
};

